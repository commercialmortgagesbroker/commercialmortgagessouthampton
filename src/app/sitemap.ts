import type { MetadataRoute } from "next";
import { AREAS } from "@/lib/constants";
import { siteConfig } from "@/data/site-config";
import { serviceDetails } from "@/data/pages/service-details-content";
import { assetTypeDetails } from "@/data/pages/property-types-content";
import { blogPosts } from "@/data/blog-posts";

const BASE_URL = `https://${siteConfig.domain}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1.0, lastModified: now },
    { url: `${BASE_URL}/services`, changeFrequency: "monthly", priority: 0.9, lastModified: now },
    { url: `${BASE_URL}/property-types`, changeFrequency: "monthly", priority: 0.9, lastModified: now },
    { url: `${BASE_URL}/areas`, changeFrequency: "weekly", priority: 0.9, lastModified: now },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
    { url: `${BASE_URL}/how-it-works`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
    { url: `${BASE_URL}/calculator`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${BASE_URL}/faq`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${BASE_URL}/case-studies`, changeFrequency: "monthly", priority: 0.6, lastModified: now },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.6, lastModified: now },
    { url: `${BASE_URL}/southampton-commercial-property-market`, changeFrequency: "weekly", priority: 0.9, lastModified: now },
    { url: `${BASE_URL}/privacy`, changeFrequency: "yearly", priority: 0.2, lastModified: now },
    { url: `${BASE_URL}/terms`, changeFrequency: "yearly", priority: 0.2, lastModified: now },
  ];

  const serviceSlugPages: MetadataRoute.Sitemap = Object.keys(serviceDetails).map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
    lastModified: now,
  }));

  const propertyTypePages: MetadataRoute.Sitemap = Object.keys(assetTypeDetails).map((slug) => ({
    url: `${BASE_URL}/property-types/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
    lastModified: now,
  }));

  const areaPages: MetadataRoute.Sitemap = AREAS.map((a) => ({
    url: `${BASE_URL}/areas/${a.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
    lastModified: now,
  }));

  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    lastModified: new Date(p.publishDate),
  }));

  return [
    ...staticPages,
    ...serviceSlugPages,
    ...propertyTypePages,
    ...areaPages,
    ...blogPostPages,
  ];
}
