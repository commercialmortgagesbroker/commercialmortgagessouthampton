"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { NAV_LINKS, SERVICE_LINKS } from "@/lib/constants";
import { siteConfig } from "@/data/site-config";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[color:var(--color-rule)] bg-[color:var(--color-paper)]/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-editorial flex items-center justify-between py-4">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <span
            aria-hidden
            className="inline-block h-7 w-7 rounded-sm"
            style={{
              background:
                "linear-gradient(135deg, var(--color-accent) 0%, var(--color-ink) 100%)",
            }}
          />
          <span className="font-editorial text-base leading-tight text-[color:var(--color-ink)] md:text-lg">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) =>
            link.href === "/services" ? (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-[color:var(--color-ink-soft)] transition-colors duration-200 hover:text-[color:var(--color-accent)]"
                >
                  {link.label}
                  <svg
                    className="h-3 w-3 transition-transform group-hover:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>
                <div className="invisible absolute left-0 top-full z-50 w-60 rounded-md border border-[color:var(--color-rule)] bg-[color:var(--color-white)] p-1 shadow-[0_20px_40px_-20px_rgba(14,14,18,0.22)] opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  {SERVICE_LINKS.map((sLink: { href: string; label: string }) => (
                    <Link
                      key={sLink.href}
                      href={sLink.href}
                      className="block rounded-sm px-3 py-2 text-sm text-[color:var(--color-ink-soft)] transition-colors hover:bg-[color:var(--color-paper)] hover:text-[color:var(--color-accent)]"
                    >
                      {sLink.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-[color:var(--color-ink-soft)] transition-colors duration-200 hover:text-[color:var(--color-accent)]"
              >
                {link.label}
              </Link>
            ),
          )}
          <a
            href={phoneHref}
            className="ml-2 hidden whitespace-nowrap fig text-sm text-[color:var(--color-ink-soft)] transition-colors hover:text-[color:var(--color-ink)] xl:inline"
          >
            {siteConfig.phone}
          </a>
          <Link href="/contact" className="btn btn-accent ml-3 shrink-0 !py-2 !px-4 text-sm">
            Get a free quote
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="relative flex h-10 w-10 items-center justify-center rounded-md text-[color:var(--color-ink)] transition-colors hover:bg-[color:var(--color-paper-deep)] lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <div className="flex flex-col items-center justify-center gap-1.5">
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                mobileOpen ? "scale-x-0 opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="border-t border-[color:var(--color-rule)] bg-[color:var(--color-paper)] px-4 py-4"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link: { href: string; label: string }) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-md px-3 py-3 text-base font-medium text-[color:var(--color-ink-soft)] transition-colors hover:bg-[color:var(--color-paper-deep)] hover:text-[color:var(--color-accent)]"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={phoneHref}
            className="block rounded-md px-3 py-3 fig text-base text-[color:var(--color-ink-soft)]"
          >
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className="btn btn-accent mt-3 block w-full text-center"
            onClick={() => setMobileOpen(false)}
          >
            Get a free quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
