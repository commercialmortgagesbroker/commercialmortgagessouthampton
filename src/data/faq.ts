export interface FAQItem {
  question: string;
  answer: string;
  slug: string;
  relatedLinks?: { text: string; href: string }[];
}

export const faqItems: FAQItem[] = [
  {
    question: "What is a commercial mortgage?",
    slug: "what-is-a-commercial-mortgage",
    answer: `A commercial mortgage is long-term debt secured against income-producing or owner-occupied commercial property, offices, retail, industrial units, semi-commercial shop+flats, care homes, pubs, hotels, dental practices, MOT garages and similar. In the Southampton market, facilities typically run from £150K to £10M, with LTVs of 65–75%, terms of 5 to 25 years, and rates between 7.0% and 10.0% pa as of mid-2026. Commercial mortgages differ from development finance (which funds construction in tranches), a commercial mortgage funds the purchase or refinance of a completed property and pays out in full at completion. The lender takes a first legal charge over the property as security; the borrower repays via monthly capital and interest payments over the term.`,
    relatedLinks: [
      { text: "Owner-Occupier", href: "/services/owner-occupier-commercial-mortgage" },
      { text: "Commercial Investment", href: "/services/commercial-investment-mortgage" },
      { text: "Our Services", href: "/services" },
    ],
  },
  {
    question: "How much can I borrow on a Southampton commercial mortgage?",
    slug: "how-much-can-i-borrow",
    answer: `Borrowing capacity depends on product type, property type and the underwriting test. Owner-occupier and commercial investment mortgages routinely stretch to 75% LTV, capped by the affordability test (EBITDA cover for owner-occupier, ICR for investment). Semi-commercial reaches 75% on classic shop+flat archetypes via specialist lenders. Trading-business mortgages (pubs, hotels, care homes, dental, MOT, nursery) are tighter, typically 60–70% LTV reflecting the sector-specific risk. Larger schemes in Southampton city centre or the Mayflower Quarter can reach £10M+ through challenger banks (Shawbrook, Allica, HTB) and specialist desks (OakNorth, Cynergy Bank). Use our commercial mortgage calculator for an indicative repayment figure based on your loan amount, term and rate.`,
    relatedLinks: [
      { text: "Calculator", href: "/calculator" },
      { text: "Owner-Occupier", href: "/services/owner-occupier-commercial-mortgage" },
      { text: "Commercial Investment", href: "/services/commercial-investment-mortgage" },
    ],
  },
  {
    question: "What interest rates apply to Southampton commercial mortgages in 2026?",
    slug: "interest-rates-southampton-2026",
    answer: `For mid-2026 the typical Southampton commercial mortgage range is 6.0–9.0% pa. Pricing depends heavily on product, sector, LTV and covenant strength. Owner-occupier on strong covenants prices best at 6.0–7.5% pa. Commercial investment runs 6.5–8.5% pa, with the strongest tenant covenants at the lower end. Semi-commercial reaches 6.5–8.5% pa via specialist lenders. Trading-business mortgages stretch to 7.0–9.0% pa reflecting the sector-specialist underwrite. Bridge-to-let runs 0.70–0.95% pm (equivalent 8.5–11.5% pa) with agreed term-out back to standard 6.5–8.5% pa once the asset stabilises. We benchmark every Southampton deal across a 90+ lender panel, high-street (NatWest, Lloyds, Barclays, Santander), challenger (Shawbrook, Allica, HTB, Hampshire Trust Bank), and specialist (InterBay Commercial, Cynergy Bank, LendInvest).`,
    relatedLinks: [
      { text: "Owner-Occupier", href: "/services/owner-occupier-commercial-mortgage" },
      { text: "Bridge-to-Let", href: "/services/commercial-bridge-to-let" },
      { text: "Trading-Business", href: "/services/trading-business-mortgage" },
    ],
  },
  {
    question: "What LTV can I achieve on a commercial mortgage?",
    slug: "ltv-commercial-mortgage",
    answer: `Loan-to-value (LTV) is the primary leverage metric for commercial mortgages, the loan amount as a percentage of the property’s open market value. Owner-occupier and commercial investment mortgages routinely reach 75% LTV on strong covenants. Semi-commercial (shop with flat above) reaches 75% via specialist desks. Trading-business mortgages cap at 60–70% LTV reflecting sector-specific risk on operational property. The achievable LTV is also capped by the affordability test: for investment, ICR cover at 140–160% (rent against interest) stressed at a notional rate above pay rate; for owner-occupier, EBITDA cover at 1.3–1.5x; for trading-business, sector-specific cover (occupancy / barrelage / fee rate / Ofsted). The lower of the LTV cap or the affordability cap is binding.`,
    relatedLinks: [
      { text: "Owner-Occupier", href: "/services/owner-occupier-commercial-mortgage" },
      { text: "Commercial Investment", href: "/services/commercial-investment-mortgage" },
      { text: "Semi-Commercial", href: "/services/semi-commercial-mortgage" },
    ],
  },
  {
    question: "How long does it take to arrange a Southampton commercial mortgage?",
    slug: "how-long-does-funding-take",
    answer: `Indicative terms within 48 hours of a complete enquiry. Full completion typically 4–8 weeks, depending on valuation, legal complexity and (for trading-business) the specialist underwriting on EBITDA / sector metrics. The critical-path item is almost always the RICS Red Book valuation, typically 2–3 weeks for mainstream commercial, 3–5 weeks for sector-specialist (care home, hotel, pub). Specialist trading-business deals run 6–10 weeks total reflecting the longer sector underwrite. Faster turnaround is possible on clean owner-occupier deals, we have completed in 22 working days where the borrower had clean accounts and a tight legal pack. Bridge-to-let cases can complete in 2–3 weeks for clean transactions because bridge specialists are speed-orientated.`,
    relatedLinks: [
      { text: "Our Process", href: "/how-it-works" },
      { text: "Bridge-to-Let", href: "/services/commercial-bridge-to-let" },
      { text: "Contact Us", href: "/contact" },
    ],
  },
  {
    question: "Do I need a commercial property valuation?",
    slug: "do-i-need-valuation",
    answer: `Yes, every commercial mortgage requires an independent RICS Red Book valuation commissioned by the lender. The valuer assesses the open market value of the property, the market rent (for investment), and (for trading-business) the sector-specific economics, bed value for care homes, EBITDA multiple for hotels and pubs, etc. Valuation typically takes 2–3 weeks for mainstream commercial property and 3–5 weeks for specialist (care home, hotel, pub, MOT with environmental due diligence). Valuation fees range from £1,500 for small straightforward commercial through to £8,000+ for complex specialist sector valuations. The borrower pays for the valuation regardless of whether the mortgage completes. For petrol forecourts, Phase II environmental due diligence (intrusive ground investigation) adds 4–6 weeks and £8K–£15K to the process.`,
    relatedLinks: [
      { text: "Our Process", href: "/how-it-works" },
      { text: "Trading-Business", href: "/services/trading-business-mortgage" },
    ],
  },
  {
    question: "Which Southampton areas do you cover?",
    slug: "which-areas-do-you-cover",
    answer: `We arrange commercial mortgages across the full Southampton city footprint and the wider Hampshire and Solent corridor. Twelve area pages cover the active commercial sub-markets: Southampton city centre and Above Bar (CBD retail and office), Ocean Village (marina-led hospitality and office), Mayflower Quarter and Royal Pier (major mixed-use regeneration), Bedford Place and The Polygon (independent F&B and serviced office), Bevois Valley (student-economy F&B and HMO), Highfield and Portswood (university-adjacent HMO and retail), Shirley (high-street mixed-use), Bitterne (district retail and care), Bassett and Lordswood (professional and healthcare), Woolston and Sholing (riverside industrial and retail), Adanac Park and Nursling (M271 industrial and logistics), Hedge End and West End (out-of-town retail and business park). Beyond the city itself we routinely fund deals in Eastleigh, Romsey, Winchester, Portsmouth, Fareham, Chandler's Ford and the wider Solent commuter belt from the same Hampshire-active lender panel.`,
    relatedLinks: [
      { text: "Browse All Areas", href: "/areas" },
      { text: "Contact Us", href: "/contact" },
    ],
  },
  {
    question: "What deposit do I need for a commercial mortgage?",
    slug: "deposit-commercial-mortgage",
    answer: `Typically 25–30% of the property value as deposit (corresponding to 70–75% LTV). Owner-occupier deposits usually come from accumulated retained profit; investment deposits from existing equity in other assets or sale proceeds. Trading-business mortgages often require 30–40% deposit reflecting sector-specific risk. Specialist deals (vacant assets, value-add, specialist trade) sometimes need 40%+. The deposit must be genuine equity, accumulated retained profit, sale proceeds of another asset, or family gift (with declaration). It cannot come from another loan secured against the same property. Some specialists (Cambridge & Counties, InterBay) flex deposit requirements down for established borrowers in defensive sectors (dental, GP, pharmacy) at 20% deposit (80% LTV), but the rate steps up to compensate.`,
    relatedLinks: [
      { text: "Owner-Occupier", href: "/services/owner-occupier-commercial-mortgage" },
      { text: "Commercial Investment", href: "/services/commercial-investment-mortgage" },
    ],
  },
  {
    question: "What is the difference between owner-occupier and investment commercial mortgages?",
    slug: "owner-occupier-vs-investment",
    answer: `Owner-occupier commercial mortgages fund the purchase of premises your business trades from, your dental practice, your accountancy office, your manufacturing unit. The underwriting test is EBITDA cover (trading profit against mortgage payment) at 1.3–1.5x, with two years of clean accounts the standard minimum. Investment commercial mortgages fund a let property held as an income-producing asset, the borrower does not occupy. The underwriting test is ICR (rent against interest) at 140–160% stressed at a notional rate above pay rate. Tenant covenant and lease length matter materially. LTVs are similar across both products (up to 75%) but the underwriting evidence differs: owner-occupier needs clean trading accounts; investment needs strong leases and creditworthy tenants. Pricing is broadly similar, with the strongest owner-occupier covenants pricing keenest of all (7.0% pa range).`,
    relatedLinks: [
      { text: "Owner-Occupier", href: "/services/owner-occupier-commercial-mortgage" },
      { text: "Commercial Investment", href: "/services/commercial-investment-mortgage" },
    ],
  },
  {
    question: "Can I get a commercial mortgage with limited trading history?",
    slug: "limited-trading-history",
    answer: `For owner-occupier mortgages, two years of clean trading accounts is the typical minimum. Specialist lenders flex this to 12–18 months in regulated sectors where the qualification itself underwrites the cashflow, dental practices, GP surgeries, pharmacies, regulated professions. Below 12 months trading history, owner-occupier is harder; specialists may still consider but typically require a higher deposit (35–40%) and stronger personal guarantee. For investment mortgages the borrower’s personal trading history matters less than the tenant covenant and lease, a let asset with a creditworthy tenant on a long lease prices on the asset and lease, not the borrower. New SPVs with no trading history regularly fund commercial investment mortgages provided the underlying tenant covenant is sound. Specialist lenders like InterBay Commercial and Cambridge & Counties have meaningful flexibility on these edge cases.`,
    relatedLinks: [
      { text: "Owner-Occupier", href: "/services/owner-occupier-commercial-mortgage" },
      { text: "Trading-Business", href: "/services/trading-business-mortgage" },
    ],
  },
  {
    question: "What documents do I need to apply?",
    slug: "documents-needed",
    answer: `For owner-occupier commercial mortgages: 2 years’ business accounts, current management accounts, property file (title, survey, EPC), proof of deposit, professional team contacts (solicitor, accountant), and personal ID / proof of address. For commercial investment: lease pack (commercial leases, ASTs where applicable), tenant covenant evidence (accounts where covenant materially affects pricing), borrower SPV documentation, deposit proof, property file, ID. For trading-business mortgages, sector-specific additional pack: CQC inspection reports for care home, Ofsted reports for nursery, NHS UDA contract for dental, VOSA approval for MOT, license documentation for licensed-trade, occupancy / ADR data for hotel. The cleaner and more complete the pack, the faster the credit approval, clean packs typically approve within 7–10 working days of submission.`,
    relatedLinks: [
      { text: "Our Process", href: "/how-it-works" },
      { text: "Contact Us", href: "/contact" },
    ],
  },
  {
    question: "Are commercial mortgages regulated?",
    slug: "are-commercial-mortgages-regulated",
    answer: `Most commercial mortgages are unregulated, falling outside the FCA’s regulated mortgage regime. Pure commercial property (offices, retail, industrial, mixed-use let on commercial leases) and pure investment mortgages are unregulated. The exception sits in semi-commercial and mixed-use deals where the borrower will personally occupy one of the residential units, those can fall into FCA-regulated territory under the regulated mortgage contracts framework. Owner-occupier commercial mortgages on the borrower’s business premises are unregulated provided the property is genuinely the trading premises (not residential masquerading as commercial). We flag any potential regulated angle at the outset and refer the case to a regulated firm if it applies. We do not hold FCA authorisation because the products we arrange are unregulated; we do not transact regulated business ourselves.`,
    relatedLinks: [
      { text: "Semi-Commercial", href: "/services/semi-commercial-mortgage" },
      { text: "About Us", href: "/about" },
    ],
  },
  {
    question: "What if I want to remortgage off an existing fix?",
    slug: "remortgage-off-existing-fix",
    answer: `Commercial remortgage covers two distinct moments: end-of-fix transition (a typical 5-year fix matures and you transition to a new rate) and capital-raise refinance (releasing equity from a property that has appreciated since acquisition). The first conversation is always ERC (early repayment charge) handling. If you’re inside an ERC window the maths often still works, saving 1.5% on rate over a fresh five-year term outweighs an ERC of 3% of the redemption sum on most £1M+ facilities. We model the break-even precisely. Some lenders offer to pay-down ERC against new arrangement fees; we know which. Start the remortgage process 4–6 months before fix expiry to allow benchmarking, ERC modelling, valuation and completion without time pressure. End-of-fix transitions are usually clean from an underwriting perspective, the asset is income-producing, the borrower has a track record.`,
    relatedLinks: [
      { text: "Commercial Remortgage", href: "/services/commercial-remortgage" },
      { text: "Calculator", href: "/calculator" },
    ],
  },
  {
    question: "Can I include the broker fee in the mortgage?",
    slug: "broker-fee-in-mortgage",
    answer: `Yes, broker fees are typically included in the arrangement fee added to the loan, rather than paid separately on completion. This is the standard structure across UK commercial mortgages. The total arrangement fee (typically 1–2% of the gross facility) includes the lender’s setup fee plus the broker fee, with the precise split disclosed on the indicative terms sheet so you see it transparently before agreeing terms. For larger facilities (£3M+), arrangement fees scale down proportionally. For specialist trading-business mortgages, fees can sit at the higher end (1.5–2.5%) reflecting the longer specialist underwrite. We disclose all fees up front, no surprises at completion.`,
    relatedLinks: [
      { text: "Our Process", href: "/how-it-works" },
      { text: "About Us", href: "/about" },
    ],
  },
  {
    question: "Why use a broker rather than going direct to my bank?",
    slug: "why-use-a-broker",
    answer: `Two reasons. First, even the strongest high-street relationships price within their own credit policy, they don’t benchmark you against the rest of the market. We do, every deal. The 90+ lender panel includes high-street (NatWest, Lloyds, Barclays, Santander), challenger (Shawbrook, Allica, HTB, Hampshire Trust Bank, Cambridge & Counties), and specialist desks (InterBay Commercial, Cynergy Bank, LendInvest, OakNorth), covering rate ranges, LTV brackets and sectors that no single bank covers in isolation. Second, the deals high-street desks decline (semi-commercial, trading-business, stretched LTV, sector-specific covenants, complex SPV structures) often place comfortably with a challenger or specialist at sensible terms, but you have to know which desk to ring. With £400M+ arranged across a deep Hampshire and Solent panel, we know the desk for your deal. If the numbers don’t work, we’ll tell you straight, before you waste time on a bank decline.`,
    relatedLinks: [
      { text: "About Us", href: "/about" },
      { text: "Our Process", href: "/how-it-works" },
      { text: "Contact Us", href: "/contact" },
    ],
  },
];
