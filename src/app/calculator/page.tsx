import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchemaInjector } from "@/components/SchemaInjector";
import { ScrollReveal } from "@/components/ScrollReveal";
import { LoanCalculator } from "@/components/LoanCalculator";
import { PropertyCalculatorsEmbed } from "@/components/PropertyCalculatorsEmbed";
import { generateWebApplicationSchema, generateFAQSchema } from "@/lib/schema";
import { siteConfig } from "@/data/site-config";

const loc = siteConfig.locationName;
const domain = siteConfig.domain;

export const metadata: Metadata = {
  title: `Commercial Mortgage Calculator ${loc} | Estimate Monthly Payments`,
  description: `${loc} commercial mortgage calculator. Estimate monthly payment, total interest and LTV for owner-occupier, investment and semi-commercial mortgages. Indicative rates 6.0-9.0% pa.`,
  alternates: {
    canonical: `https://${domain}/calculator`,
  },
};

export default function CalculatorPage() {
  return (
    <>
      <SchemaInjector
        schema={generateWebApplicationSchema(
          `${loc} Commercial Mortgage Calculator`,
          `Free commercial mortgage calculator for ${loc} property investors, owner-occupier businesses and trading operators. Estimate monthly payments, total interest and LTV.`,
          `https://${domain}/calculator`,
        )}
      />
      <SchemaInjector
        schema={generateFAQSchema([
          {
            question: "How accurate is this commercial mortgage calculator?",
            answer: `This calculator provides indicative monthly payment and interest estimates based on standard ${loc} commercial mortgage parameters. Actual rates depend on the asset class, your trading history (for owner-occupier) or rental cover (for investment), and live lender appetite. Contact us for a tailored quote from our 90+ lender panel including Shawbrook, InterBay Commercial, LendInvest, Cynergy Bank, Lloyds, NatWest, Barclays and Santander.`,
          },
          {
            question: `What LTV can I get on a ${loc} commercial mortgage?`,
            answer: `Most ${loc} commercial mortgage lenders offer LTVs of 65-75% for standard owner-occupier and investment deals. Semi-commercial and mixed-use can reach 75%; trading-business mortgages (pubs, hotels, care homes) typically cap at 60-70%. The exact LTV depends on the asset, the lease, and the borrower covenant.`,
          },
          {
            question: "What's a typical commercial mortgage rate in 2026?",
            answer: `${loc} commercial mortgage rates currently sit at 6.0-9.0% pa for standard cases. High-street banks (Lloyds, NatWest, Barclays, Santander) sit at the lower end for prime owner-occupier; specialist lenders (Shawbrook, InterBay, Cynergy) cover semi-commercial, HMO blocks and trickier covenants at 7.0-9.0%. Margins have come in materially through 2026 as the BoE base rate eased.`,
          },
        ])}
      />
      <Breadcrumbs items={[{ label: "Calculator", href: "/calculator" }]} />

      {/* Hero */}
      <section className="relative bg-[color:var(--color-ink)] py-20 text-[color:var(--color-paper)]">
        <Image
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&h=600&fit=crop"
          alt={`${loc} commercial mortgage calculator`}
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="container-editorial relative">
          <div className="mx-auto max-w-4xl text-center">
            <ScrollReveal>
              <h1 className="font-editorial text-4xl md:text-5xl">
                {loc} Commercial Mortgage Calculator
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[color:var(--color-paper)]/75">
                Estimate the monthly payment on a {loc} commercial mortgage in
                seconds. Adjust property value, LTV, term and rate to model
                owner-occupier, investment, semi-commercial and trading-business
                deals. Indicative only, send us the deal for a tailored quote.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-editorial">
          <ScrollReveal>
            <LoanCalculator />
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <PropertyCalculatorsEmbed />
          </ScrollReveal>

          <div className="mx-auto mt-16 max-w-4xl">
            <ScrollReveal>
              <span className="eyebrow">Reading the numbers</span>
              <h2 className="mt-6 font-editorial text-3xl md:text-4xl">
                Understanding your {loc} commercial mortgage estimate.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-[color:var(--color-ink-soft)]">
                The calculator above models a standard amortising commercial
                mortgage at the LTV, term and rate you set. Actual terms depend
                on the property type, the lease (for investment), your trading
                history (for owner-occupier), and the lender selected from our{" "}
                <Link
                  href="/services"
                  className="font-medium underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4"
                >
                  90+ lender panel
                </Link>
                . Indicative {loc} rates currently sit at 6.0-9.0% pa.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <div className="card">
                  <h3 className="font-editorial text-lg">
                    Loan-to-value (LTV)
                  </h3>
                  <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                    LTV measures the loan as a percentage of the property
                    value. Most {loc} commercial mortgage lenders cap LTV at
                    65-75% for owner-occupier and investment deals, with{" "}
                    <Link
                      href="/services/semi-commercial-mortgage"
                      className="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4"
                    >
                      semi-commercial
                    </Link>{" "}
                    reaching 75%.
                  </p>
                </div>
                <div className="card">
                  <h3 className="font-editorial text-lg">
                    Debt-service coverage (DSCR)
                  </h3>
                  <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                    For{" "}
                    <Link
                      href="/services/commercial-investment-mortgage"
                      className="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4"
                    >
                      commercial investment mortgages
                    </Link>
                  , lenders typically need DSCR of 130-145%, annual rent must
                    cover the annual mortgage payment by at least that margin.
                  </p>
                </div>
                <div className="card">
                  <h3 className="font-editorial text-lg">
                    Term and amortisation
                  </h3>
                  <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                    Commercial mortgages typically run 5-25 years.
                    Owner-occupier deals often choose capital + interest over
                    15-20 years. Investment deals frequently choose
                    interest-only with a refinance at term.
                  </p>
                </div>
                <div className="card">
                  <h3 className="font-editorial text-lg">Interest rates</h3>
                  <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                    {loc} commercial mortgage rates currently sit at 6.0-9.0% pa.
                    High-street lenders (Lloyds, NatWest, Barclays, Santander)
                    sit at the lower end for prime cases; specialists (Shawbrook,
                    InterBay, Cynergy) cover semi-commercial and HMO blocks.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-10 rounded-md border border-[color:var(--color-accent)]/20 bg-[color:var(--color-accent-soft)] p-6">
                <h3 className="font-editorial text-lg">
                  Need a personalised quote?
                </h3>
                <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                  This calculator gives indicative figures only. For a tailored
                  quote on your {loc} commercial property,{" "}
                  <Link
                    href="/contact"
                    className="font-medium underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4"
                  >
                    send the deal through
                  </Link>
                  . We&apos;ll come back with terms from 3-5 lenders within 48 hours.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <span className="eyebrow mt-12 inline-block">How it&apos;s used</span>
              <h2 className="mt-6 font-editorial text-3xl md:text-4xl">
                How {loc} property buyers and investors use this calculator.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[color:var(--color-ink-soft)]">
                The calculator is most useful at three points in a deal: when
                you&apos;re sizing what you can borrow against a target
                property; when you&apos;re comparing repayment vs interest-only
                cost over the life of the term; and when you&apos;re
                stress-testing what a +1% rate move would cost on your monthly
                payment.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--color-ink-soft)]">
                For{" "}
                <Link
                  href="/services/owner-occupier-commercial-mortgage"
                  className="font-medium underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4"
                >
                  owner-occupier deals
                </Link>
              , model the LTV around what your business can support on a
                15-20 year repayment basis. For{" "}
                <Link
                  href="/services/commercial-investment-mortgage"
                  className="font-medium underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4"
                >
                  investment mortgages
                </Link>
              , drop the rate to interest-only and compare to your annual
                rent, the gap is your DSCR cushion.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--color-ink-soft)]">
                For{" "}
                <Link
                  href="/services/portfolio-refinance"
                  className="font-medium underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4"
                >
                  portfolio refinances
                </Link>{" "}
                covering 5+ assets, model the blended LTV first then call us,
                portfolio underwriting prices differently than per-asset, and
                the calculator tells you where the headline number lands but
                not where a portfolio lender will actually price.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/services" className="btn btn-accent">
                  Explore our services
                </Link>
                <Link href="/areas" className="btn btn-ghost">
                  View {loc} areas
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="rounded-lg border border-[color:var(--color-ink)] bg-[color:var(--color-ink)] p-10 text-[color:var(--color-paper)] md:p-16">
              <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
                <div>
                  <span className="eyebrow">Next step</span>
                  <h2 className="mt-6 font-editorial text-4xl leading-[1.05] text-[color:var(--color-paper)] md:text-[3.25rem]">
                    Send me your deal.
                    <br />
                    <span className="text-[color:var(--color-accent)]">
                      Real numbers in 48 hours.
                    </span>
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--color-paper)]/75">
                    I&apos;ll shortlist three to five lenders, run your deal
                    against their live positions, and come back with structured
                    indicative terms. If the numbers don&apos;t work, I&apos;ll
                    tell you straight.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  <Link href="/contact" className="btn btn-accent">
                    Get indicative terms
                  </Link>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="btn btn-ghost"
                    style={{
                      borderColor: "var(--color-paper)",
                      color: "var(--color-paper)",
                    }}
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
