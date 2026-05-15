# City Market Brief — Southampton, Hampshire

> Shared brief for both Southampton domain PRDs. Last refreshed 2026-05-09 from town-stats, sold-data and Southampton City Council planning extracts.

## City: Southampton, Hampshire

Southampton is a port-led city of c. 250,000 people on the M27/M3 spine of the Solent. Commercial property here is dominated by **port-and-logistics** (ABP estate, container terminal, freight forwarders along Western Docks and the M271), **education-driven leisure and retail** (University of Southampton, Solent University, Westquay), and a **regenerating central waterfront** (Mayflower Quarter, Royal Pier, Ocean Village). Southampton sits across the Solent from Portsmouth and the two cities operate as a single **South-Coast logistics corridor** along the M27, but the markets read differently: Southampton is freight, retail and student-led; Portsmouth is naval, defence and leisure-led.

### Snapshot stats (from town-stats JSON)

- **Median residential price (12m):** £249,000 — proxy for general market temperature; below the wider Hampshire average and reflecting a renter-heavy, multi-occupancy stock.
- **Residential transactions (12m):** 2,407
- **YoY price change:** −2.4% (a softer trend than Portsmouth across the water)
- **Planning applications (12m, all uses):** 253 received, of which 79 commercial-mortgage-relevant
- **Approval rate (relevant 12m):** 96%
- **Pipeline units (residential, all schemes):** 75 (46 approved + 29 pending)
- **Pipeline GDV (modelled):** £13.1M

> Source: `data/generated/town-stats/hampshire/southampton.json` and `data/generated/planning/hampshire/southampton/latest.json`

### Sold-data digest (from latest.json)

- **Median by type:** D £380,000 · S £300,000 · T £260,000 · F £159,133
- **New build count (12m):** 2 (very low — Southampton is overwhelmingly a re-trading market, not a new-build market)
- **Top postcode clusters by transaction value (12m):** SO19 (Bitterne / Sholing — strong terraced and semi flow), SO17 (Highfield — university-driven), SO15 (Shirley / Polygon — central terraced), SO16 (Bassett / Lordswood — suburban), SO14 (city centre — flatted stock).
- **Recent commercial-relevant comparables (Feb 2026):** £200K Northam Road terrace SO14, £165K Ashurst Mews flat SO18, £348K Stoddart Avenue detached SO19.

> Source: `data/generated/sold-data/hampshire/southampton/latest.json`

### Planning data — commercial-mortgage-relevant slice

Filter applied to `planning-exports/southampton-raw-api-2026-05-06.json` and the digested `latest.json` for change-of-use, Class E, hotels, sui generis and leisure consents:

| Reference | Address | Proposal | Status |
|-----------|---------|----------|--------|
| 26/00182/FUL | 68 Commercial Road, SO15 1GD | Change of use to mixed-use entertainment venue (puzzles experience, bar — sui generis) | Pending |
| 26/00183/LBC | 68 Commercial Road, SO15 1GD | Listed building consent for shopfront alterations (companion) | Pending |
| 26/00163/FUL | (Bevois Valley) | Retrospective change of use of first floor to Class C1 hotel | Pending |
| 26/00205/DIS | Land r/o 104–107 East Street, SO14 3HH | 16 flats — discharge of conditions on 19/00348/FUL | Approved |
| 26/00161/FUL | Bedford Place / Polygon | Change of ground floor to Class E café with extraction flue | Pending |
| 25/01428/PA56 | (Class E to C3 conversion, 7 dwellings) | Class E retail to residential PD prior approval | Approved |

These map directly onto **commercial mortgage demand**: refinance of the converted retail into BTL/HMO stock, owner-occupier finance for the new Class E hospitality operators, and investment mortgages on the East Street residential-over-commercial scheme.

### Commercial property anchors

- **Named business parks / industrial estates:** Adanac Park (M271), Nursling Industrial Estate, Test Lane, Solent Industrial Estate (Hedge End — adjacent), Botley Road / Eastleigh corridor.
- **Named retail / mixed-use regen schemes:** Westquay (Hammerson), Bargate Quarter, Royal Pier Waterfront, Mayflower Quarter (Watermark redevelopment), Ocean Village, West Quay Watermark.
- **Named office quarters / CBD streets:** Above Bar Street, Civic Centre Road, Ocean Village (Carnival HQ), Cumberland Place, Town Quay.
- **Named leisure / hospitality clusters:** Oxford Street (independent F&B), Bedford Place, Ocean Village marina, Bevois Valley (student-led), West Quay (chain-led).
- **Named healthcare / care home concentrations:** Bassett, Highfield, Bitterne — University Hospital Southampton anchors a substantial private healthcare cluster including the Spire and Nuffield.

