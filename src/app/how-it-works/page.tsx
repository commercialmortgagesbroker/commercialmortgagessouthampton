import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchemaInjector } from "@/components/SchemaInjector";
import { ScrollReveal } from "@/components/ScrollReveal";
import { generateArticleSchema } from "@/lib/schema";
import { siteConfig } from "@/data/site-config";
import { howItWorksContent } from "@/data/pages/how-it-works-content";

const loc = siteConfig.locationName;
const siteUrl = `https://${siteConfig.domain}`;

export const metadata: Metadata = {
  title: `How a ${loc} Commercial Mortgage Works | Process & Criteria`,
  description: `How a ${loc} commercial mortgage works. 5-step process from enquiry to drawdown in 4-8 weeks. LTV, DSCR, valuation, credit approval, completion - explained.`,
  alternates: { canonical: `${siteUrl}/how-it-works` },
};

export default function HowItWorksPage() {
  return (
    <>
      <SchemaInjector
        schema={generateArticleSchema(
          howItWorksContent.hero.h1,
          howItWorksContent.hero.lede,
          `${siteUrl}/how-it-works`,
          new Date().toISOString(),
          new Date().toISOString(),
        )}
      />
      <Breadcrumbs items={[{ label: "How It Works", href: "/how-it-works" }]} />

      {/* Hero */}
      <section className="bg-primary py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold md:text-5xl">
              {howItWorksContent.hero.h1}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-300">
              {howItWorksContent.hero.lede}
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <span className="accent-line mb-4" />
              <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                {howItWorksContent.intro.h2}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              {howItWorksContent.intro.body.map((p, i) => (
                <p
                  key={i}
                  className={`${i === 0 ? "mt-6" : "mt-4"} text-lg leading-relaxed text-gray-700`}
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <span className="accent-line mb-4" />
              <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                {howItWorksContent.process.h2}
              </h2>
            </ScrollReveal>
            <div className="mt-10 space-y-5">
              {howItWorksContent.process.steps.map((step, i) => (
                <ScrollReveal key={step.n} delay={i * 0.05}>
                  <div className="flex gap-6 rounded-lg border border-gray-200 bg-white p-6">
                    <div className="shrink-0 font-heading text-4xl font-extrabold text-secondary">
                      {step.n}
                    </div>
                    <div>
                      <p className="font-heading text-lg font-bold text-primary">
                        {step.label}
                      </p>
                      <p className="mt-2 text-base leading-relaxed text-gray-700">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Criteria */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <span className="accent-line mb-4" />
              <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                {howItWorksContent.criteria.h2}
              </h2>
            </ScrollReveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {howItWorksContent.criteria.items.map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 0.05}>
                  <div className="rounded-lg border border-gray-200 bg-white p-5">
                    <p className="font-heading text-lg font-bold text-primary">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {item.detail}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <span className="accent-line mb-4" />
              <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                {howItWorksContent.timeline.h2}
              </h2>
              <p
                className="mt-6 text-lg leading-relaxed text-gray-700"
                dangerouslySetInnerHTML={{ __html: howItWorksContent.timeline.body }}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-secondary py-16 text-white">
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-3xl font-extrabold md:text-4xl">
            Ready to kick off the process?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Indicative terms within 48 hours of a complete enquiry.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-heading font-bold text-secondary transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get Indicative Terms
            </Link>
            <Link
              href="/calculator"
              className="inline-block rounded-lg border-2 border-white px-8 py-3 font-heading font-bold text-white transition-all hover:bg-white/10"
            >
              Try the Calculator
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
