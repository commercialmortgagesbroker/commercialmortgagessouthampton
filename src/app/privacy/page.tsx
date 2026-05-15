import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_NAME, EMAIL } from "@/lib/constants";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}. How we collect, use, and protect your personal data under GDPR.`,
  alternates: {
    canonical: `https://${siteConfig.domain}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy" }]} />

      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-heading text-3xl font-bold text-primary md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-gray-500">Last updated: February 2026</p>

          <div className="mt-8 space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h2 className="font-heading text-xl font-bold text-primary">1. Introduction</h2>
              <p className="mt-3">
                {SITE_NAME} (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website {siteConfig.domain} and use our services. {SITE_NAME} is a trading name of Lenzie Consulting Ltd (Company No. 08174104), registered in England &amp; Wales.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-primary">2. Information We Collect</h2>
              <p className="mt-3">We may collect the following types of personal information:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li><strong>Contact Information:</strong> Name, email address, telephone number, postal address</li>
                <li><strong>Project Information:</strong> Development details, loan requirements, property locations, scheme types</li>
                <li><strong>Financial Information:</strong> Loan amounts sought, property values, development costs</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, pages visited, time spent on site</li>
                <li><strong>Cookie Data:</strong> Information collected through cookies and similar tracking technologies</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-primary">3. How We Use Your Information</h2>
              <p className="mt-3">We use your personal information to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Respond to your enquiries and provide commercial mortgage broking services</li>
                <li>Match your requirements with appropriate lenders from our panel</li>
                <li>Process your application and facilitate the lending process</li>
                <li>Send you relevant market updates and service information (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal and regulatory obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-primary">4. Legal Basis for Processing</h2>
              <p className="mt-3">
                Under the UK General Data Protection Regulation (UK GDPR), we process your personal data on the following bases: consent (where you have provided it), contractual necessity (to provide our services), legitimate interests (to improve our services and market our business), and legal obligation (to comply with regulatory requirements).
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-primary">5. Data Sharing</h2>
              <p className="mt-3">
                We may share your information with: lenders and financial institutions on our panel (with your explicit consent), professional advisors (solicitors, valuers) involved in your application, our CRM and technology providers who process data on our behalf, and regulatory bodies where required by law. We will never sell your personal data to third parties.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-primary">6. Cookies</h2>
              <p className="mt-3">
                Our website uses cookies to improve your experience. Essential cookies are necessary for the website to function. Analytics cookies (Google Analytics 4) help us understand how visitors use our site. You can manage your cookie preferences through the cookie consent banner displayed when you first visit our site.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-primary">7. Data Retention</h2>
              <p className="mt-3">
                We retain your personal data for as long as necessary to fulfil the purposes for which it was collected, typically for 6 years after our last interaction in line with financial services regulatory requirements. You may request deletion of your data at any time.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-primary">8. Your Rights</h2>
              <p className="mt-3">Under the UK GDPR, you have the right to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Access your personal data</li>
                <li>Rectify inaccurate personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Restrict processing of your personal data</li>
                <li>Data portability</li>
                <li>Object to processing of your personal data</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-primary">9. Contact Us</h2>
              <p className="mt-3">
                If you have questions about this Privacy Policy or wish to exercise your data protection rights, please contact us at{" "}
                <a href={`mailto:${EMAIL}`} className="text-secondary hover:underline">{EMAIL}</a>.
              </p>
              <p className="mt-3">
                You also have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) if you believe your data protection rights have been violated.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
