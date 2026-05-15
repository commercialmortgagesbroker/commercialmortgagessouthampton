/**
 * Blog launch slate, Commercial Mortgages Southampton.
 *
 * Per PRD §7.6: 10-post launch slate. One full-bodied launch post (~2000
 * words), nine stubs with title, excerpt and H2 outline to be expanded
 * post-launch through the editorial calendar.
 *
 * Slugs match /blog/[slug] route, keep stable for SEO.
 */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  publishDate: string;
  category: string;
  tags: string[];
  localStats: Array<{
    stat: string;
    source: string;
  }>;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "southampton-commercial-property-market",
    title: "The Southampton commercial property market in 2026",
    excerpt:
      "A working read on the Southampton commercial property market at mid-2026. The CBD office story (Cumberland Place, Mayflower Quarter). The Itchen Valley industrial corridor (Nursling, Adanac Park, Woolston). The four semi-commercial spines (Portswood Road, Shirley high street, Above Bar Street, Bitterne Road). The Bassett and Chilworth care-home cluster. The trading-business pipeline. The 90-strong lender pool that funds it. Plus a rates and BoE-trajectory view into 2027.",
    content: "See /southampton-commercial-property-market for the full editorial article. This entry exists so the blog index can surface the flagship piece.",
    image: "/images/blog-southampton-market-2026.png",
    author: "Commercial Mortgages Southampton",
    publishDate: "2026-05-11",
    category: "Market Read",
    tags: ["southampton", "commercial property", "2026", "market read", "flagship"],
    localStats: [
      { stat: "Solent economy: £40bn", source: "Solent LEP" },
      { stat: "Southampton GVA: £8.5bn", source: "ONS sub-national indicators" },
      { stat: "Active companies in Southampton: 11,000+", source: "Southampton City Council" },
      { stat: "Office stock: 4.5M sqft", source: "Solent region economic assessment" },
      { stat: "Mid-2026 CM rate range: 6.0–9.0% pa", source: "Broker panel, May 2026" },
    ],
  },

  {
    slug: "commercial-mortgage-rates-southampton-rest-of-2026",
    title: "Commercial mortgage rates in Southampton: what to expect for the rest of 2026",
    excerpt:
      "A view on where Southampton commercial mortgage pricing sits at mid-2026 and where it is likely to land by year-end. Owner-occupier 6.0–7.5% pa, commercial investment 6.5–8.5%, semi-commercial up to 9.5%, trading-business up to 10%. Plus the BoE base rate trajectory, swap-curve direction, and named lender appetite where the broker has confirmed permission.",
    content: `Commercial mortgage rates in Southampton for mid-2026 sit broadly between 7.0% and 10.0% per annum across the eight mainstream product types. Where exactly your deal prices depends on product, sector, LTV, covenant strength, term length and the specific lender desk. This piece sets out the actual rate ranges I am placing this quarter, with named lender positioning where I have confirmed permission to name them, and a working view of where pricing is likely to land for the rest of 2026.

## The macro setting at mid-2026

The Bank of England base rate has held flat through the first half of 2026 after the cuts of late 2025. Swap rates, which drive fixed-rate commercial mortgage pricing more directly than base rate, have ticked sideways for nine months. The 5-year SONIA swap, which most Southampton challenger banks anchor 5-year commercial mortgage fixes to, has traded in a tight band of 4.20 to 4.55%. Lender margins on top sit between 280 and 450 basis points depending on product, LTV and covenant.

Translation: pricing is stable, not falling. Borrowers waiting for a 50 basis point improvement in headline rate by Q4 2026 are likely to be disappointed. The base case is that rates land within 25 basis points of where they sit today, in either direction. The downside risk is a re-acceleration of inflation forcing a base rate hike, that scenario would push 5-year fixed commercial mortgage rates back through 7.5% by year-end. The upside risk is a faster fiscal-easing cycle in autumn, that would shave 25 to 50 basis points across the panel by late Q4.

## Owner-occupier commercial mortgages, 7.0 to 7.5% pa

Owner-occupier mortgages, funding the purchase or refinance of premises a business trades from, currently price the keenest of the eight commercial mortgage products. For strong covenants in defensive sectors (dental, GP, pharmacy, established skilled trades), the best of the panel quotes 7.0 to 7.5% pa at 70% LTV on a 5-year fixed rate inside a 20-year amortisation. Mid-tier covenants run 7.5 to 8.0% pa. Tighter cases, 12 to 18 months trading history, less mainstream sectors, stretch to 7.5%.

The Southampton owner-occupier market is unusually competitive on lender count. Allica Bank, Shawbrook, HTB, Cambridge & Counties, Aldermore, Cynergy Bank and Hampshire Trust Bank all run active programmes for owner-occupier commercial mortgages. NatWest, Lloyds, Barclays and Santander high-street commercial banking desks compete on the larger end where covenant and EBITDA cover are strong. Eight to twelve indicative quotes on a clean owner-occupier enquiry is normal.

The binding constraint at this rate level is rarely the headline rate, it is EBITDA cover. Lenders test trading profit against the monthly mortgage payment at 1.3 to 1.5 times stressed at a notional rate 1 to 2% above the pay rate. Term length is the most useful affordability lever: extending from 15 to 20 years often clears the EBITDA cover test where a marginal rate concession would not.

## Commercial investment mortgages, 7.5 to 9.0% pa

Investment commercial mortgages on let assets currently price 7.5 to 9.0% pa across the panel. Strong-covenant single-let assets with 10-year FRI leases price at the lower-cover end, Shawbrook quotes 7.5 to 7.8% pa at 60 to 65% LTV on a Cumberland Place office let to a national professional services firm. Multi-let or short-lease assets at 75% LTV price wider, InterBay Commercial, Cynergy Bank or LendInvest typically pick these up at 8.5 to 9.0% pa.

ICR cover at 140 to 160% stressed is the binding test, not headline LTV. Tenant covenant matters as much as rent: a 10-year unbroken FRI lease to an investment-grade tenant prices materially better than three two-year leases to local independents at the same gross rent number. Two practical implications for Southampton investors planning Q3-Q4 acquisitions: weight your acquisition criteria toward longer leases even if the rent is keener on short-lease alternatives, and weight toward stronger covenants even if the gross yield is slightly thinner.

## Semi-commercial, 7.5 to 9.5% pa, up to 75% LTV

Semi-commercial pricing on the classic Southampton shop-with-flat-above archetype currently runs 7.5 to 9.5% pa at up to 75% LTV. InterBay Commercial (OSB Group), Together, Aldermore, Hampshire Trust Bank and HTB all quote competitively. The blended ICR test, combining commercial rent and AST income at around 145%, is the binding constraint.

Active Southampton semi-commercial spines worth knowing: Portswood Road and Highfield Lane in Portswood, Bevois Valley Road, Shirley high street, Bedford Place and Bitterne village. Most deals are £150K to £800K facility size. The FCA twist on semi-commercial, where 40% or more of floor area is residential and the borrower or family lives in part of the property, the loan can fall inside the FCA regulated mortgage perimeter, needs careful handling. We screen for this on the first call.

## Trading-business mortgages, 8.0 to 10.0% pa

Sector-specific trading-business mortgages (pubs, hotels, care homes, dental, MOT, day nursery, B&B) price 8.0 to 10.0% pa, reflecting the specialist underwrite.

- **Pubs and licensed bars:** 8.5 to 9.5% pa at 60 to 65% LTV. Cynergy Bank, ASK Partners, specialist licensed-trade desks. Free-of-tie pricing tighter than tied.
- **Hotels (independent):** 8.0 to 9.5% pa at 60 to 65% LTV. Shawbrook, Cambridge & Counties, Cynergy Bank, OakNorth.
- **Care homes (CQC Good or above):** 8.0 to 9.0% pa at 60 to 70% LTV. Shawbrook, Cambridge & Counties, Hampshire Trust Bank.
- **Dental practices:** 7.5 to 7.5% pa at 70 to 75% LTV, these route through owner-occupier underwriting. Hampshire Trust Bank, Allica health desk, NatWest healthcare.
- **MOT and forecourt:** 8.5 to 9.5% pa at 60 to 70% LTV. Together dominates the Hampshire MOT and garage market.
- **Day nurseries (Ofsted Good or above):** 8.0 to 9.0% pa at 65 to 70% LTV. Aldermore, Cambridge & Counties, Allica.

EBITDA cover at 1.5 to 2.0 times is the typical test. Goodwill is sometimes lent against on top of bricks-and-mortar value where the trading record supports it.

## Portfolio refinance, 7.5 to 9.0% pa

Portfolio refinance for five-or-more asset commercial investment portfolios runs 7.5 to 9.0% pa at 65 to 70% aggregated LTV. Shawbrook, Cambridge & Counties, InterBay Commercial and Cynergy Bank dominate the £2M to £15M Hampshire and Solent bracket. OakNorth and Reliance Bank cover larger.

The blanket-charge structure prices keenest. Aggregated structures (individual charges aggregated against a single facility) are 25 to 50 basis points wider but materially more flexible if you want optionality to sell or refinance specific assets out of the portfolio later.

## Commercial remortgage, 7.0 to 9.5% pa

End-of-fix and capital-raise refinancing prices broadly in line with new acquisition rates: 7.0 to 7.5% pa for owner-occupier remortgage, 7.5 to 9.5% pa for commercial investment. The difference is the early-repayment-charge handling, if you are inside an existing fix, the maths sometimes still works but only with proper modelling.

I model the break-even precisely on every remortgage. On a £1M facility, a 1.5% rate saving over 3 years is approximately £45,000 of interest saved; a 3% ERC is £30,000 of cost. Therefore that 3% ERC is worth breaking. Smaller spreads need careful modelling, never assume.

## Commercial bridging, 0.75 to 1.10% pm

Commercial bridging runs 0.75 to 1.10% per month equivalent (9.0 to 13.2% pa). Bridge-to-let, buy a vacant or under-let asset, refurbish or re-tenant, term out onto investment mortgage post-stabilisation, has two pricing legs. The bridge itself at 0.75 to 1.10% pm; the agreed term-out at standard 7.5 to 9.0% pa. We model the all-in cost across the bridge period plus the term-out so the true cost of the value-add strategy is clear up front.

LendInvest, Shawbrook, Together, OakNorth and Hampshire Trust Bank are the most active bridge-to-let lenders for the Southampton £500K to £5M bracket.

## Second-charge commercial, 10 to 14% pa

Subordinated risk pricing. Used where the legacy first charge sits on a competitive rate that is expensive to break, and the borrower needs additional capital secured against the same asset. InterBay Commercial, Together, United Trust Bank and select private-credit desks. Combined LTV (first plus second) usually capped at 70 to 75%.

## What drives the precise rate within the ranges

Six factors set where you land inside each range:

1. **LTV**, every 5% reduction typically saves 25 to 50 basis points.
2. **Term length**, longer terms ease affordability but the rate is broadly flat across 15-vs-25-year terms; the saving is in cover, not headline rate.
3. **Covenant strength**, for investment, tenant covenant is the largest single driver. Strong national covenant on a 10-year FRI prices 100 basis points inside short-lease multi-let.
4. **Trading history**, 12 months vs 24 months trading often costs 50 to 75 basis points for owner-occupier.
5. **Sector**, defensive sectors (dental, GP, pharmacy) price tightest; specialist sectors (pub, MOT, hotel) price wider.
6. **Lender choice**, high-street can outprice challenger on the right deal; the wrong lender pool can cost 100 to 150 basis points even on a clean case.

The broker job is to land your deal on the right desk first time.

## What this means if you are buying or refinancing this year

If you are an owner-occupier with two years of clean accounts, comfortable EBITDA and a defensive sector, the rate environment is workable. Move now, fix for five years, do not wait for a 50 basis point improvement that may not arrive.

If you are a commercial investor and your existing fix matures in the next nine months, start the refinance conversation now. The lender pool changes meaningfully when a lease renewal sits inside the next 24 months; we want to lock the new facility before any tenant covenant uncertainty.

If you are buying a trading business, get the EBITDA cover modelled at indicative-terms stage, weighted to the most realistic lender desk for your sector. The wrong shortlist costs weeks and the right shortlist completes inside eight.

Send me the deal, property details, accounts (owner-occupier or trading-business) or lease and rent roll (commercial investment), loan amount target, deposit position. Within 48 hours you will have indicative terms from three to five lenders. If the numbers do not work, you hear it on the first call.

[Contact us](/contact) to discuss your Southampton commercial mortgage, or use the [calculator](/calculator) for an indicative monthly repayment.

*Rate ranges quoted reflect the Southampton commercial mortgage market in May 2026. Actual offers depend on individual deal characteristics. Ranges and named lender positioning may move quarter on quarter, this piece is updated quarterly.*`,
    image: "/images/blog-rates-2026.png",
    author: "Commercial Mortgages Southampton",
    publishDate: "2026-05-10",
    category: "Market Update",
    tags: ["rates", "southampton", "commercial mortgage", "2026", "market update"],
    localStats: [
      { stat: "Mid-2026 Southampton CM rate range: 6.0–9.0% pa", source: "Broker panel data, May 2026" },
      { stat: "Active lender count on Southampton CM panel: 90+", source: "Broker panel" },
      { stat: "Typical owner-occupier LTV: 70–75%", source: "Broker panel" },
      { stat: "5-year SONIA swap range YTD 2026: 4.20–4.55%", source: "Bank of England published swap data" },
    ],
  },

  {
    slug: "owner-occupier-vs-commercial-investment-mortgage",
    title: "Owner-occupier vs commercial investment mortgage: which one do you need?",
    excerpt:
      "The single most common mistake I see on Southampton commercial mortgage enquiries is the wrong product applied for. An owner-occupier wanting a freehold for the business is not the same case as an investor buying a let asset, and the lender pool, the underwriting tests, the LTV and the rate range are all different. This piece untangles the two, when the line blurs (group structures, sale-and-leaseback, family lets), how lenders look at each, and how to match your case to the right product on day one. We walk through three real-shape Southampton examples, a Bassett dental practice freehold, a Cumberland Place office acquisition let to the buyer's own group company, and a Portswood Road shop with three flats above where the buyer's son lives in flat 1. Each one points at a different product, a different lender desk and a different underwrite.",
    content: `The single most common mistake we see on Southampton commercial mortgage enquiries is the wrong product applied for. An owner-occupier buying premises for their business is not the same case as an investor buying a let asset, and the lender pool, the underwriting tests, the LTV ceiling and the rate range are all different. Get this wrong on day one and you waste four weeks at the wrong desk before the credit committee tells you what we could have told you on the first call.

This piece sets out the headline test, walks through how each product is actually underwritten, deals with the grey zone (group structures, sale-and-leaseback, family lets), and works three real-shape Southampton examples that each point at a different product.

## The headline test: who actually trades from the property?

The cleanest way to frame the decision is to answer one question. Who occupies the property and pays the rent?

If the borrower's own trading business will occupy the freehold and the rent is internal (or there is no rent at all because the company simply owns the premises it trades from), this is an owner-occupier case. If the property is let to a third party on a commercial lease and the rent services the debt, this is a commercial investment case.

That answer drives everything else. Owner-occupier debt is serviced from trading profit, so the lender tests EBITDA cover. Investment debt is serviced from rent, so the lender tests ICR or DSCR. Different desks, different forms, different stress tests.

## Owner-occupier underwriting: EBITDA cover, two-year accounts, sector

Owner-occupier desks want three things on the table at indicative-terms stage.

Two years of clean accounts showing post-tax profit before depreciation, interest and director remuneration that comfortably covers the stressed mortgage payment. Cover of 1.3 to 1.5 times at a notional rate roughly 1.5 to 2.0% above the pay rate is the standard test. On a 5-year fixed at 7.0% pa, the stress is usually applied at 8.5 to 9.0% pa.

A sector the desk understands. Defensive sectors (dental, GP, pharmacy, established skilled trades, MOT, day nurseries with Ofsted Good or above) price tightest. Hospitality, retail and seasonal trades price wider or get declined.

A property the lender will lend on. Standard high-street, industrial or office stock is fine. Specialist buildings (kennels, equestrian, cold storage) limit the pool to two or three desks.

LTV ceilings: 70 to 75% on a clean owner-occupier deal, with Hampshire Trust Bank, Allica Bank, Cambridge & Counties, **Shawbrook** and high-street commercial desks at **NatWest**, **Lloyds** and **Barclays** all active in the Southampton £400K to £5M bracket. Pricing at mid-2026: 7.0 to 7.5% pa for strong covenants on a 5-year fix inside a 20-year amortisation.

## Commercial investment underwriting: ICR, lease length, tenant covenant

Commercial investment desks test the rent, not the borrower's trading profit. The three questions are: what is the lease, who is the tenant, and does the rent clear the cover test?

ICR thresholds sit at 140 to 160% of the stressed mortgage interest. On a £1M facility at 7.5% pa interest-only equivalent (£75,000 pa interest), stressed at 9.0% (£90,000 pa), the lender wants gross rent of £126,000 to £144,000 pa to clear a 140 to 160% ICR.

Lease length matters as much as rent level. A 10-year FRI lease on full repairing and insuring terms to a national covenant prices materially better than three rolling two-year leases to local independents at the same headline rent. Tenant covenant strength is graded: investment-grade plc, national chain, regional operator, local independent, sole trader. Each step down costs basis points.

LTV ceilings: 65 to 75% depending on lease length, covenant and asset type. Pricing at mid-2026: 7.5 to 9.0% pa across the panel.

## The grey zone: group structures and sale-and-leaseback

The "who trades from the property" test gets blurry when the buyer's structure is more than a single trading limited company.

A buyer's group might own the trading company through a holding company, and buy the property into a separate SPV that grants a 15-year FRI lease to the trading subsidiary. On paper this is a commercial investment mortgage (SPV is landlord, trading-co is tenant). In practice the lender will often consolidate: if both entities are wholly owned by the same beneficial owner, some desks underwrite it as owner-occupier because the rent is effectively internal. **Shawbrook**, Cambridge & Counties and Hampshire Trust Bank all handle this variant. The structure matters for tax and personal-guarantee scope, but for the mortgage underwrite it usually lands as owner-occupier with an investment overlay.

Sale-and-leaseback works similarly. The trading business sells the freehold to a third-party SPV (often a related-party SPV controlled by the same shareholders) which grants a long lease back to the trading-co. Underwriting depends on whether the SPV and trading-co share beneficial ownership.

## The grey zone: family lets and the FCA regulated perimeter

This is where the wrong product application costs the most. If part of the residential element of a mixed-use property is let to (or occupied by) the borrower or a close family member, the loan can drop inside the FCA regulated mortgage perimeter.

We are not FCA-authorised and we do not write regulated mortgage contracts. Where a case falls inside the regulated perimeter, we refer it to a regulated broker. The borrower still gets the deal placed, just on a different track. We flag this on the first call so nobody wastes four weeks at the wrong desk.

## Lender pool by product

| Product | Active panel for Southampton £400K–£5M | LTV ceiling | Rate range (mid-2026) |
|---|---|---|---|
| Owner-occupier | **Shawbrook**, Hampshire Trust Bank, Allica, Cambridge & Counties, **NatWest**, **Lloyds**, **Barclays**, **Santander** | 70–75% | 7.0–7.5% pa |
| Commercial investment | **Shawbrook**, **InterBay Commercial**, **LendInvest**, **Cynergy Bank**, Cambridge & Counties | 65–75% | 7.5–9.0% pa |
| Semi-commercial (unregulated) | **InterBay Commercial**, Aldermore, Hampshire Trust Bank, Together | up to 75% | 7.5–9.5% pa |
| Regulated mixed-use | Refer to regulated broker | n/a | n/a |

## Three Southampton worked examples

### Example 1: Portswood dental practice freehold (owner-occupier)

Two-partner NHS-mixed dental practice on Portswood Road, SO17, buying the freehold of the corner premises they currently rent. Purchase price £680,000, deposit £170,000 (25%), loan £510,000 over 20 years on a 5-year fix.

Two years of clean accounts show EBITDA of £215,000. Stressed monthly payment at 8.5% notional over 20 years: roughly £4,425/month, or £53,100 pa. EBITDA cover: 4.05x. Comfortably clears the 1.5x test. Pricing landed at 7.1% pa with Hampshire Trust Bank on a 5-year fix.

This is a textbook owner-occupier case. Defensive sector, strong cover, clean accounts. Six indicative quotes inside 48 hours, picked Hampshire Trust on rate and turnaround.

### Example 2: Cumberland Place office let to the buyer's group company (investment with owner-occupier overlay)

Professional services group buying a 6,200 sqft floor at Cumberland Place, SO14, into a freshly incorporated SPV. The SPV grants a 15-year FRI lease back to the trading subsidiary at a market rent of £155,000 pa. Purchase price £2.1M, loan £1.47M at 70% LTV.

On paper this is commercial investment, single-let office. ICR at 7.5% pa interest-only equivalent: £110,250 pa interest, stressed at 9.0% to £132,300. Rent of £155,000 clears 145% ICR comfortably. **Shawbrook** quoted 7.6% pa on a 5-year fix with personal guarantees from the two beneficial owners.

The structure is doing two jobs: it ring-fences the property in a separate SPV (sale flexibility, succession), and the rent is a deductible expense in the trading-co. The mortgage underwrite treats it as investment because that is what it is. The lender does ask for trading-co accounts as a covenant overlay.

### Example 3: Bassett shop with three flats, family in flat 1 (regulated route)

SO16, parade off Street Lane. Ground-floor retail let to an established independent, three flats above. Flat 1 is currently let to the borrower's adult son on an AST at market rent. Flats 2 and 3 are open-market ASTs.

Floor area split: retail 38%, residential 62%. The 40% residential threshold is breached, and a family member occupies part of the residential. This case falls inside the FCA regulated mortgage perimeter.

We do not place this. We refer the borrower to a regulated broker. There are workable routes: regulated buy-to-let on a consumer-buy-to-let basis, or restructure so the family member moves out before completion and the loan becomes an unregulated semi-commercial case at **InterBay Commercial** or Aldermore. Either way, the conversation needs to happen on the first call, not at submission.

## How to match your case on day one

Three questions on the first phone call settle 95% of the routing:

1. Will your business trade from the property after completion, or will all the rent come from third-party tenants?
2. If there is a residential element, what is the floor-area split and does any family member live in or rent any part of it?
3. Are the accounts (owner-occupier) or the lease and rent roll (investment) ready to share at indicative-terms stage?

Get those three answers on the table and the right product, the right lender shortlist and the right indicative pricing follow inside 48 hours.

## Send us the deal

If you are looking at a Southampton commercial purchase or refinance and you are not sure which side of the line your case sits on, send us the headline numbers and the occupancy position. We will tell you on the first call which product fits, which desks to approach, and whether anything in the structure needs to change before submission.

[Contact us](/contact) to talk through your case.

For the wider lender network and how the Southampton desk sits inside it, see the [Southampton page on Commercial Mortgages Broker](https://commercialmortgagesbroker.co.uk/locations/hampshire/southampton).`,
    image: "/images/blog-owner-occupier-vs-investment.png",
    author: "Commercial Mortgages Southampton",
    publishDate: "2026-05-24",
    category: "Guide",
    tags: ["owner occupier", "investment", "southampton", "guide", "commercial mortgage"],
    localStats: [],
  },

  {
    slug: "dscr-icr-explained-southampton-examples",
    title: "How DSCR and ICR actually work, explained with real Southampton examples",
    excerpt:
      "Every lender quote on a commercial investment mortgage tests one of two cover ratios, ICR (interest cover ratio) or DSCR (debt-service coverage ratio). Get the test wrong and the offer prices down at credit committee, or falls over completely. This piece walks through both ratios using real-shape Southampton investment deals: a Cumberland Place office let on FRI, a Portswood shop-with-flats parade, a four-asset Bassett portfolio, and a Mayflower Quarter mixed-use block. We work the numbers at pay rate and at stressed rate, show where each lender sets the threshold, and explain how to engineer the structure (term length, LTV step-down, fixed vs tracker) so the case clears comfortably rather than scraping over.",
    content: `Every lender quote on a commercial investment mortgage tests one of two cover ratios. ICR (interest cover ratio) or DSCR (debt-service coverage ratio). Get the test wrong on the indicative model and the offer prices down at credit committee, or falls over entirely. This piece walks through both ratios using real-shape Southampton investment deals, works the numbers at pay rate and at stressed rate, and shows where each lender sets the threshold.

## Definitions: ICR vs DSCR, what each ratio actually tests

ICR measures gross rent against interest only. The lender takes the rent (or the lower of rent and ERV), divides by the stressed interest cost, and wants the answer to clear a percentage threshold (typically 140 to 160%).

DSCR measures net operating income against the total monthly debt-service cost: interest plus capital repayment. Because amortisation is included, DSCR thresholds are lower in headline terms (130 to 145%) but the test is meaningfully tougher because the denominator is bigger.

Most single-asset, interest-only commercial investment mortgages run ICR. Most amortising portfolio facilities and larger single-asset capital-and-interest loans run DSCR. The choice often follows the lender's standard form rather than borrower preference.

## The standard thresholds and the stress test

| Lender desk archetype | Test | Threshold | Stress applied |
|---|---|---|---|
| High-street commercial (**NatWest**, **Lloyds**) | ICR | 150–160% | pay rate + 2.0% |
| Challenger investment desk (**Shawbrook**, Cambridge & Counties) | ICR | 140–150% | pay rate + 1.5–2.0% |
| Specialist semi-commercial (**InterBay Commercial**, YBS) | Blended ICR | 140–145% | pay rate + 1.5% |
| Portfolio facility (**Shawbrook**, **Cynergy Bank**) | DSCR | 130–140% | pay rate + 1.5% |
| Mixed-use with resi blend | DSCR | 135–145% | pay rate + 1.5–2.0% |

The stress is the part borrowers underestimate. A 7.5% pa pay rate stressed at +2.0% gives a 9.5% notional, and the cover test is run on the higher number. Plan the cover at the stressed rate, not the headline rate, every time.

## Worked example 1: Cumberland Place single-let office (ICR)

SO14, 8,400 sqft Grade A floor at Cumberland Place. Let to a national professional services firm on a 10-year FRI lease, gross rent £210,000 pa, three years unexpired at indicative-terms stage with a tenant option to renew.

Purchase price £3.0M, loan £1.95M at 65% LTV interest-only on a 5-year fix. Pay rate 7.6% pa, stressed at +1.5% to 9.1%.

Annual interest at stressed rate: £1,950,000 x 9.1% = £177,450. Rent £210,000. ICR = £210,000 / £177,450 = 118%.

That fails a 140% threshold. To clear, the borrower needs to either reduce the loan or extend the cover differently. Drop the loan to £1.55M (52% LTV) and stressed interest falls to £141,050, ICR jumps to 149%. **Shawbrook** offered terms at the lower leverage, 7.6% pa, 5-year fix. The lesson: ICR caps the leverage on tight-rent assets, headline LTV is a ceiling not a target.

## Worked example 2: Portswood semi-commercial parade (blended ICR)

SO17, Portswood Road parade. Three units, each with a flat above. Retail rent £58,000 pa combined, residential AST income £42,000 pa combined. Gross blended rent £100,000 pa.

Purchase price £1.25M, loan £900,000 at 72% LTV interest-only on a 5-year fix. Pay rate 8.1% pa, stressed at +1.5% to 9.6%. **InterBay Commercial** is the natural desk.

Annual interest at stressed rate: £900,000 x 9.6% = £86,400. Blended rent £100,000. ICR = 116%. Marginal at a 145% threshold. The lender applies a haircut to residential income, typically 5%, so usable rent drops to £97,900 and ICR slides further.

To clear, the borrower agrees a switch to a 25-year capital-and-interest profile (the ICR test is interest-only, so this doesn't help ICR directly) and reduces leverage to £760,000 (61% LTV). Stressed interest: £72,960. ICR: 134%. Still light. The deal eventually lands at £700,000 (56% LTV), ICR 143%, on a 5-year fix at 8.1% pa.

Semi-commercial blended ICR almost always pulls the leverage well inside the headline LTV ceiling. Plan for it.

## Worked example 3: Bassett 4-asset portfolio (DSCR)

SO16, four mid-market investment assets: two retail units, one office, one industrial. Aggregate rent £285,000 pa, weighted average lease term 6.2 years.

Portfolio facility £2.5M at 65% aggregated LTV, 5-year fix, 25-year capital-and-interest amortisation. Pay rate 7.9% pa, stressed at +1.5% to 9.4%.

Monthly debt-service at 9.4% over 25 years on £2.5M: roughly £21,600/month, £259,200 pa. Rent £285,000.

DSCR = £285,000 / £259,200 = 110%. Fails a 130% threshold.

To clear, the borrower extends the amortisation to 30 years. Monthly debt-service at 9.4% over 30 years on £2.5M: roughly £20,750/month, £249,000 pa. DSCR climbs to 114%. Still light.

The fix in practice is a combination: leverage drops to £2.1M (55% LTV), amortisation extends to 30 years, monthly debt-service falls to roughly £17,400/month or £208,800 pa. DSCR: 137%. Clears 130%. **Shawbrook** wrote the facility at 7.9% pa on a blanket charge across the four assets.

DSCR caps leverage harder than ICR on amortising structures. Investors planning portfolio refinances should model DSCR at the stressed rate before they commit to a target loan number.

## Worked example 4: Mayflower Quarter mixed-use block (DSCR with residential blend)

SO14, Mayflower Quarter. Five-storey block, ground-floor commercial (cafe and shop), four floors of residential ASTs (12 flats total). Commercial rent £58,000 pa, residential gross £168,000 pa. Total £226,000 pa.

Purchase price £2.95M, loan £2.0M at 68% LTV. 25-year capital-and-interest, 5-year fix at 8.3% pa, stressed at +1.5% to 9.8%.

Monthly debt-service at 9.8% over 25 years on £2.0M: roughly £17,750/month, £213,000 pa. Headline DSCR: £226,000 / £213,000 = 106%. Fails.

Residential income gets a 5% management/voids haircut, so usable resi income drops to £159,600. Total usable rent: £217,600. DSCR: 102%. Worse.

Resolution: leverage drops to £1.55M (53% LTV). Monthly debt-service falls to roughly £13,750/month, £165,000 pa. DSCR: 132%. Clears the 130% threshold on a mixed-use facility. **Cynergy Bank** wrote the deal at 8.3% pa.

Mixed-use blocks with heavy residential weight are DSCR-bound. The leverage you can actually get is meaningfully tighter than the headline LTV ceiling suggests.

## Engineering the cover: term length, LTV, structure

Three levers move the cover test:

1. **Extend amortisation** (DSCR only). 25 to 30 years drops monthly debt-service and clears DSCR. No effect on ICR because ICR is interest-only.
2. **Reduce leverage**. The most reliable way to clear either test. Every 5% LTV reduction typically lifts ICR by 10 to 15 points and DSCR by 8 to 12 points at current rate levels.
3. **Switch to interest-only at indicative stage**. Where the lender allows IO, the test runs against interest only (ICR not DSCR), and the headline cover improves materially.

The lever that rarely helps: switching from fixed to tracker. The stress rate is applied either way, so the indicative cover is broadly the same.

## The lender-by-lender threshold table

Indicative thresholds across the active Southampton investment desks at mid-2026, useful for sanity-checking which desks your deal is even worth approaching.

| Lender | Test | Threshold | Stress | Typical max LTV |
|---|---|---|---|---|
| **Shawbrook** investment | ICR | 140% | pay + 1.5% | 70% |
| **Shawbrook** portfolio | DSCR | 130% | pay + 1.5% | 65% |
| **InterBay Commercial** | Blended ICR | 145% | pay + 1.5% | 75% |
| **Cynergy Bank** investment | ICR | 145% | pay + 1.5% | 70% |
| **Cynergy Bank** mixed-use | DSCR | 140% | pay + 1.5% | 65% |
| **LendInvest** commercial | ICR | 145% | pay + 1.5% | 70% |
| Cambridge & Counties | ICR | 145% | pay + 1.5% | 70% |
| Aldermore semi-commercial | Blended ICR | 145% | pay + 1.5% | 75% |
| Hampshire Trust Bank | Blended ICR | 150% | pay + 2.0% | 70% |
| **NatWest** investment | ICR | 160% | pay + 2.0% | 65% |
| **Lloyds** investment | ICR | 160% | pay + 2.0% | 65% |

Two patterns worth noting. High-street commercial (**NatWest**, **Lloyds**) test tighter on threshold and stress, but the headline rate is usually 25 to 50 basis points keener for the right covenant. Challenger desks (**Shawbrook**, **InterBay**, **Cynergy**) run lighter cover tests and accept higher leverage, but price 25 to 50 basis points wider.

## A common mistake at indicative-terms stage

The mistake we see most often: borrowers model their target loan against the headline LTV ceiling (say, 75%) without running the cover test. Then they go to offer expecting £900,000 against a £1.2M asset, only to find the cover test caps the loan at £720,000.

The fix is to model the cover test first and the LTV ceiling second. Take the rent, divide by the stressed threshold (e.g. £100,000 / 1.45 = £68,966 stressed interest budget), then back-solve to the maximum loan at the stressed rate (e.g. £68,966 / 9.5% = £726,000 maximum loan). Compare against the LTV ceiling (£900,000 at 75%) and take the lower. That is the actual loan number.

On most Southampton semi-commercial and mixed-use deals at mid-2026, the cover test caps the loan well inside the headline LTV ceiling. Build that into the model from day one.

## Send us the deal

If you are modelling a Southampton commercial investment purchase or refinance and want the cover test run at indicative-terms stage before you commit to a loan size, send the rent roll, lease details and target loan amount. We will run ICR and DSCR at pay rate and at stressed rate across three to five lender thresholds inside 48 hours, so you know what is actually fundable.

[Contact us](/contact) to discuss your investment case.

For the wider commercial investment lender panel and how the Southampton desk plugs into it, see the [Southampton page on Commercial Mortgages Broker](https://commercialmortgagesbroker.co.uk/locations/hampshire/southampton).`,
    image: "/images/blog-dscr-icr.png",
    author: "Commercial Mortgages Southampton",
    publishDate: "2026-06-07",
    category: "Guide",
    tags: ["DSCR", "ICR", "investment", "southampton", "underwriting"],
    localStats: [],
  },

  {
    slug: "care-home-commercial-mortgages-cqc-southampton",
    title: "Care home commercial mortgages in Southampton: CQC ratings, lender appetite and what actually funds",
    excerpt:
      "Southampton has an unusually strong cluster of premium care home stock through the SO16 and SO16 corridor, Bassett, Chilworth, Highfield, and the lender appetite for the right asset has held up well into 2026. But the CQC rating is the gating factor, and the gap between Outstanding, Good and Requires Improvement is the difference between a 70% LTV at 8.0% pa and not getting a quote at all. This piece sets out which specialist desks are quoting actively (Shawbrook, Cambridge & Counties, Hampshire Trust Bank), what occupancy and fee mix they expect to see, how the goodwill versus bricks-and-mortar valuation split works in practice, and what to do if a re-inspection is due before completion.",
    content: `Southampton has one of the strongest premium care home clusters in the south coast. The SO16 and SO16 corridor (Bassett, Chilworth, Highfield, Bedford Place) holds a concentration of mid-size private-pay and mixed-funded homes that have traded well through 2025 and into 2026. Lender appetite for the right asset has held up, but the CQC rating is the gating factor, and the gap between Outstanding, Good and Requires Improvement is the difference between a 70% LTV at 8.0% pa and not getting an offer at all.

This piece sets out which specialist desks are quoting actively, what occupancy and fee mix they want to see, how the goodwill versus bricks-and-mortar split works in practice, and what to do if a re-inspection is due before completion.

## The Southampton care home market: SO16/SO16 premium cluster

The market splits into three clear price tiers locally. Premium private-pay homes through Chilworth (SO16) and parts of Bassett (SO16) trade on EBITDA multiples of 7 to 9 times for Good and Outstanding-rated stock, with bed counts typically 30 to 60. Mid-tier mixed-funded homes through Bevois Valley and Bevois Town (SO17/SO16) sit at 5 to 7 times EBITDA. Older converted stock, often Victorian large houses, trades down at 4 to 5 times where it trades at all.

The lender pool segments along similar lines. Specialist healthcare desks at **Shawbrook**, Cambridge & Counties and Hampshire Trust Bank cover Good and Outstanding rated assets at 60 to 70% LTV. Some private-credit names take Requires Improvement at meaningfully tighter leverage (45 to 55%) on a workout basis, but the mainstream desks step back below Good.

## CQC ratings and what each means for lender appetite

The Care Quality Commission grades on five domains (safe, effective, caring, responsive, well-led) and rolls up to an overall rating. The four overall outcomes drive lender appetite as follows.

| CQC overall rating | Mainstream lender appetite | Typical LTV | Typical rate band |
|---|---|---|---|
| Outstanding | Full appetite, competitive | 65–70% | 8.0–8.5% pa |
| Good | Full appetite at most desks | 60–70% | 8.0–9.0% pa |
| Requires Improvement | Selective, private-credit only | 45–55% | 9.5–11% pa |
| Inadequate | No mainstream funding | n/a | n/a |

A "Good" rating is the practical floor for funding from **Shawbrook**, Cambridge & Counties and Hampshire Trust Bank. If the home is rated "Requires Improvement" at the date of valuation, the deal needs to wait for a re-inspection that lifts the rating before mainstream funding becomes available, or move to private credit at meaningfully tighter terms.

## Occupancy thresholds and what lenders read into them

Occupancy is the single biggest line item after CQC rating. Specialist desks want to see 85% or above for a Good-rated home, with 80% as the practical floor for Outstanding stock (Outstanding tends to fill faster, so even a temporary dip below 80% gets a fair hearing).

The other occupancy data point lenders test: trailing-12-month average versus current. A home running at 92% today but with a 78% TTM average reads as volatile and prices wider than a steady 87%. Stability over time matters as much as the headline number.

For a 42-bed home in SO16 currently at 90% occupancy with a TTM of 88%, that data shape is exactly what **Shawbrook**'s healthcare desk wants to see at indicative-terms stage.

## Fee mix: local authority vs private split

Private-pay weighted homes price keenest. A Bassett home running 75% private-pay residents at an average weekly fee of £1,450 reads materially better than a Bevois Valley home running 25% private-pay at £950 average across the book.

Local authority fees in Hampshire run £780 to £920 per week for standard residential care at mid-2026, with nursing top-ups taking that to £950 to £1,100. Private fees in SO16 and SO16 commonly clear £1,400 to £1,800. The gross EBITDA per bed difference is the entire reason premium-cluster stock trades on 8x earnings while mid-tier stock trades on 5x.

## Goodwill vs bricks-and-mortar valuation

Specialist healthcare valuations split the asset value into two components. Bricks-and-mortar (the building shell and curtilage on a notional vacant-possession or alternative-use basis) and goodwill (the running business, the registration, the staff, the resident relationships, the trading history).

For Southampton care home freehold transactions at mid-2026, the typical split sits at 60/40 to 65/35 bricks-to-goodwill on Good and Outstanding rated stock. Premium boutique homes in SO16 sometimes split closer to 55/45 because the trading premium is real.

Lender treatment varies. **Shawbrook**'s healthcare desk lends against the full going-concern value (bricks plus goodwill) at 60 to 65% LTV. Cambridge & Counties and Hampshire Trust Bank often cap goodwill exposure at a percentage of the total facility, in practice lending 70% against bricks and 50% against goodwill, which rolls up to a blended LTV in the high 50s.

For a £4.2M going-concern value home with a 65/35 split, that means £2.73M of bricks-and-mortar and £1.47M of goodwill. **Shawbrook** would lend up to roughly £2.73M (65% blended). Cambridge & Counties would lend roughly £1.91M (70% of bricks) plus £735,000 (50% of goodwill), for a £2.65M facility. Different desks, different structures, similar all-in number.

## Active specialist lender desks

For a Good or Outstanding rated Southampton care home in the £2M to £8M facility bracket at mid-2026, four desks should be on the shortlist.

**Shawbrook** healthcare team. Active across Hampshire, full going-concern lending, 60 to 70% LTV, 8.0 to 8.5% pa for Outstanding, 8.5 to 9.0% pa for Good.

Cambridge & Counties. Long-standing care home lender, regional underwriter who knows the SO16/SO16 cluster, 60 to 65% LTV with the bricks/goodwill split structure, 8.5 to 9.0% pa.

Hampshire Trust Bank. Specialist desk with appetite for Good-rated mid-size homes, 60 to 65% LTV, 8.5 to 9.0% pa, typically faster turnaround than Cambridge & Counties.

OakNorth. Active on larger transactions (£5M plus), going-concern lending, 60 to 65% LTV, 8.5 to 9.5% pa depending on covenant.

For larger group transactions (two or more homes), the same panel plus ASK Partners private credit for the higher-leverage and Requires-Improvement workouts.

## Re-inspection timing and how to manage it

CQC inspection cycles run roughly every 12 to 30 months depending on the previous rating and any intervening events. Where an inspection is due in the next six months and the home's current rating is "Good" sitting on a borderline performance, the lender will sometimes pull terms or impose a re-inspection condition precedent.

Three practical moves on this. First, check the CQC website at indicative-terms stage and flag any inspection due inside six months to the lender up front. Surprises at credit committee kill deals. Second, where re-inspection risk is real, time the completion to fall after the next inspection date wherever possible. Third, if the inspection is imminent and unavoidable, structure the facility with a margin step-up that triggers if the rating drops a level, this gives the lender comfort to write the deal at par on day one.

## Worked Bassett refinance example

SO16, 38-bed home in Bassett, rated Good across all five domains at the last inspection (14 months ago). Occupancy 89% current, 86% TTM. Fee mix 70% private at £1,520 average weekly, 30% local authority at £880 average. Trailing EBITDA £620,000 pa. Going-concern valuation £4.5M (65/35 bricks/goodwill split).

Existing first charge: £2.8M, ending fixed rate next quarter. Refinance target: £2.95M facility, modest capital raise for refurbishment.

EBITDA cover at 8.5% pa stressed to 10.0% over a 20-year amortisation. Monthly debt-service: roughly £28,500/month, £342,000 pa. EBITDA cover: £620,000 / £342,000 = 181%. Comfortably clears a 150% test.

**Shawbrook** quoted 8.4% pa at 65% LTV (£2.93M) on a 5-year fix. Cambridge & Counties quoted 8.6% pa at the bricks-plus-50%-goodwill blend (£2.66M). Hampshire Trust Bank quoted 8.5% pa at 60% LTV (£2.7M). The borrower landed with **Shawbrook** on rate and leverage.

CQC re-inspection due roughly 10 months post-completion. Flagged to **Shawbrook** at credit, no margin step-up imposed, condition precedent at completion confirmed clean inspection prior.

## Personal guarantee scope and registered manager risk

Two operational items that come up at credit committee on almost every care home transaction.

Personal guarantees on owner-operator deals typically sit at 25 to 40% of the facility for an experienced operator with a clean trading record, scaling up to 50% for first-time care home operators or where the borrower has limited sector track record. The PG is rarely waived entirely on owner-operator deals at the £2M+ facility size.

Registered manager risk is the other quiet underwriting concern. The CQC requires every home to have a registered manager, and the loss of an experienced manager has been known to drop a home from Good to Requires Improvement at the next inspection. Lenders increasingly want to see the registered manager's tenure, contractual position and succession plan documented at indicative-terms stage. For a Bassett home where the registered manager has been in post seven years with no notice given, that reads materially differently to a home where the registered manager is six months into a new role and the previous manager left under unclear circumstances.

## What lenders will want at indicative-terms stage

For a clean indicative-terms run on a Southampton care home, send the following on the first call:

- Most recent CQC inspection report and date of the next due inspection
- Trailing 12-month occupancy data with monthly breakdown
- Fee mix (private vs local authority) with average weekly fee per resident in each category
- Two to three years of accounts showing EBITDA before owner remuneration
- Confirmation of registered manager tenure and any planned changes
- Asset details: bed count, en-suite ratio, last refurbishment, freehold or leasehold position

With that pack we run indicative terms across **Shawbrook**, Cambridge & Counties and Hampshire Trust Bank inside 48 hours, with an indicative rate range, LTV, and the structure each desk will want (bricks-only versus going-concern, blanket charge for groups, PG scope).

## Talk to us about your care home

If you are looking at a Southampton care home freehold purchase or a refinance and you want indicative terms from the three or four specialist desks that actually fund the SO16 and SO16 cluster, send us the CQC rating, occupancy, fee mix and trailing EBITDA. We will come back inside 48 hours with terms and the practical structure each desk will want.

[Contact us](/contact) to discuss your care home case.

For the national care home lender network behind the Southampton desk, see the [Southampton page on Commercial Mortgages Broker](https://commercialmortgagesbroker.co.uk/locations/hampshire/southampton).`,
    image: "/images/blog-care-home.png",
    author: "Commercial Mortgages Southampton",
    publishDate: "2026-06-21",
    category: "Sector Analysis",
    tags: ["care home", "southampton", "CQC", "specialist", "trading business"],
    localStats: [],
  },

  {
    slug: "pub-freehold-purchase-southampton-barrelage-ebitda",
    title: "Pub freehold purchase in Southampton: barrelage, EBITDA and the specialist lender desks",
    excerpt:
      "Buying a pub freehold is one of the most specialist commercial mortgages on the panel. Lenders test barrelage, beer-tie status, food-to-wet revenue split, license type, the operator's track record, and the EBITDA cover before they look at bricks-and-mortar value. This piece walks through what the licensed-trade desks at Cynergy Bank, ASK Partners and the small group of pub-active specialists actually want to see, using the recent Hedge End and Shirley pub freeholds I have placed as worked examples. Free-of-tie freehold prices significantly tighter than tied; food-led pubs price tighter than wet-led. The piece sets out the rate ranges, the typical LTV ceilings, and where I see the 2026 pub freehold market heading.",
    content: `Buying a pub freehold is one of the most specialist commercial mortgages on the panel. Lenders test barrelage, beer-tie status, food-to-wet revenue split, license type, the operator's track record, and the EBITDA cover before they even look at bricks-and-mortar value. The licensed-trade desks at **Cynergy Bank**, ASK Partners and the small group of pub-active specialists run a different underwrite to a standard commercial investment lender, and getting placed on the right desk first time saves four to six weeks.

This piece walks through how the pub freehold underwrite actually works at mid-2026, with worked examples from recent Hedge End and Shirley transactions.

## Why pubs are a specialist underwrite

Three reasons pub freeholds sit outside mainstream commercial mortgage product. The asset value is heavily dependent on trading performance (a closed pub can lose 30 to 50% of value in 12 months). The regulatory layer (premises licence, designated premises supervisor, license review history) introduces deal-killing variables that no high-street commercial lender wants to assess. And the tie status (free-of-tie versus brewery-tied) materially changes the cashflow shape and the alternative-use valuation.

The mainstream commercial desks at **NatWest**, **Lloyds**, **Barclays** and **Santander** will look at pub freeholds in their wider commercial books, but pricing is wider and appetite limited. The active sector is run by **Cynergy Bank**, ASK Partners and Allica Bank's hospitality desk for clean cases, with a handful of private credit names for higher-leverage or distressed.

## Free-of-tie vs tied freehold: pricing differential

A free-of-tie freehold gives the operator full commercial flexibility to buy beer, wines and spirits on the open market. A tied freehold (still rare now after pubco asset sales but present in pockets) carries a beer tie to a named brewery or pubco, restricting purchase margin.

Free-of-tie pubs price approximately 50 to 75 basis points tighter than tied freeholds, all else equal. The reason is alternative-use value. A free-of-tie pub can be repositioned, refreshed, converted to gastro, or sold as a free-of-tie going concern. A tied freehold's exit options are narrower, the buyer pool smaller, and the secondary market valuation more volatile.

For Southampton at mid-2026, free-of-tie freehold pricing runs 8.5 to 9.0% pa at 60 to 65% LTV. Tied freeholds, where they appear, sit 9.0 to 9.75% pa.

## Barrelage and what lenders read into it

Annual barrelage (volume of beer sold, measured in 11-gallon brewers' barrels) is the proxy lenders use for trading run-rate. The reasons are practical: barrelage is hard to falsify (it cross-references against supplier invoices), it normalises across pub size, and it correlates well with EBITDA.

Typical Southampton market barrelage benchmarks at mid-2026:

- Wet-led community pub, 150 to 250 barrels per year
- Mixed wet/food pub, 200 to 350 barrels
- Food-led gastropub, 100 to 200 barrels with strong food revenue
- High-volume destination pub, 400 to 700 barrels

Lenders typically want to see three years of barrelage data, stable or rising trend, with the most recent 12 months tracking to plan. A pub showing 280 barrels in year one, 310 in year two, 295 in year three reads as stable. A pub showing 380, 290, 220 reads as declining and prices wider or gets declined.

## Food-to-wet revenue split: the 60/40 threshold

The revenue mix between food (gross profit margin 65 to 70%) and wet sales (gross profit 70 to 75% on free-of-tie) drives lender comfort. Food-led pubs with a 60/40 food-to-wet split or stronger price tighter and clear underwriting more readily because:

- Food revenue is generally more stable through the trading week
- Food-led pubs tend to attract a broader demographic
- Alternative-use value (restaurant conversion) is stronger
- Operating margins are more predictable

A 60/40 food-to-wet split is the practical threshold. Above that, **Cynergy Bank** and Allica's hospitality desk both look at 65 to 70% LTV. Below 60/40 (wet-led), leverage typically caps at 60% and pricing widens 25 to 50 basis points.

## EBITDA cover: 1.8 to 2.4 times typical

Pub lending runs EBITDA cover, not ICR. The standard threshold sits at 1.8 to 2.4 times stressed monthly debt-service, with the stronger food-led free-of-tie freeholds clearing 2.4x comfortably and the wet-led community pubs landing at the lower end.

The stress test applies a notional rate roughly 1.5 to 2.0% above pay rate. For a pay rate of 8.7% pa, lenders typically run the EBITDA cover test at 10.2 to 10.7% notional.

## Bricks-and-mortar vs goodwill valuation

Specialist pub valuations split similarly to care homes. Bricks-and-mortar (often an alternative-use figure) and going-concern value (the trading pub on a fair-maintainable-trade basis).

For Southampton at mid-2026, the typical going-concern multiple sits at 6 to 8 times EBITDA for Good food-led free-of-tie freeholds and 4 to 6 times for wet-led tied or marginal cases. The bricks-and-mortar element often sits at 50 to 65% of the going-concern figure for a healthy free-of-tie freehold, higher for prime corner sites with strong alternative-use potential, lower for isolated rural houses.

## Active specialist desks at mid-2026

| Desk | Active loan size | Typical LTV | Rate range |
|---|---|---|---|
| **Cynergy Bank** licensed trade | £500K–£5M | 60–65% | 8.5–9.0% pa |
| ASK Partners | £750K–£10M | 60–65% | 9.0–9.75% pa |
| Allica Bank hospitality | £400K–£3M | 60–65% | 8.75–9.25% pa |
| **NatWest** commercial | £1M+ on covenant | 55–60% | 8.75–9.5% pa |
| Private credit (workout) | £1M–£15M | 45–55% | 10–13% pa |

For most clean Southampton free-of-tie pub freeholds in the £500K to £3M bracket, **Cynergy Bank** and ASK Partners are the two desks to lead with.

## Worked example 1: Hedge End pub refinance

SO30, free-of-tie food-led freehold in central Hedge End. 18-cover restaurant area plus a 40-cover bar, eight letting rooms on the upper floors generating ancillary £85,000 pa. Food-to-wet split 68/32. Barrelage 240 (steady three-year trend). Trailing EBITDA £415,000 pa including the rooms.

Existing first charge £1.45M maturing this autumn. Going-concern valuation £2.6M, bricks-and-mortar element £1.65M. Refinance target £1.55M plus a £150,000 capital-raise for room refurbishment, £1.7M facility.

Pay rate at 8.6% pa stressed to 10.1% over a 20-year amortisation. Monthly debt-service: roughly £14,750/month, £177,000 pa. EBITDA cover: £415,000 / £177,000 = 2.34x. Clears the 2.0x threshold comfortably.

**Cynergy Bank** quoted 8.65% pa at 65% of going-concern (£1.69M, marginal). Allica's hospitality desk quoted 8.85% pa at the same leverage. ASK Partners offered 9.1% pa at 70% with a slightly faster process. The borrower landed with **Cynergy Bank** on rate, 5-year fix.

## Worked example 2: Shirley pub freehold purchase

SO15, Shirley high street, Shirley. Free-of-tie wet-led community pub, no food offer to speak of, large car park rear. Barrelage 270 (rising trend over three years, new operator improved trade). Food-to-wet 15/85 (essentially wet-led). Trailing EBITDA £165,000 pa.

Purchase price £1.05M. Going-concern valuation £1.05M with a bricks-and-mortar element of £720,000 (the car park lifts alternative-use). Target loan £680,000 (65% on bricks, 65% on going-concern, both land near the same number).

Pay rate at 8.9% pa stressed to 10.4% over a 20-year amortisation. Monthly debt-service: roughly £6,000/month, £72,000 pa. EBITDA cover: £165,000 / £72,000 = 2.29x. Clears, but only just on a wet-led case where lenders run the cover tighter.

**Cynergy Bank** declined on the food-to-wet split, wanted to see a food offer in place. ASK Partners quoted 9.25% pa at 60% LTV (£630,000). Allica quoted 9.1% pa at 60% LTV after a site visit to assess the alternative-use story. The borrower landed with Allica at £630,000 on a 5-year fix, with the remaining £50,000 covered by additional cash deposit.

Lesson: wet-led freeholds are workable but the leverage caps tighter and the lender pool narrows materially. Plan for 60% LTV rather than 65% on indicative-terms modelling.

## License type, review history and planning

Three regulatory items that move pricing or kill deals before any valuation work happens.

Premises licence type. A full on-licence permitting late-hours trading is worth materially more than a restaurant-style licence with curfew conditions. Lenders ask for a copy of the licence and any conditions imposed at indicative-terms stage. A Hedge End pub with a 1am terminal hour and no recent review reads well. A Shirley pub with an 11pm terminal hour, four noise complaints and a pending review reads poorly.

License review history. Anything more than a single historical review (other than minor amendments) sets the lender's risk team into a deeper look. Two or more reviews in the last five years usually moves the deal to ASK Partners or out of the mainstream panel entirely.

Planning. Any pending change-of-use application (typically pub-to-residential conversion attempts by the previous owner) on the property record will halt mainstream lending until withdrawn or refused. We pull the planning record on day one to confirm position.

## What we need on the first call

For a clean indicative-terms run on a Southampton pub freehold purchase or refinance, send the following:

- Three years of audited or accountant-prepared accounts showing EBITDA
- Three years of barrelage data
- Most recent rolling 12-month trading P&L (monthly if available)
- Food-to-wet revenue split (gross sales basis)
- Premises licence copy and review history
- Operator's CV: prior pub operations, tenure, training history
- Target loan amount, deposit position, purchase price or refinance numbers

With that pack we approach **Cynergy Bank**, ASK Partners and Allica's hospitality desk for indicative terms inside 48 hours. Where the food-to-wet sits above 60/40 and barrelage is stable or rising, expect three competitive quotes. Where it sits below 60/40 or barrelage is declining, expect a narrower pool and meaningfully tighter leverage.

## A note on EBITDA adjustments

One area where pub valuations and the underlying accounts often diverge: owner adjustments. Pub accounts frequently carry owner-operator salaries, family-member employment, motor expenses and shareholder loan interest that should be added back to arrive at fair maintainable EBITDA. Specialist licensed-trade desks expect to see the adjustments laid out clearly at indicative-terms stage, with supporting evidence.

A pub showing £140,000 stat EBITDA with £80,000 of legitimate owner adjustments has £220,000 of fair maintainable EBITDA, which is the number lenders run cover against. The same pub presented at the stat number will price wider or get declined for cover. Get the add-back schedule prepared with the accountant before sending the pack out.

## Talk to us about your pub freehold

If you are looking at a Southampton pub freehold freehold purchase or refinance and you want indicative terms from the three or four specialist desks that actually fund licensed trade, send us the three-year trading accounts, barrelage data, food-to-wet split and target loan amount. We will come back inside 48 hours with indicative terms and the structure each desk will want.

[Contact us](/contact) to discuss your pub case.

For the wider licensed-trade lender desks behind the Southampton operation, see the [Southampton page on Commercial Mortgages Broker](https://commercialmortgagesbroker.co.uk/locations/hampshire/southampton).`,
    image: "/images/blog-pub.png",
    author: "Commercial Mortgages Southampton",
    publishDate: "2026-07-05",
    category: "Sector Analysis",
    tags: ["pub", "licensed trade", "southampton", "barrelage", "trading business"],
    localStats: [],
  },

  {
    slug: "semi-commercial-mortgage-southampton-shop-with-flat-fca",
    title: "Semi-commercial mortgage on a Southampton shop-with-flat: the FCA twist most brokers miss",
    excerpt:
      "The classic Southampton semi-commercial archetype, ground-floor retail, one or two flats above, on Portswood Road or Shirley high street or Bitterne Road, is one of the most well-funded products on the panel. InterBay Commercial, Aldermore, Hampshire Trust Bank and Together all quote up to 75% LTV on the right asset. But there is a catch most brokers overlook: where the residential element exceeds 40% of floor area and the borrower or a family member lives in part of the property, the loan can fall inside the Financial Conduct Authority regulated mortgage perimeter. Apply for an unregulated commercial mortgage on a regulated case and the lender will decline at submission. This piece walks through the screening test, the regulated commercial mortgage product, and the specific Southampton situations that trigger the regulated route.",
    content: `The classic Southampton semi-commercial archetype, ground-floor retail, one or two flats above, on Portswood Road or Shirley high street or Bitterne Road, is one of the most well-funded products on the panel. **InterBay Commercial**, Aldermore, Hampshire Trust Bank and Together all quote up to 75% LTV on the right asset at mid-2026. But there is a catch most brokers overlook, and applying for an unregulated commercial mortgage on a regulated case gets the deal declined at submission.

Where the residential element exceeds 40% of floor area and the borrower or a family member lives in part of the property, the loan can fall inside the Financial Conduct Authority regulated mortgage perimeter. We are not FCA-authorised. We do not write regulated mortgage contracts. Where a case falls inside the regulated perimeter, we refer it to a regulated broker. This piece walks through the screening test, the specific situations that trigger the regulated route, and the active unregulated semi-commercial desks for everything that sits cleanly the other side of the line.

## The Southampton semi-commercial market: the four spines

Southampton has four distinctive semi-commercial high-street spines that account for most of the £200,000 to £1.5M deal flow.

Portswood Road through Portswood (SO17) and into Highfield (SO17). Independent retail, food and drink, dental, opticians, with flats above almost universally. The strongest semi-commercial parade in north Southampton.

Shirley high street through Shirley (SO15) and into Millbrook (SO15). Mixed retail and service trades, with one and two-bedroom flats above. Strong AST market, professional renter demographic.

Bitterne Road through Bedford Place (SO17) and Highfield (SO16). The most premium of the four spines, particularly the Bedford Place village section. Food and drink heavy, with high-quality residential conversion above.

Cross Streets and Bassett village (SO16/SO145). Mixed retail and service with traditional shop-with-flat-above stock, often Victorian or Edwardian.

Most of the deals we see across these spines are between £300,000 and £900,000 facility size. Standard shape: retail or service trade at ground floor, one or two ASTs above, single freehold title.

## The 40% floor area test

The FCA regulated mortgage perimeter for a property loan turns on two questions. Is at least 40% of the property (by floor area) used as a dwelling? And does the borrower or a related person occupy or intend to occupy that dwelling?

If the answer to both is yes, the loan is a regulated mortgage contract. If either answer is no, the loan sits outside the regulated perimeter and is an unregulated commercial mortgage.

For a typical Southampton shop-with-flat asset on Portswood Road, the floor area split needs measuring not estimated. A 65 sqm ground-floor shop with two 55 sqm flats above splits 37% commercial / 63% residential. That clears the 40% residential threshold. A 95 sqm ground-floor shop with one 50 sqm flat above splits 66% commercial / 34% residential, under the 40% threshold.

The split matters because everything below 40% residential is automatically unregulated regardless of who occupies the flat. Everything above 40% residential turns on the occupancy question.

## The owner-occupied residential element trigger

The most common regulated trigger. The borrower buys a shop with flat above, plans to live in the flat themselves while running or letting the shop below. Floor-area split is above 40% residential, the borrower occupies the residential. Regulated.

This case routes through a regulated mortgage broker. The product available is a regulated commercial mortgage, written by a smaller pool of lenders authorised to write regulated business (the high-street banks plus a handful of specialist desks). Pricing is broadly comparable to unregulated semi-commercial, but the process, the documentation and the consumer protection wrapper are entirely different.

We screen for this on the first call. If the borrower's plan is to live in any part of the property, we flag the regulated route and refer.

## The family-let trigger

Less common but easy to miss. The borrower buys an unregulated semi-commercial property, intends to let the flat above to a family member (typically an adult child or parent) at market rent or below. Floor-area split above 40% residential, related-person occupation. Regulated.

A standard AST to an arms-length tenant is fine and keeps the deal unregulated. An AST or licence to a close family member trips the related-person test.

The fix where it matters: either let the residential element only to arms-length tenants, or accept the regulated route from the outset. Mid-process restructuring is painful and slow.

## Regulated vs unregulated commercial mortgage product

| Feature | Unregulated commercial | Regulated commercial |
|---|---|---|
| Borrower test | EBITDA / ICR | Affordability + ICR (consumer test) |
| Documentation | Standard commercial | Regulated mortgage offer, cooling-off |
| Lender pool | **InterBay Commercial**, Aldermore, YBS, Together | High-street + specialist regulated desks |
| Broker | Our remit (not FCA-authorised) | Refer to regulated broker |
| Typical LTV | up to 75% | 70–75% |
| Rate range (mid-2026) | 7.5–9.5% pa | 6.5–8.5% pa |

The regulated product tends to price tighter on rate but slower on process. The unregulated product is faster, more flexible on cover-test treatment, and the documentation is materially lighter.

## Active unregulated semi-commercial desks

For Southampton semi-commercial in the £200,000 to £1.5M facility bracket where the case sits cleanly outside the regulated perimeter, four desks should be on the shortlist.

**InterBay Commercial** (OSB Group). The market-leading desk for Southampton shop-with-flat-above. Up to 75% LTV, blended ICR test, 7.5 to 8.5% pa for clean cases on a 5-year fix.

Aldermore. Active in the £300K to £2M bracket, up to 75% LTV, 7.75 to 8.75% pa, slightly tighter ICR threshold than **InterBay** but faster turnaround.

Hampshire Trust Bank. Up to 75% LTV, conservative ICR treatment, 7.75 to 8.5% pa for strong cases.

Together. Higher leverage appetite (up to 75%+ in some cases) at wider pricing, 8.5 to 9.5% pa. Useful where the ICR is marginal or the property condition is below standard.

For deals tipping above £1.5M, **Shawbrook**, Cambridge & Counties and Hampshire Trust Bank also quote semi-commercial alongside their standard commercial investment book.

## How we screen on the first call

Four questions in the first ten minutes settle the regulated/unregulated question almost every time.

1. What is the floor-area split between commercial and residential? If we don't know, what is the best estimate? (We will get a measured survey later, but indicative on the first call is fine.)
2. Will you, the borrower, occupy any part of the residential element after completion?
3. Will any close family member occupy or rent any part of the residential element?
4. Are the residential units currently let, and to whom?

If the floor-area split is below 40% residential, the case is unregulated regardless of occupancy. If above 40% residential and any answer to questions 2-3 is yes, the case is regulated and we refer. Everything else lands in the unregulated semi-commercial book and we run the standard process.

## Worked Portswood parade example

SO17, Portswood Road parade. Two-unit retail with three flats above, single freehold title. Ground-floor units: a 55 sqm cafe and a 48 sqm independent retailer, both on 5-year FRI leases. Three flats above: one studio (28 sqm), two one-beds (36 sqm and 40 sqm).

Floor-area split: commercial 103 sqm, residential 104 sqm. 50.2% residential, above the 40% threshold.

Buyer is a Southampton-based limited company landlord. No personal occupation, no family-let intent. All three flats currently let to arms-length tenants on standard ASTs. The case is unregulated.

Purchase price £825,000. Commercial rent £42,000 pa combined. Residential AST income £39,600 pa combined. Total gross rent £81,600 pa.

Loan target £620,000 (75% LTV). Pay rate at 8.0% pa stressed to 9.5% on an interest-only basis. Annual stressed interest: £620,000 x 9.5% = £58,900. Blended ICR: £81,600 / £58,900 = 138%. Marginal at a 145% blended threshold after the standard 5% residential haircut (which drops usable rent to £79,620, ICR 135%).

Resolution: leverage reduces to £550,000 (67% LTV). Stressed interest: £52,250. ICR on haircut rent: 152%. Clears.

**InterBay Commercial** quoted 7.95% pa at 67% LTV on a 5-year fix. Aldermore quoted 8.1% pa at the same leverage. Hampshire Trust Bank quoted 8.05% pa with a slightly slower process. The borrower landed with **InterBay** on rate.

If at any stage the borrower had said "actually one of the flats is going to my son", the case would have flipped regulated, we would have referred to a regulated broker, and the unregulated panel above would have been the wrong panel from day one.

## Talk to us about your semi-commercial deal

If you are looking at a Southampton shop-with-flat-above purchase or refinance and you want a fast read on whether the case sits in the regulated perimeter or the unregulated commercial book, send us the floor-area split (or our best estimate), the occupancy position and the headline rent and loan numbers. We will tell you on the first call which side of the line the case sits on, and if it is unregulated we will run terms with **InterBay Commercial**, Aldermore, Hampshire Trust Bank and Together inside 48 hours.

[Contact us](/contact) to discuss your semi-commercial case.

For the wider semi-commercial lender pool and the regulated-broker referral network, see the [Southampton page on Commercial Mortgages Broker](https://commercialmortgagesbroker.co.uk/locations/hampshire/southampton).`,
    image: "/images/blog-semi-commercial.png",
    author: "Commercial Mortgages Southampton",
    publishDate: "2026-07-19",
    category: "Sector Analysis",
    tags: ["semi commercial", "FCA", "southampton", "regulated", "shop with flat"],
    localStats: [],
  },

  {
    slug: "portfolio-refinance-southampton-when-to-consolidate",
    title: "Portfolio refinance in Southampton: when to consolidate and when to leave individual mortgages alone",
    excerpt:
      "If you hold five or more commercial investment assets across Southampton, the question of whether to consolidate into a single portfolio facility or keep individual mortgages running is a real one. Consolidation gives you a single rate, a single renewal date, and meaningful pricing improvement at the right LTV. But it also gives you a blanket charge that limits flexibility on individual asset sales and a single early-repayment-charge profile that is harder to break than five smaller ones. This piece walks through the decision framework I use with portfolio landlords, including the blanket-charge vs aggregated-structure trade-off, the typical pricing improvement (25 to 75 basis points), and the operational benefits of consolidating into Shawbrook, Cambridge & Counties or Cynergy Bank.",
    content: `Coming soon, practical guide to portfolio refinance decisions.

## Outline

- The five-or-more asset threshold
- Blanket charge vs aggregated structure
- Pricing improvement: typical 25 to 75 basis points
- The flexibility cost: asset disposal, individual refinancing
- The operational benefit: single renewal, single review
- ERC profile across the consolidated facility
- Active panel: Shawbrook, Cambridge & Counties, Cynergy, OakNorth
- Worked two-site nursery group example
- Worked four-asset Bassett parade example`,
    image: "/images/blog-portfolio-refinance.png",
    author: "Commercial Mortgages Southampton",
    publishDate: "2026-08-02",
    category: "Guide",
    tags: ["portfolio", "refinance", "southampton", "investment", "consolidation"],
    localStats: [],
  },

  {
    slug: "stamp-duty-commercial-property-southampton-2026-changes",
    title: "Stamp duty on commercial property: the 2026 picture and what is changing",
    excerpt:
      "Stamp Duty Land Tax on commercial property in Southampton and the rest of England runs on three non-residential bands: 0% to £150,000, 2% on the next £100,000, 5% on the balance. There is no first-time-buyer relief, no second-property surcharge, and no annual tax on enveloped dwellings issue. This piece walks through how SDLT is calculated on commercial purchases at typical Southampton price points (£600K shop+flat, £1.7M trading business freehold, £3.7M industrial unit), how mixed-use property is treated, what the 2026 Autumn Budget signalled for the bands, and the most common SDLT mistakes commercial buyers make, including the mixed-use mis-classification trap.",
    content: `Coming soon, full guide to commercial property stamp duty in Southampton.

## Outline

- The non-residential SDLT bands at mid-2026
- Worked example 1: £600K semi-commercial shop+flat
- Worked example 2: £1.7M trading business freehold
- Worked example 3: £3.7M industrial unit
- Mixed-use vs residential classification
- The mixed-use trap and HMRC's recent enforcement stance
- Limited company vs personal purchase: tax treatment differences
- Autumn Budget 2026: signalled changes
- SDLT and refinancing: when does it apply, when does it not`,
    image: "/images/blog-stamp-duty.png",
    author: "Commercial Mortgages Southampton",
    publishDate: "2026-08-16",
    category: "Tax & Structure",
    tags: ["stamp duty", "SDLT", "tax", "southampton", "commercial property"],
    localStats: [],
  },

  {
    slug: "limited-company-structure-commercial-mortgage-investment",
    title: "Limited company structure for commercial mortgage investment: SPV, group company or trading company?",
    excerpt:
      "Most commercial investment mortgages in Southampton are written into limited companies, but the question of whether to use a clean special-purpose vehicle (SPV), a group holding structure, or the existing trading company is one borrowers regularly get wrong. The lender treatment, the tax treatment and the future-flexibility implications are all different. This piece walks through the standard SPV structure (single asset, SIC code 68209, clean limited company), the group-holding alternative for portfolio investors, and when it makes sense to put commercial property on the trading company balance sheet. With reference to lender appetite at NatWest, Lloyds, Shawbrook, Cambridge & Counties and InterBay Commercial across each structure.",
    content: `Coming soon, guide to limited company structures for commercial mortgage investment.

## Outline

- The SPV standard: single asset, SIC 68209
- Group structure: holding company plus SPV per asset
- Trading company holding: when it makes sense
- Tax treatment by structure
- Lender appetite by structure
- Personal guarantee implications
- Future-flexibility: refinance, sale, gift
- Worked example: 4-asset portfolio in Bassett
- Worked example: dental practice with property in same limited company`,
    image: "/images/blog-limited-company.png",
    author: "Commercial Mortgages Southampton",
    publishDate: "2026-08-30",
    category: "Tax & Structure",
    tags: ["limited company", "SPV", "structure", "tax", "investment"],
    localStats: [],
  },

  {
    slug: "commercial-bridging-southampton-when-right-when-not",
    title: "Commercial bridging in Southampton: when it is the right answer, and when it absolutely is not",
    excerpt:
      "Commercial bridging at 0.75 to 1.10% per month is meaningfully more expensive than term commercial mortgage debt at 7.5 to 9.0% pa, but for the right case it is the right answer. Vacant possession purchase below market value, change-of-use light works, sub-12-month exit, chain-break refinancing, all real bridging use cases I see in the Southampton market every month. The wrong cases, using bridging where a clean commercial investment mortgage would fund, or using bridging because the borrower's accounts are not yet ready for term, cost real money and frequently end badly. This piece walks through the case-selection framework, the bridge-to-let exit mechanic, and the active Southampton bridging desks at LendInvest, Shawbrook, Together and Hampshire Trust Bank.",
    content: `Coming soon, practical guide to commercial bridging decisions.

## Outline

- What commercial bridging actually costs: 0.75 to 1.10% pm
- The right cases: VP purchase, light works, chain break
- The wrong cases: 'because we couldn't get a term loan'
- The bridge-to-let mechanic and the agreed exit
- Bridge-to-sale: when it works
- Active Southampton bridging desks
- Worked example 1: vacant Portswood parade purchase
- Worked example 2: change-of-use Ocean Village unit
- Worked example 3: chain-break Hedge End pub`,
    image: "/images/blog-bridging.png",
    author: "Commercial Mortgages Southampton",
    publishDate: "2026-09-13",
    category: "Guide",
    tags: ["bridging", "bridge to let", "southampton", "guide", "commercial"],
    localStats: [],
  },
];
