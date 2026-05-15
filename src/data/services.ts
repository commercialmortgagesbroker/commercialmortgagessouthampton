/**
 * Service catalogue, Commercial Mortgages Southampton.
 *
 * Used in primary navigation, footer link list, related-services blocks and
 * the /services hub. Slugs match SERVICE_LINKS in src/lib/constants.ts.
 *
 * Voice: editorial, broker-led, diagnostic. Required entity mentions woven
 * across each service: Financial Conduct Authority (clarifying that commercial
 * mortgages sit OUTSIDE the regulated perimeter, never claiming authorisation),
 * SDLT / stamp duty, limited companies, refinancing, loan-to-value, interest
 * rate, repayment, residential mortgage (in contrast, what we do NOT do).
 */

export interface Service {
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  keyFeatures: string[];
  typicalTerms: { label: string; value: string }[];
  suitableFor: string[];
  icon: string;
}

export const services: Service[] = [
  {
    title: "Owner-Occupier Commercial Mortgage",
    slug: "owner-occupier-commercial-mortgage",
    shortDescription:
      "Long-term debt to fund the purchase of the property your business trades from. Loan-to-value to 75%, EBITDA cover 1.3–1.5×, interest rates from 7.0% pa, 5–25 year repayment terms.",
    fullDescription: `Owner-occupier commercial mortgages fund the purchase of premises your business operates from, a dental practice freehold, an accountancy office, a manufacturing or trade-counter unit. Most are taken out by a limited company trading entity with director personal guarantee. The lender takes a first charge over the property; you fund a deposit (typically 25–30%); the facility is amortised over 15–25 years on capital-and-interest repayments.

Lender underwriting tests EBITDA cover (trading profit against the mortgage payment) at 1.3–1.5×, with two years of clean filed accounts the standard minimum. In Southampton the typical owner-occupier facility is £150K–£3M, with the bulk of volume in the £500K–£1.5M bracket. Loan-to-value of 70–75% is routine for established businesses; deposits of 25–30% from accumulated retained profit are standard. Interest rates currently 6.0–7.5% pa for strong covenants, stretching to 9.0% for tighter cases.

Term length is the most useful affordability lever, extending repayment from 15 to 20 years often clears the EBITDA test where rate alone will not. We model term, rate and LTV across the panel before submitting, so you see the trade-offs before legals. Stamp duty land tax (SDLT) on a commercial purchase runs at up to 5% on the slice above £250K and is payable by the buyer at completion.

This is unregulated commercial lending in almost all cases, a business borrowing against business premises, not a residential mortgage. Owner-occupier commercial mortgages fall outside the Financial Conduct Authority's regulated mortgage perimeter; where a deal would require regulated permissions we refer to a regulated firm. Active sectors in Southampton: dental and GP practices (SO16 Bassett and SO17 Portswood cluster), accountancy and professional services, light industrial and trade-counter (Nursling, Adanac Park, Woolston), pharmacy. Sector-specialist trades, care home, MOT, nursery, route through trading-business mortgages.`,
    keyFeatures: [
      "Loan-to-value up to 75% on the freehold purchase",
      "EBITDA cover 1.3–1.5×",
      "Interest rates from 7.0% pa for strong covenants",
      "5–25 year repayment terms",
      "Limited company SPV and trading entity structures supported",
      "90+ lender panel including high-street, challenger and specialist",
    ],
    typicalTerms: [
      { label: "LTV", value: "Up to 75%" },
      { label: "Rate", value: "From 7.0% pa" },
      { label: "Term", value: "5–25 years" },
      { label: "Facility", value: "£150K–£5M" },
      { label: "EBITDA cover", value: "1.3–1.5×" },
      { label: "Deposit", value: "25–30%" },
    ],
    suitableFor: [
      "Dental practice principals buying their freehold",
      "Accountancy / legal / professional services buying their office",
      "SMEs in light industrial / engineering buying their workshop",
      "Pharmacy operators acquiring trading premises",
      "Independent retailers buying their high-street unit",
      "Health and wellness businesses (clinics, physio, opticians)",
    ],
    icon: "🏢",
  },
  {
    title: "Commercial Investment Mortgage",
    slug: "commercial-investment-mortgage",
    shortDescription:
      "Long-term mortgages secured against let commercial property held for income. Loan-to-value to 75%, ICR 140–160% stressed, interest rates from 7.5% pa, 5–25 year repayment terms.",
    fullDescription: `A commercial investment mortgage is long-term debt secured against a let commercial property held as an income-producing asset. The borrower is typically a limited company SPV (the dominant Southampton structure for new acquisitions), an LLP, or an individual investor; the security is the property; the affordability test is rent against the cost of borrowing. Unlike a residential buy-to-let mortgage, which tests personal income against ASTs, commercial investment underwrites against business tenancies on FRI leases.

The key underwriting metric is ICR (interest cover ratio): gross rent divided by interest cost, typically required at 140–160% stressed at a notional rate 1–2% above pay rate. Some lenders also test DSCR (debt-service coverage ratio) on a fully-amortising basis at 130–145% cover. Loan-to-value of 65–75% is standard for income-producing assets with a clear lease.

Tenant covenant and lease length are the second-order drivers. A 10-year unbroken lease to an investment-grade tenant prices materially better than three two-year leases to local independents. Stamp duty land tax applies on purchase at standard commercial rates (0% to £150K, 2% £150K–£250K, 5% above). Refinancing existing investment debt off maturing 5-year fixes is a high-volume use case in 2026.

Active Southampton investment areas: city-centre office and retail, Portswood and Bevois Valley semi-commercial parades, Ocean Village marina-led offices, and the Nursling / Adanac Park industrial belt. Pricing currently 6.5–8.5% pa depending on covenant and LTV. Commercial investment lending is unregulated and sits outside the regulated mortgage perimeter in almost all cases.`,
    keyFeatures: [
      "Loan-to-value up to 75% on let income-producing assets",
      "ICR 140–160% stressed; DSCR 130–145% on amortising basis",
      "Interest rates from 7.5% pa",
      "5–25 year repayment terms",
      "Limited company SPV / LLP / individual structures all supported",
      "Whole-of-market benchmark across 90+ lenders",
    ],
    typicalTerms: [
      { label: "LTV", value: "Up to 75%" },
      { label: "Rate", value: "From 7.5% pa" },
      { label: "Term", value: "5–25 years" },
      { label: "Facility", value: "£150K–£10M" },
      { label: "ICR", value: "140–160%" },
      { label: "DSCR", value: "130–145%" },
    ],
    suitableFor: [
      "Investors buying let offices in Southampton CBD",
      "Landlords acquiring let retail (West Quay, Above Bar, suburban parades)",
      "Industrial investors (Nursling, Adanac Park, Woolston)",
      "Limited company SPV-structured commercial property holdings",
      "Refinancing existing investment portfolios off maturing fixes",
      "Ground-rent and freehold-investment buyers",
    ],
    icon: "📈",
  },
  {
    title: "Semi-Commercial Mortgage",
    slug: "semi-commercial-mortgage",
    shortDescription:
      "Single-facility finance for shop-with-flat and similar mixed-use property. Loan-to-value to 75%, blended cover ~145%, interest rates from 7.5% pa.",
    fullDescription: `Semi-commercial is the term for finance against mixed-use property where the residential element is at least 40% of total floorspace, typically the classic shop-with-flat-above archetype that defines Southampton high streets. The product gives lenders comfort from the residential security, so semi-commercial routinely prices 50–100bps inside pure commercial investment.

The lending test combines commercial rent and residential AST income on a blended basis, with a typical cover requirement around 145%. Loan-to-value of 75% is achievable on standard archetypes via specialist desks. Most semi-commercial is taken out by a limited company SPV with director personal guarantee; individual investor and LLP structures are equally accommodated.

Specialist lenders dominate this market. InterBay Commercial (OSB Group), Shawbrook, LendInvest, Together, Aldermore, Hampshire Trust Bank, HTB and Cambridge & Counties all run active programmes for Southampton semi-commercial deals between £150K and £2M. Stamp duty land tax follows non-residential rates on a genuinely mixed-use property, materially cheaper than residential SDLT.

Active Southampton semi-commercial spines: Portswood Road and Highfield Lane in Portswood, Bevois Valley Road, Shirley high street, Bedford Place and Bitterne village. Most semi-commercial lending is unregulated and sits outside the regulated mortgage perimeter, the exception is where the borrower personally occupies one of the residential flats, which falls into regulated territory and we refer to a regulated firm.`,
    keyFeatures: [
      "Up to 75% loan-to-value on classic shop+flat archetypes",
      "Blended ICR ~145%",
      "Specialist lender panel (InterBay Commercial, Shawbrook, LendInvest, Aldermore)",
      "Interest rates from 7.5% pa",
      "5–25 year repayment terms",
      "Active across all Southampton high-street parades",
    ],
    typicalTerms: [
      { label: "LTV", value: "Up to 75%" },
      { label: "Rate", value: "From 7.5% pa" },
      { label: "Term", value: "5–25 years" },
      { label: "Facility", value: "£150K–£2M" },
      { label: "Blended ICR", value: "~145%" },
      { label: "Min residential split", value: "40%" },
    ],
    suitableFor: [
      "Investors buying classic shop-with-flat-above stock",
      "Landlords refinancing semi-commercial holdings off maturing fixes",
      "Portfolio investors with mixed pure commercial and semi-commercial",
      "Pub or restaurant operators with operator flat above",
      "Mixed-use development conversions (retail + multi-flat above)",
      "First-time semi-commercial investors moving up from residential BTL",
    ],
    icon: "🏪",
  },
  {
    title: "Portfolio Refinance",
    slug: "portfolio-refinance",
    shortDescription:
      "Consolidate 5+ commercial investment assets into a single facility. £2M–£15M typical, loan-to-value to 70%, interest rates from 7.5% pa.",
    fullDescription: `Portfolio refinancing is a single commercial facility secured against multiple investment assets, replacing the patchwork of individual mortgages and maturity dates that builds up over a typical landlord lifecycle. For Southampton-based investors carrying 5+ commercial properties, the operational saving alone justifies the move: one quarterly review, one ICR test, one lender relationship, one renewal date.

Two core structures: blanket charge (one charge across all assets, keenest interest rate, locks the portfolio together) or aggregated facility (individual charges aggregated against a single limit, more flexible if you want optionality to sell or refinance individual assets out, with release fees applying).

Aggregate ICR is tested across the portfolio at 140–150%. Tenant concentration matters, if more than 20–25% of income comes from a single tenant, lenders may price wider or cap loan-to-value. Most Southampton portfolio refinancing is taken out by a limited company holding structure (single corporate-level entity, or topco with subsidiary SPVs). Stamp duty land tax does not apply on a refinance (no transfer of ownership), which is part of why consolidation maths can work even when ERCs are in the model.

Shawbrook, Cambridge & Counties, InterBay Commercial and Cynergy Bank are the most active portfolio lenders for the £2M–£15M Hampshire and Solent bracket. OakNorth and Reliance Bank cover larger. Portfolio refinancing is unregulated commercial lending and sits outside the regulated mortgage perimeter.`,
    keyFeatures: [
      "5+ asset portfolios consolidated into single facility",
      "Blanket-charge or aggregated structures",
      "Loan-to-value 65–70% across the portfolio",
      "Aggregated ICR 140–150% stressed",
      "Single interest rate, single renewal, single covenant set",
      "£2M–£15M typical, larger via specialist desks",
    ],
    typicalTerms: [
      { label: "Min portfolio", value: "5+ assets" },
      { label: "Facility size", value: "£2M–£15M+" },
      { label: "LTV", value: "Up to 70%" },
      { label: "Rate", value: "From 7.5% pa" },
      { label: "Term", value: "5–25 years" },
      { label: "ICR", value: "140–150%" },
    ],
    suitableFor: [
      "Southampton-based commercial landlords with 5+ investment properties",
      "Hampshire and Solent portfolio holders consolidating off multiple bank relationships",
      "Investors approaching multiple maturity dates on individual fixes",
      "Family offices and professional investor LLPs",
      "Operators wanting to release capital across the portfolio",
      "Investors moving to a single corporate-level limited company structure",
    ],
    icon: "🗂️",
  },
  {
    title: "Trading-Business Mortgage",
    slug: "trading-business-mortgage",
    shortDescription:
      "Sector-specialist commercial mortgages for pubs, hotels, care homes, dental, MOT, nursery and similar trading premises. Loan-to-value 60–70%, interest rates 7.0–9.0% pa.",
    fullDescription: `Trading-business mortgages fund operational commercial property where the value is bound up with the business that runs from it. Underwriting is sector-specific: barrelage and EBITDA for pubs; occupancy, ADR and RevPAR for hotels; CQC rating, occupancy and weighted-average bed value for care homes; NHS UDA contract for dental; VOSA for MOT; Ofsted for nurseries.

Loan-to-value runs 60–70% typically, lower than pure investment because the asset value is sector-locked. Term 15–25 years, repayment on capital-and-interest. Interest rates 7.0–9.0% pa reflecting the specialist underwrite. Most trading-business mortgages are taken out by a limited company trading entity with director personal guarantee. Stamp duty land tax follows commercial rates on an asset purchase; share-purchase deals can defer or partly avoid SDLT depending on structure.

Different lenders dominate different sub-sectors: Cynergy Bank and ASK Partners on pubs; Shawbrook, Cambridge & Counties and Hampshire Trust on care; Hampshire Trust and Allica on dental; Together on MOT/garage; Aldermore and Cambridge & Counties on nursery. Refinancing existing trading-business mortgages (typically off a maturing 5-year fix) is a frequent reason to re-engage. Trading-business commercial lending is unregulated and sits outside the regulated mortgage perimeter, not a residential mortgage.`,
    keyFeatures: [
      "Sector-specific specialist lender panel",
      "EBITDA / sector-metric driven underwriting",
      "Loan-to-value 60–70% typical",
      "15–25 year repayment terms",
      "Active across pubs, hotels, care, dental, MOT, nursery, B&B",
      "Limited company SPV / trading entity structures supported",
    ],
    typicalTerms: [
      { label: "LTV", value: "60–70%" },
      { label: "Rate", value: "7.0–9.0% pa" },
      { label: "Term", value: "15–25 years" },
      { label: "Facility", value: "£250K–£5M" },
      { label: "Underwriting", value: "EBITDA / sector cover" },
      { label: "Trading history", value: "12–24 months min" },
    ],
    suitableFor: [
      "Pub and bar operators (Bedford Place, Oxford Street, Hedge End)",
      "Hotel and B&B operators",
      "Care home operators (Bassett and Chilworth premium cluster)",
      "Dental and GP practice principals",
      "MOT garage and petrol forecourt owners",
      "Day nursery operators",
      "Independent restaurants and gastropubs",
    ],
    icon: "🍺",
  },
  {
    title: "Commercial Remortgage",
    slug: "commercial-remortgage",
    shortDescription:
      "Refinancing existing commercial debt, end-of-fix transition or capital release. ERC modelled. 90+ lender benchmark, interest rates from 7.0% pa.",
    fullDescription: `Commercial remortgaging covers two distinct moments: end of fix (typical 5-year fix maturing into a different rate environment) and capital-raise refinancing (releasing equity from a property that has grown in value since the original draw).

ERC (early repayment charge) handling is the first conversation. If you are inside an ERC window, the maths often still works, saving 1.5% on rate over a fresh five-year term outweighs an ERC of 3% of the redemption sum on most £1M+ facilities. We run the numbers both ways before recommending. Stamp duty land tax does not apply on a refinance (no transfer of ownership), which is part of why refinancing maths can work even with ERCs in the model.

For end-of-fix transitions, the underwriting story is usually clean, known asset, known borrower, known repayment track record. Pricing competition between NatWest, Lloyds, Barclays, Santander, Shawbrook, Allica, HTB, Cambridge & Counties and InterBay Commercial is real, even a 50bps move on a £1M facility saves £5,000 a year. Loan-to-value to 75%; interest rates from 7.0% pa for strong owner-occupier remortgaging.

Most Southampton remortgaging is taken out by a limited company SPV or trading entity. Owner-occupier and investment commercial remortgaging both sit outside the regulated mortgage perimeter in standard cases, unregulated commercial lending throughout.`,
    keyFeatures: [
      "Whole-of-market benchmark across 90+ lenders",
      "ERC modelling and break-even analysis",
      "End-of-fix and capital-raise refinancing routes",
      "Loan-to-value up to 75%",
      "Interest rates from 7.0% pa for strong owner-occupier remortgage",
      "4–6 weeks typical from start to drawdown",
    ],
    typicalTerms: [
      { label: "LTV", value: "Up to 75%" },
      { label: "Rate", value: "From 7.0% pa" },
      { label: "Term", value: "5–25 years" },
      { label: "Facility", value: "£150K–£10M" },
      { label: "Process", value: "4–6 weeks" },
    ],
    suitableFor: [
      "Borrowers approaching end of a 5-year fix",
      "Owner-occupier businesses where trading is now stronger",
      "Commercial investment landlords with appreciated assets",
      "Borrowers wanting to release equity for onward acquisition",
      "Limited company portfolio holders consolidating individual mortgages",
      "Borrowers moving from specialist back to mainstream rates",
    ],
    icon: "🔄",
  },
  {
    title: "Commercial bridging",
    slug: "commercial-bridge-to-let",
    shortDescription:
      "12–24 month bridge funding acquisition + refurb / re-let, with agreed term-out onto investment mortgage. £500K–£5M typical.",
    fullDescription: `Commercial bridging is the right route when you are acquiring a property that is not immediately fundable on a long-term mortgage, vacant, partly tenanted, mid-refurbishment, or with an unsigned lease at point of purchase. A 12–24 month bridge funds the acquisition and any refurb / re-letting work, with an agreed exit onto a long-term commercial investment mortgage once the asset is income-producing.

LendInvest, Shawbrook, Together, OakNorth and Hampshire Trust Bank are the most active bridging desks for the Southampton £500K–£5M bracket. Bridge interest rates currently run 0.70–0.95% pm (8.5–11.5% pa equivalent); term-out pricing back to mainstream 6.5–8.5% pa once the property stabilises. Repayment is typically interest-only across the bridge period (serviced monthly or rolled-up) then full capital-and-interest on the term-out. Loan-to-value to 70% on current value; sometimes 75% on day-one purchase price plus 100% of refurb costs against GDV.

Most commercial bridging is taken out by a limited company SPV with director personal guarantee, and is unregulated commercial lending, the exception is where the property has a residential element the borrower will personally occupy, which routes to a regulated bridging lender. Stamp duty land tax is paid at the day-one bridge completion (not at term-out, because term-out is a refinance).

Where this works particularly well in Southampton: vacant SO14 / SO15 office floorplates being refurbished for re-letting; semi-commercial conversions; industrial units bought from receivers; trading businesses bought as going concerns where the new operator needs 12 months of accounts before high-street remortgage. Commercial bridging on business property is unregulated and sits outside the regulated mortgage perimeter, where a deal would require regulated permissions, we refer to a regulated firm.`,
    keyFeatures: [
      "12–24 month bridge with agreed term-out exit",
      "Bridge LTV up to 70%",
      "Bridge interest rate 0.70–0.95% pm",
      "Term-out 6.5–8.5% pa once stabilised",
      "Specialist desks: LendInvest, Shawbrook, Together, OakNorth",
      "Bridge can complete in 2–3 weeks for clean cases",
    ],
    typicalTerms: [
      { label: "Bridge term", value: "12–24 months" },
      { label: "Bridge rate", value: "0.70–0.95% pm" },
      { label: "LTV", value: "Up to 70%" },
      { label: "Term-out rate", value: "6.5–8.5% pa" },
      { label: "Facility", value: "£500K–£5M" },
    ],
    suitableFor: [
      "Investors buying vacant CBD office for refurbishment / re-let",
      "Semi-commercial conversion and refurbishment",
      "Industrial unit acquisitions from receivers / administrators",
      "Trading-business operator buyouts (need 12 months of accounts before remortgage)",
      "Auction-bought commercial assets (28-day completion)",
      "Change-of-use deals with consent in place but works needed",
    ],
    icon: "🌉",
  },
  {
    title: "Second-Charge Commercial Mortgage",
    slug: "second-charge-commercial-mortgage",
    shortDescription:
      "Capital release secured behind your existing first-charge facility. Keep the senior intact. £100K–£2M typical, interest rates 10–14% pa.",
    fullDescription: `A second-charge commercial mortgage sits behind your existing first-charge facility, secured against the same property. The senior lender retains priority on the asset; the second-charge lender takes a subordinated position. You keep the existing senior facility intact (and its interest rate) while raising additional debt against the same security, useful when the legacy first-charge rate is below current market and ERCs would make a full refinancing uneconomic.

The use case is narrow but valuable: your existing first charge is on a competitive legacy rate (3.5–4.5% from the 2019–2021 era); you need to raise £200K–£2M for working capital, business growth or onward acquisition; refinancing the whole stack would cost more than the second-charge route. The senior lender has to consent to the second charge being registered (typically a £500–£2K deed of consent fee).

InterBay Commercial, Together, United Trust Bank and select private-credit desks are the active second-charge commercial lenders for Southampton. Pricing reflects subordinated risk: 10–14% pa typically. Combined loan-to-value (first plus second) usually capped at 70–75%. Most second-charge commercial is taken out by a limited company trading entity or SPV with director personal guarantee, and is unregulated commercial lending, not a residential mortgage. Stamp duty does not apply (no transfer of ownership). Repayment on a standard amortising basis or, occasionally, interest-only with a balloon.

Second-charge commercial lending on business premises is unregulated and sits outside the regulated mortgage perimeter, where a deal would require regulated permissions, we refer to a regulated firm.`,
    keyFeatures: [
      "Existing first-charge facility unaffected",
      "Combined LTV (first + second) up to 75%",
      "Specialist lender panel, InterBay Commercial, Together, UTB",
      "5–25 year repayment terms",
      "Useful when ERCs make full refinancing uneconomic",
      "5–7 weeks typical to completion",
    ],
    typicalTerms: [
      { label: "Combined LTV", value: "Up to 75%" },
      { label: "Rate", value: "10–14% pa" },
      { label: "Term", value: "5–25 years" },
      { label: "Facility", value: "£100K–£2M" },
      { label: "First-charge consent", value: "Required" },
    ],
    suitableFor: [
      "Borrowers with competitive legacy first-charge interest rates",
      "Trading-business owners raising working capital secured against premises",
      "Limited company investors raising capital for onward acquisition without portfolio refinance",
      "Operators with significant ERCs making full refinancing uneconomic",
      "Borrowers whose first-charge lender accepts second-charge consent",
      "Asset-rich borrowers with cashflow pressure",
    ],
    icon: "🔗",
  },
];

/**
 * Get a service by its slug
 */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

/**
 * Get all service slugs for static path generation
 */
export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}

/**
 * Get related services (all services except the current one)
 */
export function getRelatedServices(currentSlug: string): Service[] {
  return services.filter((service) => service.slug !== currentSlug);
}
