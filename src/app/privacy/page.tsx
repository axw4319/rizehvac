import type { Metadata } from "next";
import { SimpleArticleLayout } from "@/components/v2/SimpleArticleLayout";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How rizehvac collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
};

const SECTIONS: { h: string; body: string[] }[] = [
  {
    h: "What we collect",
    body: [
      "When you use our match form, we collect: ZIP code, the type of HVAC issue you're reporting, your name, phone number, and email address. That's it.",
      "We do not collect Social Security numbers, government IDs, or financial account information. We do not require account creation to read our content.",
      "We use a small number of cookies for site analytics (page views, anonymous traffic source) and to remember your form-fill state. We do not use behavioral retargeting cookies.",
    ],
  },
  {
    h: "How we use what we collect",
    body: [
      "Match form submissions are sent to up to three contractors on our top-10 list for your metro. Those contractors contact you directly with quotes; we do not sell your data to data brokers, lead aggregators, or any third party outside the matched contractors.",
      "Site analytics help us understand which pages homeowners find most useful. Aggregated data may inform editorial decisions (e.g., which cities to research next) but is never tied back to individual visitors.",
    ],
  },
  {
    h: "How we earn money",
    body: [
      "When a homeowner uses our match form and a contractor on our list closes the job, we collect a one-time lead-share fee from that contractor. The fee is the same across every contractor on the list — there is no incentive for us to rank one contractor over another.",
      "We accept zero paid placements, sponsored rankings, or directory-listing fees from contractors. Our editorial rankings are independent of the lead-share business.",
    ],
  },
  {
    h: "Data retention",
    body: [
      "Match form submissions are retained for 12 months for follow-up and quality control, then deleted. You can request earlier deletion at any time by emailing privacy@rizehvac.com.",
      "Anonymous analytics data is retained for 26 months (the GA4 default).",
    ],
  },
  {
    h: "Your rights",
    body: [
      "You have the right to access, correct, or delete personal information we hold about you. Email privacy@rizehvac.com with your request and we will respond within 30 days.",
      "California residents have additional rights under CCPA. Email privacy@rizehvac.com with the subject \"CCPA Request\" to exercise them.",
    ],
  },
  {
    h: "Changes to this policy",
    body: [
      "We will note material changes to this policy on this page with the updated date below. Continued use of the site after changes constitutes acceptance.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <SimpleArticleLayout
      eyebrow="Privacy"
      title="Privacy policy."
      intro="How rizehvac collects, uses, and protects your information. We do not sell data."
    >
      <p className="text-sm" style={{ color: "var(--brand-fg-soft)" }}>
        <strong>Last updated:</strong> May 8, 2026
      </p>
      {SECTIONS.map((s) => (
        <div key={s.h} className="mt-8">
          <h2 className="display text-2xl md:text-3xl mb-3" style={{ color: "var(--brand-fg)" }}>{s.h}</h2>
          {s.body.map((p, i) => (
            <p key={i} className="text-base leading-relaxed mt-3" style={{ color: "var(--brand-fg-soft)" }}>{p}</p>
          ))}
        </div>
      ))}
      <div className="mt-10 pt-6 border-t text-sm" style={{ borderColor: "var(--brand-border)", color: "var(--brand-fg-soft)" }}>
        Questions? Email <a href="mailto:privacy@rizehvac.com" style={{ color: "var(--brand-cta)" }} className="underline">privacy@rizehvac.com</a>.
      </div>
    </SimpleArticleLayout>
  );
}
