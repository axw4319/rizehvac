import { v2Vars } from "@/lib/v2theme";
import { V2Header } from "@/components/v2/V2Header";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { BRANDS } from "@/lib/brands";
import { ArrowRight, FileText, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div style={{ ...v2Vars, background: "var(--brand-bg)", minHeight: "100vh", color: "var(--brand-fg)" }}>
      <V2Header phone="(214) 414-2500" cityLabel="" />
      <section className="border-b" style={{ background: "var(--brand-bg-inverse)", color: "var(--brand-fg-inverse)", borderColor: "rgba(63, 169, 245, 0.18)" }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 md:py-24">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--brand-cta-bright)" }}>
            404 · page not found
          </div>
          <h1 className="display text-5xl md:text-7xl leading-[0.95]">That page took the day off.</h1>
          <p className="mt-6 text-lg max-w-2xl" style={{ color: "var(--brand-fg-inverse-soft)" }}>
            The URL you tried doesn&apos;t resolve to anything on rizehvac.com. Could be we moved it, could be a typo, could be we haven&apos;t built it yet. The links below cover ~95% of why people land here.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20" style={{ background: "var(--brand-surface)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="display text-3xl md:text-4xl mb-6">Where do you want to go?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: "/", icon: Home, h: "Home", p: "rizehvac main page — Dallas-Fort Worth HVAC contractor directory" },
              { href: "/hvac/dallas", icon: Search, h: "Best HVAC contractors in Dallas", p: "Top 10 ranked by RizeScore™" },
              { href: "/ac-repair/dallas", icon: Search, h: "AC repair in Dallas", p: "Same-day repair specialists" },
              { href: "/hvac-cost/dallas", icon: Search, h: "HVAC cost in Dallas", p: "2026 pricing + rebate stack" },
              { href: "/blog", icon: FileText, h: "Blog + buyer guides", p: "$5,000 rule, brand comparisons, repair-vs-replace, more" },
              { href: "/what-is-rizescore", icon: FileText, h: "What is RizeScore™?", p: "How we rank contractors — full methodology" },
              { href: "/methodology", icon: FileText, h: "Editorial methodology", p: "Our standards + 14 cited data sources" },
              { href: "/contact", icon: ArrowRight, h: "Contact us", p: "Email + phone + suggest a city" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group rounded-xl border p-5 flex items-start gap-4 transition hover:border-[var(--brand-cta)]"
                style={{ borderColor: "var(--brand-border)", background: "var(--brand-bg)" }}
              >
                <div className="grid place-items-center rounded-md shrink-0" style={{ width: 36, height: 36, background: "var(--brand-cta)" }}>
                  <l.icon size={18} style={{ color: "var(--brand-cta-fg)" }} />
                </div>
                <div className="flex-1">
                  <div className="display text-lg" style={{ color: "var(--brand-fg)" }}>{l.h}</div>
                  <p className="text-sm mt-1" style={{ color: "var(--brand-fg-soft)" }}>{l.p}</p>
                </div>
                <ArrowRight size={16} style={{ color: "var(--brand-cta)" }} className="mt-1 group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter brand={BRANDS.editorial} />
    </div>
  );
}
