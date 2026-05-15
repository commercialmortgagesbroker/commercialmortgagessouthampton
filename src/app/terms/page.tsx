import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_NAME, EMAIL, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${SITE_NAME}. Legal terms, disclaimers, and conditions for using our commercial mortgage broking services.`,
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Terms of Service", href: "/terms" }]} />

      <section className="section">
        <div className="container-editorial">
          <div className="mx-auto max-w-4xl">
            <h1 className="font-editorial text-3xl text-[color:var(--color-ink)] md:text-4xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-sm text-[color:var(--color-muted)]">
              Last updated: May 2026
            </p>

            <div className="mt-8 space-y-8 leading-relaxed text-[color:var(--color-ink-soft)]">
              <div>
                <h2 className="font-editorial text-xl text-[color:var(--color-ink)]">
                  1. About Us
                </h2>
                <p className="mt-3">
                  {SITE_NAME} is a specialist commercial mortgage brokerage
                  operating across {""}Southampton, Hampshire and the wider
                  United Kingdom. These Terms of Service govern your use of the
                  website and any services provided by us. We are part of the
                  Commercial Mortgages network of regional broker sites.
                </p>
              </div>

              <div>
                <h2 className="font-editorial text-xl text-[color:var(--color-ink)]">
                  2. Services
                </h2>
                <p className="mt-3">
                  We act as an intermediary between commercial property buyers,
                  investors and trading-business operators on one side, and
                  specialist commercial mortgage lenders on the other. We do
                  not lend money directly. Our role is to assess your
                  commercial mortgage requirements, identify suitable lenders
                  from our 90+ lender panel, and facilitate the application
                  process through to drawdown. All lending decisions are made
                  by the lenders themselves.
                </p>
              </div>

              <div>
                <h2 className="font-editorial text-xl text-[color:var(--color-ink)]">
                  3. No Financial Advice
                </h2>
                <p className="mt-3">
                  The information provided on this website and through our
                  services does not constitute financial advice. All content,
                  including calculator outputs, indicative rates and market
                  commentary, is for informational purposes only. We recommend
                  you seek independent financial advice before entering into
                  any financial commitment. Commercial mortgages are
                  unregulated lending and fall outside the Financial Conduct
                  Authority&apos;s regulated mortgage perimeter. {SITE_NAME}
                  is not authorised by the FCA because the products we arrange
                  are unregulated. We do not arrange residential mortgages,
                  regulated bridging, regulated semi-commercial or any other
                  product requiring FCA permission; such enquiries are
                  referred to a regulated firm.
                </p>
              </div>

              <div>
                <h2 className="font-editorial text-xl text-[color:var(--color-ink)]">
                  4. Calculator Disclaimer
                </h2>
                <p className="mt-3">
                  The commercial mortgage calculator on this website provides
                  indicative estimates only. Actual terms, rates and loan
                  amounts depend on individual circumstances, asset class, your
                  trading history (for owner-occupier) or rental cover (for
                  investment), lender criteria, and market conditions at the
                  time of application. Calculator results must not be relied
                  upon as a guarantee of funding availability or terms.
                </p>
              </div>

              <div>
                <h2 className="font-editorial text-xl text-[color:var(--color-ink)]">
                  5. Fees
                </h2>
                <p className="mt-3">
                  Our brokerage fees are clearly disclosed and agreed in
                  writing before we submit any application on your behalf.
                  Typical arrangement fees range from 0.5-1.5% of the loan
                  amount. Additional third-party fees (lender arrangement,
                  valuation, legal) may apply and will be outlined in any
                  terms sheet or offer document provided by the lender.
                </p>
              </div>

              <div>
                <h2 className="font-editorial text-xl text-[color:var(--color-ink)]">
                  6. Intellectual Property
                </h2>
                <p className="mt-3">
                  All content on this website, including text, graphics,
                  logos and design elements, is the property of {SITE_NAME}{" "}
                  and is protected by copyright law. You may not reproduce,
                  distribute or use any content from this website without our
                  prior written consent. Lender names and logos are used with
                  permission and remain the property of the respective lenders.
                </p>
              </div>

              <div>
                <h2 className="font-editorial text-xl text-[color:var(--color-ink)]">
                  7. Limitation of Liability
                </h2>
                <p className="mt-3">
                  While we take reasonable care to ensure the accuracy of
                  information on this website, we accept no liability for any
                  loss or damage arising from your use of this website or
                  reliance on information provided. Commercial property
                  investment carries inherent risks; past performance of any
                  asset, sector or market does not guarantee future results.
                </p>
              </div>

              <div>
                <h2 className="font-editorial text-xl text-[color:var(--color-ink)]">
                  8. Third-Party Links
                </h2>
                <p className="mt-3">
                  This website contains links to third-party websites,
                  including lender websites, regulatory bodies and partner
                  organisations. We are not responsible for the content or
                  privacy practices of these external sites.
                </p>
              </div>

              <div>
                <h2 className="font-editorial text-xl text-[color:var(--color-ink)]">
                  9. Professional Indemnity
                </h2>
                <p className="mt-3">
                  {SITE_NAME} maintains professional indemnity insurance to
                  protect our clients in the unlikely event of professional
                  negligence. Details of our insurance cover are available upon
                  request.
                </p>
              </div>

              <div>
                <h2 className="font-editorial text-xl text-[color:var(--color-ink)]">
                  10. Governing Law
                </h2>
                <p className="mt-3">
                  These Terms of Service are governed by the laws of England
                  and Wales. Any disputes arising from your use of this
                  website or our services shall be subject to the exclusive
                  jurisdiction of the courts of England and Wales.
                </p>
              </div>

              <div>
                <h2 className="font-editorial text-xl text-[color:var(--color-ink)]">
                  11. Contact
                </h2>
                <p className="mt-3">
                  If you have any questions about these Terms of Service,
                  please contact us at{" "}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="font-medium underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4"
                  >
                    {EMAIL}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
