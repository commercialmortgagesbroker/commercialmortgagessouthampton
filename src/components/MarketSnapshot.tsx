import { ScrollReveal } from "@/components/ScrollReveal";

interface MarketStat {
  value: string;
  label: string;
  footnote?: string;
}

interface MarketSnapshotProps {
  locationName: string;
  stats: MarketStat[];
  /** E.g. "HM Land Registry + Local Planning Authority · last 12 months" */
  source: string;
}

/**
 * Editorial data band, named stats for the location, in monospace, on a
 * dark-on-ink panel. Reads as a live market snapshot, not marketing copy.
 */
export function MarketSnapshot({ locationName, stats, source }: MarketSnapshotProps) {
  return (
    <section className="data-band">
      <div className="container-editorial">
        <ScrollReveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">{locationName} · right now</span>
              <h2 className="mt-3 font-editorial text-3xl text-[color:var(--color-paper)] md:text-4xl">
                The market, in numbers.
              </h2>
            </div>
            <p className="text-xs text-[color:var(--color-paper)]/60">{source}</p>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-10 border-t border-[color:var(--color-paper)]/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.06}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  {s.value}
                </p>
                <p className="mt-3 text-sm font-medium uppercase tracking-wider text-[color:var(--color-paper)]/70">
                  {s.label}
                </p>
                {s.footnote && (
                  <p className="mt-1 text-xs text-[color:var(--color-paper)]/50">
                    {s.footnote}
                  </p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
