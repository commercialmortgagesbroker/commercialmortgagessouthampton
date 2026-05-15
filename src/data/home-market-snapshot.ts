// Per-site homepage market band stats, Commercial Mortgages Southampton.
export interface HomeMarketStat {
  value: string;
  label: string;
  footnote?: string;
}

export interface HomeMarketSnapshot {
  locationName: string;
  source: string;
  stats: HomeMarketStat[];
}

export const homeMarketSnapshot: HomeMarketSnapshot = {
  locationName: "Southampton",
  source: "Mid-2026 Southampton CM market, broker panel data",
  stats: [
    {
      value: "90+",
      label: "Lender panel",
      footnote: "High-street, challenger and specialist desks",
    },
    {
      value: "48hr",
      label: "Indicative terms",
      footnote: "From complete enquiry",
    },
    {
      value: "£250M+",
      label: "Arranged",
      footnote: "Across the network",
    },
    {
      value: "75%",
      label: "Max LTV",
      footnote: "Owner-occupier and investment",
    },
  ],
};
