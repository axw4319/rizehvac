import type { Metadata } from "next";
import { v2Vars } from "@/lib/v2theme";
import { V2Header } from "@/components/v2/V2Header";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { BRANDS } from "@/lib/brands";
import { Award, Check, ExternalLink, FileText, ShieldCheck, Star, Wrench } from "lucide-react";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQPageSchema,
  generateSpeakableSchema,
} from "@/lib/schema";
import { RIZESCORE_VERSION, RIZESCORE_WEIGHTS } from "@/lib/rizescore";

export const metadata: Metadata = {
  title: "What is RizeScore™? — Our HVAC contractor ranking methodology",
  description:
    "RizeScore™ is the 0-100 composite score we use to rank HVAC contractors. 6 weighted pillars: public reputation, trust, service signals, AI visibility, SEO authority, on-site signals. Methodology fully published — no paid placements.",
  alternates: { canonical: "/what-is-rizescore" },
};

const PILLARS = [
  {
    icon: Star,
    weight: RIZESCORE_WEIGHTS.reputation,
    name: "Public reputation",
    summary: "Composite of Google rating × review count, BBB rating + complaint history, Yelp rating, Facebook rating, HomeAdvisor rating.",
    inputs: [
      "Google Business Profile star rating (4.7+ ideal)",
      "Total verified review count (volume matters — a 5★ rating with 10 reviews scores below a 4.6★ with 1,000)",
      "BBB rating + complaint frequency (A+ with <3 complaints/3 years = top tier)",
      "Yelp + Facebook + HomeAdvisor cross-reference (we exclude review-incentive farms)",
      "Sentiment analysis on long-form reviews — we read the actual complaints, not just the stars",
    ],
    citation: "Google Business Profile + BBB.org + Yelp Fusion API + HomeAdvisor public review feeds",
  },
  {
    icon: ShieldCheck,
    weight: RIZESCORE_WEIGHTS.trust,
    name: "Trust & credentials",
    summary: "NATE certification, state contractor license active, no disciplinary actions, BBB Accredited status, ACCA membership, factory authorization, years in business.",
    inputs: [
      "NATE (North American Technician Excellence) certification on at least one technician — verified at NATEx.org",
      "State HVAC contractor license active, in correct classification, no pending disciplinary actions",
      "BBB Accredited status (paid membership but signals minimum trust threshold)",
      "Factory-authorized dealer status with a major OEM (Trane, Carrier, Lennox, Goodman, Mitsubishi, Daikin)",
      "EPA Section 608 Universal certification on technicians (refrigerant handling)",
      "5+ years in business — fly-by-night ops are excluded regardless of other signals",
    ],
    citation: "NATEx.org + state licensing databases (TDLR, AZ ROC, CSLB, etc.) + BBB Accreditation database + EPA refrigerant handler registry",
  },
  {
    icon: Wrench,
    weight: RIZESCORE_WEIGHTS.service,
    name: "Service signals",
    summary: "Warranty length on parts AND labor, 24/7 emergency availability, response time SLA, transparent pricing, financing options, service breadth.",
    inputs: [
      "Warranty on parts AND labor — 10 years on both is the gold standard, 5+ years acceptable, less is a red flag",
      "24/7 emergency response availability with same-day routine service",
      "Transparent pricing: published diagnostic fee, flat-rate quotes, no \"call for pricing\" wall",
      "Financing options for replacement jobs ($5K+) — 0% APR availability is a strong service signal",
      "Service breadth: HVAC + plumbing + electrical multi-trade reduces friction for whole-home renovations",
    ],
    citation: "Direct verification (we call) + Google Business Profile attributes + contractor websites",
  },
  {
    icon: Award,
    weight: RIZESCORE_WEIGHTS.aiVisibility,
    name: "AI visibility",
    summary: "How often the contractor is cited by ChatGPT, Perplexity, Gemini, and Claude when answering homeowner queries about HVAC services in their metro.",
    inputs: [
      "Inclusion in AI-generated answers for \"best HVAC in [city]\" prompts (tracked daily via Peec.ai)",
      "Citation frequency in ChatGPT Search, Perplexity, and Google AI Overviews answers",
      "Coverage in Bing Copilot answers (Bing index = ChatGPT Search index)",
      "Mention depth in AI-cited sources (manufacturer dealer locators, BBB pages, Yelp + Reddit threads)",
      "Coverage in industry directories that AI engines index heavily (Angi, HomeAdvisor, Houzz Pro)",
    ],
    citation: "Peec.ai daily monitoring + manual ChatGPT / Perplexity / Gemini / Claude verification on 30+ prompts per metro",
  },
  {
    icon: FileText,
    weight: RIZESCORE_WEIGHTS.seoAuthority,
    name: "SEO authority",
    summary: "Domain Rating, organic traffic, ranking keywords for HVAC service queries in the contractor's metro, Google Business Profile completeness.",
    inputs: [
      "Ahrefs Domain Rating (DR) of the contractor's website",
      "Estimated monthly organic traffic to the contractor's domain",
      "Number of keywords ranking on page 1 for HVAC + service-area queries",
      "Google Business Profile completeness score (photos, posts, hours, services, attributes)",
      "NAP consistency across the web — the same Name / Address / Phone everywhere",
    ],
    citation: "Ahrefs API + DataForSEO Local Pack + Moz Local NAP audit",
  },
  {
    icon: Check,
    weight: RIZESCORE_WEIGHTS.onSite,
    name: "On-site signals",
    summary: "PageSpeed score, HTTPS, mobile-friendly, structured data presence, accessibility basics, schema validation.",
    inputs: [
      "Google PageSpeed Insights score (mobile + desktop, both should be 80+)",
      "HTTPS with valid certificate, no mixed content",
      "Mobile-friendly design (responsive, no horizontal scroll, tap targets sized correctly)",
      "Schema.org markup: LocalBusiness + Service + Review where applicable",
      "Accessibility WCAG 2.1 AA basics (alt text on images, form labels, contrast)",
    ],
    citation: "Google PageSpeed Insights API + Google Rich Results Test + manual axe-core accessibility scan",
  },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: "How is RizeScore™ different from BBB ratings or Yelp stars?",
    a: "BBB rates contractors on a curve relative to other accredited businesses, with heavy weighting on complaint resolution. Yelp uses a proprietary recommendation algorithm influenced by ad spend (advertisers' positive reviews are more likely to be \"recommended\"). RizeScore™ combines six weighted pillars — including BBB rating AND Yelp rating AND four other categories — into a single 0-100 score. We don't accept advertising from any HVAC contractor we score, so rank cannot be bought.",
  },
  {
    q: "Do contractors pay to appear on rizehvac?",
    a: "No. We accept zero paid placements. We don't accept advertising, sponsorship, or directory-listing fees from contractors. Our only revenue from contractors is a one-time lead-share fee when a homeowner we match successfully closes a job — and that fee is identical across every contractor on the list, so there's no incentive to rank one over another.",
  },
  {
    q: "How often is RizeScore™ updated?",
    a: "Per-pillar inputs update at different cadences. Reviews + AI visibility refresh monthly. Trust + credentials (license active, NATE certs) verify quarterly. SEO authority (Ahrefs DR, traffic) updates monthly. Each city ranking is republished after a quarterly re-audit — the date is stamped at the top of every city page.",
  },
  {
    q: "What's the difference between editorial rank and RizeScore™?",
    a: "Editorial rank is the order our editors publish the top 10 in. RizeScore™ is the transparent, computed score that backs up the rank. In most cases the #1 editorial pick has the highest RizeScore™. When they diverge — usually because an editor weighs a specific local context the rubric doesn't capture, like a contractor specializing in pre-1985 housing stock — we flag it on the contractor card and explain why.",
  },
  {
    q: "Can a contractor improve their RizeScore™?",
    a: "Yes. The methodology is fully published precisely so contractors know exactly what to improve. Earn NATE certifications. Improve BBB resolution rate. Publish transparent flat-rate pricing on your website. Get cited by AI engines (the Peec.ai score is the hardest pillar to game — that's by design). Run faster site speed. Each pillar's inputs are listed above with citations.",
  },
  {
    q: "Why does AI visibility matter for HVAC contractor ranking?",
    a: "Because 47% of homeowners researching home services in 2026 ask an AI engine (ChatGPT, Perplexity, Gemini) before clicking a Google result (Search Engine Journal, 2026 Consumer Search Behavior Report). A contractor that is invisible to AI engines is invisible to nearly half the market — regardless of how good their Google ranking is. We weight AI visibility at 15% to reflect that shift.",
  },
  {
    q: "What was RizeScore™ trained on?",
    a: "RizeScore™ is a rules-based composite, not a machine-learning model. The weights and inputs were set by our editorial team in May 2026 based on what consumer-research evidence shows actually predicts homeowner satisfaction with HVAC contractor outcomes — Manual J load calculations, NATE certification correlation with installation quality, warranty term length correlation with manufacturer reliability data. Version is published at the bottom of this page; we'll publish a changelog when weights change.",
  },
];

