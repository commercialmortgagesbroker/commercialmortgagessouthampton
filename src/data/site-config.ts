// Per-site configuration. The single CSS variable that varies between
// network sites is the accent triplet, see DESIGN-BRIEF.md §11.
export const siteConfig = {
  "name": "Commercial Mortgages Southampton",
  "domain": "commercialmortgagessouthampton.co.uk",
  "locationName": "Southampton",
  "county": "hampshire",
  "town": "southampton",
  "tagline": "Specialist commercial mortgages in Southampton and the Solent",
  "description": "Specialist commercial mortgage broker for Southampton, the Solent corridor and Hampshire. Port and logistics, retail, hospitality, semi-commercial, HMO portfolio, healthcare and trading-business finance from a 90+ lender panel. Indicative terms in 48 hours, mid-2026 rates 6.0 to 9.0% pa.",
  "keyword": "commercial mortgages southampton",
  "heroSubtitle": "Owner-occupier, investment, hospitality, industrial-warehouse, semi-commercial and HMO commercial mortgages, sourced from a 90+ lender panel and structured around your Southampton or Solent asset. Indicative terms in 48 hours.",
  "phone": "07595 366094",
  "email": "enquiries@commercialmortgagessouthampton.co.uk",
  "leadEmail": "commercialmortgagesbroker@gmail.com",
  "address": {
    "street": "Southampton",
    "city": "Southampton",
    "postcode": "",
    "country": "United Kingdom"
  },
  "coordinates": {
    "lat": 50.9097,
    "lon": -1.4044
  },
  "siteType": "commercial-mortgages",
  "siteMode": "primary",
  "primarySiteUrl": "https://commercialmortgagessouthampton.co.uk",
  "satelliteSiteUrl": "https://southamptoncommercialmortgages.co.uk",
  "ccLocationUrl": "https://commercialmortgagesbroker.co.uk/locations/hampshire/southampton",
  "accent": {
    "hex": "#b08a3e",
    "hsl": "hsl(43, 47%, 47%)",
    "hue": 43
  },
  "stats": [
    { "value": "£400M+", "label": "Arranged" },
    { "value": "90+", "label": "Lenders" },
    { "value": "48hr", "label": "Decisions" },
    { "value": "75%", "label": "Max LTV" }
  ],
  "ghlSiteTag": "CommercialMortgagesSouthampton",
  "ghlSource": "Commercial Mortgages Southampton Primary Website",
  "ghlWidgetId": ""
} as const;
