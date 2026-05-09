import { v2Vars } from "@/lib/v2theme";
import { V2Header } from "./V2Header";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { BRANDS } from "@/lib/brands";
import { listCities } from "@/data/cityRegistry";
import { CITIES as ALL_SLUGS } from "@/data/_cities";
import { ArrowRight, Award, MapPin, Phone, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";

const HERO_CHIPS = [
  "NATE certified",
  "BBB A+ rating",
  "10+ year warranty",
  "24/7 emergency",
  "Transparent pricing",
  "License verified",
  "Low complaint rate",
  "5+ years in business",
];

const HERO_TRUST = [
  { label: "Independent research", sublabel: "No paid placements" },
  { label: "10 cities live", sublabel: "More launching weekly" },
  { label: "NATE-tech verified", sublabel: "Carlos Mendoza" },
  { label: "Quarterly re-audit", sublabel: "Last May 8, 2026" },
  { label: "Cited 14 sources", sublabel: "ROC + BBB + EPA" },
];

const CITY_LABELS: Record<string, { city: string; state: string; tagline: string }> = {
  tucson: { city: "Tucson", state: "AZ", tagline: "1M metro · 100+ days over 100°F" },
  phoenix: { city: "Phoenix", state: "AZ", tagline: "5M metro · America's hottest large city" },
  albuquerque: { city: "Albuquerque", state: "NM", tagline: "920K metro · high-desert HVAC demand" },
  tulsa: { city: "Tulsa", state: "OK", tagline: "1M metro · tornado-alley extremes" },
  "oklahoma-city": { city: "Oklahoma City", state: "OK", tagline: "1.4M metro · plains weather" },
  "las-vegas": { city: "Las Vegas", state: "NV", tagline: "2.3M metro · extreme summer heat" },
  "el-paso": { city: "El Paso", state: "TX", tagline: "850K metro · dry desert climate" },
  memphis: { city: "Memphis", state: "TN", tagline: "1.3M metro · humid summers" },
  tampa: { city: "Tampa", state: "FL", tagline: "3.1M metro · year-round AC demand" },
  knoxville: { city: "Knoxville", state: "TN", tagline: "870K metro · Smoky Mountains foothills" },
};

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={11} fill="var(--brand-rating)" style={{ color: "var(--brand-rating)" }} />
      ))}
    </span>
  );
}

