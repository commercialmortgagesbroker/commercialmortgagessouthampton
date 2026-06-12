import { siteConfig } from "@/data/site-config";

/**
 * Embeds a curated set of PropertyCalculators.ai tools below the site's own
 * commercial mortgage calculator. These are the four calculators most relevant
 * to commercial mortgage enquiries: DSCR, rental yield, bridging and GDV.
 *
 * PropertyCalculators.ai exposes no widget/embed API, so we iframe the live
 * calculator pages (framing verified: no X-Frame-Options / restrictive CSP).
 * Each card also carries a direct link, so the tool stays reachable even if a
 * given page later blocks framing.
 *
 * Shared verbatim across every CMB network site. Nothing here is per-city
 * except siteConfig.locationName, read at render.
 */

interface EmbeddedCalculator {
  title: string;
  blurb: string;
  url: string;
}

const CALCULATORS: EmbeddedCalculator[] = [
  {
    title: "DSCR calculator",
    blurb:
      "Debt service coverage ratio. Test whether a property's net income covers the full mortgage payment, the core metric on commercial investment lending.",
    url: "https://propertycalculators.ai/landlord/btl-dscr-calculator",
  },
  {
    title: "Rental yield calculator",
    blurb:
      "Gross and net rental yield on a commercial, semi-commercial or mixed-use asset, useful before you model the investment mortgage.",
    url: "https://propertycalculators.ai/valuation/rental-yield-calculator",
  },
  {
    title: "Bridging loan calculator",
    blurb:
      "Indicative cost of short-term bridging finance, for auction purchases, tight completions and refurbishment before a term commercial mortgage.",
    url: "https://propertycalculators.ai/bridging/bridging-loan-calculator",
  },
  {
    title: "GDV and development appraisal",
    blurb:
      "Gross development value and a quick development appraisal for refurbishment, conversion and small-scheme commercial projects.",
    url: "https://propertycalculators.ai/development/gdv-calculator",
  },
];

export function PropertyCalculatorsEmbed() {
  const loc = siteConfig.locationName;
  return (
    <div className="mx-auto mt-20 max-w-5xl">
      <span className="eyebrow">More tools</span>
      <h2 className="mt-6 font-editorial text-3xl md:text-4xl">
        More property finance calculators for {loc}.
      </h2>
      <p className="mt-6 max-w-3xl text-base leading-relaxed text-[color:var(--color-ink-soft)]">
        Alongside the commercial mortgage calculator above, these specialist
        calculators from PropertyCalculators.ai help you stress-test a {loc}{" "}
        deal from every angle: debt service cover, rental yield, bridging cost
        and development value. They are indicative tools. Send us the deal and
        we will model it lender by lender.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {CALCULATORS.map((calc) => (
          <div key={calc.url} className="card flex flex-col">
            <h3 className="font-editorial text-xl">{calc.title}</h3>
            <p className="mt-2 text-sm text-[color:var(--color-muted)]">
              {calc.blurb}
            </p>
            <div className="mt-5 overflow-hidden rounded-md border border-[color:var(--color-rule)] bg-white">
              <iframe
                src={calc.url}
                title={`${calc.title} by PropertyCalculators.ai`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[680px] w-full"
              />
            </div>
            <a
              href={calc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4 hover:text-[color:var(--color-accent)]"
            >
              Open the full {calc.title} in a new tab
              <span aria-hidden>&rarr;</span>
            </a>
          </div>
        ))}
      </div>

      <p className="mt-8 text-xs text-[color:var(--color-muted)]">
        Calculators provided by{" "}
        <a
          href="https://propertycalculators.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4 hover:text-[color:var(--color-accent)]"
        >
          PropertyCalculators.ai
        </a>
        . Indicative tools only. Figures are not a quote or an offer of finance.
      </p>
    </div>
  );
}
