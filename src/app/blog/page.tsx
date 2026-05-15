import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";
import { siteConfig } from "@/data/site-config";
import { blogPosts, type BlogPost } from "@/data/blog-posts";

const loc = siteConfig.locationName;

export const metadata: Metadata = {
  title: `${loc} Commercial Mortgage Insights | Market Reports & Lender Commentary`,
  description: `Market intelligence, rate commentary and lender-desk updates for ${loc} commercial property owners, investors and trading businesses. Owner-occupier, investment, semi-commercial, portfolio and trading-business mortgage insights.`,
  alternates: { canonical: `https://${siteConfig.domain}/blog` },
};

function isDraft(post: BlogPost): boolean {
  return /^Coming soon[,.]/.test(post.content.trim());
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogPage() {
  const published = blogPosts.filter((p) => !isDraft(p));
  const drafts = blogPosts.filter(isDraft);

  return (
    <>
      <Breadcrumbs items={[{ label: "Insights", href: "/blog" }]} />

      <section className="bg-[color:var(--color-ink)] py-20 text-[color:var(--color-paper)]">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow text-[color:var(--color-paper)]/70">
              Editorial
            </span>
            <h1 className="mt-6 font-editorial text-4xl md:text-5xl">
              {loc} Commercial Mortgage Insights
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[color:var(--color-paper)]/75">
              Market intelligence, lender-desk updates and rate commentary for{" "}
              {loc} commercial property owners, investors and trading
              businesses.
            </p>
          </div>
        </div>
      </section>

      {published.length > 0 && (
        <section className="section">
          <div className="container-editorial">
            <ScrollReveal>
              <div className="mb-12 flex items-end justify-between">
                <div>
                  <span className="eyebrow">Latest</span>
                  <h2 className="mt-6 font-editorial text-3xl md:text-4xl">
                    Published reads
                  </h2>
                </div>
                <p className="text-sm text-[color:var(--color-muted)]">
                  {published.length} {published.length === 1 ? "piece" : "pieces"}
                </p>
              </div>
            </ScrollReveal>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {published.map((p, i) => (
                <ScrollReveal key={p.slug} delay={i * 0.05}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group block h-full rounded-lg border border-[color:var(--color-rule)] bg-white p-6 transition-all hover:border-[color:var(--color-ink)] hover:-translate-y-1"
                  >
                    <p className="text-xs uppercase tracking-widest text-[color:var(--color-accent)]">
                      {p.category}
                    </p>
                    <h3 className="mt-4 font-editorial text-xl leading-tight text-[color:var(--color-ink)] group-hover:text-[color:var(--color-accent)]">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)]">
                      {p.excerpt.slice(0, 200)}
                      {p.excerpt.length > 200 ? "..." : ""}
                    </p>
                    <div className="mt-5 flex items-center justify-between text-xs text-[color:var(--color-muted)]">
                      <time dateTime={p.publishDate}>
                        {formatDate(p.publishDate)}
                      </time>
                      <span className="font-medium text-[color:var(--color-accent)] group-hover:underline">
                        Read &rarr;
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {drafts.length > 0 && (
        <section
          className={`section ${published.length > 0 ? "bg-[color:var(--color-paper-deep)]" : ""}`}
        >
          <div className="container-editorial">
            <ScrollReveal>
              <div className="mb-12">
                <span className="eyebrow">In preparation</span>
                <h2 className="mt-6 font-editorial text-3xl md:text-4xl">
                  In the pipeline
                </h2>
                <p className="mt-4 max-w-2xl text-base text-[color:var(--color-muted)]">
                  Briefings we are working on across {loc}. Outlines available
                  now, full pieces shipping through the editorial calendar.
                  Send a topic suggestion to enquiries@{siteConfig.domain}.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {drafts.map((p, i) => (
                <ScrollReveal key={p.slug} delay={i * 0.05}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group block h-full rounded-lg border border-[color:var(--color-rule)] bg-white p-6 transition-all hover:border-[color:var(--color-ink)]"
                  >
                    <p className="text-xs uppercase tracking-widest text-[color:var(--color-muted)]">
                      {p.category} · Draft
                    </p>
                    <h3 className="mt-4 font-editorial text-lg leading-tight text-[color:var(--color-ink)] group-hover:text-[color:var(--color-accent)]">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-muted)]">
                      {p.excerpt.slice(0, 180)}
                      {p.excerpt.length > 180 ? "..." : ""}
                    </p>
                    <p className="mt-5 text-xs font-medium uppercase tracking-widest text-[color:var(--color-accent)]">
                      See outline &rarr;
                    </p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="rounded-lg border border-[color:var(--color-ink)] bg-[color:var(--color-ink)] p-10 text-[color:var(--color-paper)] md:p-16">
              <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
                <div>
                  <span className="eyebrow text-[color:var(--color-paper)]/70">
                    Looking at a deal?
                  </span>
                  <h2 className="mt-6 font-editorial text-3xl leading-[1.1] md:text-4xl">
                    Send us a {loc} commercial mortgage to look at.
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--color-paper)]/75">
                    Indicative terms from three to five lenders within 48
                    hours. No cost for the initial assessment.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  <Link href="/contact" className="btn btn-accent">
                    Get in touch
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
