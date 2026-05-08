import { ArrowRight, ShieldCheck } from "lucide-react";
import { type Brand } from "@/lib/brands";
import { StarRating } from "@/components/shared/StarRating";

type Props = {
  brand: Brand;
  headline: string;
  subhead: string;
};

export function HeroEditorialSticky({ brand, headline, subhead }: Props) {
  return (
    <section
      id="hero"
      className="border-b"
      style={{ borderColor: "var(--brand-border)", background: "var(--brand-bg)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16 grid md:grid-cols-12 gap-10">
        <article className="md:col-span-7 lg:col-span-8">
          <div
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-4"
            style={{ color: "var(--brand-accent)" }}
          >
            HVAC · Tucson, AZ · Updated May 8, 2026
          </div>
          <h1 className="heading text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            {headline}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm" style={{ color: "var(--brand-muted-fg)" }}>
            <div className="flex items-center gap-2">
              <div
                className="h-9 w-9 rounded-full grid place-items-center text-sm font-semibold"
                style={{ background: "var(--brand-muted)", color: "var(--brand-fg)" }}
              >
                JM
              </div>
              <div>
                By <span style={{ color: "var(--brand-fg)" }}>Jordan Marshall</span>
                <span className="hidden sm:inline"> · Senior HVAC Editor</span>
              </div>
            </div>
            <span className="hidden sm:inline">·</span>
            <span>10 min read</span>
            <span className="hidden sm:inline">·</span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={14} style={{ color: "var(--brand-success)" }} />
              Reviewed by NATE-certified technician
            </span>
          </div>
          <div
            className="my-7 aspect-[16/8] w-full rounded-xl overflow-hidden relative"
            style={{
              background:
                "linear-gradient(135deg, #1a3a52 0%, #2d6190 35%, #b87333 75%, #d49a47 100%)",
            }}
            aria-hidden
          >
            <div className="absolute inset-0 grid place-items-center text-white/85">
              <div className="text-center">
                <div className="heading text-4xl md:text-5xl">Tucson, AZ</div>
                <div className="text-sm mt-1 tracking-wide">Editorial photo placeholder</div>
              </div>
            </div>
          </div>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl" style={{ color: "var(--brand-muted-fg)" }}>
            {subhead}
          </p>
          <p className="mt-4 text-base leading-relaxed max-w-3xl" style={{ color: "var(--brand-muted-fg)" }}>
            We compared 62 contractors against eight criteria — NATE certifications, warranty terms, BBB ratings, transparent pricing, and emergency-response speed. The 10 below earned our recommendation. We accept no payment from contractors for placement.
          </p>
        </article>
        <aside className="md:col-span-5 lg:col-span-4">
          <div className="md:sticky md:top-24">
            <div className="brand-card p-5">
              <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--brand-muted-fg)" }}>
                Get matched in 60 seconds
              </div>
              <h3 className="heading text-xl mb-1">Free quotes from our top 3</h3>
              <p className="text-sm mb-4" style={{ color: "var(--brand-muted-fg)" }}>
                We match you with three of the contractors on this list based on your ZIP code and issue.
              </p>
              <input
                type="text"
                inputMode="numeric"
                maxLength={5}
                placeholder="ZIP code"
                defaultValue="85711"
                className="w-full rounded-lg border px-4 py-3 text-base mb-2.5"
                style={{
                  borderColor: "var(--brand-border)",
                  background: "var(--brand-surface)",
                  color: "var(--brand-fg)",
                }}
              />
              <select
                className="w-full rounded-lg border px-4 py-3 text-base mb-3 appearance-none"
                style={{
                  borderColor: "var(--brand-border)",
                  background: "var(--brand-surface)",
                  color: "var(--brand-fg)",
                }}
                defaultValue=""
              >
                <option value="" disabled>What's the issue?</option>
                <option>AC not cooling</option>
                <option>No heat</option>
                <option>Loud noises</option>
                <option>Replacing system</option>
                <option>Tune-up</option>
              </select>
              <button type="button" className="brand-button w-full text-base">
                Match me <ArrowRight size={18} />
              </button>
              <div className="mt-4 pt-4 border-t flex items-center gap-2 text-xs" style={{ borderColor: "var(--brand-border)", color: "var(--brand-muted-fg)" }}>
                <StarRating rating={4.8} />
                4.8 from 2,378 matched homeowners
              </div>
            </div>
            <div className="mt-4 brand-card p-5">
              <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--brand-muted-fg)" }}>
                In this guide
              </div>
              <ul className="mt-3 space-y-2 text-sm">
                {[
                  "Top 10 Tucson HVAC contractors",
                  "How we ranked them",
                  "Average HVAC repair costs",
                  "Rebates & tax credits available",
                  "Frequently asked questions",
                ].map((s) => (
                  <li key={s}>
                    <a href="#" className="hover:underline">{s}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
