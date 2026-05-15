/**
 * /faq page content, Commercial Mortgages Southampton.
 *
 * Four sections, 20 questions. Each answer 80 to 150 words for citable
 * passage-level depth. Required entities (used factually, never as
 * authorisation claims): mortgage, commercial mortgage, southampton, finance,
 * lender, broker, stamp duty, limited companies, refinance, residential.
 * Commercial mortgages are unregulated lending, do NOT claim FCA
 * authorisation. FAQ schema injected server-side.
 *
 * Voice: first-person plural ("we"). Rate range mid-2026: 6.0 to 9.0 pct pa.
 */

export interface FaqItem {
  question: string;
  answer: string; // HTML allowed
}

export interface FaqSection {
  heading: string;
  items: FaqItem[];
}

export const faqContent: FaqSection[] = [
  {
    heading: "The basics",
    items: [
      {
        question: "What is a commercial mortgage?",
        answer:
          'A commercial mortgage is long-term debt secured against income-producing or owner-occupied <strong>commercial</strong> property, offices, retail, industrial-warehouse, semi-commercial shop+flats, healthcare, hospitality and trading-business premises. In the Southampton market for mid-2026, typical facility size 150K to 10M pounds; LTV 65 to 75 percent; term 5 to 25 years; rate 6.0 to 9.0 percent pa. Repayment is normally monthly capital and interest on a reducing balance. The lender takes a first legal charge over the property and usually a personal or limited company guarantee. See <a href="/services">our commercial mortgage services</a> for the full eight-product breakdown across owner-occupier, investment, semi-commercial, portfolio refinance and trading-business.',
      },
      {
        question: "Do commercial mortgages sit inside the FCA regulated mortgage perimeter?",
        answer:
          'No. Commercial mortgages are unregulated lending and fall outside the FCA\'s regulated mortgage perimeter. <strong>We are not FCA-authorised</strong> because the products we arrange are unregulated by definition. We place owner-occupier, investment, semi-commercial (where the borrower does not occupy the residential element), portfolio refinance, trading-business, commercial remortgage, commercial bridging and second-charge commercial. Regulated cases (semi-commercial where the borrower occupies the residential element, regulated bridging, residential mortgages, consumer buy-to-let) are referred to an FCA-authorised firm. Most commercial mortgage brokers operate the same way, because the underlying products do not require FCA authorisation.',
      },
      {
        question: "Who is a commercial mortgage for?",
        answer:
          'Three primary audiences and our week splits roughly evenly across all three. <strong>Owner-occupier business buyers</strong>, buying or refinancing the freehold of premises their own business trades from. Bassett and Lordswood dental and professional services, Bedford Place independent F&B operators, Adanac Park and Nursling trade-business owners, healthcare ancillary across the University Hospital Southampton catchment, independent retail operators on Above Bar Street, Shirley Road and Portswood Road. <strong>Commercial property investors and landlords</strong>, buying or refinancing let commercial assets, single-let or multi-let, sometimes a portfolio of five or more. <strong>Trading-business owner-operators</strong>, hotels, restaurants, pubs, day nurseries, care homes, buying the operational property and the going concern together. The product, the lender pool and the underwriting style are different across the three; the broker discipline is the same.',
      },
      {
        question: "What is the difference between a commercial mortgage and development finance?",
        answer:
          'A <strong>commercial mortgage</strong> funds the purchase or refinance of a completed, income-producing or owner-occupied commercial property. Funds drawn in a single tranche at completion. Term 5 to 25 years. Monthly capital and interest. <strong>Development finance</strong> funds construction or heavy refurbishment and is drawn in tranches against build-progress monitoring, with interest rolled or serviced and capital repaid at exit (sale or refinance) typically 12 to 24 months later. <strong>Bridge-to-let</strong> sits in between for short-term value-add, buy a vacant or under-let asset, refurbish or re-tenant, then term out onto a long-term commercial mortgage once stabilised. A Mayflower Quarter vacant retail-to-Class E refit is a typical bridge-to-let candidate. We broker commercial mortgages and bridge-to-let; we do not place pure ground-up development finance.',
      },
    ],
  },
  {
    heading: "Eligibility, deposit and pricing",
    items: [
      {
        question: "What deposit do I need for a commercial mortgage in Southampton?",
        answer:
          'Typically <strong>25 to 30 percent</strong> for owner-occupier and commercial investment. Semi-commercial often 25 percent. Trading-business (Ocean Village hospitality, Bedford Place restaurant, Bitterne care home) sits tighter at <strong>30 to 40 percent</strong>, reflecting the specialist underwrite. The deposit must be genuine equity and traceable: accumulated retained profit in the trading limited company, sale proceeds of another asset, family gift with a written declaration, or pension drawdown if structured cleanly. Lenders will not accept a second loan secured against the same property as the deposit. Personal guarantees do not count as equity. On owner-occupier deals where EBITDA cover is comfortable, occasional 80 percent LTV products exist but pricing is materially wider, usually not the right answer.',
      },
      {
        question: "Can I get a commercial mortgage with limited trading history?",
        answer:
          'For owner-occupier, two years of clean filed accounts is the comfortable minimum. We routinely place deals with <span class="figure-inline">12 to 18 months</span> trading where the sector is well understood, dental, GP, pharmacy, established skilled trades, regulated professions. The lender wants to see growing turnover, stable margins and a credible business case for the freehold purchase. For commercial investment the test is tenant covenant and lease length, not borrower trading history, a five-year-old single-asset SPV with a strong national retail tenant lease at Westquay or a freight-forwarder covenant on the M271 corridor prices well. <strong>InterBay Commercial</strong>, <strong>Cynergy Bank</strong>, Allica Bank, HTB and Cambridge & Counties have meaningful flexibility on borrower history that high-street commercial desks will not entertain on the same case.',
      },
      {
        question: "Can a limited company take out a commercial mortgage?",
        answer:
          "Yes, and most commercial mortgages in the UK are written into <strong>limited companies</strong>. For commercial investment, a special-purpose vehicle (SPV) limited company is the standard structure: a single asset or portfolio held in a clean SPV with the SIC code 68209 (real-estate-related activities). For owner-occupier, the borrower is usually the trading limited company itself, with the property held on its balance sheet. Trading-business mortgages can be structured either way, into the trading company or into a separate property-holding limited company that leases the property back to the operating business. Lenders price both routes; the choice depends on tax efficiency, lender appetite and exit planning. We model the alternatives at indicative-terms stage.",
      },
      {
        question: "What rates are Southampton commercial mortgage lenders pricing at right now?",
        answer:
          'Mid-2026 ranges by product type, all inside the <span class="figure-inline">6.0 to 9.0 percent pa</span> band. Owner-occupier on strong covenants in defensive sectors (Bassett dental, Cumberland Place professional offices): <span class="figure-inline">6.0 to 7.5 percent</span> pa. Commercial investment with prime tenant on a long lease, including ABP-adjacent freight forwarders on the M271 corridor and national retail covenants at Westquay: <span class="figure-inline">6.5 to 8.0 percent</span> pa. Semi-commercial shop+flat across Shirley Road and Portswood Road: <span class="figure-inline">7.0 to 8.0 percent</span> pa. Trading-business (Ocean Village hospitality, Bedford Place F&B, Bitterne care home): <span class="figure-inline">7.5 to 9.0 percent</span> pa. HMO portfolio refinance across Highfield, Portswood and Bevois Valley: <span class="figure-inline">7.0 to 8.5 percent</span> pa. Drivers: LTV, EBITDA or ICR / DSCR cover, lease length, tenant covenant, sector and borrower track record.',
      },
      {
        question: "What fees should I expect on a Southampton commercial mortgage?",
        answer:
          '<strong>Arrangement fee:</strong> 1 to 2 percent of the facility, often added to the loan rather than paid up-front. <strong>RICS Red Book valuation fee:</strong> 1,500 to 8,000 pounds depending on asset complexity, sector-specialist (Ocean Village hospitality, Bitterne care home, listed-building work on Above Bar Street, multi-let industrial at Adanac Park) and large investment lots cost more. <strong>Legal fees:</strong> both sides, your solicitor 2,500 to 8,000 pounds typical for commercial conveyancing, the lender\'s solicitor recharged at cost 1,500 to 4,000 pounds. <strong>Broker fee:</strong> usually included in the arrangement fee with no extra charge to the borrower; on complex specialist cases a separate broker fee is sometimes agreed. <strong>Exit / redemption fee:</strong> some 5-year fixes carry early-repayment charges of 3 to 5 percent in years 1 to 2, tapering. Total fee cost typically lands at 2 to 3 percent of the facility.',
      },
      {
        question: "Do I pay stamp duty on commercial property in Southampton?",
        answer:
          'Yes, Stamp Duty Land Tax (SDLT) applies to commercial property purchases in England, including Southampton. The non-residential bands run 0 percent on the first 150,000 pounds, 2 percent on the next 100,000 pounds, and 5 percent on the balance above 250,000 pounds. There is no first-time-buyer relief, no second-property surcharge and no annual tax on enveloped dwellings issue (commercial does not engage ATED). Mixed-use property, a semi-commercial shop with a flat above on Shirley Road or Portswood Road, is taxed entirely on the non-residential rates if the commercial element is genuine, which is materially cheaper than residential stamp duty. SDLT is paid by the buyer at completion through the solicitor. SDLT is a cost the lender will not finance, it must come from your equity.',
      },
    ],
  },
  {
    heading: "Process and timing",
    items: [
      {
        question: "How long does a commercial mortgage take to complete in Southampton?",
        answer:
          'Indicative terms within <span class="figure-inline">48 hours</span> of a complete enquiry. Full completion typically <span class="figure-inline">4 to 8 weeks</span> for mainstream owner-occupier, commercial investment and semi-commercial. <span class="figure-inline">6 to 10 weeks</span> for trading-business cases (Ocean Village hospitality, Bedford Place F&B, Bitterne care home) and HMO portfolio refinance reflecting the multi-property redemption sequencing across Highfield, Portswood and Bevois Valley. The critical-path item is almost always the RICS Red Book valuation. Faster turnaround is possible on clean owner-occupier deals, fastest recent completion was <strong>28 working days</strong> from initial enquiry on a Cumberland Place professional office acquisition, where the borrower had filed accounts ready, a tight legal pack and the lender had recent comparable approvals on file at the same Hampshire valuer.',
      },
      {
        question: "What is a RICS Red Book valuation and why does it matter?",
        answer:
          "The Royal Institution of Chartered Surveyors (RICS) Red Book is the global standard for property valuation. Every commercial mortgage lender requires a Red Book valuation by a RICS-registered surveyor on its panel before it will draw down funds. The valuer inspects the property, reviews leases and tenant covenants, examines comparable evidence in the local market, considers the physical condition, and reports on market value, vacant possession value, and (for trading-business) sometimes goodwill value separately. The lender lends against this figure, not against the price the buyer is paying or the seller is asking. Aggressive valuation assumptions are the most common reason commercial deals stall at credit committee. Hampshire valuers cost 1,500 to 8,000 pounds depending on asset complexity.",
      },
      {
        question: "Do I need a solicitor for a commercial mortgage?",
        answer:
          "Yes, and you need a solicitor experienced in commercial property and commercial finance, not your residential conveyancer. The lender instructs its own solicitor to act on the loan documentation; you instruct your solicitor to act on the property purchase or refinance. The two solicitors negotiate the facility agreement, the first legal charge, the debenture, the personal guarantee, the security pack, conditions precedent and CPSE replies. Standard commercial conveyancing runs three to four weeks from instruction; complex multi-asset cases longer. Legal fees both sides typically 4,000 to 12,000 pounds combined. We can recommend Southampton and Solent commercial property solicitors who are familiar with the lender desks on our panel, which materially helps the timeline.",
      },
      {
        question: "What documents will I need to apply?",
        answer:
          "<strong>Owner-occupier:</strong> two years of filed accounts, current management figures, a six-month projection, deposit proof, identity and address verification, the property sale memorandum, source-of-funds documents. <strong>Commercial investment:</strong> the lease, tenant covenant pack (tenant's accounts where relevant), rent roll, occupancy history, the SPV pack (incorporation, beneficial ownership, accounts if seasoned), deposit proof, identity. <strong>Trading-business:</strong> sector-specific evidence on top of the owner-occupier pack, CQC inspection reports for care, Ofsted for nursery, NHS contract value for dental, occupancy and ADR for hotel, barrelage and licence for pub. We send a tailored document checklist on the first call.",
      },
    ],
  },
  {
    heading: "Southampton-specific questions",
    items: [
      {
        question: "Which planning portal do I use for Southampton commercial property?",
        answer:
          'One planning authority covers the entire Southampton commercial market. <strong>Southampton City Council</strong> is the unitary planning authority and the portal sits at <a href="https://planning.southampton.gov.uk">planning.southampton.gov.uk</a>. The portal covers the full SO14 to SO19 city footprint, from the Above Bar Street and Mayflower Quarter CBD through Ocean Village, Bedford Place, Bevois Valley, Highfield, Portswood, Shirley, Bassett, Bitterne and Woolston. Filter by application type "Full" and use class E(a) to E(g), Sui Generis (hotel, pub, hot-food takeaway) or C4 / Sui Generis (HMO) to surface commercial-relevant decisions. Where a property purchase depends on a planning consent, lenders want sight of the decision notice and any conditions before drawdown. Mayflower Quarter and Royal Pier consent histories sit on the same portal. The SO30 Hedge End and West End fringe sits under Eastleigh Borough Council, a different portal.',
      },
      {
        question: "Which Southampton postcodes do you cover?",
        answer:
          'The full SO postcode footprint that touches the Southampton commercial market. <strong>SO14</strong> covers the city centre, Above Bar Street, Mayflower Quarter, Royal Pier and Ocean Village. <strong>SO15</strong> covers Bedford Place, The Polygon and Shirley. <strong>SO16</strong> covers Bassett, Lordswood, Nursling and Adanac Park. <strong>SO17</strong> covers Highfield and Portswood, the University of Southampton corridor. <strong>SO18</strong> covers Bitterne Park and Ashurst. <strong>SO19</strong> covers Bitterne, Woolston, Sholing and Weston. We also cover the wider Solent corridor where the borrower or asset connects back to Southampton, including the <strong>SO30</strong> Hedge End and West End fringe (technically Eastleigh borough), the SO50 Eastleigh business-park belt, and the wider Hampshire SME and industrial market that reads as a single M27 corridor with Portsmouth.',
      },
      {
        question: "How does M271 and Adanac Park logistics lender appetite work?",
        answer:
          'The M271 spur and the Adanac Park / Nursling industrial cluster carry one of the densest B8 logistics-warehouse markets on the South Coast, anchored by Associated British Ports, Ordnance Survey and the cross-Solent freight forwarders. The lender pool reads the Hampshire industrial market as a single M27 corridor with Portsmouth, which means yields and pricing are tighter than the Southampton-only data suggests because lenders price the corridor not the city. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong>, Aldermore and YBS Commercial lead the lender competition on Solent industrial refinance and acquisition; YBS Commercial is the standout name for stabilised investment lots with a clean tenant covenant. Pricing for a stabilised single-let B8 warehouse at Adanac Park with three years of unexpired lease: <span class="figure-inline">6.5 to 7.5 percent</span> pa at 65 to 70 percent LTV. Multi-let estates and shorter-WAULT cases sit wider.',
      },
      {
        question: "How does the University of Southampton catchment affect HMO finance?",
        answer:
          'The University of Southampton (c. 23,000 students) and Solent University (c. 11,000) anchor one of the densest HMO catchments in central southern England, concentrated across the Highfield (SO17), Portswood (SO17) and Bevois Valley (SO14/SO17) belt. Southampton City Council operates additional HMO licensing across the city and has historically considered Article 4 directions on student-housing balance in the Highfield ward; lenders read this as a normal underwriting constraint. Stabilised HMO portfolios with existing C4 or Sui Generis consents are financeable cleanly at 65 to 75 percent LTV. <strong>InterBay Commercial</strong>, Paragon, Together and Foundation Home Loans lead the lender pool; pricing for a stabilised portfolio: <span class="figure-inline">7.0 to 8.0 percent</span> pa at 70 to 75 percent LTV. Speculative C3-to-C4 conversion finance is much harder to place without an existing planning consent in hand. We need to see the planning consent or lawful-development certificate before submitting to credit.',
      },
      {
        question: "How does Ocean Village hospitality lender appetite differ from inland F&B?",
        answer:
          'Ocean Village is Southampton\'s flagship marina-hospitality and waterfront-office cluster, anchored by Carnival UK\'s HQ and supported by the year-round Solent cruise-passenger flow through ABP terminals, the Mayflower Quarter regeneration and a stable corporate spillover. The lender pool tightens to hospitality specialists: <strong>Cynergy Bank</strong>, Allied Irish Bank UK and Metro Bank lead on Ocean Village restaurant-with-rooms and waterfront-bar refinance and acquisition, each pricing on EBITDA cover, ADR, occupancy track record and the building condition. Pricing for a stabilised independent restaurant-with-rooms on the marina with three years of clean accounts: <span class="figure-inline">7.5 to 8.5 percent</span> pa at 65 to 70 percent LTV on a 15 to 20 year term. Long-leasehold-under-freehold structures are normal on the Marina estate; the head-lease term matters to the underwrite.',
      },
      {
        question: "Are Bassett dental and healthcare ancillary cases a specialist underwrite?",
        answer:
          'Yes, in a positive sense. The Bassett (SO16), Lordswood (SO16), Highfield (SO17) and Bitterne (SO18/SO19) belt concentrates a substantial private-healthcare freehold catchment anchored by University Hospital Southampton, Spire and Nuffield. Dental, GP, pharmacy and allied-healthcare freeholds with NHS contract evidence or stable private-fee mix are a defensive sector for lenders. <strong>Cynergy Bank</strong>, HTB and Cambridge & Counties are the active desks on healthcare and dental owner-occupier; Cambridge & Counties prices particularly cleanly on Hampshire SME freeholds where the borrower has clean filed accounts. Pricing for a stabilised dental owner-occupier with two years of clean accounts and an NHS GDS contract: <span class="figure-inline">6.0 to 7.0 percent</span> pa at 70 to 75 percent LTV on a 20 to 25 year term. The lender underwrites the CQC or GDC rating, the contract length and the principal\'s CV.',
      },
      {
        question: "How does the Mayflower Quarter and Royal Pier regeneration affect lender appetite?",
        answer:
          'Both schemes sit on the central Southampton waterfront. <strong>Mayflower Quarter</strong> (SO14) is the major multi-phase mixed-use Watermark regeneration zone; <strong>Royal Pier Waterfront</strong> is the adjacent flagship redevelopment site. For commercial investment lots adjacent to either scheme, lender appetite is improving as the underlying delivery record builds, although central Southampton retail and office stock still trades wider than Westquay-prime equivalents. Specialist and challenger desks (<strong>Shawbrook</strong>, <strong>InterBay Commercial</strong>, OakNorth and private credit such as Octopus Real Estate on lots above 5M pounds) lead the lender competition on regen-adjacent stock; high-street commercial desks compete on the cleaner stabilised assets along Above Bar Street and Cumberland Place. Pricing for an 8-year-plus unexpired lease to an established covenant: <span class="figure-inline">6.5 to 7.5 percent</span> pa. Pre-let or speculative regen exposure is much harder to place on a commercial mortgage and is usually a bridge-to-let candidate.',
      },
    ],
  },
];