### Lender presence in Southampton

- **High-street relationship desks:** NatWest Commercial (Above Bar), Lloyds Bank Commercial, HSBC UK Business Banking (Ocean Village), Barclays Business Banking, Santander Corporate.
- **Challenger banks:** Allica Bank (broker-led, no branch — strong owner-occupier appetite £250K–£3M), Shawbrook Commercial (specialist semi-commercial and HMO), YBS Commercial (investment focus), Cambridge & Counties (strong on Hampshire SME freeholds), HTB (retail-and-residential mixed), Aldermore (semi-commercial and trading-business).
- **Specialist:** Together (heavier credit), Lendinvest Buy-to-Let / Commercial, Paragon (portfolio landlords), OakNorth (£2M+).
- **Private credit:** Increasingly active on £1M+ trading-business deals in the Solent corridor.

### Sub-areas to cover (12)

1. **City Centre (SO14, SO15)** — CBD; Above Bar, East Street, Civic Centre. Office stock and Class E refits.
2. **Ocean Village (SO14)** — marina, Carnival HQ, leisure-led. Hospitality and office investment.
3. **Mayflower Quarter / Royal Pier (SO14)** — large mixed-use regeneration zone.
4. **Bedford Place / The Polygon (SO15)** — independent F&B and serviced offices.
5. **Bevois Valley (SO14, SO17)** — student-led F&B, HMO investment.
6. **Highfield / Portswood (SO17)** — University of Southampton corridor, HMO + retail parade.
7. **Shirley (SO15, SO16)** — high-street retail, mixed-use freeholds, suburban offices.
8. **Bitterne (SO18, SO19)** — district centre retail, suburban offices, care homes.
9. **Bassett / Lordswood (SO16)** — affluent suburb, professional offices, dental/medical practices.
10. **Woolston / Sholing (SO19)** — riverside light industrial, retail parades.
11. **Adanac Park / Nursling (SO16)** — industrial-warehouse, B8 logistics, M271 access.
12. **Hedge End / West End (SO30)** — out-of-town retail, light industrial, business parks (technically borough boundary).

### Demand-side signals

- **Largest employers / job clusters:** Associated British Ports (largest UK vehicle-handling port), Carnival UK (HQ at Ocean Village), Ordnance Survey (adjacent Adanac Park), University Hospital Southampton (NHS Foundation Trust), Lloyds Register, Solent University, Aviva (large back-office presence).
- **University presence:** University of Southampton (c. 23,000 students) + Solent University (c. 11,000) → strong HMO/PBSA spillover, supports Bevois Valley and Highfield F&B.
- **Tourism profile:** Cruise-passenger flow through ABP cruise terminals (3M+ passengers/yr pre-pandemic, recovering); Ocean Village hospitality, West Quay retail tourism. Modest hotel-mortgage demand.
- **NHS trust footprint:** University Hospital Southampton is one of the UK’s largest teaching hospitals — anchors private healthcare and care-home freeholds across the SO16 / SO17 belt.
- **Population + working-age trend:** Working-age population stable; student in-flow keeps net population marginally positive.

### Cross-Solent / regional context

The M27 corridor between Southampton and Portsmouth is a single industrial-warehouse market — large logistics operators (Whitbread, Lidl regional, DHL) treat it as one labour shed. For commercial mortgage placement this matters: **Hampshire-wide industrial yields read tighter than the Southampton-only data suggests** because lenders price the corridor, not the city. We surface this in the area pages and the industrial property-type page.

### Data gaps

- **Direct commercial transaction volume:** Land Registry residential transactions are our temperature gauge; for commercial we proxy via planning Class E and sui generis activity, plus Companies House charges register (commercial mortgage debentures granted to Hampshire-registered SPVs).
- **EPC commercial register:** We can pull Southampton-postcode commercial EPCs from the open EPC register at build time to rank stock by efficiency banding (relevant for green-loan pricing from NatWest, Lloyds and Allica).
- **Business-rates extracts:** VOA list lets us model rateable value distribution by ward; we will publish a rateable-value distribution chart on the city-led domain.
- **Approved-units count looks low** (46 in the digest) — this reflects that most approvals in the period are HMO change-of-use rather than unit-counted residential schemes; the relevant-applications count of 79 (96% approval rate on those decided) is the better health gauge.
