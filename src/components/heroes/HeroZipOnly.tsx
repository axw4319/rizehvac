import { ArrowRight, ShieldCheck, Star, Wrench } from "lucide-react";
import { type Brand } from "@/lib/brands";

type Props = {
  brand: Brand;
  headline: string;
  subhead: string;
};

export function HeroZipOnly({ brand, headline, subhead }: Props) {
  const isEditorial = brand.id === "editorial";
  return (
    <section
      id="hero"
      className="border-b"
      style={{ borderColor: "var(--brand-border)", background: "var(--brand-bg)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 md:py-20 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <div
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-5"
            style={{ color: "var(--brand-accent)" }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: "var(--brand-accent)" }}
            />
            {isEditorial ? "Updated May 2026 · 40 hrs of research" : "Verified · Same-day matches"}
          </div>
          <h1
            className="heading text-4xl md:text-6xl leading-[1.05] tracking-tight"
            style={{ fontFamily: "var(--brand-font-heading)" }}
          >
            {headline}
          </h1>
          <p
            className="mt-5 text-lg md:text-xl max-w-2xl"
            style={{ color: "var(--brand-muted-fg)" }}
          >
            {subhead}
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl">
            <input
              type="text"
              inputMode="numeric"
              maxLength={5}
              placeholder="Enter your ZIP code"
              defaultValue="85711"
              className="flex-1 rounded-lg border px-4 py-4 text-base outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                borderColor: "var(--brand-border)",
                background: "var(--brand-surface)",
                color: "var(--brand-fg)",
              }}
            />
            <button type="button" className="brand-button text-base">
              See HVAC pros <ArrowRight size={18} />
            </button>
          </form>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: "var(--brand-muted-fg)" }}>
            <span className="inline-flex items-center gap-1.5"><ShieldCheck size={16} style={{ color: "var(--brand-success)" }} /> Free, no obligation</span>
            <span className="inline-flex items-center gap-1.5"><Star size={16} style={{ color: "var(--brand-rating)" }} /> 10 NATE-certified contractors</span>
            <span className="inline-flex items-center gap-1.5"><Wrench size={16} /> 24/7 emergency available</span>
          </div>
        </div>
        <aside className="md:col-span-5">
          <div className="brand-card p-5">
            <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--brand-muted-fg)" }}>
              Tucson average · Last 30 days
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="heading text-3xl font-semibold">10</div>
                <div className="text-xs mt-1" style={{ color: "var(--brand-muted-fg)" }}>vetted contractors</div>
              </div>
              <div>
                <div className="heading text-3xl font-semibold">4.8</div>
                <div className="text-xs mt-1" style={{ color: "var(--brand-muted-fg)" }}>avg rating</div>
              </div>
              <div>
                <div className="heading text-3xl font-semibold">$380</div>
                <div className="text-xs mt-1" style={{ color: "var(--brand-muted-fg)" }}>avg repair</div>
              </div>
            </div>
            <div className="mt-5 pt-5 border-t flex items-center gap-3" style={{ borderColor: "var(--brand-border)" }}>
              <div className="flex -space-x-2">
                {["#0F4C3A", "#C8842B", "#1E40AF"].map((c, i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 grid place-items-center text-xs font-semibold text-white"
                    style={{ background: c, borderColor: "var(--brand-bg)" }}
                  >
                    {["JD", "MR", "SK"][i]}
                  </div>
                ))}
              </div>
              <div className="text-sm" style={{ color: "var(--brand-muted-fg)" }}>
                <strong style={{ color: "var(--brand-fg)" }}>2,378 Tucson homeowners</strong> matched this month
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
