import { v2Vars } from "@/lib/v2theme";
import { V2Header } from "./V2Header";
import { HeroEditorial } from "./HeroEditorial";
import { MultiCreditByline } from "./MultiCreditByline";
import { CompensationDisclosure } from "./CompensationDisclosure";
import { QuickAnswerBlock } from "./QuickAnswerBlock";
import { FaqBlock } from "@/components/shared/FaqBlock";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { BRANDS } from "@/lib/brands";
import { Calendar, FileCheck, Sparkles } from "lucide-react";
import type { CityData } from "@/data/types";

export function CostGuidePage({ city }: { city: CityData }) {
  return (
    <div style={{ ...v2Vars, background: "var(--brand-bg)", minHeight: "100vh", color: "var(--brand-fg)" }}>
      <V2Header phone={city.phone} cityLabel={city.meta.city} />
      <HeroEditorial
        city={city}
        headline={`How much does HVAC cost in ${city.meta.city}? 2026 prices and rebates`}
        subhead={`Real ${city.meta.city} HVAC pricing benchmarks, 4 stackable rebate programs, and what's worth paying for. Updated quarterly with data from local installs.`}
      />
      <MultiCreditByline credits={city.credits} />
      <CompensationDisclosure />
      <QuickAnswerBlock city={city} variant="cost" />

      <section className="py-12 md:py-14" style={{ background: "var(--brand-surface)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm mb-6" style={{ color: "var(--brand-fg-soft)" }}>
            <span className="inline-flex items-center gap-1.5"><Calendar size={14} /> Updated {city.meta.lastResearched}</span>
            <span className="inline-flex items-center gap-1.5"><Sparkles size={14} style={{ color: "var(--brand-accent)" }} /> Based on local install data</span>
            <span className="inline-flex items-center gap-1.5"><FileCheck size={14} /> Verified by {city.credits.factChecker.name}</span>
          </div>
          <h2 className="heading text-3xl md:text-4xl mb-4">{city.meta.city} HVAC pricing at a glance</h2>
          <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--brand-border)" }}>
            <table className="w-full text-sm md:text-base">
              <thead style={{ background: "var(--brand-muted)" }}>
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Service</th>
                  <th className="text-right px-4 py-3 font-semibold whitespace-nowrap">Low end</th>
                  <th className="text-right px-4 py-3 font-semibold whitespace-nowrap">Average</th>
                  <th className="text-right px-4 py-3 font-semibold whitespace-nowrap">High end</th>
                </tr>
              </thead>
              <tbody>
                {city.costData.map((row, i) => (
                  <tr key={row.service} style={{ borderTop: i === 0 ? "none" : `1px solid var(--brand-border)` }}>
                    <td className="px-4 py-3 align-top">
                      <div className="font-medium">{row.service}</div>
                      <div className="text-xs mt-1" style={{ color: "var(--brand-fg-soft)" }}>{row.notes}</div>
                    </td>
                    <td className="px-4 py-3 text-right whitespace-nowrap align-top tabular-nums">${row.lowEnd.toLocaleString()}</td>
                    <td className="px-4 py-3 text-right whitespace-nowrap align-top tabular-nums font-semibold">${row.average.toLocaleString()}</td>
                    <td className="px-4 py-3 text-right whitespace-nowrap align-top tabular-nums">${row.highEnd.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs" style={{ color: "var(--brand-fg-soft)" }}>
            Source: rizehvac aggregated quote data from {city.meta.city} installations completed Jan–Apr 2026.
          </p>
        </div>
      </section>

      <section className="border-t" style={{ borderColor: "var(--brand-border)", background: "var(--brand-muted)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-16">
          <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--brand-accent)" }}>
            Stack the savings
          </div>
          <h2 className="heading text-3xl md:text-4xl mb-3">Rebates & tax credits in {city.meta.city}</h2>
          <p className="text-lg max-w-3xl" style={{ color: "var(--brand-fg-soft)" }}>
            These programs stack — claim the federal credit AND the utility rebate on the same install. Together they can offset $1,500 to $3,200 of a typical replacement.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {city.rebates.map((r) => (
              <div key={r.program} className="rounded-xl p-5" style={{ background: "var(--brand-surface)", border: "1px solid var(--brand-border)" }}>
                <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--brand-accent)" }}>
                  Up to {r.amount.replace("Up to ", "")}
                </div>
                <h3 className="heading text-lg mt-1">{r.program}</h3>
                <p className="text-sm mt-2" style={{ color: "var(--brand-fg-soft)" }}>{r.eligibility}</p>
                <div className="mt-3 pt-3 border-t flex justify-between items-center text-xs" style={{ borderColor: "var(--brand-border)", color: "var(--brand-fg-soft)" }}>
                  <span>Expires {r.expires}</span>
                  <a href="#" style={{ color: "var(--brand-accent)" }}>{r.source} →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <FaqBlock title={`${city.meta.city} HVAC cost FAQ`} faqs={city.costFaqs} />
      </section>
      <SiteFooter brand={BRANDS.editorial} />
    </div>
  );
}
