import { v2Vars } from "@/lib/v2theme";
import { V2Header } from "./V2Header";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { BRANDS } from "@/lib/brands";
import { listCities } from "@/data/cityRegistry";
import { CITIES as ALL_SLUGS } from "@/data/_cities";
import { ArrowRight, ChevronDown, Clock, MapPin, Phone, ShieldCheck, Star, ThumbsUp } from "lucide-react";
import Image from "next/image";

const TRAITS = [
  { icon: Clock, label: "Same-day matches" },
  { icon: ShieldCheck, label: "Vetted & licensed" },
  { icon: ThumbsUp, label: "No paid placements" },
];

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={11} fill="var(--brand-accent-bright)" style={{ color: "var(--brand-accent-bright)" }} />
      ))}
    </span>
  );
}

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

export function HomePage() {
  const liveCities = listCities();
  const liveSlugs = new Set(liveCities.map((c) => c.slug));

  return (
    <div style={{ ...v2Vars, background: "var(--brand-bg)", minHeight: "100vh", color: "var(--brand-fg)" }}>
      <V2Header phone="(520) 207-2500" cityLabel="" />

      <section
        id="hero"
        className="relative overflow-hidden"
        style={{ background: "var(--brand-bg-inverse)", color: "var(--brand-fg-inverse)" }}
      >
        <svg
          className="absolute inset-0 pointer-events-none"
          viewBox="0 0 1440 700"
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
          <polygon points="980,0 1440,0 1440,80 1180,160" fill="url(#hp-blue)" />
          <polygon points="1080,160 1440,80 1440,260 1280,310" fill="url(#hp-orange)" />
        </svg>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pt-12 md:pt-16 pb-10 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-7 text-xs font-semibold" style={{ color: "var(--brand-fg-inverse-soft)" }}>
              <div className="inline-flex items-center gap-2">
                <span className="grid place-items-center rounded-sm text-[8px] font-extrabold tracking-wider" style={{ width: 28, height: 16, background: "var(--brand-fg-inverse)", color: "var(--brand-bg-inverse)" }}>BBB</span>
                <div className="leading-none">
                  <StarRow />
                  <div className="text-[9px] uppercase tracking-wider mt-0.5" style={{ color: "var(--brand-accent-bright)" }}>A+ Rating</div>
                </div>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="grid place-items-center rounded-full text-[10px] font-extrabold" style={{ width: 18, height: 18, background: "var(--brand-fg-inverse)", color: "#1877F2" }}>f</span>
                <div className="leading-none"><StarRow /><div className="text-[9px] uppercase tracking-wider mt-0.5" style={{ color: "var(--brand-accent-bright)" }}>5.0 Rating</div></div>
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="grid place-items-center rounded-full text-[10px] font-extrabold" style={{ width: 18, height: 18, background: "var(--brand-fg-inverse)", color: "#4285F4" }}>G</span>
                <div className="leading-none"><StarRow /><div className="text-[9px] uppercase tracking-wider mt-0.5" style={{ color: "var(--brand-accent-bright)" }}>5.0 Rating</div></div>
              </div>
            </div>

            <h1 className="display text-5xl md:text-7xl lg:text-[5.5rem]">
              Your trusted HVAC contractor — researched, ranked, real.
            </h1>
            <p className="mt-6 text-base md:text-lg max-w-xl" style={{ color: "var(--brand-fg-inverse-soft)" }}>
              We compare every NATE-certified HVAC contractor in your city against 8 weighted criteria. No paid placements, no fake reviews — just the contractors we'd hire for our own homes.
            </p>

            <ul className="mt-8 space-y-3">
              {TRAITS.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="grid place-items-center rounded-full shrink-0" style={{ width: 36, height: 36, background: "var(--brand-cta)" }}>
                    <Icon size={18} style={{ color: "var(--brand-cta-fg)" }} strokeWidth={2.5} />
                  </span>
                  <span className="display text-2xl" style={{ color: "var(--brand-fg-inverse)" }}>{label}.</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="md:col-span-5 lg:col-span-5 relative">
            <svg className="absolute -left-8 -bottom-8 pointer-events-none hidden md:block" width="180" height="120" viewBox="0 0 180 120" aria-hidden>
              <polygon points="0,90 140,0 180,0 0,120" fill="var(--brand-accent-bright)" opacity="0.5" />
              <polygon points="20,118 170,10 180,40 60,120" fill="var(--brand-cta)" opacity="0.85" />
            </svg>
            <div className="relative aspect-4/3 rounded-md overflow-hidden shadow-2xl">
              <Image
                src="/photos/tucson-hero-2400.webp"
                alt="A NATE-certified HVAC technician inspecting a Trane condenser at a home"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </aside>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pb-10">
          <form
            className="rounded-xl shadow-2xl flex flex-col md:flex-row items-stretch overflow-hidden"
            style={{ background: "var(--brand-fg-inverse)" }}
          >
            <div className="display text-2xl px-5 md:px-7 py-4 md:py-0 flex items-center md:border-r" style={{ background: "var(--brand-fg-inverse)", color: "var(--brand-bg-inverse)", borderColor: "var(--brand-border)" }}>
              How can we help?
            </div>
            <input type="text" placeholder="Your Name" className="flex-1 px-4 py-4 text-base outline-none border-b md:border-b-0 md:border-r" style={{ borderColor: "var(--brand-border)", color: "var(--brand-fg)", background: "var(--brand-fg-inverse)" }} />
            <input type="tel" placeholder="Phone Number" className="flex-1 px-4 py-4 text-base outline-none border-b md:border-b-0 md:border-r" style={{ borderColor: "var(--brand-border)", color: "var(--brand-fg)", background: "var(--brand-fg-inverse)" }} />
            <input type="email" placeholder="Email" className="flex-1 px-4 py-4 text-base outline-none border-b md:border-b-0 md:border-r" style={{ borderColor: "var(--brand-border)", color: "var(--brand-fg)", background: "var(--brand-fg-inverse)" }} />
            <div className="relative flex-1 md:border-r" style={{ borderColor: "var(--brand-border)" }}>
              <select defaultValue="" className="w-full px-4 py-4 text-base outline-none appearance-none font-semibold" style={{ background: "var(--brand-accent-bright)", color: "var(--brand-fg-inverse)" }}>
                <option value="" disabled>Select your service</option>
                <option>AC repair</option>
                <option>AC replacement</option>
                <option>Heating</option>
                <option>Tune-up / maintenance</option>
                <option>New install</option>
              </select>
              <ChevronDown size={16} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", color: "var(--brand-fg-inverse)", pointerEvents: "none" }} />
            </div>
            <button type="button" className="display text-xl px-7 py-4 inline-flex items-center justify-center gap-2 whitespace-nowrap" style={{ background: "var(--brand-cta)", color: "var(--brand-cta-fg)" }}>
              Let's Go! <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </section>

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
              const photoSlug = slug === "oklahoma-city" ? "oklahoma-city-hero" : `${slug}-hero`;
              return (
                <a
                  key={slug}
                  href={isLive ? `/hvac/${slug}` : "#"}
                  className={`group rounded-lg overflow-hidden border block ${isLive ? "" : "pointer-events-none opacity-60"}`}
                  style={{ borderColor: "var(--brand-border)", background: "var(--brand-bg)" }}
                >
                  <div className="relative aspect-16/9 overflow-hidden" style={{ background: "var(--brand-bg-inverse)" }}>
                    <Image
                      src={`/photos/${photoSlug}-1200.webp`}
                      alt={`${meta.city}, ${meta.state}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(10, 31, 62, 0.8) 100%)" }} />
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

      <section className="py-14 md:py-20" style={{ background: "var(--brand-bg-inverse)", color: "var(--brand-fg-inverse)" }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--brand-accent-bright)" }}>
            Why we exist
          </div>
          <h2 className="display text-4xl md:text-5xl mb-5">
            Every other HVAC directory is paid placements. We're not.
          </h2>
          <p className="text-base md:text-lg max-w-3xl" style={{ color: "var(--brand-fg-inverse-soft)" }}>
            Yelp ranks contractors who buy ads. Angi ranks the ones who pay for leads. BBB ranks alphabetically. We rank by which contractor we'd actually call ourselves — based on NATE certification, warranty terms, BBB rating, transparent pricing, and verified review authenticity.
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
