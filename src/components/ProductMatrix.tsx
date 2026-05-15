import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

interface ProductRow {
  product: string;
  slug: string;
  facility: string;
  ltv: string;
  cover: string;
  rate: string;
  term: string;
  note: string;
}

const products: ProductRow[] = [
  {
    product: "Owner-occupier",
    slug: "owner-occupier-commercial-mortgage",
    facility: "£150K - £10M",
    ltv: "up to 75%",
    cover: "EBITDA 1.3-1.5×",
    rate: "6.0 - 7.5%",
    term: "5 - 25y",
    note: "Trading business buying its own premises. Underwritten on filed accounts and EBITDA cover, not personal income.",
  },
  {
    product: "Commercial investment",
    slug: "commercial-investment-mortgage",
    facility: "£200K - £10M",
    ltv: "up to 75%",
    cover: "ICR 140-160%",
    rate: "6.5 - 8.5%",
    term: "5 - 25y",
    note: "Buying or refinancing a let commercial asset. Driven by rental income, lease length and tenant covenant, not your own job.",
  },
  {
    product: "Semi-commercial",
    slug: "semi-commercial-mortgage",
    facility: "£150K - £5M",
    ltv: "up to 75%",
    cover: "DSCR 130-145%",
    rate: "6.5 - 8.5%",
    term: "5 - 25y",
    note: "Mixed-use including shop with flats above, restaurant with private accommodation, B&B with owner quarters. Specialist desks lead this.",
  },
  {
    product: "Portfolio refinance",
    slug: "portfolio-refinance",
    facility: "£500K - £25M",
    ltv: "up to 70%",
    cover: "Blended ICR 140%",
    rate: "6.5 - 8.0%",
    term: "5 - 25y",
    note: "5+ commercial assets, single facility, blended LTV. Restructures a maturing facility or rolls up multiple loans.",
  },
  {
    product: "Trading business",
    slug: "trading-business-mortgage",
    facility: "£150K - £5M",
    ltv: "60 - 70%",
    cover: "EBITDA 1.5-2.0×",
    rate: "7.0 - 9.0%",
    term: "10 - 25y",
    note: "Pubs, hotels, care homes, dental, MOT, nurseries, vets, B&B. Sector specialists assess goodwill, barrelage, occupancy, CQC ratings.",
  },
  {
    product: "Commercial remortgage",
    slug: "commercial-remortgage",
    facility: "£150K - £10M",
    ltv: "up to 75%",
    cover: "ICR/DSCR 140%+",
    rate: "6.0 - 8.0%",
    term: "5 - 25y",
    note: "Refinancing an existing commercial mortgage on better terms, raising capital, or exiting an ERC window with a 5-year fix.",
  },
  {
    product: "Commercial bridging",
    slug: "commercial-bridge-to-let",
    facility: "£150K - £5M",
    ltv: "up to 70%",
    cover: "Interest-only",
    rate: "8.5 - 11.0%",
    term: "6 - 24m",
    note: "Short-term to permanent. Bridges auction completion, vacant-to-tenanted, or unmortgageable-to-mortgageable, with a term CM exit.",
  },
  {
    product: "Second-charge",
    slug: "second-charge-commercial-mortgage",
    facility: "£100K - £2M",
    ltv: "combined 75%",
    cover: "DSCR 130%+",
    rate: "8.5 - 11.0%",
    term: "5 - 15y",
    note: "Capital raise behind an existing first charge. Useful when the first charge is at a low rate you don't want to disturb.",
  },
];

export function ProductMatrix() {
  return (
    <section className="section">
      <div className="container-editorial">
        <ScrollReveal>
          <div className="mb-12 max-w-2xl">
            <span className="eyebrow">The eight products</span>
            <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
              The commercial mortgage range,
              <em className="font-editorial italic text-[color:var(--color-accent)]"> with the numbers</em>.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[color:var(--color-muted)]">
              Indicative ranges from live lender positions across our 90+ panel
              as of mid‑2026. LTV, cover and rate move per asset class, lease
              quality and trading covenant; these are the typical bands.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop matrix */}
        <ScrollReveal delay={0.05}>
          <div className="hidden overflow-hidden rounded-lg border border-[color:var(--color-rule)] bg-[color:var(--color-white)] lg:block">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-[color:var(--color-rule)] bg-[color:var(--color-paper)]">
                  <th className="p-4 text-xs font-medium uppercase tracking-wider text-[color:var(--color-muted)]">
                    Product
                  </th>
                  <th className="p-4 text-xs font-medium uppercase tracking-wider text-[color:var(--color-muted)]">
                    Facility
                  </th>
                  <th className="p-4 text-xs font-medium uppercase tracking-wider text-[color:var(--color-muted)]">
                    LTV
                  </th>
                  <th className="p-4 text-xs font-medium uppercase tracking-wider text-[color:var(--color-muted)]">
                    Cover test
                  </th>
                  <th className="p-4 text-xs font-medium uppercase tracking-wider text-[color:var(--color-muted)]">
                    Rate (pa)
                  </th>
                  <th className="p-4 text-xs font-medium uppercase tracking-wider text-[color:var(--color-muted)]">
                    Term
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr
                    key={p.product}
                    className="border-b border-[color:var(--color-rule)] last:border-0 transition-colors hover:bg-[color:var(--color-paper)]"
                  >
                    <td className="p-4 align-top">
                      <Link
                        href={`/services/${p.slug}`}
                        className="font-editorial text-lg hover:text-[color:var(--color-accent)]"
                      >
                        {p.product}
                      </Link>
                      <p className="mt-1 max-w-xs text-xs text-[color:var(--color-muted)]">
                        {p.note}
                      </p>
                    </td>
                    <td className="p-4 align-top fig text-sm">{p.facility}</td>
                    <td className="p-4 align-top fig text-sm">{p.ltv}</td>
                    <td className="p-4 align-top fig text-sm">{p.cover}</td>
                    <td className="p-4 align-top fig text-sm">{p.rate}</td>
                    <td className="p-4 align-top fig text-sm">{p.term}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        {/* Mobile / tablet stacked cards */}
        <div className="grid gap-4 lg:hidden">
          {products.map((p, i) => (
            <ScrollReveal key={p.product} delay={i * 0.04}>
              <div className="card">
                <Link
                  href={`/services/${p.slug}`}
                  className="font-editorial text-xl hover:text-[color:var(--color-accent)]"
                >
                  {p.product}
                </Link>
                <p className="mt-1 text-sm text-[color:var(--color-muted)]">
                  {p.note}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 border-t border-[color:var(--color-rule)] pt-4 text-sm">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[color:var(--color-muted)]">
                      Facility
                    </p>
                    <p className="fig mt-1">{p.facility}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[color:var(--color-muted)]">
                      LTV
                    </p>
                    <p className="fig mt-1">{p.ltv}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[color:var(--color-muted)]">
                      Cover
                    </p>
                    <p className="fig mt-1">{p.cover}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[color:var(--color-muted)]">
                      Rate
                    </p>
                    <p className="fig mt-1">{p.rate}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/services" className="btn btn-primary">
              See every product in detail
            </Link>
            <Link href="/calculator" className="btn btn-ghost">
              Model your repayment
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
