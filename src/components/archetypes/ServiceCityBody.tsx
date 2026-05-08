import { type Brand } from "@/lib/brands";
import { AlertCircle, Clock, DollarSign, ShieldCheck } from "lucide-react";
import { TUCSON_CONTRACTORS } from "@/data/tucson-contractors";
import { TUCSON_COST_FAQS } from "@/data/tucson-cost";
import { ContractorCard } from "@/components/shared/ContractorCard";
import { FaqBlock } from "@/components/shared/FaqBlock";

const STEPS = [
  {
    title: "Capacitor or contactor failure",
    description:
      "The most common Tucson AC repair. Symptoms: AC clicks but won't start, fan runs but no cold air. Repair: $150-$350. Same-day fix in most cases.",
  },
  {
    title: "Refrigerant leak (low charge)",
    description:
      "Symptoms: warm air from vents, ice on copper line, hissing near outdoor unit. Repair: $250-$800. Modern R-410A repairs require leak detection ($150-$300 added).",
  },
  {
    title: "Compressor failure",
    description:
      "The expensive one. Symptoms: AC runs but no cooling, hard-start kit no longer works, electrical breaker trips. Repair: $1,500-$2,800 — at this point evaluate replacement.",
  },
  {
    title: "Frozen evaporator coil",
    description:
      "Symptoms: ice on indoor unit, weak airflow. Cause: dirty filter or low refrigerant. DIY filter swap fixes 60% of cases; otherwise call for cleaning ($200-$400).",
  },
];

export function ServiceCityBody({ brand }: { brand: Brand }) {
  const top5 = TUCSON_CONTRACTORS.slice(0, 5);
  return (
    <main>
      <section className="py-10 md:py-14 border-b" style={{ borderColor: "var(--brand-border)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="brand-card p-5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--brand-muted-fg)" }}>
                <DollarSign size={14} /> Avg Tucson cost
              </div>
              <div className="heading text-3xl mt-3">$380</div>
              <div className="text-sm mt-1" style={{ color: "var(--brand-muted-fg)" }}>$150–$650 typical range</div>
            </div>
            <div className="brand-card p-5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--brand-muted-fg)" }}>
                <Clock size={14} /> Same-day fix rate
              </div>
              <div className="heading text-3xl mt-3">87%</div>
              <div className="text-sm mt-1" style={{ color: "var(--brand-muted-fg)" }}>of routine AC repair calls</div>
            </div>
            <div className="brand-card p-5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--brand-muted-fg)" }}>
                <ShieldCheck size={14} /> Avg warranty
              </div>
              <div className="heading text-3xl mt-3">90 days</div>
              <div className="text-sm mt-1" style={{ color: "var(--brand-muted-fg)" }}>on parts + labor for repairs</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="heading text-3xl md:text-4xl mb-3">The 5 best AC repair companies in Tucson</h2>
          <p className="text-lg" style={{ color: "var(--brand-muted-fg)" }}>
            Our top picks for repair-only work, ranked by speed of response, repair-only specialization, and pricing transparency. For full system replacement see our <a href="#" style={{ color: "var(--brand-accent)" }} className="underline">best HVAC contractors guide</a>.
          </p>
          <div className="mt-7 space-y-5">
            {top5.map((c) => (
              <ContractorCard key={c.rank} contractor={c} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t" style={{ borderColor: "var(--brand-border)", background: "var(--brand-muted)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-16">
          <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--brand-accent)" }}>
            Common AC failures in Tucson
          </div>
          <h2 className="heading text-3xl md:text-4xl mb-4">What's actually wrong with your AC</h2>
          <p className="text-lg" style={{ color: "var(--brand-muted-fg)" }}>
            Tucson's heat-stress shortens equipment life and produces a recognizable failure pattern. Here are the four issues responsible for 80% of Tucson AC repair calls.
          </p>
          <div className="mt-7 grid md:grid-cols-2 gap-4">
            {STEPS.map((s, i) => (
              <div key={i} className="brand-card p-5">
                <div className="flex items-start gap-3">
                  <div
                    className="grid place-items-center heading text-base font-semibold flex-shrink-0"
                    style={{
                      width: 32,
                      height: 32,
                      background: "var(--brand-accent)",
                      color: "var(--brand-accent-fg)",
                      borderRadius: "0.5rem",
                    }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="heading text-lg">{s.title}</h3>
                    <p className="text-sm mt-1.5" style={{ color: "var(--brand-muted-fg)" }}>{s.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-7 brand-card p-5 flex items-start gap-3" style={{ borderColor: "var(--brand-danger)" }}>
            <AlertCircle size={20} style={{ color: "var(--brand-danger)", flexShrink: 0 }} />
            <div>
              <div className="font-semibold">When to stop trying to repair</div>
              <p className="text-sm mt-1" style={{ color: "var(--brand-muted-fg)" }}>
                The 5,000 rule: multiply system age × repair cost. If the result exceeds $5,000, replace instead. Tucson-specific: drop the threshold to $4,000 because heat-stressed equipment fails again sooner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <FaqBlock faqs={TUCSON_COST_FAQS.slice(0, 4)} />
      </section>
    </main>
  );
}
