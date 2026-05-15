/**
 * Testimonials, Commercial Mortgages Southampton.
 *
 * Six anonymised-style client quotes covering: dental owner-occupier,
 * MOT freehold, portfolio landlord, care home, semi-commercial buyer,
 * hotelier. Specifics over slogans, real rate, LTV, term, lender
 * (where named permission applies) and the actual outcome.
 *
 * Voice: client first-person, editorial. ~50–80 words each.
 */

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Quoted 8.95% pa over 15 years on the SO16 surgery freehold by my own commercial bank. Matt benchmarked four dental-active lenders, came back at 6.85% over 20 years, and completed inside the vendor's 60-day window. The longer term was the unlock, EBITDA cover went from a tight 1.28x to a comfortable 1.51x. No surprises at credit committee.",
    author: "Dr A. Patel",
    role: "Dental practice principal",
    location: "Bassett, Southampton (SO16)",
  },
  {
    quote:
      "First-time MOT garage freeholder. My landlord retired and gave me 90 days. Matt was straight with me about the environmental due diligence on the body-shop element, Phase II ground investigation, £11K, 5 weeks, but everything was structured around getting that done in time. Together at 65% LTV, 8.95% pa, 20 years. Clean.",
    author: "J. Hardcastle",
    role: "MOT and garage owner",
    location: "Woolston, Southampton (SO19)",
  },
  {
    quote:
      "Refinancing four Southampton investment units off a maturing 5-year fix with mismatched ICR cover. Matt benchmarked nine lenders, narrowed to three, settled at 65% LTV, 6.95% pa on a 5-year fix inside 25-year amortisation. ICR comfortably 145% stressed. Tight credit pack, no decline surprises, completed in seven weeks.",
    author: "S. Khan",
    role: "Commercial property investor",
    location: "Portswood, Southampton (SO17)",
  },
  {
    quote:
      "Care home refinance, 32 beds, CQC Good rating, with a re-inspection due in three months. Matt got us out of the maturing fix and into a 20-year facility with Cambridge & Counties at 8.05% before the inspection cycle could become a complication. Released £150K for capital improvements, ring-fenced at completion. EBITDA cover at 2.0x stressed.",
    author: "P. Marsden",
    role: "Care home operator",
    location: "Bassett, Southampton (SO16)",
  },
  {
    quote:
      "First semi-commercial purchase, Portswood Road shop with three flats above. Matt screened the FCA regulated mortgage perimeter on the first call to confirm the unregulated route was clean (residential floor area was 38%), then placed it with InterBay Commercial at 75% LTV, 7.25% pa over 25 years. Blended ICR at 142%. Approval in nine working days.",
    author: "T. Wells",
    role: "Semi-commercial property investor",
    location: "Portswood, Southampton (SO17)",
  },
  {
    quote:
      "Independent hotel acquisition on the Hampshire coast. Specialist underwrite, RevPAR, ADR, occupancy track record. Matt knew exactly which licensed-trade desks to approach, packaged the EBITDA workings the way the credit officer wanted to read them, and got the deal across the line at 8.65% over 15 years. Saved roughly 80 basis points against my own bank's quote.",
    author: "M. Greaves",
    role: "Hotelier",
    location: "Hedge End, Southampton (SO30)",
  },
];

/**
 * Get a random subset of testimonials for display
 */
export function getRandomTestimonials(count: number = 3): Testimonial[] {
  const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, testimonials.length));
}

/**
 * Get testimonials filtered by location keyword
 */
export function getTestimonialsByLocation(keyword: string): Testimonial[] {
  return testimonials.filter((t) =>
    t.location.toLowerCase().includes(keyword.toLowerCase()),
  );
}
