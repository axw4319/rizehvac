"use client";

import { useState } from "react";
import { AlertTriangle, ArrowRight, Check, Snowflake, Thermometer, Wrench } from "lucide-react";
import { type Brand } from "@/lib/brands";

type Props = {
  brand: Brand;
  headline: string;
  subhead: string;
};

const STEPS = [
  {
    label: "What's the issue?",
    options: [
      { id: "ac-out", label: "AC not cooling", icon: Snowflake, urgent: true },
      { id: "no-heat", label: "No heat", icon: Thermometer, urgent: true },
      { id: "noisy", label: "Loud or strange noises", icon: AlertTriangle, urgent: false },
      { id: "tune-up", label: "Tune-up / maintenance", icon: Wrench, urgent: false },
      { id: "replacement", label: "Replacing the system", icon: Check, urgent: false },
    ],
  },
  {
    label: "When do you need help?",
    options: [
      { id: "now", label: "Today (emergency)", icon: AlertTriangle, urgent: true },
      { id: "tomorrow", label: "Tomorrow", icon: Snowflake, urgent: false },
      { id: "this-week", label: "This week", icon: Thermometer, urgent: false },
      { id: "flexible", label: "Just gathering info", icon: Wrench, urgent: false },
    ],
  },
];

export function HeroMultistep({ brand, headline, subhead }: Props) {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<string[]>([]);
  const isLast = step === STEPS.length;
  const current = STEPS[step];

  return (
    <section
      id="hero"
      className="border-b"
      style={{ borderColor: "var(--brand-border)", background: "var(--brand-bg)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 md:py-20 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-6">
          <div
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-5"
            style={{ color: "var(--brand-accent)" }}
          >
            <span className="h-2 w-2 rounded-full" style={{ background: "var(--brand-accent)" }} />
            Free quotes · Takes 60 seconds
          </div>
          <h1 className="heading text-4xl md:text-6xl leading-[1.05] tracking-tight">{headline}</h1>
          <p className="mt-5 text-lg md:text-xl max-w-xl" style={{ color: "var(--brand-muted-fg)" }}>
            {subhead}
          </p>
          <ul className="mt-7 space-y-3 text-base" style={{ color: "var(--brand-muted-fg)" }}>
            {[
              "10 NATE-certified contractors, vetted by us",
              "Real reviews from Tucson homeowners",
              "No obligation — compare quotes before you commit",
            ].map((s) => (
              <li key={s} className="flex items-start gap-2">
                <Check size={20} style={{ color: "var(--brand-success)", flexShrink: 0, marginTop: 2 }} />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <aside className="md:col-span-6">
          <div className="brand-card p-6 md:p-7">
            <div className="flex items-center justify-between mb-5">
              <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--brand-muted-fg)" }}>
                Step {Math.min(step + 1, STEPS.length + 1)} of {STEPS.length + 1}
              </div>
              <div className="flex gap-1">
                {Array.from({ length: STEPS.length + 1 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-1.5 w-8 rounded-full"
                    style={{
                      background:
                        i <= step ? "var(--brand-accent)" : "var(--brand-border)",
                    }}
                  />
                ))}
              </div>
            </div>
            {!isLast && current ? (
              <div>
                <h3 className="heading text-2xl mb-5">{current.label}</h3>
                <div className="grid gap-2.5">
                  {current.options.map((o) => {
                    const Icon = o.icon;
                    const isPicked = picked[step] === o.id;
                    return (
                      <button
                        key={o.id}
                        type="button"
                        onClick={() => {
                          const next = [...picked];
                          next[step] = o.id;
                          setPicked(next);
                          setTimeout(() => setStep(step + 1), 250);
                        }}
                        className="flex items-center gap-3 px-4 py-3.5 rounded-lg border-2 text-left text-base font-medium transition"
                        style={{
                          borderColor: isPicked ? "var(--brand-accent)" : "var(--brand-border)",
                          background: isPicked
                            ? "var(--brand-muted)"
                            : "var(--brand-surface)",
                          color: "var(--brand-fg)",
                        }}
                      >
                        <Icon size={20} style={{ color: o.urgent ? "var(--brand-danger)" : "var(--brand-accent)" }} />
                        <span className="flex-1">{o.label}</span>
                        {isPicked ? <Check size={18} style={{ color: "var(--brand-accent)" }} /> : null}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div>
                <h3 className="heading text-2xl mb-1">Where in Tucson?</h3>
                <p className="text-sm mb-5" style={{ color: "var(--brand-muted-fg)" }}>
                  We'll match you with the 3 closest top-rated contractors.
                </p>
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={5}
                  placeholder="ZIP code"
                  defaultValue="85711"
                  className="w-full rounded-lg border px-4 py-4 text-base mb-3"
                  style={{
                    borderColor: "var(--brand-border)",
                    background: "var(--brand-surface)",
                    color: "var(--brand-fg)",
                  }}
                />
                <input
                  type="email"
                  placeholder="Email for your quote"
                  className="w-full rounded-lg border px-4 py-4 text-base mb-4"
                  style={{
                    borderColor: "var(--brand-border)",
                    background: "var(--brand-surface)",
                    color: "var(--brand-fg)",
                  }}
                />
                <button type="button" className="brand-button w-full text-base">
                  Match me with 3 contractors <ArrowRight size={18} />
                </button>
                <p className="text-xs mt-3 text-center" style={{ color: "var(--brand-muted-fg)" }}>
                  Free · No spam · Unsubscribe anytime
                </p>
              </div>
            )}
          </div>
          <div className="mt-3 text-xs flex justify-center gap-4" style={{ color: "var(--brand-muted-fg)" }}>
            <span>Used by 2,378 Tucson homeowners this month</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
