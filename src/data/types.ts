/** Market data for pSEO, 7+ unique data points per area */
export interface MarketData {
  slug: string;
  areaName: string;
  avgPricePerSqft: number;
  planningApprovalRate: number;
  avgDevTimelineMonths: number;
  population: number;
  growthRate: number;
  activeDevSites: number;
  rentalYield: number;
  conservationCoverage: number;
  valueCategory: 'premium' | 'mid-range' | 'value' | 'regeneration';
  sources: {
    priceSource: string;
    planningSource: string;
    populationSource: string;
  };
  lastUpdated: string;
}

/** Conditional block rendering config */
export interface ConditionalBlockConfig {
  showPremiumMarket: boolean;
  showValueOpportunity: boolean;
  showHeritage: boolean;
  showDeveloperFriendly: boolean;
  showHighActivity: boolean;
  showRegeneration: boolean;
}

export function getConditionalBlocks(data: MarketData): ConditionalBlockConfig {
  return {
    showPremiumMarket: data.avgPricePerSqft > 800,
    showValueOpportunity: data.avgPricePerSqft < 400,
    showHeritage: data.conservationCoverage > 30,
    showDeveloperFriendly: data.planningApprovalRate > 75,
    showHighActivity: data.activeDevSites > 50,
    showRegeneration: data.valueCategory === 'regeneration',
  };
}
