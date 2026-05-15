"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  /** Canonical keyword, used as eyebrow label (e.g. "development finance manchester") */
  keyword?: string;
  /** Headline display. HTML allowed; wrap `em` for accent colour. */
  title: string;
  /** One-sentence editorial sub-hero. */
  subtitle: string;
  /** Primary CTA */
  ctaText?: string;
  ctaLink?: string;
  /** Secondary CTA (e.g. phone) */
  phone?: string;
  /** Micro-stats row under the CTAs */
  signals?: string[];
  /** Right-column hero image, Unsplash-style long photo ID, or full URL. */
  heroImageId?: string;
  /** Alt text for the hero image */
  heroImageAlt?: string;
}

const UNSPLASH_BASE = "https://images.unsplash.com";

function resolveImageSrc(idOrUrl: string, w: number): string {
  if (idOrUrl.startsWith("http")) return idOrUrl;
  // Short Unsplash ID (as stored in location-images.ts across the network)
  return `${UNSPLASH_BASE}/photo-${idOrUrl}?auto=format&fit=crop&w=${w}&q=72`;
}

export function HeroSection({
  keyword,
  title,
  subtitle,
  ctaText = "Get indicative terms",
  ctaLink = "/contact",
  phone = "0161 820 2050",
  signals = ["Terms in 48 hours", "100+ specialist lenders", "£300M arranged"],
  heroImageId,
  heroImageAlt,
}: HeroSectionProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  const phoneHref = `tel:${phone.replace(/\s/g, "")}`;

  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-20">
      {/* Soft accent glow, behind the image, breathes colour into the layout */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-[560px] w-[560px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--color-accent), transparent 72%) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="container-editorial relative">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-16">
          {/* Left: Editorial text block */}
          <div
            className={`transition-all duration-700 ${loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
          >
            {keyword && <span className="eyebrow">{keyword}</span>}
            <h1
              className="hero-display mt-6"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p
              className={`mt-8 max-w-xl text-lg leading-relaxed text-[color:var(--color-ink-soft)] transition-all delay-150 duration-700 md:text-xl ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              {subtitle}
            </p>
            <div
              className={`mt-10 flex flex-wrap items-center gap-3 transition-all delay-300 duration-700 ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <Link href={ctaLink} className="btn btn-primary">
                {ctaText}
                <span aria-hidden>→</span>
              </Link>
              <a href={phoneHref} className="btn btn-ghost">
                Call {phone}
              </a>
            </div>
            <div
              className={`mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 transition-all delay-500 duration-700 ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              {signals.map((s) => (
                <span
                  key={s}
                  className="flex items-center gap-2 text-sm text-[color:var(--color-muted)]"
                >
                  <span
                    aria-hidden
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{ background: "var(--color-accent)" }}
                  />
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Photo block, editorial crop, mono layered caption */}
          {heroImageId && (
            <div
              className={`relative hidden lg:block transition-all delay-200 duration-700 ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <Image
                  src={resolveImageSrc(heroImageId, 900)}
                  alt={heroImageAlt ?? "City skyline"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 60%, color-mix(in oklch, var(--color-ink), transparent 30%) 100%)",
                  }}
                />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="font-mono text-[0.65rem] uppercase tracking-widest text-[color:var(--color-paper)]/85">
                      On the ground
                    </p>
                    <p className="mt-1 font-editorial text-lg text-[color:var(--color-paper)]">
                      We know every postcode.
                    </p>
                  </div>
                </div>
              </div>

              {/* Secondary mini-card, breaks the single rectangle, adds a human touch */}
              <div
                className="absolute -left-6 -bottom-8 w-60 rounded-md border border-[color:var(--color-rule)] bg-[color:var(--color-white)] p-4 shadow-[0_20px_40px_-20px_rgba(14,14,18,0.2)]"
                style={{ backdropFilter: "blur(6px)" }}
              >
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-1 inline-block h-2 w-2 rounded-full"
                    style={{ background: "var(--color-accent)" }}
                  />
                  <div>
                    <p className="font-mono text-[0.62rem] uppercase tracking-widest text-[color:var(--color-muted)]">
                      Typical response
                    </p>
                    <p className="mt-1 font-editorial text-2xl">
                      <span className="fig">48</span>{" "}
                      <span className="text-sm text-[color:var(--color-muted)]">hours</span>
                    </p>
                    <p className="mt-2 text-xs leading-snug text-[color:var(--color-muted)]">
                      From complete scheme brief to three lender-shortlisted indicative offers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
