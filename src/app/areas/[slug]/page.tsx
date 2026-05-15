import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AreaMap } from "@/components/AreaMap";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SchemaInjector } from "@/components/SchemaInjector";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getAreaImage } from "@/data/area-images";
import { areaDetails, getAreaDetail } from "@/data/pages/areas-content";
import { getAssetTypeDetail } from "@/data/pages/property-types-content";
import { getSoldDataForDistrict } from "@/data/pages/sold-data-mapping";
import { SoldDataPanel } from "@/components/SoldDataPanel";
import { siteConfig } from "@/data/site-config";
import { AREAS } from "@/lib/constants";
import { generateArticleSchema, generateFAQSchema } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return AREAS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const detail = getAreaDetail(slug);
  if (!detail) return {};
  return {
    title: detail.metaTitle,
    description: detail.metaDescription,
    alternates: { canonical: `https://${siteConfig.domain}/areas/${slug}` },
  };
}

export default async function AreaDetailPage({ params }: Props) {
  const { slug } = await params;
  const detail = getAreaDetail(slug);
  if (!detail) notFound();

  const img = getAreaImage(slug);
  const area = AREAS.find((a) => a.slug === slug);
  const otherAreas = AREAS.filter((a) => a.slug !== slug).slice(0, 6);
  const siteUrl = `https://${siteConfig.domain}`;
  const soldData = getSoldDataForDistrict(slug);

  return (
    <>
      <SchemaInjector
        schema={generateArticleSchema(
          detail.hero.h1,
          detail.hero.lede,
          `${siteUrl}/areas/${slug}`,
          new Date().toISOString(),
          new Date().toISOString(),
        )}
      />
      <SchemaInjector
        schema={generateFAQSchema(
          detail.faqs.map((f) => ({
            question: f.question,
            answer: f.answer.replace(/<[^>]+>/g, ""),
          })),
        )}
      />
      <Breadcrumbs
        items={[
          { label: "Areas We Cover", href: "/areas" },
          { label: detail.name, href: `/areas/${slug}` },
        ]}
      />

      {/* Hero */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl mb-10">
            <Image
              src={`https://images.unsplash.com/photo-${img.id}?w=1400&h=600&fit=crop`}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
          </div>
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h1 className="font-heading text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
                {detail.hero.h1}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                {detail.hero.lede}
              </p>
              {area && (
                <p className="mt-6 text-sm text-gray-500">
                  {area.activeSchemeCount} active commercial property listings currently tracked in {detail.name}.
                </p>
              )}
            </div>
            <div className="lg:col-span-2">
              <AreaMap variant="locator" activeSlug={slug} />
            </div>
          </div>
        </div>
      </section>

      {/* Market context */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <span className="accent-line mb-4" />
              <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
                {detail.marketContext.h2}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              {detail.marketContext.body.map((p, i) => (
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

      {/* Planning context */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <span className="accent-line mb-4" />
              <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
                {detail.planningContext.h2}
              </h2>
              <p
                className="mt-6 text-lg leading-relaxed text-gray-700"
                dangerouslySetInnerHTML={{ __html: detail.planningContext.body }}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Scheme types */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <span className="accent-line mb-4" />
              <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
                {detail.schemeTypes.h2}
              </h2>
            </ScrollReveal>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {detail.schemeTypes.items.map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 0.04}>
                  <div className="h-full rounded-lg border border-gray-200 bg-white p-5">
                    <p className="font-heading text-lg font-bold text-primary">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm text-gray-600">{item.detail}</p>
                    {item.typicalSize && (
                      <p className="mt-3 fig text-sm text-secondary">
                        {item.typicalSize}
                      </p>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Finance structures */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <span className="accent-line mb-4" />
              <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
                {detail.finance.h2}
              </h2>
              <p
                className="mt-6 text-lg leading-relaxed text-gray-700"
                dangerouslySetInnerHTML={{ __html: detail.finance.body }}
              />
            </ScrollReveal>
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {detail.finance.structures.map((s, i) => (
                <ScrollReveal key={s.product} delay={i * 0.04}>
                  <div className="rounded-lg border border-gray-200 bg-white p-4">
                    <p className="font-heading text-sm font-bold text-primary">
                      {s.product}
                    </p>
                    <p className="mt-1 text-xs text-gray-600">{s.applicability}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lender appetite */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <span className="accent-line mb-4" />
              <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
                {detail.lenderAppetite.h2}
              </h2>
              <p
                className="mt-6 text-lg leading-relaxed text-gray-700"
                dangerouslySetInnerHTML={{ __html: detail.lenderAppetite.body }}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Related asset classes */}
      {detail.relatedAssetClasses.length > 0 && (
        <section className="section-padding">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-5xl">
              <ScrollReveal>
                <span className="accent-line mb-4" />
                <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
                  Property types we finance in {detail.name}
                </h2>
                <p className="mt-4 text-base text-gray-600">
                  Asset classes most active in {detail.name}, each linked to
                  the dedicated finance structure, lender appetite and typical
                  terms for that property type.
                </p>
              </ScrollReveal>
              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {detail.relatedAssetClasses.map((slug, i) => {
                  const asset = getAssetTypeDetail(slug);
                  if (!asset) return null;
                  return (
                    <ScrollReveal key={slug} delay={i * 0.04}>
                      <Link
                        href={`/property-types/${slug}`}
                        className="block h-full rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:border-secondary hover:text-secondary"
                      >
                        <div className="mb-2 inline-block rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-medium text-secondary">
                          {asset.hero.eyebrow}
                        </div>
                        <p className="font-heading text-base font-bold">
                          {asset.name}
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          {asset.hero.metrics[0]?.label}: {asset.hero.metrics[0]?.value}
                        </p>
                      </Link>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Sold-price data */}
      {soldData && (
        <SoldDataPanel
          data={soldData.data}
          districtName={detail.name}
          sourceLabel={`HM Land Registry Price Paid Data, ${soldData.lpaLabel}`}
        />
      )}

      {/* FAQs */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="accent-line mb-4" />
              <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
                {detail.name} commercial mortgage FAQs
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="mt-8">
                <FAQAccordion faqs={detail.faqs} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Other areas */}
      <section className="section-padding bg-light">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-5xl">
            <span className="accent-line mb-4" />
            <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
              Other Southampton Areas We Cover
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {otherAreas.map((a) => (
                <Link
                  key={a.slug}
                  href={`/areas/${a.slug}`}
                  className="block rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:border-secondary hover:text-secondary"
                >
                  <p className="font-heading text-base font-bold">{a.name}</p>
                  <p className="mt-1 text-xs text-gray-500">
                    {a.activeSchemeCount} active listings
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-secondary py-16 text-white">
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-3xl font-extrabold md:text-4xl">
            Buying or refinancing in {detail.name}?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Free-of-charge deal assessment. Indicative commercial mortgage terms within 48 hours.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-heading font-bold text-secondary transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get Indicative Terms
            </Link>
            <Link
              href="/services"
              className="inline-block rounded-lg border-2 border-white px-8 py-3 font-heading font-bold text-white transition-all hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
