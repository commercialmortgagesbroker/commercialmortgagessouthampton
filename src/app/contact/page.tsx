import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { SchemaInjector } from "@/components/SchemaInjector";
import { ScrollReveal } from "@/components/ScrollReveal";
import { generateContactPageSchema, generateFAQSchema } from "@/lib/schema";
import { siteConfig } from "@/data/site-config";
import { PHONE_NUMBER, EMAIL } from "@/lib/constants";

const loc = siteConfig.locationName;
const phoneDigits = PHONE_NUMBER.replace(/\s/g, "");

export const metadata: Metadata = {
  title: `Contact ${loc} Commercial Mortgages | Free Quote in 48 Hours`,
  description: `Contact ${loc} and the Solent corridor's specialist commercial mortgage broker. Free quote within 48 hours. Port-and-logistics, owner-occupier, investment, semi-commercial, healthcare ancillary and HMO portfolio finance from a 90+ lender panel. Call ${PHONE_NUMBER} or submit your deal online.`,
  alternates: {
    canonical: `https://${siteConfig.domain}/contact`,
  },
};

const contactFaqs = [
  {
    question: `How quickly will I hear back after contacting ${loc} Commercial Mortgages?`,
    answer:
      "We respond to all enquiries within 2 hours during business hours (Monday to Friday, 8am to 6pm). Initial deal feedback and indicative terms are typically delivered within 48 hours of receiving full property and trading details.",
  },
  {
    question: "What information do you need to give me an indicative quote?",
    answer:
      "At minimum: property address and type (owner-occupier, investment, semi-commercial, trading-business, hotel or HMO portfolio), purchase price or current value, your deposit or existing equity, the rental income or trading EBITDA, and a brief borrower background. For investment deals we also want the lease summary; for owner-occupiers and trading businesses we want the last 2 to 3 years of accounts.",
  },
  {
    question: "Is there a cost for the initial consultation?",
    answer:
      "No. The initial deal assessment, indicative terms and lender shortlisting are always free. We are only paid by the lender on successful completion of your mortgage; our fee is included in the arrangement fee shown on the term sheet.",
  },
  {
    question: "Do you cover the whole Southampton, Solent and Hampshire area?",
    answer:
      'Yes. The full Southampton City Council unitary authority across SO14 to SO19 (including <a href="/areas/city-centre">Southampton City Centre and Above Bar</a>, <a href="/areas/ocean-village">Ocean Village</a>, <a href="/areas/mayflower-quarter-royal-pier">Mayflower Quarter and Royal Pier</a>, <a href="/areas/bedford-place-polygon">Bedford Place and The Polygon</a>, <a href="/areas/highfield-portswood">Highfield and Portswood</a>, <a href="/areas/bassett-lordswood">Bassett and Lordswood</a>, <a href="/areas/bitterne">Bitterne</a>, <a href="/areas/adanac-park-nursling">Adanac Park and Nursling</a>) plus the SO30 Hedge End and West End fringe and the wider Hampshire Solent corridor.',
  },
  {
    question: "What loan sizes do you work on?",
    answer:
      "Commercial mortgage facilities from £150K to £10M and beyond on Adanac Park M271 logistics-warehouse and Ocean Village hospitality lots. Smaller deals below £150K are typically better served by high-street SME products; we can still refer those where appropriate.",
  },
  {
    question: "Do you work on port-and-logistics, healthcare and HMO portfolio deals specifically?",
    answer:
      "Yes. Southampton has three specialisms that shape our weekly deal flow. Port-and-logistics refinance and acquisition across the Adanac Park / Nursling / M271 corridor, placed with Shawbrook, InterBay Commercial, Aldermore and YBS Commercial. Healthcare ancillary owner-occupier across the University Hospital Southampton catchment, placed with Cynergy Bank, HTB and Cambridge & Counties. HMO portfolio refinance across Highfield, Portswood and Bevois Valley, placed with InterBay Commercial, Paragon and Together.",
  },
];

export default function ContactPage() {
  return (
    <>
      <SchemaInjector schema={generateContactPageSchema()} />
      <SchemaInjector
        schema={generateFAQSchema(
          contactFaqs.map((f) => ({
            question: f.question,
            answer: f.answer.replace(/<[^>]+>/g, ""),
          })),
        )}
      />
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

      {/* Hero */}
      <section className="bg-primary py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold md:text-5xl">
              Send us your {loc} commercial mortgage enquiry
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-300">
              Indicative terms within 48 hours. No cost for the initial
              assessment. Your deal stays confidential.
            </p>
          </div>
        </div>
      </section>

      {/* Form + contact block */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <span className="accent-line mb-4" />
                <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
                  Deal enquiry
                </h2>
                <p className="mt-4 text-base text-gray-600">
                  Tell us about the property and the borrower. We&apos;ll come
                  back to you within 2 business hours to discuss.
                </p>
                <div className="mt-8">
                  <LeadCaptureForm />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-8">
                <div>
                  <span className="accent-line mb-4" />
                  <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
                    Get in touch
                  </h2>
                  <div className="mt-6 space-y-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-500">
                        Phone
                      </p>
                      <a
                        href={`tel:${phoneDigits}`}
                        className="text-xl font-bold text-primary hover:text-secondary"
                      >
                        {PHONE_NUMBER}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-500">
                        Email
                      </p>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="text-lg font-bold text-primary hover:text-secondary"
                      >
                        {EMAIL}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-500">
                        Hours
                      </p>
                      <p className="text-base text-gray-700">
                        Monday to Friday, 8am to 6pm
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-500">
                        Coverage
                      </p>
                      <p className="text-base text-gray-700">
                        Full Southampton City Council unitary authority across
                        SO14 to SO19, plus the SO30 Hedge End and West End
                        fringe and the wider Hampshire Solent corridor.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6">
                  <p className="font-heading text-lg font-bold text-primary">
                    Prefer to explore first?
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>
                      &rarr; <Link href="/calculator" className="text-secondary hover:underline">Model your repayments</Link> with our commercial mortgage calculator
                    </li>
                    <li>
                      &rarr; <Link href="/services" className="text-secondary hover:underline">Review mortgage products</Link> owner-occupier / investment / semi-commercial / portfolio / trading-business
                    </li>
                    <li>
                      &rarr; <Link href="/areas" className="text-secondary hover:underline">Browse Southampton areas we cover</Link>
                    </li>
                    <li>
                      &rarr; <Link href="/how-it-works" className="text-secondary hover:underline">How the process works</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <span className="accent-line mb-4" />
            <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
              Contact FAQs
            </h2>
            <div className="mt-8 space-y-4">
              {contactFaqs.map((f) => (
                <div key={f.question} className="rounded-lg border border-gray-200 bg-white p-5">
                  <p className="font-heading text-base font-bold text-primary">
                    {f.question}
                  </p>
                  <p
                    className="mt-2 text-sm leading-relaxed text-gray-700"
                    dangerouslySetInnerHTML={{ __html: f.answer }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
