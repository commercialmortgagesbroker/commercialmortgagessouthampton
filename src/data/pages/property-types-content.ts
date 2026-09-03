/**
 * Property-type / asset-class commercial mortgage pages, Southampton.
 *
 * Twelve sector pages plus a hub. Each sector covers the lender-appetite
 * realities, cover tests (ICR / DSCR / EBITDA), sector-specific underwriting
 * concerns, and Southampton-specific examples. Voice matches the home page,
 * editorial, broker-led, specifics over slogans, real lender names where
 * defensible per NAMED-LENDERS.md.
 *
 * Slugs match src/lib/constants.ts and are used as /property-types/[slug] routes.
 */

export interface AssetTypeFaq {
  question: string;
  answer: string; // HTML allowed
}

export interface AssetTypeDetail {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    h1: string;
    lede: string;
    metrics: Array<{ label: string; value: string }>;
  };
  overview: { h2: string; body: string[] };
  schemeTypes: {
    h2: string;
    items: Array<{ label: string; detail: string }>;
  };
  financeStructures: {
    h2: string;
    intro: string;
    structures: Array<{ product: string; applicability: string }>;
  };
  southamptonContext: { h2: string; body: string };
  lenderAppetite: { h2: string; body: string };
  faqs: AssetTypeFaq[];
}

export interface PropertyTypesHubContent {
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    h1: string;
    lede: string;
  };
  intro: { h2: string; body: string[] };
  underwriting: {
    h2: string;
    body: string;
    items: Array<{ label: string; detail: string }>;
  };
  closingCta: { h2: string; body: string };
}

const standardStructures = [
  { product: "Owner-occupier commercial mortgage", applicability: "Where the borrower's business trades from the property, EBITDA cover at 1.3 to 1.5x." },
  { product: "Commercial investment mortgage", applicability: "Let assets, ICR-led underwriting at 140 to 160% stressed cover." },
  { product: "Commercial bridge-to-let", applicability: "Vacant or value-add acquisition with agreed term-out onto investment mortgage." },
  { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing assets." },
];

// Hub page content
export const propertyTypesHubContent: PropertyTypesHubContent = {
  metaTitle: "Commercial Mortgages Southampton by Property Type | 12 Sectors, 90+ Lenders",
  metaDescription:
    "Commercial mortgage finance for Southampton property, twelve sector pages covering retail, office, industrial, leisure, healthcare, pubs, MOT, nurseries, mixed-use, semi-commercial, HMO and holiday-let. Sector-specific lender appetite, real mid-2026 rates.",
  hero: {
    eyebrow: "Twelve sectors",
    h1: "Commercial Mortgages by Property Type Southampton",
    lede:
      "A Southampton commercial mortgage on an Adanac Park logistics shed prices nothing like a Westquay retail investment or a Highfield student HMO block. The asset class drives the lender list, the LTV band, the cover test and the rate. Twelve sector pages, each with the underwriting that actually applies and the lenders that actually write the deal.",
  },
  intro: {
    h2: "The asset class is the first variable a commercial mortgage lender prices.",
    body: [
      "Borrowers often start with the geography, the LTV they want, or the rate they have read about. Lenders start with the property type. A commercial mortgage on a Westquay retail investment runs through a different desk to one on a wet-led Bevois Valley pub freehold or a Portswood student HMO, different cover test, different LTV cap, different valuation methodology, different rate.",
      "Across the broker panel, the practical division splits twelve ways. Three pure investment classes (<a href=\"/property-types/retail\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">retail</a>, <a href=\"/property-types/office\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">office</a>, <a href=\"/property-types/industrial-warehouse\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">industrial and warehouse</a>) underwritten on ICR against a tenant covenant. Five trading-business classes (<a href=\"/property-types/leisure-hospitality\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">leisure and hospitality</a>, <a href=\"/property-types/healthcare-care-home\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">healthcare and care homes</a>, <a href=\"/property-types/pub-restaurant\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">pubs and restaurants</a>, <a href=\"/property-types/mot-garage-petrol\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">MOT and forecourt</a>, <a href=\"/property-types/nursery-school\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">nurseries and schools</a>) underwritten on EBITDA cover with sector-specialist regulators (CQC, Ofsted, VOSA) feeding the credit decision. Four mixed-tenure or hybrid classes (<a href=\"/property-types/mixed-use\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">mixed-use</a>, <a href=\"/property-types/semi-commercial\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">semi-commercial</a>, <a href=\"/property-types/hmo-block\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">HMO blocks</a>, <a href=\"/property-types/holiday-let-portfolio\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">holiday-let portfolios</a>) where lender appetite varies dramatically with the residential proportion or the operating model.",
      "Southampton is industrial-heavy, HMO-heavy and port-and-logistics-led. The M27 corridor between Southampton and Portsmouth is one of the most active industrial-warehouse markets on the South Coast, and the Solent industrial yield reads tighter than the city-only data suggests because lenders price the corridor not the city. Each page below sets out the LTV band, the cover test, the sector-specific underwriting concerns, the rate range in mid-2026, the lenders most active on the panel, and worked Southampton examples. Where a deal sits awkwardly between sectors, a pub with an operator flat above, an Ocean Village aparthotel doubling as serviced apartments, an Above Bar retail-plus-flat with the upper floors run as short-stay, we say so and explain how lenders treat it.",
    ],
  },
  underwriting: {
    h2: "Three cover tests, twelve sectors. Which test applies to you decides the lender.",
    body:
      "The single most important variable on a commercial mortgage is which cover test the lender uses to size the loan. Get this wrong at outset and the offer either prices materially down at credit committee or falls over. Three tests dominate.",
    items: [
      {
        label: "ICR, interest cover ratio",
        detail:
          "Used on let investment property, retail, office, industrial, semi-commercial, mixed-use. Tests rent against interest only at a stressed notional rate, typically 140 to 160%. The driver is the lease and the tenant covenant, not the borrower's income.",
      },
      {
        label: "DSCR, debt-service cover ratio",
        detail:
          "Used on portfolios and on assets where capital amortisation matters to the lender. Tests net rent against the full mortgage payment (interest plus capital), typically 130 to 145%. Common on portfolio refinance and on larger HMO and FHL portfolios.",
      },
      {
        label: "EBITDA cover",
        detail:
          "Used on owner-occupier and trading-business mortgages, pubs, care homes, MOT centres, nurseries, dental practices, hotels. Tests business operating profit against the mortgage payment, typically 1.3 to 1.5x for mainstream sectors and 1.5 to 2.0x for higher-risk trading sectors. Filed accounts and a credible forward-looking forecast both matter.",
      },
      {
        label: "Sector overlays",
        detail:
          "On top of the cover test, sector-specific overlays drive the credit decision: CQC rating on care homes, Ofsted on nurseries, VOSA approval on MOT centres, barrelage on pubs, lease length on retail, occupancy and ADR on hotels and FHLs.",
      },
    ],
  },
  closingCta: {
    h2: "Send the property, the LTV target and the trading or rental income.",
    body:
      "We will tell you which sector the deal sits in, which lender desks will look at it, which cover test will apply, and what indicative terms look like across the panel. Indicative numbers in 48 hours. If the deal does not work, wrong sector for the LTV, cover test fails, regulator rating insufficient, we say so up front rather than burning weeks at valuation.",
  },
};

