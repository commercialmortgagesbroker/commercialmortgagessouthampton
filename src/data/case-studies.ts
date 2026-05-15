/**
 * Case studies, Commercial Mortgages Southampton.
 *
 * Ten anonymised case studies covering the Southampton market hooks:
 * Adanac Park M271 B8 logistics, Highfield HMO portfolio refinance,
 * Ocean Village hospitality, Bassett dental practice owner-occupier,
 * Westquay retail tenant refinance, Bedford Place independent F&B
 * owner-occupier, Mayflower Quarter mixed-use, Bitterne care home,
 * Cumberland Place professional office investment, Hedge End business
 * park acquisition.
 *
 * Real Southampton postcodes/districts. Specifics on rate, LTV, term and
 * lender (eight named lenders only: Shawbrook, InterBay Commercial,
 * LendInvest, Cynergy Bank, Lloyds, NatWest, Barclays, Santander). Rates
 * inside the 6.0 to 9.0 pct pa band. boroughSlug matches the 12 Southampton
 * area slugs in src/lib/constants.ts.
 */

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  borough: string;
  boroughSlug: string;
  financeType: string;
  loanAmount: string;
  gdv: string;
  ltv: string;
  term: string;
  units: number;
  schemeType: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  keyStats: { label: string; value: string }[];
  coordinates: [number, number];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-001",
    title: "B8 logistics warehouse refinance, Adanac Park M271",
    slug: "adanac-park-m271-b8-logistics-refinance",
    borough: "Adanac Park and Nursling",
    boroughSlug: "adanac-park-nursling",
    financeType: "Commercial Investment Mortgage",
    loanAmount: "£3.65M",
    gdv: "£5.20M",
    ltv: "70%",
    term: "20 years (5yr fix)",
    units: 1,
    schemeType: "Single-let 42,000 sqft B8 logistics-warehouse investment, M271 corridor",
    summary:
      "An investor refinanced a single-let 42,000 sqft B8 logistics-warehouse at Adanac Park on the M271 corridor (SO16) off a maturing 5-year fix with a £3.65M commercial investment mortgage at 70% LTV, 20-year amortisation, 6.95% pa via Shawbrook.",
    challenge:
      "42,000 sqft of modern B8 warehouse and ancillary office let to an established cross-Solent freight forwarder on a 10-year FRI lease with 6 years unexpired at refinance, located in the heart of the Adanac Park / Nursling industrial cluster on direct M271 access. Net rent £358K pa, valued at £5.20M by the lender's panel valuer. The investor was carrying a maturing 5-year fix at 5.15% pa and wanted a fresh 5-year fix at the right rate plus a £140K capital release for a second M271-corridor acquisition.\n\nThe high-street commercial incumbent quoted 7.55% pa over 20 years, wider than the Solent industrial corridor should price on a clean tenant covenant and a meaningful unexpired term. The Hampshire industrial corridor reads as a single M27 lender market with Portsmouth, which materially compresses yields; the issue was matching the deal to a desk that prices the corridor properly on the first call.",
    solution:
      "We benchmarked the deal across four Solent-corridor-active investment lender desks. Shawbrook quoted 6.95% pa on a 5-year fix inside a 20-year amortisation at 70% LTV (£3.65M against £5.20M valuation). ICR cover at 158% stressed at a notional rate 1.5 percentage points above pay rate, comfortable margin.\n\nThe credit submission included the FRI lease, the tenant covenant pack with three years of accounts and the freight-forwarder's ABP terminal contract, the Adanac Park / Nursling site planning history, occupancy track record, the SPV pack and the deposit proof on the £140K capital release. RICS Red Book valuation by a specialist Hampshire industrial valuer in 18 working days. Full credit approval at week 4, legal completion at week 8 from initial enquiry.",
    outcome:
      "Refinance completed with rate certainty for five years and £140K capital released against the next M271-corridor acquisition. Monthly interest cost approximately £22K pa below the high-street incumbent's quoted rate over the 5-year fix. Investor has subsequently used the same lender route for a second Nursling acquisition.",
    keyStats: [
      { label: "Facility", value: "£3.65M" },
      { label: "Property value", value: "£5.20M" },
      { label: "LTV", value: "70%" },
      { label: "Rate", value: "6.95% pa" },
      { label: "Term", value: "20 years (5yr fix)" },
      { label: "ICR", value: "158%" },
    ],
    coordinates: [50.9355, -1.4855],
  },
  {
    id: "cs-002",
    title: "HMO portfolio remortgage, Highfield and Portswood",
    slug: "highfield-portswood-hmo-portfolio-refinance",
    borough: "Highfield and Portswood",
    boroughSlug: "highfield-portswood",
    financeType: "Portfolio Refinance (HMO)",
    loanAmount: "£2.45M",
    gdv: "£3.35M",
    ltv: "73%",
    term: "25 years",
    units: 8,
    schemeType: "Eight-property HMO portfolio (44 bed-spaces)",
    summary:
      "A Southampton-based HMO operator refinanced an eight-property Highfield and Portswood (SO17) HMO portfolio into a single £2.45M facility at 73% LTV, 25-year amortisation, 7.55% pa via InterBay Commercial.",
    challenge:
      "Eight terraced HMOs across the Highfield, Portswood and Bevois Valley catchment, all sitting on existing C4 or Sui Generis HMO planning consents and all licensed under the Southampton City Council additional HMO licensing scheme. 44 bed-spaces combined, tenanted to a mix of University of Southampton and Solent University students alongside young-professional renters supported by the University Hospital Southampton and Ordnance Survey catchment. Gross rent £278K pa, valuation £3.35M.\n\nThe operator had financed the portfolio across three legacy lenders, two on variable rates and one on a maturing fix, with personal-guarantee exposure the borrower wanted to reduce. The Highfield ward student-housing balance policy meant the lender had to take an underwriting view on planning permanence and ongoing licensing compliance, which a portion of the lender pool will not entertain.",
    solution:
      "InterBay Commercial quoted 7.55% pa over a 25-year amortisation at 73% LTV (£2.45M against £3.35M valuation). Blended ICR test at 151% stressed at a notional rate 2 percentage points above pay rate. Pass.\n\nThe credit submission included the eight HMO planning consents and lawful-development certificates, the Southampton City Council HMO licence pack, three years of borrower rental track record at 96% occupancy across academic and summer-let periods, the SPV pack and the deposit proof. The three legacy redemptions ran in parallel through one solicitor instruction. Credit approval at week 4, full legal completion at week 9.",
    outcome:
      "Three legacy facilities consolidated into one clean 25-year structure. Rate certainty for five years across the portfolio. Personal-guarantee exposure reduced from 30% of facility to 22%. The operator has subsequently used the same lender for a ninth-property acquisition on the same Portswood catchment.",
    keyStats: [
      { label: "Facility", value: "£2.45M" },
      { label: "Property value", value: "£3.35M" },
      { label: "LTV", value: "73%" },
      { label: "Rate", value: "7.55% pa" },
      { label: "Term", value: "25 years" },
      { label: "Blended ICR", value: "151%" },
    ],
    coordinates: [50.9290, -1.3935],
  },
  {
    id: "cs-003",
    title: "Hospitality acquisition, Ocean Village",
    slug: "ocean-village-hospitality-acquisition",
    borough: "Ocean Village",
    boroughSlug: "ocean-village",
    financeType: "Trading-Business Mortgage (Hospitality)",
    loanAmount: "£2.85M",
    gdv: "£4.05M",
    ltv: "70%",
    term: "20 years",
    units: 1,
    schemeType: "Independent restaurant-with-rooms freehold (18-bedroom)",
    summary:
      "An experienced hospitality operator acquired the freehold of an 18-bedroom independent restaurant-with-rooms within the Ocean Village marina cluster (SO14) for £4.05M with a £2.85M trading-business mortgage at 70% LTV, 20-year term, 8.05% pa via Cynergy Bank.",
    challenge:
      "Established trading business inside the Ocean Village marina-hospitality cluster, eighteen letting bedrooms above an 80-cover restaurant and waterfront bar. Trading consistently with occupancy averaging 74% across the previous 24 months and restaurant covers materially supported by the year-round Solent cruise-passenger flow through ABP terminals, the Carnival UK HQ corporate spillover and the wider Southampton coastal tourism flow. ADR £152, EBITDA £515K on the most recent full year of vendor accounts.\n\nThe vendor offered the freehold and goodwill for sale at £4.05M with a 120-day completion window. The complication was the long Ocean Village ground-lease structure underneath the freehold interest and the requirement to take a view on the goodwill component within the valuation. Two mainstream commercial desks declined on the long-leasehold-under-freehold structure.",
    solution:
      "Cynergy Bank quoted 8.05% pa over 20 years at 70% LTV (£2.85M against £4.05M valuation). EBITDA cover at 1.72x stressed at a notional rate 1.5 percentage points above pay rate, comfortable for the sector. Cynergy's hospitality desk accepted the Ocean Village long-leasehold-under-freehold position on the strength of the head-lease term remaining (132 years unexpired) and a specialist hospitality RICS valuation that addressed goodwill separately.\n\nThe credit submission included three years of vendor accounts, the operator's own hospitality track record across two previous South Coast restaurant-with-rooms acquisitions, the head-lease pack, the licence pack and a six-month post-completion management projection. Specialist hospitality RICS valuer instructed. We negotiated the personal guarantee cap down from 30% to 22% of facility on the strength of the operator track record. Credit approval at week 5, full legal completion at week 10 from start, comfortably inside the 120-day window.",
    outcome:
      "Acquisition completed on schedule with the operator now controlling an Ocean Village marina hospitality asset on long-term debt with a reduced personal-guarantee exposure. The borrower has subsequently approached us about a second Solent hospitality acquisition on the same lender route.",
    keyStats: [
      { label: "Facility", value: "£2.85M" },
      { label: "Property value", value: "£4.05M" },
      { label: "LTV", value: "70%" },
      { label: "Rate", value: "8.05% pa" },
      { label: "Term", value: "20 years" },
      { label: "EBITDA cover", value: "1.72x" },
    ],
    coordinates: [50.8950, -1.3940],
  },
  {
    id: "cs-004",
    title: "Dental practice freehold purchase, Bassett",
    slug: "bassett-dental-practice-owner-occupier",
    borough: "Bassett and Lordswood",
    boroughSlug: "bassett-lordswood",
    financeType: "Owner-Occupier Commercial Mortgage",
    loanAmount: "£925K",
    gdv: "£1.25M",
    ltv: "74%",
    term: "25 years",
    units: 1,
    schemeType: "Owner-occupier mixed NHS-and-private dental practice freehold",
    summary:
      "An established Bassett dental partnership acquired the freehold of its Burgess Road practice premises (SO16) for £1.25M with a £925K owner-occupier commercial mortgage at 74% LTV, 25-year term, 6.55% pa via NatWest.",
    challenge:
      "Established mixed NHS-and-private dental practice, three principals, six surgeries, trading from leased Bassett premises on Burgess Road for nine years. NHS GDS contract value £485K pa supplemented by a stable private-fee mix; the practice sits inside the University Hospital Southampton healthcare ancillary catchment which generates a strong referral and patient flow. Turnover £1.05M, EBITDA £325K on the most recent full year.\n\nThe freeholder offered the property at £1.25M open market valuation with a four-month decision window. The partnership had £325K deposit available from accumulated retained earnings. The challenge was matching the deal to a high-street commercial desk willing to give meaningful rate competition on a defensive regulated-profession sector, which is a particular sweet spot for the NatWest healthcare desk and the Cambridge & Counties Hampshire SME book.",
    solution:
      "NatWest commercial banking quoted 6.55% pa over 25 years at 74% LTV (£925K against £1.25M valuation). EBITDA cover at 2.18x stressed, comfortable margin for the regulated profession sector. Barclays and Cambridge & Counties also quoted; NatWest offered the cleanest covenant package on personal guarantee structure and the longest term.\n\nThe credit submission ran on three years of audited partnership accounts, the NHS GDS contract evidence, principal-level CV pack and GDC registration evidence, deposit proof, the building survey and a clean dental decontamination compliance report. Specialist healthcare valuer instructed in parallel with credit underwriting; valuation back at week 2. Credit approval at week 3. Full legal completion at week 7 from initial enquiry.",
    outcome:
      "Freehold acquired ahead of the partnership's four-month decision window. Monthly mortgage payment £6,260 against monthly EBITDA of £27,083, very strong cover. Rate saving against the high-street alternative quoted: approximately £13K pa over the 5-year fix period.",
    keyStats: [
      { label: "Facility", value: "£925K" },
      { label: "Property value", value: "£1.25M" },
      { label: "LTV", value: "74%" },
      { label: "Rate", value: "6.55% pa" },
      { label: "Term", value: "25 years" },
      { label: "EBITDA cover", value: "2.18x" },
    ],
    coordinates: [50.9385, -1.4180],
  },
  {
    id: "cs-005",
    title: "Retail tenant-mix portfolio refinance, Westquay",
    slug: "westquay-retail-tenant-refinance",
    borough: "Southampton City Centre and Above Bar",
    boroughSlug: "city-centre",
    financeType: "Portfolio Refinance (Commercial Investment)",
    loanAmount: "£3.15M",
    gdv: "£4.55M",
    ltv: "69%",
    term: "25 years (5yr fix)",
    units: 4,
    schemeType: "Four-unit retail parade adjacent to Westquay",
    summary:
      "A Hampshire-based investor refinanced a four-unit retail parade on the Above Bar Street and East Street fringe of the Westquay catchment (SO14) into a single £3.15M facility at 69% LTV, 25-year amortisation, 7.25% pa via Shawbrook.",
    challenge:
      "Four-unit retail parade on the immediate Above Bar Street and East Street fringe of the Westquay scheme in the central Southampton retail catchment, mixed tenant covenant base: one national coffee chain, one national high-street fashion retailer, one independent jeweller and one flexible-term let to an independent F&B operator on a shorter term. Weighted average unexpired lease term 5.4 years. Combined gross rent £378K pa, valuation £4.55M.\n\nPrevious facility was a maturing 5-year fix at 5.55% pa across the portfolio with a 30% of facility personal guarantee. The investor wanted a fresh 5-year fix and a meaningful reduction in personal guarantee exposure on the strength of three years of clean rental track record across the parade, including the period spanning the broader UK central-retail volatility.",
    solution:
      "Shawbrook quoted 7.25% pa on a 5-year fix inside a 25-year amortisation at 69% LTV (£3.15M against £4.55M valuation). ICR cover at 156% stressed at a notional rate 1.5 percentage points above pay rate, comfortable across the blended tenant covenant base.\n\nWe negotiated the personal guarantee cap down from 30% to 24% of facility on the strength of three years of clean rent collection history (98% on-time across the four units) and the diversified tenant covenant base including two national covenants. The credit submission included three FRI leases plus the flexible let, tenant covenant packs on the national covenants, three-year rent collection history, the SPV pack and the original Above Bar Street parade planning consent. Credit approval at week 4, full legal completion at week 9.",
    outcome:
      "Refinance completed with rate certainty for five years, personal guarantee exposure materially reduced and the consolidated portfolio held on a clean single facility. The investor has subsequently used the same lender for a second Southampton retail acquisition.",
    keyStats: [
      { label: "Facility", value: "£3.15M" },
      { label: "Property value", value: "£4.55M" },
      { label: "LTV", value: "69%" },
      { label: "Rate", value: "7.25% pa" },
      { label: "Term", value: "25 years (5yr fix)" },
      { label: "ICR", value: "156%" },
    ],
    coordinates: [50.9078, -1.4055],
  },
  {
    id: "cs-006",
    title: "Independent restaurant freehold purchase, Bedford Place",
    slug: "bedford-place-fb-owner-occupier",
    borough: "Bedford Place and The Polygon",
    boroughSlug: "bedford-place-polygon",
    financeType: "Owner-Occupier Commercial Mortgage",
    loanAmount: "£685K",
    gdv: "£955K",
    ltv: "72%",
    term: "15 years",
    units: 1,
    schemeType: "Free-of-tie independent restaurant freehold, Bedford Place F&B spine",
    summary:
      "An experienced Bedford Place F&B operator acquired the freehold of its London Road restaurant premises (SO15) for £955K with a £685K owner-occupier mortgage at 72% LTV, 15-year term, 7.35% pa via Cynergy Bank.",
    challenge:
      "Independent restaurant trading from leased premises on the Bedford Place and The Polygon F&B spine for eight years. Very strong covers profile supported by the year-round Southampton city-centre catchment, the University of Southampton staff-and-postgrad lunch trade, the Carnival UK and Ordnance Survey corporate spillover and a loyal local catchment. Turnover £945K, EBITDA £138K on the most recent full year.\n\nThe landlord served notice to sell at £955K with a tight three-month decision window. The operator had £270K deposit available from accumulated retained profit. The challenge was speed and the central-Southampton F&B sector underwrite, several mainstream commercial desks decline central-Southampton leisure on perceived volatility despite the actual trading consistency.",
    solution:
      "Cynergy Bank quoted 7.35% pa over 15 years at 72% LTV (£685K against £955K valuation). EBITDA cover at 1.62x stressed at a notional rate 1.5 percentage points above pay rate, comfortable for the sector. Licensed-trade and hospitality specialist RICS valuer.\n\nThe credit submission included three years of accounts, current management figures, the licence pack, deposit proof, identity and source-of-funds documents. Cynergy's licensed-trade desk approved in 12 working days. Specialist valuer instructed in parallel with credit underwriting; valuation back at week 2. Full legal completion at 29 working days from initial enquiry.",
    outcome:
      "Freehold acquired ahead of the vendor's three-month decision window. Monthly mortgage payment £6,280 against monthly EBITDA of £11,500, comfortable cover for continued reinvestment in kitchen kit. Operator has approached us about a second Bedford Place F&B opportunity on the same lender route.",
    keyStats: [
      { label: "Facility", value: "£685K" },
      { label: "Property value", value: "£955K" },
      { label: "LTV", value: "72%" },
      { label: "Rate", value: "7.35% pa" },
      { label: "Term", value: "15 years" },
      { label: "EBITDA cover", value: "1.62x" },
    ],
    coordinates: [50.9160, -1.4080],
  },
  {
    id: "cs-007",
    title: "Mixed-use block refinance, Mayflower Quarter",
    slug: "mayflower-quarter-mixed-use-refinance",
    borough: "Mayflower Quarter and Royal Pier",
    boroughSlug: "mayflower-quarter-royal-pier",
    financeType: "Portfolio Refinance (Semi-Commercial)",
    loanAmount: "£1.85M",
    gdv: "£2.60M",
    ltv: "71%",
    term: "25 years",
    units: 1,
    schemeType: "Single block, ground-floor Class E plus 9 self-contained flats above",
    summary:
      "A Southampton-based investor refinanced a single mixed-use block adjacent to the Mayflower Quarter regeneration zone (SO14), with two ground-floor Class E units and nine self-contained flats above, into a £1.85M facility at 71% LTV, 25-year term, 7.65% pa via InterBay Commercial.",
    challenge:
      "Single mixed-use block on the Mayflower Quarter fringe, acquired four years previously and financed on a maturing 5-year fix at 5.65% pa. Ground floor: two Class E units, one let to an independent café operator on a 6-year FRI lease with 4 years unexpired, one let to a Class E professional-services occupier on a 10-year FRI lease with 7 years unexpired. Upper floors: nine self-contained one- and two-bedroom flats let to young-professional renters supported by the central Southampton employer catchment. Combined gross rent £172K pa (commercial £58K, residential £114K), valuation £2.60M.\n\nThe investor wanted a clean 5-year fix, a small capital release of £85K for a Class E shop-front upgrade, and a lender comfortable with the blended commercial-plus-residential structure within the Mayflower Quarter regeneration footprint where mainstream commercial desks are still cautious on pre-delivery values.",
    solution:
      "InterBay Commercial quoted 7.65% pa over a 25-year amortisation at 71% LTV (£1.85M against £2.60M valuation). Blended ICR test at 145% on combined commercial plus residential income, stressed at a notional rate 2 percentage points above pay rate. Pass.\n\nThe credit submission consolidated the two commercial FRI leases, nine AST packs, the tenant covenant evidence on the Class E side, three years of borrower rental track record at 97% occupancy, the SPV pack and the deposit proof on the £85K capital release. Mayflower Quarter scheme planning history evidenced to satisfy the underwriter on regen permanence. Credit approval at week 4, full legal completion at week 9 from initial enquiry.",
    outcome:
      "Refinance completed with rate certainty for five years across the entire block. £85K shop-front upgrade delivered within four months. Investor now considering a second Mayflower Quarter-adjacent acquisition on the same lender route.",
    keyStats: [
      { label: "Facility", value: "£1.85M" },
      { label: "Property value", value: "£2.60M" },
      { label: "LTV", value: "71%" },
      { label: "Rate", value: "7.65% pa" },
      { label: "Term", value: "25 years" },
      { label: "Blended ICR", value: "145%" },
    ],
    coordinates: [50.8985, -1.4090],
  },
  {
    id: "cs-008",
    title: "Care home freehold refinance, Bitterne",
    slug: "bitterne-care-home-refinance",
    borough: "Bitterne",
    boroughSlug: "bitterne",
    financeType: "Trading-Business Mortgage (Care)",
    loanAmount: "£2.25M",
    gdv: "£3.15M",
    ltv: "71%",
    term: "20 years (5yr fix)",
    units: 1,
    schemeType: "Owner-operator 38-bed nursing-and-residential care home freehold",
    summary:
      "An experienced care operator refinanced a 38-bed nursing-and-residential care home in Bitterne (SO19) off a maturing 5-year fix with a £2.25M trading-business mortgage at 71% LTV, 20-year term, 7.85% pa via Cynergy Bank.",
    challenge:
      "Established 38-bed nursing-and-residential care home in the Bitterne district centre catchment, owner-operator structure, trading consistently with occupancy averaging 92% across the most recent 24 months and a stable mix of local-authority-funded and self-funded residents. The home sits inside the wider University Hospital Southampton healthcare catchment, which supports the referral pipeline. CQC rating Good across the most recent two inspections. Turnover £2.45M, EBITDA £415K on the most recent full year. The previous 5-year fix at 5.25% pa was maturing inside 90 days.\n\nThe complication was a modest planned capex programme to refresh shared bathrooms and update the call-bell system flagged at the most recent CQC inspection. Two mainstream commercial desks were cautious on the capex programme; one declined on internal sector-exposure limits.",
    solution:
      "Cynergy Bank quoted 7.85% pa on a 5-year fix inside a 20-year amortisation at 71% LTV (£2.25M against £3.15M valuation). EBITDA cover at 1.74x stressed at a notional rate 1.5 percentage points above pay rate, comfortable for the sector. Cynergy's healthcare desk accepted the capex programme on the strength of a costed contractor plan and a fixed completion date for the works.\n\nThe credit submission included three years of audited accounts, the CQC inspection report pack, the registered-manager CV, the bed-mix and resident-fee pack, the local-authority placement evidence, the deposit proof and the costed capex plan with fixed-price contractor quotes. Specialist healthcare RICS valuer instructed. Credit approval at week 5, full legal completion at week 9 from initial enquiry.",
    outcome:
      "Refinance completed with rate certainty for five years across the freehold. Monthly interest cost approximately £18K pa below the alternative quote that did proceed to indicative terms. Operator has subsequently approached us about a second Hampshire care home acquisition on the same Cynergy route.",
    keyStats: [
      { label: "Facility", value: "£2.25M" },
      { label: "Property value", value: "£3.15M" },
      { label: "LTV", value: "71%" },
      { label: "Rate", value: "7.85% pa" },
      { label: "Term", value: "20 years (5yr fix)" },
      { label: "EBITDA cover", value: "1.74x" },
    ],
    coordinates: [50.9125, -1.3675],
  },
  {
    id: "cs-009",
    title: "Professional office investment acquisition, Cumberland Place",
    slug: "cumberland-place-professional-office-investment",
    borough: "Southampton City Centre and Above Bar",
    boroughSlug: "city-centre",
    financeType: "Commercial Investment Mortgage",
    loanAmount: "£1.55M",
    gdv: "£2.20M",
    ltv: "70%",
    term: "25 years",
    units: 1,
    schemeType: "Single-let professional-services office investment, Cumberland Place",
    summary:
      "An investor acquired a single-let professional-services office investment on Cumberland Place in the central Southampton CBD (SO15) for £2.20M with a £1.55M commercial investment mortgage at 70% LTV, 25-year amortisation, 7.05% pa via LendInvest. Completed in 28 working days from initial enquiry.",
    challenge:
      "6,400 sqft of refurbished period-office space on Cumberland Place let to an established Southampton-based legal practice on an 8-year FRI lease with 6 years unexpired at acquisition. Net rent £158K pa, valuation £2.20M. The tenant is a well-known Hampshire mid-tier firm with a stable partner base and a diversified client mix across professional services, healthcare and Hampshire SME.\n\nThe investor had a 28-working-day completion target imposed by the vendor's reinvestment timetable. The asset should price at the tight end of the office investment band on the strength of the covenant and the central CBD location, but the tight completion window required a lender with the ability to instruct a Hampshire valuer fast and run legals to a fixed deadline.",
    solution:
      "LendInvest quoted 7.05% pa over a 25-year amortisation at 70% LTV (£1.55M against £2.20M valuation). ICR cover at 154% stressed at a notional rate 1.5 percentage points above pay rate, comfortable margin.\n\nThe credit submission included the FRI lease, the tenant covenant pack with three years of partnership accounts, the Cumberland Place title and any historic planning consents, the SPV pack and the deposit proof. We instructed a Hampshire commercial valuer with recent comparable approvals on file at the same lender; valuation back in 11 working days. Credit approval at week 3, full legal completion at week 6, 28 working days from initial enquiry, the fastest Southampton owner-occupier or investment completion on our recent record.",
    outcome:
      "Acquisition completed inside the vendor's 28-working-day window with the asset held on a clean 25-year structure. The investor has subsequently approached us about a second Cumberland Place office acquisition on the same lender route.",
    keyStats: [
      { label: "Facility", value: "£1.55M" },
      { label: "Property value", value: "£2.20M" },
      { label: "LTV", value: "70%" },
      { label: "Rate", value: "7.05% pa" },
      { label: "Term", value: "25 years" },
      { label: "ICR", value: "154%" },
    ],
    coordinates: [50.9100, -1.4100],
  },
  {
    id: "cs-010",
    title: "Business park unit acquisition, Hedge End",
    slug: "hedge-end-business-park-acquisition",
    borough: "Hedge End and West End",
    boroughSlug: "hedge-end-west-end",
    financeType: "Owner-Occupier Commercial Mortgage",
    loanAmount: "£1.15M",
    gdv: "£1.58M",
    ltv: "73%",
    term: "20 years",
    units: 1,
    schemeType: "Owner-occupier 9,800 sqft business-park unit (light industrial / trade counter)",
    summary:
      "A Hampshire-based trade-business owner acquired a 9,800 sqft owner-occupier business-park unit at Hedge End (SO30) for £1.58M with a £1.15M owner-occupier commercial mortgage at 73% LTV, 20-year term, 6.85% pa via Barclays.",
    challenge:
      "Established trade-business operator, building-products distribution with three regional depots, trading from leased Hedge End premises on the Charles Watts Way business park for six years. The freeholder offered the unit for sale at £1.58M with a 90-day decision window ahead of a wider portfolio disposal. Turnover £4.85M, EBITDA £465K on the most recent full year, with a stable customer base across Hampshire SME tradespeople and a growing online click-and-collect channel.\n\nThe partnership had £430K deposit available from accumulated retained earnings. The Hedge End and West End business-park belt sits technically inside Eastleigh Borough rather than Southampton City, which a small portion of the lender pool reads differently for sector exposure purposes; the issue was matching the deal to a high-street commercial desk that prices the Solent corridor as a single market rather than splitting at the borough boundary.",
    solution:
      "Barclays Commercial quoted 6.85% pa over 20 years at 73% LTV (£1.15M against £1.58M valuation). EBITDA cover at 2.12x stressed at a notional rate 1.5 percentage points above pay rate, comfortable margin. NatWest and Santander also quoted; Barclays offered the cleanest covenant package on personal guarantee structure.\n\nThe credit submission ran on three years of audited accounts, current management figures, the customer-base evidence, the online-channel mix evidence, deposit proof and a clean Phase I environmental assessment given the light-industrial use class. Specialist commercial valuer with Hedge End comparables. Credit approval at week 3, full legal completion at week 7 from initial enquiry, comfortably inside the 90-day vendor window.",
    outcome:
      "Freehold acquired ahead of the vendor's decision window. Monthly mortgage payment £8,830 against monthly EBITDA of £38,750, very strong cover. Operator has subsequently used the same lender for a second Solent-corridor business-park acquisition.",
    keyStats: [
      { label: "Facility", value: "£1.15M" },
      { label: "Property value", value: "£1.58M" },
      { label: "LTV", value: "73%" },
      { label: "Rate", value: "6.85% pa" },
      { label: "Term", value: "20 years" },
      { label: "EBITDA cover", value: "2.12x" },
    ],
    coordinates: [50.9135, -1.3105],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
