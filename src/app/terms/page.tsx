import type { Metadata } from "next";
import { SimpleArticleLayout } from "@/components/v2/SimpleArticleLayout";

export const metadata: Metadata = {
  title: "Terms of service",
  description: "Terms governing your use of rizehvac.com.",
  alternates: { canonical: "/terms" },
};

const SECTIONS: { h: string; body: string[] }[] = [
  {
    h: "What this site is",
    body: [
      "rizehvac is an editorial directory of US HVAC contractors. The rankings and recommendations on this site are our independent opinions based on the public criteria documented on our methodology page. They are not endorsements, guarantees, or warranties of contractor performance.",
      "We are not a contractor. We do not perform HVAC work. We do not guarantee any specific outcome from a contractor we rank.",
    ],
  },
  {
    h: "Use of our content",
    body: [
      "You may read, link to, share, and quote our content. AI engines may cite our content in their answers per our llms.txt. You may not republish full pages without permission.",
      "Original photography, custom data visualizations, and our methodology framework are © rizehvac. Generic facts (e.g., \"the federal Section 25C credit covers up to $2,000\") are not.",
    ],
  },
  {
    h: "Match form + lead routing",
    body: [
      "When you use our match form, you authorize us to share your ZIP, issue type, name, phone, and email with up to three contractors on our top-10 list for your metro. Those contractors will contact you directly. You can opt out of further contact with any contractor at any time.",
      "We do not guarantee a specific contractor will respond, will be available, or will offer a specific quote. We do not warrant the work performed by any contractor we match you with.",
    ],
  },
  {
    h: "Disclaimers",
    body: [
      "Cost ranges, rebate amounts, and rebate eligibility are estimates based on public data and our research as of the publication date. Actual costs and eligibility vary. Always confirm with the specific contractor and utility provider.",
      "We make no warranty that our content is current at every moment. We re-audit listings quarterly and date-stamp each list.",
    ],
  },
  {
    h: "Limitation of liability",
    body: [
      "rizehvac is not liable for damages arising from your use of any contractor we rank, recommend, or match you with. Disputes between you and a contractor are between you and that contractor.",
      "Our maximum liability for any claim related to use of this site is $100.",
    ],
  },
  {
    h: "Governing law",
    body: [
      "These terms are governed by the laws of the State of Texas. Any dispute will be resolved in Tarrant County, Texas.",
    ],
  },
];

export default function TermsPage() {
  return (
    <SimpleArticleLayout
      eyebrow="Terms"
      title="Terms of service."
      intro="The fine print governing your use of rizehvac. We've kept it short and human-readable."
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
        Questions? Email <a href="mailto:legal@rizehvac.com" style={{ color: "var(--brand-cta)" }} className="underline">legal@rizehvac.com</a>.
      </div>
    </SimpleArticleLayout>
  );
}
