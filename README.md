# Commercial Mortgages Leeds

Specialist commercial mortgage broker site for Leeds and West Yorkshire — primary site in the [CMB network](https://github.com/commercialmortgagesbroker).

Built on Next.js 16, React 19, Tailwind v4. Forked from the v2 development-finance reference repo and customised for commercial mortgages per the network's `DESIGN-BRIEF.md`.

## Tech stack

- Next.js 16.1.6 (App Router)
- React 19.2.3
- Tailwind CSS v4
- TypeScript 5
- Leaflet + react-leaflet (areas map)
- Resend (interim lead capture)
- Hosting: Netlify

## Getting started

```bash
cp .env.example .env.local
# Fill in RESEND_API_KEY, set RESEND_TO=commercialmortgagesbroker@gmail.com
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Var | Purpose |
|-----|---------|
| `RESEND_API_KEY` | Resend API key for interim lead capture |
| `RESEND_TO` | Email address to deliver leads to (default `commercialmortgagesbroker@gmail.com`) |
| `SITE_SOURCE` | Source label sent with each lead |
| `SITE_TAG` | Tag included on each lead |
| `GHL_*` | GoHighLevel API credentials (deferred — leave empty until GHL is wired) |
| `NEXT_PUBLIC_GA4_ID` | GA4 property ID (deferred) |
| `TURNSTILE_*` | Cloudflare Turnstile keys (deferred) |

## Site structure

- `/` — Homepage with hero, market snapshot, live commercial planning pipeline, calculator, lender panel, area grid, case studies, FAQ
- `/services/[slug]` — Owner-occupier, investment, semi-commercial, portfolio, trading-business, remortgage, bridge-to-let, second-charge
- `/property-types/[slug]` — Retail, office, industrial-warehouse, leisure-hospitality, healthcare, pub-restaurant, MOT, nursery, mixed-use, semi-commercial, HMO-block, holiday-let
- `/areas/[slug]` — 12 Leeds sub-areas
- `/calculator` — Commercial mortgage repayment + LTV calculator
- `/blog` — Market commentary
- `/case-studies`, `/about`, `/how-it-works`, `/faq`, `/contact`, `/privacy`, `/terms`

## Customisation surface

The data files in `src/data/` are the only files that change between network sites. Components, layout, motion, type system, button styles — all inherited from the v2 reference and untouched.

## Lead capture

Form submissions hit `/api/leads`. The route emails `commercialmortgagesbroker@gmail.com` via Resend. When GHL is wired later, the same route adds a GHL POST alongside the email — zero rebuild.

## Commercial planning data

`src/data/commercial-data/leeds-planning.json` contains commercial-relevant Leeds City Council planning applications, filtered from the data lake (B/C/E class, change-of-use, hotel/leisure, retail conversions).

## Network

Part of the Commercial Mortgages network. Sister sites are listed in `src/data/network-sites.ts`.
