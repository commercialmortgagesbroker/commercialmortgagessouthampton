import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchemaInjector } from "@/components/SchemaInjector";
import { ScrollReveal } from "@/components/ScrollReveal";
import { generateLocalBusinessSchema } from "@/lib/schema";
import { siteConfig } from "@/data/site-config";
import { aboutContent } from "@/data/pages/about-content";

const loc = siteConfig.locationName;
const siteUrl = `https://${siteConfig.domain}`;

export const metadata: Metadata = {
  title: `About ${loc} Commercial Mortgages | Specialist Broker`,
  description: `${loc} commercial mortgage broker with \u00a3400M+ arranged. Corporate-banking background, 20+ years' property finance experience, 90+ lender relationships including Shawbrook, InterBay, LendInvest, Cynergy, Lloyds, NatWest, Barclays and Santander.`,
  alternates: { canonical: `${siteUrl}/about` },
};

export default function AboutPage() {
  return (
    <>
      <SchemaInjector schema={generateLocalBusinessSchema()} />
      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />

      {/* Hero */}
      <section className="bg-primary py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-heading text-4xl font-bold md:text-5xl">
              {aboutContent.hero.h1}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-300">
              {aboutContent.hero.lede}
            </p>
          </div>

          {/* Numbers band */}
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aboutContent.numbers.map((n) => (
              <div
                key={n.label}
                className="rounded-lg border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm"
              >
                <p className="font-heading text-3xl font-bold text-secondary">
                  {n.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-widest text-white/60">
                  {n.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <span className="accent-line mb-4" />
              <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                {aboutContent.story.h2}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              {aboutContent.story.body.map((p, i) => (
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

      {/* Approach */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <span className="accent-line mb-4" />
              <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                {aboutContent.approach.h2}
              </h2>
            </ScrollReveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {aboutContent.approach.items.map((item, i) => (
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

      {/* Credibility */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <span className="accent-line mb-4" />
              <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                {aboutContent.credibility.h2}
              </h2>
              <p
                className="mt-6 text-lg leading-relaxed text-gray-700"
                dangerouslySetInnerHTML={{ __html: aboutContent.credibility.body }}
              />
              <p className="mt-6 text-base leading-relaxed text-gray-600">
                For a working read on the wider Southampton commercial property
                landscape, see our{" "}
                <Link
                  href="/southampton-commercial-property-market"
                  className="underline decoration-secondary decoration-2 underline-offset-4 hover:text-secondary"
                >
                  2026 Southampton commercial property market piece
                </Link>
                .
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-secondary py-16 text-white">
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-3xl font-extrabold md:text-4xl">
            Let&apos;s talk about your commercial mortgage
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Indicative terms within 48 hours. No cost for the initial assessment.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-heading font-bold text-secondary transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get in touch
            </Link>
            <Link
              href="/services"
              className="inline-block rounded-lg border-2 border-white px-8 py-3 font-heading font-bold text-white transition-all hover:bg-white/10"
            >
              Explore services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
