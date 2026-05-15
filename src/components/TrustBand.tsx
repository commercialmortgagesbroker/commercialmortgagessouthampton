import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { InitialAvatar } from "@/components/InitialAvatar";

interface TrustBandProps {
  locationName: string;
  /** Optional path/URL to a team photo. Falls back to initials avatar. */
  teamPhotoSrc?: string;
  /** Direct-voice intro paragraph from the broker. */
  personalMessage?: string;
  /** Signature name shown with the avatar. */
  signatureName?: string;
  /** Signature role shown under the name. */
  signatureRole?: string;
}

/**
 * E-E-A-T trust band, broker credentials, personal voice, experience, lender
 * panel, network. Humanised format with direct-voice message and signature.
 */
export function TrustBand({
  locationName,
  teamPhotoSrc,
  personalMessage,
  signatureName = "Matt",
  signatureRole = "Founder · 20+ years in commercial property finance",
}: TrustBandProps) {
  const credentials = [
    {
      eyebrow: "Experience",
      value: "20+ years",
      detail: "In property and commercial lending, including senior corporate banking.",
    },
    {
      eyebrow: "Arranged",
      value: "£250M+",
      detail: "In commercial mortgages across the UK.",
    },
    {
      eyebrow: "Lender panel",
      value: "90+ lenders",
      detail:
        "Live relationships with high-street banks, challenger banks and specialist commercial lenders, Shawbrook, InterBay, LendInvest, Cynergy, Lloyds, NatWest, Barclays, Santander and more.",
    },
    {
      eyebrow: "Coverage",
      value: `${locationName} & UK`,
      detail:
        "Specialist focus on commercial mortgages for property investors, owner-occupier businesses and trading operators.",
    },
  ];

  const message =
    personalMessage ??
    `Hi \u2014 I'm ${signatureName}. I've spent two decades in property lending and commercial banking. What I do now is simple: I bring deals I believe in to lenders I already know, and I don't waste anyone's time if the numbers don't work. If you want a straight answer on your ${locationName} commercial mortgage, send the deal through \u2014 you'll hear back within 48 hours, and it won't be a form response.`;

  return (
    <section className="section">
      <div className="container-editorial">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <ScrollReveal>
            <div>
              <span className="eyebrow">Who you&rsquo;re speaking to</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                The human behind the panel.
              </h2>

              {/* Personal-voice block with avatar + signature */}
              <div className="mt-8 flex items-start gap-5">
                <InitialAvatar
                  name={signatureName}
                  size={64}
                  src={teamPhotoSrc}
                  className="shrink-0"
                />
                <div>
                  <p className="font-editorial text-lg leading-relaxed text-[color:var(--color-ink)]">
                    {message}
                  </p>
                  <p className="mt-5 text-sm text-[color:var(--color-muted)]">
                    <span className="font-editorial text-base text-[color:var(--color-ink)]">
                      {signatureName}
                    </span>
                    <span className="mx-2 text-[color:var(--color-rule)]">/</span>
                    {signatureRole}
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/about" className="btn btn-primary">
                  Meet the team
                </Link>
                <Link href="/case-studies" className="btn btn-ghost">
                  See our deals
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="space-y-px rounded-md border border-[color:var(--color-rule)] bg-[color:var(--color-rule)] overflow-hidden">
              {credentials.map((c) => (
                <div
                  key={c.eyebrow}
                  className="bg-[color:var(--color-paper)] p-5 transition-colors hover:bg-[color:var(--color-white)]"
                >
                  <p className="text-xs font-medium uppercase tracking-wider text-[color:var(--color-muted)]">
                    {c.eyebrow}
                  </p>
                  <p className="mt-2 font-editorial text-2xl">{c.value}</p>
                  <p className="mt-1 text-sm text-[color:var(--color-muted)]">
                    {c.detail}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
