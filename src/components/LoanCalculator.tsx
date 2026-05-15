"use client";

import { useState, useMemo } from "react";
import { siteConfig } from "@/data/site-config";

/**
 * Commercial mortgage calculator with inline lead capture.
 *
 * Model:
 *   propertyValue = user input
 *   ltv           = user input (typical 65-75% for CM)
 *   loanAmount    = propertyValue * (ltv / 100)
 *   termYears     = user input (typical 5-25)
 *   annualRate    = user input (typical 6.0-9.0% pa as of mid-2026)
 *   repaymentType = "repayment" | "interest-only"
 *
 * Repayment monthly:  P * (r * (1+r)^n) / ((1+r)^n - 1)   where r = monthly rate, n = months
 * Interest-only:      loanAmount * annualRate / 12
 * Total interest:     monthly * months - loanAmount  (repayment)  OR  monthly * months  (IO)
 *
 * On submit, POSTs to /api/leads with the modelled figures so the lead
 * arriving in Resend (and later GHL) carries the user's deal context.
 */

const DEFAULT_RATE = 0.075;
const DEFAULT_LTV = 70;
const DEFAULT_TERM_YEARS = 15;

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);
}

interface SliderRowProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  onChange: (v: number) => void;
}

function SliderRow({ label, value, min, max, step, format, onChange }: SliderRowProps) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-sm font-medium text-[color:var(--color-ink-soft)]">
          {label}
        </label>
        <span className="fig text-base font-medium text-[color:var(--color-ink)]">
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full"
      />
    </div>
  );
}

