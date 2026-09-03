/**
 * Per-district area page content, Commercial Mortgages Southampton.
 *
 * Each area page is a Bradley-Benner local landing page where the ward /
 * neighbourhood IS the primary entity. Heading vocabulary uses different
 * entity variants across URL / title / H1 / H2s / H3s, no phrase repeats.
 *
 * Differentiation comes from layered local data:
 *   1. Real Southampton City Council (and Eastleigh Borough on SO30)
 *      planning applications filtered by postcode catchment, cited by
 *      reference number, address and proposal.
 *   2. HM Land Registry residential transactions used as market temperature
 *      ONLY, never claimed as commercial transactions.
 *   3. Sector-specific lender appetite naming the lenders most likely
 *      to fund the dominant local commercial mortgage profile.
 *
 * NeuronWriter discipline: every page hits mortgage / commercial mortgage
 * / Southampton / [area] / finance / lender / broker, plus the entity set,
 * FCA, stamp duty, refinancing, LTV.
 *
 * Slugs match AREAS in src/lib/constants.ts and AREA_IMAGES in src/data/area-images.ts.
 */

export interface PlanningRef {
  ref: string;
  address: string;
  postcode: string;
  proposal: string;
}

export interface AreaDetail {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    h1: string;
    lede: string;
  };
  marketContext: {
    h2: string;
    body: string[];
  };
  planningContext: {
    h2: string;
    body: string;
    refs: PlanningRef[];
  };
  schemeTypes: {
    h2: string;
    items: Array<{ label: string; detail: string; typicalSize?: string }>;
  };
  finance: {
    h2: string;
    body: string;
    structures: Array<{ product: string; applicability: string }>;
  };
  lenderAppetite: {
    h2: string;
    body: string;
  };
  /** Property types most active in this district, slugs from property-types-content.ts. */
  relatedAssetClasses: string[];
  faqs: Array<{ question: string; answer: string }>;
}

const standardCmStructures = [
  { product: "Owner-occupier", applicability: "Businesses buying their trading premises, EBITDA cover at 1.3 to 1.5x, LTV to 75% on bricks." },
  { product: "Commercial investment", applicability: "Let assets, ICR at 140 to 160% stressed, LTV typically 65 to 75%." },
  { product: "Semi-commercial", applicability: "Shop+flat archetypes, blended ICR around 145%, LTVs to 75% via specialists." },
  { product: "Bridge-to-let", applicability: "Vacant or value-add acquisitions with refurb or re-let exit onto term mortgage." },
  { product: "Refinancing", applicability: "Maturing facilities, equity release on stabilised commercial assets, rate-driven switches." },
];

export interface AreasHubContent {
  hero: {
    eyebrow: string;
    h1: string;
    lede: string;
  };
  intro: {
    h2: string;
    body: string[];
  };
  groupings: Array<{
    title: string;
    description: string;
    slugs: string[];
  }>;
  closing: {
    h2: string;
    body: string;
  };
}

export const areasHubContent: AreasHubContent = {
  hero: {
    eyebrow: "Where we lend",
    h1: "Commercial Mortgages Southampton by Area",
    lede:
      "From Above Bar and the Mayflower Quarter regeneration in SO14 to the Adanac Park and Nursling M271 logistics corridor in SO16 and the Bevois Valley student-led F&B grid, the Southampton commercial mortgage market is not one market, it is twelve. Each district carries its own dominant property type, its own typical facility size and its own lender shortlist. Every area page below stitches together the live Southampton City Council planning pipeline, HM Land Registry transaction temperature and the named lenders most likely to fund a deal there.",
  },
  intro: {
    h2: "How the Southampton commercial mortgage market splits by district",
    body: [
      "Pricing on a Westquay or Above Bar prime retail freehold in SO14 is not the same as pricing on an Adanac Park M271 logistics shed or a Bitterne district-centre retail parade in SO18. ICR thresholds on a Highfield student HMO are not the same as on an Ocean Village marina hotel trading-business. The lender shortlist for a Bassett dental practice freehold is almost entirely different from the shortlist for a Hedge End out-of-town business-park investment. Every area page below carries the specifics that matter, postcode, named planning applications drawn from the Southampton City Council public access portal (and Eastleigh Borough where relevant on the SO30 boundary), dominant commercial sector mix, expected LTV and rate range, and the lenders we lean on first.",
      "We arrange commercial mortgages, finance and refinancing across all twelve districts. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated. Stamp duty land tax applies on every commercial purchase at the commercial rates, your conveyancer will price it. Where a lender takes more than 60% LTV against a trading business, expect EBITDA cover testing in addition to bricks-and-mortar valuation.",
    ],
  },
  groupings: [
    {
      title: "Central Southampton, waterfront regeneration, prime retail and marina hospitality",
      description:
        "The deepest commercial mortgage market on the Solent. Above Bar, Westquay and Bargate Quarter prime retail in SO14, the Mayflower Quarter and Royal Pier mixed-use regen zone, Ocean Village marina hotel and Carnival UK HQ office investment anchor the largest central facility sizes (£500K to £6M).",
      slugs: ["city-centre", "ocean-village", "mayflower-quarter-royal-pier"],
    },
    {
      title: "Independent F&B and student-led SO14 / SO15 / SO17",
      description:
        "Bedford Place and The Polygon independent F&B and serviced offices in SO15, Bevois Valley student-led F&B and HMO investment, Highfield and Portswood University of Southampton corridor with the largest HMO concentration on the South Coast outside London.",
      slugs: ["bedford-place-polygon", "bevois-valley", "highfield-portswood"],
    },
    {
      title: "District retail and suburban professional services",
      description:
        "Shirley High Street retail parade in SO15 and SO16, Bitterne Triangle district centre in SO18 and SO19 with the regional care-home cluster, Bassett and Lordswood SO16 affluent professional offices and dental practice belt anchored by the University Hospital Southampton halo.",
      slugs: ["shirley", "bitterne", "bassett-lordswood"],
    },
    {
      title: "Solent industrial, riverside trade-counter and M27 out-of-town",
      description:
        "Woolston and Sholing SO19 Itchen riverside light industrial and retail parades, Adanac Park and Nursling SO16 Class B8 logistics on the M271 with Ordnance Survey and ABP-adjacent labour shed, Hedge End and West End SO30 Eastleigh Borough out-of-town retail and business park on M27 J7.",
      slugs: ["woolston-sholing", "adanac-park-nursling", "hedge-end-west-end"],
    },
  ],
  closing: {
    h2: "Beyond the twelve, wider Hampshire and the Solent corridor",
    body:
      "We routinely arrange commercial mortgages outside the twelve districts above, including Eastleigh, Totton, Romsey, Chandlers Ford, Hythe and the wider Test Valley commuter ring, plus Portsmouth, Fareham, Gosport and Winchester inside the wider Hampshire and Solent corridor. The same 90+ lender panel applies, with Allica, Shawbrook, HTB, Cambridge and Counties, Paragon, Together and YBS Commercial all active across the South Coast. If your deal is in a Southampton or Hampshire postcode that does not have its own page yet, call us direct, we will route you to the right product and the right lenders inside an hour.",
  },
};

