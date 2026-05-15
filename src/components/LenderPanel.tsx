import { ScrollReveal } from "@/components/ScrollReveal";

/**
 * The 18 lenders on the homepage panel are a representative slice of the broker's
 * 90+ commercial mortgage panel. The eight starred names are the lenders the broker
 * has explicit permission to display logos for; the rest carry brand names only.
 *
 * Composition deliberately reflects the real CM market:
 *  - 4 high-street commercial divisions (NatWest, Lloyds, Barclays, Santander)
 *  - 8 challenger banks doing the bulk of mid-market CM (Allica, Shawbrook, HTB,
 *    Aldermore, Cambridge & Counties, Cynergy, Paragon, YBS Commercial)
 *  - 4 specialist banks for £1M+, semi-commercial and BTL-flavoured deals
 *    (OakNorth, InterBay Commercial, LendInvest, Together)
 *  - 2 relationship/recognition banks (Recognise, Handelsbanken)
 *
 * NOT included on this panel: bridging-only / pure-development lenders. Those
 * are a different product family and a different broker conversation.
 */

interface Lender {
  name: string;
  category: string;
  /** True if the broker has explicit permission to display the logo. */
  named: boolean;
}

const lenders: Lender[] = [
  { name: "NatWest", category: "High street", named: true },
  { name: "Lloyds", category: "High street", named: true },
  { name: "Barclays", category: "High street", named: true },
  { name: "Santander", category: "High street", named: true },
  { name: "Allica Bank", category: "Challenger bank", named: false },
  { name: "Shawbrook", category: "Challenger bank", named: true },
  { name: "Hampshire Trust Bank", category: "Challenger bank", named: false },
  { name: "Aldermore", category: "Challenger bank", named: false },
  { name: "Cambridge & Counties", category: "Challenger bank", named: false },
  { name: "Cynergy Bank", category: "Challenger bank", named: true },
  { name: "Paragon Bank", category: "Challenger bank", named: false },
  { name: "YBS Commercial", category: "Building society", named: false },
  { name: "OakNorth Bank", category: "Specialist bank", named: false },
  { name: "InterBay Commercial", category: "Specialist (OSB)", named: true },
  { name: "LendInvest", category: "Specialist", named: true },
  { name: "Together", category: "Specialist", named: false },
  { name: "Recognise Bank", category: "Challenger bank", named: false },
  { name: "Handelsbanken", category: "Relationship bank", named: false },
];

interface LenderPanelProps {
  locationName: string;
}

export function LenderPanel({ locationName }: LenderPanelProps) {
  return (
    <section className="section bg-[color:var(--color-paper-deep)]">
      <div className="container-editorial">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <ScrollReveal>
            <div>
              <span className="eyebrow">Lender panel</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                90+ commercial mortgage lenders. Eighteen of them on this page.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-[color:var(--color-muted)]">
                A working panel of high-street commercial divisions, tier-1
                challenger banks, and specialist desks for semi-commercial and
                trading-business deals. We benchmark every {locationName}{" "}
                enquiry across the panel before placing, not three calls to
                whoever picked up.
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[color:var(--color-muted)]">
                Lenders shown below have all written {locationName} commercial
                mortgages with us in the last 18 months. The eight named with
                logos appear with explicit permission. The remaining 70+ on the
                full panel cover specialist sectors (CQC-regulated care, hotel
                EBITDA, dental goodwill, MOT/petrol forecourt) and private
                credit for £2M+ structured deals.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-[color:var(--color-rule)] bg-[color:var(--color-rule)] sm:grid-cols-3">
              {lenders.map((lender) => (
                <div
                  key={lender.name}
                  className="bg-[color:var(--color-paper)] p-5 transition-colors duration-200 hover:bg-[color:var(--color-white)]"
                >
                  <p className="font-editorial text-lg">{lender.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-[color:var(--color-muted)]">
                    {lender.category}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