export function LoanCalculator() {
  const [propertyValue, setPropertyValue] = useState(1_500_000);
  const [ltv, setLtv] = useState(DEFAULT_LTV);
  const [termYears, setTermYears] = useState(DEFAULT_TERM_YEARS);
  const [annualRatePct, setAnnualRatePct] = useState(DEFAULT_RATE * 100);
  const [repaymentType, setRepaymentType] = useState<"repayment" | "interest-only">("repayment");

  // Lead form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    loanAmount,
    monthlyPayment,
    totalInterest,
    totalPayable,
  } = useMemo(() => {
    const loanAmount = propertyValue * (ltv / 100);
    const annualRate = annualRatePct / 100;
    const monthlyRate = annualRate / 12;
    const months = termYears * 12;
    let monthlyPayment = 0;
    if (repaymentType === "interest-only") {
      monthlyPayment = loanAmount * monthlyRate;
    } else {
      // Standard amortising repayment formula
      if (monthlyRate === 0) {
        monthlyPayment = loanAmount / months;
      } else {
        const factor = Math.pow(1 + monthlyRate, months);
        monthlyPayment = (loanAmount * monthlyRate * factor) / (factor - 1);
      }
    }
    const totalPayable = monthlyPayment * months;
    const totalInterest =
      repaymentType === "interest-only"
        ? totalPayable
        : Math.max(totalPayable - loanAmount, 0);
    return {
      loanAmount,
      monthlyPayment,
      totalInterest,
      totalPayable,
    };
  }, [propertyValue, ltv, termYears, annualRatePct, repaymentType]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);

    const calcSummary = [
      `Property value: ${formatCurrency(propertyValue)}`,
      `LTV: ${ltv}%`,
      `Loan amount: ${formatCurrency(loanAmount)}`,
      `Term: ${termYears} years`,
      `Rate: ${annualRatePct.toFixed(2)}% pa`,
      `Repayment type: ${repaymentType === "interest-only" ? "Interest-only" : "Capital + interest"}`,
      `Monthly payment: ${formatCurrency(monthlyPayment)}`,
      `Total interest: ${formatCurrency(totalInterest)}`,
    ].join(" · ");

    const fullMessage = message
      ? `${message}\n\n--- Calculator context ---\n${calcSummary}`
      : `--- Calculator context ---\n${calcSummary}`;

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "calculator",
          fullName: name,
          email,
          phone,
          loanAmount: String(Math.round(loanAmount)),
          propertyValue: String(propertyValue),
          serviceType: repaymentType,
          message: fullMessage,
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setSubmitted(true);
    } catch (err) {
      console.error("Calculator lead submit failed:", err);
      setError(
        "Something went wrong sending your enquiry. Please try again or call us directly.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="grid gap-6 rounded-lg border border-[color:var(--color-rule)] bg-[color:var(--color-white)] p-6 md:p-8 lg:grid-cols-[1fr_1fr]">
      {/* Inputs */}
      <div className="space-y-6">
        <div>
          <p className="eyebrow">Mortgage inputs</p>
          <p className="mt-3 font-editorial text-xl text-[color:var(--color-ink)]">
            Drag the sliders.
          </p>
        </div>
        <SliderRow
          label="Property value"
          value={propertyValue}
          min={150_000}
          max={10_000_000}
          step={25_000}
          format={formatCurrency}
          onChange={setPropertyValue}
        />
        <SliderRow
          label="Loan-to-value (LTV)"
          value={ltv}
          min={50}
          max={75}
          step={1}
          format={(v) => `${v}%`}
          onChange={setLtv}
        />
        <SliderRow
          label="Term"
          value={termYears}
          min={5}
          max={25}
          step={1}
          format={(v) => `${v} years`}
          onChange={setTermYears}
        />
        <SliderRow
          label="Indicative annual rate"
          value={annualRatePct}
          min={6}
          max={9}
          step={0.1}
          format={(v) => `${v.toFixed(1)}% pa`}
          onChange={setAnnualRatePct}
        />

        <div>
          <label className="text-sm font-medium text-[color:var(--color-ink-soft)]">
            Repayment type
          </label>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setRepaymentType("repayment")}
              className={`rounded-sm border px-3 py-2 text-sm transition ${
                repaymentType === "repayment"
                  ? "border-[color:var(--color-accent)] bg-[color:var(--color-accent-soft)] text-[color:var(--color-ink)]"
                  : "border-[color:var(--color-rule)] text-[color:var(--color-muted)] hover:border-[color:var(--color-ink)]"
              }`}
            >
              Capital + interest
            </button>
            <button
              type="button"
              onClick={() => setRepaymentType("interest-only")}
              className={`rounded-sm border px-3 py-2 text-sm transition ${
                repaymentType === "interest-only"
                  ? "border-[color:var(--color-accent)] bg-[color:var(--color-accent-soft)] text-[color:var(--color-ink)]"
                  : "border-[color:var(--color-rule)] text-[color:var(--color-muted)] hover:border-[color:var(--color-ink)]"
              }`}
            >
              Interest-only
            </button>
          </div>
        </div>
      </div>

      {/* Results + lead form */}
      <div className="flex flex-col justify-between rounded-md bg-[color:var(--color-ink)] p-6 text-[color:var(--color-paper)] md:p-8">
        <div>
          <p className="font-mono text-[0.62rem] uppercase tracking-widest text-[color:var(--color-paper)]/60">
            Based on {siteConfig.locationName} commercial mortgage market
          </p>
          <p className="mt-2 font-editorial text-2xl">Your estimate</p>

          <div className="mt-6 border-b border-[color:var(--color-paper)]/15 pb-5">
            <p className="font-mono text-[0.62rem] uppercase tracking-widest text-[color:var(--color-paper)]/60">
              Estimated monthly payment
            </p>
            <p
              className="mt-2 font-mono text-4xl font-medium leading-none md:text-[2.6rem]"
              style={{ color: "var(--color-accent)" }}
            >
              {formatCurrency(monthlyPayment)}
            </p>
            <p className="mt-2 text-xs text-[color:var(--color-paper)]/55">
              {repaymentType === "interest-only"
                ? "Interest-only, capital repaid at end of term."
                : `Capital + interest over ${termYears} years.`}
            </p>
          </div>

          <dl className="mt-5 grid grid-cols-2 gap-y-4">
            <Row label="Loan amount" value={formatCurrency(loanAmount)} />
            <Row label="Loan-to-value" value={`${ltv}%`} />
            <Row label="Annual rate" value={`${annualRatePct.toFixed(1)}% pa`} />
            <Row label="Term" value={`${termYears} years`} />
            <Row label="Total interest" value={formatCurrency(totalInterest)} />
            <Row label="Total payable" value={formatCurrency(totalPayable)} />
          </dl>

          <p className="mt-5 rounded-sm border border-[color:var(--color-paper)]/15 bg-[color:var(--color-paper)]/5 p-3 text-xs leading-relaxed text-[color:var(--color-paper)]/70">
            Indicative only. Actual rate and LTV depend on the asset, your trading
            history (for owner-occupier) or rental cover (for investment), and live
            lender appetite. Send your details for a tailored quote.
          </p>
        </div>

        {/* Lead form */}
        <div className="mt-8 border-t border-[color:var(--color-paper)]/15 pt-6">
          {submitted ? (
            <div className="text-center">
              <p className="font-editorial text-xl text-[color:var(--color-accent)]">
                Thanks &mdash; we&rsquo;ll be in touch within 48 hours.
              </p>
              <p className="mt-2 text-xs text-[color:var(--color-paper)]/60">
                Your modelled figures have been sent through with your enquiry.
                If it&rsquo;s urgent, call {siteConfig.phone}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="font-mono text-[0.62rem] uppercase tracking-widest text-[color:var(--color-paper)]/60">
                Get tailored terms for these numbers
              </p>
              <p className="text-sm text-[color:var(--color-paper)]/75">
                Leave your details and we&rsquo;ll come back with indicative terms
                from our lender panel within 48 hours, alongside the modelled
                figures from the calculator above.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1">
                  <label
                    htmlFor="calc-name"
                    className="block text-xs font-semibold text-[color:var(--color-paper)]"
                  >
                    Full name
                  </label>
                  <input
                    id="calc-name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Jane Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-sm border border-[color:var(--color-paper)]/30 bg-[color:var(--color-paper)]/10 px-3 py-2 text-sm text-[color:var(--color-paper)] placeholder:text-[color:var(--color-paper)]/45 focus:border-[color:var(--color-accent)] focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="calc-phone"
                    className="block text-xs font-semibold text-[color:var(--color-paper)]"
                  >
                    Phone
                  </label>
                  <input
                    id="calc-phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="07700 900000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-sm border border-[color:var(--color-paper)]/30 bg-[color:var(--color-paper)]/10 px-3 py-2 text-sm text-[color:var(--color-paper)] placeholder:text-[color:var(--color-paper)]/45 focus:border-[color:var(--color-accent)] focus:outline-none"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="calc-email"
                  className="block text-xs font-semibold text-[color:var(--color-paper)]"
                >
                  Email address
                </label>
                <input
                  id="calc-email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-sm border border-[color:var(--color-paper)]/30 bg-[color:var(--color-paper)]/10 px-3 py-2 text-sm text-[color:var(--color-paper)] placeholder:text-[color:var(--color-paper)]/45 focus:border-[color:var(--color-accent)] focus:outline-none"
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="calc-message"
                  className="block text-xs font-semibold text-[color:var(--color-paper)]"
                >
                  Anything we should know? <span className="font-normal text-[color:var(--color-paper)]/55">(optional)</span>
                </label>
                <textarea
                  id="calc-message"
                  placeholder="e.g. trading history, current lender, refinance vs purchase, target completion"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-sm border border-[color:var(--color-paper)]/30 bg-[color:var(--color-paper)]/10 px-3 py-2 text-sm text-[color:var(--color-paper)] placeholder:text-[color:var(--color-paper)]/45 focus:border-[color:var(--color-accent)] focus:outline-none"
                />
              </div>
              {error && (
                <p className="text-xs text-red-300">{error}</p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="btn btn-accent w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Send me indicative terms"}
              </button>
              <p className="text-center text-[0.65rem] text-[color:var(--color-paper)]/55">
                Your modelled property value, LTV, term and rate are attached automatically. Indicative only &mdash; actual terms depend on asset specifics and live lender appetite.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <>
      <dt className="text-xs text-[color:var(--color-paper)]/65">{label}</dt>
      <dd className="fig text-right text-sm text-[color:var(--color-paper)]">
        {value}
      </dd>
    </>
  );
}