export const areaDetails: Record<string, AreaDetail> = {
  "city-centre": {
    slug: "city-centre",
    name: "Southampton City Centre and Above Bar",
    metaTitle: "Commercial Mortgages Southampton City Centre and Above Bar | Specialist Broker, SO14 SO15",
    metaDescription:
      "Commercial mortgages for Southampton City Centre and Above Bar, SO14 and SO15 prime retail, Class E office, mixed-use upper-floor stock. Westquay, Above Bar Street, East Street, Civic Centre Road, Bargate. 90+ lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Southampton City Centre and Above Bar",
      lede:
        "Southampton City Centre runs from the Westquay Hammerson scheme north along Above Bar Street through the Civic Centre and the Bargate to the East Street and Oxford Street retail quarter in SO14, with the central Commercial Road and Cumberland Place office spine threading west through SO15. The fabric is Victorian and post-war retail terrace, the modern Westquay covered scheme, mid-rise Civic Centre and Cumberland Place professional offices, and a deep tail of mixed-use stock with ground-floor Class E and residential or office above. We arrange commercial mortgages for SO14 prime retail investment along Above Bar Street and the Westquay parade, East Street and Oxford Street independent retail and small-cap mixed-use freehold, restaurant and bar trading-business refinancing through the central visitor spine, and owner-occupier professional firms buying floors of Cumberland Place and Civic Centre Road stock. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Southampton City Centre and Above Bar commercial property market",
      body: [
        "Southampton City Centre is the deepest commercial mortgage catchment on the central Solent. Prime retail Zone A on Above Bar Street and inside the Westquay covered scheme reaches £85 to £130 per sq ft in 2026 on the best units, supported by a resident catchment of roughly 250,000 inside Southampton plus a wider Solent commuter and visitor draw, and the combined cruise-passenger flow through Associated British Ports that runs above 3 million passengers a year. East Street and Oxford Street independent retail is structurally different, narrow-frontage independent operators with upper-floor flats or offices above, a heritage tenant mix that has held its ground against national-multiple consolidation. Cumberland Place and Civic Centre Road carry the mid-rise professional office cluster that funds the legal, accountancy and consultancy SME base.",
        "Transactions are dominated by long-hold private investors and family offices on the Westquay and Above Bar parade, owner-occupier independents and small partnerships buying their East Street or Oxford Street shop, and a steady flow of restaurant, bar and cafe refinancings through the central visitor spine. The deep-volume zone for our central SO14 and SO15 commercial mortgage book sits in the £400K to £2.5M bracket, in-line retail, upper-floor mixed-use, small mixed-use blocks and Class E professional offices. Pricing currently 6.5 to 8.0% pa for clean prime retail investment on Above Bar Street, with Westquay strong-covenant stock at 6.0 to 7.0% and tighter secondary East Street and Oxford Street parades at 7.5 to 8.5%. Refinancing volumes picked up materially through 2025 and 2026 as five-year fixes from 2020 and 2021 matured into a higher base-rate environment.",
        "HM Land Registry residential transactions inside the SO14 and SO15 central catchment cluster around the apartment blocks above Above Bar Street and along Commercial Road, with recent files including a Northam Road SO14 terrace at £200,000 and Class E to residential prior-approval flatted stock above Above Bar Street feeding into the supply pipeline. They are not a direct commercial signal but they confirm that the city-centre population continues to absorb new residential supply against the backdrop of the Mayflower Quarter and Royal Pier regeneration pipeline, which underwrites the ground-floor retail, restaurant and upper-floor short-let revenue that most of our central SO14 and SO15 commercial investment lending sits against.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Southampton City Centre and Above Bar (SO14 / SO15)",
      body:
        "Two live Southampton City Council Idox files anchor the current city-centre commercial mortgage pipeline. A central Commercial Road change of use to mixed-use entertainment venue (Ref <strong>26/00182/FUL</strong>) covers a sui generis puzzles experience and bar repositioning of a heritage central retail unit at 68 Commercial Road, the canonical Above Bar fringe leisure repositioning we refinance against on a trading-business mortgage on operator EBITDA at 60 to 70% LTV once trading accounts are established. The Westquay Shopping Centre anchor unit reconfiguration (Ref <strong>25/01892/FUL</strong>) covers a Hammerson-led F&B refresh and new tenant mix update inside the flagship CBD retail scheme, asset-management capex that the institutional owner refinances against on a Grade A retail investment facility. Stamp duty applies at the commercial rates on each acquisition, refinancing is unaffected.",
      refs: [
        {
          ref: "26/00182/FUL",
          address: "68 Commercial Road, Southampton SO15 1GD",
          postcode: "SO15 1GD",
          proposal: "Change of use of central retail unit to mixed-use entertainment venue (puzzles experience, bar, sui generis) with associated shopfront alterations on the Commercial Road parade.",
        },
        {
          ref: "25/01892/FUL",
          address: "Westquay Shopping Centre, Harbour Parade, Southampton SO15 1QE",
          postcode: "SO15 1QE",
          proposal: "Westquay Hammerson anchor unit reconfiguration, new F&B accommodation and tenant mix update in the flagship CBD retail scheme.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in central Southampton",
      items: [
        { label: "Westquay and Above Bar prime retail", detail: "Zone A retail freehold on the Westquay parade and Above Bar Street, long-hold private investor stock.", typicalSize: "£1M to £5M facility" },
        { label: "East Street and Oxford Street independent retail", detail: "Narrow-frontage independent retail freehold, owner-occupier and small investor.", typicalSize: "£400K to £1.5M" },
        { label: "Cumberland Place professional office", detail: "Mid-rise Grade B office floors serving central legal, accountancy and consultancy firms.", typicalSize: "£500K to £2.5M" },
        { label: "Civic Centre Road and Bargate mixed-use", detail: "Ground-floor Class E retail or food with offices or apartments above.", typicalSize: "£500K to £2.5M" },
        { label: "Central F&B trading-business", detail: "Above Bar Street, Oxford Street and Bargate restaurant, bar and cafe trading-business refinance and freehold purchase.", typicalSize: "£400K to £1.8M" },
        { label: "Owner-occupier professional services", detail: "Solicitor, accountancy and consultancy practices buying small floors of 1,500 to 4,000 sq ft.", typicalSize: "£400K to £1.5M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Southampton City Centre and Above Bar",
      body: 'Prime retail and mixed-use investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Owner-occupier professional services via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Central restaurant, bar and cafe refinance via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a>. Vacant or repositioning stock routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing facilities through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for central Southampton retail and mixed-use freehold",
      body:
        "Deep across the SO14 and SO15 core. <strong>Lloyds</strong>, <strong>NatWest</strong> (Above Bar Street commercial RM team), <strong>Barclays</strong> and <strong>Santander</strong> compete on prime Above Bar and Westquay parade stock and owner-occupier professional firms at 60 to 65% LTV and 6.0 to 7.0% pa. Allica Bank runs an active South Coast book and routinely tops the shortlist on East Street and Oxford Street independent retail and central mixed-use deals where speed and relationship underwriting matter. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and <strong>Cynergy Bank</strong> are active on mixed-use Victorian and post-war blocks, Class E professional offices and upper-floor repositioning, with Cynergy Bank prominent on central F&B and hospitality refinance against operator EBITDA. <strong>LendInvest</strong> covers value-add and bridge-to-let on Class E to residential prior-approval conversions and Bargate heritage stock. HTB, Cambridge & Counties, Paragon, Together and YBS Commercial take selected SO14 and SO15 freehold investment and mixed-use deals in the £400K to £2.5M bracket. Refinancing on a stabilised secondary central retail asset typically prices 7.5 to 8.5% pa at 65 to 70% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["retail", "office", "mixed-use", "leisure-hospitality", "semi-commercial", "pub-restaurant"],
    faqs: [
      {
        question: "What LTV is achievable on an Above Bar Street or Westquay freehold?",
        answer:
          "Up to 70% LTV on let prime retail. An Above Bar Street or Westquay parade freehold with a strong-covenant retail or restaurant tenant prices best at 60 to 65% LTV (around 6.5 to 7.0% pa). Secondary East Street and Oxford Street upper-floor stock with mixed covenants typically caps at 65 to 70%. The binding constraint is almost always ICR, not headline LTV, and several central Bargate and Civic Centre buildings sit inside listed-building or conservation-area designations which narrows the lender pool.",
      },
      {
        question: "Can we get a commercial mortgage on a vacant East Street unit?",
        answer:
          'Yes, through <a href="/services/commercial-bridge-to-let">bridge-to-let</a>. A 12 to 24 month bridge funds acquisition and re-letting, then terms out to investment mortgage post-stabilisation at 65 to 70% LTV. Active strategy on units feeding into the East Street residential-over-commercial pipeline anchored by the 16-flat scheme discharged under planning reference 26/00205/DIS at Land rear of 104 to 107 East Street.',
      },
      {
        question: "What product fits a professional firm buying a Cumberland Place office floor?",
        answer:
          "Owner-occupier commercial mortgage with <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong>, <strong>Santander</strong> or Allica Bank. Typical 70 to 75% LTV at 6.0 to 7.0% pa on partnership or limited-company accounts, EBITDA cover at 1.3 to 1.5x. This is the canonical central SO15 professional-services route, and Allica Bank relationship underwriting often beats the high street on speed for South Coast SMEs.",
      },
      {
        question: "Which lenders run dedicated Southampton desks?",
        answer:
          "<strong>NatWest</strong> Above Bar Commercial, <strong>Lloyds</strong> Commercial Banking, <strong>Barclays</strong> Business Banking and <strong>Santander</strong> Corporate all maintain South Coast regional teams active on Southampton deals, with HSBC UK Business Banking running an Ocean Village base. Allica Bank, HTB, Cambridge & Counties and Together cover the challenger end on £400K to £2.5M central Southampton investment and mixed-use. We use those local desks for SO14 and SO15 deals where local knowledge of the Westquay institutional pattern, the East Street independent grain and the central conservation-area constraints carries weight in underwriting. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },

  "ocean-village": {
    slug: "ocean-village",
    name: "Ocean Village",
    metaTitle: "Commercial Mortgages Ocean Village Southampton | Marina Hospitality Broker, SO14",
    metaDescription:
      "Commercial mortgages for Ocean Village Southampton, SO14 marina office, hospitality, apart-hotel and leisure investment. Carnival UK HQ at Channel Way, marina F&B, Ocean Village Marina. Cynergy Bank, Allica Bank, HTB panel. Indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Ocean Village",
      lede:
        "Ocean Village sits on the eastern side of central Southampton in SO14, threading along Channel Way around the Ocean Village Marina basin where Carnival UK runs its UK headquarters and the marina apart-hotel, leisure and F&B operators form the densest single hospitality cluster on the central Solent. The fabric is purpose-built marina mixed-use, Class E office floors serving Carnival UK and the wider cruise-sector supply chain, marina-fronting F&B and the Ocean Village apart-hotel stack. We arrange commercial mortgages for SO14 marina office investment along Channel Way, hospitality and apart-hotel trading-business refinance, marina restaurant and bar freehold purchase, and the leisure-led mixed-use blocks that wrap the marina basin. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Ocean Village commercial property market",
      body: [
        "Ocean Village is the most distinct sub-market inside central Southampton. The Carnival UK headquarters at Channel Way anchors a dense Class E office cluster that does not look like any other SO14 location, modern marina-fronting floors that fund through institutional and challenger-bank investment lending against blue-chip cruise-sector covenants and a deep supply chain of marine services, naval architects and Solent professional firms. Around the office stack, the Ocean Village Marina basin carries the densest hospitality concentration on the central Solent, anchored by the Harbour Hotel, apart-hotel and serviced-apartment operators, and marina-fronting restaurant and bar stock that funds against operator EBITDA on trading-business mortgage rather than bricks-and-mortar comparison.",
        "Hospitality and apart-hotel investment yields along Ocean Village sit at 7.0 to 9.0% in 2026 depending on operator covenant, lease structure and trading. Trading-business hotel, apart-hotel and marina F&B freehold typically funds at 60 to 70% LTV on operator EBITDA cover at 1.4 to 1.8x. Pricing currently 7.0 to 9.0% pa for clean trading-business hospitality finance, with strong-covenant flag-operated apart-hotel stock at the keenest end and independent marina restaurant and bar freehold at the wider end. Class E office investment against Carnival UK or strong supply-chain covenants prices keener at 6.0 to 7.5% pa at 60 to 65% LTV. Refinancing volumes through 2025 and 2026 have been heavy as five-year fixes from the post-pandemic hospitality recovery cycle have matured.",
        "HM Land Registry residential transactions inside the Ocean Village SO14 footprint cluster around the apartment blocks above Channel Way and the marina-fronting residential stack, with recent files including an Ashurst Mews SO18 flat at £165,000 and the wider central SO14 leasehold flat trade. They are not a direct commercial signal but they confirm that marina-adjacent residential continues to absorb buyer demand, which underwrites the demand-side trading-business case for hospitality, apart-hotel and marina F&B income in SO14.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Ocean Village (SO14)",
      body:
        "One headline Southampton City Council Idox file anchors the current Ocean Village commercial mortgage pipeline. The Ocean Village marina office and hospitality scheme at Channel Way (Ref <strong>25/01612/FUL</strong>) covers new Class E office accommodation alongside leisure and F&B serving the Carnival UK HQ cluster, the canonical Ocean Village mixed-use repositioning that the developer funds through a development loan, the office floors refinance against on a Grade B office investment facility once let to Carnival UK supply-chain covenants, and the hospitality units fund through trading-business mortgage on operator EBITDA at 60 to 70% LTV once trading accounts are established. Stamp duty applies at the commercial rates on each freehold acquisition, trading-business refinance is unaffected.",
      refs: [
        {
          ref: "25/01612/FUL",
          address: "Ocean Village, Channel Way, Southampton SO14 3QQ",
          postcode: "SO14 3QQ",
          proposal: "Ocean Village marina office and hospitality scheme, new Class E office accommodation alongside leisure and F&B serving the Carnival UK HQ cluster.",
        },
        {
          ref: "26/00205/DIS",
          address: "Land rear of 104-107 East Street, Southampton SO14 3HH",
          postcode: "SO14 3HH",
          proposal: "Discharge of conditions on 16-flat residential-over-commercial scheme approved under 19/00348/FUL adjacent to central retail, marina-fringe SO14 supply context.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Ocean Village",
      items: [
        { label: "Channel Way Class E office", detail: "Modern marina-fronting Class E office floors serving Carnival UK and the cruise-sector supply chain.", typicalSize: "£1M to £5M facility" },
        { label: "Apart-hotel and serviced apartment", detail: "Ocean Village apart-hotel and serviced-apartment operator freehold and trading-business refinance.", typicalSize: "£1M to £6M" },
        { label: "Marina hotel freehold", detail: "Marina-fronting independent and flag-operated hotel freehold with operator covenant.", typicalSize: "£2M to £10M" },
        { label: "Marina restaurant and bar", detail: "Channel Way and marina-fronting restaurant, bar and seafood operator freehold.", typicalSize: "£500K to £2M" },
        { label: "Marine services and supply chain", detail: "Owner-occupier marine architects, brokers and naval supply-chain SME premises around the marina.", typicalSize: "£400K to £1.5M" },
        { label: "Mixed-use marina block", detail: "Ground-floor F&B with apart-hotel or residential above wrapping the marina basin.", typicalSize: "£800K to £3M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Ocean Village",
      body: 'Marina office and Carnival UK supply-chain investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Apart-hotel, hotel and marina F&B trading-business mortgage via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA, accommodation revenue and barrelage where licensed. Owner-occupier marine services and professional firms via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a>. Refurbishment and repositioning of marina apart-hotel or hospitality stock routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>, exit onto stabilised trading-business mortgage post trading-record. Refinancing maturing hospitality facilities through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Ocean Village marina office, apart-hotel and hospitality",
      body:
        "Hospitality and marina office are the deepest single sectors in Ocean Village. <strong>Cynergy Bank</strong> runs one of the most active UK hospitality books and sits at the top of our shortlist on Channel Way and marina-fronting apart-hotel, hotel and B&B freehold, prime independent stock at 60 to 70% LTV and 7.0 to 8.0% pa on EBITDA cover at 1.5 to 1.8x. Allica Bank is active across South Coast hospitality on small hotel, apart-hotel and marina F&B owner-occupier freehold. HTB covers selected hotel and apart-hotel investment and mixed-use marina stock. <strong>Shawbrook</strong> and <strong>InterBay Commercial</strong> cover marina mixed-use and upper-floor repositioning. <strong>LendInvest</strong> covers refurbishment and bridge-to-let where the marina asset is being repositioned. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the largest Carnival UK supply-chain Class E office stock and flag-operated apart-hotel deals at 60 to 65% LTV and 6.5 to 7.5% pa, with HSBC UK Business Banking running its central Southampton base out of Ocean Village itself. Allied Irish Bank UK, Cambridge & Counties, Paragon, Together and YBS Commercial take selected hospitality and marina deals where the operator track record and covenant fit each lender policy. Pricing for trading-business apart-hotel and hotel refinance currently sits 7.0 to 9.0% pa at 60 to 70% LTV across the operator-EBITDA-led product. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["office", "leisure-hospitality", "pub-restaurant", "mixed-use", "holiday-let-portfolio"],
    faqs: [
      {
        question: "What LTV is achievable on a Channel Way Class E office investment?",
        answer:
          "Up to 70% LTV on let Class E office stock. A Channel Way office floor let to Carnival UK supply-chain or cruise-sector covenants prices best at 60 to 65% LTV (around 6.5 to 7.0% pa). Secondary marina-fringe office stock with mixed covenants typically caps at 65 to 70%. The binding constraint is almost always ICR, not headline LTV, and the strength of the Carnival UK supply-chain covenant pool is the single biggest pricing lever on SO14 marina office.",
      },
      {
        question: "Can we get a commercial mortgage on an Ocean Village apart-hotel?",
        answer:
          "Yes, on trading-business mortgage with <strong>Cynergy Bank</strong>, Allica Bank or HTB on operator EBITDA at 60 to 70% LTV and 7.0 to 8.5% pa. The new Class E office and hospitality accommodation approved under planning reference 25/01612/FUL Channel Way is exactly this profile, each apart-hotel unit becomes fundable once an operator with two years of accounts is in place.",
      },
      {
        question: "What product fits a marina F&B operator buying their freehold?",
        answer:
          'Trading-business mortgage on operator EBITDA at 60 to 70% LTV with <strong>Cynergy Bank</strong>, Allica Bank or HTB, or owner-occupier mortgage via <a href="/services/owner-occupier-commercial-mortgage">owner-occupier route</a> if the operator buys through a partnership or limited-company vehicle. Typical 7.0 to 8.5% pa on the trading-business product, 6.5 to 7.5% pa on the owner-occupier route subject to EBITDA cover at 1.3 to 1.5x.',
      },
      {
        question: "Which lenders run dedicated South Coast hospitality desks?",
        answer:
          "<strong>Cynergy Bank</strong>, Allica Bank and HTB all maintain dedicated hospitality programmes that take Ocean Village marina hotel, apart-hotel and B&B deals routinely. Allied Irish Bank UK, Cambridge & Counties and Together cover the next tier. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> Commercial all maintain South Coast regional teams active on flag-operated apart-hotel and Class E office deals, and HSBC UK Business Banking runs its Southampton base from Ocean Village. We use those specialist desks for SO14 marina deals where the operator-EBITDA underwriting model carries the deal. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },

  "mayflower-quarter-royal-pier": {
    slug: "mayflower-quarter-royal-pier",
    name: "Mayflower Quarter and Royal Pier",
    metaTitle: "Commercial Mortgages Mayflower Quarter and Royal Pier Southampton | Regeneration Broker, SO14 SO15",
    metaDescription:
      "Commercial mortgages for the Mayflower Quarter and Royal Pier Waterfront regeneration, Southampton SO14 SO15. Watermark Phase 2 mixed-use, hotel and leisure investment, ground-floor commercial inside the largest central waterfront scheme. 90+ lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Mayflower Quarter and Royal Pier",
      lede:
        "The Mayflower Quarter is the largest central waterfront regeneration on the Solent, threading along Western Esplanade in SO15 and SO14 from the Westquay edge down past Town Quay to the historic Royal Pier site, anchored by the Watermark Phase 2 mixed-use scheme and the Royal Pier Waterfront masterplan. The fabric is master-planned waterfront mixed-use, hotel and leisure accommodation, Grade A and Grade B office floors and ground-floor retail and F&B beneath managed residential and apart-hotel above. We arrange commercial mortgages for SO14 and SO15 stabilised mixed-use refinance once the first wave of Watermark blocks stabilise into income, hotel and apart-hotel investment along the waterfront, ground-floor F&B and retail freehold inside the master plan, and the Royal Pier leisure-led trading-business stock. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Mayflower Quarter and Royal Pier commercial property market",
      body: [
        "The Mayflower Quarter and Royal Pier zone is the deepest central waterfront commercial mortgage opportunity on the Solent over the 2026 to 2035 horizon. The Watermark Phase 2 scheme on Western Esplanade and the Royal Pier Waterfront masterplan at Town Quay deliver large-scale mixed-use waterfront accommodation comprising office, leisure, hotel and residential floorspace, supported by a resident catchment of roughly 250,000 inside Southampton, the wider Solent commuter draw and the cruise-passenger flow above 3 million a year through Associated British Ports immediately adjacent. The residential side dominates volume on each masterplan, but the commercial mortgage opportunity sits in the ground-floor retail and leisure units inside mixed-use blocks, standalone hotel and apart-hotel investment, and the Grade A and Grade B office floors that emerge as the schemes deliver.",
        "Mixed-use refinance is the canonical Mayflower Quarter product. The first wave of Watermark and waterfront blocks that complete from 2026 onwards will stabilise into income-producing assets over a 12 to 24 month trading window, at which point developers and investors refinance from development finance or bridge onto long-term commercial investment mortgages at 65 to 70% LTV with ICR at 145 to 160% on blended commercial and residential income. Pricing currently 6.5 to 8.0% pa for clean stabilised mixed-use waterfront stock, with strong-covenant hotel and apart-hotel investment at 6.5 to 7.5% pa and secondary mixed-use at 7.5 to 8.5%. The £2M+ refinance bracket dominates volume here, with mainstream challenger and institutional desks competing actively.",
        "HM Land Registry residential transactions inside the central SO14 and SO15 catchment confirm a healthy buyer base for waterfront-adjacent flats and townhouses, with recent files including a Northam Road SO14 terrace at £200,000 and the deeper central leasehold flat trade above Above Bar Street. They are not a direct commercial signal but they confirm that central Southampton continues to absorb high-value residential supply against the backdrop of the Mayflower Quarter and Royal Pier delivery, which underwrites the ground-floor retail, hotel and F&B income that most of our central waterfront commercial investment lending sits against.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity around the Mayflower Quarter and Royal Pier (SO14 / SO15)",
      body:
        "Two headline Southampton City Council Idox files anchor the current Mayflower Quarter and Royal Pier commercial mortgage pipeline. The Mayflower Quarter Watermark redevelopment Phase 2 on Western Esplanade (Ref <strong>25/01745/FUL</strong>) covers a mixed-use waterfront scheme comprising office, leisure, hotel and residential accommodation, the canonical central-waterfront mixed-use repositioning that the developer funds through a development loan, the office floors refinance against on a Grade A or Grade B office investment facility once let, the hotel block funds through trading-business mortgage on operator EBITDA at 60 to 70% LTV, and the ground-floor retail and F&B units fund through mixed-use or trading-business routes. The Royal Pier Waterfront mixed-use regeneration scheme at Town Quay (Ref <strong>24/02545/FUL</strong>) covers hotel, leisure, retail and residential accommodation on the historic Royal Pier site, a multi-year delivery that will refinance onto stabilised commercial investment facilities as each block beds in. Stamp duty applies at the commercial rates on each freehold acquisition, trading-business refinance is unaffected.",
      refs: [
        {
          ref: "25/01745/FUL",
          address: "Mayflower Quarter, Western Esplanade, Southampton SO15 1AA",
          postcode: "SO15 1AA",
          proposal: "Mayflower Quarter Watermark redevelopment Phase 2, mixed-use waterfront scheme comprising office, leisure, hotel and residential accommodation.",
        },
        {
          ref: "24/02545/FUL",
          address: "Royal Pier, Town Quay, Southampton SO14 2AQ",
          postcode: "SO14 2AQ",
          proposal: "Royal Pier Waterfront mixed-use regeneration scheme, hotel, leisure, retail and residential accommodation on the historic Royal Pier site.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types around the Mayflower Quarter and Royal Pier",
      items: [
        { label: "Mixed-use waterfront refinance", detail: "Stabilised Watermark and Royal Pier mixed-use blocks moving from development finance to long-term mortgage.", typicalSize: "£2M to £15M facility" },
        { label: "Ground-floor retail and F&B", detail: "Anchor retail and F&B units inside the Watermark and Royal Pier mixed-use schemes.", typicalSize: "£500K to £2.5M" },
        { label: "Waterfront hotel investment", detail: "Mayflower Quarter and Royal Pier hotel and apart-hotel freehold with operator covenant.", typicalSize: "£2M to £10M+" },
        { label: "Grade A waterfront office", detail: "Modern Grade A office floors inside the Watermark scheme along Western Esplanade.", typicalSize: "£2M to £8M" },
        { label: "Royal Pier leisure trading-business", detail: "Historic Royal Pier site leisure, F&B and visitor-attraction operator freehold.", typicalSize: "£500K to £3M" },
        { label: "Town Quay waterfront mixed-use", detail: "Town Quay frontage ground-floor F&B with apart-hotel or managed residential above.", typicalSize: "£800K to £3M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active around the Mayflower Quarter and Royal Pier",
      body: 'Mixed-use and waterfront office investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Hotel, apart-hotel and Royal Pier leisure trading-business via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA, accommodation revenue and barrelage where licensed. Owner-occupier professional firms moving into Watermark office floors via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a>. Vacant or repositioning waterfront stock and Class E leisure repositioning routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing development-finance positions through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product across the masterplan over the 2026 to 2030 stabilisation window.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Mayflower Quarter and Royal Pier mixed-use, hotel and waterfront office",
      body:
        "Deep across the central waterfront. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and <strong>Cynergy Bank</strong> dominate the £2M to £8M stabilised mixed-use refinance bracket and the hotel and apart-hotel trading-business book, with Cynergy Bank prominent on every hospitality refinance against operator EBITDA at 60 to 70% LTV and 7.0 to 8.0% pa. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the largest let assets, Grade A waterfront office investment let to blue-chip covenants and flag-operated hotel stock at 60 to 65% LTV and 6.5 to 7.5% pa. Allica Bank runs an active South Coast book on £400K to £2.5M ground-floor mixed-use, retail and small-cap apart-hotel freehold. <strong>LendInvest</strong> covers value-add and bridge-to-let on Royal Pier repositioning and Watermark phase delivery. HTB, Cambridge & Counties, Paragon, Together and YBS Commercial take selected waterfront freehold investment and mixed-use deals where the operator track record and covenant fit each lender policy. Refinancing on a stabilised secondary waterfront mixed-use asset typically prices 7.5 to 8.5% pa at 65 to 70% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["mixed-use", "office", "leisure-hospitality", "retail", "pub-restaurant", "holiday-let-portfolio"],
    faqs: [
      {
        question: "Can we refinance a Watermark Phase 2 stabilised mixed-use block?",
        answer:
          "Yes, mixed-use refinance is the canonical Mayflower Quarter product as Watermark Phase 2 blocks deliver and bed in. Typical 70% LTV at 7.0 to 8.0% pa with <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong>, <strong>Cynergy Bank</strong> or Allica Bank, ICR at 145 to 160% on blended commercial and residential income. The 25/01745/FUL approval at Western Esplanade is exactly this profile.",
      },
      {
        question: "What LTV is achievable on a Mayflower Quarter or Royal Pier waterfront hotel?",
        answer:
          "Up to 70% LTV on trading hotel and apart-hotel freehold with two to three years of consistent operator accounts. Flag-operated stock with a strong covenant lease can reach 70%. Independent waterfront hotel and apart-hotel typically funds at 60 to 70% LTV with <strong>Cynergy Bank</strong>, Allica Bank, HTB and Allied Irish Bank UK as the deepest lender shortlist. EBITDA cover at 1.5 to 1.8x is the binding constraint.",
      },
      {
        question: "Can we get a commercial mortgage on a vacant or repositioning Royal Pier unit?",
        answer:
          'Yes, through <a href="/services/commercial-bridge-to-let">bridge-to-let</a>. A 12 to 24 month bridge funds acquisition and refurbishment, then terms out to investment or trading-business mortgage post-stabilisation at 60 to 70% LTV. Active strategy on units inside the 24/02545/FUL Royal Pier Waterfront masterplan during the delivery and lease-up window.',
      },
      {
        question: "Which lenders run dedicated South Coast waterfront desks?",
        answer:
          "<strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and <strong>Cynergy Bank</strong> all maintain dedicated mixed-use and hospitality programmes that take central Southampton waterfront mixed-use refinance and hotel deals routinely. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> Commercial maintain South Coast regional teams active on the largest Watermark and Royal Pier Grade A office and flag-operated hotel deals. Allica Bank, HTB, Cambridge & Counties and Together cover the £400K to £2.5M end. We use those desks where local knowledge of the Mayflower Quarter delivery sequencing carries weight in underwriting. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },

  "bedford-place-polygon": {
    slug: "bedford-place-polygon",
    name: "Bedford Place and The Polygon",
    metaTitle: "Commercial Mortgages Bedford Place and The Polygon Southampton | Independent F&B and Serviced Office Broker, SO15",
    metaDescription:
      "Commercial mortgages for Bedford Place and The Polygon, Southampton SO15, independent F&B parade, serviced office, semi-commercial and small-cap mixed-use freehold. Allica Bank, Cynergy Bank, Shawbrook panel. Indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Bedford Place and The Polygon",
      lede:
        "Bedford Place runs north of Cumberland Place through SO15 as the densest independent F&B parade in central Southampton, flanked by The Polygon serviced-office quarter and a deep tail of Victorian and Edwardian semi-commercial shop-with-flat stock. The fabric is narrow-frontage independent retail, ground-floor restaurant, bar and cafe operators, upper-floor flats and serviced-office floors that fund central SME consultancy, creative and professional firms. We arrange commercial mortgages for SO15 independent F&B trading-business freehold and refinance along Bedford Place, semi-commercial shop-and-flat freehold on the Bedford Place parade, owner-occupier serviced-office operators in The Polygon, and the small-cap mixed-use blocks that thread the central SO15 grain. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Bedford Place and The Polygon commercial property market",
      body: [
        "Bedford Place sits immediately north of the Cumberland Place office spine in SO15 and carries the densest independent F&B parade in central Southampton, a Victorian and Edwardian retail terrace where independent restaurants, bars, cafes and small specialist retail dominate the trading frontage and Victorian flats sit above almost every unit. The Polygon, immediately west, is the central Southampton serviced-office quarter, mid-rise Edwardian and inter-war stock converted to managed serviced workspace serving central SME consultancy, creative, accountancy and legal firms. The combination gives SO15 a distinct independent-led commercial mix that does not look like the Westquay or Above Bar parade.",
        "From a commercial mortgage angle, Bedford Place and The Polygon split four ways. Independent F&B trading-business freehold along the Bedford Place parade and the immediate side streets, semi-commercial shop-and-flat freehold mainly on the trading frontage, owner-occupier and small investor serviced-office freehold inside The Polygon block, and small-cap mixed-use blocks where ground-floor F&B sits beneath upper-floor flats or short-let visitor accommodation. Each carries a distinct lender pool. Semi-commercial is the deepest in volume, <strong>InterBay Commercial</strong>, <strong>Shawbrook</strong> and Allica Bank are all active to 75% LTV at 7.0 to 8.5% pa on blended ICR. Independent F&B trading-business funds through Cynergy Bank, Allica Bank and specialist licensed-trade desks at 60 to 70% LTV and 7.0 to 8.5% pa. Serviced-office investment routes through mainstream Class E office desks at 65 to 70% LTV and 6.5 to 7.5% pa.",
        "HM Land Registry residential transactions inside the SO15 central catchment cluster around the Bedford Place and Polygon Victorian terraces, with recent files including a Northam Road SO14 terrace at £200,000 and the wider central SO15 leasehold flat trade. They confirm a healthy renter and owner-occupier base in SO15 that underwrites the AST income and short-let revenue beneath the semi-commercial and mixed-use stack. Stamp duty applies at the commercial rates on Bedford Place commercial freehold purchase, semi-commercial purchase applies the mixed-use SDLT scale subject to usual structuring.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Bedford Place and The Polygon (SO15)",
      body:
        "One headline Southampton City Council Idox file anchors the current Bedford Place commercial mortgage pipeline. The Bedford Place ground-floor change of use to Class E cafe with extraction flue and shopfront alterations (Ref <strong>26/00161/FUL</strong>) covers the canonical Bedford Place independent F&B repositioning of a Victorian semi-commercial unit, the operator funds the freehold and fit-out through trading-business mortgage on operator EBITDA at 60 to 70% LTV once trading accounts are established, and the landlord refinances against the post-stabilisation rent on a semi-commercial or commercial investment facility. The wider Cumberland Place professional-services office refurbishment pipeline (Ref <strong>24/02892/FUL</strong>) provides the SO15 office context, mid-rise Grade B office accommodation serving the central CBD professional-firm cluster that funds through Class E office investment lending. Stamp duty applies at the commercial rates on each freehold acquisition, trading-business refinance is unaffected.",
      refs: [
        {
          ref: "26/00161/FUL",
          address: "Bedford Place, Southampton SO15 2DD",
          postcode: "SO15 2DD",
          proposal: "Change of ground floor to Class E cafe with extraction flue and shopfront alterations on the Bedford Place independent F&B parade.",
        },
        {
          ref: "24/02892/FUL",
          address: "Cumberland Place, Southampton SO15 2BG",
          postcode: "SO15 2BG",
          proposal: "Cumberland Place professional services office building refurbishment, mid-rise Grade B office accommodation serving the central CBD professional firm cluster.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Bedford Place and The Polygon",
      items: [
        { label: "Bedford Place independent F&B", detail: "Independent restaurant, bar and cafe trading-business freehold and refinance along the Bedford Place parade.", typicalSize: "£400K to £1.5M facility" },
        { label: "Semi-commercial shop and flat", detail: "Classic Bedford Place shop-with-flat-above freehold on the trading parade.", typicalSize: "£350K to £900K" },
        { label: "Polygon serviced office", detail: "Mid-rise Edwardian and inter-war managed serviced-office freehold and investment.", typicalSize: "£600K to £2.5M" },
        { label: "Small-cap mixed-use", detail: "Ground-floor F&B or retail with upper-floor flats or short-let visitor accommodation.", typicalSize: "£500K to £1.8M" },
        { label: "Independent retail and specialist", detail: "Specialist retail and personal-services freehold along the Bedford Place trading frontage.", typicalSize: "£300K to £800K" },
        { label: "Owner-occupier professional firm", detail: "Solicitor, accountancy, consultancy and creative firms buying small Polygon office floors.", typicalSize: "£400K to £1.2M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Bedford Place and The Polygon",
      body: 'Semi-commercial routes via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a> on blended ICR. Independent F&B trading-business via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA. Serviced-office investment via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Owner-occupier professional firms via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Refurb and short-let visitor-accommodation repositioning routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing semi-commercial and trading-business facilities through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Bedford Place semi-commercial, independent F&B and Polygon serviced office",
      body:
        "Deep across the SO15 core. <strong>InterBay Commercial</strong>, <strong>Shawbrook</strong> and Allica Bank are the most active semi-commercial lenders along Bedford Place, quoting to 75% LTV at 7.0 to 8.5% pa on blended ICR around 145%. <strong>Cynergy Bank</strong> sits prominently on every Bedford Place independent F&B trading-business deal at 60 to 70% LTV and 7.0 to 8.5% pa on operator EBITDA cover at 1.5 to 1.8x. Allica Bank also covers owner-occupier independent F&B and small mixed-use freehold competitively. HTB takes selected Bedford Place trading-business and licensed-trade deals. <strong>LendInvest</strong> covers refurbishment and short-let visitor-accommodation repositioning bridges. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> sit on the mainstream end for owner-occupier professional firms and standard Polygon serviced-office investment at 60 to 65% LTV and 6.5 to 7.5% pa. Cambridge & Counties, Paragon, Together and YBS Commercial pick up the SO15 small-cap mixed-use and semi-commercial book in the £350K to £1.5M bracket. Pricing for clean semi-commercial currently 7.0 to 8.5% pa at 70 to 75% LTV, independent F&B trading-business 7.0 to 8.5% pa at 60 to 70% LTV, serviced-office investment 6.5 to 7.5% pa at 65 to 70% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["semi-commercial", "pub-restaurant", "office", "retail", "mixed-use", "leisure-hospitality"],
    faqs: [
      {
        question: "What LTV is achievable on a Bedford Place semi-commercial freehold?",
        answer:
          "Up to 75% LTV via <strong>InterBay Commercial</strong>, <strong>Shawbrook</strong> or Allica Bank. Blended ICR around 145% on combined commercial rent and AST income from the flat above, pricing 7.0 to 8.5% pa. The Bedford Place parade is one of the deepest semi-commercial micro-markets we work in central Southampton and the lender pool is broad across challenger banks and specialists.",
      },
      {
        question: "Can we get a commercial mortgage on a Bedford Place independent F&B freehold?",
        answer:
          'Yes, on trading-business mortgage with <strong>Cynergy Bank</strong>, Allica Bank or HTB on operator EBITDA at 60 to 70% LTV and 7.0 to 8.5% pa. The new Class E cafe approved under planning reference 26/00161/FUL at Bedford Place is exactly this profile, each operator becomes fundable once two years of trading accounts are in place. Owner-occupier hospitality routes via <a href="/services/owner-occupier-commercial-mortgage">owner-occupier mortgage</a> if the operator buys through a partnership or limited company.',
      },
      {
        question: "What product fits a creative firm buying a Polygon office floor?",
        answer:
          "Owner-occupier commercial mortgage with <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong>, <strong>Santander</strong> or Allica Bank. Typical 70 to 75% LTV at 6.5 to 7.5% pa on partnership or limited-company accounts, EBITDA cover at 1.3 to 1.5x. Polygon serviced-office floors are the canonical SO15 owner-occupier professional-services route, and Allica Bank relationship underwriting often beats the high street on speed for South Coast SMEs.",
      },
      {
        question: "Which lenders run dedicated South Coast challenger desks for Bedford Place stock?",
        answer:
          "<strong>InterBay Commercial</strong>, <strong>Shawbrook</strong> and Allica Bank all maintain South Coast challenger programmes that take Bedford Place semi-commercial and small-cap mixed-use deals routinely. <strong>Cynergy Bank</strong> covers the independent F&B trading-business profile, HTB and Cambridge & Counties take selected SO15 freehold investment in the £400K to £2.5M bracket. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the largest Polygon serviced-office deals. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },

  "bevois-valley": {
    slug: "bevois-valley",
    name: "Bevois Valley",
    metaTitle: "Commercial Mortgages Bevois Valley Southampton | Student F&B and HMO Broker, SO14 SO17",
    metaDescription:
      "Commercial mortgages for Bevois Valley Southampton, SO14 and SO17 student-led F&B parade, HMO investment, small-cap mixed-use freehold. Cynergy Bank, Paragon, InterBay, Together panel. Indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Bevois Valley",
      lede:
        "Bevois Valley runs along Bevois Valley Road between the central SO14 retail core and the Highfield SO17 university belt, the densest student-led F&B and licensed-trade parade in central Southampton, where independent operators, late-night bars and ground-floor restaurants stack against a deep HMO and shared-house overlay above and around. The fabric is Victorian and Edwardian terrace, ground-floor F&B and licensed-trade, upper-floor flats and shared HMO accommodation feeding the University of Southampton and Solent University catchments. We arrange commercial mortgages for SO14 and SO17 independent F&B trading-business freehold and refinance along Bevois Valley Road, HMO block finance across the surrounding terraces, semi-commercial shop-with-flat freehold, and the small-cap mixed-use blocks where ground-floor F&B sits beneath managed student accommodation. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Bevois Valley commercial property market",
      body: [
        "Bevois Valley is the structurally distinct student-led F&B and licensed-trade corridor inside central Southampton. The trading frontage along Bevois Valley Road carries the densest concentration of late-night bars, independent restaurants, takeaways and small specialist retail in SO14, supported by the combined University of Southampton catchment of roughly 23,000 students and Solent University catchment of roughly 11,000, plus the wider Highfield and Portswood student-belt residential population that overlaps the northern edge. The result is a student-led, owner-operator-heavy trading district where the rental stack and the trading-business income reinforce each other.",
        "From a commercial mortgage angle, Bevois Valley splits four ways. Independent F&B and licensed-trade trading-business freehold along Bevois Valley Road, HMO blocks in the surrounding Victorian terraces reflecting the dense student catchment, semi-commercial shop-and-flat freehold on the trading parade, and small-cap mixed-use blocks where ground-floor F&B sits beneath shared student accommodation or managed flats. Each carries a distinct lender pool. HMO is the deepest in volume, Paragon, Together, Foundation Home Loans and Cambridge & Counties dominate at 70 to 75% LTV and 7.0 to 8.5% pa with different room-count thresholds and licensing comfort. Independent F&B trading-business funds through <strong>Cynergy Bank</strong>, Allica Bank and specialist licensed-trade desks at 60 to 70% LTV and 7.5 to 9.0% pa on operator EBITDA. Semi-commercial routes via <strong>InterBay Commercial</strong>, <strong>Shawbrook</strong> and Allica Bank at 70 to 75% LTV and 7.0 to 8.5% pa on blended ICR.",
        "HM Land Registry residential transactions inside the SO14 and SO17 Bevois Valley catchment cluster around the Victorian student terraces, with recent files including the wider central SO14 and SO17 Land Registry trade and the Northam Road SO14 terrace at £200,000 as a directional comparator on the upper-floor and HMO stack. They are not a direct commercial signal but they confirm a healthy renter base that underwrites the HMO AST income and the F&B trading-business case beneath the licensed-trade and semi-commercial stack. Stamp duty applies at the commercial rates on Bevois Valley commercial freehold purchase, HMO acquisitions follow the residential SDLT scale subject to usual structuring.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Bevois Valley (SO14 / SO17)",
      body:
        "Two live Southampton City Council Idox files anchor the current Bevois Valley commercial mortgage pipeline. The Bevois Valley Road independent F&B change of use scheme (Ref <strong>25/01045/FUL</strong>) covers a ground-floor Class E restaurant and bar fit-out with extraction flue and shopfront alterations on the SO14 trading parade, the canonical Bevois Valley independent F&B repositioning we refinance against on a trading-business mortgage on operator EBITDA at 60 to 70% LTV once trading accounts are bedded in. The wider Portswood HMO change of use file (Ref <strong>25/01478/COU</strong>) on the SO17 student-belt boundary just north of the Bevois Valley terraces covers conversion of a C3 dwelling to a sui generis HMO serving the University of Southampton catchment, the canonical SO14 / SO17 HMO acquisition file that funds through specialist HMO lenders at 70 to 75% LTV on the rental stack. Stamp duty applies at the commercial rates on each freehold acquisition, HMO acquisitions follow the residential SDLT scale subject to usual structuring.",
      refs: [
        {
          ref: "25/01045/FUL",
          address: "Bevois Valley Road, Southampton SO14 0LB",
          postcode: "SO14 0LB",
          proposal: "Ground-floor change of use to Class E restaurant and bar with extraction flue and shopfront alterations on the Bevois Valley Road independent F&B parade.",
        },
        {
          ref: "25/01478/COU",
          address: "Portswood Road, Southampton SO17 2FY",
          postcode: "SO17 2FY",
          proposal: "Change of use of C3 dwelling to sui generis HMO with seven bedrooms serving the University of Southampton catchment, canonical Bevois Valley fringe student-housing acquisition file.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Bevois Valley",
      items: [
        { label: "Independent F&B trading-business", detail: "Bevois Valley Road licensed restaurant, bar and late-night operator freehold, operator EBITDA underwriting.", typicalSize: "£350K to £1.2M facility" },
        { label: "Licensed HMO block (5 to 7 rooms)", detail: "Victorian and Edwardian terrace HMO block in the SO14 and SO17 student catchment.", typicalSize: "£300K to £900K" },
        { label: "Large HMO block (8 plus rooms)", detail: "Specialist HMO lender pool, licensing and room-count thresholds critical.", typicalSize: "£500K to £1.5M" },
        { label: "Semi-commercial shop with flat", detail: "Classic Bevois Valley Road shop-with-flat freehold, blended ICR underwriting.", typicalSize: "£300K to £800K" },
        { label: "Small-cap mixed-use block", detail: "Ground-floor F&B with managed student accommodation above on the trading parade.", typicalSize: "£500K to £1.5M" },
        { label: "Convenience and takeaway operator freehold", detail: "Independent convenience, off-licence and takeaway freehold along the student spine.", typicalSize: "£250K to £700K" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Bevois Valley",
      body: 'Independent F&B trading-business routes via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA. HMO block finance via <a href="/property-types/hmo-block" class="text-secondary font-medium hover:underline">HMO block</a> and <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on the rental stack at 145% plus ICR. Semi-commercial shop-with-flat via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a> at blended ICR. Owner-occupier independent F&B and licensed-trade via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a>. Refurbishment and HMO re-let through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing HMO and F&B facilities through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product on the corridor in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Bevois Valley independent F&B, HMO and semi-commercial",
      body:
        "Deep across the SO14 and SO17 student grain. <strong>Cynergy Bank</strong> sits prominently on every Bevois Valley independent F&B and licensed-trade trading-business deal at 60 to 70% LTV and 7.5 to 9.0% pa on operator EBITDA cover at 1.5 to 1.8x, with Allica Bank competing on owner-occupier independent F&B and small mixed-use freehold. HTB takes selected Bevois Valley licensed-trade and trading-business deals. On the HMO side, Paragon, Together, Foundation Home Loans, Cambridge and Counties and Aldermore all run active SO14 and SO17 HMO programmes with different room-count thresholds and licensing comfort, pricing 6.5 to 8.5% pa at 70 to 75% LTV. <strong>InterBay Commercial</strong> and <strong>Shawbrook</strong> dominate the semi-commercial shop-with-flat book on the trading parade at 70 to 75% LTV and 7.0 to 8.5% pa on blended ICR around 145%. <strong>LendInvest</strong> covers refurbishment, HMO conversion and re-let bridges. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on owner-occupier F&B and the largest mixed-use blocks at 60 to 65% LTV and 6.5 to 7.5% pa. Pricing for clean HMO refinance currently sits 6.5 to 8.0% pa at 70 to 75% LTV, independent F&B trading-business 7.5 to 9.0% pa at 60 to 70% LTV, semi-commercial 7.0 to 8.5% pa at 70 to 75% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["pub-restaurant", "hmo-block", "semi-commercial", "mixed-use", "retail", "leisure-hospitality"],
    faqs: [
      {
        question: "What LTV is achievable on a Bevois Valley HMO block?",
        answer:
          "Up to 75% LTV on licensed 5 to 7 room HMOs with established occupancy across Paragon, Together, Foundation Home Loans and Cambridge and Counties. Larger 8 plus room HMOs typically cap at 70% LTV through the same lender pool, with selective Aldermore appetite. ICR stress-tested at 145% plus on the rental stack. Pricing 6.5 to 8.5% pa depending on LTV, room count, licence status and SPV history. The 25/01478/COU Portswood Road file is exactly this archetype on the SO17 fringe.",
      },
      {
        question: "Can we get a commercial mortgage on a Bevois Valley independent F&B freehold?",
        answer:
          'Yes, on trading-business mortgage with <strong>Cynergy Bank</strong>, Allica Bank or HTB on operator EBITDA at 60 to 70% LTV and 7.5 to 9.0% pa. The new Class E restaurant and bar approved under planning reference 25/01045/FUL on Bevois Valley Road is exactly this profile, each operator becomes fundable once two years of trading accounts are in place. Owner-occupier hospitality routes via <a href="/services/owner-occupier-commercial-mortgage">owner-occupier mortgage</a> at 65 to 70% LTV.',
      },
      {
        question: "Can we refinance a multi-block SO14 and SO17 HMO portfolio?",
        answer:
          'Yes, 5 plus HMO portfolios route through <a href="/services/commercial-remortgage">portfolio refinance</a> at aggregated facility pricing with Paragon, <strong>InterBay Commercial</strong>, Together and Cambridge and Counties. Aggregated ICR and licence-count methodology apply at facility size £1.5M to £5M. Stamp duty applies on each acquisition at the residential or commercial rates as relevant.',
      },
      {
        question: "Which lenders run dedicated South Coast student-let and F&B desks?",
        answer:
          "Paragon, Together, Foundation Home Loans, Cambridge and Counties and Aldermore all maintain dedicated HMO programmes that take Bevois Valley and SO17 student HMO deals routinely. <strong>Cynergy Bank</strong> covers the independent F&B trading-business profile across SO14 and SO17, Allica Bank and HTB take owner-occupier and licensed-trade freehold. <strong>InterBay Commercial</strong> and <strong>Shawbrook</strong> dominate the semi-commercial shop-with-flat book on the trading parade. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },

  "highfield-portswood": {
    slug: "highfield-portswood",
    name: "Highfield and Portswood",
    metaTitle: "Commercial Mortgages Highfield and Portswood Southampton | University Corridor Broker, SO17",
    metaDescription:
      "Commercial mortgages for Highfield and Portswood, Southampton (SO17), University of Southampton corridor, Portswood Road retail parade, large HMO block, semi-commercial shop with flat. 90+ lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Highfield and Portswood",
      lede:
        "Highfield and Portswood sit roughly a mile and a half north of Southampton city centre and thread the SO17 University of Southampton corridor along Portswood Road, Highfield Lane and University Road, anchored by the University of Southampton Highfield campus with roughly 23,000 students and supported by the Solent University catchment of roughly 11,000 further south. The fabric is a deep Victorian and Edwardian terraced student belt, the densest HMO concentration on the South Coast outside London, a long Portswood Road retail parade running ground-floor convenience, takeaway, salon and independent retail beneath shared-house and HMO accommodation above. We arrange commercial mortgages for SO17 HMO block finance and refinance across the surrounding terraces, Portswood Road retail parade investment, semi-commercial shop-with-flat freehold purchase, and the small-cap mixed-use blocks where ground-floor F&B sits beneath managed student accommodation. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Highfield and Portswood commercial property market",
      body: [
        "Highfield and Portswood carry the largest HMO concentration in Southampton and one of the deepest student-belt commercial mortgage catchments on the South Coast. The University of Southampton Highfield campus, with roughly 23,000 students enrolled in 2025 and 2026 across undergraduate, postgraduate and research populations, anchors the SO17 student catchment, with Solent University adding a further roughly 11,000 students immediately to the south. The fabric is overwhelmingly Victorian and Edwardian terraced housing converted to licensed and unlicensed HMO, supported by a ground-floor retail and personal-services parade along Portswood Road that serves the daily-spend student catchment. The Portswood Road parade itself runs roughly half a mile of continuous in-line retail with national-multiple anchors at the southern Lodge Road end, a long tail of independent convenience operators, takeaways, salons and specialist retail, and a Sainsburys and Lidl convenience offer that draws the wider SO17 resident base.",
        "Transactions in Highfield and Portswood are dominated by HMO landlord acquisition and refinance, owner-occupier independents buying their parade unit, long-hold private investors on the Portswood Road parade and a steady flow of semi-commercial shop-with-flat refinance. The deep-volume zone for our SO17 commercial mortgage book is the £250K to £1M bracket on HMO blocks and £300K to £900K on Portswood Road parade retail and semi-commercial. Pricing 6.5 to 8.5% pa for clean HMO block refinance and 7.0 to 8.5% pa for clean semi-commercial. Refinancing volumes picked up materially through 2025 and 2026 as five-year fixes from 2020 and 2021 matured into a higher base-rate environment, and the HMO portfolio refinance flow has been particularly heavy.",
        "HM Land Registry residential transactions across the SO17 catchment cluster around the Westridge Road, Tennyson Road and University Road Victorian terraces, with the wider SO17 terrace median sitting around £280K to £360K, well above value-end Southampton stock and reflecting the established student-let yield. They are not a direct commercial signal but they confirm a deep working investor and HMO-landlord buyer base which underwrites the rental stack on the licensed HMO block lending most of our SO17 commercial mortgage book sits against. Stamp duty land tax applies on every freehold purchase at the commercial or mixed-use rates, with HMO acquisitions following the residential SDLT scale subject to usual structuring.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Highfield and Portswood (SO17)",
      body:
        "Two live Southampton City Council Idox files anchor the current Highfield and Portswood commercial mortgage pipeline. The Portswood HMO change of use scheme (Ref <strong>25/01478/COU</strong>) covers conversion of a C3 dwelling to a sui generis seven-bedroom HMO on Portswood Road serving the University of Southampton catchment, the canonical SO17 large HMO acquisition file that funds through specialist HMO lenders at 70 to 75% LTV on the rental stack with licensing in place. The wider Portswood Road parade Class E change of use file (Ref <strong>25/01892/FUL</strong>) covers a ground-floor independent retail to Class E flexible commercial repositioning on the trading parade, useful pricing context for the SO17 mixed-use and semi-commercial book that the parade investors and shop-with-flat purchasers fund against. Stamp duty applies at the commercial rates on each freehold acquisition, HMO acquisitions follow the residential SDLT scale subject to usual structuring.",
      refs: [
        {
          ref: "25/01478/COU",
          address: "Portswood Road, Southampton SO17 2FY",
          postcode: "SO17 2FY",
          proposal: "Change of use of C3 dwelling to sui generis HMO with seven bedrooms serving the University of Southampton catchment, canonical SO17 large HMO acquisition file.",
        },
        {
          ref: "25/01892/FUL",
          address: "Portswood Road, Southampton SO17 2NJ",
          postcode: "SO17 2NJ",
          proposal: "Ground-floor independent retail to Class E flexible commercial repositioning on the Portswood Road trading parade, useful pricing context for the SO17 mixed-use and semi-commercial book.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Highfield and Portswood",
      items: [
        { label: "Licensed HMO block (5 to 7 rooms)", detail: "Standard SO17 student HMO archetype in Victorian and Edwardian terrace.", typicalSize: "£300K to £900K facility" },
        { label: "Large HMO block (8 plus rooms)", detail: "Specialist HMO lender pool, licensing and room-count thresholds critical.", typicalSize: "£500K to £1.5M" },
        { label: "HMO portfolio refinance", detail: "Five plus HMO blocks consolidated into a single facility on aggregated ICR.", typicalSize: "£1.5M to £5M" },
        { label: "Portswood Road parade retail", detail: "In-line parade retail freehold with national-multiple and convenience anchors.", typicalSize: "£300K to £900K" },
        { label: "Semi-commercial shop with flat", detail: "Classic Portswood Road shop-with-flat freehold, blended ICR underwriting.", typicalSize: "£250K to £700K" },
        { label: "Small-cap mixed-use block", detail: "Ground-floor F&B or retail with managed student accommodation above on the trading parade.", typicalSize: "£500K to £1.8M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Highfield and Portswood",
      body: 'HMO block finance via <a href="/property-types/hmo-block" class="text-secondary font-medium hover:underline">HMO block</a> and <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on the rental stack at 145% plus ICR. Multi-block portfolio refinance via <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a>. Parade retail investment via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Owner-occupier independent retail via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a>. Shop-with-flat archetype routes through <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a> at blended ICR. Vacant or repositioning parade stock and HMO conversion routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing HMO and parade facilities is the highest-volume single product on the SO17 corridor in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Highfield and Portswood HMO, parade retail and semi-commercial",
      body:
        "Deep across the SO17 student grain. Paragon, Together, Foundation Home Loans, Cambridge and Counties and Aldermore all run active SO17 HMO programmes with different room-count thresholds and licensing comfort, pricing 6.5 to 8.5% pa at 70 to 75% LTV on the rental stack, with Paragon and Cambridge and Counties leading on the larger 8 plus room blocks and the multi-block portfolio refinance flow. <strong>InterBay Commercial</strong> and <strong>Shawbrook</strong> dominate the semi-commercial shop-with-flat book on the Portswood Road parade at 70 to 75% LTV and 7.0 to 8.5% pa on blended ICR around 145%. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on prime Portswood Road parade stock with strong-covenant convenience or national-multiple anchors at 60 to 65% LTV and 6.0 to 7.0% pa, with Allica Bank routinely topping the shortlist on owner-occupier independent retail and small mixed-use freehold where speed and relationship underwriting matter. <strong>Cynergy Bank</strong> covers selected SO17 ground-floor independent F&B trading-business deals where the operator EBITDA underwriting fits. <strong>LendInvest</strong> covers refurbishment, HMO conversion and Class E repositioning bridges. HTB and YBS Commercial take selected SO17 retail and mixed-use deals. Refinancing on a stabilised secondary Portswood parade asset typically prices 7.5 to 8.5% pa at 65 to 70% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["hmo-block", "retail", "semi-commercial", "mixed-use", "pub-restaurant", "office"],
    faqs: [
      {
        question: "What LTV is achievable on a Highfield or Portswood HMO block?",
        answer:
          "Up to 75% LTV on licensed 5 to 7 room HMOs with established occupancy across Paragon, Together, Foundation Home Loans and Cambridge and Counties. Larger 8 plus room HMOs typically cap at 70% LTV through the same lender pool, with selective Aldermore appetite. ICR stress-tested at 145% plus on the rental stack. Pricing 6.5 to 8.5% pa depending on LTV, room count, licence status and SPV history. The 25/01478/COU Portswood Road file at SO17 2FY is exactly this archetype.",
      },
      {
        question: "Can we refinance an SO17 multi-block HMO portfolio?",
        answer:
          'Yes, 5 plus HMO portfolios route through portfolio refinance at aggregated facility pricing with Paragon, <strong>InterBay Commercial</strong>, Together and Cambridge and Counties. Aggregated ICR and licence-count methodology apply at facility size £1.5M to £5M. Pricing typically 7.0 to 8.0% pa at 70 to 75% LTV. Stamp duty applies on each acquisition at the residential or commercial rates as relevant.',
      },
      {
        question: "What LTV is achievable on a Portswood Road parade retail freehold?",
        answer:
          "Up to 70% LTV on let parade retail with a strong-covenant convenience or national-multiple tenant, pricing 6.5 to 7.5% pa. Secondary in-line retail with mixed independent covenants typically caps at 65 to 70% with pricing 7.5 to 8.5% pa. The binding constraint is almost always ICR at 140 to 160% stressed, not headline LTV, and lenders will look closely at the upper-floor HMO or shared-house income mix on mixed-use parade stock.",
      },
      {
        question: "Which lenders run dedicated South Coast student-let desks?",
        answer:
          "Paragon, Together, Foundation Home Loans, Cambridge and Counties and Aldermore all maintain dedicated HMO programmes that take SO17 student HMO deals routinely, each with different room-count thresholds and licensing comfort. <strong>InterBay Commercial</strong> and <strong>Shawbrook</strong> dominate the semi-commercial shop-with-flat book on the Portswood Road parade, and <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the largest parade investment with strong-covenant anchors. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },

  "shirley": {
    slug: "shirley",
    name: "Shirley",
    metaTitle: "Commercial Mortgages Shirley Southampton | Specialist Broker, SO15 SO16",
    metaDescription:
      "Commercial mortgages for Shirley, Southampton (SO15 / SO16), Shirley High Street retail parade, mixed-use upper-floor freehold, suburban offices. 90+ lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Shirley",
      lede:
        "Shirley sits roughly two miles north-west of Southampton city centre and threads SO15 into SO16 along Shirley High Street, Shirley Road and Winchester Road. The fabric is a deep Victorian and Edwardian retail parade with upper-floor flats, workshops and small offices, a strong run of independent retail and convenience operators, and a steady tail of suburban professional firms in mid-rise stock around Romsey Road and Winchester Road. We arrange commercial mortgages for Shirley High Street retail parade investment and refinance, mixed-use upper-floor freehold deals in the SO15 and SO16 catchment, owner-occupier independent retail and trade-counter purchases, and suburban professional office investment along the corridor. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Shirley commercial property market",
      body: [
        "Shirley carries one of the deepest district retail markets in Southampton outside the SO14 city core. Shirley High Street runs roughly a mile of continuous retail parade with national-multiple anchors, a Lidl and Iceland convenience offer, an Asda Shirley superstore at the western end and a long tail of independent retailers, takeaways, salons and convenience operators across the central blocks. Upper-floor stock above the retail parade is overwhelmingly residential, with a meaningful run of converted offices, dental and clinical accommodation, and managed workspace, which is the canonical Shirley mixed-use freehold the SO15 and SO16 investment buyer targets.",
        "Transactions in Shirley are dominated by long-hold private investors on the retail parade, owner-occupier independents buying their high-street unit, and a steady flow of small-cap landlord refinance on the mixed-use upper-floor stock. The deep-volume zone for our Shirley commercial mortgage book is the £300K to £1.2M bracket, in-line retail, mixed-use shop with flat or workspace above, and small parades of two to four units. Pricing 6.5 to 8.5% pa for clean district retail investment on the high street, with strong-covenant convenience operators at the keenest end and secondary parade stock at the wider end. Refinancing volumes picked up materially through 2025 and 2026 as five-year fixes from 2020 and 2021 matured into a higher base-rate environment.",
        "HM Land Registry residential transactions across the SO15 and SO16 catchment cluster around the Howard Road, Bellemoor Road and Hill Lane terraced and semi-detached stock, with the wider Southampton SO15 median sitting around £200K to £260K on terraced and £300K to £380K on semi-detached. They are not a direct commercial signal but they confirm that Shirley continues to absorb a deep run of working-age renter and first-time-buyer supply, which underwrites the ground-floor convenience retail, takeaway and service-led income that most of our Shirley commercial investment lending sits against. Stamp duty land tax applies on every freehold purchase at the commercial or mixed-use rates.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Shirley (SO15 / SO16)",
      body:
        "Two live Southampton City Council Idox files anchor the current Shirley commercial mortgage pipeline. The Shirley High Street retail parade refurbishment (Ref <strong>25/01345/FUL</strong>) covers frontage works and change of use of upper floors to managed flexible workspace with retained ground-floor retail, the canonical Shirley mixed-use repositioning we refinance against on 65 to 70% LTV mixed-use mortgages once stabilised. The Above Bar Street central retail file (Ref <strong>25/00545/COU</strong>) covers a Class E flexible commercial change of use on the SO14 spine and reads as useful pricing context for Shirley because the same Class E flexibility now applies on the SO15 parade and is exactly the kind of file that drives mixed-use repositioning across the corridor. Stamp duty applies at the commercial rates on each acquisition, refinancing is unaffected.",
      refs: [
        {
          ref: "25/01345/FUL",
          address: "Shirley High Street, Southampton SO15 3JE",
          postcode: "SO15 3JE",
          proposal: "Shirley High Street retail parade refurbishment, frontage works and change of use of upper floors to managed flexible workspace with retained ground-floor retail.",
        },
        {
          ref: "25/00545/COU",
          address: "Above Bar Street, Southampton SO14 7DS",
          postcode: "SO14 7DS",
          proposal: "Above Bar Street central retail unit change of use to Class E flexible commercial accommodation with retained heritage frontage, useful Class E pricing context for the SO15 Shirley High Street parade.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Shirley",
      items: [
        { label: "Shirley High Street retail parade", detail: "In-line retail parade freehold across SO15 and SO16, long-hold private investor stock.", typicalSize: "£300K to £1.2M facility" },
        { label: "Mixed-use shop with flat above", detail: "Ground-floor retail or takeaway with one or two upper-floor flats, semi-commercial archetype.", typicalSize: "£250K to £700K" },
        { label: "Managed flexible workspace upper-floor", detail: "Class E flexible workspace above retained ground-floor retail, post-refurb stabilised stock.", typicalSize: "£400K to £1.5M" },
        { label: "Convenience and takeaway operator freehold", detail: "Independent convenience, off-licence and takeaway owner-occupier purchase.", typicalSize: "£300K to £900K" },
        { label: "Suburban professional office", detail: "Mid-rise Grade B office around Romsey Road and Winchester Road, professional service firms.", typicalSize: "£400K to £1.2M" },
        { label: "Trade-counter and SO16 fringe industrial", detail: "Trade-counter and small B2 light industrial on the SO16 boundary, owner-occupier purchase.", typicalSize: "£300K to £900K" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Shirley",
      body: 'Retail parade and mixed-use upper-floor investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Owner-occupier independent retailers and convenience operators via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Shop-with-flat archetype routes through <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a> at blended ICR. Vacant or repositioning parade stock routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. F&B and takeaway trading-business via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a>. Refinancing maturing facilities is the highest-volume single product on the Shirley corridor in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Shirley district retail and mixed-use freehold",
      body:
        "Deep across the Shirley fabric. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on prime Shirley High Street parade stock with strong-covenant convenience anchors at 60 to 65% LTV and 6.0 to 7.0% pa, with Allica Bank routinely topping the shortlist on owner-occupier independent retail and suburban professional office freehold where speed and relationship underwriting matter on £300K to £1.5M deals. <strong>Shawbrook</strong> and <strong>InterBay Commercial</strong> are active on mixed-use upper-floor repositioning, shop-with-flat and small parade investment, with HTB and Cambridge and Counties taking selected SO15 and SO16 retail and mixed-use deals in the £400K to £1.5M bracket. Paragon covers the portfolio-landlord refinance flow where multiple Shirley mixed-use freeholds sit inside the same SPV, and Together and YBS Commercial take selected semi-commercial and trade-counter stock through their broker desks. Refinancing on a stabilised secondary Shirley parade asset typically prices 7.5 to 8.5% pa at 65 to 70% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["retail", "semi-commercial", "office", "mixed-use", "pub-restaurant"],
    faqs: [
      {
        question: "What LTV is achievable on a Shirley High Street retail freehold?",
        answer:
          "Up to 70% LTV on let parade retail with a strong-covenant convenience or national-multiple tenant, pricing 6.5 to 7.5% pa. Secondary in-line retail with mixed independent covenants typically caps at 65 to 70% with pricing 7.5 to 8.5% pa. The binding constraint is almost always ICR at 140 to 160% stressed, not headline LTV, and lenders will look closely at the upper-floor income mix on mixed-use parade stock.",
      },
      {
        question: "Can we get a commercial mortgage on a vacant Shirley parade unit?",
        answer:
          'Yes, through <a href="/services/commercial-bridge-to-let">bridge-to-let</a>. A 12 to 24 month bridge funds acquisition and re-letting, then terms out to investment mortgage post-stabilisation at 65 to 70% LTV. Active strategy on units affected by the kind of retail parade repositioning covered by the 25/01345/FUL application on Shirley High Street.',
      },
      {
        question: "What product fits a Shirley shop with a flat above?",
        answer:
          'Semi-commercial mortgage at blended ICR. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and Together quote to 75% LTV on the classic Shirley High Street shop-with-flat archetype, with blended ICR around 145% on the combined commercial rent and AST income. Pricing 6.5 to 8.5% pa depending on stock quality and SPV history.',
      },
      {
        question: "Which lenders are most active on Shirley owner-occupier independent retail?",
        answer:
          "Allica Bank, <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> all compete on owner-occupier independent retailers buying their high-street unit at 70 to 75% LTV and 6.0 to 7.5% pa, with EBITDA cover at 1.3 to 1.5x. HTB and Cambridge and Counties take the secondary cases where trading history is shorter. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },

  "bitterne": {
    slug: "bitterne",
    name: "Bitterne",
    metaTitle: "Commercial Mortgages Bitterne Southampton | Specialist Broker, SO18 SO19",
    metaDescription:
      "Commercial mortgages for Bitterne, Southampton (SO18 / SO19), Bitterne Triangle district centre retail, suburban offices, regional care home cluster. 90+ lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Bitterne",
      lede:
        "Bitterne sits roughly two and a half miles east of the city centre across the River Itchen and threads SO18 into SO19 around the Bitterne Triangle district shopping centre, West End Road and the Bitterne Road East and West spine. The fabric is a defined district-retail centre anchored by the Bitterne Precinct and Bitterne Triangle with a Sainsburys, Asda, national-multiple and independent retail mix, a steady run of suburban offices and a notable concentration of care homes and elderly-care freeholds across the SO18 and SO19 catchment. We arrange commercial mortgages for Bitterne Triangle district retail investment and refinance, suburban office freehold purchases, owner-occupier independent retail along the parade, and specialist trading-business mortgages for the SO18 and SO19 care home cluster. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Bitterne commercial property market",
      body: [
        "Bitterne carries one of Southampton's most defined district shopping centres and the largest care home concentration east of the Itchen. The Bitterne Triangle district centre at West End Road anchors a tight in-line retail parade with strong-covenant supermarket anchors, national-multiple retail and a long tail of independent operators serving the SO18 and SO19 catchment of roughly 25,000 residents inside a one-mile catchment. The wider Bitterne Road East and Bitterne Road West spine carries a deep run of suburban offices, dental practices, veterinary surgeries and independent retail, while the care home stock concentrates across Thornhill, Sholing and the SO18 fringe with a meaningful cluster of CQC-registered residential and nursing freeholds rated Good and above.",
        "Transactions in Bitterne split cleanly between long-hold private investors on the Bitterne Triangle parade, owner-occupier independents buying their high-street unit, specialist trading-business operators consolidating care home freeholds, and a steady flow of small-cap landlord refinance on the mixed-use upper-floor stock. The deep-volume zone for our Bitterne commercial mortgage book is the £400K to £2M bracket on care home freehold and £300K to £1M on district retail. Pricing 6.5 to 8.5% pa for clean district-centre retail investment with strong-covenant anchors, with secondary parade stock at the wider end and care home freehold at 7.5 to 9.0% pa on operator EBITDA. Refinancing volumes picked up materially through 2025 and 2026 as five-year fixes from 2020 and 2021 matured into a higher base-rate environment, and the care home refinance flow has been particularly heavy.",
        "HM Land Registry residential transactions across the SO18 and SO19 catchment cluster around the Bitterne Triangle, Thornhill Park and Sholing semi-detached and terraced stock, with recent files including Ashurst Mews SO18 at around £165K and Stoddart Avenue SO19 at around £348K. The wider SO19 median sits among the strongest transaction-volume postcodes in Southampton, confirming a deep working-age and retirement renter and owner base which underwrites the district retail catchment and the private-pay component of the care home occupancy that most of our Bitterne specialist trading-business lending sits against. Stamp duty land tax applies at the commercial rates on every freehold purchase.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Bitterne (SO18 / SO19)",
      body:
        "Two live Southampton City Council Idox files anchor the current Bitterne commercial mortgage pipeline. The Bitterne Triangle district centre refurbishment (Ref <strong>25/00945/FUL</strong>) covers frontage works and new F&B accommodation in the SO18 district shopping centre, the canonical Bitterne Triangle repositioning we refinance against on 65 to 70% LTV district retail investment mortgages once tenancies are bedded in. The Woolston riverside light industrial file (Ref <strong>25/00678/FUL</strong>) covers Class B2 workshop and trade-counter accommodation on the Itchen riverfront, the adjacent SO19 file that often reads as comparable pricing context for the trade-counter component of the Bitterne and east-Southampton owner-occupier book. Stamp duty applies at the commercial rates on each acquisition, refinancing is unaffected.",
      refs: [
        {
          ref: "25/00945/FUL",
          address: "Bitterne Triangle, West End Road, Southampton SO18 6TG",
          postcode: "SO18 6TG",
          proposal: "Bitterne district centre retail parade refurbishment, frontage works and new F&B accommodation in the SO18 district shopping centre.",
        },
        {
          ref: "25/00678/FUL",
          address: "Woolston Riverside, Hazel Road, Southampton SO19 7GB",
          postcode: "SO19 7GB",
          proposal: "Woolston riverside light industrial unit refurbishment, Class B2 workshop and trade-counter accommodation on the Itchen riverfront, useful comparable for the SO19 trade-counter freehold component of the Bitterne owner-occupier book.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Bitterne",
      items: [
        { label: "Bitterne Triangle district retail", detail: "In-line district-centre retail freehold with supermarket and national-multiple anchors, SO18 long-hold investor stock.", typicalSize: "£400K to £1.5M facility" },
        { label: "Care home freehold (CQC Good and above)", detail: "Residential and nursing care home freehold across SO18 and SO19, specialist trading-business stock.", typicalSize: "£800K to £3M" },
        { label: "Suburban professional office", detail: "Mid-rise Grade B office stock along Bitterne Road East and West, professional service firms.", typicalSize: "£400K to £1.2M" },
        { label: "Dental and veterinary practice", detail: "Principal-owned dental clinic and veterinary surgery freehold across the SO18 catchment.", typicalSize: "£500K to £1.5M" },
        { label: "Mixed-use parade", detail: "Ground-floor retail with upper-floor flats or workspace across the wider Bitterne Road spine.", typicalSize: "£300K to £900K" },
        { label: "Owner-occupier independent retail", detail: "Independent retailers, convenience and takeaway operators buying their unit on the parade.", typicalSize: "£250K to £700K" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Bitterne",
      body: 'District retail investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Care home freehold via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA, CQC rating and bed-value methodology. Owner-occupier independent retail and professional firms via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Shop-with-flat parade routes through <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a>. Vacant or repositioning parade stock routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing facilities is the highest-volume single product across the SO18 and SO19 catchment in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Bitterne district retail, care home and suburban office",
      body:
        "Deep across the Bitterne fabric, particularly on the care home book. <strong>Shawbrook</strong> runs one of the most active UK care home commercial books and sits at the top of our shortlist on SO18 and SO19 residential and nursing freehold at 60 to 65% LTV and 7.5 to 9.0% pa on EBITDA cover at 1.4 to 1.8x, with HTB and Cambridge and Counties active on multi-site operator refinance and Allica Bank competing on owner-occupier care principals buying their freehold. On district retail, <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on Bitterne Triangle parade stock with strong-covenant supermarket anchors at 60 to 65% LTV and 6.0 to 7.0% pa, with <strong>InterBay Commercial</strong> active on mixed-use parade stock and Paragon covering portfolio-landlord refinance on multiple SO18 freeholds inside the same SPV. Together and YBS Commercial take selected semi-commercial deals where the trading record fits each lender's policy. Refinancing on a stabilised secondary Bitterne parade asset typically prices 7.5 to 8.5% pa at 65 to 70% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["retail", "healthcare-care-home", "semi-commercial", "office", "mixed-use"],
    faqs: [
      {
        question: "What CQC rating do Bitterne care home lenders need?",
        answer:
          "Generally Good or above. Requires Improvement can still fund at 50 to 60% LTV with a clear remediation plan and a strong operator track record. Inadequate is unfundable until rating recovers. Shawbrook, HTB and Cambridge and Counties dominate the SO18 and SO19 care home book at 60 to 65% LTV and 7.5 to 9.0% pa, with bed-value methodology and EBITDA cover at 1.4 to 1.8x driving the underwriting. Stamp duty applies at the commercial rates on the freehold purchase.",
      },
      {
        question: "What LTV is achievable on a Bitterne Triangle district retail freehold?",
        answer:
          "Up to 70% LTV on let parade retail with a strong-covenant supermarket or national-multiple anchor, pricing 6.5 to 7.5% pa. Secondary in-line retail with mixed independent covenants typically caps at 65 to 70% with pricing 7.5 to 8.5% pa. The binding constraint is almost always ICR at 140 to 160% stressed, not headline LTV.",
      },
      {
        question: "Can we refinance a multi-site SO18 and SO19 care group?",
        answer:
          'Yes. Multi-site operators consolidating two or more care home freeholds onto a single facility route through portfolio refinance with <strong>Shawbrook</strong>, HTB and Cambridge and Counties. Aggregated EBITDA cover and bed-value methodology apply at facility size £3M to £10M. The kind of asset-management capex covered by the 25/00945/FUL Bitterne Triangle scheme also features in the underwriting picture where care homes sit inside the same wider district catchment.',
      },
      {
        question: "Which lenders are most active on Bitterne owner-occupier independent retail?",
        answer:
          "Allica Bank, <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> all compete on owner-occupier independent retailers buying their Bitterne Road unit at 70 to 75% LTV and 6.0 to 7.5% pa, with EBITDA cover at 1.3 to 1.5x. HTB and Cambridge and Counties take the secondary cases where trading history is shorter or stock is on the SO19 secondary parade. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },

  "bassett-lordswood": {
    slug: "bassett-lordswood",
    name: "Bassett and Lordswood",
    metaTitle: "Commercial Mortgages Bassett and Lordswood Southampton | Specialist Broker, SO16",
    metaDescription:
      "Commercial mortgages for Bassett and Lordswood, Southampton (SO16), Burgess Road professional services, dental and medical practice cluster, University Hospital Southampton halo. 90+ lender panel.",
    hero: {
      h1: "Commercial Mortgages Bassett and Lordswood",
      lede:
        "Bassett and Lordswood sit roughly three miles north of Southampton city centre and anchor the affluent SO16 suburb, threading Burgess Road, The Avenue and Lordswood Lane through one of the strongest dental and medical practice clusters on the South Coast. The fabric is a mature interwar and post-war professional suburb with a deep neighbourhood retail offer, a substantial run of converted detached houses operating as dental, GP and specialist medical clinics, and a notable concentration of professional offices and consultancy firms serving the University Hospital Southampton catchment and the wider University of Southampton spillover. We arrange commercial mortgages for professional services office freehold purchases, dental and medical practice principal-led acquisitions, neighbourhood retail and semi-commercial parade deals, and the specialist Lordswood Lane healthcare freehold stock. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Bassett and Lordswood commercial property market",
      body: [
        "Bassett and Lordswood carry one of Southampton's most affluent and most professionally-anchored suburbs. The University Hospital Southampton halo, with the trust operating as one of the UK's largest teaching hospitals and the largest single employer in SO16, drives a dense run of private healthcare freeholds across Burgess Road, The Avenue and Lordswood Lane including the Spire and Nuffield private hospital footprint, a substantial cluster of CQC-registered dental practices, GP surgeries, specialist medical clinics and consultant rooms. Professional services follow the healthcare cluster, with accountancy, legal, financial planning and consultancy firms taking small floors of Grade B office in converted detached houses and purpose-built suburban office stock along Burgess Road and at the Bassett Avenue and The Avenue junctions.",
        "Transactions in Bassett and Lordswood split between owner-occupier dental and medical principals buying their freehold off a retiring vendor or partnership, professional services owner-occupier purchase of small floors of 1,500 to 4,000 sq ft, long-hold private investor purchase of the neighbourhood retail parade and a steady flow of small-cap landlord refinance on the mixed-use upper-floor stock. The deep-volume zone for our Bassett and Lordswood commercial mortgage book is the £500K to £2M bracket on dental and medical freehold and £400K to £1.5M on professional office. Pricing 6.0 to 7.5% pa for clean owner-occupier dental and medical with strong NHS UDA contract value or private fee history, and 6.5 to 8.0% pa for clean Grade B professional office investment. Refinancing volumes picked up materially through 2025 and 2026 as five-year fixes from 2020 and 2021 matured into a higher base-rate environment.",
        "HM Land Registry residential transactions across the SO16 catchment cluster around the Bassett Green, Chilworth and Highfield boundary stock, with the wider SO16 detached median sitting around £475K to £600K, well above the Southampton average. They are not a direct commercial signal but they confirm that Bassett and Lordswood continue to absorb a deep run of affluent professional and consultant resident supply, which underwrites the private-pay component of the dental, medical and specialist healthcare income that most of our Bassett and Lordswood commercial lending sits against. Stamp duty land tax applies on every freehold purchase at the commercial rates.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Bassett and Lordswood (SO16)",
      body:
        "Two live Southampton City Council Idox files anchor the current Bassett and Lordswood commercial mortgage pipeline. The Burgess Road professional services office scheme (Ref <strong>25/00812/FUL</strong>) covers new Grade B office accommodation serving the SO16 dental and medical practice cluster and the University Hospital Southampton halo, the canonical Bassett professional-services repositioning we refinance against on owner-occupier and 65 to 70% LTV office investment mortgages once tenancies are bedded in. The Lordswood Lane neighbourhood retail scheme (Ref <strong>25/00145/FUL</strong>) covers a new dental practice and healthcare accommodation alongside convenience retail in the SO16 affluent suburb, the textbook dental freehold acquisition file we fund through specialist healthcare trading-business mortgages on EBITDA cover. Stamp duty applies at the commercial rates on each acquisition, refinancing is unaffected.",
      refs: [
        {
          ref: "25/00812/FUL",
          address: "Burgess Road, Bassett, Southampton SO16 7AR",
          postcode: "SO16 7AR",
          proposal: "Bassett professional services office scheme, new Grade B office accommodation serving the SO16 dental and medical practice cluster and University Hospital Southampton halo.",
        },
        {
          ref: "25/00145/FUL",
          address: "Lordswood Lane, Southampton SO16 8FF",
          postcode: "SO16 8FF",
          proposal: "Lordswood neighbourhood retail scheme, new dental practice and healthcare accommodation alongside convenience retail in the SO16 affluent suburb.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Bassett and Lordswood",
      items: [
        { label: "Dental practice freehold", detail: "Principal-owned dental clinic purchase across Burgess Road, The Avenue and Lordswood Lane.", typicalSize: "£500K to £2M facility" },
        { label: "GP surgery and specialist medical clinic", detail: "Owner-occupier GP partnership and specialist medical practice freehold inside the UHS halo.", typicalSize: "£700K to £2.5M" },
        { label: "Burgess Road Grade B professional office", detail: "Mid-rise professional office accommodation, professional services and consultancy firms.", typicalSize: "£400K to £1.5M" },
        { label: "Converted-house consultant rooms", detail: "Detached and semi-detached property converted to consultant rooms, dental and clinical accommodation.", typicalSize: "£500K to £1.5M" },
        { label: "Lordswood Lane neighbourhood retail", detail: "Convenience retail parade with healthcare accommodation in the SO16 affluent catchment.", typicalSize: "£300K to £900K" },
        { label: "Veterinary surgery freehold", detail: "Principal-owned veterinary practice freehold in the SO16 catchment.", typicalSize: "£400K to £1.2M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Bassett and Lordswood",
      body: 'Dental and medical practice freehold routes via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on EBITDA plus NHS UDA contract value or private fee history. Owner-occupier professional services via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Grade B office investment via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Neighbourhood retail parade routes through <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a> on blended ICR. Vacant or repositioning healthcare stock routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing facilities is the highest-volume single product in the SO16 affluent catchment in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Bassett and Lordswood healthcare and professional office",
      body:
        "Deep across the SO16 affluent fabric. <strong>Allica</strong> Bank's health desk and HTB sit at the top of our shortlist on dental and medical practice principal-led acquisitions at 70 to 80% LTV on the bricks plus NHS UDA contract value or private fee history, with pricing 6.0 to 7.5% pa on operator EBITDA cover at 1.3 to 1.5x. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on Grade B professional services office investment along Burgess Road and The Avenue at 60 to 65% LTV and 6.0 to 7.0% pa, with their relationship desks fully active inside the UHS catchment. <strong>Shawbrook</strong> covers the larger consultant-rooms and specialist medical practice freehold deals where the asset has been converted from residential and lender comfort with mixed building consents matters. <strong>InterBay Commercial</strong> takes the Lordswood Lane mixed-use parade and shop-with-flat stock, with Cambridge and Counties active on multi-partnership healthcare freehold and YBS Commercial on selected office investment. Paragon covers portfolio-landlord refinance across multiple SO16 freeholds inside the same SPV, and Together takes the secondary semi-commercial and converted-house cases. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["healthcare-care-home", "office", "retail", "semi-commercial", "mixed-use"],
    faqs: [
      {
        question: "Best lender for a Bassett or Lordswood dental practice?",
        answer:
          "Allica Bank's health desk and HTB both have meaningful flexibility on principal-led dental in the SO16 catchment and use NHS UDA contract value or private fee history as additional security alongside the bricks. LTV to 80% on the bricks plus contract value and pricing 6.0 to 7.5% pa on EBITDA cover at 1.3 to 1.5x. <strong>Shawbrook</strong> takes the larger and more complex specialist medical practice cases where the freehold has been converted from residential.",
      },
      {
        question: "What rate on Burgess Road owner-occupier professional office?",
        answer:
          "Currently 6.0 to 7.0% pa for strong-covenant professional service firms buying their freehold at 70 to 75% LTV with EBITDA cover at 1.3 to 1.5x. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong>, <strong>Santander</strong> and Allica Bank all compete on the SO16 professional services owner-occupier book, and the relationship underwriting that Allica brings often wins on speed for owner-managed practices.",
      },
      {
        question: "Can we get a commercial mortgage on a converted-house consultant rooms freehold?",
        answer:
          'Yes. <strong>Shawbrook</strong>, HTB and Cambridge and Counties all take converted-house consultant rooms inside the UHS halo where the asset has changed use from residential. LTV typically 65 to 70% at 6.5 to 7.5% pa on operator EBITDA cover. The Lordswood Lane file (Ref 25/00145/FUL) and Burgess Road scheme (Ref 25/00812/FUL) both sit inside this archetype.',
      },
      {
        question: "Which lenders dominate the Bassett and Lordswood healthcare cluster?",
        answer:
          "Allica Bank's health desk leads on dental and GP partnership freehold, with HTB and <strong>Shawbrook</strong> active on specialist medical and consultant rooms, Cambridge and Counties on multi-partnership stock and <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> on the larger Grade B professional office investment. Paragon covers portfolio-landlord refinance across multiple SO16 freeholds inside the same SPV. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },

  "woolston-sholing": {
    slug: "woolston-sholing",
    name: "Woolston and Sholing",
    metaTitle: "Commercial Mortgages Woolston and Sholing Southampton | Specialist Broker, SO19",
    metaDescription:
      "Commercial mortgages for Woolston and Sholing, Southampton (SO19), Itchen riverside light industrial, retail parades, trade-counter, marine-trade freehold. 90+ lender panel.",
    hero: {
      h1: "Commercial Mortgages Woolston and Sholing",
      lede:
        "Woolston and Sholing sit on the east bank of the River Itchen across the Itchen Bridge from the city centre and anchor the SO19 riverside light industrial and district retail belt. The fabric is a defined working waterfront with the Centenary Quay regeneration and the Woolston Riverside light industrial cluster on Hazel Road, a deep run of Victorian and Edwardian terraced retail parades along Portsmouth Road, Bridge Road and Bitterne Manor, a sizeable marine-trade and small-boat services concentration along the riverfront and a steady tail of small-cap owner-occupier industrial across the Sholing and Thornhill fringe. We arrange commercial mortgages for Class B2 workshop and trade-counter freehold purchases and refinance on the Itchen riverside, Portsmouth Road and Bridge Road parade retail investment, marine-trade and small-boat services owner-occupier deals, and the mixed-use upper-floor stock through the SO19 catchment. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Woolston and Sholing commercial property market",
      body: [
        "Woolston and Sholing carry one of Southampton's most defined working-waterfront commercial markets and one of the deepest small-cap industrial belts in SO19. The Itchen riverside belt along Hazel Road, Centenary Quay and Woolston Riverside anchors a tight Class B2 workshop, trade-counter and small marine-services cluster, supported by the recent Centenary Quay regeneration that has reshaped the waterfront edge into a mixed-use working zone with light industrial, marine-trade SME premises and ground-floor retail beneath managed residential. The wider Portsmouth Road, Bridge Road and Bitterne Manor parade spine carries a deep run of Victorian and Edwardian terraced retail with upper-floor flats, a long tail of independent convenience operators, takeaways and salons, and a notable concentration of small-cap mixed-use freeholds across the SO19 catchment.",
        "Transactions in Woolston and Sholing split cleanly between owner-occupier SME industrial purchase on the Hazel Road and Woolston Riverside cluster, long-hold private investors on the Portsmouth Road and Bridge Road parade, marine-trade and small-boat services operators consolidating their freeholds, and a steady flow of small-cap landlord refinance on the mixed-use upper-floor stock. The deep-volume zone for our Woolston and Sholing commercial mortgage book is the £300K to £1.2M bracket on light industrial freehold and £250K to £700K on parade retail and semi-commercial. Pricing 6.0 to 7.5% pa for clean owner-occupier B2 industrial on the Itchen riverside, with strong-covenant SME owner-occupiers at the keenest end and secondary marine-services freehold at the wider end. Semi-commercial parade stock prices 7.0 to 8.5% pa. Refinancing volumes picked up materially through 2025 and 2026 as five-year fixes from 2020 and 2021 matured into a higher base-rate environment.",
        "HM Land Registry residential transactions across the SO19 catchment cluster around the Centenary Quay, Sholing and Thornhill terraced and semi-detached stock, with recent files including a Stoddart Avenue SO19 transaction at around £348K and the wider SO19 terrace median sitting around £230K to £290K. They are not a direct commercial signal but they confirm that Woolston and Sholing continue to absorb a deep run of working-age renter and first-time-buyer supply, which underwrites the ground-floor convenience retail, takeaway and service-led income that most of our SO19 commercial investment lending sits against. Stamp duty land tax applies on every freehold purchase at the commercial or mixed-use rates.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Woolston and Sholing (SO19)",
      body:
        "Two live Southampton City Council Idox files anchor the current Woolston and Sholing commercial mortgage pipeline. The Woolston Riverside light industrial scheme (Ref <strong>25/00678/FUL</strong>) covers Class B2 workshop and trade-counter accommodation on the Itchen riverfront at Hazel Road, the canonical SO19 light industrial freehold candidate that funds at 70 to 75% LTV through Allica Bank, HTB and YBS Commercial on owner-occupier EBITDA cover. The Portsmouth Road parade Class E change of use file (Ref <strong>25/00845/FUL</strong>) covers a ground-floor independent retail to Class E flexible commercial repositioning on the SO19 trading parade, useful pricing context for the parade retail and semi-commercial book that the shop-with-flat purchasers and parade investors fund against. Stamp duty applies at the commercial rates on each freehold acquisition, refinancing is unaffected.",
      refs: [
        {
          ref: "25/00678/FUL",
          address: "Woolston Riverside, Hazel Road, Southampton SO19 7GB",
          postcode: "SO19 7GB",
          proposal: "Woolston Riverside light industrial unit, Class B2 workshop and trade-counter accommodation on the Itchen riverfront, canonical SO19 owner-occupier industrial candidate.",
        },
        {
          ref: "25/00845/FUL",
          address: "Portsmouth Road, Woolston, Southampton SO19 9AS",
          postcode: "SO19 9AS",
          proposal: "Ground-floor independent retail to Class E flexible commercial repositioning on the Portsmouth Road parade, useful pricing context for the SO19 parade retail and semi-commercial book.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Woolston and Sholing",
      items: [
        { label: "Itchen riverside Class B2 workshop", detail: "Owner-occupier light industrial freehold on Hazel Road and Woolston Riverside, SME purchase.", typicalSize: "£300K to £1.2M facility" },
        { label: "Trade-counter and B8 storage", detail: "Trade-counter retail and small B8 storage in the SO19 riverside and Sholing fringe industrial estates.", typicalSize: "£300K to £1M" },
        { label: "Marine-trade and small-boat services", detail: "Owner-occupier marine-trade SME, boatyard service and chandlery freehold along the Itchen riverfront.", typicalSize: "£250K to £900K" },
        { label: "Portsmouth Road parade retail", detail: "Victorian and Edwardian in-line retail parade freehold with upper-floor flats, long-hold investor stock.", typicalSize: "£250K to £700K" },
        { label: "Semi-commercial shop with flat", detail: "Classic SO19 parade shop-with-flat freehold, blended ICR underwriting.", typicalSize: "£200K to £600K" },
        { label: "Mixed-use parade block", detail: "Ground-floor retail or takeaway with one or two upper-floor flats on Portsmouth Road or Bridge Road.", typicalSize: "£300K to £900K" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Woolston and Sholing",
      body: 'Owner-occupier industrial routes via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Trade-counter and B8 storage investment via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Marine-trade SME freehold via owner-occupier mortgage. Parade retail investment via commercial investment mortgage on ICR. Shop-with-flat archetype routes through <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a> at blended ICR. Vacant or repositioning parade stock and industrial unit refurbishment routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing facilities through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product across the SO19 catchment in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Woolston and Sholing riverside industrial, parade retail and semi-commercial",
      body:
        "Deep across the SO19 working-waterfront fabric. Allica Bank, HTB and YBS Commercial are the most active light industrial owner-occupier lenders along the Hazel Road and Woolston Riverside cluster, quoting to 75% LTV at 6.0 to 7.5% pa on EBITDA cover at 1.3 to 1.5x. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the larger trade-counter and B8 storage investment with strong-covenant SME or national-multiple tenants at 60 to 65% LTV and 6.5 to 7.5% pa, with HSBC UK Business Banking covering selected SO19 marine-trade and SME deals. <strong>Shawbrook</strong> and <strong>InterBay Commercial</strong> are active on parade retail investment, mixed-use parade stock and semi-commercial shop-with-flat freehold at 70 to 75% LTV and 7.0 to 8.5% pa on blended ICR around 145%. Cambridge and Counties takes selected riverside marine-trade and small-cap industrial freehold deals where the operator track record fits. Paragon covers portfolio-landlord refinance across multiple SO19 parade freeholds inside the same SPV. <strong>LendInvest</strong> covers refurbishment and unit-repositioning bridges on the Centenary Quay edge. Together and Foundation Home Loans take selected secondary semi-commercial and small-cap mixed-use deals. Refinancing on a stabilised secondary SO19 parade asset typically prices 7.5 to 8.5% pa at 65 to 70% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["industrial-warehouse", "retail", "semi-commercial", "mixed-use", "mot-garage-petrol", "office"],
    faqs: [
      {
        question: "What LTV is achievable on a Woolston Riverside light industrial freehold?",
        answer:
          "Up to 75% LTV via Allica Bank, HTB and YBS Commercial on owner-occupier B2 workshop and trade-counter freehold. EBITDA cover at 1.3 to 1.5x is the binding constraint, pricing 6.0 to 7.5% pa for strong-covenant SME purchasers. The 25/00678/FUL Hazel Road file is exactly this archetype. Refinancing maturing five-year fixes is currently the highest-volume use case across the SO19 industrial belt.",
        },
      {
        question: "Can we get a commercial mortgage on a Portsmouth Road parade retail unit?",
        answer:
          "Up to 70% LTV on let parade retail with a strong-covenant convenience or national-multiple tenant, pricing 6.5 to 7.5% pa with <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong>. Secondary in-line retail with mixed independent covenants typically caps at 65 to 70% LTV with pricing 7.5 to 8.5% pa via <strong>Shawbrook</strong> and <strong>InterBay Commercial</strong>. The binding constraint is almost always ICR at 140 to 160% stressed, not headline LTV.",
      },
      {
        question: "What product fits a Woolston shop with a flat above?",
        answer:
          'Semi-commercial mortgage at blended ICR. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and Together quote to 75% LTV on the classic SO19 parade shop-with-flat archetype, with blended ICR around 145% on the combined commercial rent and AST income. Pricing 7.0 to 8.5% pa depending on stock quality and SPV history.',
      },
      {
        question: "Which lenders are most active on SO19 marine-trade and small-boat services freehold?",
        answer:
          "Allica Bank, HTB and Cambridge and Counties all compete on owner-occupier marine-trade SME freehold along the Itchen riverfront at 70 to 75% LTV and 6.5 to 7.5% pa with EBITDA cover at 1.3 to 1.5x. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong>, <strong>Santander</strong> and HSBC UK Business Banking take the larger SO19 marine-trade SME deals where the trading record and covenant are strong. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },

  "adanac-park-nursling": {
    slug: "adanac-park-nursling",
    name: "Adanac Park and Nursling",
    metaTitle: "Commercial Mortgages Adanac Park and Nursling Southampton | M271 Logistics Broker, SO16",
    metaDescription:
      "Commercial mortgages for Adanac Park and Nursling, Southampton (SO16), M271 Class B8 logistics warehouse, ABP container terminal supply chain, Ordnance Survey HQ corridor, trade-counter and B2 industrial. 90+ lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Adanac Park and Nursling",
      lede:
        "Adanac Park and Nursling sit at the north-western edge of Southampton in SO16 along the M271 motorway corridor, anchoring the deepest single industrial and logistics market on the central Solent. The fabric is master-planned business park, modern Class B8 logistics warehouse, B2 light industrial, trade-counter and the Ordnance Survey UK headquarters at Adanac Drive, supported by the Associated British Ports container terminal supply chain immediately to the south and the wider Solent logistics corridor that extends east to Portsmouth. We arrange commercial mortgages for SO16 Class B8 logistics warehouse investment and owner-occupier purchase, B2 light industrial freehold purchase on the Nursling Industrial Estate and adjacent units, trade-counter and small B8 storage freehold deals, and the Ordnance Survey supply-chain office-to-warehouse mixed stock that funds through institutional and challenger-bank investment lending. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Adanac Park and Nursling commercial property market",
      body: [
        "Adanac Park and Nursling carry the deepest single industrial and logistics commercial market in Southampton and one of the largest single B8 distribution clusters on the South Coast. The M271 corridor between Adanac Park, Nursling Industrial Estate and the Test Valley fringe runs roughly two miles of continuous modern logistics warehouse, B2 light industrial, trade-counter and supply-chain accommodation, anchored by the Ordnance Survey UK headquarters at Adanac Drive and a Solent-wide distribution catchment that draws on the Associated British Ports container terminal at Western Docks immediately south. The wider Solent logistics corridor extends east through Hedge End and West End, the M27 spine through Eastleigh Borough and on to Portsmouth, giving Adanac Park a structural position inside the largest single distribution catchment between the M25 ring and the South West.",
        "Transactions in Adanac Park and Nursling are dominated by long-hold institutional and pension-fund investors on the largest modern Class B8 sheds, owner-occupier SME industrial purchase on the Nursling Industrial Estate B2 stock, regional and national distribution operators consolidating logistics freeholds, and a steady flow of trade-counter and small B8 storage owner-occupier acquisition by Solent supply-chain businesses. The deep-volume zone for our Adanac Park and Nursling commercial mortgage book is the £500K to £4M bracket on B8 logistics and B2 industrial freehold, with the largest single-let modern logistics sheds extending to £5M and above. Pricing 6.0 to 7.0% pa for clean Class B8 logistics investment with strong-covenant national distribution tenants and 6.0 to 7.5% pa for owner-occupier SME B2 light industrial at 70 to 75% LTV. Refinancing volumes picked up materially through 2025 and 2026 as five-year fixes from 2020 and 2021 matured.",
        "HM Land Registry residential transactions across the wider SO16 catchment cluster around the Nursling, Rownhams and Test Valley fringe semi-detached and detached stock, with the wider SO16 median above the Southampton average. They are not a direct commercial signal but they confirm a deep working-age SME-operator and logistics-manager catchment base that underwrites the labour-shed economics of the Adanac Park and Nursling B8 logistics market. Stamp duty land tax applies at the commercial rates on every freehold purchase across the corridor.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Adanac Park and Nursling (SO16)",
      body:
        "Two live Southampton City Council and Test Valley Borough Council Idox files anchor the current Adanac Park and Nursling commercial mortgage pipeline. The Adanac Park Class B8 logistics scheme (Ref <strong>25/01212/FUL</strong>) covers new modern Class B8 logistics warehouse accommodation alongside ancillary office and yard along Adanac Drive, the canonical SO16 institutional logistics freehold candidate that funds through long-hold investment lending at 60 to 65% LTV with strong-covenant national distribution tenants or owner-occupier B8 SME on 70 to 75% LTV. The Nursling Industrial Estate B2 light industrial scheme (Ref <strong>25/01078/FUL</strong>) covers a refurbishment and extension of Class B2 workshop and trade-counter accommodation on the Nursling Industrial Estate, the canonical SO16 owner-occupier B2 freehold candidate funded through challenger-bank industrial lending. Stamp duty applies at the commercial rates on each freehold acquisition, refinancing is unaffected.",
      refs: [
        {
          ref: "25/01212/FUL",
          address: "Adanac Park, Adanac Drive, Nursling, Southampton SO16 0AS",
          postcode: "SO16 0AS",
          proposal: "Adanac Park Class B8 logistics scheme, new modern Class B8 logistics warehouse accommodation alongside ancillary office and yard along Adanac Drive serving the Solent distribution corridor.",
        },
        {
          ref: "25/01078/FUL",
          address: "Nursling Industrial Estate, Nursling, Southampton SO16 0YA",
          postcode: "SO16 0YA",
          proposal: "Nursling Industrial Estate Class B2 light industrial refurbishment and extension, workshop and trade-counter accommodation for owner-occupier SME and supply-chain tenants.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Adanac Park and Nursling",
      items: [
        { label: "Modern Class B8 logistics warehouse", detail: "Single-let modern logistics shed on Adanac Park with strong-covenant national distribution tenant.", typicalSize: "£2M to £8M facility" },
        { label: "Nursling Industrial Estate B2 light industrial", detail: "Owner-occupier B2 workshop, trade-counter and SME industrial freehold on the Nursling estate.", typicalSize: "£400K to £1.8M" },
        { label: "Trade-counter and small B8 storage", detail: "Trade-counter retail and small B8 self-storage freehold across the M271 corridor.", typicalSize: "£400K to £1.5M" },
        { label: "Supply-chain office to warehouse", detail: "Ordnance Survey supply-chain mixed office and warehouse stock, owner-occupier and investment.", typicalSize: "£600K to £2.5M" },
        { label: "Multi-let industrial estate investment", detail: "Multi-let smaller-unit B2 and B8 industrial estate investment freehold.", typicalSize: "£1M to £4M" },
        { label: "Logistics yard and HGV-accessible site", detail: "HGV-accessible logistics yard and operating-centre freehold along the M271 spine.", typicalSize: "£500K to £2M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Adanac Park and Nursling",
      body: 'Class B8 logistics investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Owner-occupier B2 light industrial and SME purchase via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Trade-counter and B8 storage via commercial investment mortgage on ICR. Multi-let industrial estate investment via commercial investment mortgage. Vacant or repositioning industrial stock and yard repositioning routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing development finance and five-year fixes through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product across the SO16 logistics corridor in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Adanac Park and Nursling logistics, B2 industrial and trade-counter",
      body:
        "Deep across the SO16 M271 logistics fabric. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the largest modern Class B8 logistics investment with strong-covenant national distribution tenants at 60 to 65% LTV and 6.0 to 7.0% pa, with their relationship desks active inside the Adanac Park institutional pattern. Allica Bank, HTB and YBS Commercial sit at the top of the shortlist on Nursling Industrial Estate owner-occupier B2 light industrial at 70 to 75% LTV and 6.0 to 7.5% pa on EBITDA cover at 1.3 to 1.5x, with Cambridge and Counties active on multi-let industrial estate investment and trade-counter freehold. <strong>Shawbrook</strong> covers the larger multi-let B2 and B8 estate investment and the institutional refinance pipeline at 60 to 65% LTV. <strong>InterBay Commercial</strong> and Paragon take selected industrial-fringe mixed-use and portfolio-landlord deals where multiple SO16 industrial freeholds sit inside the same SPV. <strong>LendInvest</strong> covers refurbishment and bridge-to-let on industrial repositioning. <strong>Cynergy Bank</strong> takes selective SO16 mixed-use industrial deals. Together and Foundation Home Loans take selected secondary B2 and trade-counter cases. Refinancing on a stabilised Class B8 logistics asset typically prices 6.0 to 7.0% pa at 60 to 65% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["industrial-warehouse", "office", "retail", "mixed-use", "mot-garage-petrol", "semi-commercial"],
    faqs: [
      {
        question: "What LTV is achievable on an Adanac Park Class B8 logistics warehouse investment?",
        answer:
          "Up to 65% LTV on let modern Class B8 logistics with a strong-covenant national distribution tenant. Pricing 6.0 to 7.0% pa with <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong>, <strong>Santander</strong> and <strong>Shawbrook</strong> competing keenly inside the institutional logistics pattern. The 25/01212/FUL Adanac Drive scheme is exactly this archetype. The binding constraint is ICR at 140 to 160% stressed on the lease tail and covenant strength rather than headline LTV.",
      },
      {
        question: "Can we get a commercial mortgage on a Nursling Industrial Estate B2 owner-occupier freehold?",
        answer:
          "Yes, up to 75% LTV via Allica Bank, HTB and YBS Commercial on owner-occupier B2 workshop, trade-counter and SME industrial freehold across the Nursling Industrial Estate. EBITDA cover at 1.3 to 1.5x, pricing 6.0 to 7.5% pa. The 25/01078/FUL Nursling scheme is exactly this archetype. Refinancing maturing five-year fixes is currently the highest-volume use case across the SO16 industrial belt.",
      },
      {
        question: "Which lenders run dedicated South Coast logistics desks?",
        answer:
          "<strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong>, <strong>Santander</strong> Commercial and <strong>Shawbrook</strong> all maintain South Coast regional teams active on the largest Adanac Park and Solent corridor B8 logistics deals. Allica Bank, HTB, Cambridge and Counties and YBS Commercial cover the £400K to £2.5M owner-occupier B2 and trade-counter end. We use those desks for SO16 deals where local knowledge of the M271 access pattern, the ABP container-terminal supply-chain economics and the Ordnance Survey adjacency carry weight in underwriting. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
      {
        question: "Can we refinance a multi-let SO16 industrial estate?",
        answer:
          "Yes. Multi-let B2 and B8 industrial estate investment funds through <strong>Shawbrook</strong>, Cambridge and Counties and selected challenger desks at 65 to 70% LTV and 6.5 to 7.5% pa on aggregated ICR. <strong>InterBay Commercial</strong> and Paragon cover portfolio-landlord refinance where multiple SO16 industrial freeholds sit inside the same SPV. The asset-management capex covered by the 25/01078/FUL Nursling scheme also features in the refinance underwriting picture.",
      },
    ],
  },

  "hedge-end-west-end": {
    slug: "hedge-end-west-end",
    name: "Hedge End and West End",
    metaTitle: "Commercial Mortgages Hedge End and West End Southampton | M27 J7 Broker, SO30",
    metaDescription:
      "Commercial mortgages for Hedge End and West End, Southampton (SO30), Hedge End out-of-town retail and business park, M27 J7 logistics, Eastleigh Borough fringe office, trade-counter and B8 industrial. 90+ lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Hedge End and West End",
      lede:
        "Hedge End and West End sit immediately east of Southampton on the M27 motorway corridor at Junction 7 inside Eastleigh Borough Council in SO30, anchoring one of the deepest out-of-town retail and business-park markets on the South Coast. The fabric is master-planned out-of-town retail at Hedge End Retail Park with B&Q, Marks and Spencer, Sainsburys and Hedge End Village anchors, a substantial Hedge End business-park spine running modern Grade B office, B8 distribution and trade-counter accommodation, and the West End Local Plan area carrying neighbourhood retail and small-cap mixed-use. We arrange commercial mortgages for SO30 out-of-town retail park investment and refinance, Hedge End business-park office and B8 distribution freehold purchase, trade-counter and SME industrial owner-occupier deals, and the West End neighbourhood retail and mixed-use freehold stock. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Hedge End and West End commercial property market",
      body: [
        "Hedge End and West End carry the deepest out-of-town retail and business-park commercial market east of Southampton and one of the strongest single retail-park and logistics catchments on the M27 corridor inside Eastleigh Borough Council planning jurisdiction. Hedge End Retail Park at Charles Watts Way anchors a strong out-of-town retail offer with B&Q, Marks and Spencer, Next, Boots and Sainsburys, supported by Hedge End Village retail core to the east and the M27 J7 immediate access that draws a wider catchment from Eastleigh, Botley, Bishops Waltham and the Solent commuter ring. The Hedge End business-park spine along Charles Watts Way, Tollbar Way and Lower Northam Road carries a deep run of modern Grade B office, B8 distribution, trade-counter and small-cap industrial accommodation, with national and regional supply-chain occupiers active across the SO30 footprint.",
        "Transactions in Hedge End and West End split cleanly between long-hold institutional and pension-fund investors on the largest retail-park lots, owner-occupier SME industrial and office purchase across the business-park spine, regional distribution operators consolidating B8 freeholds, and a steady flow of small-cap landlord refinance on the West End neighbourhood retail and mixed-use stock. The deep-volume zone for our Hedge End and West End commercial mortgage book is the £500K to £3M bracket on business-park office and B8 industrial freehold and £400K to £1.5M on trade-counter and SME industrial. Pricing 6.0 to 7.0% pa for clean retail park investment with strong-covenant national anchors and 6.0 to 7.5% pa for owner-occupier SME B2 light industrial at 70 to 75% LTV. Refinancing volumes picked up materially through 2025 and 2026 as five-year fixes from 2020 and 2021 matured.",
        "HM Land Registry residential transactions across the SO30 Eastleigh Borough catchment cluster around the Hedge End, West End and Botley semi-detached and detached stock, with the wider SO30 median sitting at the upper end of the Southampton catchment. They are not a direct commercial signal but they confirm a deep affluent commuter and SME-operator catchment base which underwrites the daily-spend retail park economics and the labour-shed catchment for the SO30 business-park B8 distribution market. Stamp duty land tax applies at the commercial rates on every freehold purchase across the corridor.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Hedge End and West End (SO30)",
      body:
        "Two live Eastleigh Borough Council Idox files anchor the current Hedge End and West End commercial mortgage pipeline. The Hedge End Business Park scheme (Ref <strong>25/00278/FUL</strong>) covers new Grade B office accommodation alongside ancillary B8 distribution on the Charles Watts Way business-park spine, the canonical SO30 institutional business-park freehold candidate that funds through long-hold investment lending at 60 to 65% LTV with strong-covenant supply-chain tenants or owner-occupier SME on 70 to 75% LTV. The Hedge End Retail Park reconfiguration file (Ref <strong>25/01045/FUL</strong>) covers an out-of-town retail park anchor unit reconfiguration with new F&B and Class E flexible commercial accommodation at the M27 J7 catchment, useful pricing context for the retail park investment book that the institutional investor pool funds against. Stamp duty applies at the commercial rates on each freehold acquisition, refinancing is unaffected.",
      refs: [
        {
          ref: "25/00278/FUL",
          address: "Hedge End Business Park, Charles Watts Way, Hedge End, Southampton SO30 4RW",
          postcode: "SO30 4RW",
          proposal: "Hedge End Business Park scheme, new Grade B office accommodation alongside ancillary B8 distribution on the Charles Watts Way business-park spine, canonical SO30 institutional business-park freehold candidate.",
        },
        {
          ref: "25/01045/FUL",
          address: "Hedge End Retail Park, Tollbar Way, Hedge End, Southampton SO30 2QZ",
          postcode: "SO30 2QZ",
          proposal: "Hedge End Retail Park anchor unit reconfiguration, new F&B and Class E flexible commercial accommodation at the M27 J7 out-of-town retail catchment.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Hedge End and West End",
      items: [
        { label: "Out-of-town retail park investment", detail: "National-covenant retail park investment at Hedge End Retail Park, long-hold institutional and pension-fund stock.", typicalSize: "£2M to £8M facility" },
        { label: "Hedge End business-park Grade B office", detail: "Modern Grade B office freehold along Charles Watts Way, owner-occupier and investment.", typicalSize: "£500K to £2.5M" },
        { label: "Class B8 distribution and logistics", detail: "Owner-occupier and investment B8 distribution warehouse on the Hedge End business-park spine.", typicalSize: "£600K to £3M" },
        { label: "Trade-counter and SME industrial", detail: "Trade-counter retail and SME B2 industrial freehold across the SO30 business-park.", typicalSize: "£400K to £1.5M" },
        { label: "West End neighbourhood retail", detail: "Neighbourhood retail parade and convenience freehold in the SO30 West End Local Plan area.", typicalSize: "£300K to £900K" },
        { label: "Roadside and forecourt", detail: "M27 J7 roadside and forecourt operator freehold, trading-business mortgage candidate.", typicalSize: "£500K to £2M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Hedge End and West End",
      body: 'Retail park and business-park investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Owner-occupier Grade B office and SME B2 industrial via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Class B8 distribution and trade-counter via commercial investment mortgage. Roadside, forecourt and Class E hospitality via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA. West End neighbourhood retail and mixed-use parade via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a>. Vacant or repositioning retail-park stock routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing development finance and five-year fixes through <a href="/services/commercial-remortgage" class="text-secondary font-medium hover:underline">commercial remortgage</a> is the highest-volume single product across the SO30 corridor in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Hedge End and West End retail park, business-park office and B8 distribution",
      body:
        "Deep across the SO30 M27 J7 fabric. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the largest Hedge End Retail Park and business-park Grade B office investment with strong-covenant national tenants at 60 to 65% LTV and 6.0 to 7.0% pa, with their relationship desks active inside the Eastleigh Borough institutional pattern. Allica Bank, HTB and YBS Commercial sit at the top of the shortlist on owner-occupier SME B2 industrial, Grade B office and trade-counter freehold at 70 to 75% LTV and 6.0 to 7.5% pa on EBITDA cover at 1.3 to 1.5x, with Cambridge and Counties active on multi-let business-park and trade-counter investment. <strong>Shawbrook</strong> covers the larger multi-let B2 and B8 estate investment and the institutional refinance pipeline at 60 to 65% LTV. <strong>InterBay Commercial</strong> and Paragon take selected SO30 mixed-use and portfolio-landlord deals where multiple freeholds sit inside the same SPV. <strong>Cynergy Bank</strong> covers selected SO30 roadside, forecourt and hospitality trading-business deals at 60 to 70% LTV on operator EBITDA. <strong>LendInvest</strong> covers refurbishment and bridge-to-let on retail-park and business-park repositioning. Together and Foundation Home Loans take selected secondary West End neighbourhood retail and semi-commercial cases. Refinancing on a stabilised Hedge End business-park asset typically prices 6.0 to 7.0% pa at 60 to 65% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["retail", "industrial-warehouse", "office", "mot-garage-petrol", "mixed-use", "leisure-hospitality"],
    faqs: [
      {
        question: "What LTV is achievable on a Hedge End Retail Park investment freehold?",
        answer:
          "Up to 65% LTV on let out-of-town retail park with a strong-covenant national anchor like B&Q, Marks and Spencer or Sainsburys. Pricing 6.0 to 7.0% pa with <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong>, <strong>Santander</strong> and <strong>Shawbrook</strong> competing keenly inside the institutional retail-park pattern. The 25/01045/FUL Tollbar Way reconfiguration is exactly this archetype. The binding constraint is ICR at 140 to 160% stressed on the lease tail and covenant strength rather than headline LTV.",
      },
      {
        question: "Can we get a commercial mortgage on a Hedge End business-park Grade B office?",
        answer:
          "Yes, up to 75% LTV via Allica Bank, HTB and YBS Commercial on owner-occupier Grade B office freehold along Charles Watts Way and the wider Hedge End business-park spine. EBITDA cover at 1.3 to 1.5x, pricing 6.0 to 7.5% pa. The 25/00278/FUL Charles Watts Way scheme is exactly this archetype. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the larger institutional office investment at 60 to 65% LTV.",
      },
      {
        question: "What product fits an M27 J7 roadside or forecourt operator?",
        answer:
          "Trading-business mortgage on operator EBITDA at 60 to 70% LTV with <strong>Cynergy Bank</strong>, Allica Bank or HTB. Pricing 7.0 to 8.5% pa on operator EBITDA cover at 1.5 to 1.8x. Owner-occupier route via <a href=\"/services/owner-occupier-commercial-mortgage\">owner-occupier mortgage</a> if the operator buys through a partnership or limited company. The M27 J7 catchment supports a deep roadside and forecourt operator pool.",
      },
      {
        question: "Which lenders run dedicated South Coast out-of-town retail and business-park desks?",
        answer:
          "<strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong>, <strong>Santander</strong> Commercial and <strong>Shawbrook</strong> all maintain South Coast regional teams active on the largest Hedge End Retail Park and business-park investment deals. Allica Bank, HTB, Cambridge and Counties and YBS Commercial cover the £400K to £2.5M owner-occupier office, B2 industrial and trade-counter end. We use those desks for SO30 deals where local knowledge of the M27 J7 catchment pattern, Eastleigh Borough planning policy and the daily-spend out-of-town retail economics carry weight in underwriting. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },
};

export function getAreaDetail(slug: string): AreaDetail | null {
  return areaDetails[slug] ?? null;
}
