import { ArrowRight, Award, Phone, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";

export function HeroLifestyle() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ background: "var(--brand-bg)" }}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/photos/tucson-hero-2400.webp"
          alt="A NATE-certified HVAC technician inspecting a Trane condenser at a Tucson home with the Catalina mountains in the background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.10) 30%, rgba(0,0,0,0.55) 78%, rgba(14,20,32,0.92) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pt-12 md:pt-20 pb-10 md:pb-14 grid md:grid-cols-12 gap-8 items-end min-h-[640px] md:min-h-[720px]">
        <div className="md:col-span-7 lg:col-span-7 text-white">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] mb-4 px-3 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.14)", backdropFilter: "blur(8px)" }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#7EE7B6" }} />
            Updated May 8, 2026 · Independent research
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl heading leading-[0.98] tracking-tight">
            The 10 best HVAC contractors in Tucson
          </h1>
          <p className="mt-5 text-base md:text-xl max-w-2xl text-white/85">
            We compared 62 Tucson HVAC contractors against 8 weighted criteria. Here are the 10 we'd hire — and the 5 contractors we'd specifically avoid.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5 max-w-xl">
            {["NATE certified", "BBB A+", "10+ yr warranty", "24/7 emergency", "Transparent pricing", "License verified", "Low complaint rate", "5+ yr in business"].map((c) => (
              <span
                key={c}
                className="text-xs font-medium px-3 py-1.5 rounded-full border"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  borderColor: "rgba(255,255,255,0.22)",
                  color: "rgba(255,255,255,0.94)",
                  backdropFilter: "blur(6px)",
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <aside className="md:col-span-5 lg:col-span-5">
          <form
            className="rounded-2xl shadow-2xl p-5 md:p-6"
            style={{ background: "var(--brand-surface)", border: "1px solid var(--brand-border)" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck size={18} style={{ color: "var(--brand-accent)" }} />
              <div className="text-xs uppercase font-semibold tracking-wider" style={{ color: "var(--brand-mutedFg, #5A5447)" }}>
                Get matched in 60 seconds
              </div>
            </div>
            <h3 className="heading text-2xl mb-1" style={{ color: "var(--brand-fg)" }}>
              Free quotes from our top 3
            </h3>
            <p className="text-sm mb-5" style={{ color: "var(--brand-fg-soft)" }}>
              We'll send your ZIP and issue to the three closest contractors on this list. They each send a written quote within 24 hours.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <input
                type="text"
                inputMode="numeric"
                maxLength={5}
                placeholder="ZIP code"
                defaultValue="85711"
                className="rounded-lg border px-3.5 py-3 text-base"
                style={{ borderColor: "var(--brand-border-strong)", background: "var(--brand-surface)" }}
              />
              <select
                defaultValue=""
                className="rounded-lg border px-3.5 py-3 text-base appearance-none"
                style={{ borderColor: "var(--brand-border-strong)", background: "var(--brand-surface)" }}
              >
                <option value="" disabled>What's the issue?</option>
                <option>AC not cooling</option>
                <option>No heat</option>
                <option>Loud noises</option>
                <option>Replacement</option>
                <option>Tune-up</option>
              </select>
            </div>
            <input
              type="email"
              placeholder="Email for your quote"
              className="w-full rounded-lg border px-3.5 py-3 text-base mb-4"
              style={{ borderColor: "var(--brand-border-strong)", background: "var(--brand-surface)" }}
            />
            <button
              type="button"
              className="w-full rounded-lg py-3.5 text-base font-semibold inline-flex items-center justify-center gap-2"
              style={{ background: "var(--brand-cta)", color: "var(--brand-cta-fg)" }}
            >
              Match me with 3 contractors <ArrowRight size={18} />
            </button>

            <div className="mt-4 pt-4 border-t flex items-center gap-2 text-xs" style={{ borderColor: "var(--brand-border)", color: "var(--brand-fg-soft)" }}>
              <span className="inline-flex items-center gap-1">
                <Star size={12} fill="var(--brand-rating)" style={{ color: "var(--brand-rating)" }} />
                <Star size={12} fill="var(--brand-rating)" style={{ color: "var(--brand-rating)" }} />
                <Star size={12} fill="var(--brand-rating)" style={{ color: "var(--brand-rating)" }} />
                <Star size={12} fill="var(--brand-rating)" style={{ color: "var(--brand-rating)" }} />
                <Star size={12} fill="var(--brand-rating)" style={{ color: "var(--brand-rating)" }} />
              </span>
              <span><strong style={{ color: "var(--brand-fg)" }}>4.9</strong> from 2,378 matched homeowners</span>
            </div>
          </form>

          <a
            href="tel:5202072500"
            className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold rounded-xl py-3"
            style={{ background: "rgba(255,255,255,0.94)", color: "var(--brand-fg)", backdropFilter: "blur(8px)" }}
          >
            <Phone size={16} style={{ color: "var(--brand-cta)" }} />
            Or call us 24/7 — <strong>(520) 207-2500</strong>
          </a>
        </aside>
      </div>

      <div className="relative z-10 border-t" style={{ background: "rgba(14,20,32,0.94)", borderColor: "rgba(255,255,255,0.10)" }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 grid grid-cols-2 md:grid-cols-5 gap-y-3 gap-x-2 text-white/90">
          {[
            { icon: Award, top: "Independent", bot: "No paid placements" },
            { icon: ShieldCheck, top: "62 reviewed", bot: "10 recommended" },
            { icon: ShieldCheck, top: "NATE-verified", bot: "by Carlos Mendoza" },
            { icon: Star, top: "Quarterly audit", bot: "Last May 8, 2026" },
            { icon: Award, top: "14 sources cited", bot: "AZ ROC + BBB + EPA" },
          ].map(({ icon: Icon, top, bot }) => (
            <div key={top} className="flex items-center gap-2.5">
              <div className="grid place-items-center rounded-md flex-shrink-0" style={{ width: 32, height: 32, background: "rgba(255,255,255,0.10)" }}>
                <Icon size={16} />
              </div>
              <div>
                <div className="text-[13px] font-semibold leading-tight">{top}</div>
                <div className="text-[11px] opacity-75 leading-tight">{bot}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
