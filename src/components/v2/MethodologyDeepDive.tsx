import { Award, Check, FileText, Users } from "lucide-react";
import type { CityData } from "@/data/types";

export function MethodologyDeepDive({ city }: { city: CityData }) {
  return (
    <section id="methodology" className="py-14 md:py-20 border-t" style={{ borderColor: "var(--brand-border)" }}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--brand-accent)" }}>
          How we picked these {city.contractors.length}
        </div>
        <h2 className="heading text-3xl md:text-4xl mt-2 max-w-3xl">
          Our methodology, made visible — because everyone else hides theirs
        </h2>
        <p className="mt-4 text-base md:text-lg max-w-3xl" style={{ color: "var(--brand-fg-soft)" }}>
          We started with every active state-licensed HVAC contractor in the {city.meta.city} metro. We narrowed by verifiable BBB filings, NATE certification, and a minimum of 5 years in business. Then we applied 8 weighted criteria — the same rubric we use for every city we cover.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-x-8 gap-y-3">
          {city.methodology.map((c) => (
            <div
              key={c.label}
              className="flex items-center gap-3 py-2.5 border-b"
              style={{ borderColor: "var(--brand-border)" }}
            >
              <div
                className="grid place-items-center rounded-md shrink-0"
                style={{
                  width: 32,
                  height: 32,
                  background: "var(--brand-accent-soft)",
                  color: "var(--brand-accent)",
                }}
              >
                <Check size={18} />
              </div>
              <div className="flex-1 font-medium" style={{ color: "var(--brand-fg)" }}>{c.label}</div>
              <div className="text-sm font-semibold tabular-nums" style={{ color: "var(--brand-fg-soft)" }}>
                {c.weight}%
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          <div className="rounded-xl p-5" style={{ background: "var(--brand-muted)", border: "1px solid var(--brand-border)" }}>
            <Users size={20} style={{ color: "var(--brand-accent)" }} />
            <div className="heading text-xl mt-3">{city.meta.totalContractorsResearched} → {city.contractors.length}</div>
            <p className="text-sm mt-2" style={{ color: "var(--brand-fg-soft)" }}>
              Started with every active {city.meta.state} state-licensed HVAC contractor in {city.meta.city}. Final {city.contractors.length} represent the top tier by combined score.
            </p>
          </div>
          <div className="rounded-xl p-5" style={{ background: "var(--brand-muted)", border: "1px solid var(--brand-border)" }}>
            <FileText size={20} style={{ color: "var(--brand-accent)" }} />
            <div className="heading text-xl mt-3">14 sources cited</div>
            <p className="text-sm mt-2" style={{ color: "var(--brand-fg-soft)" }}>
              State licensing database, BBB regional reports, EPA refrigerant handler registry, NATE certification roster, county permit data, and 9 more.
            </p>
          </div>
          <div className="rounded-xl p-5" style={{ background: "var(--brand-muted)", border: "1px solid var(--brand-border)" }}>
            <Award size={20} style={{ color: "var(--brand-accent)" }} />
            <div className="heading text-xl mt-3">No paid placements</div>
            <p className="text-sm mt-2" style={{ color: "var(--brand-fg-soft)" }}>
              We accept lead-share fees on completed contractor matches, never for ranking position. Read our full <a href="#" className="underline">editorial standards</a>.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-xl p-5" style={{ background: "var(--brand-accent-soft)", border: "1px solid var(--brand-accent)" }}>
          <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--brand-accent)" }}>
            Reviewed by
          </div>
          <div className="mt-1 heading text-lg" style={{ color: "var(--brand-fg)" }}>
            {city.credits.factChecker.name} · {city.credits.factChecker.title}
          </div>
          <p className="text-sm mt-2" style={{ color: "var(--brand-fg-soft)" }}>
            {city.credits.factChecker.bio} {city.credits.factChecker.name.split(" ")[0]} personally verified license status and reviewed every contractor's installation portfolio for our 2026 {city.meta.city} rankings. They have no financial relationship with any contractor on this list.
          </p>
        </div>
      </div>
    </section>
  );
}
