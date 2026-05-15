import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { StickyContactCTA } from "@/components/StickyContactCTA";
import { SchemaInjector } from "@/components/SchemaInjector";
import {
  generateFinancialServiceSchema,
  generateLocalBusinessSchema,
} from "@/lib/schema";
import { siteConfig } from "@/data/site-config";

const kw = siteConfig.keyword;
const loc = siteConfig.locationName;
const brand = siteConfig.name;

export const metadata: Metadata = {
  title: {
    default: `${brand} | Port, Logistics, Hospitality and HMO Commercial Mortgage Broker`,
    template: `%s | ${brand}`,
  },
  description: siteConfig.description,
  keywords: [
    kw,
    `commercial mortgage broker ${loc}`,
    `${loc} commercial mortgages`,
    `${loc} commercial property finance`,
    `${loc} commercial investment mortgage`,
    `${loc} owner-occupier mortgage`,
    `${loc} semi-commercial mortgage`,
    `${loc} industrial mortgage`,
    `${loc} hospitality mortgage`,
    `${loc} HMO mortgage`,
    `Solent commercial mortgage`,
    `Hampshire commercial mortgage broker`,
    `Adanac Park warehouse finance`,
    `M271 logistics mortgage`,
    `Ocean Village hospitality finance`,
  ],
  authors: [{ name: "Matt", url: `https://${siteConfig.domain}/about` }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: `https://${siteConfig.domain}`,
    siteName: brand,
    title: `${brand} | Port, Logistics, Hospitality and HMO Commercial Mortgage Broker`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: brand,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: `https://${siteConfig.domain}` },
};

/** Per-site accent, overrides the default declared in globals.css `@theme`. */
const accentOverride = `:root { --color-accent: ${siteConfig.accent.hex}; }`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,300..500;1,9..144,300..500&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <style dangerouslySetInnerHTML={{ __html: accentOverride }} />
      </head>
      <body className="font-sans antialiased">
        <SchemaInjector schema={generateFinancialServiceSchema()} />
        <SchemaInjector schema={generateLocalBusinessSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyContactCTA />
        <CookieConsent />
              {/* GHL Chat Widget, populate data-widget-id for Liverpool when GHL widget is provisioned */}
      </body>
    </html>
  );
}
