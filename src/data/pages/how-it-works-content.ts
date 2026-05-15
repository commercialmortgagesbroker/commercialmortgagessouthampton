/**
 * /how-it-works page content, Commercial Mortgages Southampton.
 *
 * Five steps from enquiry to drawdown, each 150 to 200 words of real detail.
 * Required entities: RICS, valuation, solicitor, completion, drawdown,
 * lender. Commercial mortgages are unregulated lending, do NOT claim
 * FCA authorisation in body copy. Voice: editorial, broker-led, diagnostic,
 * first-person plural ("we").
 *
 * Rate range mid-2026: 6.0 to 9.0 pct pa.
 */

export interface HowItWorksContent {
  hero: {
    h1: string;
    lede: string;
  };
  intro: {
    h2: string;
    body: string[];
  };
  process: {
    h2: string;
    steps: Array<{
      n: string;
      label: string;
      detail: string;
    }>;
  };
  criteria: {
    h2: string;
    items: Array<{ label: string; detail: string }>;
  };
  timeline: {
    h2: string;
    body: string;
  };
}

export const howItWorksContent: HowItWorksContent = {
  hero: {
    h1: "How a Southampton commercial mortgage actually completes",
    lede:
      "Five steps from initial enquiry to completion and drawdown. Indicative terms inside two business hours. RICS Red Book valuation in week two or three. Solicitor instruction in parallel. Funds drawn at completion in 4 to 8 weeks for clean owner-occupier and investment deals; 6 to 10 weeks where the sector underwrite needs more work, such as an Adanac Park M271 logistics refinance, an Ocean Village hospitality acquisition or a Highfield and Portswood HMO portfolio remortgage.",
  },

  intro: {
    h2: "Commercial mortgage in one paragraph",
    body: [
      'A commercial mortgage is <strong>long-term debt secured against income-producing or owner-occupied commercial property</strong>. In the Southampton market for mid-2026, facilities are typically structured at 65 to 75 percent LTV across 5 to 25 year terms, with monthly capital and interest payments. Rates run 6.0 to 9.0 percent pa depending on product, sector, LTV and covenant strength. Arrangement fees usually 1 to 2 percent of the facility, RICS Red Book valuation 1,500 to 8,000 pounds depending on asset complexity (Ocean Village hospitality and listed-building work on Above Bar Street sits at the top of that band), and legal fees both sides.',
      'The "how" splits into two halves: <strong>what each lender needs to see</strong> (covenant, EBITDA / ICR / DSCR cover, deposit, sector-specific evidence) and <strong>what the process looks like in calendar weeks</strong> (enquiry, indicative terms, full application, RICS valuation, credit approval, legal completion, drawdown). We handle both, packaging the application to match each lender desk\'s expectations and coordinating the timeline from your first call through the final completion statement.',
    ],
  },

  process: {
    h2: "The five-step process from enquiry to drawdown",
    steps: [
      {
        n: "01",
        label: "Initial enquiry and free deal assessment, 2-hour response",
        detail:
          "You send us the basics: property type and address, purchase price or current valuation, deposit position, and either the last two years of business accounts (owner-occupier or trading-business) or the lease and rent roll (commercial investment). We read the deal against current Southampton lender appetite and call you back within two business hours during the working day. A recent Adanac Park M271 B8 logistics refinance came in at ten in the morning and had a structured view back before lunch. The first conversation is diagnostic and free of charge, no application form, no credit check, no fees committed. We tell you whether the deal is fundable, where the likely friction sits, what the probable LTV and rate range look like, which two or three lender desks we would target first, and what evidence we will need to package the credit submission. If the numbers do not work, you hear it on this call. No wasted valuer fees, no wasted legal time.",
      },
      {
        n: "02",
        label: "Lender shortlist and indicative terms, within 48 hours",
        detail:
          "We run the deal across three to five lender desks from the panel, typically a mix of high-street commercial (NatWest, Lloyds, Barclays, Santander), challenger banks (Allica Bank, HTB, Cambridge & Counties, YBS Commercial, Aldermore) and specialists (InterBay Commercial, LendInvest, Cynergy Bank, Shawbrook) where the deal needs them. On a recent Highfield and Portswood HMO portfolio remortgage we ran a four-lender shortlist back inside 36 hours, with a 73 percent LTV bid at 7.55 percent pa from a HMO-friendly specialist and a 70 percent LTV bid from a high-street challenger 25 basis points wider. Indicative terms come back inside 48 hours: rate, LTV, term, repayment basis, EBITDA or ICR / DSCR cover, fees, conditions precedent and the lender's appetite to commit. You see the alternatives side by side, with our view on which is the cleanest route and why. Indicative terms are not yet a binding offer, they are a strong commitment to proceed if valuation and credit underwriting confirm what we already understand.",
      },
      {
        n: "03",
        label: "Full application and RICS Red Book valuation",
        detail:
          "We package the credit submission to match the chosen lender's underwriting style. Owner-occupier: two years of filed accounts, current management figures, EBITDA workings, deposit proof, the sale memorandum, identity and source-of-funds documents. Investment: lease, tenant covenant pack, rent roll, the asset's historic occupancy, SPV pack if applicable. Trading-business: sector-specific evidence, CQC inspection reports for care homes, Ofsted for nurseries, NHS contract value for dental, occupancy and ADR for hotel, barrelage and licence for pubs. On a Bassett dental owner-occupier freehold purchase the credit pack included three years of audited partnership accounts, the principal's CV pack, the NHS GDS contract evidence and the deposit proof from retained earnings. The lender instructs the RICS Red Book valuation against its panel of approved Hampshire valuers; the surveyor inspects the property and reports back, typically inside two to three weeks for mainstream commercial assets and three to five weeks for sector-specialist work such as an Ocean Village hospitality acquisition or a Cumberland Place professional office investment. We run legal pack preparation in parallel so we are not waiting in series.",
      },
      {
        n: "04",
        label: "Credit committee, full underwriting and formal mortgage offer",
        detail:
          "With the RICS valuation in hand and the credit pack complete, the lender's underwriter takes the case to credit committee. Committee meetings run weekly or fortnightly depending on the lender. The underwriter tests the EBITDA, ICR or DSCR cover at a stressed notional rate, reviews the valuation against the LTV requested, examines the borrower's accounts, the sector exposure on their book, and any conditions precedent. Approval typically follows within one to two weeks of valuation sign-off on a clean case. The lender then issues a <strong>formal mortgage offer</strong> setting out the binding terms: rate, term, fees, security, personal guarantee position, covenants and any conditions to satisfy before drawdown. We review the offer with you in detail before you accept. Push-back at this stage is sometimes possible, covenant amendments, reduced personal guarantee, fee adjustments, and is worth doing where the case supports it. On a recent Ocean Village hospitality acquisition we negotiated the personal guarantee cap down from 30 percent of facility to 22 percent on the strength of a strong operator track record across two previous South Coast restaurant-with-rooms sites.",
      },
      {
        n: "05",
        label: "Legals, completion and drawdown of funds",
        detail:
          "On offer acceptance, the lender instructs its solicitor and you instruct yours. The legal workstream covers the facility agreement, the first legal charge over the property, any debenture, any all-monies guarantee, the personal guarantee, title investigation, search results, planning compliance, and CPSE replies if commercial investment. Standard commercial conveyancing runs three to four weeks from instruction; complex or multi-asset cases longer. Once the solicitors are satisfied with conditions precedent, completion is fixed for a date that suits both sides. On the day of completion the lender remits the funds to your solicitor; the property transfers; first legal charge registers at HM Land Registry; and your solicitor pays the vendor or redeems the existing facility. <strong>Drawdown is a single tranche</strong>, commercial mortgages are not staged like development finance. Your monthly repayment cycle starts the following month. A typical Southampton completion runs 4 to 8 weeks from indicative terms; our fastest clean owner-occupier on a Cumberland Place professional office acquisition was 28 working days from initial enquiry.",
      },
    ],
  },

  criteria: {
    h2: "What lenders need to see",
    items: [
      {
        label: "Trading history (owner-occupier)",
        detail:
          "Two years of clean filed accounts is the typical minimum. Specialists flex to 12 to 18 months in defensive regulated sectors, dental, GP, pharmacy, established trades, particularly across the Bassett and Highfield healthcare ancillary catchment.",
      },
      {
        label: "EBITDA cover (owner-occupier and trading-business)",
        detail:
          "Trading profit covering the monthly mortgage payment by 1.3 to 1.5 times for owner-occupier; 1.5 to 2.0 times for trading-business sectors. Modelled before submitting.",
      },
      {
        label: "ICR cover (commercial investment)",
        detail:
          "Gross rent against interest cost at 140 to 160 percent stressed at a notional rate 1 to 2 percent above the pay rate. Strong tenant covenant on a long lease prices best, ABP-adjacent freight forwarders and national retail covenants on the M271 corridor and at Westquay underwrite particularly cleanly.",
      },
      {
        label: "Deposit",
        detail:
          "Typically 25 to 30 percent from genuine equity, accumulated retained profit, sale proceeds of another asset, or a family gift declared in writing. Not a second loan over the same security.",
      },
      {
        label: "Sector-specific evidence (trading-business)",
        detail:
          "CQC rating Good or above for care, Ofsted Good or above for nursery, NHS contract for dental, occupancy and ADR for hotel, barrelage and EBITDA for pub. The University Hospital Southampton catchment generates clean evidence packs on the healthcare ancillary side.",
      },
      {
        label: "Realistic valuation",
        detail:
          "Lenders rely on the RICS Red Book valuation, not borrower or vendor estimates. Aggressive valuation assumptions are the most common reason commercial deals stall at credit committee.",
      },
    ],
  },

  timeline: {
    h2: "How long does a Southampton commercial mortgage take?",
    body:
      'From a clean enquiry through to completion and drawdown: <strong>4 to 8 weeks</strong> for mainstream owner-occupier, commercial investment and semi-commercial. <strong>6 to 10 weeks</strong> for trading-business cases (Ocean Village hospitality, Bitterne care home, Bedford Place F&B) and HMO portfolio refinance involving multi-property redemption sequencing across Highfield, Portswood and Bevois Valley. The critical-path item is almost always the RICS Red Book valuation. The fastest clean owner-occupier completion on our recent record was <strong>28 working days</strong>, a Cumberland Place professional office acquisition where the borrower had two years of clean accounts ready, the solicitor moved quickly on enquiries, and the lender had recent comparable approvals on file at the same Hampshire valuer.',
  },
};
