import { ArrowRight, Award, Phone, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";
import type { CityData, MethodologyCriterion, TrustBadge } from "@/data/types";

export function HeroEditorial({
  city,
  headline,
  subhead,
}: {
  city: CityData;
  headline: string;
  subhead: string;
}) {
  const tel = city.phone.replace(/[^0-9]/g, "");
  const photoSrc = `/photos/${city.heroPhotoSlug}-2400.webp`;
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ background: "var(--brand-bg-inverse)" }}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={photoSrc}
          alt={`A NATE-certified HVAC technician inspecting a Trane condenser at a ${city.meta.city} home`}
          fill
          priority
          fetchPriority="high"
          sizes="(max-width: 640px) 800px, (max-width: 1280px) 1200px, 1920px"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,31,62,0.55) 0%, rgba(10,31,62,0.30) 35%, rgba(10,31,62,0.78) 80%, rgba(6,19,39,0.96) 100%)",
          }}
        />
      </div>

      <svg
        className="absolute inset-0 z-[1] pointer-events-none hidden md:block"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMaxYMid slice"
        aria-hidden
        style={{ width: "100%", height: "100%" }}
      >
        <defs>
          <linearGradient id="ed-blue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--brand-accent-bright)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--brand-accent)" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="ed-orange" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FB923C" stopOpacity="0.78" />
            <stop offset="100%" stopColor="var(--brand-cta)" stopOpacity="0.95" />
          </linearGradient>
        </defs>
        <polygon points="1100,0 1440,0 1440,80 1240,160" fill="url(#ed-blue)" />
        <polygon points="1180,160 1440,80 1440,260 1300,310" fill="url(#ed-orange)" />
      </svg>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pt-12 md:pt-20 pb-10 md:pb-14 grid md:grid-cols-12 gap-8 items-end min-h-[640px] md:min-h-[720px]">
        <div className="md:col-span-7 lg:col-span-7 text-white">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] mb-4 px-3 py-1.5 rounded-full" style={{ background: "rgba(63, 169, 245, 0.18)", color: "var(--brand-accent-bright)", border: "1px solid rgba(63, 169, 245, 0.35)", backdropFilter: "blur(8px)" }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--brand-cta)" }} />
            Updated {city.meta.lastResearched} · Independent research
          </div>
          <h1 className="display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.92]">
            {headline}
          </h1>
          <p className="mt-5 text-base md:text-xl max-w-2xl text-white/85">{subhead}</p>

          <div className="mt-7 flex flex-wrap gap-2.5 max-w-xl">
            {city.methodology.map((c: MethodologyCriterion) => (
              <span
                key={c.label}
                className="text-xs font-semibold px-3 py-1.5 rounded-full border uppercase tracking-wider"
                style={{
                  background: "rgba(10, 31, 62, 0.55)",
                  borderColor: "rgba(63, 169, 245, 0.45)",
                  color: "rgba(255, 255, 255, 0.94)",
                  backdropFilter: "blur(6px)",
                }}
              >
                {c.label}
              </span>
            ))}
          </div>
        </div>

        <aside className="md:col-span-5 lg:col-span-5">
          <form
            className="rounded-xl shadow-2xl p-5 md:p-6"
            style={{ background: "var(--brand-surface)", border: "1px solid var(--brand-border)" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck size={18} style={{ color: "var(--brand-accent)" }} />
              <div className="text-xs uppercase font-semibold tracking-wider" style={{ color: "var(--brand-fg-soft)" }}>
                Get matched in 60 seconds
              </div>
            </div>
            <h3 className="display text-3xl mb-1" style={{ color: "var(--brand-fg)" }}>
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
                className="rounded-md border-2 px-3.5 py-3 text-base"
                style={{ borderColor: "var(--brand-border-strong)", background: "var(--brand-surface)" }}
              />
              <label htmlFor="hero-issue-select" className="sr-only">Type of issue</label>
              <select
                id="hero-issue-select"
                defaultValue=""
                className="rounded-md border-2 px-3.5 py-3 text-base appearance-none"
                style={{ borderColor: "var(--brand-border-strong)", background: "var(--brand-surface)" }}
              >
                <option value="" disabled>What&apos;s the issue?</option>
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
              className="w-full rounded-md border-2 px-3.5 py-3 text-base mb-4"
              style={{ borderColor: "var(--brand-border-strong)", background: "var(--brand-surface)" }}
            />
            <button
              type="button"
              className="display w-full rounded-md py-3.5 text-lg font-extrabold inline-flex items-center justify-center gap-2 tracking-wider"
              style={{ background: "var(--brand-cta)", color: "var(--brand-cta-fg)" }}
            >
              Match me with 3 contractors <ArrowRight size={18} />
            </button>

            <div className="mt-4 pt-4 border-t flex items-center gap-2 text-xs" style={{ borderColor: "var(--brand-border)", color: "var(--brand-fg-soft)" }}>
              <span className="inline-flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} fill="var(--brand-rating)" style={{ color: "var(--brand-rating)" }} />
                ))}
              </span>
              <span><strong style={{ color: "var(--brand-fg)" }}>4.9</strong> from 2,378 matched homeowners</span>
            </div>
          </form>

          <a
            href={`tel:${tel}`}
            className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold rounded-md py-3 border-2"
            style={{ background: "rgba(255,255,255,0.06)", color: "var(--brand-fg-inverse)", borderColor: "var(--brand-fg-inverse)", backdropFilter: "blur(8px)" }}
          >
            <Phone size={16} style={{ color: "var(--brand-cta)" }} />
            Or call us 24/7 — <strong>{city.phone}</strong>
          </a>
        </aside>
      </div>

      <div className="relative z-10 border-t" style={{ background: "rgba(6, 19, 39, 0.94)", borderColor: "rgba(63, 169, 245, 0.18)" }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 grid grid-cols-2 md:grid-cols-5 gap-y-3 gap-x-2 text-white/90">
          {city.trustBadges.map((b: TrustBadge) => (
            <div key={b.label} className="flex items-center gap-2.5">
              <div className="grid place-items-center rounded-md shrink-0" style={{ width: 32, height: 32, background: "var(--brand-cta)" }}>
                <Award size={16} style={{ color: "var(--brand-cta-fg)" }} />
              </div>
              <div>
                <div className="text-[13px] font-semibold leading-tight">{b.label}</div>
                <div className="text-[11px] opacity-75 leading-tight">{b.sublabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
