import type { Metadata } from "next";
import { v2Vars } from "@/lib/v2theme";
import { V2Header } from "@/components/v2/V2Header";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { BRANDS } from "@/lib/brands";
import { ArrowRight, Award, Camera, MessageSquare, Pencil, ShieldCheck } from "lucide-react";
import { generateBreadcrumbSchema, generateFAQPageSchema } from "@/lib/schema";
import { DALLAS_CONTRACTORS } from "@/data/dallas-contractors";

export const metadata: Metadata = {
  title: "Claim your rizehvac contractor profile",
  description:
    "If your HVAC business appears on rizehvac's editorial rankings, claim your profile to update info, upload photos, reply to reviews, and access lead-share program.",
  alternates: { canonical: "/claim-profile" },
};

const FAQ = [
  { q: "Why should I claim my profile?", a: "Four benefits. (1) Update your business info (hours, services, photos, certifications). (2) Reply to reviews — homeowners weight reply quality heavily. (3) Get a 14-day free trial of our lead-share program. (4) Add a verified badge to your profile, which lifts conversion ~30% in our match-form data." },
  { q: "How do I prove I own the business?", a: "Two-step verification. (1) We send a postcard to your TDLR-registered business address with a 6-digit code (3-day delivery). (2) You enter the code at /claim-profile/verify. Once verified, you have admin access to your profile. Optional faster path: we call your TDLR-registered business phone number on file with a verbal verification code (15 minutes if you pick up)." },
  { q: "Does claiming change my RizeScore™?", a: "Indirectly, yes. Claimed profiles tend to have more complete information (hours, photos, certifications visible), which lifts the On-site Signals pillar (10% of total score). It does NOT lift the Public Reputation, Trust, or Service pillars on its own. Best way to improve those is to earn more verified reviews, maintain BBB A+ standing, and keep your TDLR license clean." },
  { q: "Can I be removed from the directory if I claim?", a: "No. Claim status doesn't affect inclusion. The only ways to be removed: (1) TDLR license becomes inactive. (2) BBB rating drops below B. (3) Three or more verified homeowner complaints in 12 months. (4) You request removal in writing (we honor this within 7 days)." },
  { q: "Is there a fee?", a: "Claiming is free. The optional lead-share program is pay-per-lead ($39-$160 per lead — see /for-contractors)." },
];

