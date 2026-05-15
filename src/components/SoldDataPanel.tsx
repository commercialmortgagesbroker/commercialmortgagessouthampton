import type { SoldDataFile } from "@/data/pages/sold-data-mapping";

interface Props {
  data: SoldDataFile;
  districtName: string;
  sourceLabel?: string;
}

const PROPERTY_TYPE_LABEL: Record<string, string> = {
  D: "Detached",
  S: "Semi-detached",
  T: "Terraced",
  F: "Flat / Apartment",
  O: "Other",
};

function formatPrice(n: number): string {
  if (n >= 1_000_000) return `\u00a3${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `\u00a3${Math.round(n / 1_000)}K`;
  return `\u00a3${n}`;
}

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

export function SoldDataPanel({ data, districtName, sourceLabel }: Props) {
  const stats = data.stats;
  const txns = data.recentTransactions.slice(0, 8);
  const updated = formatDate(data.updatedAt);

  return (
    <section className="section-padding bg-light">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl">
          <span className="accent-line mb-4" />
          <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
            {districtName} sold-price data
          </h2>
          <p className="mt-4 text-base text-gray-600">
            Live HM Land Registry transaction data for the {districtName} local
            authority area. Use this as market evidence when appraising your
            scheme or testing GDV assumptions.
          </p>

          {/* Summary stats */}
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Median price
              </p>
              <p className="mt-2 font-heading text-2xl font-bold text-primary">
                {formatPrice(stats.medianPrice)}
              </p>
              <p
                className={`mt-1 text-xs ${
                  stats.yoyChange >= 0 ? "text-emerald-600" : "text-rose-600"
                }`}
              >
                {stats.yoyChange >= 0 ? "+" : ""}
                {stats.yoyChange}% YoY
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Transactions (12m)
              </p>
              <p className="mt-2 font-heading text-2xl font-bold text-primary">
                {stats.transactionCount12m.toLocaleString()}
              </p>
              <p className="mt-1 text-xs text-gray-500">Completed sales</p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <p className="text-xs uppercase tracking-widest text-gray-500">
                New-build share
              </p>
              <p className="mt-2 font-heading text-2xl font-bold text-primary">
                {stats.transactionCount12m > 0
                  ? ((stats.newBuildCount / stats.transactionCount12m) * 100).toFixed(1)
                  : "0"}
                %
              </p>
              <p className="mt-1 text-xs text-gray-500">
                {stats.newBuildCount.toLocaleString()} new-build sales
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <p className="text-xs uppercase tracking-widest text-gray-500">
                New-build premium
              </p>
              <p className="mt-2 font-heading text-2xl font-bold text-primary">
                {stats.newBuildPremium != null ? `+${stats.newBuildPremium.toFixed(1)}%` : "—"}
              </p>
              <p className="mt-1 text-xs text-gray-500">vs existing stock</p>
            </div>
          </div>

          {/* Median by property type */}
          {stats.medianByType && Object.keys(stats.medianByType).length > 0 && (
            <div className="mt-8">
              <h3 className="font-heading text-lg font-bold text-primary">
                Median price by property type
              </h3>
              <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                {Object.entries(stats.medianByType).map(([type, price]) => (
                  <div
                    key={type}
                    className="rounded-lg border border-gray-200 bg-white p-4"
                  >
                    <p className="text-xs text-gray-500">
                      {PROPERTY_TYPE_LABEL[type] ?? type}
                    </p>
                    <p className="mt-1 font-heading text-lg font-bold text-primary">
                      {formatPrice(price)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recent transactions */}
          {txns.length > 0 && (
            <div className="mt-10">
              <h3 className="font-heading text-lg font-bold text-primary">
                Recent transactions
              </h3>
              <div className="mt-4 overflow-x-auto rounded-lg border border-gray-200 bg-white">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 text-left text-xs uppercase tracking-widest text-gray-500">
                    <tr>
                      <th className="px-4 py-3 font-medium">Date</th>
                      <th className="px-4 py-3 font-medium">Postcode</th>
                      <th className="px-4 py-3 font-medium">Address</th>
                      <th className="px-4 py-3 font-medium">Type</th>
                      <th className="px-4 py-3 text-right font-medium">Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {txns.map((t, i) => (
                      <tr key={`${t.postcode}-${t.date}-${i}`}>
                        <td className="px-4 py-3 text-gray-700">
                          {formatDate(t.date)}
                        </td>
                        <td className="px-4 py-3 font-mono text-xs text-gray-700">
                          {t.postcode}
                        </td>
                        <td className="px-4 py-3 text-gray-700">
                          {t.address.slice(0, 40)}
                          {t.address.length > 40 ? "\u2026" : ""}
                        </td>
                        <td className="px-4 py-3 text-gray-600">
                          {PROPERTY_TYPE_LABEL[t.propertyType] ?? t.propertyType}
                          {t.newBuild ? " (new)" : ""}
                        </td>
                        <td className="px-4 py-3 text-right font-heading font-bold text-primary">
                          {formatPrice(t.price)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <p className="mt-6 text-xs text-gray-500">
            Source: {sourceLabel ?? "HM Land Registry Price Paid Data"}. Updated {updated}.
          </p>
        </div>
      </div>
    </section>
  );
}
