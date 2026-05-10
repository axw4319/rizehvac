import type { Metadata } from "next";
import { v2Vars } from "@/lib/v2theme";
import { V2Header } from "@/components/v2/V2Header";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { BRANDS } from "@/lib/brands";
import { ArrowRight, Award, Check, ChevronDown, Clock, MapPin, Phone, ShieldCheck, Star, Wrench, X } from "lucide-react";
import Image from "next/image";
import { generateBreadcrumbSchema, generateFAQPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Get Dallas HVAC leads — pay-per-lead from rizehvac",
  description:
    "Pay-per-lead HVAC leads in Dallas-Fort Worth. Exclusive territory, real homeowners, $39-$95 per lead depending on service type. NATE-certified contractors only.",
  alternates: { canonical: "/for-contractors" },
};

const FAQ = [
  { q: "How much do leads cost?", a: "Pricing varies by service type and exclusivity. AC repair leads run $39-$65 per lead, replacement/install leads run $75-$125, and emergency service leads run $95-$160. Exclusive territory pricing is roughly 2× shared territory. Volume discounts kick in at 25+ leads/month. Pricing is locked in 12-month contracts." },
  { q: "Are leads exclusive or shared?", a: "Both options available. Exclusive leads go only to you. Shared leads are sent to up to 3 contractors at the same time (competitive bidding). Exclusive costs more but converts at 2-3× the rate of shared. Most contractors use a mix — exclusive for replacements, shared for repairs." },
  { q: "What service area do you cover?", a: "Currently Dallas-Fort Worth metro: Dallas County, Tarrant County, Collin County, Denton County. Including Plano, Frisco, McKinney, Allen, Arlington, Mansfield, Cedar Hill, Burleson, Lewisville, Flower Mound, Coppell, Aledo, and Weatherford. Expanding to Houston, Austin, San Antonio Q3 2026." },
  { q: "What's required to qualify as a lead provider?", a: "(1) Active Texas TDLR HVAC license. (2) At least one NATE-certified technician. (3) BBB A or A+ rating with no unresolved complaints in past 12 months. (4) Minimum $1M general liability insurance. (5) Clean criminal background check on owner. (6) 10+ Google reviews with 4.0+ rating." },
  { q: "How do leads get delivered?", a: "Real-time via email + SMS within 90 seconds of homeowner submission. We also push to your CRM if you use ServiceTitan, Housecall Pro, Service Fusion, FieldEdge, or Workiz. The lead includes: full name, ZIP, phone, email, service type, urgency, and any free-text the homeowner provided." },
  { q: "What's the credit policy on bad leads?", a: "Standard industry policy. We credit your account 100% for: (1) duplicate leads sent in the same week, (2) wrong-number leads (verifiable disconnect), (3) homeowners outside your declared service area, (4) leads marked spam/test by our QA. Bad-lead credits typically run 8-12% of total volume." },
  { q: "How is this different from Angi or HomeAdvisor?", a: "Three things. (1) Quality bar: we only match homeowners with the 10 contractors that ranked top-10 on RizeScore™ for that service. Angi sends every contractor that paid for the lead. (2) Editorial pre-filter: every lead has read our methodology page and our top-10 list before submitting — they're warmer. (3) Same-fee neutrality: every contractor pays the same per-lead fee, so we have no incentive to favor one in our editorial rankings. Angi's algorithm pushes whoever paid more for placement." },
  { q: "Can I claim my profile if I'm already on the top-10 list?", a: "Yes. If your business is ranked on /hvac/dallas, /ac-repair/dallas, or /hvac-cost/dallas, claim it at /claim-profile. Claimed profiles get: (a) ability to update business info, (b) photo upload, (c) reply to reviews, (d) 14-day free trial of the lead-share program." },
];

const TIERS = [
  {
    name: "Repair leads",
    price: "$39 – $65",
    priceQual: "/ shared lead",
    services: ["AC repair", "Furnace repair", "Heat pump repair", "Diagnostic + minor fix"],
    intent: "Homeowner has an active issue. ~85% close within 7 days.",
  },
  {
    name: "Install / replacement",
    price: "$75 – $125",
    priceQual: "/ shared lead",
    services: ["AC replacement", "Heat pump install", "New construction install", "Whole-system overhaul"],
    intent: "Homeowner is shopping ($8K-$17K average ticket). 12-week sales cycle.",
  },
  {
    name: "Emergency / same-day",
    price: "$95 – $160",
    priceQual: "/ exclusive lead",
    services: ["No-cool / no-heat emergency", "Refrigerant leak", "After-hours service"],
    intent: "Highest urgency. ~92% same-day close. Always exclusive.",
  },
];

