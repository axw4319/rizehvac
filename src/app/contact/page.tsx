import type { Metadata } from "next";
import { SimpleArticleLayout } from "@/components/v2/SimpleArticleLayout";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact rizehvac",
  description: "Get in touch with the rizehvac editorial team. Email + phone.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <SimpleArticleLayout
      eyebrow="Contact"
      title="Get in touch."
      intro="Real humans, real responses. We answer every email."
    >
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        {[
          { icon: Mail, label: "Editorial", value: "editorial@rizehvac.com", href: "mailto:editorial@rizehvac.com" },
          { icon: Mail, label: "Privacy", value: "privacy@rizehvac.com", href: "mailto:privacy@rizehvac.com" },
          { icon: Mail, label: "Legal", value: "legal@rizehvac.com", href: "mailto:legal@rizehvac.com" },
          { icon: Phone, label: "Match concierge", value: "(214) 414-2500", href: "tel:2144142500" },
        ].map((c) => (
          <a
            key={c.label}
            href={c.href}
            className="rounded-xl p-5 flex items-start gap-3 border hover:border-[var(--brand-cta)] transition"
            style={{ borderColor: "var(--brand-border)", background: "var(--brand-surface)" }}
          >
            <div className="grid place-items-center rounded-md shrink-0" style={{ width: 36, height: 36, background: "var(--brand-cta)" }}>
              <c.icon size={18} style={{ color: "var(--brand-cta-fg)" }} />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--brand-fg-soft)" }}>{c.label}</div>
              <div className="display text-xl mt-0.5" style={{ color: "var(--brand-fg)" }}>{c.value}</div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 rounded-xl p-6" style={{ background: "var(--brand-muted)", border: "1px solid var(--brand-border)" }}>
        <div className="flex items-start gap-3">
          <MapPin size={20} style={{ color: "var(--brand-cta)", flexShrink: 0, marginTop: 4 }} />
          <div>
            <div className="display text-xl">Mailing address</div>
            <p className="text-sm mt-2" style={{ color: "var(--brand-fg-soft)" }}>
              rizehvac<br />
              c/o ProCloser Inc.<br />
              Arlington, TX 76001<br />
              United States
            </p>
            <p className="text-xs mt-3" style={{ color: "var(--brand-fg-soft)" }}>
              We are a remote editorial team. The mailing address handles legal + business correspondence only — please use email for editorial questions.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="display text-2xl md:text-3xl mb-3" style={{ color: "var(--brand-fg)" }}>Are you a contractor?</h2>
        <p className="text-base leading-relaxed" style={{ color: "var(--brand-fg-soft)" }}>
          We do not accept self-submissions for our city lists. We hand-research every contractor in a metro using public licensing data, BBB filings, and direct review audits. If you believe your business should appear on a list and doesn&apos;t, email <a href="mailto:editorial@rizehvac.com" style={{ color: "var(--brand-cta)" }} className="underline">editorial@rizehvac.com</a> with your state license number and we&apos;ll review for the next quarterly audit.
        </p>
        <p className="text-base leading-relaxed mt-3" style={{ color: "var(--brand-fg-soft)" }}>
          We do not accept paid placements, sponsorship, or directory-listing fees. Please don&apos;t ask.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="display text-2xl md:text-3xl mb-3" style={{ color: "var(--brand-fg)" }}>Press inquiries</h2>
        <p className="text-base leading-relaxed" style={{ color: "var(--brand-fg-soft)" }}>
          For interviews with our editorial team or licensed use of our methodology research, email <a href="mailto:editorial@rizehvac.com" style={{ color: "var(--brand-cta)" }} className="underline">editorial@rizehvac.com</a>. We respond within 48 hours.
        </p>
      </div>
    </SimpleArticleLayout>
  );
}
