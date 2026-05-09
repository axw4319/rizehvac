import type { Metadata } from "next";
import { v2Vars } from "@/lib/v2theme";
import { V2Header } from "@/components/v2/V2Header";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { BRANDS } from "@/lib/brands";
import { TUCSON_EDITORIAL_CREDITS, TUCSON_METHODOLOGY_CRITERIA } from "@/data/tucson-reviews";
import { Award, Check, FileText, ShieldCheck, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Our methodology",
  description:
    "How rizehvac ranks HVAC contractors. 8 weighted criteria, 14 data sources, NATE-certified fact-checker. No paid placements, ever.",
  alternates: { canonical: "/methodology" },
};

export default function MethodologyPage() {
  return (
    <div style={{ ...v2Vars, background: "var(--brand-bg)", minHeight: "100vh", color: "var(--brand-fg)" }}>
      <V2Header phone="(520) 207-2500" cityLabel="" />

      <section className="border-b" style={{ background: "var(--brand-bg-inverse)", color: "var(--brand-fg-inverse)", borderColor: "rgba(63, 169, 245, 0.18)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-14 md:py-20">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--brand-accent-bright)" }}>
            Editorial standards
          </div>
          <h1 className="display text-5xl md:text-7xl leading-[0.95]">How we rank HVAC contractors.</h1>
          <p className="mt-6 text-lg max-w-3xl" style={{ color: "var(--brand-fg-inverse-soft)" }}>
            Yelp ranks contractors who buy ads. Angi ranks the ones who pay for leads. BBB ranks alphabetically. We rank by which contractor we&apos;d actually call ourselves — based on objective, verifiable signals from public records and our own field research.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20" style={{ background: "var(--brand-surface)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--brand-cta)" }}>
            The funnel
          </div>
          <h2 className="display text-4xl md:text-5xl mb-5">From every contractor in your city → 10 we&apos;d hire.</h2>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {[
              { label: "Step 1", h: "All licensed contractors", body: "We start with every active state-licensed HVAC contractor in the metro. For Tucson that's 142 active AZ ROC licensees in Pima County. For Phoenix it's ~300+. We don't accept self-submissions or contractor applications." },
              { label: "Step 2", h: "Eligibility filter", body: "We narrow to contractors with verifiable BBB filings, NATE certification on at least one technician, no pending state-licensing complaints, and a minimum of 5 years in business. This typically drops the list by ~60%." },
              { label: "Step 3", h: "Weighted scoring", body: "We apply 8 weighted criteria (below). Each contractor gets a 0–100 score. The top 10 by score make the list. Contractors within 2 points of the cutoff get a manual review." },
            ].map((s) => (
              <div key={s.label} className="rounded-xl p-5 border" style={{ borderColor: "var(--brand-border)", background: "var(--brand-bg)" }}>
                <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--brand-cta)" }}>{s.label}</div>
                <h3 className="display text-2xl mt-1">{s.h}</h3>
                <p className="text-sm mt-2" style={{ color: "var(--brand-fg-soft)" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 border-t" style={{ borderColor: "var(--brand-border)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--brand-cta)" }}>
            The 8 criteria
          </div>
          <h2 className="display text-4xl md:text-5xl mb-5">What we score.</h2>
          <p className="text-base md:text-lg max-w-3xl mb-8" style={{ color: "var(--brand-fg-soft)" }}>
            Every weight is published. Every contractor on every list is scored against the same rubric.
          </p>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
            {TUCSON_METHODOLOGY_CRITERIA.map((c) => (
              <div key={c.label} className="flex items-center gap-3 py-3 border-b" style={{ borderColor: "var(--brand-border)" }}>
                <div className="grid place-items-center rounded-md shrink-0" style={{ width: 36, height: 36, background: "var(--brand-cta)" }}>
                  <Check size={18} style={{ color: "var(--brand-cta-fg)" }} strokeWidth={2.5} />
                </div>
                <div className="flex-1 font-medium" style={{ color: "var(--brand-fg)" }}>{c.label}</div>
                <div className="display text-xl tabular-nums" style={{ color: "var(--brand-accent)" }}>{c.weight}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 border-t" style={{ background: "var(--brand-muted)", borderColor: "var(--brand-border)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--brand-cta)" }}>
            Data sources
          </div>
          <h2 className="display text-4xl md:text-5xl mb-5">14 sources we cross-check.</h2>

          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "State contractor licensing database (per state)",
              "BBB regional reports + complaint history",
              "EPA refrigerant handler registry (Section 608)",
              "NATE certification roster (national)",
              "ACCA contractor membership directory",
              "Energy Star Most Efficient Partner list",
              "Lennox / Trane / Carrier / Goodman dealer locators",
              "County permit issuance records (3-year window)",
              "Google Business Profile reviews + photos",
              "Yelp business profiles (cross-reference only)",
              "HomeAdvisor verified review feeds",
              "Better Business Bureau accreditation status",
              "OSHA citation history (where applicable)",
              "Direct phone calls to verify scope of services",
            ].map((s) => (
              <div key={s} className="flex items-start gap-2 text-sm py-1.5" style={{ color: "var(--brand-fg-soft)" }}>
                <FileText size={14} style={{ color: "var(--brand-cta)", flexShrink: 0, marginTop: 3 }} />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 border-t" style={{ borderColor: "var(--brand-border)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--brand-cta)" }}>
            Editorial team
          </div>
          <h2 className="display text-4xl md:text-5xl mb-5">Who reviews each list.</h2>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { p: TUCSON_EDITORIAL_CREDITS.author, role: "Author", icon: Users },
              { p: TUCSON_EDITORIAL_CREDITS.editor, role: "Editor", icon: ShieldCheck },
              { p: TUCSON_EDITORIAL_CREDITS.factChecker, role: "Fact-checker", icon: Award },
            ].map(({ p, role, icon: Icon }) => (
              <div key={p.name} className="rounded-xl p-6 border" style={{ borderColor: "var(--brand-border)", background: "var(--brand-bg)" }}>
                <Icon size={22} style={{ color: "var(--brand-cta)" }} />
                <div className="text-xs font-semibold uppercase tracking-wider mt-3" style={{ color: "var(--brand-fg-soft)" }}>{role}</div>
                <div className="display text-2xl mt-1">{p.name}</div>
                <div className="text-sm font-semibold mt-1" style={{ color: "var(--brand-fg-soft)" }}>{p.title}</div>
                <p className="text-sm mt-3" style={{ color: "var(--brand-fg-soft)" }}>{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20" style={{ background: "var(--brand-bg-inverse)", color: "var(--brand-fg-inverse)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--brand-accent-bright)" }}>
            Disclosures
          </div>
          <h2 className="display text-4xl md:text-5xl mb-5">What we earn — and what we don&apos;t.</h2>

          <div className="grid md:grid-cols-2 gap-5 mt-8">
            <div className="rounded-xl p-6 border" style={{ borderColor: "var(--brand-cta)", background: "rgba(249, 115, 22, 0.08)" }}>
              <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--brand-cta)" }}>How we earn</div>
              <h3 className="display text-2xl mt-1">Lead-share fees</h3>
              <p className="text-sm mt-3" style={{ color: "var(--brand-fg-inverse-soft)" }}>
                When a homeowner uses our match form and a contractor on our list closes the job, we collect a one-time lead-share fee. The fee is the same across every contractor on the list — there&apos;s no incentive to rank one over another.
              </p>
            </div>
            <div className="rounded-xl p-6 border" style={{ borderColor: "var(--brand-fg-inverse)", background: "rgba(255, 255, 255, 0.04)" }}>
              <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--brand-fg-inverse-soft)" }}>What we never accept</div>
              <h3 className="display text-2xl mt-1">Paid placements</h3>
              <p className="text-sm mt-3" style={{ color: "var(--brand-fg-inverse-soft)" }}>
                No contractor pays for inclusion, ranking, position, or favorable copy. Period. If you find a sponsored placement on this site, it&apos;s a bug — email us and we&apos;ll remove it.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="/" className="display text-sm font-extrabold rounded-md px-6 py-3 tracking-wider" style={{ background: "var(--brand-cta)", color: "var(--brand-cta-fg)" }}>
              Back to rankings
            </a>
            <a href="mailto:editorial@rizehvac.com" className="display text-sm font-extrabold rounded-md px-6 py-3 tracking-wider inline-flex items-center gap-2" style={{ border: "2px solid var(--brand-fg-inverse)", color: "var(--brand-fg-inverse)" }}>
              editorial@rizehvac.com
            </a>
          </div>
        </div>
      </section>

      <SiteFooter brand={BRANDS.editorial} />
    </div>
  );
}
