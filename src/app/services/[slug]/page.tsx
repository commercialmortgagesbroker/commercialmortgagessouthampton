import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SchemaInjector } from "@/components/SchemaInjector";
import { ScrollReveal } from "@/components/ScrollReveal";
import { generateServiceSchema, generateFAQSchema } from "@/lib/schema";
import { siteConfig } from "@/data/site-config";
import { serviceDetails, getServiceDetail } from "@/data/pages/service-details-content";
import { SERVICE_LINKS } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const detail = getServiceDetail(slug);
  if (!detail) return {};
  return {
    title: detail.metaTitle,
    description: detail.metaDescription,
    alternates: { canonical: `https://${siteConfig.domain}/services/${slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const detail = getServiceDetail(slug);
  if (!detail) notFound();

  const siteUrl = `https://${siteConfig.domain}`;
  const phoneDigits = siteConfig.phone.replace(/\s/g, "");
  const otherServices = SERVICE_LINKS.filter(
    (s) => !s.href.endsWith(`/${slug}`),
  );

  return (
    <>
      <SchemaInjector
        schema={generateServiceSchema(
          detail.name,
          detail.hero.lede,
          `${siteUrl}/services/${slug}`,
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
          { label: "Services", href: "/services" },
          { label: detail.name, href: `/services/${slug}` },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-white">
              {detail.hero.eyebrow}
            </div>
            <h1 className="font-heading text-4xl font-bold md:text-5xl">
              {detail.hero.h1}
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-300">
              {detail.hero.lede}
            </p>

            {/* Key metrics */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {detail.hero.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-lg border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <p className="text-xs uppercase tracking-widest text-white/60">
                    {m.label}
                  </p>
                  <p className="mt-2 font-heading text-2xl font-bold text-secondary">
                    {m.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
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
        </div>
      </section>

      {/* What it is */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <span className="accent-line mb-4" />
              <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                {detail.whatItIs.h2}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              {detail.whatItIs.body.map((p, i) => (
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

      {/* How it works */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <span className="accent-line mb-4" />
              <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                {detail.howItWorks.h2}
              </h2>
            </ScrollReveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {detail.howItWorks.steps.map((step, i) => (
                <ScrollReveal key={step.label} delay={i * 0.05}>
                  <div className="rounded-lg border border-gray-200 p-5">
                    <p className="font-heading text-lg font-bold text-primary">
                      {step.label}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {step.detail}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <span className="accent-line mb-4" />
              <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                {detail.whoItsFor.h2}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <ul className="mt-8 space-y-3">
                {detail.whoItsFor.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-lg text-gray-700"
                  >
                    <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Local angle */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <span className="accent-line mb-4" />
              <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                {detail.localAngle.h2}
              </h2>
              <p
                className="mt-6 text-lg leading-relaxed text-gray-700"
                dangerouslySetInnerHTML={{ __html: detail.localAngle.body }}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="accent-line mb-4" />
              <h2 className="font-heading text-3xl font-bold text-primary md:text-4xl">
                {detail.name} FAQs
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="mt-10">
                <FAQAccordion faqs={detail.faqs} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="section-padding bg-light">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <span className="accent-line mb-4" />
            <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
              Other Development Finance Services
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {otherServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="rounded-lg border border-gray-200 bg-white p-4 transition-colors hover:border-secondary hover:text-secondary"
                >
                  <p className="font-heading text-base font-bold">{s.label}</p>
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
            Exploring {detail.name} for your Southampton scheme?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Free-of-charge scheme assessment. Indicative terms within 48 hours.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-heading font-bold text-secondary transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get Indicative Terms
            </Link>
            <a
              href={`tel:${phoneDigits}`}
              className="inline-block rounded-lg border-2 border-white px-8 py-3 font-heading font-bold text-white transition-all hover:bg-white/10"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
