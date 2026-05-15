import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SchemaInjector } from "@/components/SchemaInjector";
import { generateArticleSchema } from "@/lib/schema";
import { siteConfig } from "@/data/site-config";
import { blogPosts, type BlogPost } from "@/data/blog-posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

function findPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) return { title: "Not found" };
  return {
    title: `${post.title} | ${siteConfig.name}`,
    description: post.excerpt.slice(0, 160),
    alternates: { canonical: `https://${siteConfig.domain}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt.slice(0, 200),
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author],
    },
  };
}

function isDraft(content: string): boolean {
  return /^Coming soon[,.]/.test(content.trim());
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) notFound();

  const draft = isDraft(post.content);
  const html = await marked.parse(post.content, { gfm: true, breaks: false });

  // Find next/prev posts
  const idx = blogPosts.findIndex((p) => p.slug === post.slug);
  const prev = idx > 0 ? blogPosts[idx - 1] : null;
  const next = idx < blogPosts.length - 1 ? blogPosts[idx + 1] : null;

  return (
    <>
      <SchemaInjector
        schema={generateArticleSchema(
          post.title,
          post.excerpt.slice(0, 200),
          `https://${siteConfig.domain}/blog/${post.slug}`,
          post.publishDate,
          post.publishDate,
        )}
      />
      <Breadcrumbs
        items={[
          { label: "Insights", href: "/blog" },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <article>
        {/* Hero */}
        <section className="bg-[color:var(--color-ink)] py-20 text-[color:var(--color-paper)]">
          <div className="container-editorial">
            <div className="mx-auto max-w-3xl">
              <span className="eyebrow text-[color:var(--color-paper)]/70">
                {post.category}
                {draft && " · Draft"}
              </span>
              <h1 className="mt-6 font-editorial text-4xl leading-[1.1] md:text-5xl">
                {post.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[color:var(--color-paper)]/75">
                {post.excerpt}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[color:var(--color-paper)]/55">
                <span>By {post.author}</span>
                <span>·</span>
                <time dateTime={post.publishDate}>
                  {new Date(post.publishDate).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                {post.tags.length > 0 && (
                  <>
                    <span>·</span>
                    <span>{post.tags.slice(0, 4).join(", ")}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="section">
          <div className="container-editorial">
            <div className="mx-auto max-w-3xl">
              {draft && (
                <div className="mb-10 rounded-md border-l-4 border-[color:var(--color-accent)] bg-[color:var(--color-accent-soft)] p-5 text-sm leading-relaxed">
                  <p className="font-editorial text-base text-[color:var(--color-ink)]">
                    This piece is in preparation.
                  </p>
                  <p className="mt-2 text-[color:var(--color-muted)]">
                    The outline below is the planned structure for the full
                    piece. Send a topic suggestion or a follow-up question to
                    enquiries@{siteConfig.domain.replace("www.", "")} and we
                    will work it in.
                  </p>
                </div>
              )}
              {post.localStats && post.localStats.length > 0 && (
                <div className="mb-10 grid gap-3 rounded-md border border-[color:var(--color-rule)] bg-[color:var(--color-paper-deep)] p-5 md:grid-cols-2">
                  {post.localStats.map((s, i) => (
                    <div key={i} className="text-sm">
                      <p className="fig text-base text-[color:var(--color-ink)]">
                        {s.stat}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-widest text-[color:var(--color-muted)]">
                        {s.source}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              <div
                className="prose-blog"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-tight">
          <div className="container-editorial">
            <ScrollReveal>
              <div className="rounded-lg border border-[color:var(--color-ink)] bg-[color:var(--color-ink)] p-10 text-[color:var(--color-paper)] md:p-16">
                <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
                  <div>
                    <span className="eyebrow text-[color:var(--color-paper)]/70">
                      Send the deal
                    </span>
                    <h2 className="mt-6 font-editorial text-3xl leading-[1.1] md:text-4xl">
                      Got a {siteConfig.locationName} commercial mortgage we
                      should look at?
                    </h2>
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--color-paper)]/75">
                      Send the property, the LTV you are aiming for, and a
                      short trading or rental note. Indicative terms from
                      three to five lenders within 48 hours.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 md:justify-end">
                    <Link href="/contact" className="btn btn-accent">
                      Get indicative terms
                    </Link>
                    <Link
                      href="/blog"
                      className="btn btn-ghost"
                      style={{
                        borderColor: "var(--color-paper)",
                        color: "var(--color-paper)",
                      }}
                    >
                      All insights
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Prev / next */}
        {(prev || next) && (
          <section className="section-tight">
            <div className="container-editorial">
              <div className="grid gap-6 border-t border-[color:var(--color-rule)] pt-10 md:grid-cols-2">
                {prev ? (
                  <Link
                    href={`/blog/${prev.slug}`}
                    className="group block rounded-md border border-[color:var(--color-rule)] p-5 transition-colors hover:border-[color:var(--color-ink)]"
                  >
                    <p className="text-xs uppercase tracking-widest text-[color:var(--color-muted)]">
                      Previous
                    </p>
                    <p className="mt-2 font-editorial text-lg text-[color:var(--color-ink)] group-hover:text-[color:var(--color-accent)]">
                      {prev.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}
                {next ? (
                  <Link
                    href={`/blog/${next.slug}`}
                    className="group block rounded-md border border-[color:var(--color-rule)] p-5 transition-colors hover:border-[color:var(--color-ink)] md:text-right"
                  >
                    <p className="text-xs uppercase tracking-widest text-[color:var(--color-muted)]">
                      Next
                    </p>
                    <p className="mt-2 font-editorial text-lg text-[color:var(--color-ink)] group-hover:text-[color:var(--color-accent)]">
                      {next.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