export const assetTypeDetails: Record<string, AssetTypeDetail> = {
  // Retail
  retail: {
    slug: "retail",
    name: "Retail",
    metaTitle: "Retail Commercial Mortgages Southampton | Westquay, Above Bar, Bargate Quarter, Shirley, Portswood",
    metaDescription:
      "Commercial mortgage finance for retail property in Southampton, Westquay (Hammerson), Above Bar Street, Bargate Quarter, East Street, Shirley High Street, Bitterne Triangle, Portswood Road, Bedford Place. Investment LTVs to 75%, ICR 140 to 160%, mid-2026 rates 6.5 to 8.5% pa. NatWest, Lloyds, Barclays, InterBay Commercial.",
    hero: {
      eyebrow: "Retail",
      h1: "Retail Commercial Mortgages Southampton",
      lede:
        "Investment finance for let retail property and owner-occupier finance for independent retailers buying their unit. Southampton retail is anchored by Westquay (Hammerson) and the Above Bar prime spine, with deep district-centre stock at Shirley, Bitterne Triangle and Portswood Road, and a strong independent retail scene at Bedford Place. Lender appetite varies sharply by retail sub-type. Investment LTV 65 to 75%, ICR 140 to 160% stressed, mid-2026 rates 6.5 to 8.5% pa.",
      metrics: [
        { label: "Investment LTV", value: "65 to 75%" },
        { label: "Cover test", value: "ICR 140 to 160%" },
        { label: "Rate range", value: "6.5 to 8.5% pa" },
        { label: "Facility", value: "£150K to £5M" },
      ],
    },
    overview: {
      h2: "Underwriting a Southampton retail commercial mortgage",
      body: [
        "The Southampton retail estate splits into four practical brackets and lenders price each one differently. <strong>Prime SO14 city-centre</strong> covers Westquay (Hammerson), the Above Bar Street pedestrianised spine and the Bargate Quarter regeneration zone, institutional-grade pitches dominated by national fashion, beauty and F&B covenants. <strong>Independent-led prime</strong> covers Bedford Place and the Polygon (SO15), the dense independent retail and F&B cluster that anchors the city's most-walked Class E core outside Westquay. <strong>District and neighbourhood retail</strong> covers Shirley High Street (SO15/SO16), Portswood Road (SO17), the Bitterne Triangle district centre (SO18) and East Street (SO14). <strong>Suburban high streets</strong> cover Lordswood, Bassett Avenue, Woolston and the Hedge End out-of-town retail parks at the borough fringe.",
        "Investment underwriting tests <strong>ICR</strong>, rent versus stressed interest, at typically 140 to 160%. The two drivers a credit committee reads first are <strong>unexpired lease term</strong> and <strong>tenant covenant</strong>. A 10-year FRI to a national fashion operator at Westquay prices materially better than three two-year leases to local independents on the same Shirley High Street pitch. WAULT (weighted-average unexpired lease term) under five years pulls LTV down 5 to 10 percentage points and pricing 50 to 75bps wider.",
        "Worked example: an Above Bar Street retail unit on a 10-year FRI to a national fashion covenant, £1.45M valuation, £105K passing rent. ICR at 145% on a 7.6% pa stressed rate sizes the loan to roughly £1.05M, about 72% LTV. <strong>NatWest</strong>, <strong>Lloyds</strong> and <strong>Barclays</strong> all compete on prime CBD investment of this profile. Worked example two: a Bedford Place unit let to two independent operators on shorter leases, £465K valuation, two-year tail to the lead tenant. Same ICR test sizes the loan to roughly 60% LTV; <strong>InterBay Commercial</strong>, Together and <strong>LendInvest</strong> are the realistic desks at 8.5 to 9.0% pa.",
        'For shop-with-flat semi-commercial archetypes, see the <a href="/property-types/semi-commercial">semi-commercial commercial mortgage page</a>; for retail-led mixed-use blocks, see <a href="/property-types/mixed-use">mixed-use</a>. Vacant retail acquisition routes through <a href="/services/commercial-bridge-to-let">bridge-to-let</a> with refurb and re-let exit onto term investment.',
      ],
    },
    schemeTypes: {
      h2: "Retail asset types we fund",
      items: [
        { label: "Prime city-centre retail (SO14)", detail: "Westquay (Hammerson), Above Bar Street pedestrianised spine, Bargate Quarter, East Street. Institutional investment territory; long FRI leases to national covenants." },
        { label: "Bedford Place independent prime", detail: "Bedford Place and the Polygon (SO15). Independent-led F&B and retail, pitch values close to district prime given the dense Class E walk-in trade and proximity to the city centre and Portswood student catchment." },
        { label: "District centre retail", detail: "Shirley High Street (SO15/SO16), Portswood Road (SO17), Bitterne Triangle (SO18). Mixed national and independent covenant, convenience and service retail anchoring residential neighbourhoods of 20,000+ each." },
        { label: "Suburban independent high street", detail: "Lordswood, Bassett Avenue, Woolston parade, Sholing local centre. Independent-led, tighter covenant profile but stable tenant base." },
        { label: "Owner-occupier independent retailer", detail: "Independent businesses buying the freehold they trade from, EBITDA cover route via the owner-occupier service. Common across Bedford Place, Portswood Road and Shirley High Street." },
        { label: "Vacant retail acquisition", detail: "Bridge-to-let funds purchase plus refurbishment plus re-letting period; term-out onto investment mortgage at 12 to 24 months." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Southampton retail",
      intro:
        "Most retail deals route as investment (let asset, ICR-led) or owner-occupier (independent retailer buying their unit, EBITDA-led). Vacant or short-lease assets route through commercial bridge-to-let with an agreed exit. Multi-asset retail portfolios consolidate via portfolio refinance.",
      structures: standardStructures,
    },
    southamptonContext: {
      h2: "The Southampton retail estate",
      body: 'Southampton retail is shaped by an unusual combination of a single dominant covered scheme (Westquay), a long pedestrianised high street (Above Bar Street), and a deep network of district-centre and neighbourhood parades serving a metropolitan population of roughly 350,000. Westquay (Hammerson, opened 2000 with the Watermark extension added in 2017) anchors prime, around 800,000 sq ft of retail and leisure floor space and the dominant institutional comparison destination on the central South Coast. Above Bar Street carries the pedestrianised national-multiple spine running north from Bargate; Bargate Quarter is the regenerating mixed-use southern bookend. East Street holds a tightening but recovering secondary spine with active change-of-use to mixed-use behind 26/00205/DIS at 104-107 East Street. Bedford Place and the Polygon (SO15) carry the densest independent F&B and retail cluster outside the covered scheme. The district centres carry the bulk of broker volume by transaction count: Shirley High Street running the SO15/SO16 spine, Portswood Road serving the university corridor, Bitterne Triangle (SO18) anchoring east-of-Itchen retail. Suburban parades at Lordswood, Bassett Avenue and Woolston round out the network. The cruise-passenger flow through ABP terminals (around 3 million passengers a year, recovering toward pre-pandemic levels) adds an intermittent visitor-spend overlay at Westquay and Above Bar.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Southampton retail",
      body: 'Strongest pricing on convenience and food-led retail with national covenants and on Westquay and Above Bar prime investment let on long FRI leases. Mid-strength on Bedford Place independent prime, where rents are strong but covenants are independent. Tighter on suburban high-street pure-comparison units, particularly where WAULT is under five years. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on prime investment with strong covenants, typical 7.0 to 7.75% pa at 65 to 70% LTV. Mid-market and challenger appetite from Allica Bank, <strong>Shawbrook</strong>, HTB and Cambridge & Counties on district-centre and Portswood Road investment at 8.0 to 8.75% pa. <strong>InterBay Commercial</strong> (OSB Group) and <strong>LendInvest</strong> take the harder cases, short lease tail, secondary covenant, semi-commercial overlap, at 8.5 to 9.0% pa. High-street desks routinely decline retail with WAULT under three years; Together and InterBay Commercial are the realistic desks for that profile.',
    },
    faqs: [
      {
        question: "What LTV can I get on a Southampton retail investment mortgage?",
        answer: "Up to 75% LTV on let retail with strong national covenants and a long FRI lease. Semi-commercial shop-with-flat reaches 75% on the right archetype, common across Shirley High Street and Portswood Road. Vacant retail or short leases (under three years tail) typically cap at 60 to 65%. Convenience-led with a supermarket covenant prices at the keenest end of the band.",
      },
      {
        question: "What ICR do retail lenders need?",
        answer: "Typical 140 to 160% stressed at a notional rate 1 to 2% above pay rate. Prime Westquay or Above Bar with a 10-year FRI to a national covenant sometimes funds at 130%. Suburban Shirley parade with mid-covenant sits at 150 to 160%. The stressed rate is the variable that catches borrowers out, the headline ICR on the actual rate often looks fine, but stressed it pulls the loan size down materially.",
      },
      {
        question: "Are retail rates wider than office or industrial investment?",
        answer: "Retail typically prices 25 to 50bps wider than equivalent office investment in mid-2026, and 50 to 75bps wider than industrial. Convenience and food-led close that gap, supermarket-anchored retail prices closer to industrial than to comparison high-street. The rate gap between sectors has narrowed since 2023 as institutional appetite for prime retail has reasserted.",
      },
      {
        question: "Can I get a commercial mortgage on a vacant retail unit?",
        answer: 'Yes, through <a href="/services/commercial-bridge-to-let">bridge-to-let</a>. A 12 to 24 month bridge funds acquisition plus refurbishment plus the re-letting period; exit is onto a term investment mortgage once the new lease is in place. The lender for the bridge will normally also be the term-out lender. We model both legs at outset so you know the all-in cost of the strategy before exchange.',
      },
      {
        question: "Westquay prime, what does it price at right now?",
        answer: "Westquay investment with a national fashion or F&B covenant on a 10-year FRI prices in the 6.5 to 7.5% pa band at 65% LTV in mid-2026. Lloyds, NatWest, Barclays and Santander all compete on this profile. The scheme's anchor draw, Hammerson management and Westquay Watermark leisure overlay position it close to institutional-grade in lender terms.",
      },
    ],
  },

  // Office
  office: {
    slug: "office",
    name: "Office",
    metaTitle: "Office Commercial Mortgages Southampton | Cumberland Place, Civic Centre Road, Ocean Village",
    metaDescription:
      "Commercial mortgage finance for office property in Southampton, Cumberland Place, Civic Centre Road, Ocean Village (Carnival HQ), Town Quay, Bedford Place serviced offices. LTVs 65 to 75%, mid-2026 rates 7.0 to 9.0% pa.",
    hero: {
      eyebrow: "Office",
      h1: "Office Commercial Mortgages Southampton",
      lede:
        "Investment and owner-occupier mortgage finance for Southampton office property. Cumberland Place and Civic Centre Road carry the central professional-services stock, Ocean Village holds the Carnival UK HQ anchor plus surrounding waterfront office, Town Quay houses the cruise-and-shipping back-office cluster, and Bedford Place serves the serviced-office and small-occupier market. Investment LTV 65 to 75%, owner-occupier to 75% on EBITDA cover, mid-2026 rates 7.0 to 9.0% pa.",
      metrics: [
        { label: "LTV", value: "65 to 75%" },
        { label: "Cover test", value: "ICR 140 to 155% / EBITDA 1.3 to 1.5x" },
        { label: "Rate range", value: "7.0 to 9.0% pa" },
        { label: "Facility", value: "£300K to £10M" },
      ],
    },
    overview: {
      h2: "Underwriting a Southampton office commercial mortgage",
      body: [
        "Southampton office stock reflects the city's port-and-logistics, cruise, university and back-office economy. The occupier base is exceptionally varied, driven by Carnival UK at Ocean Village (the largest single private cruise-line HQ in Europe), Lloyd's Register, Aviva back-office, Ordnance Survey at Adanac Park, University Hospital Southampton clinical and administrative footprint, the University of Southampton and Solent University. The commercial mortgage market splits four ways. <strong>Central CBD professional offices</strong> on Cumberland Place, Civic Centre Road and the streets around the Above Bar civic spine in SO14, the £400K to £3M owner-occupier and small-investment bracket. <strong>Ocean Village waterfront office</strong> (SO14) anchored by Carnival UK plus the surrounding marina-adjacent office stock used by maritime, finance and professional-services occupiers. <strong>Town Quay (SO14)</strong> running the cruise-and-shipping back-office cluster along the inner harbour edge. <strong>Bedford Place serviced offices and Polygon (SO15)</strong> for the smaller-occupier and start-up footprint.",
        "Investment underwriting tests <strong>ICR</strong> at 140 to 155% on let office stock. Tenant covenant carries even more weight than on retail, a five-year unbroken lease to a national professional-services firm prices materially better than the same building let on three two-year leases. Multi-let assets with rolling renewals price at the wider end. Owner-occupier office routes through the EBITDA-cover product at 1.3 to 1.5x, the accountancy practice converting from leasehold to a Cumberland Place freehold, the marine consultancy buying its Town Quay building, the legal firm taking the freehold of its Civic Centre Road townhouse.",
        "<strong>Ocean Village</strong> is a discrete sub-pool. Carnival UK's anchor presence and the marina-led mixed-use environment give the area distinct underwriting characteristics versus the central CBD, lenders read the maritime occupier base and the long-lease history more favourably. <strong>Bedford Place serviced offices</strong> sit with specialist lenders only on the multi-let licence-based product where individual lettings are licences rather than full FRI.",
        "Worked example: a Cumberland Place 5,800 sq ft office investment, £1.65M valuation, let on a 7-year FRI to a regional law firm at £115K passing rent. ICR at 145% sizes a £1.05M loan at 64% LTV; <strong>Lloyds</strong>, <strong>NatWest</strong> and <strong>Santander</strong> all price this profile at 7.5 to 8.0% pa on a five-year fix. Worked example two: a Town Quay marine-services freehold purchase by a Lloyd's Register-aligned consultancy, £720K, EBITDA cover 1.4x. Owner-occupier route at 70% LTV places with Allica Bank or <strong>Shawbrook</strong> at 7.5 to 8.25% pa.",
      ],
    },
    schemeTypes: {
      h2: "Office asset types we fund",
      items: [
        { label: "Central CBD professional office", detail: "Cumberland Place, Civic Centre Road and the streets around the Above Bar civic spine (SO14). The £400K to £3M bracket where most owner-occupier and small-investment commercial mortgage volume sits." },
        { label: "Ocean Village waterfront office", detail: "Carnival UK HQ anchor and the surrounding marina-adjacent office stock. Maritime, finance and professional-services occupiers dominate the tenant base." },
        { label: "Town Quay cruise and shipping back-office", detail: "Town Quay (SO14) cruise-and-shipping back-office cluster along the inner harbour edge. Specialist marine and shipping occupier base." },
        { label: "Bedford Place serviced offices", detail: "Bedford Place and the Polygon (SO15) serviced-office cluster. Smaller-occupier and licence-let format; specialist lender appetite required." },
        { label: "Owner-occupier office freehold", detail: "Professional services buying their building, accountancy, legal, consultancy, marine services. EBITDA cover route at 1.3 to 1.5x." },
        { label: "Multi-let small-cap office", detail: "Serviced or multi-tenant small-cap office buildings, specialist lender appetite, ICR tested at the wider end." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Southampton office",
      intro:
        "Investment routes via commercial investment mortgage on ICR; owner-occupier via the EBITDA-cover route; vacant or value-add via bridge-to-let with an agreed term-out. Serviced and licence-let stock routes through specialist desks.",
      structures: standardStructures,
    },
    southamptonContext: {
      h2: "The Southampton office estate",
      body: 'Southampton office stock divides into four clear clusters. The central CBD on Cumberland Place and Civic Centre Road runs Victorian and 1960s purpose-built stock plus continual conversion of upper-floor space, the densest professional-services freehold market in the city. Ocean Village holds the flagship modern waterfront office around Carnival UK HQ, the largest cruise-line corporate office in Europe, supported by an adjacent marina-led mixed-use environment. Town Quay carries the cruise-and-shipping back-office cluster along the inner harbour edge, used by Lloyd\'s Register, Carnival ancillary operations, freight forwarders and marine consultancy firms. Bedford Place and the Polygon (SO15) host the serviced-office and start-up cluster on the back of the area\'s independent F&B density and proximity to both Southampton Central station and the university corridor. Outer office stock at Adanac Park (Ordnance Survey HQ), Hedge End business parks and the Eastleigh corridor sits outside Southampton city boundary but feeds Southampton-led broker volume. The structural supply position is steady rather than stretched, central CBD owner-occupier demand outstrips speculative supply, and refinancing flow is a meaningful share of total commercial mortgage volume.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Southampton office",
      body: 'Strong on prime let stock with national covenants and unexpired lease term over five years. Mid-strength on secondary CBD with mid-covenant tenants on shorter leases. Tighter, but still fundable, on vacant or part-let secondary office routed through bridge-to-let with a credible refurbishment story. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on prime investment at 7.0 to 7.75% pa for 65% LTV with strong covenants. <strong>Shawbrook</strong>, Allica Bank, HTB and Cambridge & Counties cover mid-market at 7.75 to 8.5% pa. <strong>InterBay Commercial</strong>, <strong>LendInvest</strong> and <strong>Cynergy Bank</strong> handle secondary, short-lease and refurb-to-let stories at 8.25 to 9.0% pa. Ocean Village waterfront stock with conventional FRI lettings sits on the standard panel; serviced-office Bedford Place buildings on licence-let income route through specialist lenders only.',
    },
    faqs: [
      {
        question: "What LTV can I get on a Southampton office investment?",
        answer: "Up to 75% LTV on strong-covenant let stock with five-plus years unexpired. ICR cover tested at 140 to 155% stressed. Vacant or short-lease assets cap at 60 to 65% LTV. WAULT under three years usually pulls the loan to 60% even where the building is otherwise well-let.",
      },
      {
        question: "Is post-Covid Southampton office stock still fundable?",
        answer: "Yes, the structural undersupply of modern central CBD office and the strength of the maritime, port and back-office occupier base have held Southampton up better than many regional markets through the post-Covid cycle. Bridge-to-let funds acquisition plus refurbishment plus re-letting; specialists like Shawbrook, LendInvest and HTB have appetite for genuine refurbishment stories with credible exit lettings. The EPC-B 2030 deadline has if anything strengthened lender comfort with refurb plans, because it forces the upgrade work the asset needs anyway.",
      },
      {
        question: "Ocean Village office purchase, can you fund it?",
        answer: "Yes, where the asset is let on conventional FRI to a single tenant or owner-occupied by a strong-covenant business. The Carnival UK anchor and the maritime-led occupier base help the credit story; the underwriting still tests the income on its own merits. Above £5M the deal typically routes through structured commercial debt outside the standard broker panel.",
      },
      {
        question: "What about owner-occupier office purchase on Cumberland Place?",
        answer: 'Routes via the <a href="/services/owner-occupier-commercial-mortgage">owner-occupier commercial mortgage</a>. EBITDA cover 1.3 to 1.5x; LTV up to 75%; rate 7.0 to 8.25% pa for strong covenants. The accountancy or legal firm taking the freehold of its existing leased Cumberland Place or Civic Centre Road building is the archetypal deal, typically £600K to £2M facility.',
      },
      {
        question: "Are Bedford Place serviced offices fundable in Southampton?",
        answer: "Yes, but the lender pool narrows. Multi-let small-cap serviced office buildings with rolling short-term licences (rather than full FRI leases) route through Shawbrook, Allica Bank, InterBay Commercial and Cynergy Bank. ICR tested at the wider end (155 to 165%) reflecting the income volatility. Pricing typically 8.5 to 9.0% pa at 65% LTV.",
      },
    ],
  },

  // Industrial / warehouse
  "industrial-warehouse": {
    slug: "industrial-warehouse",
    name: "Industrial & Warehouse",
    metaTitle: "Industrial Commercial Mortgages Southampton | Adanac Park, Nursling, Test Lane, Solent Industrial Estate",
    metaDescription:
      "Commercial mortgage finance for industrial and warehouse property in Southampton, Adanac Park, Nursling Industrial Estate, Test Lane, Solent Industrial Estate Hedge End, ABP estate, Western Docks, the M271/M27 corridor. One of the deepest South Coast industrial markets. Mid-2026 rates 6.0 to 7.75% pa.",
    hero: {
      eyebrow: "Industrial & warehouse",
      h1: "Industrial and Warehouse Commercial Mortgages Southampton",
      lede:
        "Investment and owner-occupier finance for B2/B8 industrial property and trade-counter units across one of the deepest South Coast industrial markets. Adanac Park, Nursling Industrial Estate, Test Lane, Solent Industrial Estate at Hedge End, the ABP estate, Western Docks and the M271/M27 corridor carry significant institutional and SME stock. Hampshire industrial yields read tighter than the Southampton-only data suggests because lenders price the Solent corridor as one market with Portsmouth. Investment LTV to 75%, owner-occupier to 75%, rates 6.0 to 7.75% pa.",
      metrics: [
        { label: "LTV", value: "70 to 75%" },
        { label: "Cover test", value: "ICR 140 to 155% / EBITDA 1.3 to 1.5x" },
        { label: "Rate range", value: "6.0 to 7.75% pa" },
        { label: "Facility", value: "£250K to £15M" },
      ],
    },
    overview: {
      h2: "Underwriting a Southampton industrial commercial mortgage",
      body: [
        "Southampton is one of the largest South Coast industrial markets, anchored by Associated British Ports' freight and container handling operation and a port-led logistics estate that runs along the M271/M27 corridor. The market splits four ways. <strong>Port-and-logistics estate</strong> covers the ABP docks estate, Western Docks, the container terminal feeder yards and the freight-forwarder cluster running off Mountbatten Way. <strong>Adanac Park (SO16)</strong> is the headline modern business and industrial park on the M271 junction with the M27, anchored by Ordnance Survey HQ and home to a cluster of B1/B2/B8 occupiers. <strong>Nursling Industrial Estate and Test Lane (SO16)</strong> hold dense B2/B8 stock supplying the cross-Solent logistics market and serving Whitbread, DHL, Lidl regional and other major distribution occupiers. <strong>Solent Industrial Estate (Hedge End, SO30)</strong> sits at the borough boundary serving the eastern Southampton, M27 East and Eastleigh corridor occupier base.",
        "Industrial enjoys broad lender competition nationally in mid-2026 because the asset class has performed consistently well through 2022 to 2026, and Southampton stock benefits from the Solent corridor logistics demand. Investment LTVs of 75% are achievable on strong-covenant let assets with five-plus years unexpired; owner-occupier 70 to 75% on businesses with two years' clean accounts and EBITDA cover of 1.3 to 1.5x. Deal sizes range widely, central Southampton owner-occupier industrial sits in the £300K to £2M bracket; the Solent corridor portfolios and institutional-grade B8 sheds at Adanac Park and Nursling routinely sit in the £3M to £15M bracket and beyond.",
        "<strong>Lenders price the M27 Solent corridor as one market with Portsmouth.</strong> Large logistics operators (Whitbread, Lidl regional, DHL, Amazon last-mile) treat Southampton, Portsmouth, Eastleigh and Fareham as a single labour shed; valuers pull comparables across the corridor and credit committees price the corridor not the city. This matters for Southampton specifically because Hampshire industrial yields read tighter than the Southampton-only sold-data and comparison set would suggest, the Portsmouth and Eastleigh end of the corridor pulls institutional pricing in.",
        "Worked example: a Nursling Industrial Estate B8 logistics unit, 42,000 sq ft, let on a 12-year FRI to a regional distribution operator, £6.85M valuation, £485K passing rent. ICR at 140% on a 7.2% pa stressed rate sizes a loan to roughly £4.85M, about 71% LTV. <strong>NatWest</strong>, <strong>Lloyds</strong> and <strong>Barclays</strong> all compete on this profile at 6.75 to 7.25% pa on a five-year fix. Worked example two: a Test Lane light-industrial trade-counter unit, 12,400 sq ft, owner-occupier purchase by an existing operator, £1.85M valuation, EBITDA cover 1.55x. Placed with <strong>Lloyds</strong> at 70% LTV, 6.45% pa, 20-year term.",
      ],
    },
    schemeTypes: {
      h2: "Industrial asset types we fund",
      items: [
        { label: "Port-and-logistics B8 warehouse", detail: "ABP estate, Western Docks, Mountbatten Way freight-forwarder cluster. Large-format distribution sheds serving the container terminal and the cross-Solent logistics market." },
        { label: "Adanac Park modern industrial", detail: "Adanac Park (SO16) on the M271/M27 junction, modern B1/B2/B8 stock anchored by Ordnance Survey HQ. Institutional-grade investment territory." },
        { label: "Nursling and Test Lane B2/B8", detail: "Nursling Industrial Estate and Test Lane (SO16), dense B2/B8 stock supplying the Solent corridor and serving Whitbread, DHL, Lidl regional and other distribution occupiers." },
        { label: "Solent Industrial Estate Hedge End", detail: "Solent Industrial Estate at Hedge End (SO30) at the borough boundary, serves eastern Southampton, the M27 East and Eastleigh corridor occupier base." },
        { label: "Trade-counter retail-in-industrial", detail: "Toolstation, Howdens, Screwfix, City Plumbing and similar trade-counter format across Adanac Park, Nursling and the Hedge End fringe. Treated as industrial investment with retail-tenant covenant overlay." },
        { label: "Owner-occupier SME industrial", detail: "Manufacturing, engineering, logistics and distribution SMEs buying their workshop or warehouse, the £300K to £2M bracket. EBITDA-led owner-occupier route." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Southampton industrial",
      intro:
        "Investment routes via commercial investment mortgage on ICR; owner-occupier via the EBITDA-cover route; vacant industrial via bridge-to-let. Multi-let estate portfolios consolidate via portfolio refinance.",
      structures: standardStructures,
    },
    southamptonContext: {
      h2: "The Southampton industrial estate",
      body: 'Southampton is one of the largest industrial commercial markets on the South Coast, shaped by Associated British Ports running the UK\'s largest vehicle-handling port and second-largest container port. The ABP estate dominates the inner-port logistics footprint with the container terminal, freight terminals and the cruise terminals, and the surrounding Western Docks supply chain. Adanac Park (SO16), on the M271/M27 junction, is the flagship modern business and industrial park anchored by Ordnance Survey HQ and home to a cluster of B1/B2/B8 occupiers. Nursling Industrial Estate and Test Lane (SO16), immediately west of the M271, carry dense B2/B8 stock supplying the Solent corridor logistics market, Whitbread, DHL, Lidl regional and other major distribution occupiers operate from this cluster. Solent Industrial Estate at Hedge End (SO30) sits at the eastern borough boundary serving the M27 East and Eastleigh corridor occupier base. Smaller workshop and trade-counter stock is distributed across Woolston, Sholing and the inner-Southampton industrial pockets. The structural picture is consistent demand-side strength, the cross-Solent logistics shed treats Southampton, Portsmouth, Eastleigh and Fareham as one labour market, and Hampshire industrial yields read tighter than the Southampton-only data suggests because lenders price the corridor not the city.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Southampton industrial",
      body: 'Strong across the asset class, one of the most competitive lender pools of any sector on the South Coast. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> all compete on prime let industrial at Adanac Park, Nursling and the Solent Industrial Estate at 6.5 to 7.5% pa, 65 to 75% LTV with strong covenants. Larger institutional B8 sheds on the ABP estate and at Nursling above £5M facility size often route through Lloyds Real Estate Banking or Barclays Corporate Real Estate. Allica Bank, <strong>Shawbrook</strong>, HTB and Cambridge & Counties dominate mid-market and owner-occupier industrial at 6.5 to 7.75% pa. <strong>InterBay Commercial</strong>, Together and Aldermore take the multi-let and value-add cases at 7.5 to 8.25% pa. Owner-occupier industrial enjoys the sharpest pricing of any sector, 6.0 to 7.25% pa for SMEs with two years\' clean accounts, EBITDA cover 1.3 to 1.5x. The Solent corridor labour-shed dynamic means underwriters routinely pull comparables from Portsmouth, Eastleigh and Fareham; they read the market as one.',
    },
    faqs: [
      {
        question: "What rate can I get on Southampton industrial investment?",
        answer: "Currently 6.0 to 7.75% pa for prime let industrial with strong covenants and five-plus years unexpired. Larger institutional B8 sheds at Adanac Park and Nursling with national logistics covenants price at the keenest end. Trade-counter with national covenant prices at 7.0 to 7.5%. Owner-occupier industrial with two years' clean accounts prices at 6.0 to 7.25% pa, the keenest pricing of any commercial sector.",
      },
      {
        question: "Can I fund an owner-occupier industrial purchase at Adanac Park or Nursling?",
        answer: 'Yes, typically 70 to 75% LTV on strong-covenant SME buyers via the <a href="/services/owner-occupier-commercial-mortgage">owner-occupier route</a>. EBITDA cover 1.3 to 1.5x. Allica Bank and Shawbrook are the most active mid-market owner-occupier desks; Lloyds, NatWest and Barclays compete on the larger end where borrowing is above £1M and the covenant is strong. Adanac Park and Nursling are well-known to underwriters as modern, institutional-grade stock.',
      },
      {
        question: "How do lenders price the Solent corridor?",
        answer: "As one market. Large logistics operators (Whitbread, Lidl regional, DHL, Amazon last-mile) treat Southampton, Portsmouth, Eastleigh and Fareham as a single labour shed, and lenders follow them. Valuers pull comparables across the corridor and credit committees price the corridor not the city. Hampshire industrial yields read tighter than the Southampton-only sold-data and comparison set would suggest because the Portsmouth and Eastleigh end of the corridor pulls institutional pricing in.",
      },
      {
        question: "What about trade-counter, different to industrial?",
        answer: "Trade-counter format (Toolstation, Howdens, Screwfix, City Plumbing) sits formally as industrial but lenders treat it as industrial investment with a retail-tenant covenant overlay. The Southampton trade-counter footprint is healthy, the Adanac Park, Nursling, Test Lane and Hedge End fringe carry significant trade-counter stock. Pricing is usually 25bps inside generic industrial because the covenants are stronger than mid-market industrial tenants.",
      },
      {
        question: "Multi-let industrial estate in Southampton, premium or penalty?",
        answer: "Premium in mid-2026. Multi-let industrial estates have been the strongest-performing UK commercial asset class for three years running, and Southampton's port-led logistics demand intensifies that. Lenders price the Adanac Park and Nursling multi-let assets at 6.75 to 7.5% pa at 70 to 75% LTV with ICR cover at 140 to 150%. The market is genuinely competitive across NatWest, Lloyds, Barclays, Santander, Shawbrook, Allica Bank and HTB.",
      },
    ],
  },

  // Leisure & hospitality
  "leisure-hospitality": {
    slug: "leisure-hospitality",
    name: "Leisure & Hospitality",
    metaTitle: "Leisure Commercial Mortgages Southampton | Ocean Village Marina, West Quay, Cruise Terminals, Town Quay",
    metaDescription:
      "Trading-business commercial mortgage finance for leisure and hospitality property in Southampton, Ocean Village marina hospitality, West Quay tourism, Town Quay, cruise-passenger flow through ABP terminals (around 3 million passengers a year). EBITDA, occupancy and RevPAR underwriting. LTVs 60 to 70%, mid-2026 rates 7.0 to 9.0% pa.",
    hero: {
      eyebrow: "Leisure & hospitality",
      h1: "Leisure and Hospitality Commercial Mortgages Southampton",
      lede:
        "Trading-business and investment finance for hotels, aparthotels, restaurant-led leisure and F&B-anchored venues across Southampton. Around 3 million cruise passengers a year through ABP cruise terminals, Westquay retail tourism, Ocean Village marina hospitality and a strong student-driven F&B base underpin demand. Brand affiliation, operator track record and waterfront-versus-side-street location matter materially. LTVs 60 to 70%, rates 7.0 to 9.0% pa. <strong>Cynergy Bank</strong> is the most active named lender for Southampton independent hospitality.",
      metrics: [
        { label: "LTV", value: "60 to 70%" },
        { label: "Cover test", value: "EBITDA 1.5 to 2.0x" },
        { label: "Rate range", value: "7.0 to 9.0% pa" },
        { label: "Facility", value: "£500K to £15M" },
      ],
    },
    overview: {
      h2: "Underwriting a Southampton leisure or hospitality commercial mortgage",
      body: [
        "Leisure and hospitality is the most operator-led segment of the commercial mortgage market. Underwriting tests <strong>EBITDA cover</strong> at 1.5 to 2.0x, wider than mainstream owner-occupier, because the trading is more volatile and recovery on default depends more on goodwill and operator continuity than on bricks-and-mortar value alone. The headline metrics a lender reads first are <strong>occupancy</strong>, <strong>ADR (average daily rate)</strong> and <strong>RevPAR (revenue per available room)</strong> for hotels and aparthotels; for gyms and F&B venues it is membership retention or covers per session against operating margin.",
        "Southampton's hospitality story is shaped by three demand drivers. <strong>Cruise-passenger flow</strong> through ABP cruise terminals at around 3 million passengers a year (recovering toward pre-pandemic levels) supports city-centre and waterfront overnight stay either side of cruise boarding. <strong>Westquay retail tourism</strong> brings a strong day-trip and overnight-stay catchment from the central South Coast. <strong>Student-led demand</strong> from around 23,000 University of Southampton students plus around 11,000 Solent University students supports F&B and lower-end accommodation through term-time. Hotels split sharply by location and by brand affiliation. <strong>Ocean Village marina</strong> holds the prime waterfront hotel and aparthotel cluster anchored by the Harbour Hotel and the marina-led mixed-use environment. <strong>City-centre branded hotels</strong> (Premier Inn Cumberland Place, Holiday Inn West Quay, Hilton at Utilita Bowl) sit close to Westquay and the station. <strong>Branded franchise hotels</strong> price materially better than independents because the franchise system gives lenders comfort on demand stability and recovery options. Branded budget freehold prices at 7.5 to 8.5% pa at 65% LTV; independent boutique hotels in the same size band sit at 8.5 to 9.0% pa at 60 to 65% LTV. Aparthotels and serviced-apartment formats route through hotel-comfortable lenders, particularly active around Ocean Village and the central waterfront.",
        "Worked example: a 65-bed branded franchise budget hotel in the central CBD, £5.8M valuation, EBITDA £820K. <strong>Shawbrook</strong> placed at 65% LTV, 7.25% pa, 25-year term, EBITDA cover 1.85x. Worked example two: an independent 28-bed Ocean Village boutique hotel, £2.2M valuation, EBITDA £255K. Independent route is narrower, <strong>Cynergy Bank</strong> is the lead named lender, OakNorth and Allied Irish Bank UK also realistic. Placed at 60% LTV, 9.0% pa, 20-year term, EBITDA cover 1.7x.",
        "Bars and licensed F&B venues route through licensed-trade specialist desks, see also our <a href=\"/property-types/pub-restaurant\">pub and restaurant page</a>. Oxford Street, Bedford Place and Bevois Valley (student-led) carry the bulk of Southampton's mid-scale F&B operator activity. Gyms split between corporate chain (PureGym, The Gym Group, corporate-financed, not brokered) and independent / small-chain operators where commercial mortgage lenders test membership economics and equipment depreciation alongside EBITDA.",
      ],
    },
    schemeTypes: {
      h2: "Leisure and hospitality assets we fund",
      items: [
        { label: "Ocean Village marina hospitality", detail: "Harbour Hotel, marina-adjacent hotels and aparthotels in Ocean Village. Premium waterfront cluster anchored by the marina-led mixed-use environment." },
        { label: "City-centre branded hotel", detail: "Premier Inn, Holiday Inn Express, Hilton, Ibis, Travelodge across the central CBD, West Quay and Cumberland Place. Best-priced leisure asset class, franchise comfort drives lender appetite." },
        { label: "Independent boutique hotel", detail: "Independent stock around Ocean Village, central CBD and the waterfront. Specialist underwriting on EBITDA, occupancy and ADR; Cynergy Bank the most active named lender." },
        { label: "Aparthotel and serviced apartments", detail: "Ocean Village, central waterfront and cruise-adjacent serviced-apartment formats. Operator-letting model, investment if let on FRI to brand, trading if owner-operated." },
        { label: "Independent gym and fitness", detail: "Independent and small-chain gym freeholds. Membership economics, retention, equipment depreciation tested alongside EBITDA." },
        { label: "F&B-anchored leisure", detail: "Restaurants and food-led venues across Oxford Street, Bedford Place, Bevois Valley and Ocean Village." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Southampton leisure",
      intro:
        "Trading-business mortgage is the primary route for owner-operated leisure assets, on EBITDA cover. Investment mortgage applies where the asset is let on FRI to a brand or operator covenant. Bridge-to-let funds vacant hotel acquisition with refurbishment and repositioning before income stabilisation.",
      structures: [
        { product: "Trading-business mortgage", applicability: "Owner-operator hotels, gyms, aparthotels, leisure venues, EBITDA, occupancy and ADR underwritten." },
        { product: "Commercial investment mortgage", applicability: "Where the asset is let on FRI to a brand or operator covenant, Premier Inn franchise on a 25-year lease for instance." },
        { product: "Commercial bridge-to-let", applicability: "Vacant hotel acquisition with refurbishment or repositioning before income stabilisation; exit onto term trading-business mortgage." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing leisure freehold, typically funding an extension, refurbishment programme or onward acquisition." },
      ],
    },
    southamptonContext: {
      h2: "The Southampton leisure economy",
      body: 'Southampton\'s leisure economy is anchored by three flows: cruise-passenger movement through Associated British Ports cruise terminals (around 3 million passengers a year, recovering toward pre-pandemic levels), Westquay retail tourism drawing a strong day-trip and overnight-stay catchment from the wider central South Coast, and student-led demand from around 23,000 University of Southampton students plus around 11,000 Solent University students. The Ocean Village marina (SO14) carries the prime modern waterfront hotel and hospitality cluster, anchored by the Harbour Hotel and a marina-led mixed-use environment combining hotels, F&B and entertainment. The central CBD hotel cluster around West Quay, Cumberland Place and the station serves the cruise-and-business segment with branded franchise stock (Premier Inn, Holiday Inn, Hilton). Town Quay carries cruise-adjacent visitor accommodation. Oxford Street and Bedford Place run the central independent F&B spines. Bevois Valley (SO14/SO17) carries the densest student-led F&B cluster on the back of the Portswood-Highfield student corridor. The cruise-passenger turnover means the hospitality market is structurally less seasonal than typical regional UK markets, cruise boarding generates overnight-stay demand twelve months a year.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Southampton leisure",
      body: '<strong>Cynergy Bank</strong> is the most active named lender for Southampton independent hospitality, the bank holds a deep South Coast independent-hotel book and will look at deals other lenders decline. Branded franchise hotels well-served by <strong>Shawbrook</strong>, Cambridge & Counties, Hampshire Trust Bank and selectively Allica Bank, typical 7.5 to 8.5% pa at 65% LTV with EBITDA cover 1.7x+. Independent hotels narrower, Cynergy Bank, OakNorth, Allied Irish Bank UK and Metro Bank are the realistic desks; ASK Partners on the structured-debt end above £5M. Aparthotels hotel-comfortable lenders only; appetite has broadened materially since 2024 as the operating model has matured, and Southampton\'s cruise-driven year-round demand makes underwriting easier than in many regional markets. Bars and licensed venues route through Cynergy Bank and specialist licensed-trade desks. Independent gym and fitness narrower still, Cynergy Bank and Together for the trickier cases. High-street commercial desks (NatWest, Lloyds, Barclays) typically decline trading-business hotel and gym; they will look at branded-hotel investment let on FRI to a brand covenant.',
    },
    faqs: [
      {
        question: "Can I get a commercial mortgage on a Southampton independent hotel?",
        answer: "Yes, typically 60 to 65% LTV on independent hotels with two-plus years' trading and EBITDA cover at 1.7x or better. Specialist underwriting on EBITDA, occupancy and ADR. Cynergy Bank is the most active named lender for Southampton independents; OakNorth and Allied Irish Bank UK also realistic. Mid-2026 rates 8.5 to 9.0% pa for the 22 to 50 bed bracket; pricing tightens on larger independents with stronger track record. The cruise-passenger flow through ABP cruise terminals materially helps the underwriting story.",
      },
      {
        question: "What about pubs and bars specifically?",
        answer: 'See our dedicated <a href="/property-types/pub-restaurant">pub and restaurant commercial mortgage page</a>, these route through licensed-trade specialist desks (Cynergy Bank, ASK Partners) with barrelage, beer-tie status and freehold-versus-leasehold all material. Gastropubs with strong food revenue overlap with this leisure category but are scored differently.',
      },
      {
        question: "How is a Southampton hotel valued for lending?",
        answer: "Specialist RICS valuer using EBITDA-multiple methodology, typically 7 to 9x EBITDA for branded franchise, 5 to 7x for independent. Bricks-and-mortar value calculated separately and the lender takes the lower of the two figures. Brand affiliation typically adds 1.5 to 2x to the EBITDA multiple; AA Rosettes and Visit England rating influence the multiple at the margin. Ocean Village waterfront bricks-and-mortar values tend to be high enough that the going-concern valuation rarely undershoots.",
      },
      {
        question: "Aparthotel, investment mortgage or trading-business?",
        answer: "Depends on the operating structure. Where the asset is let on a long FRI lease to the operator brand (a national aparthotel operator takes a 25-year FRI on the building, runs the operations, pays rent), it is investment, ICR-led at 140 to 150%. Where the owner operates the aparthotel themselves under a soft franchise or marketing agreement, it is trading-business, EBITDA-led at 1.5 to 2.0x cover. Southampton has both formats active, particularly around Ocean Village marina and the central waterfront.",
      },
      {
        question: "Are gyms harder to fund than hotels?",
        answer: "On the independent end, yes. The lender pool is narrower, equipment depreciation is treated as a real cost rather than a non-cash add-back, and membership churn is scrutinised. Cynergy Bank and Together are the realistic desks; rates 8.5 to 9.0% pa at 60 to 65% LTV. Gyms with a 12-month-plus track record, strong retention, and a freehold premises fund cleanly; new openings or leasehold operations do not.",
      },
    ],
  },

  // Healthcare / care home
  "healthcare-care-home": {
    slug: "healthcare-care-home",
    name: "Healthcare & Care Home",
    metaTitle: "Care Home Commercial Mortgages Southampton | CQC, UHS Halo, Bassett, Highfield, Bitterne",
    metaDescription:
      "Specialist commercial mortgage finance for CQC-rated care homes, GP surgeries and dental practices in Southampton. University Hospital Southampton halo across Bassett, Highfield and Bitterne, plus Spire and Nuffield private hospital catchment. CQC-led underwriting, LTVs 60 to 70%.",
    hero: {
      eyebrow: "Healthcare",
      h1: "Care Home Mortgages Southampton",
      lede:
        "Trading-business mortgage finance for care homes, GP surgeries, dental practices and other healthcare property. CQC rating drives lender appetite on care; NHS contract security on dental and GP. University Hospital Southampton anchors one of the largest teaching-hospital catchments on the South Coast and supports a deep private-healthcare cluster across Bassett, Highfield and Bitterne, alongside Spire and Nuffield private hospitals. LTVs 60 to 70%, mid-2026 rates 7.5 to 9.0% pa. Specialist sector, wrong desk first time can lose six weeks.",
      metrics: [
        { label: "LTV", value: "60 to 70%" },
        { label: "Cover test", value: "EBITDA 1.5 to 2.0x" },
        { label: "Rate range", value: "7.5 to 9.0% pa" },
        { label: "Facility", value: "£500K to £8M" },
      ],
    },
    overview: {
      h2: "Underwriting a Southampton care home commercial mortgage",
      body: [
        "Healthcare in the Southampton commercial mortgage market splits cleanly. <strong>Care homes</strong>, operational properties with bed-by-bed economics, sit firmly in the trading-business mortgage world. CQC rating drives appetite; weighted-average bed value, occupancy, fee-rate mix (private versus local-authority funded) and staffing cost feed the underwrite. <strong>Medical and dental practices</strong> route either as owner-occupier (EBITDA cover 1.3 to 1.5x) or trading-business (sector-specialist underwrite at 1.5x), depending on size, structure and whether NHS contract value is being underwritten as quasi-collateral.",
        "Care home credit decisions hinge on the <strong>CQC rating</strong> first and everything else second. <strong>Good</strong> or <strong>Outstanding</strong> is the threshold for mainstream lender appetite at standard LTV and pricing. <strong>Requires Improvement</strong> can fund, but at tighter LTV (50 to 60%), wider pricing (8.75 to 9.0% pa) and a clear written remediation plan. <strong>Inadequate</strong> is unfundable on mainstream desks until the rating recovers; specialist private credit may engage, but rarely at sensible terms. Lenders also look at the bed mix, small homes (sub-30 beds) are harder to fund than 50 to 80 bed homes, because operating leverage matters; under 20 beds typically declines on high-street desks.",
        "Worked example: a 52-bed CQC-rated Good care home on the outer Bassett fringe, £3.6M valuation, EBITDA £470K, predominantly private-pay fee mix. <strong>Shawbrook</strong> placed at 65% LTV, 7.5% pa on a 5-year fix, 25-year term, EBITDA cover 1.85x. Worked example two: a Highfield dental practice freehold purchase by the existing principal partner, £1.4M, EBITDA £200K, mixed NHS / private revenue, less than a mile from University Hospital Southampton. Owner-occupier route at 75% LTV, 6.95% pa on a 20-year term, placed via a specialist health desk that will use NHS UDA contract value as additional security.",
        "Bassett, Highfield and Bitterne (SO16/SO17/SO18) are the dominant Southampton healthcare ancillary clusters, University Hospital Southampton on Tremona Road draws a deep cluster of dental practices, GP surgeries, private clinics and allied health operators across the surrounding streets, with the Spire Southampton (Chalybeate Close, Bassett) and Nuffield Health Wessex (Winchester Road, Chandler\'s Ford) anchoring a substantial private healthcare catchment. Outer Southampton suburbs and the wider Hampshire market towns carry village GP surgeries that fund routinely on owner-occupier or NHS-lease investment routes.",
      ],
    },
    schemeTypes: {
      h2: "Healthcare asset types we fund",
      items: [
        { label: "Care home (owner-operator)", detail: "Across Bassett, Highfield, Bitterne and outer Southampton suburbs. CQC Good or Outstanding for mainstream pricing." },
        { label: "Supported living and SEN housing", detail: "Specialist housing with care; institutional and SME operator. Local-authority contract security drives lender comfort." },
        { label: "GP surgery, owner-occupier and let", detail: "Owner-occupier purchase by a GP partnership; let GP surgery investment with NHS lease covenant." },
        { label: "Dental practice freehold", detail: "Owner-occupier dental, the University Hospital Southampton halo in Highfield and Bassett is the dominant location. NHS UDA contract value used as additional security on most placements." },
        { label: "Pharmacy", detail: "Independent pharmacy owner-occupier; let-to-pharmacy investment. Strong covenant, broad lender pool." },
        { label: "Health and wellness / private clinics", detail: "Physiotherapy, opticians, podiatry, private clinics drawing the UHS, Spire and Nuffield halo. Owner-occupier route on EBITDA cover." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Southampton healthcare",
      intro:
        "Care homes use trading-business mortgages on EBITDA / occupancy / CQC underwriting. Smaller medical and dental routes via owner-occupier on EBITDA cover. Investment routes via standard commercial investment mortgage where there is a covenant tenant, most commonly an NHS lease on a GP surgery.",
      structures: standardStructures,
    },
    southamptonContext: {
      h2: "The Southampton healthcare property estate",
      body: 'University Hospital Southampton NHS Foundation Trust runs one of the largest teaching-hospital sites on the South Coast on Tremona Road in Bassett (SO16), supporting a deep healthcare ancillary property cluster. The hospital draws dental practices, GP surgeries, private clinics and allied health operators across Bassett, Highfield (SO17) and the streets running into the wider Portswood corridor. Bitterne (SO18) on the east of the Itchen holds a second cluster of GP surgeries and dental practices serving the SO18/SO19 catchment. Spire Southampton Hospital (Chalybeate Close, Bassett) and Nuffield Health Wessex (Winchester Road, Chandler\'s Ford) anchor a substantial private healthcare catchment that supports private-clinic stock across the SO16 belt. Outer Southampton suburbs and the wider Hampshire market towns hold village GP surgeries that fund routinely on owner-occupier or NHS-lease investment routes. Care home stock is dispersed, with concentrations on the outer Bassett, Highfield and Bitterne fringes where larger plot sizes have supported purpose-built or converted care premises.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Southampton healthcare",
      body: 'Care homes, <strong>Shawbrook</strong>, Cambridge & Counties and Hampshire Trust Bank dominate at 7.5 to 9.0% pa at 60 to 70% LTV; CQC Good or better is essential. Dental, Hampshire Trust Bank, Allica Bank\'s health desk and Together cover the range; NHS UDA contract value treated as quasi-collateral by the specialist desks. The University Hospital Southampton-adjacent dental cluster in Highfield and Bassett has been a steady refinance volume zone through 2024 to 2026. GP surgery, <strong>NatWest</strong>, <strong>Lloyds</strong> and the challengers compete on owner-occupier purchase by a GP partnership at near-best owner-occupier pricing (6.5 to 7.5% pa) given the strength of the implied NHS revenue. Pharmacy, well-served across multiple lenders given the strong covenant and the consistent fee structure. Independent specialist clinics narrower; route through Allica Bank or <strong>Shawbrook</strong> on owner-occupier at 7.5 to 8.5% pa.',
    },
    faqs: [
      {
        question: "What CQC rating do care home commercial mortgage lenders need?",
        answer: "Generally <strong>Good</strong> or <strong>Outstanding</strong> for standard terms (60 to 70% LTV, 7.5 to 9.0% pa). <strong>Requires Improvement</strong> can fund at tighter LTV (50 to 60%), wider pricing (8.75 to 9.0% pa) and with a clear written remediation plan from the operator. <strong>Inadequate</strong> is unfundable on mainstream desks until the rating recovers, typically a 12-month process under the CQC inspection cycle.",
      },
      {
        question: "How are Southampton care homes valued for lending?",
        answer: "Specialist RICS valuer using an EBITDA-multiple methodology, typically 6 to 8x trailing EBITDA, with weighted-average bed value calibration as a sense-check. Bricks-and-mortar value (Existing Use Value, EUV) calculated separately. The lender takes the lower of the going-concern value and the EUV. CQC Outstanding adds 0.5 to 1.0x to the EBITDA multiple; private-pay fee mix above 70% lifts it further.",
      },
      {
        question: "Can I get a dental practice commercial mortgage in Highfield or Bassett?",
        answer: "Yes, this is one of the most active sub-niches in Southampton healthcare property. Owner-occupier route on EBITDA cover (1.3 to 1.5x). NHS UDA contract value treated as additional security by the specialist desks. Hampshire Trust Bank and Allica Bank's health desk are the most active. LTVs 70 to 75%; mid-2026 rates 6.5 to 8.0% pa for established principal-led practices. The University Hospital Southampton-adjacent cluster in Highfield and Bassett supports unusually strong patient throughput and consistent revenue stability, which feeds the lender comfort.",
      },
      {
        question: "What about a GP surgery let to an NHS partnership, investment route?",
        answer: "Yes, NHS lease covenant on a GP surgery let to a partnership prices very keenly. Typically 6.0 to 7.5% pa at 65 to 70% LTV. The implied NHS covenant strength gets the deal close to gilt-equivalent treatment by some desks. Owner-occupier purchase by the partnership uses the standard EBITDA-cover route.",
      },
      {
        question: "Small care homes, what is the floor?",
        answer: "Mainstream lender appetite drops sharply below 30 beds and effectively stops below 20. Operating leverage matters in care, staffing cost is largely fixed, so EBITDA per bed compresses materially on small homes. Specialist owner-operator routes can fund 25 to 30 bed homes at tighter LTV. Below that, private credit or direct vendor finance are the realistic routes.",
      },
    ],
  },

  // Pub & restaurant
  "pub-restaurant": {
    slug: "pub-restaurant",
    name: "Pub & Restaurant",
    metaTitle: "Pub Mortgages Southampton | Oxford Street, Bedford Place, Bevois Valley, Ocean Village",
    metaDescription:
      "Trading-business mortgage finance for pubs, gastropubs, bars and restaurants in Southampton. Oxford Street, Bedford Place, Bevois Valley student-led F&B, Ocean Village. Barrelage and EBITDA underwriting. LTVs 60 to 65%, mid-2026 rates 6.5 to 8.5% pa.",
    hero: {
      eyebrow: "Pub & restaurant",
      h1: "Pub and Restaurant Mortgages Southampton",
      lede:
        "Specialist licensed-trade commercial mortgages for freehold pubs, gastropubs, wet-led pubs and restaurants. Underwriting uses barrelage, full-trading EBITDA, license type, beer-tie status and freehold-versus-leasehold structure. Southampton's combination of cruise-passenger flow, student demand from 34,000 combined students and a high-density independent operator base makes it one of the more active licensed-trade markets on the South Coast. Different lenders dominate different sub-niches, getting the right desk first time matters more here than almost any other commercial sub-sector.",
      metrics: [
        { label: "LTV", value: "60 to 65%" },
        { label: "Cover test", value: "EBITDA 1.5 to 2.0x" },
        { label: "Rate range", value: "6.5 to 8.5% pa" },
        { label: "Facility", value: "£300K to £3M" },
      ],
    },
    overview: {
      h2: "Underwriting a Southampton pub commercial mortgage",
      body: [
        "Pubs and restaurants are the most specialised sub-segment of trading-business commercial mortgages, and the one where lender choice matters most. The credit decision turns on five variables: <strong>barrelage</strong> (annual beer volume, the proxy for wet-led trade), <strong>full-trading EBITDA</strong>, <strong>license type</strong> (premises, on-sales, off-sales, late-night, sui generis nightclub), <strong>beer-tie status</strong> (free-of-tie versus tied to a brewery or pub-co), and <strong>freehold-versus-leasehold structure</strong>. Different lenders dominate different sub-niches.",
        "<strong>Free-of-tie freehold pubs</strong> sit at the keenest pricing, the operator owns the asset outright and controls the supply contracts, giving the lender comfort on margin and recovery options. Typical 60 to 65% LTV at 8.0 to 8.5% pa. <strong>Tied pubs</strong> price 50 to 100bps wider because tied beer prices compress operator margin. <strong>Tenanted leasehold pubs</strong> are narrowest, only one or two specialist desks engage, and pricing reflects the limited recovery options. <strong>Gastropubs</strong> with strong food revenue (45%+ of turnover from food) sit closer to mainstream restaurant pricing, the food margin smooths what would otherwise be wet-led volatility.",
        "Worked example: a free-of-tie freehold gastropub on Oxford Street, £1.05M valuation, full-trading EBITDA £185K (60% food / 40% wet), 305 barrels per annum. <strong>Cynergy Bank</strong> placed at 65% LTV, 8.5% pa on a 5-year fix, 20-year term. EBITDA cover 1.78x. Worked example two: a wet-led tied freehold on Bevois Valley, £695K valuation, EBITDA £98K, 460 barrels per annum. Tighter case, placed via ASK Partners at 60% LTV, 9.0% pa, 15-year term.",
        "Oxford Street and Bedford Place carry the central independent F&B cluster, drawing both on cruise-and-business overnight traffic and the wider city resident base. Bevois Valley (SO14/SO17) runs the student-led F&B spine on the back of the Portswood-Highfield student catchment, around 23,000 University of Southampton students plus 11,000 Solent University students underpin sustained operator demand. Ocean Village marina holds a leisure-led waterfront F&B cluster anchored by the marina mixed-use environment. Southampton trades a healthy volume of change-of-use cases each year, retail-to-takeaway, retail-to-restaurant, restaurant-to-bar, these become commercial mortgage refinance candidates the moment the new lease completes and a six-month trading record is in place.",
      ],
    },
    schemeTypes: {
      h2: "Pub and restaurant assets we fund",
      items: [
        { label: "Free-of-tie freehold pub", detail: "Best-priced licensed-trade asset class. Owner-operator EBITDA-led, full margin control on supply contracts." },
        { label: "Tied freehold pub", detail: "Tied to brewery or pub-co supply contract; tighter operator margin, 50 to 100bps pricing penalty versus free-of-tie." },
        { label: "Tenanted leasehold pub", detail: "Operating leasehold from pub-co landlord; narrowest lender pool, specialist desks only." },
        { label: "Gastropub / restaurant-led pub", detail: "Food revenue 45%+ of turnover. EBITDA from food-led operations rather than pure wet-led barrelage." },
        { label: "Independent restaurant", detail: "Operator-led restaurant business and freehold. Trading-business underwrite on covers per session, margin and EBITDA. Oxford Street, Bedford Place, Bevois Valley and Ocean Village clusters." },
        { label: "Pub with operator flat above", detail: "Semi-commercial overlap; some lenders treat as semi-commercial commercial mortgage at better LTV." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Southampton pubs and restaurants",
      intro:
        "Predominantly trading-business mortgage on owner-operator EBITDA. Investment route applies where the pub is let on FRI to a chain operator with covenant strength. Bridge-to-let funds vacant pub acquisition or change-of-use scenarios with a clear stabilisation plan.",
      structures: [
        { product: "Trading-business mortgage", applicability: "Owner-operator pubs, gastropubs and restaurants, EBITDA, barrelage and license type underwritten." },
        { product: "Commercial investment mortgage", applicability: "Pub or restaurant let on FRI to a chain operator (Greene King, Mitchells & Butlers, Stonegate, JD Wetherspoon)." },
        { product: "Commercial bridge-to-let", applicability: "Vacant pub acquisition, change-of-use deals or refurbishment before stabilisation; exit onto term trading-business mortgage." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing pub freehold; commonly funds extension, kitchen refurbishment or onward acquisition." },
      ],
    },
    southamptonContext: {
      h2: "The Southampton licensed-trade economy",
      body: 'Southampton carries an active licensed-trade economy combining cruise-passenger overnight trade (around 3 million ABP cruise passengers a year, recovering toward pre-pandemic levels), student trade from around 23,000 University of Southampton students plus 11,000 Solent University students, conference-and-business traffic anchored by the central CBD hotel cluster, and a year-round resident base. Oxford Street runs the central independent F&B spine alongside the Bargate Quarter and Above Bar overlap. Bedford Place (SO15) holds the densest central independent operator cluster, particularly strong on independent gastropubs and small-format restaurants. Bevois Valley (SO14/SO17) is the student-led F&B core on the back of the Portswood-Highfield catchment, with sustained demand from term-time student footfall. Ocean Village marina (SO14) holds a separate hospitality-led F&B cluster anchored by the marina mixed-use environment. The volume of change-of-use F&B activity is healthy, retail-to-takeaway, retail-to-restaurant, restaurant-to-bar (the 26/00161/FUL Bedford Place change to Class E café being a recent example), these become commercial mortgage refinance candidates the moment the new lease completes and a six-month trading record is in place.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Southampton pubs and restaurants",
      body: '<strong>Cynergy Bank</strong> is the most active named lender for Southampton licensed-trade, strong appetite on free-of-tie freehold pubs and gastropubs at 8.0 to 8.5% pa, 60 to 65% LTV. ASK Partners and Allica Bank\'s licensed-trade desk compete strongly on the same profile. Together covers more challenged cases (tied pubs, shorter trading history, secondary location) at wider pricing. <strong>Shawbrook</strong> takes selective licensed-trade where the operator track record is strong and food revenue dominates. Hampshire Trust Bank active on multi-site restaurant operator portfolios. Allied Irish Bank UK and Metro Bank engage selectively on hospitality-led freehold pubs. High-street commercial desks (NatWest, Lloyds, Barclays) do not engage with owner-operator pubs at all; they will look at investment-let pub assets where a chain operator has a long FRI lease in place.',
    },
    faqs: [
      {
        question: "Can I get a freehold pub commercial mortgage in Southampton?",
        answer: "Yes, free-of-tie freehold pubs are the best-priced licensed-trade asset class. Typical 60 to 65% LTV, mid-2026 rate 8.0 to 8.5% pa, term 15 to 20 years. Cynergy Bank and ASK Partners are the most active desks; both will look at established operator track records and gastropub-led food trade as positives. Southampton's cruise, student and business-traffic demand strengthens the underwriting story versus comparable regional markets.",
      },
      {
        question: "What barrelage do lenders need?",
        answer: "Sufficient to support the EBITDA cover, there is no fixed barrelage threshold. What matters is profitable trading. A 200-barrel pub with strong food revenue and an EBITDA margin above 22% can fund where a 400-barrel wet-led pub with thin margin (12 to 15%) cannot. Lenders read margin and EBITDA cover, not barrelage as a standalone metric, but barrelage is the headline number in the underwriting pack.",
      },
      {
        question: "What about a pub I have traded for less than two years?",
        answer: "Specialist desks consider 12-month trading where the operator has prior pub experience and the deal otherwise makes sense. Typically tighter LTV (55 to 60%) and 50 to 75bps wider pricing. New operators with no licensed-trade background struggle materially, underwriters treat the operator risk as the dominant variable. Six months' trading is the practical floor and only viable where the operator has come from a multi-site pub group.",
      },
      {
        question: "Restaurants without alcohol, different underwrite?",
        answer: "Yes. Coffee shops, dessert lounges, dry restaurants and cafes route through restaurant-comfortable trading-business desks with no barrelage or license-type complications. Often closer to mainstream owner-occupier pricing, 8.0 to 8.5% pa at 65% LTV. Allica Bank and Shawbrook engage; Cynergy Bank also looks at the larger end. The dry-restaurant pool is broader than the licensed-trade pool.",
      },
      {
        question: "Tied pub or free-of-tie, does it matter for the mortgage?",
        answer: "Materially. Free-of-tie pricing is 50 to 100bps inside tied. Tied freeholds are still fundable but the pool narrows, Cynergy Bank, Together and ASK Partners will engage; high-street and most challenger banks decline because the tie compresses operator margin. If you are buying a tied freehold, factor in the cost of buying out of the tie versus accepting the wider mortgage pricing, sometimes the buy-out maths works.",
      },
    ],
  },

  // MOT / garage / petrol
  "mot-garage-petrol": {
    slug: "mot-garage-petrol",
    name: "MOT, Garage & Petrol Forecourt",
    metaTitle: "MOT Garage Mortgages Southampton | Woolston, Sholing Fringe, Hedge End Industrial",
    metaDescription:
      "Specialist commercial mortgage finance for MOT centres, vehicle workshops, body shops and petrol forecourts in Southampton. Woolston and Sholing fringe stock, Hedge End industrial workshop premises. VOSA approval, environmental due diligence, sector-specialist lender pool. LTVs 60 to 70%, mid-2026 rates 7.0 to 8.5% pa.",
    hero: {
      eyebrow: "MOT, garage & petrol",
      h1: "MOT and Petrol Forecourt Mortgages Southampton",
      lede:
        "Specialist trading-business finance for MOT centres, vehicle workshops, body shops and petrol forecourts. Southampton garage and forecourt stock concentrates on the Woolston and Sholing fringe (SO19) along the eastern Itchen edge, plus the Hedge End industrial premises (SO30) at the borough boundary. VOSA approval, environmental due diligence, EBITDA cover and sector-specialist valuation all material. Wrong desk first time can lose six weeks. LTVs 60 to 70%, mid-2026 rates 7.0 to 8.5% pa.",
      metrics: [
        { label: "LTV", value: "60 to 70%" },
        { label: "Cover test", value: "EBITDA 1.5 to 2.0x" },
        { label: "Rate range", value: "7.0 to 8.5% pa" },
        { label: "Facility", value: "£250K to £2M" },
      ],
    },
    overview: {
      h2: "Underwriting an MOT or petrol forecourt commercial mortgage",
      body: [
        "MOT centres, vehicle workshops, body shops and petrol forecourts sit in a specialist trading-business niche where four variables drive credit committee. <strong>VOSA approval</strong> for MOT testing premises (the formal authority to operate, transferred or reissued on change of ownership). <strong>Full-trading EBITDA</strong> underwritten at 1.5 to 2.0x cover. <strong>Environmental status</strong> of the site, legacy contamination from fuel storage, waste oil or solvents on body shops. <strong>Sector-accredited RICS valuer</strong> view on bricks-and-mortar versus going-concern value, often diverging materially.",
        "Together dominates the Southampton garage and MOT mortgage market. They have meaningful flexibility on environmental risk that high-street and most challenger desks will not take, plus a deep South Coast automotive book built up over twenty years. <strong>Cynergy Bank</strong> covers cleaner cases where there is no environmental flag. <strong>Shawbrook</strong> takes selective workshop premises with no fuel storage history. Allica Bank's specialist desk engages on mid-market MOT and trade-counter overlap.",
        "Petrol forecourts are narrower still. <strong>Phase II contamination assessment</strong> (intrusive ground investigation, soil sampling, groundwater monitoring) is the critical-path item, typically £8 to £15K of cost and 4 to 6 weeks of timeline. Tank integrity report from a VPS or equivalent specialist sits alongside. Most mainstream commercial desks decline forecourts outright; Together and a small number of structured-lending desks engage. Typical LTV 55 to 65% reflecting the contamination-recovery risk.",
        "Worked example: a Woolston MOT and workshop premises (SO19), £685K freehold purchase, full-trading EBITDA £115K, clean Phase I report. Together placed at 65% LTV, 8.85% pa on a 5-year fix, 18-year term, EBITDA cover 1.65x. Worked example two: an independent petrol forecourt on the Hedge End industrial fringe adjacent to the M27, £1.45M, EBITDA £195K. Phase II clean. Placed via Together at 60% LTV, 9.0% pa, 15-year term. Southampton MOT and garage stock concentrates on the Woolston-Sholing fringe along the eastern Itchen edge, plus the Hedge End industrial premises at the borough boundary; smaller workshop pockets across SO15 and SO19 round out the supply.",
      ],
    },
    schemeTypes: {
      h2: "MOT, garage and petrol assets we fund",
      items: [
        { label: "MOT testing centre", detail: "VOSA-approved testing premises, owner-occupier most common. Existing VOSA approval taken as evidence of operational continuity." },
        { label: "Vehicle workshop and mechanic", detail: "General automotive workshops and servicing premises. Cleaner environmental profile than body shops or forecourts. Woolston, Sholing and Hedge End fringe locations." },
        { label: "Body shop and panel beating", detail: "Crash repair and panel beating premises. Solvent and paint storage history makes Phase I assessment standard, Phase II often required." },
        { label: "Petrol forecourt", detail: "Independent petrol stations. Phase II contamination assessment, tank integrity report and 4 to 6 week environmental timeline standard. Hedge End fringe and outer M27 corridor locations." },
        { label: "Tyre and exhaust centre", detail: "Quick-fit format independent operators. Cleaner environmental profile; closer to mainstream owner-occupier pricing." },
        { label: "Used-car sales lot", detail: "Vehicle sales premises, specialist underwriting on stock turnover, sales mix and EBITDA. MOT plus used-car combined sites common." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Southampton MOT, garage and petrol",
      intro:
        "Predominantly trading-business mortgage on owner-operator EBITDA. Specialist underwriting steps add 2 to 4 weeks versus mainstream commercial; environmental due diligence is the critical-path item on petrol and most body shops.",
      structures: [
        { product: "Trading-business mortgage", applicability: "Owner-operator MOT, garage, body shop, used-car lot, EBITDA, VOSA and environmental status underwritten." },
        { product: "Owner-occupier commercial mortgage", applicability: "Where the trading covenant is exceptionally strong and bricks-and-mortar value supports the LTV, workshop premises with no environmental flag and a 5-year-plus track record." },
        { product: "Commercial bridge-to-let", applicability: "Acquisition where environmental remediation is needed before stable trading; exit onto term once Phase II clearance issued." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing MOT or forecourt freehold." },
      ],
    },
    southamptonContext: {
      h2: "The Southampton garage and forecourt market",
      body: 'Southampton garage and forecourt stock concentrates on the Woolston and Sholing fringe (SO19) along the eastern Itchen edge, with workshop pockets distributed through Sholing, Bitterne and the outer SO19 corridor. The Hedge End industrial premises at the borough boundary (SO30) carry the larger-format workshop and forecourt stock serving the M27 East corridor. Smaller workshop and MOT stock is scattered across SO15 and Shirley. The volume of independent operators buying their site freehold sits typically in the £300K to £1.5M bracket. Larger forecourt and trade-counter automotive activity routes through the South Coast network beyond Southampton city boundaries, the M27 East corridor and the Eastleigh-Romsey belt carry significant volumes. The Solent corridor labour-shed dynamic that benefits Southampton industrial extends to automotive premises, lenders read the corridor not just the city when pricing forecourt and workshop deals.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Southampton MOT, garage and forecourt",
      body: 'Together dominates the Southampton garage and MOT mortgage market, they accept environmental risk that most lenders will not, hold a deep South Coast automotive book and have specialist underwriters who know the sector well. Pricing 8.5 to 9.0% pa at 60 to 70% LTV. <strong>Cynergy Bank</strong> takes selective cases on cleaner sites without environmental history. <strong>Shawbrook</strong> covers workshop premises without fuel storage risk at 7.5 to 8.5% pa. Allica Bank\'s specialist desk engages on the mid-market end. Petrol forecourt, Together plus a small number of structured-lending desks; LTV typically 55 to 65% reflecting contamination risk and longer environmental timeline. High-street commercial desks (NatWest, Lloyds, Barclays) decline the sector as a class.',
    },
    faqs: [
      {
        question: "Do I need VOSA approval to fund an MOT centre?",
        answer: "Existing VOSA approval helps materially, lenders take it as evidence of operational continuity and reduce key-person risk. New VOSA applications can fund at tighter terms if the operator has a strong personal track record (typically 5+ years as a tester or workshop manager). Centres with VOSA suspended or revoked typically cannot fund until the approval is reinstated.",
      },
      {
        question: "What environmental due diligence is needed for a petrol forecourt?",
        answer: "Phase I contamination assessment as standard (desktop review of historical use). Phase II (intrusive ground investigation including soil sampling and groundwater monitoring) typically required for fuel stations. Tank integrity report from a VPS or equivalent specialist. Total cost £8 to £15K, total timeline 4 to 6 weeks. The Phase II report drives the lender's view on residual environmental liability, a clean report unlocks the keenest available pricing.",
      },
      {
        question: "Can a body shop fund without environmental issues flagged?",
        answer: "Most body shops have legacy solvent and paint storage on site. A clean Phase I will be required; if anything flags, Phase II steps in. Together has the strongest body-shop appetite of any UK lender, they will engage on cases with limited contamination provided remediation is feasible. Body shops with active environmental enforcement notices effectively cannot fund until the notice is discharged.",
      },
      {
        question: "What term length on an MOT garage commercial mortgage?",
        answer: "Typically 15 to 20 years. Shorter than mainstream owner-occupier (20 to 25 years) reflecting the specialist asset and the operational risk inherent in single-key-person automotive businesses. Lenders rarely write 25-year terms in the sector because business succession is harder than in mainstream owner-occupier sectors.",
      },
      {
        question: "Used-car sales lot, pure trading or part-property deal?",
        answer: "Treated as part-property, part-trading. The bricks-and-mortar value of the site (forecourt, office, workshop) underwrites the security. The trading EBITDA underwrites the cover test. Combined MOT-plus-used-car sites are common on the Woolston-Sholing fringe and often fund cleaner than pure used-car because the MOT revenue smooths the volatility of vehicle sales.",
      },
    ],
  },

  // Nursery / school
  "nursery-school": {
    slug: "nursery-school",
    name: "Nursery & School",
    metaTitle: "Nursery Commercial Mortgages Southampton | Bassett, Lordswood, Bitterne, Hedge End",
    metaDescription:
      "Specialist commercial mortgage finance for day nurseries, pre-schools and independent schools in Southampton. Bassett, Lordswood, Bitterne and Hedge End suburban catchments. Ofsted-led underwriting, registered capacity and occupancy economics. LTVs 60 to 70%, mid-2026 rates 7.5 to 9.0% pa.",
    hero: {
      eyebrow: "Nursery & school",
      h1: "Day Nursery and School Mortgages Southampton",
      lede:
        "Trading-business commercial mortgages for day nurseries, pre-schools and small independent schools across Southampton. Ofsted rating drives lender appetite; registered capacity, occupancy and fee mix feed the underwrite. Active across Bassett, Lordswood, Bitterne and Hedge End where the dual-income professional catchments support fee-paying day-care demand. LTVs 60 to 70%, mid-2026 rates 7.5 to 9.0% pa.",
      metrics: [
        { label: "LTV", value: "60 to 70%" },
        { label: "Cover test", value: "EBITDA 1.5 to 2.0x" },
        { label: "Rate range", value: "7.5 to 9.0% pa" },
        { label: "Facility", value: "£500K to £5M" },
      ],
    },
    overview: {
      h2: "Underwriting a Southampton nursery commercial mortgage",
      body: [
        "Day nurseries are a stable, well-regulated trading-business asset class, and one where lender comfort has grown materially since the early-2020s sector consolidation. Underwriting tests four variables. <strong>Ofsted rating</strong> (Outstanding, Good, Requires Improvement, Inadequate) drives appetite at the threshold; most lenders need Good or Outstanding for standard terms. <strong>Registered capacity</strong> against current occupancy gives lenders comfort on revenue stability. <strong>Fee mix</strong>, private fees versus Free Early Years Education (FEEE) funded places, determines margin profile. <strong>Operator track record</strong> in the sector matters more here than in many other trading classes because nursery turnaround is slow.",
        "<strong>Outstanding</strong> nurseries fund at the keenest end, 65 to 70% LTV, 7.0 to 7.75% pa. <strong>Good</strong> sits at standard pricing, 60 to 70% LTV, 7.75 to 8.75% pa. <strong>Requires Improvement</strong> can still fund but at 50 to 60% LTV, 8.75 to 9.0% pa, with a credible Ofsted remediation plan and typically a 12-month trading history showing improvement trajectory. <strong>Inadequate</strong> is generally unfundable on mainstream desks until the rating recovers, typically a six-to-twelve-month process under the Ofsted re-inspection cycle.",
        "Active Southampton nursery clusters: <strong>Bassett (SO16)</strong> the affluent northern suburb where dual-income professional catchment supports fee-paying day-care demand, with concentrations across the streets between Winchester Road and the Burgess Road corridor. <strong>Lordswood (SO16)</strong> serving the inner-Bassett and Coxford residential catchment. <strong>Bitterne (SO18)</strong> the east-of-Itchen district centre catchment serving SO18/SO19 families. <strong>Hedge End (SO30)</strong> suburban nursery stock at the borough boundary serving the M27 East and Eastleigh corridor families. Multi-site operators consolidating their portfolio into a single facility route through portfolio refinance with a sector-specialist lender on the desk. Worked example: a 58-place Bassett day nursery, Ofsted Good, £1.85M valuation, 92% occupancy, EBITDA £218K. <strong>Shawbrook</strong> placed at 65% LTV, 7.85% pa on a 5-year fix, 25-year term. Worked example two: a Bitterne and Hedge End two-site nursery group, £2.3M aggregate valuation, EBITDA £298K aggregate. Routed via portfolio refinance with Cambridge & Counties at 60% LTV, 8.55% pa.",
        "Independent schools are a smaller, more specialist niche in Southampton, served by King Edward VI School (Hill Lane, Bassett), St Anne's Catholic School and a small number of preparatory schools across the city. Lender pool narrower; underwriting includes <strong>pupil roll trend</strong>, <strong>fee structure</strong> (annual fees, charitable status implications) and <strong>ISI inspection grade</strong>. Pricing wider than nursery, typically 6.5 to 8.5% pa. Cambridge & Counties, Reliance Bank and Hampshire Trust are the realistic desks for £1M to £5M independent school freehold deals.",
      ],
    },
    schemeTypes: {
      h2: "Nursery and school assets we fund",
      items: [
        { label: "Single-site day nursery", detail: "Owner-operator nursery freehold purchase or refinance. Most common deal type, Bassett, Lordswood, Bitterne and Hedge End catchments." },
        { label: "Multi-site nursery group", detail: "2 to 10 sites consolidated into a single portfolio facility. Aggregated EBITDA cover, blanket-charge structure common." },
        { label: "Pre-school and playgroup", detail: "Smaller-cap registered pre-school premises; often community-anchored, charitable structures common." },
        { label: "Independent primary or prep school", detail: "Specialist underwriting; pupil roll trend and ISI inspection grade material. Cambridge & Counties, Reliance Bank, Hampshire Trust most active." },
        { label: "Special educational needs (SEN) provision", detail: "Specialist SEN settings; lender pool narrower but appetite present where local-authority contracts underpin revenue." },
        { label: "Forest school and outdoor nursery", detail: "Niche subset; specialist desks engage where the operator has a Good Ofsted and 18+ months trading." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Southampton nursery and school",
      intro:
        "Trading-business mortgage is the primary route. Multi-site groups route through portfolio refinance with a sector-specialist desk. Larger independent schools may route through structured commercial debt where the facility size justifies it.",
      structures: [
        { product: "Trading-business mortgage", applicability: "Single-site owner-operator nursery or school, EBITDA, Ofsted and capacity underwritten." },
        { product: "Portfolio refinance", applicability: "Multi-site nursery groups, aggregated facility across 2+ sites with blanket-charge structure." },
        { product: "Owner-occupier commercial mortgage", applicability: "Where the trading is mature and the lender treats the case as standard owner-occupier on EBITDA cover, Ofsted Good or better, 3+ years trading." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise for refurbishment, capacity expansion or onward acquisition." },
      ],
    },
    southamptonContext: {
      h2: "The Southampton nursery and school market",
      body: 'Southampton carries a dual-income professional catchment built on the University of Southampton, Solent University, Carnival UK at Ocean Village, Lloyd\'s Register, Ordnance Survey at Adanac Park, University Hospital Southampton, ABP and Aviva back-office. This drives sustained demand for fee-paying day-care across Bassett (SO16) where the affluent northern suburb concentrates the highest-fee catchment, Lordswood (SO16) serving the inner-Bassett and Coxford families, Bitterne (SO18) anchoring the east-of-Itchen catchment, and Hedge End (SO30) suburban nursery stock at the borough boundary serving the M27 East and Eastleigh corridor families. Independent schools cluster around King Edward VI School (Hill Lane, Bassett), with St Anne\'s Catholic School and a small preparatory school footprint distributed across the city. Outer Southampton and the wider Hampshire market towns hold pre-school and playgroup premises that fund routinely through trading-business mortgage.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Southampton nursery and school",
      body: 'Aldermore, <strong>Shawbrook</strong>, Cambridge & Counties and Allica Bank all have meaningful nursery appetite. Mid-2026 pricing 7.5 to 8.75% pa at 60 to 70% LTV. Hampshire Trust Bank covers larger multi-site groups (5+ sites, £3M+ aggregate facility). SEN provision narrower, Shawbrook and specialist desks. Independent school pool narrower still, typically Cambridge & Counties, Reliance Bank and Hampshire Trust at 6.5 to 8.5% pa. High-street commercial desks (NatWest, Lloyds, Barclays) rarely engage with single-site owner-operator nursery; they will look at let nursery investment where a multi-site operator takes a long FRI lease on the building.',
    },
    faqs: [
      {
        question: "What Ofsted rating do nursery commercial mortgage lenders need?",
        answer: "<strong>Good</strong> or <strong>Outstanding</strong> for standard terms (60 to 70% LTV, 7.5 to 8.75% pa). <strong>Requires Improvement</strong> can fund at 50 to 60% LTV and 8.75 to 9.0% pa with a clear written remediation plan and typically a 12-month trading history showing improvement. <strong>Inadequate</strong> is generally unfundable on mainstream desks until the rating recovers, usually six to twelve months under the Ofsted re-inspection cycle.",
      },
      {
        question: "Can I fund a multi-site nursery group?",
        answer: 'Yes, typically through <a href="/services/portfolio-refinance">portfolio refinance</a>. Aggregated ICR and EBITDA cover across the sites; blanket-charge or aggregated facility structure. Specialist desks like Cambridge & Counties, Aldermore and Hampshire Trust are most active. We have placed 2-site, 4-site and 7-site nursery group facilities through this route across the South Coast.',
      },
      {
        question: "What occupancy do nursery lenders need?",
        answer: "Mature nurseries trade at 80%+ occupancy on registered capacity; lenders look for sustained occupancy at this level over the last 12 to 24 months. Underutilised nurseries (sub-65% occupancy) need a credible plan, capacity reduction, fee rebalancing or operator change, to fund. New nurseries with no trading record route through bridge-to-let plus term-out, with the term-out conditional on hitting agreed occupancy milestones.",
      },
      {
        question: "Independent school, different lender pool to nursery?",
        answer: "Yes, narrower and more specialist. Pupil roll trend over 3 to 5 years, ISI inspection grade, fee structure and charitable status are all material. Cambridge & Counties, Reliance Bank and Hampshire Trust are the most active desks. Mid-2026 pricing 6.5 to 8.5% pa at 60 to 65% LTV. Larger independents (£5M+ facility) may route through structured commercial debt outside the broker panel.",
      },
      {
        question: "How is FEEE funding treated by lenders?",
        answer: "Free Early Years Education (FEEE / 30-hours funded) is treated as government-backed revenue, strong covenant equivalent, but at a margin profile materially below private fees. Lenders read the fee mix carefully. Nurseries with 60%+ private fees price at the keener end; FEEE-dominant nurseries (75%+ funded) sit wider because the margin is structurally compressed and capacity to absorb cost increases is tighter. Bassett nurseries typically run with stronger private-fee weighting than the city average.",
      },
    ],
  },

  // Mixed-use
  "mixed-use": {
    slug: "mixed-use",
    name: "Mixed-Use",
    metaTitle: "Mixed-Use Commercial Mortgages Southampton | Mayflower Quarter, Royal Pier, Bargate Quarter, Above Bar",
    metaDescription:
      "Mixed-use commercial mortgage finance in Southampton, predominantly-commercial blocks with residential element. Mayflower Quarter, Royal Pier Waterfront, Bargate Quarter, Above Bar PD conversions. LTVs to 75%, mid-2026 rates 6.5 to 8.5% pa.",
    hero: {
      eyebrow: "Mixed-use",
      h1: "Mixed-Use Commercial Mortgages Southampton",
      lede:
        "Single-facility commercial mortgages for predominantly-commercial mixed-use property, retail with residential, office with residential, leisure with operator residential. Lender appetite varies dramatically with the residential proportion; we know which lender writes which split. Active across Mayflower Quarter regeneration, Royal Pier Waterfront, Bargate Quarter and the Above Bar Class E to residential PD conversion pipeline. LTVs to 75%, mid-2026 rates 6.5 to 8.5% pa.",
      metrics: [
        { label: "LTV", value: "65 to 75%" },
        { label: "Cover test", value: "Blended ICR 140 to 155%" },
        { label: "Rate range", value: "6.5 to 8.5% pa" },
        { label: "Facility", value: "£250K to £10M" },
      ],
    },
    overview: {
      h2: "Underwriting a Southampton mixed-use commercial mortgage",
      body: [
        "Mixed-use covers any single asset combining commercial and residential tenure, from the classic shop-with-flat archetype (covered separately on our <a href=\"/property-types/semi-commercial\">semi-commercial commercial mortgage page</a>) up to large mixed-use development blocks with ground-floor retail and 20+ apartments above. Lender appetite varies dramatically with the <strong>residential proportion by floorspace and by income</strong>. <strong>Predominantly-commercial</strong> (under 40% residential by floorspace) is treated as commercial investment with a residential overlay, ICR-tested, mainstream commercial desks engage. <strong>Predominantly-residential</strong> (60%+ residential) prices closer to specialist BTL or semi-commercial pricing.",
        "The classic shop-plus-flat archetype is well-served and routes through the dedicated semi-commercial product where the residential element is 40%+. Larger mixed-use blocks (10+ apartments plus ground-floor commercial), common in Southampton at the Mayflower Quarter regeneration, Bargate Quarter and the Above Bar PD conversion pipeline, require a different lender pool, <strong>Shawbrook</strong>, Cambridge & Counties and OakNorth on the larger end, with mainstream high-street active where the building is well-tenanted across both elements. Heritage and listed mixed-use, particularly the Old Town Bargate stock and the Town Quay listed buildings, routes through heritage-comfortable lenders only.",
        "Worked example: an Above Bar mixed-use block, ground-floor retail let to a national coffee chain on a 10-year FRI, six apartments above let on ASTs at market rents, £2.4M valuation. Predominantly-commercial mix (55% commercial by floorspace, 65% commercial by income). <strong>NatWest</strong> placed at 70% LTV, 6.95% pa on a 5-year fix, 25-year term, blended ICR 145%. Worked example two: a Bedford Place mixed-use block, ground-floor independent retail on a 5-year lease, four apartments above on ASTs, £1.65M. Tighter cover; placed via <strong>InterBay Commercial</strong> at 70% LTV, 7.55% pa.",
        'Southampton has an active mixed-use regen pipeline. <strong>Mayflower Quarter (SO14)</strong>, the Watermark redevelopment, is the largest planned mixed-use scheme combining residential, office, retail and leisure across multiple phases. <strong>Royal Pier Waterfront (SO14)</strong>, immediately adjacent, is the marina-led mixed-use regeneration anchoring the inner harbour. <strong>Bargate Quarter (SO14)</strong> is the heritage-led mixed-use regeneration at the southern bookend of Above Bar Street. <strong>Above Bar Class E to residential PD conversions</strong> (the 25/01428/PA56 Class E to C3 seven-dwellings conversion being a recent example) generate steady refinance volume as upper-floor commercial converts to apartments above retail. These schemes generate commercial mortgage refinance candidates as new lettings stabilise.',
      ],
    },
    schemeTypes: {
      h2: "Mixed-use assets we fund",
      items: [
        { label: "Shop-plus-flat-above", detail: "Classic semi-commercial archetype, 40%+ residential by floorspace. See dedicated semi-commercial page for product mechanics." },
        { label: "Retail plus multi-flat block", detail: "Ground-floor retail with 4 to 10 apartments above; mid-cap commercial investment with blended income test. Common across Above Bar PD conversions." },
        { label: "Office plus residential block", detail: "Ground or first-floor office with apartments above; Mayflower Quarter and Bargate Quarter regen schemes typical." },
        { label: "Pub plus operator flat", detail: "Pub or restaurant with operator residential above; semi-commercial overlap or trading-business depending on operator structure." },
        { label: "Listed-building mixed-use conversion", detail: "Old Town Bargate stock and Town Quay listed buildings; heritage-comfortable lenders only." },
        { label: "Large mixed-use blocks", detail: "10+ apartments plus commercial; portfolio-style underwrite, larger lender pool engagement, structured-debt territory above £8M. Mayflower Quarter and Royal Pier Waterfront typical." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Southampton mixed-use",
      intro:
        "Single-facility commercial investment mortgage is the primary route. Where the residential element exceeds 40% by floorspace, the deal qualifies for semi-commercial pricing. Bridge-to-let funds vacant or value-add mixed-use acquisition with refurbishment and re-letting before stabilisation.",
      structures: standardStructures,
    },
    southamptonContext: {
      h2: "The Southampton mixed-use estate",
      body: 'Southampton has an extensive mixed-use stock distributed across the city centre and outer parade network. The Old Town and Bargate area carry the heritage mixed-use core, listed and conservation-area buildings with retail, hospitality or office on lower floors and conversion residential above. The Above Bar pedestrianised spine carries continual Class E to mixed-use and Class E to residential PD conversion activity (recent 25/01428/PA56 Class E retail to seven dwellings being a typical example) creating new mixed-use stock as upper floors are converted. Bedford Place (SO15) and the Polygon hold a deep independent shop-plus-flat stock. The district centres at Shirley High Street, Portswood Road and Bitterne Triangle all run on shop-plus-flat-above stock dating from the 1880s through the 1930s. The major regeneration mixed-use sits at Mayflower Quarter (Watermark), Royal Pier Waterfront and Bargate Quarter, schemes combining residential, office, retail and leisure across multi-phase delivery. The volume of mixed-use stock is one of the city\'s defining commercial-property characteristics, the building grain is dense, plot sizes are small, and almost every parade has shop-plus-flat archetype somewhere on it.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Southampton mixed-use",
      body: 'Strong across most mixed-use sub-types in mid-2026. <strong>InterBay Commercial</strong> (OSB Group), Together, Aldermore, YBS Commercial and HTB dominate small-to-mid mixed-use at 7.5 to 8.5% pa, 65 to 75% LTV. <strong>Shawbrook</strong>, Cambridge & Counties and OakNorth on larger blocks at 7.75 to 8.5% pa. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the largest, well-tenanted predominantly-commercial mixed-use blocks at 7.0 to 7.75% pa. Predominantly-residential mixed-use routes more naturally through InterBay Commercial and the specialist semi-commercial pool. Heritage and listed mixed-use, particularly Old Town Bargate stock and Town Quay listed buildings, needs heritage-comfortable lenders, Shawbrook, Cambridge & Counties and Together engage where the conservation cost is reasonable.',
    },
    faqs: [
      {
        question: "What residential / commercial split qualifies as mixed-use?",
        answer: "Anything with both commercial and residential income. Where residential is 40%+ by floorspace, semi-commercial pricing typically applies. Below 40%, treated as commercial investment with a residential overlay. The income mix matters as much as the floorspace mix, a building that is 45% residential by floorspace but 65% residential by income is priced as predominantly-residential.",
      },
      {
        question: "Can I get 75% LTV on a Southampton mixed-use block?",
        answer: "Yes on classic shop-plus-flat semi-commercial archetypes via InterBay Commercial or Together. Larger mixed-use blocks (10+ apartments plus commercial) typically cap at 70% LTV. Predominantly-commercial mixed-use with strong covenants on the commercial element can stretch to 75% with NatWest, Lloyds or Barclays. Vacant or part-let mixed-use caps at 60 to 65% via bridge-to-let.",
      },
      {
        question: "How are mixed-use assets valued for lending?",
        answer: "RICS Red Book valuation splits commercial value, residential value and total. Both ICR (commercial rent against interest) and AST income (residential rent against interest) feed into the blended affordability test. Some lenders use the lower of the two cover ratios; others blend by floorspace weighting. The valuation methodology can swing the loan size by 5 to 10%, we benchmark across multiple lenders to find the one whose methodology fits the asset best.",
      },
      {
        question: "What about listed and heritage mixed-use in the Old Town and Bargate area?",
        answer: "Listed-building mixed-use (Old Town Bargate stock, Town Quay listed buildings, conservation-area parades) routes through heritage-comfortable lenders, Shawbrook, Cambridge & Counties, Together. Slightly tighter LTV (typically 65% rather than 70%); otherwise comparable terms to non-listed mixed-use. The lender's quantity surveyor will scrutinise ongoing maintenance liability and any listed-building consent implications.",
      },
      {
        question: "Mixed-use bridge-to-let, viable strategy?",
        answer: 'Yes. A bridge funds acquisition plus refurbishment plus re-letting (commercial and residential both), with term-out onto mixed-use commercial mortgage at 12 to 24 months once both elements are stabilised. <a href="/services/commercial-bridge-to-let">Bridge-to-let</a> rates 8.5 to 9.0% pa for the bridge leg; term-out into 7.5 to 8.5% pa once stabilised. We model both legs at outset. Mayflower Quarter and Above Bar PD conversion schemes commonly generate candidates for this strategy.',
      },
    ],
  },

  // Semi-commercial
  "semi-commercial": {
    slug: "semi-commercial",
    name: "Semi-Commercial",
    metaTitle: "Semi-Commercial Mortgages Southampton | Bedford Place, Shirley, Bitterne Triangle, Portswood, Hedge End",
    metaDescription:
      "Semi-commercial commercial mortgage finance in Southampton, shop-with-flat-above and other 40%+ residential mixed assets. Bedford Place, Shirley, Bitterne Triangle, Portswood, Hedge End. Up to 75% LTV. We arrange the unregulated cases (let residential) and refer owner-occupied flat cases to a regulated broker. InterBay Commercial, Together, Shawbrook.",
    hero: {
      eyebrow: "Semi-commercial",
      h1: "Semi-Commercial Mortgages Southampton",
      lede:
        "Single-facility commercial mortgages for the shop-with-flat-above archetype and other residential-commercial mixed assets where residential floorspace is 40%+. Up to 75% LTV. Blended ICR around 145%. Mid-2026 rates 6.5 to 8.5% pa. We arrange the unregulated cases (let residential element); cases where the borrower or family member occupies the flat fall under the FCA's regulated mortgage perimeter and we refer those out to a regulated broker.",
      metrics: [
        { label: "LTV", value: "70 to 75%" },
        { label: "Cover test", value: "Blended ICR 140 to 150%" },
        { label: "Rate range", value: "6.5 to 8.5% pa" },
        { label: "Facility", value: "£150K to £2M" },
      ],
    },
    overview: {
      h2: "Underwriting a Southampton semi-commercial commercial mortgage",
      body: [
        "Semi-commercial is the term for commercial mortgages on mixed-use property where the residential element is at least 40% of total floorspace, typically the classic <strong>shop-with-flat-above</strong> archetype that defines Southampton's parade network, from Bedford Place through to the Bitterne Triangle. The product gives lenders comfort from the residential security (easier to re-let an empty flat than an empty retail unit), so semi-commercial routinely prices 50 to 100bps inside pure commercial investment on the same building.",
        "There is one structural complication every borrower must understand. Commercial mortgages are <strong>unregulated</strong> by definition and fall outside the FCA's regulated mortgage perimeter, which is what we arrange. <strong>If the borrower or an immediate family member personally occupies the residential element</strong>, the deal moves inside the regulated mortgage perimeter and stops being a commercial mortgage. We do not hold FCA authorisation because the products we arrange are unregulated, so where a deal falls into regulated territory we refer it to a regulated mortgage broker partner. We flag this at outset rather than discover it three weeks into legals. The classic case: the independent retailer who buys the freehold of their Shirley shop and lives in the flat above sits inside the regulated perimeter; the same building bought as an investment with the flat let on an AST sits inside our unregulated commercial scope.",
        "Active Southampton semi-commercial spines: <strong>Bedford Place (SO15)</strong> the central independent F&B and retail cluster running off the Polygon. <strong>Shirley High Street (SO15/SO16)</strong> the western district-centre spine, classic Victorian shop-plus-flat stock. <strong>Bitterne Triangle (SO18)</strong> the east-of-Itchen district-centre core. <strong>Portswood Road (SO17)</strong> the university corridor parade running through Highfield. <strong>Hedge End (SO30)</strong> suburban shop-plus-flat stock at the borough boundary. Most semi-commercial deals are £200K to £900K facility size. Worked example: a Bedford Place shop with two flats above, £585K valuation, retail let on a 10-year FRI to a national coffee covenant, both flats let on ASTs (unregulated, in our scope). <strong>InterBay Commercial</strong> placed at 75% LTV, 6.95% pa on a 5-year fix, 25-year term, blended ICR 148%. Worked example two: a Portswood Road shop-plus-three-flats with all flats let on ASTs to arms-length tenants, £755K, placed via Together at 70% LTV, 8.25% pa, blended ICR 145%.",
        "See our <a href=\"/services/semi-commercial-mortgage\">dedicated semi-commercial service page</a> for the product mechanics in detail. For purely residential blocks above commercial, see <a href=\"/property-types/hmo-block\">HMO blocks</a>; for predominantly-commercial buildings with smaller residential elements, see <a href=\"/property-types/mixed-use\">mixed-use</a>.",
      ],
    },
    schemeTypes: {
      h2: "Semi-commercial assets we fund",
      items: [
        { label: "Shop with one or two flats above", detail: "Classic Southampton parade archetype. Bedford Place SO15, Shirley SO15/SO16, Bitterne Triangle SO18, Portswood SO17, Hedge End SO30." },
        { label: "Restaurant or pub with operator flat (let)", detail: "Operator flat above licensed-trade premises let on AST. Sits as unregulated commercial. Owner-occupied flat cases fall outside our scope, referred to a regulated broker." },
        { label: "Office with residential conversion above", detail: "Office at ground or first floor with residential floors above (post-Class E to mixed change-of-use, common across the Above Bar PD conversion pipeline)." },
        { label: "Vacant semi-commercial acquisition", detail: "Bridge-to-let funded acquisition with refurbishment and re-letting both elements before term-out." },
        { label: "Multi-flat above commercial", detail: "Larger semi-commercial blocks with 3 to 5 flats above ground-floor retail. Specialist underwriting on blended ICR." },
        { label: "Heritage and conservation conversions", detail: "Listed-building semi-commercial; heritage-comfortable lenders only. Old Town Bargate stock and conservation-area parades." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Southampton semi-commercial",
      intro:
        "Single-facility semi-commercial commercial mortgage is the primary route on unregulated cases (residential element let on AST or to a limited-company tenant). Bridge-to-let funds vacant acquisition with agreed exit onto term semi-commercial. Cases where the borrower or family member will occupy the residential element fall outside the unregulated commercial scope, we refer those to a regulated mortgage broker partner.",
      structures: standardStructures,
    },
    southamptonContext: {
      h2: "The Southampton semi-commercial estate",
      body: 'A deep, active product across Southampton. The classic parade spines, Bedford Place SO15, Shirley High Street SO15/SO16, Bitterne Triangle SO18, Portswood Road SO17, and Hedge End SO30, all run on shop-plus-flat-above stock dating from the 1880s through the 1930s. Heritage stock in the Old Town and around the Bargate adds further depth with listed-building considerations. Recent change-of-use activity along the Above Bar pedestrianised spine and the Bedford Place Class E pipeline has been creating new semi-commercial profiles as upper floors are retained or converted to flats. The semi-commercial market trades steadily across Southampton, these assets rarely sit vacant for long because the residential element is intrinsically lettable given the city\'s housing stock pressure and the universities anchoring tenant demand.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Southampton semi-commercial",
      body: 'Strong on the unregulated cases we arrange. <strong>InterBay Commercial</strong> (OSB Group) is the most active named lender on the Southampton shop-plus-flat archetype, typical 7.5 to 8.25% pa at 70 to 75% LTV. Together covers more challenged cases (vacant flat at acquisition, weaker commercial covenant) at 8.25 to 9.0% pa. <strong>Shawbrook</strong>, Aldermore, YBS Commercial, HTB and Cambridge & Counties all have meaningful semi-commercial appetite on let residential cases. Each has a distinct LTV / minimum-loan / covenant profile, we know which fits what. Cases that fall inside the regulated mortgage perimeter (owner-occupied residential element) are out of scope for us and we refer those to a regulated broker.',
    },
    faqs: [
      {
        question: "What floorspace split qualifies as semi-commercial?",
        answer: "Residential typically <strong>40%+ by floorspace</strong>. Below that threshold, the deal is treated as pure commercial investment with wider pricing, sometimes 50 to 100bps wider. The split is measured by gross internal floor area; lenders' valuers calculate this from the RICS Red Book report, not from headline marketing particulars.",
      },
      {
        question: "What rate can I expect on a Southampton semi-commercial mortgage?",
        answer: "Currently <strong>6.5 to 8.5% pa</strong> at 65 to 75% LTV on standard shop-plus-flat. Specialists like InterBay Commercial and Together quote competitively to 75% LTV. Strong-covenant retail with an established AST history on the residential element prices at the keener end; vacant residential or short-lease commercial pulls pricing wider.",
      },
      {
        question: "Is semi-commercial regulated by the FCA?",
        answer: "Commercial mortgages are <strong>unregulated</strong> by definition and fall outside the FCA's regulated mortgage perimeter, and that is the territory we operate in. We do not hold FCA authorisation because the products we arrange are unregulated. Critical exception for semi-commercial: where the borrower or an immediate family member personally occupies one of the flats, the deal moves <strong>inside</strong> the regulated mortgage perimeter and is no longer in our scope. We refer those cases out to a regulated mortgage broker partner. Limited-company borrower with arms-length AST tenancies on the flat sits unregulated and is in our scope.",
      },
      {
        question: "What about HMOs above retail?",
        answer: 'HMO blocks above commercial route through a slightly different lender pool, see our <a href="/property-types/hmo-block">HMO block commercial mortgage page</a>. Highfield, Portswood and Bevois Valley (SO14/SO17) carry the densest student HMO stock in the city on the back of the University of Southampton and Solent University catchments. The product mechanics differ from standard semi-commercial, room-by-room ICR rather than blended building ICR, and a narrower lender pool.',
      },
      {
        question: "Can I refinance a semi-commercial onto buy-to-let?",
        answer: "No, buy-to-let products are sized against single residential dwellings let to AST tenants, not against commercial-plus-residential mixed assets. The semi-commercial route stays semi-commercial through any refinance. The exception is where the commercial element has been formally split off (separate title, separate access, separate utilities), at which point each element can be financed separately.",
      },
    ],
  },

  // HMO block
  "hmo-block": {
    slug: "hmo-block",
    name: "HMO Block",
    metaTitle: "HMO Mortgages Southampton | Highfield, Portswood, Bevois Valley Student Belt",
    metaDescription:
      "Commercial mortgage finance for HMO blocks (5+ rooms) in Southampton, Highfield, Portswood, Bevois Valley (SO14/SO17) student belt. Around 23,000 University of Southampton students plus 11,000 Solent University students drive one of the densest HMO markets in the UK. Specialist HMO lender panel including Paragon Bank, Together, Foundation Home Loans, Fleet Mortgages. LTVs to 75%.",
    hero: {
      eyebrow: "HMO block",
      h1: "HMO Block Mortgages Southampton",
      lede:
        "Specialist commercial mortgages for licensed HMO blocks of five rooms or more, student-let and professional-let. LTVs to 75%, blended ICR 140 to 160%. Southampton carries one of the densest student HMO markets in the UK, the SO14/SO17 student spine running through Highfield, Portswood and Bevois Valley, anchored by around 23,000 University of Southampton students plus 11,000 Solent University students. Paragon Bank, Together, Foundation Home Loans and Fleet Mortgages are particularly active. Mid-2026 rates 6.5 to 8.5% pa.",
      metrics: [
        { label: "LTV", value: "Up to 75%" },
        { label: "Cover test", value: "ICR 140 to 160%" },
        { label: "Rate range", value: "6.5 to 8.5% pa" },
        { label: "Facility", value: "£250K to £5M" },
      ],
    },
    overview: {
      h2: "Underwriting a Southampton HMO commercial mortgage",
      body: [
        "HMO blocks of five or more rooms route through commercial mortgage rather than mainstream buy-to-let. Underwriting is room-by-room, <strong>licensed HMO status</strong>, rent per room, occupancy, total rent against blended ICR. Most lenders cap loan at the lower of (LTV multiplied by value) or (ICR multiplied by rent divided by stress rate). LTVs of 75% are achievable on strongly-let HMO blocks with established occupancy and a clean licensing record.",
        "Southampton is one of the densest student HMO markets in the United Kingdom, driven by around 23,000 University of Southampton students plus around 11,000 Solent University students. The combined catchment generates persistent demand for shared-house accommodation, particularly across the SO17 university corridor. <strong>Highfield (SO17)</strong> is the densest student HMO sub-market, the streets immediately around the University of Southampton Highfield campus carry saturated 5 to 8 bed converted Victorian and Edwardian terraces. <strong>Portswood (SO17)</strong> is the natural extension northwards, the Portswood Road parade and the streets running off it carry deep student HMO stock combined with a strong term-time F&B economy. <strong>Bevois Valley (SO14)</strong> on the southern end of the student spine carries student HMO stock combined with a dense F&B and licensed-trade environment. <strong>Inner Shirley (SO15)</strong> picks up the western edge of student demand and a meaningful professional-let HMO cluster.",
        "Southampton City Council operates additional HMO licensing across most of the densest HMO neighbourhoods, including the SO17 Portswood and Highfield streets. Existing licensed HMOs trade and refinance freely; new conversions in additional-licensing areas need licensing and may need full planning consent depending on the type of HMO. The licensing register is publicly accessible and acts as a useful proxy for HMO stock counts at postcode level, SO17 carries by far the highest count.",
        "Worked example: a 6-bed Portswood (SO17) student HMO, £515K valuation, £42,000 gross annual rent, 95% historical occupancy, all-inclusive let. Paragon Bank placed at 75% LTV, 6.85% pa on a 5-year fix, blended ICR 148%. Worked example two: a 5-property SO17 professional and student HMO portfolio across Highfield and Portswood, £2.15M aggregate, £162K aggregate rent, mixed AST and per-room let. Routed via portfolio refinance with <strong>LendInvest</strong> at 70% LTV, 7.25% pa, aggregated DSCR.",
      ],
    },
    schemeTypes: {
      h2: "HMO block assets we fund",
      items: [
        { label: "Student HMO (5 to 8 rooms)", detail: "SO17 student spine, Highfield, Portswood, Bevois Valley; the streets immediately around the University of Southampton Highfield campus. All-inclusive let typical, 90%+ occupancy norm." },
        { label: "Professional HMO (5 to 8 rooms)", detail: "Inner Shirley, Polygon and the western edge of the student catchment. Higher per-room rents, slightly lower occupancy than student stock." },
        { label: "Large HMO (8+ rooms)", detail: "Larger HMOs in converted Victorian and Edwardian terraces across SO17 and SO14. Specialist lender pool, premium valuations." },
        { label: "Multi-property HMO portfolio", detail: "5+ HMO portfolio refinance via aggregated facility. Blanket-charge structure or property-by-property charges." },
        { label: "HMO conversion finance", detail: "Bridge-to-let funded conversion of houses to HMO, with licensing and planning consent path mapped before exchange." },
        { label: "Above-shop HMO", detail: "HMO blocks above retail, semi-commercial / HMO hybrid; specialist underwriting on the combined commercial and residential income. Portswood Road and Bevois Valley common locations." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Southampton HMO blocks",
      intro:
        "HMO commercial mortgage is the primary route for licensed HMOs of 5+ rooms. Conversion projects route through bridge-to-let. Multi-property HMO portfolios consolidate via portfolio refinance with aggregated DSCR cover.",
      structures: [
        { product: "HMO commercial mortgage", applicability: "Licensed 5+ room HMOs, let to students or professionals on a per-room basis or all-inclusive." },
        { product: "Commercial bridge-to-let", applicability: "Acquisition plus HMO conversion, with agreed term-out onto HMO mortgage once licensed and let." },
        { product: "Portfolio refinance", applicability: "5+ HMO portfolios consolidated into a single aggregated facility with blanket-charge or property-by-property structure." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing HMO block." },
      ],
    },
    southamptonContext: {
      h2: "The Southampton HMO market",
      body: 'Southampton carries one of the densest student HMO concentrations in the United Kingdom, driven by around 23,000 University of Southampton students plus around 11,000 Solent University students. <strong>SO17 (Highfield and Portswood)</strong> is the densest sub-market by a clear margin, the streets immediately around the University of Southampton Highfield campus and the Portswood Road parade are saturated with 5 to 8 bed converted Victorian and Edwardian terraces let to students. <strong>Bevois Valley (SO14)</strong> on the southern end of the student spine carries student HMO stock combined with the densest F&B and licensed-trade environment in the city. <strong>Inner Shirley (SO15)</strong> picks up the western edge of student demand and a meaningful professional-let HMO cluster. Southampton City Council operates additional HMO licensing across most of the densest HMO neighbourhoods, including the SO17 Portswood and Highfield streets; the licensing register is publicly accessible and acts as a useful proxy for HMO stock counts at postcode level. The 79 commercial-mortgage-relevant planning applications received in the last twelve months include a meaningful share of HMO change-of-use activity, evidence of ongoing supply rotation.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Southampton HMO",
      body: 'Strong. Paragon Bank is particularly active on the Southampton student HMO belt and has built a deep SO17 book over the past decade. Together, <strong>InterBay Commercial</strong> (OSB Group), <strong>LendInvest</strong>, Foundation Home Loans, Fleet Mortgages, Cambridge & Counties and Aldermore all have meaningful HMO appetite. Each has a different room-count threshold (some go 4+, most 5+, some 6+ for premium pricing) and a different stance on student-versus-professional let. Mid-2026 pricing 6.5 to 8.5% pa at 70 to 75% LTV. LTV up to 80% on selective lenders with portfolio history and strong occupancy track record. High-street commercial desks (NatWest, Lloyds, Barclays) typically decline HMO above five rooms; specialist commercial and BTL desks dominate.',
    },
    faqs: [
      {
        question: "What size HMO qualifies for commercial versus BTL pricing?",
        answer: "<strong>5+ rooms</strong> typically qualifies for HMO commercial mortgage. 4-room HMOs route through specialist BTL with HMO product. Above 7 rooms, the lender pool narrows further, Together, InterBay Commercial and LendInvest dominate. Above 10 rooms (large HMO), it becomes a fully specialist sub-segment with its own pricing logic.",
      },
      {
        question: "What about Southampton City Council HMO licensing in SO17?",
        answer: "Southampton City Council operates additional HMO licensing across most of the city's densest HMO neighbourhoods, including the SO17 Portswood and Highfield student streets. Existing licensed HMOs trade and refinance freely; new conversions in additional-licensing areas need licensing and may need full planning consent depending on the type of HMO. The licensing regime has supported HMO values materially by formalising stock and capping uncontrolled supply growth. The publicly-accessible licensing register is a useful proxy for HMO stock counts at postcode level.",
      },
      {
        question: "Can I fund HMO conversion?",
        answer: 'Yes, via <a href="/services/commercial-bridge-to-let">bridge-to-let</a>. Bridge funds acquisition plus conversion works; term-out onto HMO commercial mortgage once licensed and let. We map the planning and licensing path before exchange so the route to a licensed asset is clear; conversions in additional-licensing areas of SO17 need licensing in place before income can be commercially counted.',
      },
      {
        question: "What ICR do HMO commercial mortgage lenders need?",
        answer: "Typically <strong>140 to 155%</strong> on aggregated room rent against interest cost stressed at a notional rate 1 to 2% above pay rate. Strong-occupancy student HMOs in SO17 routinely pass at 145%. All-inclusive student lets sometimes carry a slightly tighter ICR (150 to 160%) because lenders factor in the utility and council tax costs the operator absorbs.",
      },
      {
        question: "Multi-property HMO portfolio, same lenders?",
        answer: 'Largely yes, but the product structure shifts to <a href="/services/portfolio-refinance">portfolio refinance</a>. Aggregated DSCR across the properties (typically 130 to 145%), single facility, blanket charge or property-by-property charges. Paragon Bank, LendInvest, Together and Foundation Home Loans all run active HMO portfolio programmes. 5+ properties is the typical threshold for portfolio pricing. Southampton HMO portfolio refinance volume has been steady through 2024 to 2026 as student-let economics held up well.',
      },
    ],
  },

  // Holiday-let portfolio
  "holiday-let-portfolio": {
    slug: "holiday-let-portfolio",
    name: "Holiday-Let Portfolio",
    metaTitle: "Holiday-Let Mortgages Southampton | Cruise-Adjacent Short-Lets, Ocean Village Apart-Hotels",
    metaDescription:
      "Specialist commercial mortgage finance for FHL (furnished holiday let) portfolios in Southampton. Cruise-adjacent short-let stock, Ocean Village apart-hotels, central waterfront serviced apartments. Around 3 million cruise passengers a year support a structurally less-seasonal short-let market than typical regional UK. LTVs to 70%, mid-2026 rates 7.0 to 9.0% pa.",
    hero: {
      eyebrow: "Holiday-let portfolio",
      h1: "Holiday Let Portfolio Mortgages Southampton",
      lede:
        "Specialist commercial mortgages for FHL (furnished holiday let) portfolios and apart-hotel stock across Southampton. Aggregated facility across 3+ properties on occupancy-and-ADR underwriting. Around 3 million ABP cruise passengers a year underpin a structurally less-seasonal short-let market than typical regional UK, with deep clusters in cruise-adjacent serviced apartments and Ocean Village apart-hotels. LTVs to 70%, mid-2026 rates 7.0 to 9.0% pa. Mainstream commercial desks largely do not engage, wrong desk first time loses six weeks.",
      metrics: [
        { label: "LTV", value: "Up to 70%" },
        { label: "Cover test", value: "DSCR 130 to 145%" },
        { label: "Rate range", value: "7.0 to 9.0% pa" },
        { label: "Facility", value: "£300K to £5M" },
      ],
    },
    overview: {
      h2: "Underwriting an FHL portfolio commercial mortgage",
      body: [
        "FHL (furnished holiday let) properties qualify for distinct treatment, they are commercially-let assets generating short-stay holiday income rather than long-term residential rent. Lender underwriting tests four variables. <strong>Average occupancy</strong> across the calendar year (sustained 55 to 65%+ is the Southampton threshold given the cruise-driven year-round demand profile). <strong>Average daily rate (ADR)</strong> by season. <strong>Seasonality</strong>, strong-season weeks at high ADR matter as much as headline annual figure. <strong>Platform mix</strong>, Airbnb, Booking.com, direct, plus owner-managed versus agent-managed.",
        "Most FHL portfolio lenders need <strong>3+ properties</strong> to consider portfolio-refinance pricing. Single-asset FHL routes through specialist BTL with FHL product (different pool, different logic). Portfolio underwriting tests <strong>aggregated DSCR</strong> at 130 to 145% across all properties, the diversification of income across multiple FHLs gives lenders comfort that one bad season at a single property does not break the portfolio.",
        "Southampton FHL territory has a distinctive demand profile compared to typical UK seaside markets. The cruise-passenger turnover through ABP cruise terminals at around 3 million passengers a year (recovering toward pre-pandemic levels) means hospitality demand is structurally less seasonal than typical regional UK, cruise boarding generates overnight-stay demand twelve months a year, not just summer peaks. The Ocean Village marina holds the densest waterfront apart-hotel and serviced-apartment cluster. Cruise-adjacent serviced apartments near Town Quay and the city centre serve the pre-and-post-cruise overnight market. Town Quay, Above Bar and the central CBD carry visitor accommodation drawing on Westquay retail tourism, business-traveller demand and cruise passenger turnover.",
        "Worked example: a 4-property cruise-adjacent and Ocean Village FHL portfolio, two central serviced apartments near Town Quay and two Ocean Village apart-hotel units, £1.95M aggregate valuation, £215K aggregate annual gross income, 71% blended occupancy, mixed Airbnb-and-Booking.com let. <strong>LendInvest</strong> placed at 65% LTV, 8.75% pa on a 5-year fix, 25-year term, aggregated DSCR 142%. Worked example two: a 3-property Ocean Village apart-hotel portfolio in marina-adjacent stock, £1.75M aggregate, £188K aggregate annual gross income, 76% blended occupancy. Placed via Together at 65% LTV, 8.55% pa, treating the apart-hotel structure as portfolio FHL with operator-management overlay.",
      ],
    },
    schemeTypes: {
      h2: "Holiday-let portfolio assets we fund",
      items: [
        { label: "Single-asset FHL", detail: "Single property let on FHL basis, typically a central serviced apartment or Ocean Village apart-hotel unit. Routes through specialist BTL with FHL product rather than portfolio facility." },
        { label: "FHL portfolio (3+ properties)", detail: "Aggregated portfolio facility for 3+ FHLs across Southampton. DSCR-led, blanket-charge or property-by-property structure." },
        { label: "Cruise-adjacent short-let stock", detail: "Serviced apartments and short-lets near Town Quay, the ABP cruise terminals and the central waterfront. Strong year-round occupancy on the back of cruise-passenger turnover." },
        { label: "Ocean Village apart-hotel portfolio", detail: "Marina-adjacent apart-hotel operators across Ocean Village. Operator-management overlay; specialist desks." },
        { label: "B&B and boutique guesthouse", detail: "Operator-owned overnight-stay business; trading-business overlap with leisure category. Operator-occupied B&B routes through trading-business mortgage." },
        { label: "Central visitor accommodation", detail: "Upper-floor visitor accommodation above central retail, partly created by recent retail-to-visitor-accommodation change of use along Above Bar and Bedford Place." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for FHL portfolios",
      intro:
        "FHL commercial mortgage on a portfolio basis is the primary route for 3+ properties. Single-asset FHLs route through specialist BTL or commercial investment. Operator-occupied B&Bs route through trading-business mortgage with operator-residence allowance.",
      structures: [
        { product: "FHL portfolio mortgage", applicability: "3+ FHL properties aggregated under a single facility. DSCR-led at 130 to 145% on blended income." },
        { product: "Trading-business mortgage", applicability: "Operator-occupied B&B or guesthouse, EBITDA, occupancy and ADR underwritten." },
        { product: "Commercial bridge-to-let", applicability: "Acquisition plus refurbishment of property for new FHL use; term-out onto FHL portfolio once stabilised." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise across an established FHL portfolio." },
      ],
    },
    southamptonContext: {
      h2: "The Southampton FHL market",
      body: 'Southampton has a distinctive FHL market shaped by cruise-passenger turnover rather than the seaside-holiday demand profile typical of UK coastal markets. Around 3 million cruise passengers a year flow through ABP cruise terminals (recovering toward pre-pandemic levels), generating sustained pre-and-post-cruise overnight stay demand twelve months a year. Westquay retail tourism, business-traveller flow into the central CBD hotel cluster, and student-related visiting-family demand round out the picture. Ocean Village marina (SO14) holds the densest waterfront apart-hotel cluster, marina-adjacent serviced apartments and apart-hotel units commanding premium pricing on the back of the marina-led environment and Carnival UK HQ adjacency. Cruise-adjacent serviced apartments near Town Quay and the central waterfront serve the pre-and-post-cruise overnight market. Above Bar and Bedford Place hold visitor accommodation use in upper floors above retail, partly created by recent retail-to-visitor-accommodation change of use. Demand drivers: cruise-passenger turnover, weekend short-break trade from the wider South East, weekday business and conference traffic, and student-related visiting-family demand through term-time. Stock typically 1 to 3 bedroom converted apartments and apart-hotel units commanding £100 to £350 per night at peak; waterfront-view and marina-adjacent premium adds 25 to 40% to ADR.',
    },
    lenderAppetite: {
      h2: "Lender appetite for FHL portfolios",
      body: '<strong>LendInvest</strong>, Together and Hampshire Trust Bank are the most active specialist FHL portfolio lenders. Cambridge & Counties covers larger portfolios (5+ properties, £2M+ aggregate facility). Cumberland Building Society engages on selective South Coast stock. Select private credit on bespoke structures. Mid-2026 pricing 7.0 to 9.0% pa at 60 to 70% LTV. Mainstream commercial desks (NatWest, Lloyds, Barclays, Santander) largely decline FHL outright, they treat short-stay income as too volatile. Specialist BTL desks (Paragon Bank, Aldermore, Foundation Home Loans) cover single-asset FHL but not portfolio-aggregated structures. Get the right specialist first time, wrong desk loses six weeks. Southampton\'s cruise-passenger-driven year-round demand profile means underwriters take Southampton FHL more comfortably than equivalent stock in more-seasonal markets.',
    },
    faqs: [
      {
        question: "Is an FHL a commercial mortgage or buy-to-let?",
        answer: "Single-asset FHL often routes through specialist BTL with FHL product, different pool, different logic. Portfolios of 3+ properties route through commercial portfolio facilities at better aggregated terms and DSCR-led underwriting. The threshold matters: at 2 properties, you are still in BTL territory; at 3, the portfolio commercial pool opens up.",
      },
      {
        question: "What occupancy do FHL lenders need?",
        answer: "Sustained <strong>55 to 65%+ annual occupancy</strong> across the portfolio is the Southampton threshold; the cruise-driven year-round demand profile supports higher annualised occupancy than most regional markets. Strong-season weeks at high ADR matter as much as headline annual figure, an Ocean Village apart-hotel unit at 80% occupancy through cruise peak weeks and 50% off-peak reads better than the same unit at flat 60% across all months. We model a full 12-month occupancy and ADR curve before submission so the lender sees the seasonality story explicitly.",
      },
      {
        question: "Are B&B and FHL the same lender pool?",
        answer: 'Overlapping but distinct. Operator-owned B&B with on-site owner residence routes as <a href="/services/trading-business-mortgage">trading-business mortgage</a> on EBITDA cover. Pure FHL with guest-only occupancy and no on-site operator routes as FHL portfolio on DSCR. Mixed structures (a B&B that also takes some FHL bookings) need careful structuring at outset to avoid landing in the wrong product.',
      },
      {
        question: "What about platform reliance, Airbnb concentration?",
        answer: "Lenders prefer multi-platform booking mix (Airbnb plus Booking.com plus direct) rather than single-platform reliance. Airbnb-only FHLs can fund but at slightly tighter terms, typically 5% lower LTV and 25 to 50bps wider pricing. The reasoning is that platform policy or fee changes can affect economics overnight; multi-platform diversification mitigates that. We benchmark booking mix in the underwriting pack.",
      },
      {
        question: "FHL tax changes, do lenders factor them in?",
        answer: "Yes. The April 2025 abolition of the FHL tax regime (FHLs now treated like ordinary residential lets for tax purposes) has fed into lender modelling, net rent assumptions tightened, DSCR cover ratios moved 5 to 10 percentage points wider for new applications. The change has not closed the FHL market, but it has narrowed pricing slightly and made operator-track-record more important. We flag the post-April-2025 net-yield position in every FHL submission.",
      },
    ],
  },
};

export function getAssetTypeDetail(slug: string): AssetTypeDetail | null {
  return assetTypeDetails[slug] ?? null;
}

export const ASSET_TYPE_LINKS = Object.values(assetTypeDetails).map((a) => ({
  slug: a.slug,
  name: a.name,
}));
