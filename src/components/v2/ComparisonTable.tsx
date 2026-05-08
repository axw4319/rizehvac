import { ArrowUpDown, Check, X } from "lucide-react";
import { TUCSON_CONTRACTORS } from "@/data/tucson-contractors";
import { StarRating } from "@/components/shared/StarRating";

export function ComparisonTable() {
  return (
    <section className="border-b" style={{ background: "var(--brand-surface)", borderColor: "var(--brand-border)" }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-7">
        <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
          <h2 className="heading text-2xl md:text-3xl">Top 10 Tucson HVAC contractors at a glance</h2>
          <div className="flex items-center gap-2 text-xs" style={{ color: "var(--brand-fg-soft)" }}>
            <ArrowUpDown size={14} />
            <span>Sortable · Tap a column header</span>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border" style={{ borderColor: "var(--brand-border)" }}>
          <table className="w-full text-sm" style={{ minWidth: 920 }}>
            <thead style={{ background: "var(--brand-muted)" }}>
              <tr>
                {["Rank", "Contractor", "Overall", "NATE", "24/7", "Warranty", "Avg quote", ""].map((h, i) => (
                  <th
                    key={h + i}
                    className={`text-${i >= 3 && i <= 6 ? "center" : i === 7 ? "right" : "left"} px-3 py-3 font-semibold text-xs uppercase tracking-wider`}
                    style={{ color: "var(--brand-mutedFg, #5A5447)", whiteSpace: "nowrap" }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TUCSON_CONTRACTORS.map((c, i) => (
                <tr
                  key={c.rank}
                  className="hover:bg-[var(--brand-muted)] transition-colors"
                  style={{ borderTop: i === 0 ? "none" : "1px solid var(--brand-border)" }}
                >
                  <td className="px-3 py-3">
                    <div
                      className="grid place-items-center heading text-sm font-semibold"
                      style={{
                        width: 32,
                        height: 32,
                        background: c.rank === 1 ? "var(--brand-accent)" : "var(--brand-muted)",
                        color: c.rank === 1 ? "var(--brand-accent-fg)" : "var(--brand-fg)",
                        borderRadius: "0.5rem",
                      }}
                    >
                      {c.rank}
                    </div>
                  </td>
                  <td className="px-3 py-3">
                    <div className="font-semibold" style={{ color: "var(--brand-fg)" }}>{c.name}</div>
                    <div className="text-xs mt-0.5" style={{ color: "var(--brand-fg-soft)" }}>
                      {c.bestFor}
                    </div>
                  </td>
                  <td className="px-3 py-3">
                    <div className="inline-flex items-center gap-1.5 whitespace-nowrap">
                      <StarRating rating={c.rating} size={12} />
                      <span className="font-semibold tabular-nums">{c.rating.toFixed(1)}</span>
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: "var(--brand-fg-soft)" }}>{c.reviewCount.toLocaleString()} reviews</div>
                  </td>
                  <td className="px-3 py-3 text-center">
                    <Check size={18} className="mx-auto" style={{ color: "var(--brand-success)" }} />
                  </td>
                  <td className="px-3 py-3 text-center">
                    {c.emergencyAvailable ? (
                      <Check size={18} className="mx-auto" style={{ color: "var(--brand-success)" }} />
                    ) : (
                      <X size={18} className="mx-auto" style={{ color: "var(--brand-fg-soft)", opacity: 0.6 }} />
                    )}
                  </td>
                  <td className="px-3 py-3 text-center font-semibold tabular-nums">
                    {c.warrantyYears} yr
                  </td>
                  <td className="px-3 py-3 text-center font-semibold" style={{ color: "var(--brand-fg)" }}>
                    {c.priceRange}
                  </td>
                  <td className="px-3 py-3 text-right">
                    <a
                      href="#"
                      className="inline-flex items-center text-xs font-semibold rounded-md px-3 py-1.5 whitespace-nowrap"
                      style={{ background: "var(--brand-cta)", color: "var(--brand-cta-fg)" }}
                    >
                      Get quote
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3 text-xs" style={{ color: "var(--brand-fg-soft)" }}>
          Data as of May 8, 2026. We re-verify every contractor quarterly via AZ ROC license check, BBB filings, and direct review audit.
        </div>
      </div>
    </section>
  );
}
