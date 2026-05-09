import { ArrowRight, ChevronDown, Clock, Phone, ShieldCheck, Star, ThumbsUp } from "lucide-react";
import Image from "next/image";
import type { CityData } from "@/data/types";

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

export function HeroLifestyle({
  city,
  headline,
  subhead,
}: {
  city: CityData;
  headline: string;
  subhead: string;
}) {
  const photoSrc = `/photos/${city.heroPhotoSlug}-2400.webp`;
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ background: "var(--brand-bg-inverse)", color: "var(--brand-fg-inverse)" }}
    >
      <svg
        className="absolute inset-0 pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMaxYMid slice"
        aria-hidden
        style={{ width: "100%", height: "100%" }}
      >
        <defs>
          <linearGradient id="diag-blue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--brand-accent-bright)" stopOpacity="0.65" />
            <stop offset="100%" stopColor="var(--brand-accent)" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="diag-orange" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FB923C" stopOpacity="0.78" />
            <stop offset="100%" stopColor="var(--brand-cta)" stopOpacity="0.95" />
          </linearGradient>
        </defs>
        <polygon points="900,0 1440,0 1440,80 1100,160" fill="url(#diag-blue)" />
        <polygon points="980,160 1440,80 1440,260 1180,310" fill="url(#diag-orange)" />
        <polygon points="1100,360 1440,260 1440,440 1240,520" fill="url(#diag-blue)" opacity="0.55" />
      </svg>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pt-12 md:pt-16 pb-8 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7 lg:col-span-7">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-7 text-xs font-semibold" style={{ color: "var(--brand-fg-inverse-soft)" }}>
            <div className="inline-flex items-center gap-2">
              <span
                className="grid place-items-center rounded-sm text-[8px] font-extrabold tracking-wider"
                style={{ width: 28, height: 16, background: "var(--brand-fg-inverse)", color: "var(--brand-bg-inverse)" }}
              >
                BBB
              </span>
              <div className="leading-none">
                <StarRow />
                <div className="text-[9px] uppercase tracking-wider mt-0.5" style={{ color: "var(--brand-accent-bright)" }}>A+ Rating</div>
              </div>
            </div>
            <div className="inline-flex items-center gap-2">
              <span className="grid place-items-center rounded-full text-[10px] font-extrabold" style={{ width: 18, height: 18, background: "var(--brand-fg-inverse)", color: "#1877F2" }}>f</span>
              <div className="leading-none">
                <StarRow />
                <div className="text-[9px] uppercase tracking-wider mt-0.5" style={{ color: "var(--brand-accent-bright)" }}>5.0 Rating</div>
              </div>
            </div>
            <div className="inline-flex items-center gap-2">
              <span className="grid place-items-center rounded-full text-[10px] font-extrabold" style={{ width: 18, height: 18, background: "var(--brand-fg-inverse)", color: "#4285F4" }}>G</span>
              <div className="leading-none">
                <StarRow />
                <div className="text-[9px] uppercase tracking-wider mt-0.5" style={{ color: "var(--brand-accent-bright)" }}>5.0 Rating</div>
              </div>
            </div>
          </div>

          <h1 className="display text-5xl md:text-7xl lg:text-[5.5rem]">
            {headline}
          </h1>
          <p className="mt-6 text-base md:text-lg max-w-xl" style={{ color: "var(--brand-fg-inverse-soft)" }}>
            {subhead}
          </p>

          <ul className="mt-8 space-y-3">
            {TRAITS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <span
                  className="grid place-items-center rounded-full shrink-0"
                  style={{ width: 36, height: 36, background: "var(--brand-cta)" }}
                >
                  <Icon size={18} style={{ color: "var(--brand-cta-fg)" }} strokeWidth={2.5} />
                </span>
                <span className="display text-2xl" style={{ color: "var(--brand-fg-inverse)" }}>{label}.</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="md:col-span-5 lg:col-span-5 relative">
          <svg
            className="absolute -left-8 -bottom-8 pointer-events-none hidden md:block"
            width="180"
            height="120"
            viewBox="0 0 180 120"
            aria-hidden
          >
            <polygon points="0,90 140,0 180,0 0,120" fill="var(--brand-accent-bright)" opacity="0.5" />
            <polygon points="20,118 170,10 180,40 60,120" fill="var(--brand-cta)" opacity="0.85" />
          </svg>

          <div className="relative aspect-4/3 rounded-md overflow-hidden shadow-2xl" style={{ borderColor: "var(--brand-border-inverse)" }}>
            <Image
              src={photoSrc}
              alt={`A NATE-certified HVAC technician inspecting a Trane condenser at a ${city.meta.city} home`}
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
          <input
            type="text"
            placeholder="Your Name"
            className="flex-1 px-4 py-4 text-base outline-none border-b md:border-b-0 md:border-r"
            style={{ borderColor: "var(--brand-border)", color: "var(--brand-fg)", background: "var(--brand-fg-inverse)" }}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="flex-1 px-4 py-4 text-base outline-none border-b md:border-b-0 md:border-r"
            style={{ borderColor: "var(--brand-border)", color: "var(--brand-fg)", background: "var(--brand-fg-inverse)" }}
          />
          <input
            type="email"
            placeholder="Email"
            className="flex-1 px-4 py-4 text-base outline-none border-b md:border-b-0 md:border-r"
            style={{ borderColor: "var(--brand-border)", color: "var(--brand-fg)", background: "var(--brand-fg-inverse)" }}
          />
          <div className="relative flex-1 md:border-r" style={{ borderColor: "var(--brand-border)" }}>
            <select
              defaultValue=""
              className="w-full px-4 py-4 text-base outline-none appearance-none font-semibold"
              style={{ background: "var(--brand-accent-bright)", color: "var(--brand-fg-inverse)" }}
            >
              <option value="" disabled>Select your service</option>
              <option>AC repair</option>
              <option>AC replacement</option>
              <option>Heating</option>
              <option>Tune-up / maintenance</option>
              <option>New install</option>
            </select>
            <ChevronDown size={16} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", color: "var(--brand-fg-inverse)", pointerEvents: "none" }} />
          </div>
          <button
            type="button"
            className="display text-xl px-7 py-4 inline-flex items-center justify-center gap-2 whitespace-nowrap"
            style={{ background: "var(--brand-cta)", color: "var(--brand-cta-fg)" }}
          >
            Let's Go! <ArrowRight size={18} />
          </button>
        </form>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs" style={{ color: "var(--brand-fg-inverse-soft)" }}>
          <span className="inline-flex items-center gap-1.5">
            <Phone size={12} />
            Or call <strong style={{ color: "var(--brand-fg-inverse)" }}>{city.phone}</strong> 24/7
          </span>
          <span>Free quotes from {city.contractors.length} {city.meta.city} contractors. No obligation.</span>
        </div>
      </div>
    </section>
  );
}
