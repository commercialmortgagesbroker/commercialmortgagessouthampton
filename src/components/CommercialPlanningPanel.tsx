import planningData from "@/data/commercial-data/southampton-planning.json";
import { siteConfig } from "@/data/site-config";

interface PlanningApp {
  ref: string;
  address: string;
  postcode: string;
  proposal: string;
  type: string;
  status: string;
  received: string;
  portal: string;
}

interface PlanningData {
  updatedAt: string;
  authority: string;
  count: number;
  applications: PlanningApp[];
}

const data = planningData as PlanningData;

export function CommercialPlanningPanel() {
  const apps = data.applications.slice(0, 8);
  const total = data.count;

  return (
    <section className="section data-band">
      <div className="container-editorial">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="eyebrow">Live planning pipeline</span>
            <h2 className="mt-6 font-editorial text-4xl text-[color:var(--color-paper)] md:text-5xl">
              What&rsquo;s changing hands in {siteConfig.locationName} commercial
              property.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--color-paper)]/70">
              {total}+ commercial-relevant planning applications have been
              submitted across {siteConfig.locationName} in the last 12 weeks
              &mdash; change-of-use to Class E, hotel and leisure consents,
              office facade refurbs, retail conversions. A market-temperature
              read drawn directly from {siteConfig.locationName} City Council&rsquo;s
              public planning register.
            </p>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
            Updated {data.updatedAt}
          </p>
        </div>

        <ul className="grid gap-4 md:grid-cols-2">
          {apps.map((app) => (
            <li
              key={app.ref}
              className="flex flex-col gap-3 border border-[color:var(--color-paper)]/15 bg-[color:var(--color-paper)]/5 p-5 backdrop-blur-sm"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-mono text-xs text-[color:var(--color-accent)]">
                  {app.ref}
                </span>
                <span className="font-mono text-[0.62rem] uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  {app.received}
                </span>
              </div>
              <p className="font-editorial text-base text-[color:var(--color-paper)]">
                {app.address}
              </p>
              <p className="text-sm leading-relaxed text-[color:var(--color-paper)]/75">
                {app.proposal}
              </p>
              <div className="mt-auto flex items-center justify-between pt-2">
                <span className="font-mono text-[0.62rem] uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  {app.postcode} &middot; {app.status}
                </span>
                <a
                  href={app.portal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4 hover:text-[color:var(--color-accent)]"
                >
                  View on portal &rarr;
                </a>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-2xl text-xs leading-relaxed text-[color:var(--color-paper)]/55">
          Source: {siteConfig.locationName} City Council Public Access planning
          register. Filtered for Class B/C/E uses, change-of-use to commercial,
          and trading-business consents. Direct commercial transaction volume
          (sold prices, charges register) is sourced separately via Companies
          House MR01 records and Estates Gazette &mdash; ask us for a
          deal-specific market view.
        </p>
      </div>
    </section>
  );
}
