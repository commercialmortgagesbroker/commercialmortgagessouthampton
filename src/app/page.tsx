import type { Metadata } from "next";
import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { StatsBar } from "@/components/StatsBar";
import { MarketSnapshot } from "@/components/MarketSnapshot";
import { ProductMatrix } from "@/components/ProductMatrix";
import { LenderPanel } from "@/components/LenderPanel";
import { TrustBand } from "@/components/TrustBand";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TestimonialCard } from "@/components/TestimonialCard";
import { AreaCard } from "@/components/AreaCard";
import { LoanCalculator } from "@/components/LoanCalculator";
import { AreaMap } from "@/components/AreaMap";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CommercialPlanningPanel } from "@/components/CommercialPlanningPanel";
import { AREAS } from "@/lib/constants";
import { getAreaImage, AREAS_INDEX_IMAGE } from "@/data/area-images";
import { siteConfig } from "@/data/site-config";
import { homeMarketSnapshot } from "@/data/home-market-snapshot";
import { homeContent } from "@/data/pages/home-content";

const loc = siteConfig.locationName;
const kw = siteConfig.keyword;
const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;

export const metadata: Metadata = {
  title: `Commercial Mortgages ${loc} | Port, Logistics, Hospitality and HMO Finance`,
  description: `Commercial mortgages ${loc} from a 90+ lender panel. Owner-occupier, commercial investment, semi-commercial, HMO portfolio refinance, industrial-warehouse on the M271 and M27 corridor, and hospitality finance at Ocean Village. Mid-2026 rates 6.0 to 9.0% pa, indicative terms in 48 hours.`,
  alternates: { canonical: `https://${siteConfig.domain}` },
};

export default function HomePage() {
  return (
    <>
      <HeroSection
        keyword={kw}
        title={homeContent.hero.title}
        subtitle={homeContent.hero.subtitle}
        phone={siteConfig.phone}
        heroImageId={AREAS_INDEX_IMAGE.id}
        heroImageAlt={AREAS_INDEX_IMAGE.alt}
      />

      <StatsBar />

      <MarketSnapshot
        locationName={homeMarketSnapshot.locationName}
        stats={[...homeMarketSnapshot.stats]}
        source={homeMarketSnapshot.source}
      />

      {/* Narrative intro */}
      <section className="section">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">{homeContent.narrative.eyebrow}</span>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h2
                className="mt-6 font-editorial text-4xl md:text-5xl"
                dangerouslySetInnerHTML={{ __html: homeContent.narrative.h2 }}
              />
            </ScrollReveal>
            {homeContent.narrative.body.map((para, i) => (
              <ScrollReveal key={i} delay={0.1 + i * 0.05}>
                <p
                  className="mt-8 text-lg leading-relaxed text-[color:var(--color-ink-soft)]"
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ProductMatrix />

      {/* Commercial mortgage essentials explainer */}
      <section className="section border-t border-[color:var(--color-rule)]">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">{homeContent.essentialsExplainer.eyebrow}</span>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h2
                className="mt-6 font-editorial text-4xl md:text-5xl"
                dangerouslySetInnerHTML={{ __html: homeContent.essentialsExplainer.h2 }}
              />
            </ScrollReveal>
            {homeContent.essentialsExplainer.body.map((para, i) => (
              <ScrollReveal key={i} delay={0.1 + i * 0.05}>
                <p
                  className="mt-8 text-lg leading-relaxed text-[color:var(--color-ink-soft)]"
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator, compact editorial framing */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.8fr]">
            <ScrollReveal>
              <div>
                <span className="eyebrow">{homeContent.calculatorIntro.eyebrow}</span>
                <h2
                  className="mt-6 font-editorial text-4xl md:text-5xl"
                  dangerouslySetInnerHTML={{ __html: homeContent.calculatorIntro.h2 }}
                />
                <p className="mt-6 text-base leading-relaxed text-[color:var(--color-muted)]">
                  {homeContent.calculatorIntro.body}
                </p>
                <p className="mt-4 text-xs text-[color:var(--color-muted)]">
                  {homeContent.calculatorIntro.phoneNudge}, call me on{" "}
                  <a href={phoneHref} className="underline">
                    {siteConfig.phone}
                  </a>
                  .
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <LoanCalculator />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <LenderPanel locationName={loc} />

      {/* Areas */}
      <section className="section">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-2xl">
                <span className="eyebrow">{homeContent.areasIntro.eyebrow}</span>
                <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                  {homeContent.areasIntro.h2}
                </h2>
              </div>
              <Link href="/areas" className="btn btn-ghost">
                View all areas
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <div className="mb-12">
              <AreaMap variant="mini" />
            </div>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {AREAS.map((area, index) => (
              <ScrollReveal key={area.slug} delay={index * 0.04}>
                <AreaCard
                  areaName={area.name}
                  description={homeContent.areaDescriptions[area.slug] || ""}
                  recentSchemes={area.activeSchemeCount}
                  linkUrl={`/areas/${area.slug}`}
                  imageId={getAreaImage(area.slug).id}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CommercialPlanningPanel />

      {/* Case studies, dark editorial panel */}
      <section className="section data-band">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="mb-12 max-w-3xl">
              <span className="eyebrow">{homeContent.caseStudies.eyebrow}</span>
              <h2 className="mt-6 font-editorial text-4xl text-[color:var(--color-paper)] md:text-5xl">
                {homeContent.caseStudies.h2}
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {homeContent.caseStudies.items.map((cs, i) => (
              <ScrollReveal key={cs.name} delay={i * 0.08}>
                <div className="border border-[color:var(--color-paper)]/20 bg-[color:var(--color-paper)]/5 p-6 backdrop-blur-sm">
                  <p className="font-editorial text-xl text-[color:var(--color-paper)]">
                    {cs.name}
                  </p>
                  <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                    {cs.detail}
                  </p>
                  <p className="mt-6 fig text-lg text-[color:var(--color-accent)]">
                    {cs.facility}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.2}>
            <div className="mt-10">
              <Link href="/case-studies" className="btn btn-accent">
                View all case studies
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <TrustBand locationName={loc} />

      {/* Testimonials */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <span className="eyebrow">{homeContent.testimonials.eyebrow}</span>
          </ScrollReveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {homeContent.testimonials.items.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.08}>
                <TestimonialCard {...t} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section border-t border-[color:var(--color-rule)]">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">Frequently asked</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Commercial mortgage FAQs.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="mt-10">
                <FAQAccordion faqs={homeContent.faqs} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-lg border border-[color:var(--color-ink)] bg-[color:var(--color-ink)] p-10 text-[color:var(--color-paper)] md:p-16">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  background:
                    "radial-gradient(circle at 80% 50%, color-mix(in oklch, var(--color-accent), transparent 50%) 0%, transparent 55%)",
                }}
              />
              <div className="relative grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
                <div>
                  <span className="eyebrow">{homeContent.finalCta.eyebrow}</span>
                  <h2
                    className="mt-6 font-editorial text-4xl leading-[1.05] text-[color:var(--color-paper)] md:text-[3.25rem]"
                    dangerouslySetInnerHTML={{ __html: homeContent.finalCta.h2 }}
                  />
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--color-paper)]/75">
                    {homeContent.finalCta.body
                      .replace(/&rsquo;/g, "\u2019")
                      .replace(/&mdash;/g, "\u2014")}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  <Link href="/contact" className="btn btn-accent">
                    Get indicative terms
                  </Link>
                  <a
                    href={phoneHref}
                    className="btn btn-ghost"
                    style={{ borderColor: "var(--color-paper)", color: "var(--color-paper)" }}
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