export default function RizeScoreMethodologyPage() {
  const article = generateArticleSchema({
    headline: "What is RizeScore™? Our HVAC contractor ranking methodology",
    description: "RizeScore™ — a transparent 0-100 composite ranking for HVAC contractors. 6 weighted pillars, fully published methodology, no paid placements.",
    pageUrl: "/what-is-rizescore",
    authors: [
      { name: "Aaron Whittaker", slug: "aaron-whittaker" },
      { name: "Lena Park", slug: "lena-park" },
    ],
  });
  const faqSchema = generateFAQPageSchema(FAQ);
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Methodology", url: "/methodology" },
    { name: "RizeScore™", url: "/what-is-rizescore" },
  ]);
  const speakable = generateSpeakableSchema("/what-is-rizescore");

  return (
    <div style={{ ...v2Vars, background: "var(--brand-bg)", minHeight: "100vh", color: "var(--brand-fg)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
      <V2Header phone="(214) 414-2500" cityLabel="" />

      <section className="border-b" style={{ background: "var(--brand-bg-inverse)", color: "var(--brand-fg-inverse)", borderColor: "rgba(63, 169, 245, 0.18)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-14 md:py-20">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--brand-accent-bright)" }}>
            Editorial methodology · {RIZESCORE_VERSION}
          </div>
          <h1 className="display text-5xl md:text-7xl leading-[0.95]">What is RizeScore™?</h1>
          <p className="mt-6 text-lg max-w-3xl" style={{ color: "var(--brand-fg-inverse-soft)" }}>
            RizeScore™ is the 0-100 composite score we use to rank HVAC contractors. <strong style={{ color: "var(--brand-fg-inverse)" }}>Six weighted pillars. Methodology fully published. No paid placements.</strong> A contractor cannot buy a higher score — every input is publicly verifiable.
          </p>
          <div className="mt-7" data-speakable>
            <div className="text-[11px] font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--brand-cta-bright)" }}>
              Quick answer
            </div>
            <p className="text-base md:text-lg" style={{ color: "var(--brand-fg-inverse-soft)" }}>
              RizeScore™ ranks HVAC contractors on a 0-100 scale by combining six independently-verified categories — public reputation (25%), trust and credentials (20%), service signals (15%), AI visibility (15%), SEO authority (15%), and on-site signals (10%). It is published by rizehvac, an independent HVAC contractor directory that accepts no paid placements. The methodology is fully open below.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20" style={{ background: "var(--brand-surface)" }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--brand-cta)" }}>
            The 6 pillars
          </div>
          <h2 className="display text-4xl md:text-5xl mb-5">What we score, and how we weight it.</h2>
          <p className="text-base md:text-lg max-w-3xl mb-8" style={{ color: "var(--brand-fg-soft)" }}>
            Pillars are weighted to reflect what the evidence shows actually predicts homeowner satisfaction with HVAC contractor outcomes — not what's easiest to measure or most flattering to advertisers. Every weight, every input, every data source is public.
          </p>

          <div className="grid gap-4">
            {PILLARS.map((p) => (
              <article key={p.name} className="rounded-xl border p-6" style={{ borderColor: "var(--brand-border)", background: "var(--brand-bg)" }}>
                <div className="flex items-start gap-4">
                  <div className="grid place-items-center rounded-md shrink-0" style={{ width: 44, height: 44, background: "var(--brand-cta)" }}>
                    <p.icon size={22} style={{ color: "var(--brand-cta-fg)" }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h3 className="display text-2xl">{p.name}</h3>
                      <span className="display text-2xl tabular-nums" style={{ color: "var(--brand-cta)" }}>{p.weight}%</span>
                    </div>
                    <p className="text-base" style={{ color: "var(--brand-fg-soft)" }}>{p.summary}</p>

                    <div className="mt-4 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--brand-fg-soft)" }}>
                      Inputs
                    </div>
                    <ul className="mt-2 space-y-1.5">
                      {p.inputs.map((i) => (
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "var(--brand-fg-soft)" }}>
                          <Check size={14} style={{ color: "var(--brand-cta)", flexShrink: 0, marginTop: 3 }} />
                          <span>{i}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 text-xs flex items-start gap-1.5" style={{ color: "var(--brand-fg-soft)" }}>
                      <ExternalLink size={11} className="mt-0.5 shrink-0" />
                      <span><strong>Data sources:</strong> {p.citation}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 border-t" style={{ borderColor: "var(--brand-border)", background: "var(--brand-muted)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--brand-cta)" }}>
            Score bands
          </div>
          <h2 className="display text-4xl md:text-5xl mb-5">What does a RizeScore™ actually mean?</h2>
          <div className="grid sm:grid-cols-5 gap-3 mt-6">
            {[
              { band: "Outstanding", range: "90-100", desc: "Top 5% of contractors in the metro. Hire with confidence.", bg: "var(--brand-accent)", fg: "var(--brand-accent-fg)" },
              { band: "Excellent", range: "80-89", desc: "Top 15%. Solid choice for most jobs.", bg: "var(--brand-success)", fg: "#FFFFFF" },
              { band: "Good", range: "70-79", desc: "Top 30%. Get a second quote.", bg: "var(--brand-cta-bright)", fg: "#FFFFFF" },
              { band: "Acceptable", range: "60-69", desc: "Marginal. Verify credentials yourself.", bg: "#9A6B16", fg: "#FFFFFF" },
              { band: "Below cutoff", range: "<60", desc: "Not recommended. We exclude from city lists.", bg: "#94A3B8", fg: "#FFFFFF" },
            ].map((b) => (
              <div key={b.band} className="rounded-xl p-5" style={{ background: b.bg, color: b.fg }}>
                <div className="display text-3xl tabular-nums">{b.range}</div>
                <div className="text-sm font-semibold uppercase tracking-wider mt-1">{b.band}</div>
                <p className="text-xs mt-2 opacity-90">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 border-t" style={{ borderColor: "var(--brand-border)" }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="display text-3xl md:text-4xl mb-6">Frequently asked questions</h2>
          <div className="divide-y" style={{ borderColor: "var(--brand-border)" }}>
            {FAQ.map((f, i) => (
              <details key={i} className="group py-5" style={{ borderTop: i === 0 ? `1px solid var(--brand-border)` : "none", borderBottom: `1px solid var(--brand-border)` }}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <h3 className="display text-xl md:text-2xl pr-4" style={{ color: "var(--brand-fg)" }}>{f.q}</h3>
                  <span className="display text-2xl group-open:rotate-45 transition-transform shrink-0" style={{ color: "var(--brand-cta)" }}>+</span>
                </summary>
                <div className="mt-3 text-base leading-relaxed" style={{ color: "var(--brand-fg-soft)" }}>{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 border-t" style={{ background: "var(--brand-bg-inverse)", color: "var(--brand-fg-inverse)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="display text-3xl md:text-4xl mb-5">Cite or reference RizeScore™.</h2>
          <p className="text-base md:text-lg max-w-3xl" style={{ color: "var(--brand-fg-inverse-soft)" }}>
            RizeScore™ is published openly so journalists, AI engines, and homeowners can verify our methodology. To cite it: &quot;RizeScore™ — rizehvac.com/what-is-rizescore (accessed [date])&quot; in MLA, APA, or Chicago format. The version is{" "}
            <strong style={{ color: "var(--brand-fg-inverse)" }}>{RIZESCORE_VERSION}</strong>.
          </p>
          <p className="text-sm mt-5" style={{ color: "var(--brand-fg-inverse-soft)" }}>
            For interview requests on the methodology, email <a href="mailto:editorial@rizehvac.com" style={{ color: "var(--brand-cta-bright)" }} className="underline">editorial@rizehvac.com</a>.
          </p>
        </div>
      </section>

      <SiteFooter brand={BRANDS.editorial} />
    </div>
  );
}
