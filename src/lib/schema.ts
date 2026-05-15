// Schema.org JSON-LD generators — site-agnostic.
// All location/brand-specific values come from src/data/site-config.ts.
// Safe to sync verbatim across the network.

import { siteConfig } from "@/data/site-config";

const SITE_URL = `https://${siteConfig.domain}`;
const SITE_NAME = siteConfig.name;
const PHONE_NUMBER = siteConfig.phone;
const EMAIL = siteConfig.email;
const CITY = siteConfig.locationName;
const REGION = siteConfig.county.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
const LAT = siteConfig.coordinates.lat;
const LON = siteConfig.coordinates.lon;

const PRICE_RANGE = "£150K - £10M";
const SERVICE_NOUN = "commercial mortgages";
const SERVICE_NOUN_SINGULAR = "commercial mortgage";

export function generateFinancialServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: SITE_NAME,
    description: siteConfig.description,
    url: SITE_URL,
    telephone: PHONE_NUMBER,
    email: EMAIL,
    areaServed: {
      "@type": "City",
      name: CITY,
      ...(REGION && {
        containedInPlace: { "@type": "AdministrativeArea", name: REGION },
      }),
    },
    priceRange: PRICE_RANGE,
    currenciesAccepted: "GBP",
    paymentAccepted: "Bank Transfer",
    openingHours: "Mo-Fr 08:00-18:00",
    address: {
      "@type": "PostalAddress",
      addressLocality: CITY,
      addressRegion: REGION,
      addressCountry: "GB",
    },
    geo: { "@type": "GeoCoordinates", latitude: LAT, longitude: LON },
    sameAs: [],
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    description: `${CITY}-based ${SERVICE_NOUN} broker arranging owner-occupier, investment, semi-commercial and trading-business commercial mortgages for clients across ${REGION || CITY}.`,
    url: SITE_URL,
    telephone: PHONE_NUMBER,
    email: EMAIL,
    openingHours: "Mo-Fr 08:00-18:00",
    priceRange: PRICE_RANGE,
    address: {
      "@type": "PostalAddress",
      addressLocality: CITY,
      addressRegion: REGION,
      addressCountry: "GB",
    },
    geo: { "@type": "GeoCoordinates", latitude: LAT, longitude: LON },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function generateServiceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: { "@type": "FinancialService", name: SITE_NAME, url: SITE_URL },
    areaServed: { "@type": "City", name: CITY },
  };
}

export function generateWebApplicationSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url,
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
    provider: { "@type": "FinancialService", name: SITE_NAME, url: SITE_URL },
  };
}

export function generateContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${SITE_NAME}`,
    description: `Get in touch with ${SITE_NAME} for ${SERVICE_NOUN_SINGULAR} enquiries. Free initial consultation, indicative terms within 48 hours.`,
    url: `${SITE_URL}/contact`,
    mainEntity: {
      "@type": "FinancialService",
      name: SITE_NAME,
      telephone: PHONE_NUMBER,
      email: EMAIL,
      url: SITE_URL,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: PHONE_NUMBER,
        email: EMAIL,
        contactType: "sales",
        availableLanguage: "English",
        areaServed: { "@type": "City", name: CITY },
      },
    },
  };
}

export function generatePersonSchema(
  name: string,
  jobTitle: string,
  organizationName: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    worksFor: { "@type": "Organization", name: organizationName, url: SITE_URL },
    knowsAbout: [
      "Commercial Mortgages",
      "Owner-Occupier Commercial Finance",
      "Commercial Investment Mortgages",
      "Semi-Commercial Mortgages",
      "Trading-Business Mortgages",
      `${CITY} Commercial Property Market`,
    ],
  };
}

export function generateCollectionPageSchema(
  name: string,
  description: string,
  url: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
  };
}

export function generateArticleSchema(
  title: string,
  description: string,
  url: string,
  datePublished: string,
  dateModified: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: "Matt",
      jobTitle: "Commercial Mortgage Broker",
      worksFor: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };
}
