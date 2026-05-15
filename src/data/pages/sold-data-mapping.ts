/**
 * Sold-data mapping, Southampton (Commercial Mortgages context).
 *
 * HM Land Registry data is published at local-authority (town) level. The
 * Southampton City Council LPA covers most of the city. Hedge End and
 * West End are technically in Eastleigh Borough Council, but for the
 * residential market temperature signal we still read from the Southampton
 * town file. The Adanac Park / Nursling fringe straddles the Test Valley
 * boundary; same applies.
 *
 * On commercial mortgage pages, residential sold data is used as a temperature
 * gauge for the wider area, commercial owner-occupier and semi-commercial
 * pricing track the residential curve, even though commercial-tagged Land
 * Registry data is much sparser.
 */

import southamptonData from "@/data/sold-data/southampton.json";

export interface SoldTransaction {
  price: number;
  date: string;
  postcode: string;
  propertyType: string;
  newBuild: boolean;
  tenure: string;
  address: string;
}

export interface SoldDataFile {
  updatedAt: string;
  townSlug: string;
  countySlug: string;
  stats: {
    medianPrice: number;
    medianByType: Record<string, number>;
    transactionCount12m: number;
    yoyChange: number;
    newBuildCount: number;
    existingCount: number;
    newBuildPremium: number | null;
  };
  recentTransactions: SoldTransaction[];
}

const DISTRICT_TO_TOWN: Record<string, { data: SoldDataFile; label: string }> = {
  "city-centre": { data: southamptonData as SoldDataFile, label: "Southampton LPA" },
  "ocean-village": { data: southamptonData as SoldDataFile, label: "Southampton LPA" },
  "mayflower-quarter-royal-pier": { data: southamptonData as SoldDataFile, label: "Southampton LPA" },
  "bedford-place-polygon": { data: southamptonData as SoldDataFile, label: "Southampton LPA" },
  "bevois-valley": { data: southamptonData as SoldDataFile, label: "Southampton LPA" },
  "highfield-portswood": { data: southamptonData as SoldDataFile, label: "Southampton LPA" },
  shirley: { data: southamptonData as SoldDataFile, label: "Southampton LPA" },
  bitterne: { data: southamptonData as SoldDataFile, label: "Southampton LPA" },
  "bassett-lordswood": { data: southamptonData as SoldDataFile, label: "Southampton LPA" },
  "woolston-sholing": { data: southamptonData as SoldDataFile, label: "Southampton LPA" },
  "adanac-park-nursling": { data: southamptonData as SoldDataFile, label: "Southampton / Test Valley LPA" },
  "hedge-end-west-end": { data: southamptonData as SoldDataFile, label: "Eastleigh Borough LPA" },
};

export function getSoldDataForDistrict(slug: string):
  | { data: SoldDataFile; lpaLabel: string }
  | null {
  const entry = DISTRICT_TO_TOWN[slug];
  if (!entry) return null;
  return { data: entry.data, lpaLabel: entry.label };
}
