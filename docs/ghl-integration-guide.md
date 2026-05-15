# GoHighLevel Lead Integration — Setup Guide

Ready-to-use guide for wiring up finance sites to GoHighLevel. Copy the code blocks directly — credentials and IDs are pre-filled.

---

## 1. `.env.local`

Create this file in the project root. Confirm `.env*` is in `.gitignore`.

```
GHL_API_KEY=pit-d32839e6-5f3e-41a3-b70f-9abfa11e12c9
GHL_LOCATION_ID=PGDuQBCMN1YuS6cV6fS9
GHL_PIPELINE_ID=MLI45UJOs037pZdAEK0P
GHL_ENQUIRY_STAGE_ID=2b7de044-0bfe-4165-a9e6-ced7a8e54616
GHL_ASSIGNED_USER_ID=KmVjKOEHm7NQ7bD3O9G5
```

> **Note:** The API key rotates every 7 days. Update it when it expires via GHL Settings > Integrations.

---

## 2. API Route

Create `src/app/api/leads/route.ts`:

```ts
import { NextResponse } from 'next/server';

const GHL_BASE = 'https://services.leadconnectorhq.com';

interface LeadPayload {
  source: string;
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
  loanAmount: string;
  borough: string;
  schemeType: string;
  developmentStage?: string;
  message?: string;
  referralSource?: string;
}

function splitName(fullName: string): { firstName: string; lastName: string } {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return { firstName: parts[0], lastName: '' };
  return { firstName: parts[0], lastName: parts.slice(1).join(' ') };
}

async function ghlFetch(path: string, body: Record<string, unknown>) {
  return fetch(`${GHL_BASE}${path}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.GHL_API_KEY}`,
      Version: '2021-07-28',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  });
}

export async function POST(request: Request) {
  try {
    const data: LeadPayload = await request.json();

    if (!data.fullName || !data.email || !data.phone || !data.borough || !data.schemeType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const { firstName, lastName } = splitName(data.fullName);
    const locationId = process.env.GHL_LOCATION_ID!;

    // =====================================================
    // CUSTOMISE PER SITE: Update the site tag below
    // =====================================================
    const SITE_TAG = 'LondonDevelopmentFinance'; // <-- CHANGE THIS PER SITE
    const SITE_SOURCE = 'London Development Finance Website'; // <-- CHANGE THIS PER SITE

    const tags = [SITE_TAG, 'Website Lead'];
    if (data.source === 'contact-form') tags.push('Contact Form');
    if (data.source === 'lead-form') tags.push('Lead Form');
    if (data.borough) tags.push(data.borough);
    if (data.schemeType) tags.push(data.schemeType);

    const noteLines: string[] = [];
    noteLines.push(`Loan Amount: ${data.loanAmount}`);
    noteLines.push(`Borough: ${data.borough}`);
    noteLines.push(`Scheme Type: ${data.schemeType}`);
    if (data.developmentStage) noteLines.push(`Development Stage: ${data.developmentStage}`);
    if (data.referralSource) noteLines.push(`Referral Source: ${data.referralSource}`);
    if (data.message) noteLines.push(`Message: ${data.message}`);

    // 1. Create contact
    const contactRes = await ghlFetch('/contacts/', {
      locationId,
      firstName,
      lastName,
      email: data.email,
      phone: data.phone,
      companyName: data.companyName || undefined,
      tags,
      source: SITE_SOURCE,
      assignedTo: process.env.GHL_ASSIGNED_USER_ID,
    });

    if (!contactRes.ok) {
      const err = await contactRes.json();
      console.error('GHL contact creation failed:', err);
      return NextResponse.json({ error: 'Failed to create lead' }, { status: 500 });
    }

    const { contact } = await contactRes.json();

    // 2. Create opportunity in pipeline
    const oppRes = await ghlFetch('/opportunities/', {
      locationId,
      pipelineId: process.env.GHL_PIPELINE_ID,
      pipelineStageId: process.env.GHL_ENQUIRY_STAGE_ID,
      contactId: contact.id,
      name: `${data.fullName} - ${data.loanAmount} ${data.borough}`,
      status: 'open',
      assignedTo: process.env.GHL_ASSIGNED_USER_ID,
    });

    if (!oppRes.ok) {
      const err = await oppRes.json();
      console.error('GHL opportunity creation failed:', err);
    }

    // 3. Add note with full details
    await fetch(`${GHL_BASE}/contacts/${contact.id}/notes`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.GHL_API_KEY}`,
        Version: '2021-07-28',
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        body: noteLines.join('\n'),
        userId: process.env.GHL_ASSIGNED_USER_ID,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
