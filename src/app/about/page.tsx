import type { Metadata } from "next";
import { v2Vars } from "@/lib/v2theme";
import { V2Header } from "@/components/v2/V2Header";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { BRANDS } from "@/lib/brands";
import { Award, FileText, Phone, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About rizehvac",
  description:
    "rizehvac is an independent HVAC contractor directory. We rank by NATE certification, BBB rating, warranty terms, and verified reviews — never by who pays.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div style={{ ...v2Vars, background: "var(--brand-bg)", minHeight: "100vh", color: "var(--brand-fg)" }}>
      <V2Header phone="(520) 207-2500" cityLabel="" />

      <section className="border-b" style={{ background: "var(--brand-bg-inverse)", color: "var(--brand-fg-inverse)", borderColor: "rgba(63, 169, 245, 0.18)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-14 md:py-20">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--brand-accent-bright)" }}>
            About us
          </div>
          <h1 className="display text-5xl md:text-7xl leading-[0.95]">We do the HVAC research so you don&apos;t have to.</h1>
          <p className="mt-6 text-lg max-w-3xl" style={{ color: "var(--brand-fg-inverse-soft)" }}>
            Most HVAC directories rank by who pays. We rank by who we&apos;d hire. That&apos;s the entire premise — and it&apos;s why we exist.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20" style={{ background: "var(--brand-surface)" }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="display text-3xl md:text-4xl mb-5">The problem we&apos;re solving</h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--brand-fg-soft)" }}>
            When your AC dies on a 110° day, you have three bad options. Yelp and Angi rank contractors who pay them — search results bear no relation to who actually does good work. BBB ranks alphabetically, so you get every Acme HVAC at the top regardless of quality. Reddit is a coin flip — sometimes great advice, sometimes a contractor astroturfing their own thread.
          </p>
          <p className="text-lg leading-relaxed mt-5" style={{ color: "var(--brand-fg-soft)" }}>
            None of these tell you what you actually need to know: <strong style={{ color: "var(--brand-fg)" }}>which contractor in your city would I hire if I lived there?</strong>
          </p>
          <p className="text-lg leading-relaxed mt-5" style={{ color: "var(--brand-fg-soft)" }}>
            That&apos;s the question we answer. Every list is hand-built from public records (state licensing, BBB filings, NATE certifications, EPA refrigerant handler registry, county permit data) plus our own review of every contractor&apos;s installation portfolio. Our fact-checker is a NATE-certified Master Technician who&apos;s been installing HVAC in desert markets for 22 years.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 border-t" style={{ background: "var(--brand-muted)", borderColor: "var(--brand-border)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="display text-3xl md:text-4xl mb-8">What we do — and don&apos;t do.</h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-xl p-6 border" style={{ background: "var(--brand-bg)", borderColor: "var(--brand-border)" }}>
              <ShieldCheck size={22} style={{ color: "var(--brand-cta)" }} />
              <div className="display text-2xl mt-3">What we do</div>
              <ul className="mt-3 space-y-2 text-sm" style={{ color: "var(--brand-fg-soft)" }}>
                <li>• Rank contractors by 8 weighted criteria, all visible</li>
                <li>• Cross-check 14 public data sources per contractor</li>
                <li>• Re-audit every list quarterly</li>
                <li>• Match homeowners with our top 3 picks for free</li>
                <li>• Take a one-time lead-share fee on closed jobs (same across every contractor on the list)</li>
              </ul>
            </div>
            <div className="rounded-xl p-6 border" style={{ background: "var(--brand-bg)", borderColor: "var(--brand-border)" }}>
              <Award size={22} style={{ color: "var(--brand-cta)" }} />
              <div className="display text-2xl mt-3">What we don&apos;t do</div>
              <ul className="mt-3 space-y-2 text-sm" style={{ color: "var(--brand-fg-soft)" }}>
                <li>• Accept paid placements (ever)</li>
                <li>• Boost a contractor&apos;s rank for buying ads</li>
                <li>• Allow contractors to write their own bios</li>
                <li>• Charge contractors to be on the list</li>
                <li>• Hide our methodology behind a paywall</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 border-t" style={{ borderColor: "var(--brand-border)" }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="display text-3xl md:text-4xl mb-5">Where we are today.</h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--brand-fg-soft)" }}>
            We&apos;re live in 10 US cities at launch — Tucson is the deepest list, with 9 more publishing as our research wraps. Each list takes 40+ hours of editorial work. We&apos;d rather ship one good list than ten thin ones.
          </p>
          <p className="text-lg leading-relaxed mt-5" style={{ color: "var(--brand-fg-soft)" }}>
            If your city isn&apos;t covered yet, tell us — we prioritize cities by inbound interest. Email us with the metro you live in.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="/methodology" className="display text-sm font-extrabold rounded-md px-6 py-3 tracking-wider inline-flex items-center gap-2" style={{ background: "var(--brand-cta)", color: "var(--brand-cta-fg)" }}>
              <FileText size={14} /> Read our methodology
            </a>
            <a href="mailto:editorial@rizehvac.com" className="display text-sm font-extrabold rounded-md px-6 py-3 tracking-wider inline-flex items-center gap-2" style={{ border: "2px solid var(--brand-fg)", color: "var(--brand-fg)" }}>
              editorial@rizehvac.com
            </a>
            <a href="tel:5202072500" className="display text-sm font-extrabold rounded-md px-6 py-3 tracking-wider inline-flex items-center gap-2" style={{ border: "2px solid var(--brand-fg)", color: "var(--brand-fg)" }}>
              <Phone size={14} /> (520) 207-2500
            </a>
          </div>
        </div>
      </section>

      <SiteFooter brand={BRANDS.editorial} />
    </div>
  );
}
