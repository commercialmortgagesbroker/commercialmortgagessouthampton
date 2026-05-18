import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchemaInjector } from "@/components/SchemaInjector";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AreaMap } from "@/components/AreaMap";
import { generateServiceSchema } from "@/lib/schema";
import { siteConfig } from "@/data/site-config";
import { servicesContent } from "@/data/pages/services-content";
import { AREAS_INDEX_IMAGE } from "@/data/area-images";
import { ASSET_TYPE_LINKS } from "@/data/pages/property-types-content";

const loc = siteConfig.locationName;
const phoneDigits = siteConfig.phone.replace(/\s/g, "");
const siteUrl = `https://${siteConfig.domain}`;

export const metadata: Metadata = {
  title: `Commercial Mortgage Services ${loc} | Owner-Occupier, Investment, Semi-Commercial`,
  description: `Commercial mortgage broker ${loc} offering owner-occupier, commercial investment, semi-commercial, portfolio refinance, trading-business and commercial remortgage. 90+ lender panel.`,
  alternates: { canonical: `${siteUrl}/services` },
};

export default function ServicesPage() {
  return (
    <>
      {servicesContent.services.map((service) => (
        <SchemaInjector
          key={service.slug}
          schema={generateServiceSchema(
            service.h2,
            // Schema description, strip HTML from the first paragraph
            service.paragraphs[0].replace(/<[^>]+>/g, "").slice(0, 300),
            `${siteUrl}/services/${service.slug}`,
          )}
        />
      ))}
      <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />

      {/* Hero */}
      <section className="bg-primary py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-heading text-4xl font-bold md:text-5xl">
              {servicesContent.hero.h1}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-300">
              {servicesContent.hero.lede}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-block rounded-md bg-secondary px-8 py-3 font-bold text-white transition-colors hover:bg-secondary/90"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/calculator"
                className="inline-block rounded-md border-2 border-white px-8 py-3 font-bold text-white transition-colors hover:bg-white/10"
              >
                Try Our Calculator
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl mb-10 mt-10">
            <Image
              src={`https://images.unsplash.com/photo-${AREAS_INDEX_IMAGE.id}?w=1400&h=600&fit=crop`}
              alt={`${loc} commercial mortgage services`}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Map context */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <ScrollReveal>
            <span className="accent-line-center mb-4" />
            <h2 className="text-center font-heading text-3xl font-bold text-primary md:text-4xl">
              {servicesContent.mapIntro.h2}
            </h2>
            <p
              className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray-600"
              dangerouslySetInnerHTML={{ __html: servicesContent.mapIntro.body }}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="mt-10">
              <AreaMap variant="full" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services sections, alternating bg for rhythm */}
      {servicesContent.services.map((service, idx) => (
        <section
          key={service.slug}
          id={service.slug}
          className={`section-padding ${idx % 2 === 1 ? "bg-white" : ""}`}
        >
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <ScrollReveal>
                <div className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1 text-sm font-medium text-secondary">
                  {service.eyebrow}
                </div>
                <span className="accent-line mb-4" />
                <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-secondary transition-colors"
                  >
                    {service.h2}
                  </Link>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                {service.paragraphs.map((para, i) => (
                  <p
                    key={i}
                    className={`${i === 0 ? "mt-6" : "mt-4"} text-lg leading-relaxed text-gray-700`}
                    dangerouslySetInnerHTML={{ __html: para }}
                  />
                ))}
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-4 inline-block text-secondary font-bold hover:underline"
                >
                  {service.learnMoreLabel} &rarr;
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* Property types covered */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <span className="accent-line mb-4" />
              <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                Property Types We Finance
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Commercial mortgage economics vary materially by asset class
                — lender pools, LTV caps, DSCR/ICR thresholds and pricing all
                shift with the property type. Each of our services applies
                across the full range of {loc} asset classes.
              </p>
            </ScrollReveal>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {ASSET_TYPE_LINKS.map((a, i) => (
                <ScrollReveal key={a.slug} delay={i * 0.04}>
                  <Link
                    href={`/property-types/${a.slug}`}
                    className="block h-full rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:border-secondary hover:text-secondary"
                  >
                    <p className="font-heading text-base font-bold text-primary">
                      {a.name}
                    </p>
                    <p className="mt-1 text-xs text-secondary">
                      Explore →
                    </p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Network band */}
      <section className="section-padding bg-light">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <ScrollReveal>
              <span className="accent-line-center mb-4" />
              <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                {servicesContent.networkBand.h2}
              </h2>
              {servicesContent.networkBand.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`${i === 0 ? "mt-6" : "mt-4"} text-lg leading-relaxed text-gray-700`}
                >
                  {p.replace(/&mdash;/g, "—")}
                </p>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-secondary py-16 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-extrabold md:text-4xl">
              {servicesContent.finalCta.h2}
            </h2>
            <p className="mt-4 text-lg text-white/90">
              {servicesContent.finalCta.body}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-block cursor-pointer rounded-lg bg-white px-8 py-3 font-heading font-bold text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Get a Free Quote
              </Link>
              <a
                href={`tel:${phoneDigits}`}
                className="inline-block cursor-pointer rounded-lg border-2 border-white px-8 py-3 font-heading font-bold text-white transition-all duration-200 hover:bg-white/10"
              >
                Call {siteConfig.phone}
              </a>
            </div>
            <p className="mt-6 text-sm text-white/70">
              Or explore our{" "}
              <Link href="/how-it-works" className="text-white underline hover:text-white/90">
                how it works guide
              </Link>{" "}
              and{" "}
              <Link href="/case-studies" className="text-white underline hover:text-white/90">
                case studies
              </Link>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
