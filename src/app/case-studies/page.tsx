import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";
import { siteConfig } from "@/data/site-config";
import { caseStudies } from "@/data/case-studies";

const loc = siteConfig.locationName;

export const metadata: Metadata = {
  title: `${loc} Commercial Mortgage Case Studies | Logistics, Hospitality, Healthcare, HMO Portfolio`,
  description: `Illustrative ${loc} commercial mortgage scenarios, port-and-logistics, owner-occupier, investment, semi-commercial, trading-business and portfolio refinance deals across Adanac Park M271, Highfield HMO, Ocean Village, Bassett dental, Westquay, Bedford Place, Mayflower Quarter, Bitterne, Cumberland Place and Hedge End.`,
  alternates: { canonical: `https://${siteConfig.domain}/case-studies` },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Case Studies", href: "/case-studies" }]} />

      <section className="bg-primary py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold md:text-5xl">
              {loc} Commercial Mortgage Case Studies
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-300">
              Illustrative {loc} and Solent corridor commercial mortgage
              scenarios across port-and-logistics, healthcare ancillary,
              university HMO portfolio refinance, hospitality,
              owner-occupier freehold, investment and semi-commercial. Product
              type, lender, pricing and the reason the file would land where
              it did.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 md:grid-cols-2">
              {caseStudies.map((cs, i) => (
                <ScrollReveal key={cs.id} delay={i * 0.05}>
                  <div className="h-full rounded-lg border border-gray-200 bg-white p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-gray-500">
                          {cs.borough}
                        </p>
                        <p className="mt-1 font-heading text-lg font-bold text-primary">
                          {cs.title}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                        {cs.financeType}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-gray-600">{cs.schemeType}</p>
                    <p className="mt-5 font-heading text-xl font-bold text-secondary">
                      {cs.loanAmount} facility at {cs.ltv} LTV
                    </p>
                    <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
                      {cs.keyStats.slice(0, 4).map((stat) => (
                        <li key={stat.label} className="flex gap-2">
                          <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-secondary" />
                          <span>
                            <strong>{stat.label}:</strong> {stat.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 border-t border-gray-100 pt-3 text-xs uppercase tracking-wider text-gray-500">
                      Illustrative example — not a completed transaction
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <p className="mt-8 text-xs text-gray-500">
              These are illustrative scenarios built from typical {loc} and
              Solent corridor deal structures and current panel pricing, not
              records of specific completed transactions. Names, addresses
              and figures are composite and do not identify any borrower.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-secondary py-16 text-white">
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-3xl font-extrabold md:text-4xl">
            Want us to package your {loc} commercial mortgage?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            No cost for the initial assessment. Indicative terms in 48 hours.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-heading font-bold text-secondary transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get Indicative Terms
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
