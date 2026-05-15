import { NextRequest, NextResponse } from 'next/server';

const GHL_API_KEY = process.env.GHL_API_KEY || '';
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID || '';
const GHL_PIPELINE_ID = process.env.GHL_PIPELINE_ID || '';
const GHL_ENQUIRY_STAGE_ID = process.env.GHL_ENQUIRY_STAGE_ID || '';
const GHL_ASSIGNED_USER_ID = process.env.GHL_ASSIGNED_USER_ID || '';
const SITE_TAG = process.env.SITE_TAG || 'WebsiteLead';
const SITE_SOURCE = process.env.SITE_SOURCE || 'Website';
const RESEND_TO = process.env.RESEND_TO || '';

const GHL_BASE = 'https://services.leadconnectorhq.com';
const GHL_HEADERS = {
  Authorization: `Bearer ${GHL_API_KEY}`,
  'Content-Type': 'application/json',
  Version: '2021-07-28',
};

interface LeadPayload {
  source: string;
  fullName: string;
  email: string;
  phone: string;
  loanAmount?: string;
  propertyValue?: string;
  area?: string;
  serviceType?: string;
  message?: string;
  exitStrategy?: string;
  postcode?: string;
}

async function sendEmailNotification(siteName: string, data: Record<string, unknown>) {
  const RESEND_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_KEY || !RESEND_TO) return;
  const details = Object.entries(data)
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="padding:6px 12px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb">${k}</td><td style="padding:6px 12px;color:#111827;border-bottom:1px solid #e5e7eb">${v}</td></tr>`)
    .join('');
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'Leads <onboarding@resend.dev>',
        to: RESEND_TO,
        subject: `New Enquiry from ${siteName}: ${data['Name'] || 'Unknown'}`,
        html: `<div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto"><div style="background:#1e3a5f;color:white;padding:20px 24px;border-radius:8px 8px 0 0"><h2 style="margin:0;font-size:18px">New Lead from ${siteName}</h2></div><table style="width:100%;border-collapse:collapse;background:#ffffff;border:1px solid #e5e7eb">${details}</table><p style="padding:12px 24px;color:#6b7280;font-size:13px">Sent automatically</p></div>`,
      }),
    });
    if (!res.ok) console.error('Resend error:', await res.text());
  } catch (e) {
    console.error('Email notification failed:', e);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: LeadPayload = await request.json();
    const { fullName, email, phone, source } = body;

    if (!fullName || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields: fullName, email, phone' }, { status: 400 });
    }

    // Send email first, even if GHL fails, we get the lead
    await sendEmailNotification(SITE_SOURCE, {
      Name: fullName,
      Email: email,
      Phone: phone,
      'Loan Amount': body.loanAmount || '',
      'Property Value': body.propertyValue || '',
      Area: body.area || '',
      'Service Type': body.serviceType || '',
      'Exit Strategy': body.exitStrategy || '',
      Postcode: body.postcode || '',
      Message: body.message || '',
      Source: source,
    });

    // Try GHL, failures don't block the response
    let contactId: string | null = null;

    try {
      const [firstName, ...lastParts] = fullName.split(' ');
      const lastName = lastParts.join(' ') || '';

      const contactRes = await fetch(`${GHL_BASE}/contacts/upsert`, {
        method: 'POST',
        headers: GHL_HEADERS,
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          locationId: GHL_LOCATION_ID,
          tags: [SITE_TAG, 'Website Lead', source, body.area, body.serviceType].filter(Boolean),
          source: SITE_SOURCE,
        }),
      });

      const contactData = await contactRes.json();
      contactId = contactData.contact?.id || contactData.id || null;

      if (contactId) {
        const oppName = `${fullName} - ${body.serviceType || 'Enquiry'} - ${body.loanAmount || 'TBC'}`;
        await fetch(`${GHL_BASE}/opportunities/`, {
          method: 'POST',
          headers: GHL_HEADERS,
          body: JSON.stringify({
            pipelineId: GHL_PIPELINE_ID,
            locationId: GHL_LOCATION_ID,
            pipelineStageId: GHL_ENQUIRY_STAGE_ID,
            contactId,
            name: oppName,
            assignedTo: GHL_ASSIGNED_USER_ID,
            status: 'open',
            monetaryValue: body.loanAmount ? parseInt(body.loanAmount.replace(/[^0-9]/g, '')) : 0,
          }),
        });

        const noteLines = [
          `Source: ${source}`,
          body.loanAmount ? `Loan Amount: ${body.loanAmount}` : '',
          body.propertyValue ? `Property Value: ${body.propertyValue}` : '',
          body.area ? `Area: ${body.area}` : '',
          body.serviceType ? `Service: ${body.serviceType}` : '',
          body.exitStrategy ? `Exit Strategy: ${body.exitStrategy}` : '',
          body.postcode ? `Postcode: ${body.postcode}` : '',
          body.message ? `Message: ${body.message}` : '',
        ].filter(Boolean).join('\n');

        await fetch(`${GHL_BASE}/contacts/${contactId}/notes/`, {
          method: 'POST',
          headers: GHL_HEADERS,
          body: JSON.stringify({ body: noteLines, locationId: GHL_LOCATION_ID }),
        });
      } else {
        console.error('GHL: Could not extract contact ID:', JSON.stringify(contactData));
      }
    } catch (ghlError) {
      console.error('GHL integration error (email was still sent):', ghlError);
    }

    return NextResponse.json({ success: true, contactId });
  } catch (error: unknown) {
    console.error('Lead submission error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
