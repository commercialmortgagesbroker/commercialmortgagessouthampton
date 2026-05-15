"use client";

import { useState, useEffect } from "react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
      const timer = setTimeout(() => setShow(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = (choice: string) => {
    setShow(false);
    setTimeout(() => {
      localStorage.setItem("cookie-consent", choice);
      setVisible(false);
    }, 300);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="border-t border-[color:var(--color-rule)] bg-[color:var(--color-paper)] shadow-2xl">
        <div className="container-editorial flex flex-col items-start gap-4 py-4 sm:flex-row sm:items-center sm:justify-between md:py-5">
          <p className="text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
            We use cookies to improve your experience and analyse site traffic.
            By clicking &quot;Accept&quot;, you consent to our use of cookies.
            See our{" "}
            <a
              href="/privacy"
              className="font-medium underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4 hover:text-[color:var(--color-accent)]"
            >
              Privacy Policy
            </a>{" "}
            for details.
          </p>
          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={() => dismiss("declined")}
              className="btn btn-ghost cursor-pointer text-sm"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={() => dismiss("accepted")}
              className="btn btn-accent cursor-pointer text-sm"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