export default function ClaimProfilePage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Claim your profile", url: "/claim-profile" },
  ]);
  const faq = generateFAQPageSchema(FAQ);

  return (
    <div style={{ ...v2Vars, background: "var(--brand-bg)", minHeight: "100vh", color: "var(--brand-fg)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <V2Header phone="(214) 414-2500" cityLabel="" />

      <section className="border-b" style={{ background: "var(--brand-bg-inverse)", color: "var(--brand-fg-inverse)", borderColor: "rgba(63, 169, 245, 0.18)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-16">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--brand-accent-bright)" }}>
            For listed HVAC contractors
          </div>
          <h1 className="display text-5xl md:text-7xl leading-[0.95]">Claim your profile.</h1>
          <p className="mt-6 text-lg max-w-3xl" style={{ color: "var(--brand-fg-inverse-soft)" }}>
            Your business is on rizehvac.com&apos;s editorial rankings. Claiming gives you control of the listing — update info, upload photos, reply to reviews, and unlock lead-share access. <strong style={{ color: "var(--brand-fg-inverse)" }}>Free.</strong>
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20" style={{ background: "var(--brand-surface)" }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="display text-3xl md:text-4xl mb-6" style={{ color: "var(--brand-fg)" }}>Find your business</h2>

          <form className="rounded-xl border p-6 mb-8" style={{ borderColor: "var(--brand-border)", background: "var(--brand-bg)" }}>
            <label htmlFor="biz-name" className="block text-sm font-semibold mb-2" style={{ color: "var(--brand-fg)" }}>
              Business name (as it appears on your TDLR license)
            </label>
            <input
              id="biz-name"
              type="text"
              placeholder="e.g. Berkeys Air Conditioning, Plumbing & Electrical"
              className="w-full rounded-md border-2 px-3.5 py-3 text-base mb-3"
              style={{ borderColor: "var(--brand-border-strong)", background: "var(--brand-surface)" }}
            />
            <label htmlFor="tdlr-license" className="block text-sm font-semibold mb-2" style={{ color: "var(--brand-fg)" }}>
              TDLR license number
            </label>
            <input
              id="tdlr-license"
              type="text"
              placeholder="e.g. TACLA00012345C"
              className="w-full rounded-md border-2 px-3.5 py-3 text-base mb-3"
              style={{ borderColor: "var(--brand-border-strong)", background: "var(--brand-surface)" }}
            />
            <label htmlFor="business-email" className="block text-sm font-semibold mb-2" style={{ color: "var(--brand-fg)" }}>
              Business email (must match domain on file with TDLR)
            </label>
            <input
              id="business-email"
              type="email"
              placeholder="owner@yourbusiness.com"
              className="w-full rounded-md border-2 px-3.5 py-3 text-base mb-4"
              style={{ borderColor: "var(--brand-border-strong)", background: "var(--brand-surface)" }}
            />
            <button
              type="button"
              className="display w-full rounded-md py-3.5 text-lg font-extrabold inline-flex items-center justify-center gap-2 tracking-wider"
              style={{ background: "var(--brand-cta)", color: "var(--brand-cta-fg)" }}
            >
              Start claim verification <ArrowRight size={18} />
            </button>
            <p className="mt-3 text-xs" style={{ color: "var(--brand-fg-soft)" }}>
              We&apos;ll send a postcard to your TDLR-registered business address (3 business days) OR call your TDLR-registered phone (15 min) for verification.
            </p>
          </form>

          <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--brand-fg-soft)" }}>
            Currently listed on rizehvac
          </div>
          <ul className="space-y-2 mb-8">
            {DALLAS_CONTRACTORS.slice(0, 10).map((c) => (
              <li key={c.rank} className="text-sm" style={{ color: "var(--brand-fg-soft)" }}>
                <strong style={{ color: "var(--brand-fg)" }}>#{c.rank}</strong> {c.name} — <a href={`/hvac/dallas#rank-${c.rank}`} style={{ color: "var(--brand-cta)" }} className="underline">view listing</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 md:py-20 border-t" style={{ borderColor: "var(--brand-border)", background: "var(--brand-muted)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--brand-cta)" }}>
            What you unlock
          </div>
          <h2 className="display text-4xl md:text-5xl mb-8">Claim benefits.</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Pencil, h: "Edit your listing", p: "Update business hours, services, certifications, phone number, address. Changes go live within 24 hours of editorial review." },
              { icon: Camera, h: "Upload photos", p: "Up to 30 photos: tech crew, work portfolio, certifications, vehicles, office. Photos appear in your profile + search results." },
              { icon: MessageSquare, h: "Reply to reviews", p: "Respond to every verified review. Homeowners weight reply quality + tone heavily — well-handled negative reviews can lift trust more than 5-star reviews." },
              { icon: ShieldCheck, h: "Verified badge", p: "Your listing displays a Verified Owner badge. Match-form conversion lifts ~30% with the badge present." },
              { icon: Award, h: "Lead-share program access", p: "14-day free trial of pay-per-lead leads ($39-$160 per lead). No contract — keep going if it works, stop if it doesn't." },
              { icon: ArrowRight, h: "RizeScore™ improvement guidance", p: "Quarterly report on which pillar(s) are pulling down your score, with specific actions to lift it (e.g., \"Add NATE certification documentation to lift Trust pillar 18 points\")." },
            ].map((b) => (
              <div key={b.h} className="rounded-xl p-5 border" style={{ borderColor: "var(--brand-border)", background: "var(--brand-bg)" }}>
                <b.icon size={22} style={{ color: "var(--brand-cta)" }} />
                <h3 className="display text-lg mt-3 mb-1.5">{b.h}</h3>
                <p className="text-sm" style={{ color: "var(--brand-fg-soft)" }}>{b.p}</p>
              </div>
            ))}
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
                  <span className="display text-2xl group-open:rotate-45 transition-transform shrink-0" style={{ color: "var(--brand-cta)" }}>+</span>
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
