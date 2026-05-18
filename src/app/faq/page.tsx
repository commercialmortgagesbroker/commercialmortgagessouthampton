import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SchemaInjector } from "@/components/SchemaInjector";
import { ScrollReveal } from "@/components/ScrollReveal";
import { generateFAQSchema } from "@/lib/schema";
import { siteConfig } from "@/data/site-config";
import { faqContent } from "@/data/pages/faq-content";

const loc = siteConfig.locationName;
const siteUrl = `https://${siteConfig.domain}`;

export const metadata: Metadata = {
  title: `Commercial Mortgage FAQ | ${loc} Commercial Property Loans Explained`,
  description: `Answers to the most common ${loc} commercial mortgage questions. LTV, DSCR, ICR, how much deposit, owner-occupier vs investment, semi-commercial, trading-business, process and timings.`,
  alternates: { canonical: `${siteUrl}/faq` },
};

const allFaqs = faqContent.flatMap((section) => section.items);

export default function FaqPage() {
  return (
    <>
      <SchemaInjector
        schema={generateFAQSchema(
          allFaqs.map((f) => ({
            question: f.question,
            answer: f.answer.replace(/<[^>]+>/g, ""),
          })),
        )}
      />
      <Breadcrumbs items={[{ label: "FAQ", href: "/faq" }]} />

      {/* Hero */}
      <section className="bg-primary py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold md:text-5xl">
              {loc} Commercial Mortgage FAQ
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-300">
              The answers to the questions we get asked most often —
              grouped by topic so you can skim straight to what matters.
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      {faqContent.map((section) => (
        <section
          key={section.heading}
          className="section-padding"
        >
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <ScrollReveal>
                <span className="accent-line mb-4" />
                <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
                  {section.heading}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="mt-8">
                  <FAQAccordion faqs={section.items} />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="relative overflow-hidden bg-secondary py-16 text-white">
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-3xl font-extrabold md:text-4xl">
            Question not answered here?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Send us your deal and we'll come back within 48 hours.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-heading font-bold text-secondary transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Ask us directly
            </Link>
            <Link
              href="/services"
              className="inline-block rounded-lg border-2 border-white px-8 py-3 font-heading font-bold text-white transition-all hover:bg-white/10"
            >
              See all services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