```

---

## 3. Wire Up Forms

In each form's `handleSubmit`, replace any `console.log` / simulated delay with:

```ts
setIsSubmitting(true);
setSubmitError(null);

try {
  const response = await fetch('/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      source: 'contact-form', // or 'lead-form'
      ...formData,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to submit enquiry');
  }

  setIsSubmitted(true);
} catch (error) {
  console.error('Form submission error:', error);
  setSubmitError('Something went wrong. Please try again or call us directly.');
} finally {
  setIsSubmitting(false);
}
```

Add `submitError` state to the component:

```ts
const [submitError, setSubmitError] = useState<string | null>(null);
```

And render the error above the submit button:

```tsx
{submitError && (
  <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded" role="alert">
    <p className="text-red-700 text-sm">{submitError}</p>
  </div>
)}
```

---

## 4. Chat Widget

Add to `layout.tsx`. Import `Script` from `next/script`, then place inside `<body>` after `<Footer />`:

```tsx
<Script
  src="https://beta.leadconnectorhq.com/loader.js"
  data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
  data-widget-id="69a06ec73d47353b95cbc9e4"
  strategy="afterInteractive"
/>
```

> Widget ID `69a06ec73d47353b95cbc9e4` is for London Development Finance. Create a new widget in GHL for each site and swap the ID.

---

## 5. Per-Site Checklist

For each new site, change only these items:

| Item | What to change | Example |
|---|---|---|
| `SITE_TAG` in route.ts | Site identifier tag | `BirminghamDevelopmentFinance` |
| `SITE_SOURCE` in route.ts | Source name shown in GHL | `Birmingham Development Finance Website` |
| `data-widget-id` in layout.tsx | Chat widget for that site | New ID from GHL |
| Form field names | If forms collect different fields | Add/remove from `noteLines` |

Everything else stays the same — same `.env.local`, same pipeline, same user assignment.

---

## 6. GHL Account Details

For reference, these are the current values (all sites share the same GHL sub-account):

| Item | Value |
|---|---|
| **API Key** | `pit-d32839e6-5f3e-41a3-b70f-9abfa11e12c9` (rotates every 7 days) |
| **Location ID** | `PGDuQBCMN1YuS6cV6fS9` |
| **Pipeline** | Construction Capital Pipeline (`MLI45UJOs037pZdAEK0P`) |
| **Enquiry Stage** | `2b7de044-0bfe-4165-a9e6-ced7a8e54616` |
| **Assigned To** | Matt Lenzie (`KmVjKOEHm7NQ7bD3O9G5`) |
| **Chat Widget** | `69a06ec73d47353b95cbc9e4` (London Dev Finance) |

---

## 7. Pipeline Stages (Reference)

The Construction Capital Pipeline stages, in order:

1. **Enquiry** ← new leads land here
2. Call Booked
3. Call Completed
4. Indicative Terms Issued
5. Indicative Terms Accepted
6. Documentation Collated
7. Proposed to Lender
8. Accepted by Lender
9. Valuation Paid
10. Valuation Completed
11. Formal Offer Issued
12. Formal Offer Signed
13. Legals Commenced
14. Completed

---

## 8. Quick API Reference

Base URL: `https://services.leadconnectorhq.com`

All requests need these headers:
```
Authorization: Bearer pit-d32839e6-5f3e-41a3-b70f-9abfa11e12c9
Version: 2021-07-28
Content-Type: application/json
```

| Action | Method | Endpoint |
|---|---|---|
| Create contact | `POST` | `/contacts/` |
| Update contact | `PUT` | `/contacts/{contactId}` |
| Create opportunity | `POST` | `/opportunities/` |
| Add note to contact | `POST` | `/contacts/{contactId}/notes` |
| List pipelines | `GET` | `/opportunities/pipelines?locationId=PGDuQBCMN1YuS6cV6fS9` |
| List users | `GET` | `/users/?locationId=PGDuQBCMN1YuS6cV6fS9` |
| Search contacts | `GET` | `/contacts/?locationId=PGDuQBCMN1YuS6cV6fS9&query=email` |
