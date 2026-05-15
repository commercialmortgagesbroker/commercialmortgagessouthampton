import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchemaInjector } from "@/components/SchemaInjector";
import { ScrollReveal } from "@/components/ScrollReveal";
import { generateCollectionPageSchema } from "@/lib/schema";
import { siteConfig } from "@/data/site-config";
import { assetTypeDetails } from "@/data/pages/property-types-content";

const loc = siteConfig.locationName;
const siteUrl = `https://${siteConfig.domain}`;
const entries = Object.values(assetTypeDetails);

export const metadata: Metadata = {
  title: `Commercial Mortgages by Property Type ${loc} | Sector-Specialist Broker`,
  description: `Sector-specific commercial mortgages in ${loc}, retail, office, industrial-warehouse, leisure-hospitality, healthcare, pubs and restaurants, MOT, nursery, mixed-use, semi-commercial, HMO blocks and holiday-let portfolios. Lender appetite and rate bands per sector.`,
  alternates: { canonical: `${siteUrl}/property-types` },
};

export default function PropertyTypesIndexPage() {
  return (
    <>
      <SchemaInjector
        schema={generateCollectionPageSchema(
          `${loc} Commercial Mortgages by Property Type`,
          `Commercial mortgage products and lender appetite by sector, ${entries.length} property types covering retail, office, industrial, leisure, healthcare, hospitality, mixed-use and specialist sectors across ${loc}.`,
          `${siteUrl}/property-types`,
        )}
      />
      <Breadcrumbs items={[{ label: "Property Types", href: "/property-types" }]} />

      <section className="bg-primary py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold md:text-5xl">
              {loc} commercial mortgages by property type
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-300">
              Lender appetite, LTV bands, cover tests (ICR / DSCR / EBITDA) and
              rate ranges differ materially per sector. Pick your asset class
              for the lender shortlist that actually writes that sector.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <span className="accent-line mb-4" />
            <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
              {entries.length} commercial sectors covered
            </h2>
            <p className="mt-4 text-base text-gray-600">
              Each sector page covers the specific lender appetite, LTV cap,
              cover test, typical rate band, and {loc}-market context for that
              asset class, including which of our 90+ panel lenders write the
              sector and which decline.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {entries.map((a, i) => (
                <ScrollReveal key={a.slug} delay={i * 0.04}>
                  <Link
                    href={`/property-types/${a.slug}`}
                    className="block h-full rounded-lg border border-gray-200 bg-white p-5 transition-colors hover:border-secondary hover:shadow-md"
                  >
                    <div className="mb-3 inline-block rounded-full bg-secondary/10 px-3 py-0.5 text-xs font-medium text-secondary">
                      {a.hero.eyebrow}
                    </div>
                    <p className="font-heading text-lg font-bold text-primary">
                      {a.name}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {a.hero.lede.split(".")[0]}.
                    </p>
                    <p className="mt-4 text-sm font-medium text-secondary">
                      Lender appetite and rates &rarr;
                    </p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-secondary py-16 text-white">
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-heading text-3xl font-extrabold md:text-4xl">
            Unsure which sector best fits your deal?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Send the property and trading details. We&apos;ll come back with
            indicative terms from three to five lenders within 48 hours.
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
