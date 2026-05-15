/**
 * Area hero images, Unsplash CDN photo IDs for Southampton districts.
 */

export interface AreaImage {
  /** Unsplash CDN long-form photo ID. */
  id: string;
  /** Accessibility/SEO alt text. */
  alt: string;
}

export const AREA_IMAGES: Record<string, AreaImage> = {
  "city-centre": {
    id: "1699021566217-f4ce5875b2e1",
    alt: "Southampton city centre street with landmark civic architecture",
  },
  "ocean-village": {
    id: "1626010935539-710125f7e294",
    alt: "Ocean Village Southampton marina with waterfront buildings",
  },
  "mayflower-quarter-royal-pier": {
    id: "1626011338434-2a000a7c63c0",
    alt: "Mayflower Quarter and Royal Pier Southampton regeneration",
  },
  "bedford-place-polygon": {
    id: "1699021565667-07f81d7d137c",
    alt: "Bedford Place Southampton Victorian terraced street",
  },
  "bevois-valley": {
    id: "1603135946711-e2f73c019c44",
    alt: "Bevois Valley Southampton mixed-use street",
  },
  "highfield-portswood": {
    id: "1699021566678-edb0d7af1d5e",
    alt: "Highfield and Portswood Southampton university district",
  },
  shirley: {
    id: "1697407503401-8991afe14b00",
    alt: "Shirley Southampton high street retail parade",
  },
  bitterne: {
    id: "1699021566037-2079b9459957",
    alt: "Bitterne Southampton district centre",
  },
  "bassett-lordswood": {
    id: "1683459269288-63ce626a67f2",
    alt: "Bassett and Lordswood Southampton affluent residential area",
  },
  "woolston-sholing": {
    id: "1626011789898-0b317546acb0",
    alt: "Woolston and Sholing Southampton riverside frontage",
  },
  "adanac-park-nursling": {
    id: "1638803702682-4b2c833e543f",
    alt: "Adanac Park and Nursling Southampton industrial logistics park",
  },
  "hedge-end-west-end": {
    id: "1699818268277-242624112ff9",
    alt: "Hedge End and West End Southampton out-of-town retail park",
  },
};

/** Canonical hero image for the /areas index page and city-wide contexts. */
export const AREAS_INDEX_IMAGE: AreaImage = {
  id: "1526637201259-da59cb348242",
  alt: "Southampton aerial skyline with development zones",
};

/** Safe lookup, returns the area image, or the canonical city image as fallback. */
export function getAreaImage(slug: string): AreaImage {
  return AREA_IMAGES[slug] ?? AREAS_INDEX_IMAGE;
}