export default function ForContractorsPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "For contractors", url: "/for-contractors" },
  ]);
  const faq = generateFAQPageSchema(FAQ);

  return (
    <div style={{ ...v2Vars, background: "var(--brand-bg)", minHeight: "100vh", color: "var(--brand-fg)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <V2Header phone="(214) 414-2500" cityLabel="" />

      <section className="relative overflow-hidden border-b" style={{ background: "var(--brand-bg-inverse)", color: "var(--brand-fg-inverse)", borderColor: "rgba(63, 169, 245, 0.18)" }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/photos/dallas-hero-2400.webp"
            alt="Dallas HVAC technician at work on a Trane condenser"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,31,62,0.85) 0%, rgba(6,19,39,0.95) 100%)" }} />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 py-16 md:py-24 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--brand-cta-bright)" }}>
              For HVAC contractors · DFW only
            </div>
            <h1 className="display text-5xl md:text-7xl leading-[0.95]">
              Real DFW HVAC leads. Editorial-quality only.
            </h1>
            <p className="mt-5 text-base md:text-lg max-w-2xl" style={{ color: "var(--brand-fg-inverse-soft)" }}>
              Homeowners hit our editorial rankings, read your RizeScore™, then submit. By the time they reach you, they&apos;ve been pre-qualified — not auto-blasted to 8 contractors at once.{" "}
              <strong style={{ color: "var(--brand-fg-inverse)" }}>$39-$160 per lead. Exclusive territory available. NATE-certified contractors only.</strong>
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#apply" className="display text-sm font-extrabold rounded-md px-6 py-3 tracking-wider" style={{ background: "var(--brand-cta)", color: "var(--brand-cta-fg)" }}>
                Apply to receive leads
              </a>
              <a href="#how-it-works" className="display text-sm font-extrabold rounded-md px-6 py-3 tracking-wider" style={{ border: "2px solid var(--brand-fg-inverse)", color: "var(--brand-fg-inverse)" }}>
                How it works
              </a>
            </div>
          </div>
          <aside className="md:col-span-5">
            <div className="rounded-xl p-5 md:p-6 shadow-2xl" style={{ background: "var(--brand-surface)", color: "var(--brand-fg)", border: "1px solid var(--brand-border)" }}>
              <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--brand-fg-soft)" }}>
                Get matched with DFW homeowners
              </div>
              <h3 className="display text-2xl mb-1">Apply for lead access</h3>
              <p className="text-sm mb-4" style={{ color: "var(--brand-fg-soft)" }}>
                We accept ~3 new contractors per quarter. Apply below — we&apos;ll respond within 48 hours.
              </p>
              <form>
                <input
                  type="text"
                  placeholder="Business name"
                  className="w-full rounded-md border-2 px-3.5 py-3 text-base mb-3"
                  style={{ borderColor: "var(--brand-border-strong)", background: "var(--brand-surface)" }}
                />
                <input
                  type="text"
                  placeholder="TDLR license number"
                  className="w-full rounded-md border-2 px-3.5 py-3 text-base mb-3"
                  style={{ borderColor: "var(--brand-border-strong)", background: "var(--brand-surface)" }}
                />
                <input
                  type="email"
                  placeholder="Owner / operations email"
                  className="w-full rounded-md border-2 px-3.5 py-3 text-base mb-3"
                  style={{ borderColor: "var(--brand-border-strong)", background: "var(--brand-surface)" }}
                />
                <input
                  type="tel"
                  placeholder="Direct phone"
                  className="w-full rounded-md border-2 px-3.5 py-3 text-base mb-4"
                  style={{ borderColor: "var(--brand-border-strong)", background: "var(--brand-surface)" }}
                />
                <button
                  type="button"
                  className="display w-full rounded-md py-3.5 text-lg font-extrabold inline-flex items-center justify-center gap-2 tracking-wider"
                  style={{ background: "var(--brand-cta)", color: "var(--brand-cta-fg)" }}
                >
                  Submit application <ArrowRight size={18} />
                </button>
              </form>
              <p className="mt-3 text-xs" style={{ color: "var(--brand-fg-soft)" }}>
                NATE certification + active TDLR license + BBB A/A+ rating required.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-14 md:py-20" style={{ background: "var(--brand-surface)" }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--brand-cta)" }}>
            Lead pricing
          </div>
          <h2 className="display text-4xl md:text-5xl mb-5">Pay-per-lead. No subscription, no contracts.</h2>
          <p className="text-base md:text-lg max-w-3xl mb-10" style={{ color: "var(--brand-fg-soft)" }}>
            You pay only for delivered leads, billed weekly. We don&apos;t lock you into multi-month contracts and we don&apos;t charge for impressions, clicks, or unaffected matches. Each lead is delivered with full homeowner contact info + service type + urgency.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {TIERS.map((t) => (
              <div key={t.name} className="rounded-xl p-6 border" style={{ borderColor: "var(--brand-border)", background: "var(--brand-bg)" }}>
                <div className="display text-2xl mb-1">{t.name}</div>
                <div className="display text-4xl mt-3" style={{ color: "var(--brand-cta)" }}>
                  {t.price}
                </div>
                <div className="text-xs mt-1 uppercase font-semibold tracking-wider" style={{ color: "var(--brand-fg-soft)" }}>
                  {t.priceQual}
                </div>
                <p className="text-sm mt-3" style={{ color: "var(--brand-fg-soft)" }}>{t.intent}</p>
                <div className="mt-4 pt-4 border-t" style={{ borderColor: "var(--brand-border)" }}>
                  <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--brand-fg-soft)" }}>
                    Service types
                  </div>
                  <ul className="space-y-1.5">
                    {t.services.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm" style={{ color: "var(--brand-fg-soft)" }}>
                        <Check size={14} style={{ color: "var(--brand-success)", flexShrink: 0, marginTop: 2 }} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-14 md:py-20 border-t" style={{ borderColor: "var(--brand-border)", background: "var(--brand-muted)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--brand-cta)" }}>
            How it works
          </div>
          <h2 className="display text-4xl md:text-5xl mb-5">From homeowner search to your phone in 90 seconds.</h2>
          <div className="grid md:grid-cols-4 gap-3 mt-8">
            {[
              { n: "1", icon: Star, h: "Homeowner finds rizehvac", p: "Searches \"best HVAC Dallas\" / \"AC repair Dallas\" / asks ChatGPT or Perplexity. Lands on /hvac/dallas, reads our editorial methodology + RizeScore™ rankings." },
              { n: "2", icon: ShieldCheck, h: "Homeowner submits", p: "Picks their issue type, enters ZIP + email + phone. We capture intent + urgency + service type. Avg form completion: 47 seconds." },
              { n: "3", icon: Wrench, h: "We match + qualify", p: "Lead routed to top-3 RizeScore™ contractors covering that ZIP. Ineligible leads (out-of-area, duplicate, spam) filtered before sending." },
              { n: "4", icon: Phone, h: "Lead delivered", p: "Email + SMS to your team within 90 seconds, plus CRM push if integrated. Full homeowner contact info + service type + urgency tag." },
            ].map((s) => (
              <div key={s.n} className="rounded-xl p-5 border" style={{ borderColor: "var(--brand-border)", background: "var(--brand-bg)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="display text-2xl tabular-nums" style={{ color: "var(--brand-cta)" }}>{s.n}</span>
                  <s.icon size={18} style={{ color: "var(--brand-cta)" }} />
                </div>
                <h3 className="display text-lg mb-1.5">{s.h}</h3>
                <p className="text-sm" style={{ color: "var(--brand-fg-soft)" }}>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 border-t" style={{ borderColor: "var(--brand-border)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--brand-cta)" }}>
            Compare
          </div>
          <h2 className="display text-4xl md:text-5xl mb-8">vs. Angi, HomeAdvisor, and Yelp leads.</h2>
          <div className="overflow-x-auto rounded-xl border" style={{ borderColor: "var(--brand-border)" }}>
            <table className="w-full text-sm">
              <thead style={{ background: "var(--brand-muted)" }}>
                <tr>
                  {["", "rizehvac", "Angi / HomeAdvisor", "Yelp Ads"].map((h, i) => (
                    <th key={i} scope="col" className={`px-4 py-3 font-semibold uppercase text-xs tracking-wider ${i === 0 ? "text-left" : "text-center"}`} style={{ color: "var(--brand-fg-soft)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Homeowner pre-qualification", "Reads methodology + ranks before submitting", "Auto-blasted to 4-8 contractors", "No qualification — clicks an ad"],
                  ["Lead exclusivity", "Available (exclusive: 2× cost)", "Always shared (3-5 contractors per lead)", "Always shared"],
                  ["Sales cycle pre-warm", "Strong (homeowner read RizeScore + cost data)", "Weak", "None"],
                  ["Delivery speed", "<90 sec via email + SMS + CRM", "5-15 min via app", "Variable (Yelp inbox)"],
                  ["Bad-lead credit policy", "100% credit on duplicate / wrong-number / out-of-area", "Limited", "No credits"],
                  ["Contract term", "Pay-per-lead (no contract)", "Annual contract typical", "Monthly ad spend"],
                  ["Editorial rank-for-money", "Never (same fee for all top-10 contractors)", "Yes — pay-to-rank algo", "Yes — ad placement = ranking"],
                ].map((row, ri) => (
                  <tr key={ri} style={{ borderTop: ri === 0 ? "none" : "1px solid var(--brand-border)" }}>
                    {row.map((cell, ci) => (
                      <td key={ci} className={`px-4 py-3 align-top ${ci === 0 ? "text-left font-semibold" : "text-center"}`} style={{ color: ci === 0 ? "var(--brand-fg)" : "var(--brand-fg-soft)" }}>
                        {ci === 1 && cell.startsWith("Reads") ? <Check size={16} className="inline mr-1" style={{ color: "var(--brand-success)" }} /> : null}
                        {ci > 1 && (cell.includes("Auto-blasted") || cell.includes("Always shared") || cell.includes("Limited") || cell.includes("No credits") || cell.includes("Yes —") || cell === "None" || cell === "Weak") ? (
                          <X size={16} className="inline mr-1" style={{ color: "var(--brand-danger)", opacity: 0.7 }} />
                        ) : null}
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 border-t" style={{ borderColor: "var(--brand-border)", background: "var(--brand-muted)" }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--brand-cta)" }}>
            Eligibility
          </div>
          <h2 className="display text-4xl md:text-5xl mb-5">Who qualifies for the lead-share program.</h2>
          <p className="text-base md:text-lg mb-8" style={{ color: "var(--brand-fg-soft)" }}>
            We&apos;re selective. We want homeowners to have a great experience with whichever contractor we match them to — that protects our editorial reputation. Required:
          </p>
          <ul className="space-y-3">
            {[
              "Active Texas TDLR HVAC license (verify at tdlr.texas.gov)",
              "At least one NATE-certified technician on staff (verify at NATEx.org)",
              "BBB A or A+ rating with no unresolved complaints in past 12 months",
              "Minimum $1M general liability insurance + workers' comp",
              "Clean criminal background check on owner/operator",
              "10+ Google reviews with 4.0+ rating",
              "EPA Section 608 Universal certification on technicians (refrigerant handling)",
              "Service area in Dallas, Tarrant, Collin, or Denton County",
            ].map((req) => (
              <li key={req} className="flex items-start gap-3 text-base" style={{ color: "var(--brand-fg-soft)" }}>
                <Award size={18} style={{ color: "var(--brand-cta)", flexShrink: 0, marginTop: 3 }} />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="apply" className="py-14 md:py-20 border-t" style={{ background: "var(--brand-bg-inverse)", color: "var(--brand-fg-inverse)", borderColor: "rgba(63, 169, 245, 0.18)" }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="display text-4xl md:text-5xl mb-5">Ready to start receiving leads?</h2>
          <p className="text-base md:text-lg mb-8" style={{ color: "var(--brand-fg-inverse-soft)" }}>
            Apply with your TDLR license number. We&apos;ll respond within 48 hours with next steps. Average new contractor receives their first lead within 7 days of approval.
          </p>
          <a href="mailto:contractors@rizehvac.com?subject=DFW%20Lead%20Access%20Application" className="display text-base md:text-lg font-extrabold rounded-md px-8 py-4 tracking-wider inline-flex items-center gap-2" style={{ background: "var(--brand-cta)", color: "var(--brand-cta-fg)" }}>
            Email contractors@rizehvac.com <ArrowRight size={18} />
          </a>
          <div className="mt-6 inline-flex items-center gap-2 text-sm" style={{ color: "var(--brand-fg-inverse-soft)" }}>
            <Clock size={14} />
            48-hour response time · 7-day onboarding · No setup fee
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 border-t" style={{ borderColor: "var(--brand-border)" }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="display text-3xl md:text-4xl mb-6">Frequently asked questions</h2>
          <div>
            {FAQ.map((f, i) => (
              <details key={i} className="group py-5 border-b" style={{ borderColor: "var(--brand-border)" }}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <h3 className="display text-xl pr-4" style={{ color: "var(--brand-fg)" }}>{f.q}</h3>
                  <ChevronDown size={22} className="group-open:rotate-180 transition-transform shrink-0 mt-1" style={{ color: "var(--brand-cta)" }} />
                </summary>
                <div className="mt-3 text-base leading-relaxed" style={{ color: "var(--brand-fg-soft)" }}>{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter brand={BRANDS.editorial} />
    </div>
  );
}