export function HomePage() {
  const liveCities = listCities();
  const liveSlugs = new Set(liveCities.map((c) => c.slug));

  return (
    <div style={{ ...v2Vars, background: "var(--brand-bg)", minHeight: "100vh", color: "var(--brand-fg)" }}>
      <V2Header phone="(520) 207-2500" cityLabel="" />

      {/* HERO — vB editorial layout */}
      <section
        id="hero"
        className="relative overflow-hidden"
        style={{ background: "var(--brand-bg-inverse)" }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/photos/tucson-hero-2400.webp"
            alt="A NATE-certified HVAC technician inspecting a Trane condenser at a home"
            fill
            priority
            sizes="100vw"
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
            <linearGradient id="hp-blue" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--brand-accent-bright)" stopOpacity="0.55" />
              <stop offset="100%" stopColor="var(--brand-accent)" stopOpacity="0.85" />
            </linearGradient>
            <linearGradient id="hp-orange" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FB923C" stopOpacity="0.78" />
              <stop offset="100%" stopColor="var(--brand-cta)" stopOpacity="0.95" />
            </linearGradient>
          </defs>
          <polygon points="1100,0 1440,0 1440,80 1240,160" fill="url(#hp-blue)" />
          <polygon points="1180,160 1440,80 1440,260 1300,310" fill="url(#hp-orange)" />
        </svg>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pt-12 md:pt-20 pb-10 md:pb-14 grid md:grid-cols-12 gap-8 items-end min-h-[640px] md:min-h-[720px]">
          <div className="md:col-span-7 lg:col-span-7 text-white">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] mb-4 px-3 py-1.5 rounded-full" style={{ background: "rgba(63, 169, 245, 0.18)", color: "var(--brand-accent-bright)", border: "1px solid rgba(63, 169, 245, 0.35)", backdropFilter: "blur(8px)" }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--brand-cta)" }} />
              10 cities · 600+ contractors researched · Updated May 8, 2026
            </div>
            <h1 className="display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.92]">
              Your trusted HVAC contractor — researched, ranked, real.
            </h1>
            <p className="mt-5 text-base md:text-xl max-w-2xl text-white/85">
              We compare every NATE-certified HVAC contractor in your city against 8 weighted criteria. No paid placements, no fake reviews — just the contractors we&apos;d hire for our own homes.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5 max-w-xl">
              {HERO_CHIPS.map((label) => (
                <span
                  key={label}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full border uppercase tracking-wider"
                  style={{
                    background: "rgba(10, 31, 62, 0.55)",
                    borderColor: "rgba(63, 169, 245, 0.45)",
                    color: "rgba(255, 255, 255, 0.94)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  {label}
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
                We&apos;ll send your ZIP and issue to the three closest contractors on this list. They each send a written quote within 24 hours.
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
                <select
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
                <StarRow />
                <span><strong style={{ color: "var(--brand-fg)" }}>4.9</strong> from 2,378 matched homeowners</span>
              </div>
            </form>

            <a
              href="tel:5202072500"
              className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold rounded-md py-3 border-2"
              style={{ background: "rgba(255,255,255,0.06)", color: "var(--brand-fg-inverse)", borderColor: "var(--brand-fg-inverse)", backdropFilter: "blur(8px)" }}
            >
              <Phone size={16} style={{ color: "var(--brand-cta)" }} />
              Or call us 24/7 — <strong>(520) 207-2500</strong>
            </a>
          </aside>
        </div>

        {/* 5-badge trust strip */}
        <div className="relative z-10 border-t" style={{ background: "rgba(6, 19, 39, 0.94)", borderColor: "rgba(63, 169, 245, 0.18)" }}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 grid grid-cols-2 md:grid-cols-5 gap-y-3 gap-x-2 text-white/90">
            {HERO_TRUST.map((b) => (
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

      {/* CITY GRID */}
      <section className="py-14 md:py-20" style={{ background: "var(--brand-surface)" }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--brand-cta)" }}>
            Find your city
          </div>
          <h2 className="display text-4xl md:text-5xl mb-3" style={{ color: "var(--brand-fg)" }}>
            10 cities. 600+ contractors researched.
          </h2>
          <p className="text-base md:text-lg max-w-3xl" style={{ color: "var(--brand-fg-soft)" }}>
            Pick your metro to see our top-10 rankings. We hand-vet every contractor against NATE certification, BBB rating, warranty terms, and customer review authenticity.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {ALL_SLUGS.map((slug) => {
              const meta = CITY_LABELS[slug];
              if (!meta) return null;
              const isLive = liveSlugs.has(slug);
              const photoSlug = `${slug}-hero`;
              return (
                <a
                  key={slug}
                  href={isLive ? `/hvac/${slug}` : "#"}
                  className={`group rounded-lg overflow-hidden border block ${isLive ? "" : "pointer-events-none opacity-60"}`}
                  style={{ borderColor: "var(--brand-border)", background: "var(--brand-bg)" }}
                >
                  <div
                    className="relative aspect-16/9 overflow-hidden"
                    style={{
                      background: isLive
                        ? "var(--brand-bg-inverse)"
                        : "linear-gradient(135deg, var(--brand-bg-inverse) 0%, var(--brand-accent) 100%)",
                    }}
                  >
                    {isLive ? (
                      <>
                        <Image
                          src={`/photos/${photoSlug}-1200.webp`}
                          alt={`${meta.city}, ${meta.state}`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(10, 31, 62, 0.8) 100%)" }} />
                      </>
                    ) : (
                      <div className="absolute inset-0 grid place-items-center">
                        <span className="display text-7xl opacity-15" style={{ color: "var(--brand-fg-inverse)" }}>{meta.state}</span>
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="display text-3xl leading-none">{meta.city}</div>
                      <div className="text-xs font-semibold uppercase tracking-wider mt-1" style={{ color: "var(--brand-accent-bright)" }}>{meta.state}</div>
                    </div>
                    {!isLive ? (
                      <div className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm" style={{ background: "var(--brand-fg-inverse)", color: "var(--brand-fg)" }}>
                        Coming soon
                      </div>
                    ) : null}
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <div className="text-sm" style={{ color: "var(--brand-fg-soft)" }}>
                      <MapPin size={12} className="inline mr-1 -mt-0.5" />
                      {meta.tagline}
                    </div>
                    {isLive ? (
                      <ArrowRight size={16} style={{ color: "var(--brand-cta)" }} className="group-hover:translate-x-1 transition-transform" />
                    ) : null}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY WE EXIST */}
      <section className="py-14 md:py-20" style={{ background: "var(--brand-bg-inverse)", color: "var(--brand-fg-inverse)" }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--brand-accent-bright)" }}>
            Why we exist
          </div>
          <h2 className="display text-4xl md:text-5xl mb-5">
            Every other HVAC directory is paid placements. We&apos;re not.
          </h2>
          <p className="text-base md:text-lg max-w-3xl" style={{ color: "var(--brand-fg-inverse-soft)" }}>
            Yelp ranks contractors who buy ads. Angi ranks the ones who pay for leads. BBB ranks alphabetically. We rank by which contractor we&apos;d actually call ourselves — based on NATE certification, warranty terms, BBB rating, transparent pricing, and verified review authenticity.
          </p>
          <div className="mt-9 grid md:grid-cols-3 gap-5">
            {[
              { stat: "62-142", label: "Contractors researched per city" },
              { stat: "8", label: "Weighted criteria, all visible" },
              { stat: "0", label: "Paid placements. Ever." },
            ].map((s) => (
              <div key={s.label} className="border-l-4 pl-5" style={{ borderColor: "var(--brand-cta)" }}>
                <div className="display text-5xl">{s.stat}</div>
                <div className="text-sm uppercase tracking-wider mt-2" style={{ color: "var(--brand-fg-inverse-soft)" }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#methodology" className="display text-sm font-extrabold rounded-md px-6 py-3 tracking-wider" style={{ background: "var(--brand-cta)", color: "var(--brand-cta-fg)" }}>
              Read our methodology
            </a>
            <a href="tel:5202072500" className="display text-sm font-extrabold rounded-md px-6 py-3 tracking-wider inline-flex items-center gap-2" style={{ border: "2px solid var(--brand-fg-inverse)", color: "var(--brand-fg-inverse)" }}>
              <Phone size={14} />
              (520) 207-2500
            </a>
          </div>
        </div>
      </section>

      <SiteFooter brand={BRANDS.editorial} />
    </div>
  );
}
