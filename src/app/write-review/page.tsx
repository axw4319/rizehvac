import type { Metadata } from "next";
import { v2Vars } from "@/lib/v2theme";
import { V2Header } from "@/components/v2/V2Header";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { BRANDS } from "@/lib/brands";
import { ArrowRight, Camera, ShieldCheck, Star, Upload } from "lucide-react";
import { generateBreadcrumbSchema, generateFAQPageSchema } from "@/lib/schema";
import { DALLAS_CONTRACTORS } from "@/data/dallas-contractors";

export const metadata: Metadata = {
  title: "Write a review of a Dallas HVAC contractor",
  description:
    "Share your experience with a Dallas-Fort Worth HVAC contractor. Verified reviews appear on rizehvac.com and feed into the contractor's RizeScore™. Required: receipt or job-completion proof.",
  alternates: { canonical: "/write-review" },
};

const FAQ = [
  { q: "Why are reviews verified?", a: "Fake reviews destroy the value of a directory. We require proof of service — a redacted receipt, job photo with date stamp, email confirmation, or invoice — so we can confirm the homeowner actually hired the contractor. Verification typically takes 24-48 hours." },
  { q: "Are anonymous reviews allowed?", a: "Reviews are signed with first name + last initial only (e.g., \"Maria R.\"). Your full name, email, and address stay private and are never shown publicly. We use them only for verification." },
  { q: "Can I edit or delete my review later?", a: "Yes. Email reviews@rizehvac.com from the same address you submitted with. Edits + deletions process within 7 business days." },
  { q: "Will the contractor see who I am?", a: "Only your first name + last initial as it appears publicly. We never share your contact info with the contractor." },
  { q: "What if my review is critical?", a: "We publish negative reviews if they meet the verification standard. Critical-but-honest reviews are some of our most-cited content — they help future homeowners avoid bad experiences. The contractor gets a chance to respond publicly via their claimed profile." },
  { q: "Can a contractor pay to suppress my review?", a: "No. Contractors cannot remove, edit, or pay to suppress reviews on rizehvac. We've never accepted such a payment and never will. The only ways a review comes down: (1) you request removal, (2) it fails verification, (3) it violates the publishing rules (defamation, doxxing, etc.)." },
];

