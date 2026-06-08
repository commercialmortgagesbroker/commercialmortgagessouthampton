"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";

const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

export function LeadCaptureForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  // Tracks whether the early "contact-only" lead has already been sent, so we
  // never fire it twice if the visitor steps back and forward again.
  const [partialSent, setPartialSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    loanAmount: "750000",
    propertyType: "owner-occupier-commercial",
    dealType: "purchase",
    location: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const goToStep = (newStep: number) => {
    setTransitioning(true);
    setTimeout(() => {
      setStep(newStep);
      setTransitioning(false);
    }, 200);
  };

  // Fire-and-forget early capture: the moment we have valid contact details we
  // save the lead, so an abandoned step 2 still leaves us a usable enquiry.
  // Deliberately non-blocking — the UI advances immediately; only the console
  // records a failure (the full submit on step 2 is the user-facing path).
  const capturePartialLead = async () => {
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: `${siteConfig.ghlSource} — PARTIAL (contact only)`,
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          message:
            "Partial submission — visitor provided contact details but has not yet completed the deal details. Follow up.",
          postcode: "",
        }),
      });
      const payload = await res.json().catch(() => null);
      if (!res.ok || !payload?.success) {
        console.error("[lead-form] partial capture failed", {
          status: res.status,
          payload,
        });
      } else {
        console.info(
          "[lead-form] partial capture saved",
          payload?.diagnostics ?? payload
        );
      }
    } catch (err) {
      console.error("[lead-form] partial capture network error:", err);
    }
  };

  const handleContinue = () => {
    // Validate the essentials before advancing — these inputs sit in step 1, so
    // the native form-submit validation never runs for the "Continue" button.
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError("Please enter your name, email and phone number to continue.");
      return;
    }
    if (!isValidEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);

    // Save the contact-only lead once, in the background, then move on.
    if (!partialSent) {
      setPartialSent(true);
      void capturePartialLead();
    }

    goToStep(2);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setTransitioning(true);
    // Read from controlled component state, not a FormData snapshot of the form:
    // step-1 inputs are unmounted once we are on step 2, so a snapshot would
    // drop the contact details. `formData` retains every value across steps.
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: siteConfig.ghlSource,
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          loanAmount: formData.loanAmount,
          serviceType: formData.propertyType,
          area: formData.location,
          message: formData.description,
          exitStrategy: formData.dealType,
          postcode: "",
        }),
      });

      // Always read the body so server diagnostics surface in the browser console.
      const payload = await res.json().catch(() => null);
      if (!res.ok || !payload?.success) {
        console.error("[lead-form] submission failed", {
          status: res.status,
          ok: res.ok,
          payload,
        });
        setError(
          "Sorry, something went wrong sending your enquiry. Please call us or try again."
        );
        setTransitioning(false);
        return;
      }
      console.info(
        "[lead-form] submission succeeded",
        payload?.diagnostics ?? payload
      );
    } catch (err) {
      console.error("[lead-form] network/exception during submission:", err);
      setError(
        "Sorry, something went wrong sending your enquiry. Please call us or try again."
      );
      setTransitioning(false);
      return;
    }
    setSubmitted(true);
  };

  const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;

  if (submitted) {
    return (
      <div
        className="rounded-2xl border border-[color:var(--color-rule)] bg-white p-8 text-center"
        style={{ animation: "scaleIn 0.4s ease-out" }}
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--color-accent-soft)]">
          <svg
            className="h-8 w-8"
            style={{ color: "var(--color-accent)" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-editorial text-2xl text-[color:var(--color-ink)]">
          Thank you.
        </h3>
        <p className="mt-2 text-[color:var(--color-muted)]">
          We&apos;ve received your enquiry and will respond within two hours
          during business hours. A member of our {siteConfig.locationName} team
          will be in touch shortly.
        </p>
        <p className="mt-4 text-sm text-[color:var(--color-muted)]">
          Need to speak to someone urgently? Call{" "}
          <a href={phoneHref} className="font-semibold text-[color:var(--color-accent)]">
            {siteConfig.phone}
          </a>
          .
        </p>
        <Link href="/services" className="btn btn-accent mt-6 inline-block">
          Explore Our Services
        </Link>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-[color:var(--color-rule)] px-4 py-3 text-[color:var(--color-ink)] transition-all duration-200 focus:border-[color:var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent)]/20 hover:border-[color:var(--color-muted)]";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-[color:var(--color-rule)] bg-white p-6 shadow-sm md:p-8"
    >
      {/* Progress */}
      <div className="mb-8 flex items-center justify-center gap-4">
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
            step >= 1
              ? "bg-[color:var(--color-accent)] text-white shadow-md"
              : "bg-[color:var(--color-rule)] text-[color:var(--color-muted)]"
          }`}
        >
          1
        </div>
        <div className="relative h-1 w-16 overflow-hidden rounded bg-[color:var(--color-rule)]">
          <div
            className={`absolute inset-y-0 left-0 rounded bg-[color:var(--color-accent)] transition-all duration-500 ${
              step >= 2 ? "w-full" : "w-0"
            }`}
          />
        </div>
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
            step >= 2
              ? "bg-[color:var(--color-accent)] text-white shadow-md"
              : "bg-[color:var(--color-rule)] text-[color:var(--color-muted)]"
          }`}
        >
          2
        </div>
      </div>

      <div
        className={`transition-all duration-200 ${
          transitioning ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        {step === 1 && (
          <div className="space-y-5">
            <h3 className="font-editorial text-xl text-[color:var(--color-ink)]">
              Your contact details
            </h3>
            <p className="text-sm text-[color:var(--color-muted)]">
              Leave your details and we&apos;ll be in touch — even if you only
              get this far, we&apos;ll follow up.
            </p>

            <div>
              <label className="mb-1 block text-sm font-semibold text-[color:var(--color-ink)]">
                Full name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-[color:var(--color-ink)]">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-[color:var(--color-ink)]">
                Phone number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            {error && (
              <p
                role="alert"
                className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {error}
              </p>
            )}

            <button
              type="button"
              onClick={handleContinue}
              className="btn btn-accent w-full"
            >
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5">
            <h3 className="font-editorial text-xl text-[color:var(--color-ink)]">
              Tell us about your deal
            </h3>

            <div>
              <label className="mb-1 block text-sm font-semibold text-[color:var(--color-ink)]">
                Loan amount required
              </label>
              <select
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="250000">Up to &pound;250,000</option>
                <option value="500000">&pound;250,000 &ndash; &pound;500,000</option>
                <option value="750000">&pound;500,000 &ndash; &pound;1,000,000</option>
                <option value="2500000">&pound;1,000,000 &ndash; &pound;2,500,000</option>
                <option value="5000000">&pound;2,500,000 &ndash; &pound;5,000,000</option>
                <option value="10000000">&pound;5,000,000+</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-[color:var(--color-ink)]">
                Property type
              </label>
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="owner-occupier-commercial">Owner-occupier commercial</option>
                <option value="commercial-investment">Commercial investment</option>
                <option value="semi-commercial">Semi-commercial / mixed-use</option>
                <option value="hmo-block">HMO / block</option>
                <option value="trading-business">Trading business (pub, hotel, care home, etc.)</option>
                <option value="portfolio">Portfolio refinance</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-[color:var(--color-ink)]">
                Deal type
              </label>
              <select
                name="dealType"
                value={formData.dealType}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="purchase">Purchase</option>
                <option value="refinance">Refinance / remortgage</option>
                <option value="capital-raise">Capital raise on existing</option>
                <option value="bridge-to-term">Bridge to term</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-[color:var(--color-ink)]">
                Property location (postcode or area)
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. SO14, Ocean Village, Bedford Place"
                className={`${inputClass} placeholder-[color:var(--color-muted)]`}
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-[color:var(--color-ink)]">
                Brief description (optional)
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
                placeholder="Anything we should know? Timing, lender already approached, current rate, etc."
                className={inputClass}
              />
            </div>

            {error && (
              <p
                role="alert"
                className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {error}
              </p>
            )}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => goToStep(1)}
                className="btn btn-ghost flex-1"
              >
                Back
              </button>
              <button type="submit" className="btn btn-accent flex-1">
                Submit enquiry
              </button>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
