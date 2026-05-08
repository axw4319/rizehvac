import { CheckSquare, Search, ShieldCheck, Star, Wrench } from "lucide-react";

const CRITERIA = [
  { icon: ShieldCheck, label: "NATE certification", weight: "20%" },
  { icon: Star, label: "Customer reviews + sentiment", weight: "20%" },
  { icon: Wrench, label: "Warranty + workmanship terms", weight: "15%" },
  { icon: CheckSquare, label: "BBB rating + complaints", weight: "15%" },
  { icon: Search, label: "Pricing transparency", weight: "15%" },
];

export function MethodologyBlock() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--brand-accent)" }}>
          Our methodology
        </div>
        <h2 className="heading text-3xl md:text-4xl">How we picked the top 10</h2>
        <p className="mt-4 text-lg" style={{ color: "var(--brand-muted-fg)" }}>
          We started with 62 Tucson HVAC contractors holding active Arizona ROC licenses, then
          narrowed by eight weighted criteria. We accepted no payments for placement and
          re-verify the ranking quarterly.
        </p>
        <div className="mt-6 grid sm:grid-cols-2 gap-3">
          {CRITERIA.map(({ icon: Icon, label, weight }) => (
            <div
              key={label}
              className="brand-card px-4 py-3 flex items-center gap-3"
            >
              <Icon size={20} style={{ color: "var(--brand-accent)" }} />
              <div className="flex-1 text-sm font-medium">{label}</div>
              <div className="text-xs" style={{ color: "var(--brand-muted-fg)" }}>{weight}</div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm" style={{ color: "var(--brand-muted-fg)" }}>
          Want the full scoring rubric? <a href="#" style={{ color: "var(--brand-accent)" }} className="underline">Read our methodology →</a>
        </p>
      </div>
    </section>
  );
}