export default function WriteReviewPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Write a review", url: "/write-review" },
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
            For homeowners
          </div>
          <h1 className="display text-5xl md:text-7xl leading-[0.95]">Write a review.</h1>
          <p className="mt-6 text-lg max-w-3xl" style={{ color: "var(--brand-fg-inverse-soft)" }}>
            Share your experience with a Dallas-Fort Worth HVAC contractor. Verified reviews feed into the contractor&apos;s RizeScore™ and help future homeowners make better decisions. <strong style={{ color: "var(--brand-fg-inverse)" }}>Takes ~5 minutes. Verification 24-48 hours.</strong>
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20" style={{ background: "var(--brand-surface)" }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <form className="rounded-xl border p-6 md:p-7" style={{ borderColor: "var(--brand-border)", background: "var(--brand-bg)" }}>
            <h2 className="display text-2xl mb-1" style={{ color: "var(--brand-fg)" }}>Tell us about your service</h2>
            <p className="text-sm mb-6" style={{ color: "var(--brand-fg-soft)" }}>All fields are required unless marked optional.</p>

            <div className="mb-5">
              <label htmlFor="contractor" className="block text-sm font-semibold mb-2" style={{ color: "var(--brand-fg)" }}>
                Which contractor did you hire?
              </label>
              <select id="contractor" defaultValue="" className="w-full rounded-md border-2 px-3.5 py-3 text-base appearance-none" style={{ borderColor: "var(--brand-border-strong)", background: "var(--brand-surface)" }}>
                <option value="" disabled>Select a contractor</option>
                {DALLAS_CONTRACTORS.map((c) => (
                  <option key={c.rank} value={c.name}>{c.name}</option>
                ))}
                <option value="other">Other (not listed)</option>
              </select>
            </div>

            <div className="mb-5">
              <label className="block text-sm font-semibold mb-2" style={{ color: "var(--brand-fg)" }}>
                Star rating
              </label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button key={n} type="button" className="rounded-md p-2 hover:bg-[var(--brand-muted)] transition" aria-label={`${n} star${n === 1 ? "" : "s"}`}>
                    <Star size={32} fill="var(--brand-rating)" style={{ color: "var(--brand-rating)" }} />
                  </button>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              <div>
                <label htmlFor="service-type" className="block text-sm font-semibold mb-2" style={{ color: "var(--brand-fg)" }}>
                  Service type
                </label>
                <select id="service-type" defaultValue="" className="w-full rounded-md border-2 px-3.5 py-3 text-base appearance-none" style={{ borderColor: "var(--brand-border-strong)", background: "var(--brand-surface)" }}>
                  <option value="" disabled>Select</option>
                  <option>AC repair</option>
                  <option>AC replacement</option>
                  <option>Heating repair</option>
                  <option>Heat pump install</option>
                  <option>Tune-up / maintenance</option>
                  <option>Ductwork</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="service-date" className="block text-sm font-semibold mb-2" style={{ color: "var(--brand-fg)" }}>
                  Service date
                </label>
                <input id="service-date" type="date" className="w-full rounded-md border-2 px-3.5 py-3 text-base" style={{ borderColor: "var(--brand-border-strong)", background: "var(--brand-surface)" }} />
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="title" className="block text-sm font-semibold mb-2" style={{ color: "var(--brand-fg)" }}>
                Review headline
              </label>
              <input id="title" type="text" placeholder="e.g. Same-day AC repair, fair price, no upsell" maxLength={80} className="w-full rounded-md border-2 px-3.5 py-3 text-base" style={{ borderColor: "var(--brand-border-strong)", background: "var(--brand-surface)" }} />
            </div>

            <div className="mb-5">
              <label htmlFor="body" className="block text-sm font-semibold mb-2" style={{ color: "var(--brand-fg)" }}>
                Your review
              </label>
              <textarea id="body" rows={6} placeholder="What happened? What worked? What didn't? Any tips for future homeowners?" className="w-full rounded-md border-2 px-3.5 py-3 text-base" style={{ borderColor: "var(--brand-border-strong)", background: "var(--brand-surface)" }} />
              <p className="mt-1 text-xs" style={{ color: "var(--brand-fg-soft)" }}>Aim for 3-5 sentences with specifics (the issue, what they did, how they communicated, the cost).</p>
            </div>

            <div className="mb-5">
              <label className="block text-sm font-semibold mb-2" style={{ color: "var(--brand-fg)" }}>
                Proof of service (required for verification)
              </label>
              <div className="rounded-md border-2 border-dashed p-5 text-center" style={{ borderColor: "var(--brand-border-strong)", background: "var(--brand-muted)" }}>
                <Upload size={28} style={{ color: "var(--brand-cta)" }} className="mx-auto mb-2" />
                <p className="text-sm font-semibold" style={{ color: "var(--brand-fg)" }}>Drop a receipt, invoice, or email confirmation</p>
                <p className="text-xs mt-1" style={{ color: "var(--brand-fg-soft)" }}>PNG, JPG, PDF up to 10 MB. Personal info stays private — we use it only for verification.</p>
                <button type="button" className="mt-3 text-sm font-semibold rounded-md px-4 py-2" style={{ border: "1px solid var(--brand-cta)", color: "var(--brand-cta)" }}>
                  Choose file
                </button>
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-sm font-semibold mb-2" style={{ color: "var(--brand-fg)" }}>
                Photos of the work (optional)
              </label>
              <div className="rounded-md border-2 border-dashed p-5 text-center" style={{ borderColor: "var(--brand-border-strong)", background: "var(--brand-muted)" }}>
                <Camera size={28} style={{ color: "var(--brand-cta)" }} className="mx-auto mb-2" />
                <p className="text-sm font-semibold" style={{ color: "var(--brand-fg)" }}>Add up to 5 photos</p>
                <p className="text-xs mt-1" style={{ color: "var(--brand-fg-soft)" }}>Photos help future homeowners. We&apos;ll watermark them with rizehvac before publishing.</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold mb-2" style={{ color: "var(--brand-fg)" }}>
                  First name
                </label>
                <input id="first-name" type="text" placeholder="Maria" className="w-full rounded-md border-2 px-3.5 py-3 text-base" style={{ borderColor: "var(--brand-border-strong)", background: "var(--brand-surface)" }} />
              </div>
              <div>
                <label htmlFor="last-initial" className="block text-sm font-semibold mb-2" style={{ color: "var(--brand-fg)" }}>
                  Last initial
                </label>
                <input id="last-initial" type="text" placeholder="R" maxLength={1} className="w-full rounded-md border-2 px-3.5 py-3 text-base" style={{ borderColor: "var(--brand-border-strong)", background: "var(--brand-surface)" }} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              <div>
                <label htmlFor="zip" className="block text-sm font-semibold mb-2" style={{ color: "var(--brand-fg)" }}>
                  ZIP code (where service was performed)
                </label>
                <input id="zip" type="text" inputMode="numeric" maxLength={5} placeholder="75201" className="w-full rounded-md border-2 px-3.5 py-3 text-base" style={{ borderColor: "var(--brand-border-strong)", background: "var(--brand-surface)" }} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: "var(--brand-fg)" }}>
                  Email (private — for verification only)
                </label>
                <input id="email" type="email" placeholder="you@email.com" className="w-full rounded-md border-2 px-3.5 py-3 text-base" style={{ borderColor: "var(--brand-border-strong)", background: "var(--brand-surface)" }} />
              </div>
            </div>

            <div className="rounded-md p-3 mb-5 flex items-start gap-2" style={{ background: "var(--brand-accent-soft)", border: "1px solid var(--brand-accent)" }}>
              <ShieldCheck size={16} style={{ color: "var(--brand-accent)", flexShrink: 0, marginTop: 3 }} />
              <p className="text-xs" style={{ color: "var(--brand-fg-soft)" }}>
                Your full name, email, and ZIP stay private. Public review will show only first name + last initial + general neighborhood. We never sell or share your contact info.
              </p>
            </div>

            <button type="button" className="display w-full rounded-md py-4 text-lg font-extrabold inline-flex items-center justify-center gap-2 tracking-wider" style={{ background: "var(--brand-cta)", color: "var(--brand-cta-fg)" }}>
              Submit review for verification <ArrowRight size={18} />
            </button>
          </form>
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
