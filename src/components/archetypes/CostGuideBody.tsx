import { type Brand } from "@/lib/brands";
import { Calendar, FileCheck, Sparkles } from "lucide-react";
import { TUCSON_COST_DATA, TUCSON_COST_FAQS, TUCSON_REBATE_DATA } from "@/data/tucson-cost";
import { FaqBlock } from "@/components/shared/FaqBlock";

export function CostGuideBody({ brand: _brand }: { brand: Brand }) {
  return (
    <main>
      <section className="py-10 md:py-14 border-b" style={{ borderColor: "var(--brand-border)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm mb-6" style={{ color: "var(--brand-muted-fg)" }}>
            <span className="inline-flex items-center gap-1.5"><Calendar size={14} /> Updated May 8, 2026</span>
            <span className="inline-flex items-center gap-1.5"><Sparkles size={14} style={{ color: "var(--brand-accent)" }} /> Based on 480 Tucson installs</span>
            <span className="inline-flex items-center gap-1.5"><FileCheck size={14} /> Verified by NATE-certified tech</span>
          </div>
          <h2 className="heading text-3xl md:text-5xl mb-4 max-w-3xl">HVAC cost in Tucson: 2026 prices, rebates, and what's worth paying for</h2>
          <p className="text-lg leading-relaxed max-w-3xl" style={{ color: "var(--brand-muted-fg)" }}>
            Tucson HVAC pricing differs from the rest of the country in two ways: equipment costs run 8–12% higher because units are sized larger for desert loads, and labor runs 5–10% lower because the local market is competitive. Here's what 480 actual Tucson jobs cost in 2026.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h3 className="heading text-2xl md:text-3xl mb-5">Tucson HVAC pricing at a glance</h3>
          <div className="brand-card overflow-hidden">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr style={{ background: "var(--brand-muted)" }}>
                  <th className="text-left px-4 py-3 font-semibold">Service</th>
                  <th className="text-right px-4 py-3 font-semibold whitespace-nowrap">Low end</th>
                  <th className="text-right px-4 py-3 font-semibold whitespace-nowrap">Average</th>
                  <th className="text-right px-4 py-3 font-semibold whitespace-nowrap">High end</th>
                </tr>
              </thead>
              <tbody>
                {TUCSON_COST_DATA.map((row, i) => (
                  <tr key={row.service} style={{ borderTop: i === 0 ? "none" : `1px solid var(--brand-border)` }}>
                    <td className="px-4 py-3 align-top">
                      <div className="font-medium">{row.service}</div>
                      <div className="text-xs mt-1" style={{ color: "var(--brand-muted-fg)" }}>{row.notes}</div>
                    </td>
                    <td className="px-4 py-3 text-right whitespace-nowrap align-top tabular-nums">${row.lowEnd.toLocaleString()}</td>
                    <td className="px-4 py-3 text-right whitespace-nowrap align-top tabular-nums font-semibold">${row.average.toLocaleString()}</td>
                    <td className="px-4 py-3 text-right whitespace-nowrap align-top tabular-nums">${row.highEnd.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs" style={{ color: "var(--brand-muted-fg)" }}>
            Source: rizehvac aggregated quote data from 480 Tucson installations completed Jan–Apr 2026. We sample contractors quarterly.
          </p>
        </div>
      </section>

      <section className="border-t" style={{ borderColor: "var(--brand-border)", background: "var(--brand-muted)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-16">
          <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--brand-accent)" }}>
            Stack the savings
          </div>
          <h2 className="heading text-3xl md:text-4xl mb-3">Rebates & tax credits available in Tucson</h2>
          <p className="text-lg max-w-3xl" style={{ color: "var(--brand-muted-fg)" }}>
            These programs stack — you can claim the federal credit AND the utility rebate on the same install. Together they can offset $1,500 to $3,200 of a typical replacement.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {TUCSON_REBATE_DATA.map((r) => (
              <div key={r.program} className="brand-card p-5">
                <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--brand-accent)" }}>
                  Up to {r.amount.replace("Up to ", "")}
                </div>
                <h3 className="heading text-lg mt-1">{r.program}</h3>
                <p className="text-sm mt-2" style={{ color: "var(--brand-muted-fg)" }}>{r.eligibility}</p>
                <div className="mt-3 pt-3 border-t flex justify-between items-center text-xs" style={{ borderColor: "var(--brand-border)", color: "var(--brand-muted-fg)" }}>
                  <span>Expires {r.expires}</span>
                  <a href="#" style={{ color: "var(--brand-accent)" }}>{r.source} →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <FaqBlock title="Tucson HVAC cost FAQ" faqs={TUCSON_COST_FAQS} />
      </section>
    </main>
  );
}
