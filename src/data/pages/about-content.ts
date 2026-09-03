/**
 * /about page content, Commercial Mortgages Southampton.
 *
 * Voice: editorial, broker-led, first-person plural ("we").
 *
 * Regulatory position (2026-05-15): Commercial mortgages are
 * UNREGULATED lending. The broker is NOT FCA-authorised because
 * the products arranged sit outside the FCA's regulated mortgage
 * perimeter. Where a deal would require FCA authorisation, we
 * refer to a regulated firm. Never claim FCA authorisation.
 *
 * Rate range mid-2026: 6.0-9.0% pa overall.
 */

export interface AboutContent {
  hero: {
    h1: string;
    lede: string;
  };
  story: {
    h2: string;
    body: string[];
  };
  numbers: Array<{ value: string; label: string }>;
  approach: {
    h2: string;
    items: Array<{ label: string; detail: string }>;
  };
  credibility: {
    h2: string;
    body: string;
  };
}

export const aboutContent: AboutContent = {
  hero: {
    h1: "An experienced commercial mortgage broker for Southampton, the Solent and Hampshire",
    lede:
      "Twenty years of UK property and commercial banking, including senior corporate banking roles on the lender side. £400M+ of unregulated commercial mortgages arranged across port-and-logistics, owner-occupier, investment, semi-commercial, HMO portfolio refinance, healthcare ancillary and hospitality deals. Placed with the eight named lenders below and another eighty across our panel, including Allica Bank, HTB and Aldermore on the owner-occupier side and Paragon and Together on the HMO side, each active across the Solent corridor and the wider Hampshire commercial market.",
  },

  story: {
    h2: "Specialist, not generalist",
    body: [
      "Our team has been working in property and commercial banking since 2005, and we have stayed in the same lane ever since. Two decades of UK commercial finance, including senior corporate banking roles, sit behind every introduction we make. Most of that career was spent on the <strong>lender side</strong>, writing credit papers, sitting in committees, declining loans and approving them. That experience shapes how we structure and present every Southampton commercial mortgage application now we work on the broker side. We know what credit committees need to see, what triggers a decline, and where there is genuine flexibility versus where there is not.",

      "We broker commercial mortgages and only commercial mortgages. Owner-occupier, commercial investment, semi-commercial (the unregulated cases), portfolio refinance, trading-business, commercial remortgage, commercial bridging and second-charge commercial. We do not place residential mortgages, residential buy-to-let, regulated bridging, car finance, asset finance or unsecured business loans. Those are different markets with different lenders and different broker specialisms. We would rather be excellent at one product family than mediocre across six. If you call us about a residential remortgage, regulated semi-commercial, or anything else that would require FCA authorisation, we will refer you to a regulated firm that handles it properly.",

      'Across the past decade we have arranged in excess of <span class="figure-inline">&pound;400M</span> of commercial mortgages. Facility sizes from <span class="figure-inline">&pound;150K</span> to <span class="figure-inline">&pound;10M+</span>, terms 5 to 25 years, and every mainstream sector: M271 and Adanac Park B8 logistics-warehouse refinance, Ocean Village and Mayflower Quarter hospitality, Westquay and Above Bar Street retail freeholds, Bassett and Lordswood professional-services and dental owner-occupier, healthcare ancillary across the University Hospital Southampton catchment, semi-commercial shop+flats (unregulated) on Shirley Road and Portswood Road, and HMO portfolios across Highfield, Portswood and Bevois Valley. Our work focuses on Southampton, the SO14 to SO19 city core, the SO30 Hedge End and West End fringe, and the wider Hampshire market that reads as a single M27 Solent logistics corridor from Adanac Park through Eastleigh to Portsmouth. See <a href="/case-studies" class="text-secondary font-medium hover:underline">our case studies</a> for representative recent placements.',

      'Southampton has three specialisms that shape our weekly deal flow. <strong>Port-and-logistics.</strong> The M271 spur and the Adanac Park / Nursling industrial cluster carry one of the densest B8 logistics-warehouse markets on the South Coast, anchored by ABP, Ordnance Survey and the cross-Solent freight forwarders. Our active industrial lender desks are <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and Aldermore, each pricing keenly on Solent industrial refinance and acquisition with rent cover and tenant covenant at the centre of the underwrite. YBS Commercial is the standout name for stabilised investment lots on the same corridor. <strong>HMO portfolios.</strong> The University of Southampton and Solent University student catchments (c. 23,000 plus c. 11,000 students) anchor one of the densest HMO markets in central southern England across the Highfield, Portswood and Bevois Valley belt; Paragon and Together lead the lender competition on portfolio refinance where the C4 or Sui Generis planning consent is already stabilised. <strong>Healthcare ancillary.</strong> University Hospital Southampton, Spire and Nuffield generate a substantial private-healthcare freehold catchment across Bassett, Highfield and Bitterne. <strong>Cynergy Bank</strong>, HTB and Cambridge & Counties are the active desks on healthcare and dental owner-occupier; Cambridge & Counties prices particularly cleanly on Hampshire SME freeholds.',

      "Commercial Mortgages Southampton is a trading name of Lenzie Consulting Ltd. <strong>We are not FCA-authorised because commercial mortgages on commercial property are an unregulated activity in the UK.</strong> They fall outside the Financial Conduct Authority's regulated mortgage perimeter. Where a deal would require FCA authorisation, we refer the enquiry to a regulated firm. That position is not unusual. Most commercial mortgage brokers operate the same way, because the products themselves are unregulated by definition. What it does mean: the underwriting discipline we apply to every deal comes from years on the credit side of the table, not from a regulated obligation. The standards a credit committee expects do not change because the product sits outside FCA scope.",
    ],
  },

  numbers: [
    { value: "£400M+", label: "Commercial mortgages arranged" },
    { value: "90+", label: "Lenders on panel" },
    { value: "20+ yrs", label: "Property and commercial banking" },
    { value: "48 hrs", label: "Indicative terms" },
  ],

  approach: {
    h2: "How we work",
    items: [
      {
        label: "Specialist focus",
        detail:
          "Unregulated commercial mortgages only. No cross-selling, no loss-leader products, no residential, no regulated bridging, no unsecured. Single product family, deep expertise.",
      },
      {
        label: "Lender-side perspective",
        detail:
          "Twenty years sitting behind credit committees teaches you how to package an application the way a credit officer wants to read it. Fewer decline surprises, faster approval, sharper terms.",
      },
      {
        label: "Southampton market depth",
        detail:
          "We know the Southampton-active and Solent corridor lender desks personally. NatWest, Lloyds, Barclays and Santander commercial banking out of the Above Bar Street and Ocean Village relationship desks. Shawbrook, InterBay Commercial and LendInvest cover the central retail, semi-commercial and HMO stock from Westquay through Bedford Place to Highfield and Portswood. Cynergy Bank prices well on the Ocean Village hospitality cluster and on healthcare ancillary across the University Hospital Southampton catchment. Allica Bank, HTB and Aldermore take the owner-occupier file from Bassett dental and Bedford Place F&B through to Adanac Park logistics. YBS Commercial leads on stabilised industrial investment along the M271 corridor; Cambridge & Counties prices keenly on Hampshire SME freeholds; Paragon and Together lead the lender pool on Highfield, Portswood and Bevois Valley HMO portfolio refinance. We know which Hampshire RICS valuers each lender prefers and which comparable evidence the local panel will accept.",
      },
      {
        label: "Straight answers",
        detail:
          "If the deal does not work, wrong sector for that LTV, EBITDA cover too tight, ERC kills the remortgage maths, vendor's price unsupported by RICS comparables, you hear it on day one. Not after a wasted valuation fee.",
      },
      {
        label: "End-to-end execution",
        detail:
          "Single point of contact from initial enquiry through indicative terms, full application, RICS Red Book valuation, credit approval, solicitor instruction, completion and drawdown. You speak to one person; we coordinate everything else.",
      },
      {
        label: "Repeat clients",
        detail:
          "Most clients return for the next deal. Second freehold acquisition, portfolio addition, end-of-fix refinancing. The lender relationships we have built for you compound over time, which materially helps the next case.",
      },
    ],
  },

  credibility: {
    h2: "Why a specialist Southampton broker",
    body: 'The Southampton commercial mortgage market has genuine regional nuance: <strong>Southampton City Council</strong> as the unitary planning authority with its portal at <a href="https://planning.southampton.gov.uk">planning.southampton.gov.uk</a> covering the full SO14 to SO19 city footprint, the M271 spur and Adanac Park industrial cluster running into Nursling and Test Lane as the B8 logistics anchor, Ocean Village and Carnival HQ driving the marina-hospitality and waterfront-office catchment, Mayflower Quarter and Royal Pier as the major mixed-use regeneration zone, Westquay and Above Bar Street as the retail spine, Bedford Place and The Polygon for independent F&B and serviced offices, Bevois Valley and the Highfield-Portswood corridor as the dense University of Southampton and Solent University student HMO catchment, Bassett and Lordswood for affluent professional-services and dental freeholds, Bitterne for district retail and care homes, the University Hospital Southampton cluster anchoring private-healthcare ancillary stock, and the Hedge End and West End out-of-town retail and business-park belt on the SO30 borough fringe. The eight lenders we name and show logos for are <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong>, <strong>LendInvest</strong>, <strong>Cynergy Bank</strong>, <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong>, each with confirmed permission to display marks. Behind those sit another eighty lender relationships including Allica Bank, HTB, Cambridge & Counties, YBS Commercial and Aldermore on the Hampshire SME owner-occupier and industrial investment side, Paragon and Together on the Highfield, Portswood and Bevois Valley HMO portfolio side, plus OakNorth, Octopus Real Estate, Foundation Home Loans and the long tail of specialist commercial mortgage desks. YBS Commercial is the standout name for stabilised investment lots on the M27 Solent corridor; Cambridge & Counties prices particularly keenly on Hampshire SME freeholds where the borrower has clean filed accounts and a coherent deposit story. National brokers tend to default to whichever desk paid the broker conference fee that quarter. We default to whichever desk will fund your deal cleanest, and we will tell you which one that is on the first call.',
  },
};
