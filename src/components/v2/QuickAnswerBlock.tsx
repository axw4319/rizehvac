import type { CityData } from "@/data/types";
import { ArrowRight, Award, Phone } from "lucide-react";

type Variant = "city" | "service-city" | "cost";

const QUESTIONS: Record<Variant, (c: CityData) => string> = {
  city: (c) => `Who is the best HVAC contractor in ${c.meta.city}, ${c.meta.stateAbbr}?`,
  "service-city": (c) => `Who is the best AC repair company in ${c.meta.city}, ${c.meta.stateAbbr}?`,
  cost: (c) => `How much does HVAC cost in ${c.meta.city}, ${c.meta.stateAbbr}?`,
};

const ANSWERS: Record<Variant, (c: CityData) => string> = {
  city: (c) => {
    const top = c.contractors[0];
    return `The best HVAC contractor in ${c.meta.city} is ${top.name}, a ${top.yearsInBusiness}-year-old NATE-certified company with a ${top.rating} rating across ${top.reviewCount.toLocaleString()} reviews. They specialize in ${top.servicesOffered.slice(0, 3).join(", ").toLowerCase()} and offer a ${top.warrantyYears}-year warranty. Call ${top.phone}. The next two contractors we'd hire are ${c.contractors[1].name} and ${c.contractors[2].name}.`;
  },
  "service-city": (c) => {
    const top = c.contractors[0];
    return `For AC repair in ${c.meta.city}, ${top.name} is our top pick — ${top.emergencyAvailable ? "they offer 24/7 emergency response, " : ""}charge an average of $380 per repair (Tucson market average), and back work with a ${top.warrantyYears}-year warranty. Call ${top.phone}. ${c.contractors[1].name} and ${c.contractors[2].name} are strong alternatives.`;
  },
  cost: (c) => {
    const repair = c.costData.find((r) => r.service.toLowerCase().includes("repair")) ?? c.costData[0];
    const replace = c.costData.find((r) => r.service.toLowerCase().includes("replacement") && r.average > 5000) ?? c.costData[2];
    return `In ${c.meta.city}, the average HVAC repair costs $${repair.average.toLocaleString()} (range: $${repair.lowEnd.toLocaleString()}–$${repair.highEnd.toLocaleString()}). A standard 3-ton AC replacement averages $${replace.average.toLocaleString()} installed (range: $${replace.lowEnd.toLocaleString()}–$${replace.highEnd.toLocaleString()}). Federal Section 25C tax credits and local utility rebates can offset $1,500–$3,200 of replacement costs.`;
  },
};

export function QuickAnswerBlock({ city, variant = "city" }: { city: CityData; variant?: Variant }) {
  const question = QUESTIONS[variant](city);
  const answer = ANSWERS[variant](city);
  const top3 = city.contractors.slice(0, 3);

  return (
    <section className="border-b" style={{ background: "var(--brand-muted)", borderColor: "var(--brand-border)" }}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-7 md:py-9">
        <div className="grid md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-7">
            <div className="text-[11px] font-semibold uppercase tracking-widest mb-1.5" style={{ color: "var(--brand-cta)" }}>
              Quick answer
            </div>
            <h2 className="display text-2xl md:text-3xl mb-3" style={{ color: "var(--brand-fg)" }}>
              {question}
            </h2>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--brand-fg-soft)" }}>
              {answer}
            </p>
          </div>
          {variant !== "cost" ? (
            <aside className="md:col-span-5">
              <div className="text-[11px] font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--brand-fg-soft)" }}>
                Our top 3 picks
              </div>
              <ol className="space-y-2">
                {top3.map((c) => (
                  <li key={c.rank} className="flex items-center gap-3 rounded-lg p-3" style={{ background: "var(--brand-surface)", border: "1px solid var(--brand-border)" }}>
                    <span
                      className="grid place-items-center display text-base shrink-0"
                      style={{
                        width: 32,
                        height: 32,
                        background: c.rank === 1 ? "var(--brand-cta)" : "var(--brand-accent)",
                        color: "white",
                        borderRadius: "0.5rem",
                      }}
                    >
                      {c.rank}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm truncate" style={{ color: "var(--brand-fg)" }}>{c.name}</div>
                      <div className="text-xs" style={{ color: "var(--brand-fg-soft)" }}>{c.rating.toFixed(1)} · {c.reviewCount.toLocaleString()} reviews</div>
                    </div>
                    <a href={`tel:${c.phone.replace(/[^0-9]/g, "")}`} className="text-xs font-semibold" style={{ color: "var(--brand-accent)" }}>
                      <Phone size={14} className="inline" />
                    </a>
                    <a href={`#rank-${c.rank}`} className="text-xs font-semibold inline-flex items-center gap-0.5" style={{ color: "var(--brand-cta)" }}>
                      Read <ArrowRight size={12} />
                    </a>
                  </li>
                ))}
              </ol>
              <a href="#hero" className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold" style={{ color: "var(--brand-cta)" }}>
                <Award size={14} /> Or get matched with all 3 in 60 seconds
              </a>
            </aside>
          ) : null}
        </div>
      </div>
    </section>
  );
}
