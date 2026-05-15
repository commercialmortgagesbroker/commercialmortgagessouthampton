import type { MarketData } from "./types";

/**
 * Per-area market data, Commercial Mortgages Southampton.
 *
 * The MarketData[] interface is shared with the dev-fin reference repos and
 * is consumed by area-page market widgets. Field names retain dev-fin
 * vocabulary (`activeDevSites`, `avgDevTimelineMonths`, `planningApprovalRate`)
 * but the values here are calibrated to commercial-mortgage relevance:
 *   - `activeDevSites` counts active commercial-mortgage-relevant items in
 *     the local pipeline, Southampton City Council planning applications inside
 *     the area's postcode catchment plus known transactional activity.
 *   - `avgDevTimelineMonths` reads as "average commercial mortgage process
 *     to drawdown" in months for mainstream owner-occupier / investment.
 *   - `avgPricePerSqft` is residential price per sqft per HM Land Registry,
 *     used as a market-temperature gauge for the wider local market.
 *     Residential transactions are NOT a direct commercial signal; they
 *     proxy area health for ground-floor retail, semi-commercial blended
 *     yield, and tenant-covenant catchment underwriting.
 *   - `rentalYield` is residential headline yield, used as a directional
 *     indicator for semi-commercial blended-yield underwriting.
 *
 * Slugs match AREAS in src/lib/constants.ts.
 */

export const marketData: MarketData[] = [
  {
    slug: "city-centre",
    areaName: "Southampton City Centre and Above Bar",
    avgPricePerSqft: 380,
    planningApprovalRate: 78,
    avgDevTimelineMonths: 6,
    population: 36000,
    growthRate: 4.8,
    activeDevSites: 24,
    rentalYield: 5.6,
    conservationCoverage: 30,
    valueCategory: "premium",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Southampton LPA)",
      planningSource: "Southampton City Council Planning Portal, SO14 / SO15 commercial-relevant 2026",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "ocean-village",
    areaName: "Ocean Village",
    avgPricePerSqft: 480,
    planningApprovalRate: 82,
    avgDevTimelineMonths: 7,
    population: 8200,
    growthRate: 6.4,
    activeDevSites: 16,
    rentalYield: 5.8,
    conservationCoverage: 16,
    valueCategory: "regeneration",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Southampton LPA)",
      planningSource: "Southampton City Council Planning Portal, SO14 marina corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "mayflower-quarter-royal-pier",
    areaName: "Mayflower Quarter and Royal Pier",
    avgPricePerSqft: 360,
    planningApprovalRate: 80,
    avgDevTimelineMonths: 7,
    population: 11200,
    growthRate: 6.2,
    activeDevSites: 18,
    rentalYield: 6.1,
    conservationCoverage: 22,
    valueCategory: "regeneration",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Southampton LPA)",
      planningSource: "Mayflower Quarter Masterplan + Southampton City Council Planning Portal",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "bedford-place-polygon",
    areaName: "Bedford Place and The Polygon",
    avgPricePerSqft: 360,
    planningApprovalRate: 70,
    avgDevTimelineMonths: 6,
    population: 12500,
    growthRate: 2.6,
    activeDevSites: 11,
    rentalYield: 5.4,
    conservationCoverage: 36,
    valueCategory: "mid-range",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Southampton LPA)",
      planningSource: "Southampton City Council, Bedford Place Conservation Area + SCC Planning Portal",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "bevois-valley",
    areaName: "Bevois Valley",
    avgPricePerSqft: 290,
    planningApprovalRate: 62,
    avgDevTimelineMonths: 6,
    population: 14200,
    growthRate: 1.9,
    activeDevSites: 9,
    rentalYield: 7.2,
    conservationCoverage: 14,
    valueCategory: "mid-range",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Southampton LPA)",
      planningSource: "Southampton City Council, Article 4 HMO direction + SCC Planning Portal",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "highfield-portswood",
    areaName: "Highfield and Portswood",
    avgPricePerSqft: 340,
    planningApprovalRate: 64,
    avgDevTimelineMonths: 6,
    population: 22500,
    growthRate: 2.2,
    activeDevSites: 14,
    rentalYield: 6.8,
    conservationCoverage: 24,
    valueCategory: "mid-range",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Southampton LPA)",
      planningSource: "Southampton City Council, Article 4 HMO direction (SO17) + SCC Planning Portal",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "shirley",
    areaName: "Shirley",
    avgPricePerSqft: 290,
    planningApprovalRate: 76,
    avgDevTimelineMonths: 6,
    population: 19500,
    growthRate: 2.1,
    activeDevSites: 10,
    rentalYield: 5.6,
    conservationCoverage: 12,
    valueCategory: "value",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Southampton LPA)",
      planningSource: "Southampton City Council Planning Portal, SO15 / SO16 corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "bitterne",
    areaName: "Bitterne",
    avgPricePerSqft: 280,
    planningApprovalRate: 74,
    avgDevTimelineMonths: 6,
    population: 18800,
    growthRate: 1.8,
    activeDevSites: 8,
    rentalYield: 5.4,
    conservationCoverage: 10,
    valueCategory: "value",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Southampton LPA)",
      planningSource: "Southampton City Council Planning Portal, SO18 / SO19 corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "bassett-lordswood",
    areaName: "Bassett and Lordswood",
    avgPricePerSqft: 380,
    planningApprovalRate: 73,
    avgDevTimelineMonths: 7,
    population: 16800,
    growthRate: 1.6,
    activeDevSites: 7,
    rentalYield: 4.4,
    conservationCoverage: 22,
    valueCategory: "premium",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Southampton LPA)",
      planningSource: "Southampton City Council Planning Portal, SO16 corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "woolston-sholing",
    areaName: "Woolston and Sholing",
    avgPricePerSqft: 280,
    planningApprovalRate: 78,
    avgDevTimelineMonths: 6,
    population: 17200,
    growthRate: 2.8,
    activeDevSites: 9,
    rentalYield: 5.8,
    conservationCoverage: 14,
    valueCategory: "regeneration",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Southampton LPA)",
      planningSource: "Southampton City Council Planning Portal, SO19 waterfront corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "adanac-park-nursling",
    areaName: "Adanac Park and Nursling",
    avgPricePerSqft: 260,
    planningApprovalRate: 80,
    avgDevTimelineMonths: 7,
    population: 6200,
    growthRate: 3.6,
    activeDevSites: 14,
    rentalYield: 5.4,
    conservationCoverage: 6,
    valueCategory: "value",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Southampton LPA)",
      planningSource: "Southampton City Council Planning Portal, M271 / Nursling industrial corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "hedge-end-west-end",
    areaName: "Hedge End and West End",
    avgPricePerSqft: 320,
    planningApprovalRate: 76,
    avgDevTimelineMonths: 6,
    population: 25500,
    growthRate: 2.4,
    activeDevSites: 12,
    rentalYield: 4.8,
    conservationCoverage: 8,
    valueCategory: "mid-range",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Southampton LPA)",
      planningSource: "Eastleigh Borough Council Planning Portal, SO30 / SO31 corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
];

export function getMarketData(slug: string) {
  return marketData.find((d) => d.slug === slug);
}

export function getAllMarketData() {
  return marketData;
}
