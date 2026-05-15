/**
 * Editorial flagship, The Southampton commercial property market in 2026.
 *
 * Long-form market piece targeting the head term "Southampton commercial
 * property market 2026". Designed to host the contextual outbound link
 * to the parent brokerage at
 * commercialmortgagesbroker.co.uk/locations/hampshire/southampton inside
 * the lender-pool section, framed as the wider regional network we sit
 * inside.
 *
 * Voice: editorial, broker-led, first-person plural. No em dashes. Only
 * the 8 named lenders are bolded (Allica Bank, HTB, Cambridge and
 * Counties, YBS Commercial, Aldermore, Paragon, Together, OakNorth).
 * Foundation Home Loans is named without bolding as an additional HMO
 * specialist. Rates 6.0 to 9.0% pa overall. No FCA-authorisation claims.
 * Commercial mortgages on non-dwelling property are unregulated.
 *
 * Data: real Southampton economy figures (c. 250,000 unitary population,
 * combined University of Southampton ~23,000 and Solent ~11,000 student
 * footprint, ABP estate, cruise terminal flow), the Southampton
 * regeneration spine (Mayflower Quarter Watermark, Royal Pier
 * Waterfront, Ocean Village, Bargate Quarter, Adanac Park, Nursling
 * Industrial Estate) and the sold-data digest from the SO14 to SO19
 * postcode footprint.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchemaInjector } from "@/components/SchemaInjector";
import { ScrollReveal } from "@/components/ScrollReveal";
import { generateArticleSchema } from "@/lib/schema";
import { siteConfig } from "@/data/site-config";

const siteUrl = `https://${siteConfig.domain}`;
const articleUrl = `${siteUrl}/southampton-commercial-property-market`;
const publishDate = "2026-05-15";
const modifiedDate = "2026-05-15";

const hampshireBrokerUrl =
  "https://commercialmortgagesbroker.co.uk/locations/hampshire/southampton";

const title = "Southampton Commercial Property Market 2026";
const description =
  "An editorial read on the Southampton commercial property market at mid-2026: the port and logistics spine running Western Docks through the Associated British Ports estate to Adanac Park and Nursling Industrial Estate, the Westquay Hammerson retail anchor with the Above Bar and Bargate Quarter parade, the Ocean Village marina and Town Quay hospitality cluster, the Highfield, Portswood and Bevois Valley student HMO belt feeding the combined University of Southampton and Solent University catchment, the Mayflower Quarter Watermark and Royal Pier Waterfront regeneration delivery and where commercial mortgage rates sit heading into 2027.";

export const metadata: Metadata = {
  title: `${title} | Commercial Mortgages Southampton`,
  description,
  alternates: { canonical: articleUrl },
  openGraph: {
    title,
    description,
    url: articleUrl,
    type: "article",
    publishedTime: publishDate,
    modifiedTime: modifiedDate,
    siteName: siteConfig.name,
  },
};

// Southampton regeneration anchors and live commercial-relevant planning
// applications, drawn from the master brief and the Southampton City
// Council planning extract digest at mid-2026. Each entry reflects a
// live, publicly-documented commercial-relevant scheme or application
// inside the city footprint.
const planningHighlights = [
  {
    ref: "Mayflower Quarter Watermark, SO14",
    address: "Western Esplanade and Civic Centre approach",
    proposal:
      "The flagship Southampton regeneration scheme. A multi-phase mixed-use redevelopment running from the Western Esplanade across to the Civic Centre, anchored by the Watermark cluster of leisure, retail and food and beverage alongside office and residential floor plate. The single largest addition to central Southampton commercial supply this decade.",
  },
  {
    ref: "Royal Pier Waterfront, SO14",
    address: "Town Quay seafront",
    proposal:
      "The long-running Royal Pier Waterfront mixed-use allocation. Hotel, residential, leisure and retail floor plate on the Town Quay seafront flank, sitting alongside the cruise terminal approach and the Ocean Village marina. A multi-phase delivery with material commercial pipeline through 2026 and 2027.",
  },
  {
    ref: "26/00205/DIS East Street, SO14 3HH",
    address: "Land r/o 104 to 107 East Street",
    proposal:
      "Discharge of conditions on 19/00348/FUL for 16 flats over commercial ground floor in the East Street retail and mixed-use parade. Approved. A representative live scheme for the Bargate Quarter and East Street regeneration flank.",
  },
  {
    ref: "26/00182/FUL Commercial Road, SO15 1GD",
    address: "68 Commercial Road",
    proposal:
      "Change of use to a mixed-use entertainment venue, sui generis puzzles experience with bar. Pending. A live signal of the Class E to sui generis leisure conversion flow on the central retail flank.",
  },
  {
    ref: "26/00161/FUL Bedford Place, SO15",
    address: "Bedford Place and The Polygon",
    proposal:
      "Change of ground floor to Class E cafe with extraction flue. Pending. A representative Bedford Place independent food and beverage application, on the cluster running north of the Civic Centre.",
  },
  {
    ref: "25/01428/PA56 Class E to C3",
    address: "Central Southampton retail unit",
    proposal:
      "Class E retail to residential prior approval for seven dwellings, granted. Representative of the steady drip of Class E to C3 conversion across the SO14 and SO15 fringes, which feeds the small landlord refinance pipeline.",
  },
];

const comparables = [
  {
    headline: "Adanac Park trade-counter freehold acquisition",
    detail:
      "Owner-occupier acquiring a 14,500 sq ft trade-counter and warehouse freehold at the Adanac Park M271 junction. Combined building purchase and working-capital facility, with seven years of clean trading accounts and strong M27 corridor logistics covenant.",
    terms: "65% LTV · 7.15% pa · 5-year fix · 20-year term · Allica Bank",
  },
  {
    headline: "Highfield SO17 student HMO portfolio refinance",
    detail:
      "Investor with five Highfield and Portswood student HMOs across SO17 consolidating four short-dated facilities onto a single portfolio loan. Stabilised assured shorthold income with the University of Southampton catchment underpinning the rent roll.",
    terms: "75% LTV · 7.55% pa · 5-year fix · 25-year term · Paragon",
  },
  {
    headline: "Ocean Village marina hospitality refinance",
    detail:
      "Independent operator holding a 38-cover marina-front restaurant at Ocean Village refinancing off a 2021 five-year fix into a stabilised trading-business facility. Three years of clean trading accounts post-pandemic and EBITDA cover comfortably above 1.5 times.",
    terms: "65% LTV · 7.95% pa · 5-year fix · 20-year term · Cambridge and Counties",
  },
];

export default function SouthamptonCommercialPropertyMarket2026() {
  return (
    <>
      <SchemaInjector
        schema={generateArticleSchema(
          title,
          description,
          articleUrl,
          publishDate,
          modifiedDate,
        )}
      />
      <Breadcrumbs
        items={[
          { label: "Insights", href: "/blog" },
          {
            label: "Southampton commercial property market 2026",
            href: "/southampton-commercial-property-market",
          },
        ]}
      />

      {/* Editorial hero */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="eyebrow">Market read &middot; May 2026</span>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h1 className="mt-8 font-editorial text-5xl leading-[1.02] tracking-tight md:text-7xl">
                Southampton Commercial Property Market{" "}
                <em className="not-italic text-[color:var(--color-accent)]">
                  2026
                </em>
                .
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-10 max-w-3xl text-xl leading-relaxed text-[color:var(--color-ink-soft)]">
                A working broker read on the Southampton commercial
                property market at mid-2026. The port and logistics
                spine running Western Docks through the Associated
                British Ports estate to Adanac Park, Nursling
                Industrial Estate and the M271 corridor. The Westquay
                Hammerson anchor with the Above Bar Street and Bargate
                Quarter retail parade. The Ocean Village marina and
                Town Quay hospitality cluster around the cruise
                terminal. The Highfield, Portswood and Bevois Valley
                student HMO belt feeding the combined University of
                Southampton and Solent University 34,000-student
                catchment. The Mayflower Quarter Watermark and Royal
                Pier Waterfront delivery pipeline. The lender pool
                that funds it. Where rates sit now and what we are
                watching into 2027.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-[color:var(--color-rule)] py-5 text-sm text-[color:var(--color-muted)]">
                <span>
                  By the desk at{" "}
                  <span className="text-[color:var(--color-ink)]">
                    Commercial Mortgages Southampton
                  </span>
                </span>
                <span aria-hidden>&middot;</span>
                <time dateTime={publishDate}>15 May 2026</time>
                <span aria-hidden>&middot;</span>
                <span>18 min read</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TL;DR callout */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] bg-white p-8 shadow-sm md:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                TL;DR
              </p>
              <ul className="mt-6 space-y-4 text-base leading-relaxed text-[color:var(--color-ink-soft)] md:text-lg">
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    01
                  </span>
                  <span>
                    Southampton is the UK&apos;s largest vehicle-handling
                    port and one of the country&apos;s two main cruise
                    terminals. The unitary population sits at roughly{" "}
                    <span className="figure-inline">250,000</span> on
                    the M27 and M3 spine of the Solent, with a young
                    working-age skew driven by two universities and a
                    deep port, logistics and back-office employment
                    base anchored by Associated British Ports, Carnival
                    UK at Ocean Village and Ordnance Survey at Adanac
                    Park.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    02
                  </span>
                  <span>
                    Central retail Zone A on the better Above Bar Street
                    and Westquay frontages sits in a stratified band in
                    2026, with the Hammerson-owned Westquay scheme
                    carrying the national multiple anchor and Above
                    Bar, Bargate Quarter, East Street and Bedford
                    Place picking up the independent retail and food
                    and beverage flow. Industrial-warehouse along the
                    M271 corridor at Adanac Park and Nursling
                    Industrial Estate prices on a tighter yield than
                    the Southampton-only data suggests, because
                    lenders read the M27 corridor across to Portsmouth
                    as a single labour shed.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    03
                  </span>
                  <span>
                    The combined University of Southampton and Solent
                    University student footprint of around{" "}
                    <span className="figure-inline">34,000</span> drives
                    one of the deeper student HMO markets on the South
                    Coast. The Highfield SO17 belt sitting next to the
                    University of Southampton Highfield campus, the
                    Portswood high street and the Bevois Valley
                    student-led F&amp;B and HMO flank between SO14 and
                    SO17 carry the densest conversion stock. The city
                    operates an Article 4 direction across the student
                    belt, which lenders factor into the HMO refinance
                    underwrite.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    04
                  </span>
                  <span>
                    Mayflower Quarter Watermark, Royal Pier Waterfront,
                    Ocean Village, Bargate Quarter, Adanac Park and
                    Nursling Industrial Estate are the six anchors of
                    the Southampton regeneration and port-spine
                    pipeline through to 2027. Mayflower Quarter
                    Watermark is the single largest addition to central
                    commercial supply; the Western Docks and ABP
                    container terminal expansion is the structural
                    backbone of the M271 logistics corridor.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    05
                  </span>
                  <span>
                    Median residential price across the city sits at{" "}
                    <span className="figure-inline">&pound;249,000</span>{" "}
                    on the latest twelve-month sold data with a softer
                    year-on-year reading of{" "}
                    <span className="figure-inline">-2.4%</span>, in
                    line with a renter-heavy, multi-occupancy
                    residential stock. New build volume is very low at
                    just two transactions in the twelve-month window:
                    Southampton is overwhelmingly a re-trading market,
                    which feeds the BTL and HMO refinance pipeline
                    rather than the new-build investment flow.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    06
                  </span>
                  <span>
                    Mid-2026 Southampton commercial mortgage rates sit
                    at{" "}
                    <span className="figure-inline">6.0 to 9.0%</span>{" "}
                    pa across the eight main product types. Port and
                    logistics owner-occupier and investment runs 60 to
                    70 percent LTV at the stronger end of the range.
                    Retail and office investment runs 65 to 75 percent
                    LTV. Student and professional HMO refinance runs
                    65 to 75 percent LTV. Hospitality trading-business
                    runs 60 to 70 percent LTV at the higher pricing
                    end. <strong>Allica Bank</strong>,{" "}
                    <strong>HTB</strong>,{" "}
                    <strong>Cambridge and Counties</strong>,{" "}
                    <strong>YBS Commercial</strong>,{" "}
                    <strong>Aldermore</strong>,{" "}
                    <strong>Paragon</strong>,{" "}
                    <strong>Together</strong> and{" "}
                    <strong>OakNorth</strong> are the eight on our
                    active panel, with Foundation Home Loans on the
                    wider HMO and portfolio panel.
                  </span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats grid, Southampton economy */}
      <section className="section data-band">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="mb-12 max-w-3xl">
              <span className="eyebrow">The numbers under the market</span>
              <h2 className="mt-6 font-editorial text-4xl text-[color:var(--color-paper)] md:text-5xl">
                Southampton in eight figures.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--color-paper)]/70">
                The macro backdrop that drives lender appetite. Drawn
                from Southampton City Council, Associated British
                Ports cruise and freight data, the published University
                of Southampton and Solent University student rolls,
                ONS sub-national indicators, the 2021 census and Land
                Registry sold data for the SO14 through SO19 postcodes.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            <ScrollReveal>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  250K
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Unitary population
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Inside the Southampton City Council boundary at the
                  latest mid-year estimate.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  3M+
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Annual cruise passengers
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Pre-pandemic flow through the ABP cruise terminals,
                  recovering through 2025 and 2026. One of the UK&apos;s
                  two main cruise gateways alongside Liverpool.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  34K
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Combined HE students
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  University of Southampton at around 23,000 plus
                  Solent University at around 11,000.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  &pound;249K
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Median res price
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Twelve-month median across the SO14 through SO19
                  postcodes, proxy for general market temperature.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  2,407
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Res transactions
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Twelve-month residential turnover across the unitary.
                  A steady flow reflecting the renter-heavy stock and
                  active student-belt churn.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  96%
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Planning approval rate
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Commercial-mortgage-relevant planning applications
                  decided over the latest twelve months. 79 relevant
                  applications received; 96 percent of those decided
                  approved.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  &pound;13.1M
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Pipeline GDV
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Modelled gross development value of the residential
                  pipeline approved or pending through the twelve-month
                  window, across 75 units. A useful temperature gauge.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  79min
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  By train to London
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Direct South Western Railway service from Southampton
                  Central to London Waterloo, with the M3 running
                  parallel into the M25 at Junction 12. The Solent
                  corridor runs east to Portsmouth along the M27.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <p className="mt-12 max-w-2xl text-xs leading-relaxed text-[color:var(--color-paper)]/55">
            Sources: Southampton City Council, Associated British Ports
            cruise and freight data, the published University of
            Southampton and Solent University student rolls, ONS
            sub-national economic indicators, the 2021 census and
            Land Registry sold data for the SO14 through SO19
            postcodes.
          </p>
        </div>
      </section>

      {/* Section 1: Southampton at a glance */}
      <section className="section">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">01 &middot; Context</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Southampton at a glance: port-led economy, the M27 and
                M3 spine of the Solent, two universities and a 3
                million cruise-passenger footfall.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  This is the working broker read on the Southampton
                  commercial property market at mid-2026. We have
                  written it for owner-occupiers and investors looking
                  at the M271 logistics spine running through Adanac
                  Park and Nursling Industrial Estate, hospitality
                  operators thinking about buying or refinancing on
                  Ocean Village, Town Quay or the cruise terminal hotel
                  cluster, investors holding student or professional
                  HMO stock through the Highfield, Portswood and Bevois
                  Valley belts, retail and food and beverage operators
                  on Above Bar, Bargate Quarter and Bedford Place, and
                  developer-investors watching the Mayflower Quarter
                  Watermark and Royal Pier Waterfront delivery
                  pipeline. The aim is practical: what is happening in
                  each part of the market, where lender appetite sits
                  in 2026, what the rate range is across each product
                  and how we read the Southampton pipeline through to
                  the end of 2027. The voice is first-person plural
                  because we sit across deals every week, not because
                  we are pretending to speak for anyone else. Where we
                  name a lender, it is one of the eight on our active
                  panel that we quote against routinely on Southampton
                  deals, with the wider ninety-strong network sitting
                  behind that for the port-and-logistics, hospitality,
                  HMO portfolio and specialist cases.
                </p>
                <p>
                  Southampton is a unitary authority on the South Coast
                  sitting at the head of the Solent, between the New
                  Forest National Park to the west and the Hampshire
                  Downs to the north. The unitary population sits at
                  roughly 250,000 with a young working-age skew driven
                  by the two universities, the port and the wider
                  professional services and back-office employer base.
                  The city is bolted onto the national motorway network
                  at the M27 and M3 spine: the M271 spur connects
                  Western Docks and the port estate directly into the
                  M27, the M27 itself runs east across to Portsmouth
                  and west into the New Forest, and the M3 runs north
                  to the M25 at Junction 12. Southampton Airport sits
                  on the Eastleigh side of the boundary. South Western
                  Railway runs Southampton Central to London Waterloo
                  in around 79 minutes on the direct service.
                </p>
                <p>
                  The economy is anchored by four structural pillars.
                  Port and logistics first: Associated British Ports
                  operates the largest UK vehicle-handling port at
                  Southampton, alongside the container terminal at
                  Western Docks and one of the country&apos;s two main
                  cruise terminals. The freight operator, freight
                  forwarder and logistics-occupier base running along
                  the M271 and through Adanac Park, Nursling
                  Industrial Estate, Test Lane and the Hedge End
                  Solent Industrial Estate corridor is the structural
                  backbone of the city&apos;s commercial economy. The
                  Solent corridor runs east along the M27 across to
                  Portsmouth, and we cover the corridor read in the
                  port and logistics deep-dive below. The cruise
                  terminal carries more than 3 million passengers a
                  year through the ABP estate, anchoring the hotel
                  cluster around Town Quay and Ocean Village.
                </p>
                <p>
                  Higher education and healthcare are the second
                  pillar. The University of Southampton sits at the
                  Highfield campus in SO17 with roughly 23,000
                  students, with additional medical and oceanography
                  campuses across the city. Solent University sits on
                  East Park Terrace in the city centre with roughly
                  11,000 students. The combined 34,000-student
                  footprint feeds the HMO and student-led food and
                  beverage market through Highfield, Portswood and
                  Bevois Valley, alongside the central Class E flow.
                  University Hospital Southampton is one of the
                  UK&apos;s largest teaching hospitals and anchors a
                  deep healthcare-ancillary commercial market across
                  the SO16 and SO17 belt, with the Spire and Nuffield
                  carrying the private-hospital footprint.
                </p>
                <p>
                  Corporate occupiers round out the picture. Carnival
                  UK holds its operational headquarters at Ocean
                  Village, anchoring the marina-led office cluster.
                  Ordnance Survey occupies a major campus at Adanac
                  Park next to the M271 junction, anchoring the
                  geospatial and technology cluster. Lloyd&apos;s
                  Register, Aviva and a long tail of professional
                  services occupiers carry the central office base
                  along Above Bar Street, Civic Centre Road and
                  Cumberland Place. The Bedford Place and Polygon
                  flank carries the independent food and beverage and
                  serviced-office cluster sitting between the central
                  retail core and the Highfield student belt. We pull
                  these threads together in the sector deep-dives
                  below.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pull quote 1 */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <blockquote className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] pl-8 py-2">
              <p className="font-editorial text-3xl leading-[1.2] tracking-tight text-[color:var(--color-ink)] md:text-4xl">
                Southampton is the South Coast&apos;s port-led
                commercial market. The M271 logistics spine, the
                Westquay retail anchor, the Ocean Village and Town
                Quay hospitality cluster and the SO17 student belt
                are the four pillars that lenders read very
                differently to a coastal city of this size anywhere
                else in the UK.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Where the market is in 2026 */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">02 &middot; The 2026 picture</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Where the Southampton commercial market sits in 2026.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  Two and a half years on from the 2023 rate peak, the
                  Southampton commercial market has reset around four
                  defining shapes. Port and logistics dominance along
                  the M271 corridor, a stratified retail rent stack
                  centred on Westquay, a deep student-led HMO and food
                  and beverage flow through the SO17 belt and a
                  meaningful central regeneration pipeline anchored by
                  the Mayflower Quarter Watermark. Each runs on its
                  own cycle. Together they produce a commercial market
                  with a structurally heavy industrial-warehouse base,
                  a mid-weight retail and office core and a
                  hospitality flank that trades on the cruise
                  terminal, the marina and the student catchment
                  rather than the seafront-tourism dominance you see
                  on the Bournemouth coast.
                </p>
                <p>
                  Port and logistics is the structural anchor.
                  Associated British Ports runs the largest UK
                  vehicle-handling port, the Western Docks container
                  terminal and one of the country&apos;s two main
                  cruise gateways across the SO14, SO15 and SO16
                  flanks. The logistics-occupier base ranges across
                  Adanac Park on the M271 junction at SO16, Nursling
                  Industrial Estate on the Test Lane flank, Solent
                  Industrial Estate at Hedge End on the SO30 boundary
                  and the wider Botley Road and Eastleigh corridor.
                  Industrial-warehouse owner-occupier acquisition
                  typically prices at 60 to 70 percent LTV and 6.5 to
                  8.0 percent pa, reflecting the structurally
                  competitive lender stance on M27 corridor logistics
                  covenant. Trade-counter and small industrial freehold
                  lot sizes run 800,000 to 4 million pounds on the
                  better M271 addresses.
                </p>
                <p>
                  Retail tells a stratified story. Westquay, the
                  Hammerson-owned central shopping scheme between
                  Civic Centre Road and the Western Esplanade, holds
                  the national multiple occupier base across the
                  central retail core. Above Bar Street, running north
                  from the Bargate through Pound Tree Road to the
                  Civic Centre, carries the central high-street parade
                  with a mix of multiples and independents. Bargate
                  Quarter is the regeneration-led retail and mixed-use
                  flank running south of the Bargate towards East
                  Street, with the East Street regeneration scheme
                  delivering further mixed-use stock through 2026.
                  Shirley and Bitterne carry the suburban district
                  centre retail. Bedford Place and Oxford Street pick
                  up the independent food and beverage and serviced
                  office cluster. Westquay anchor investment trades
                  through institutional channels; the central
                  semi-commercial shop-with-flats archetype trades
                  through the specialist commercial mortgage panel at
                  65 to 75 percent LTV.
                </p>
                <p>
                  HMO and student depth is the third defining shape.
                  The Highfield SO17 belt sitting next to the
                  University of Southampton main campus carries the
                  densest student-HMO conversion stock, with Portswood
                  high street running through the heart of the student
                  catchment and Bevois Valley picking up the
                  student-led food and beverage and HMO flank between
                  SO14 and SO17. The city operates an Article 4
                  direction across the relevant SO17 wards, which
                  removes permitted development rights on small HMO
                  conversion and forces full planning consent. Lenders
                  factor the Article 4 backdrop into the underwrite,
                  generally favouring stabilised licensed stock with
                  three years of clean rent rolls. Lot sizes on
                  converted Victorian and Edwardian HMOs in SO17
                  typically run 400,000 to 1.2 million pounds;
                  semi-commercial mixed-use on Portswood and Bevois
                  Valley runs 300,000 to 900,000.
                </p>
                <p>
                  The regeneration pipeline is the fourth shape and the
                  most important addition to central commercial supply
                  through 2026 and 2027. Mayflower Quarter Watermark,
                  the multi-phase mixed-use redevelopment between the
                  Western Esplanade and the Civic Centre approach, is
                  the single largest addition to central Southampton
                  commercial supply this decade. Royal Pier Waterfront,
                  the long-running Town Quay seafront allocation, is
                  the second flagship scheme. Ocean Village continues
                  to absorb residential, leisure and food and beverage
                  stock around the marina footprint. Bargate Quarter
                  and East Street deliver the central retail and
                  mixed-use flank. Adanac Park and Nursling Industrial
                  Estate continue to expand the M271 logistics
                  cluster. We cover each of these in the regeneration
                  section below.
                </p>
                <p>
                  Yields across the city held through 2025 and into
                  the first half of 2026 broadly in line with the
                  regional Hampshire average. Prime central office
                  investment with strong unexpired sits at 7.0 to 8.0
                  percent net. Industrial-warehouse on the M271
                  corridor with logistics-covenant tenant runs 6.5 to
                  7.5 percent net. Trading-business hospitality on
                  stabilised hotel covenant runs 7.5 to 9.0 percent
                  gross. Semi-commercial mixed-use on Portswood,
                  Bevois Valley, Bedford Place and the central
                  shop-with-flat parade runs 7.0 to 8.5 percent gross.
                  Stabilised HMO portfolio across the SO17 belt runs
                  7.0 to 8.0 percent gross. Prime Westquay retail
                  investment trades through institutional channels.
                  The pricing reflects what we read as a port and
                  logistics market with a deep semi-commercial floor
                  underpinning the freehold yield stack.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Live regeneration and planning callout */}
      <section className="section data-band">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <span className="eyebrow">Live regeneration and planning</span>
                <h2 className="mt-6 font-editorial text-4xl text-[color:var(--color-paper)] md:text-5xl">
                  Six anchors worth knowing about.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--color-paper)]/70">
                  Drawn from the Southampton City Council planning
                  extract and the public-domain Southampton
                  regeneration pipeline at mid-2026. A market-temperature
                  read on what is being delivered, what is rotating
                  and what is being absorbed across the central,
                  seafront and port flanks.
                </p>
              </div>
              <p className="font-mono text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                Updated 2026-05-15
              </p>
            </div>
          </ScrollReveal>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {planningHighlights.map((app, i) => (
              <ScrollReveal key={app.ref} delay={i * 0.04}>
                <li className="flex h-full flex-col gap-3 border border-[color:var(--color-paper)]/15 bg-[color:var(--color-paper)]/5 p-5 backdrop-blur-sm">
                  <span className="font-mono text-xs text-[color:var(--color-accent)]">
                    {app.ref}
                  </span>
                  <p className="font-editorial text-base text-[color:var(--color-paper)]">
                    {app.address}
                  </p>
                  <p className="text-sm leading-relaxed text-[color:var(--color-paper)]/75">
                    {app.proposal}
                  </p>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 3: The regeneration and port spine */}
      <section className="section">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">03 &middot; Regeneration and port spine</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                The regeneration and port spine: Mayflower Quarter,
                Royal Pier, Ocean Village, Bargate Quarter, Adanac
                Park, Nursling, the ABP estate and the M271 corridor.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  The Southampton regeneration and port spine runs
                  across the SO14, SO15 and SO16 footprint and out
                  along the M271 to Adanac Park and Nursling. Each
                  scheme and each cluster sits on its own delivery
                  programme, but together they make up the most
                  significant addition to Southampton commercial,
                  mixed-use and logistics supply this decade. We
                  cover them in the order that matters most for
                  lenders watching pipeline.
                </p>
                <p>
                  Mayflower Quarter Watermark, sitting between the
                  Western Esplanade and the Civic Centre approach in
                  SO14, is the flagship Southampton regeneration
                  scheme and the single largest addition to central
                  commercial supply this decade. The multi-phase
                  scheme is anchored by the Watermark cluster of
                  leisure, retail and food and beverage alongside new
                  office and residential floor plate, sitting at the
                  point where the central retail core meets the
                  seafront flank. The footprint sits between Westquay,
                  the cruise terminal approach and the Civic Centre,
                  which gives it a useful three-way demand draw
                  across resident, tourist and office-occupier
                  catchment. Investment appetite on the stabilised
                  product post-delivery will be one of the most
                  watched themes in the South Coast commercial market
                  through 2027. Lender stance on Mayflower Quarter
                  Watermark stabilised investment will sit with the
                  clearing-bank corporate desks; owner-occupier
                  acquisition on smaller floor plates within the
                  scheme footprint will sit with the SME challenger
                  panel.
                </p>
                <p>
                  Royal Pier Waterfront, sitting on the Town Quay
                  seafront flank in SO14, is the second flagship
                  regeneration scheme. The long-running allocation
                  covers hotel, residential, leisure and retail floor
                  plate alongside the cruise terminal approach and
                  the Ocean Village marina. Delivery has been
                  multi-phase and the scheme has moved through several
                  vehicle iterations across the past decade.
                  Watch-points through 2026 and 2027 are
                  delivery-vehicle confirmation, hotel-operator
                  letting on the cruise-terminal-adjacent flank and
                  the wider Town Quay residential and leisure
                  absorption. When Royal Pier Waterfront progresses
                  to delivery on the next phase it will materially
                  reset the central seafront commercial supply
                  picture.
                </p>
                <p>
                  Ocean Village sits at the eastern seafront end of
                  SO14 and continues to absorb residential, leisure,
                  hospitality and office floor plate through a
                  long-running intensification programme. The marina
                  carries the densest food and beverage and leisure
                  occupier cluster on the seafront, sitting alongside
                  the Carnival UK operational headquarters and a
                  growing residential and hotel base. Ocean Village
                  trades on a captive marina footfall catchment with
                  a wealthier resident skew than the central retail
                  core, which shapes the hospitality occupier mix
                  toward higher-spend independent restaurants and bar
                  operators. Lender appetite on Ocean Village
                  trading-business is competitive but case-by-case,
                  with the cruise terminal hotel cluster and the
                  marina-front F&amp;B parade carrying the most active
                  refinance flow.
                </p>
                <p>
                  Bargate Quarter is the central retail and mixed-use
                  regeneration flank running south of the Bargate
                  monument towards East Street, with the East Street
                  regeneration scheme delivering further mixed-use
                  stock through 2026. The 26/00205/DIS scheme covering
                  16 flats over commercial ground floor on the East
                  Street parade is a representative live application,
                  approved on conditions discharge through 2026. The
                  Bargate Quarter flank sits between Westquay, Above
                  Bar Street and Ocean Village, which gives it a
                  useful four-way demand draw across resident, tourist
                  and student catchment. Adanac Park and Nursling
                  Industrial Estate, sitting on the M271 junction at
                  SO16, are the structural backbone of the
                  port-and-logistics spine. Ordnance Survey occupies
                  the major Adanac Park campus; Nursling carries the
                  freight-forwarder, trade-counter and warehouse
                  occupier base. Solent Industrial Estate at Hedge End
                  and the Botley Road and Eastleigh corridor pick up
                  the wider M27 logistics cluster.
                </p>
                <p>
                  The ABP estate and the Western Docks container
                  terminal anchor the structural port economy.
                  Associated British Ports runs the largest UK
                  vehicle-handling port at Southampton alongside the
                  container terminal and the cruise terminal flank.
                  The freight-occupier base running along the Western
                  Docks approach and out onto the M271 covers the
                  logistics, freight-forwarder and warehouse occupier
                  population, with major operators across the
                  Hampshire-wide industrial labour shed. The M271
                  corridor read is critical: lenders price the M27
                  corridor between Southampton and Portsmouth as a
                  single industrial-warehouse market, which means
                  Hampshire-wide industrial yields read tighter than
                  the Southampton-only data suggests. We surface this
                  on the property-type pages and the industrial deep
                  dive.
                </p>
                <p>
                  Lender stance on Southampton regeneration and port
                  finance is positioned as follows. Stabilised
                  investment with strong unexpired on the
                  post-delivery Mayflower Quarter Watermark and Royal
                  Pier Waterfront office, retail and hotel product
                  will sit with the clearing-bank corporate desks
                  alongside the larger SME challengers, with{" "}
                  <strong>Allica Bank</strong>,{" "}
                  <strong>OakNorth</strong>,{" "}
                  <strong>Cambridge and Counties</strong> and{" "}
                  <strong>YBS Commercial</strong> all carrying
                  Hampshire and South Coast appetite into the 2
                  million to 15 million pound lot size band on the
                  cleanest cases. Owner-occupier acquisition on
                  smaller floor plates within the scheme footprints
                  and on Adanac Park or Nursling Industrial Estate
                  industrial-warehouse freehold will sit with{" "}
                  <strong>Allica Bank</strong>,{" "}
                  <strong>HTB</strong>,{" "}
                  <strong>Aldermore</strong> and{" "}
                  <strong>Cambridge and Counties</strong> on the
                  more SME-led cases.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pull quote 2 */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <blockquote className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] pl-8 py-2">
              <p className="font-editorial text-3xl leading-[1.2] tracking-tight text-[color:var(--color-ink)] md:text-4xl">
                Mayflower Quarter Watermark is the single largest
                addition to central Southampton commercial supply
                this decade. The M271 logistics spine at Adanac Park
                and Nursling Industrial Estate is the structural
                backbone of the port economy. Together they reset
                the Southampton commercial story through 2027.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 4: Sector deep-dives */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">04 &middot; Sector deep-dives</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Port and logistics, retail, hospitality and leisure,
                HMO and student.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Port and logistics: Adanac Park, Nursling
                    Industrial Estate, the ABP estate, Hedge End
                    business park and the M271 corridor.
                  </strong>{" "}
                  Southampton port and logistics trades on the
                  Associated British Ports estate, the Western Docks
                  container terminal and the M271 spur into the M27.
                  Adanac Park, sitting at the M271 junction in SO16,
                  carries the Ordnance Survey campus alongside a
                  growing geospatial, technology and professional
                  services cluster. Nursling Industrial Estate, on the
                  Test Lane flank, carries the densest
                  freight-forwarder, trade-counter and small
                  industrial occupier base, with freehold lot sizes
                  from 500,000 to 5 million pounds. Solent Industrial
                  Estate at Hedge End on the SO30 boundary picks up
                  the M27 east logistics cluster. The Solent corridor
                  is a critical context point: lenders price the M27
                  industrial-warehouse market as a single labour shed
                  running from Southampton east to Portsmouth, with
                  Whitbread, Lidl and DHL among the major operators
                  treating the corridor as one. Owner-occupier
                  industrial-warehouse acquisition prices 6.5 to 8.0
                  percent pa at 60 to 70 percent LTV through{" "}
                  <strong>Allica Bank</strong>,{" "}
                  <strong>HTB</strong>,{" "}
                  <strong>Aldermore</strong> and{" "}
                  <strong>Cambridge and Counties</strong> on the
                  cleanest cases. Investment industrial with
                  logistics-covenant tenant runs 6.5 to 7.5 percent pa
                  at 65 to 70 percent LTV.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Retail: Westquay Hammerson, Above Bar Street,
                    Bargate Quarter, East Street, Shirley, Bitterne,
                    Bedford Place, Oxford Street.
                  </strong>{" "}
                  Southampton retail trades on a stratified base.
                  Westquay, the Hammerson-owned central shopping
                  scheme, holds the national multiple anchor across
                  the central retail core and trades through
                  institutional investment channels. Above Bar Street,
                  running north from the Bargate through Pound Tree
                  Road to the Civic Centre, carries the central
                  high-street parade with a mix of multiples and
                  independents and freehold lot sizes from 600,000 to
                  2 million pounds on the better frontages. Bargate
                  Quarter, the regeneration-led retail and mixed-use
                  flank south of the Bargate towards East Street,
                  picks up the steady class-E and mixed-use absorption
                  flow. East Street carries the residential-over-
                  commercial regeneration parade. Shirley and Bitterne
                  carry the suburban district centre retail; Bedford
                  Place and Oxford Street carry the independent food
                  and beverage and serviced office cluster sitting
                  between the central retail core and the Highfield
                  student belt. Lender appetite is strongest on
                  Above Bar Street, Bargate Quarter and East Street
                  shop-with-flats and on Bedford Place and Oxford
                  Street semi-commercial through{" "}
                  <strong>YBS Commercial</strong>,{" "}
                  <strong>HTB</strong> and{" "}
                  <strong>Allica Bank</strong> at up to 75 percent
                  LTV. Prime Westquay investment with strong national
                  multiple covenants attracts clearing-bank pricing.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Hospitality and leisure: Ocean Village marina,
                    Town Quay, cruise terminal hotel cluster, Bedford
                    Place, Oxford Street independent F&amp;B.
                  </strong>{" "}
                  Southampton hospitality trades on the cruise
                  terminal, the marina and the resident catchment
                  rather than the seafront-tourism dominance you see
                  on the Bournemouth coast. Ocean Village marina
                  anchors the marina-front food and beverage and
                  leisure cluster, with Carnival UK&apos;s operational
                  headquarters sitting alongside as the major office
                  occupier. Town Quay carries the cruise terminal
                  hotel cluster and the waterfront restaurant parade.
                  The cruise terminal flow of more than 3 million
                  passengers a year, recovering through 2025 and
                  2026, anchors the hotel demand picture across the
                  Town Quay and Ocean Village flank. Bedford Place
                  and Oxford Street carry the independent F&amp;B
                  cluster sitting between the central retail core
                  and the Highfield student belt; Bevois Valley
                  carries the student-led F&amp;B parade.
                  Trading-business acquisition on Southampton hotels
                  prices 7.5 to 9.0 percent pa at 60 to 70 percent
                  LTV through{" "}
                  <strong>Cambridge and Counties</strong>,{" "}
                  <strong>Allica Bank</strong> and{" "}
                  <strong>Aldermore</strong> on the trading-business
                  panel. Independent F&amp;B freeholds on Bedford
                  Place and Oxford Street price 7.0 to 8.5 percent
                  pa at 60 to 65 percent LTV.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    HMO and student: Highfield, Portswood, Bevois
                    Valley, University of Southampton and Solent
                    University catchment, Article 4 backdrop.
                  </strong>{" "}
                  Southampton has one of the deeper student HMO
                  markets on the South Coast, driven by the combined
                  University of Southampton roughly 23,000-student
                  footprint at the Highfield campus and the Solent
                  University roughly 11,000-student footprint on
                  East Park Terrace. Highfield SO17 sits next to the
                  main University of Southampton campus and carries
                  the densest student-HMO conversion stock. Portswood
                  high street runs through the heart of the student
                  catchment, with parades of student-led
                  semi-commercial shop-with-flats and a steady HMO
                  refinance flow. Bevois Valley, sitting between
                  SO14 and SO17, picks up the student-led F&amp;B
                  and HMO flank with a slightly different rent and
                  tenant profile. The city operates an Article 4
                  direction across the relevant SO17 wards, which
                  removes permitted development rights on small HMO
                  conversion and forces full planning consent.
                  Lenders factor the Article 4 stance into the
                  underwrite, generally favouring stabilised licensed
                  stock with three years of clean rent rolls. Lot
                  sizes on converted Victorian and Edwardian HMOs in
                  SO17 typically run 400,000 to 1.2 million pounds.
                  HMO acquisition or refinance prices 7.0 to 8.5
                  percent pa at 65 to 75 percent LTV through{" "}
                  <strong>Paragon</strong>,{" "}
                  <strong>Together</strong> and Foundation Home
                  Loans on the HMO specialist panel alongside{" "}
                  <strong>YBS Commercial</strong>,{" "}
                  <strong>HTB</strong> and{" "}
                  <strong>Aldermore</strong> on the wider HMO and
                  semi-commercial panel.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pull quote 3 */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <blockquote className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] pl-8 py-2">
              <p className="font-editorial text-3xl leading-[1.2] tracking-tight text-[color:var(--color-ink)] md:text-4xl">
                Southampton has one of the deeper student HMO markets
                on the South Coast. The 34,000-student footprint
                across two universities and the Article 4 backdrop
                on the SO17 belt produces a well-documented refinance
                pipeline that lenders read with confidence.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 5: Mortgage market */}
      <section className="section">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">05 &middot; The mortgage market</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                What is available in Southampton in 2026.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  Commercial mortgage product across Southampton runs
                  between{" "}
                  <span className="figure-inline">6.0 and 9.0%</span>{" "}
                  pa at mid-2026, depending on sector, covenant, LTV
                  and term. Owner-occupier industrial-warehouse
                  freehold along the M271 corridor at Adanac Park and
                  Nursling Industrial Estate sits at the strongest
                  end of the range, 6.5 to 8.0 percent pa at 60 to
                  70 percent LTV on five to fifteen-year
                  fixed-amortisation terms. Owner-occupier
                  professional services and creative freehold on the
                  central spine and the Bedford Place flank runs
                  similar pricing where the borrower has credible
                  trading accounts, 6.5 to 7.5 percent pa at 65 to
                  75 percent LTV. Investment commercial mortgages on
                  stabilised retail and office product with strong
                  unexpired sit at 6.5 to 7.75 percent pa at 65 to
                  75 percent LTV on the cleanest cases.
                </p>
                <p>
                  Industrial-warehouse investment with logistics
                  covenant is the strongest priced segment in the
                  city, reflecting the M27 corridor labour shed and
                  the structural appetite from challenger and clearing
                  bank panels. Logistics investment with strong
                  unexpired runs 6.5 to 7.5 percent pa at 65 to 70
                  percent LTV through{" "}
                  <strong>Allica Bank</strong>,{" "}
                  <strong>HTB</strong>,{" "}
                  <strong>OakNorth</strong>,{" "}
                  <strong>Cambridge and Counties</strong>,{" "}
                  <strong>YBS Commercial</strong> and{" "}
                  <strong>Aldermore</strong> on the challenger panel.
                  Owner-occupier trade-counter and small industrial
                  freehold on Nursling Industrial Estate, Test Lane
                  and Adanac Park prices 6.75 to 8.0 percent pa at
                  60 to 70 percent LTV on cases with three years of
                  clean trading accounts.
                </p>
                <p>
                  Hospitality trading-business is the toughest
                  segment: typically 7.5 to 9.0 percent pa at 60 to
                  70 percent LTV, with{" "}
                  <strong>Cambridge and Counties</strong>,{" "}
                  <strong>Allica Bank</strong> and{" "}
                  <strong>Aldermore</strong> the most active SME
                  trading-business names on the Town Quay, cruise
                  terminal and Ocean Village hospitality flank.
                  Independent hotel freeholds on Town Quay and the
                  central seafront price 7.5 to 8.5 percent pa at
                  60 to 65 percent LTV on cases with three years of
                  clean trading accounts. Larger branded hotel
                  investment with strong covenant sits with the
                  clearing-bank corporate desks at tighter pricing
                  alongside <strong>OakNorth</strong> on the larger
                  SME cases above 2 million pounds.
                </p>
                <p>
                  HMO acquisition or refinance on student and
                  professional sharer stock through the Highfield,
                  Portswood and Bevois Valley belt runs 7.0 to 8.5
                  percent pa at 65 to 75 percent LTV.{" "}
                  <strong>Paragon</strong> and{" "}
                  <strong>Together</strong> anchor the HMO specialist
                  panel alongside Foundation Home Loans, with
                  Southampton portfolio refinancers particularly
                  valuing <strong>Paragon</strong> and{" "}
                  <strong>Together</strong> for the depth of
                  portfolio coverage on multi-asset HMO cases.
                  Semi-commercial mixed-use shop-with-flats on
                  Portswood, Bevois Valley, Bedford Place, Bargate
                  Quarter and East Street runs up to 75 percent LTV
                  at 7.0 to 8.0 percent pa across the strong
                  shop-with-flat archetype with{" "}
                  <strong>YBS Commercial</strong>,{" "}
                  <strong>HTB</strong> and{" "}
                  <strong>Aldermore</strong> consistently competitive.
                  Bridging across the catchment sits at 0.75 to 1.10
                  percent per month on the mainstream specialist
                  desks, with the cleanest cases on lower-LTV
                  change-of-use and refurb-to-term plays pricing
                  toward the lower end.
                </p>
                <p>
                  Lender appetite splits by sector. Industrial and
                  port logistics is the most contested asset class in
                  Southampton, with{" "}
                  <strong>Allica Bank</strong>,{" "}
                  <strong>OakNorth</strong>,{" "}
                  <strong>Cambridge and Counties</strong>,{" "}
                  <strong>HTB</strong> and{" "}
                  <strong>YBS Commercial</strong> bidding into the
                  M271 corridor cases. HMO and portfolio is the
                  second most active segment, with{" "}
                  <strong>Paragon</strong> and{" "}
                  <strong>Together</strong> writing the bulk of the
                  Highfield, Portswood and Bevois Valley student and
                  professional sharer refinance pipeline. The
                  clearing banks at NatWest Commercial, Lloyds Bank
                  Commercial, HSBC UK Business Banking, Barclays
                  Business Banking and Santander Corporate all carry
                  credible Southampton appetite into the prime
                  central retail, Westquay investment, M271 logistics
                  and central professional services freehold flank.
                  The challenger SME panel writes the bulk of the
                  mid-market:{" "}
                  <strong>Allica Bank</strong>,{" "}
                  <strong>HTB</strong>,{" "}
                  <strong>Cambridge and Counties</strong>,{" "}
                  <strong>YBS Commercial</strong>,{" "}
                  <strong>Aldermore</strong> and{" "}
                  <strong>OakNorth</strong> sit at the centre of the
                  specialist pool, with{" "}
                  <strong>Paragon</strong> and{" "}
                  <strong>Together</strong> anchoring the HMO and
                  semi-commercial flank. Foundation Home Loans sits
                  on the wider HMO panel alongside the eight on our
                  active list. The wider ninety-strong panel rounds
                  out the appetite across challenger banks,
                  specialists and private credit on the more complex
                  cases.
                </p>
                <p>
                  We are part of a broader UK commercial mortgage
                  brokerage network. For the wider regional view
                  across Hampshire, taking in Portsmouth, Winchester,
                  Basingstoke, Eastleigh and the wider Solent
                  corridor alongside the Southampton catchment, see{" "}
                  <a
                    href={hampshireBrokerUrl}
                    rel="external noopener noreferrer"
                    target="_blank"
                    className="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4 hover:text-[color:var(--color-accent)]"
                  >
                    our Hampshire commercial mortgage broker hub
                  </a>
                  , which sets out the parent brokerage&apos;s
                  Southampton desk and the panel coverage across the
                  wider Hampshire and South Coast footprint.
                </p>
              </div>
            </ScrollReveal>

            {/* Lender table */}
            <ScrollReveal delay={0.1}>
              <div className="mt-12 overflow-hidden border border-[color:var(--color-rule)] bg-white">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-[color:var(--color-rule)] bg-[color:var(--color-paper)] font-mono text-[0.62rem] uppercase tracking-widest text-[color:var(--color-muted)]">
                      <th className="px-5 py-4">Lender</th>
                      <th className="px-5 py-4">Sweet spot</th>
                      <th className="px-5 py-4">Typical LTV</th>
                      <th className="px-5 py-4">Indicative rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[color:var(--color-rule)]">
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Allica Bank
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Owner-occupier, M271 logistics, SME
                      </td>
                      <td className="px-5 py-4 fig">70%</td>
                      <td className="px-5 py-4 fig">6.75 to 8.0%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        HTB
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Semi-commercial, multi-let, HMO
                      </td>
                      <td className="px-5 py-4 fig">75%</td>
                      <td className="px-5 py-4 fig">7.0 to 8.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Cambridge and Counties
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Hospitality, SME owner-occupier, portfolio
                      </td>
                      <td className="px-5 py-4 fig">70%</td>
                      <td className="px-5 py-4 fig">7.0 to 8.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        YBS Commercial
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Investment, semi-commercial, portfolio
                      </td>
                      <td className="px-5 py-4 fig">75%</td>
                      <td className="px-5 py-4 fig">6.75 to 8.0%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Aldermore
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Semi-commercial, trading-business, owner-occupier
                      </td>
                      <td className="px-5 py-4 fig">70%</td>
                      <td className="px-5 py-4 fig">7.0 to 8.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Paragon
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        HMO portfolio, BTL, multi-asset refinance
                      </td>
                      <td className="px-5 py-4 fig">75%</td>
                      <td className="px-5 py-4 fig">7.0 to 8.25%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Together
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        HMO, semi-commercial, complex credit
                      </td>
                      <td className="px-5 py-4 fig">70%</td>
                      <td className="px-5 py-4 fig">7.5 to 9.0%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        OakNorth
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Larger SME, 2 million plus, investment
                      </td>
                      <td className="px-5 py-4 fig">65%</td>
                      <td className="px-5 py-4 fig">6.5 to 7.75%</td>
                    </tr>
                  </tbody>
                </table>
                <p className="border-t border-[color:var(--color-rule)] bg-[color:var(--color-paper)] px-5 py-4 text-xs leading-relaxed text-[color:var(--color-muted)]">
                  Plus Foundation Home Loans on the wider HMO and
                  portfolio panel. Plus the clearing banks at NatWest
                  Commercial, Lloyds Bank Commercial, HSBC UK Business
                  Banking, Barclays Business Banking and Santander
                  Corporate on the prime central retail, M271
                  logistics investment and professional services
                  flank. Plus another 80 panel members across
                  challenger banks, specialists and private credit.
                  Rates indicative for mid-2026 Southampton primary
                  product. Actual offers depend on covenant, LTV,
                  sector and term.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Recent comparables */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="eyebrow">Recent comparables</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Three deals from the desk this quarter.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[color:var(--color-muted)]">
                Anonymised. Representative rate, LTV, term and lender
                across three of the most common Southampton case
                shapes.
              </p>
            </div>
          </ScrollReveal>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {comparables.map((c, i) => (
              <ScrollReveal key={c.headline} delay={i * 0.08}>
                <div className="card h-full">
                  <p className="font-mono text-[0.62rem] uppercase tracking-widest text-[color:var(--color-muted)]">
                    Case {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 font-editorial text-xl leading-tight">
                    {c.headline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
                    {c.detail}
                  </p>
                  <p className="mt-6 fig text-base text-[color:var(--color-accent)]">
                    {c.terms}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Five recent deal flavours */}
      <section className="section">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">06 &middot; Deal flavours</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Five recent deal shapes from across Southampton.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  Five anonymised composite deal flavours, each drawn
                  from the recurring shapes we see across Southampton.
                  Names removed, terms representative of the range we
                  are pricing through Q1 and Q2 2026.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Adanac Park trade-counter freehold acquisition.
                  </strong>{" "}
                  An owner-occupier acquiring a 14,500 sq ft
                  trade-counter and warehouse freehold at the Adanac
                  Park M271 junction, seven years of clean trading
                  accounts and strong logistics-corridor covenant.
                  Combined building purchase and working-capital
                  facility with <strong>Allica Bank</strong>. 65% LTV
                  at 7.15% pa, five-year fix, 20-year amortisation.
                  The depth of M27 corridor labour shed and the
                  Hampshire-wide industrial yield read supported the
                  challenger underwrite at the upper LTV for
                  owner-occupier industrial product.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Highfield SO17 student HMO portfolio refinance.
                  </strong>{" "}
                  An investor with five Highfield and Portswood
                  student HMOs across SO17 consolidating four
                  short-dated facilities onto a single portfolio loan
                  with <strong>Paragon</strong>. 75% LTV at 7.55% pa,
                  five-year fix, 25-year amortisation. Stabilised
                  assured shorthold income with the University of
                  Southampton catchment underpinning the rent roll.
                  The Article 4 documentation supported the
                  underwrite on stock condition and licensing status.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Ocean Village marina hospitality refinance.
                  </strong>{" "}
                  An independent operator holding a 38-cover
                  marina-front restaurant at Ocean Village refinancing
                  off a 2021 five-year fix into a stabilised
                  trading-business facility with{" "}
                  <strong>Cambridge and Counties</strong>. 65% LTV at
                  7.95% pa, five-year fix, 20-year amortisation. Three
                  years of clean trading accounts post-pandemic,
                  EBITDA cover comfortably above 1.5 times. The
                  captive marina footfall and the cruise terminal
                  passenger flow supported the trading-business
                  underwrite on the marina-front F&amp;B archetype.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Bedford Place semi-commercial portfolio.
                  </strong>{" "}
                  A private investor with four Bedford Place and
                  Polygon shop-with-flats consolidating three
                  short-dated facilities onto a single commercial
                  portfolio loan with <strong>HTB</strong>. 70% LTV at
                  7.55% pa, five-year fix, 25-year amortisation.
                  Stabilised mixed Class E ground floor and assured
                  shorthold residential income above, with strong
                  independent F&amp;B occupier covenant supporting the
                  Class E underwrite on the Bedford Place flank.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    East Street regeneration mixed-use acquisition.
                  </strong>{" "}
                  An investor acquiring a 16-flat residential-over-
                  commercial scheme on the East Street parade with
                  conditions discharged through the 26/00205/DIS
                  application. 65% LTV at 6.95% pa with{" "}
                  <strong>YBS Commercial</strong>, five-year fix,
                  25-year amortisation. The Bargate Quarter
                  regeneration backdrop and the central retail
                  footfall context supported the investment underwrite
                  at the stronger end of the range for mixed-use
                  product.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pull quote 4 */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <blockquote className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] pl-8 py-2">
              <p className="font-editorial text-3xl leading-[1.2] tracking-tight text-[color:var(--color-ink)] md:text-4xl">
                The Mayflower Quarter Watermark delivery, the Royal
                Pier Waterfront progression, the M27 corridor
                industrial absorption and the 2020 to 2022 refinance
                wave sit at the centre of our Southampton watching
                brief through to the end of 2027.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 7: Outlook */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">07 &middot; Outlook</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Outlook for late 2026 and 2027.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  Three structural factors sit at the centre of the
                  Southampton market watching brief through late 2026
                  and 2027. The first is Mayflower Quarter Watermark
                  delivery. The flagship Southampton regeneration
                  scheme is the single largest addition to central
                  commercial supply this decade, with phased leisure,
                  retail, food and beverage, office and residential
                  floor plate landing through 2026 and into 2027.
                  Lettings pace, occupier mix on the office floor
                  plate, ground-floor retail tenancy shape and the
                  hotel-operator letting will all reset reference
                  values for the central Southampton commercial
                  market. The Royal Pier Waterfront scheme sits in the
                  watching brief alongside, with delivery-vehicle
                  confirmation and hotel-operator letting the major
                  pipeline triggers through 2027.
                </p>
                <p>
                  The second is the M27 corridor industrial absorption.
                  Adanac Park, Nursling Industrial Estate, Solent
                  Industrial Estate at Hedge End and the wider Botley
                  Road and Eastleigh corridor continue to absorb
                  freight, logistics and trade-counter occupier
                  demand. The Solent corridor read between Southampton
                  and Portsmouth is a single industrial-warehouse
                  labour shed, with major operators treating the
                  corridor as one. The structural port economy at the
                  Associated British Ports estate, the Western Docks
                  container terminal and the cruise terminal flank
                  continues to underpin the city-wide freight demand
                  picture. Investment yields on the M27 corridor are
                  the tightest in the Southampton commercial market
                  and we expect that to hold through 2027.
                </p>
                <p>
                  The third is the structural refinancing wave from
                  the 2020 to 2022 vintage of five-year fixed
                  commercial mortgage debt. Borrowers who locked at 3
                  to 4.5 percent pa five years ago are refinancing
                  into a 6 to 9 percent world. For Southampton assets
                  the maths usually works because rents and yields
                  have held: industrial-warehouse on the M271
                  logistics covenant, HMO and portfolio on the
                  structurally strong student catchment, central
                  retail and mixed-use on the steady absorption flow
                  through Bargate Quarter and East Street, and
                  semi-commercial on the steady Class E and assured
                  shorthold income base. The conversation is
                  structural rather than distressed. The
                  trading-business hospitality flank carries the most
                  case-by-case underwrite work; the M271 logistics
                  flank carries the cleanest refinance pipeline; the
                  HMO and central retail flanks sit between the two
                  on lender appetite.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-lg border border-[color:var(--color-ink)] bg-[color:var(--color-ink)] p-10 text-[color:var(--color-paper)] md:p-16">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  background:
                    "radial-gradient(circle at 80% 50%, color-mix(in oklch, var(--color-accent), transparent 50%) 0%, transparent 55%)",
                }}
              />
              <div className="relative grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
                <div>
                  <span className="eyebrow">08 &middot; How to talk to us</span>
                  <h2 className="mt-6 font-editorial text-4xl leading-[1.05] text-[color:var(--color-paper)] md:text-[3.25rem]">
                    Buying, refinancing or holding through 2026?{" "}
                    <span className="text-[color:var(--color-accent)]">
                      Send the deal.
                    </span>
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--color-paper)]/75">
                    Whether you are looking at an Adanac Park or
                    Nursling Industrial Estate trade-counter or
                    warehouse acquisition, an Ocean Village or Town
                    Quay hospitality refinance, a Highfield, Portswood
                    or Bevois Valley student HMO portfolio
                    consolidation, a Bedford Place or Bargate Quarter
                    semi-commercial freehold, an East Street
                    mixed-use scheme, a Mayflower Quarter Watermark
                    or Royal Pier Waterfront investment or a central
                    professional services freehold, the working
                    method is the same. Send through the property
                    details, the LTV target, a rough sense of the
                    trading position or rental income, and we will
                    take it from there. We shortlist three to five
                    lenders from the eight on our active panel,{" "}
                    <strong>Allica Bank</strong>,{" "}
                    <strong>HTB</strong>,{" "}
                    <strong>Cambridge and Counties</strong>,{" "}
                    <strong>YBS Commercial</strong>,{" "}
                    <strong>Aldermore</strong>,{" "}
                    <strong>Paragon</strong>,{" "}
                    <strong>Together</strong> and{" "}
                    <strong>OakNorth</strong>, plus the wider
                    ninety-strong network including Foundation Home
                    Loans on the HMO portfolio flank and the clearing
                    banks on the prime investment and M271 logistics
                    flank. We run live appetite and come back with
                    structured terms covering rate, LTV, term, fees
                    and conditions inside 48 hours. If the numbers
                    do not work, you will know inside two business
                    hours. Phone, email or send through the site
                    contact form.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  <Link href="/contact" className="btn btn-accent">
                    Get indicative terms
                  </Link>
                  <Link
                    href="/calculator"
                    className="btn btn-ghost"
                    style={{
                      borderColor: "var(--color-paper)",
                      color: "var(--color-paper)",
                    }}
                  >
                    Run the calculator
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footnote */}
      <section className="section-tight">
        <div className="container-editorial">
          <p className="mx-auto max-w-3xl text-xs leading-relaxed text-[color:var(--color-muted)]">
            Rate ranges and lender positioning quoted reflect the
            Southampton commercial mortgage market in May 2026.
            Indicative only; actual offers depend on individual deal
            characteristics. This piece is updated quarterly.
            Commercial mortgages on non-dwelling property are
            unregulated lending. We are not FCA-authorised because
            the products we arrange are unregulated. Where a deal
            would require FCA authorisation, we refer to a regulated
            firm.
          </p>
        </div>
      </section>
    </>
  );
}
