import Link from "next/link";
import {
  SITE_NAME,
  PHONE_NUMBER,
  EMAIL,
  FOOTER_LINKS,
  NETWORK_LINKS,
  SERVICE_LINKS,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-primary text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-heading text-xl font-bold text-white">
              {SITE_NAME}
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              Specialist commercial mortgage broker serving property investors,
              owner-occupier businesses and trading operators across Southampton
              and Hampshire. We arrange owner-occupier, investment,
              semi-commercial, portfolio and trading-business commercial
              mortgages from a 90+ lender panel.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <p>
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {PHONE_NUMBER}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="transition-colors hover:text-white"
                >
                  {EMAIL}
                </a>
              </p>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-white">
              Resources
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-white">
              Legal
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Network links */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-white">
            Commercial Mortgages Network
          </h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {NETWORK_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors hover:text-white"
                rel="dofollow"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="mt-2">
            {SITE_NAME} is a trading name of Lenzie Consulting Ltd. {SITE_NAME}{" "}
            is part of the Commercial Mortgages network. We are a
            commercial mortgage broker. Commercial mortgages are unregulated
            lending and fall outside the Financial Conduct Authority&apos;s
            regulated mortgage perimeter. We do not hold FCA authorisation
            because the products we arrange are unregulated. We do not arrange
            residential mortgages, regulated bridging, regulated semi-commercial
            mortgages or any other product that requires FCA permission. Where
            a deal would require FCA authorisation we refer the enquiry to a
            regulated firm.
          </p>
        </div>
      </div>
    </footer>
  );
}
