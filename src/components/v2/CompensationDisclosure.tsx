import { Coins, ExternalLink, ShieldCheck } from "lucide-react";

export function CompensationDisclosure() {
  return (
    <section
      className="border-b"
      style={{
        background: "linear-gradient(90deg, var(--brand-accent-soft) 0%, var(--brand-muted) 100%)",
        borderColor: "var(--brand-border)",
      }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-3.5 flex items-center gap-3 text-sm">
        <ShieldCheck size={18} style={{ color: "var(--brand-accent)", flexShrink: 0 }} />
        <p className="flex-1" style={{ color: "var(--brand-fg-soft)" }}>
          <strong style={{ color: "var(--brand-fg)" }}>How rizehvac makes money:</strong>{" "}
          We earn a one-time lead-share fee when homeowners we match are hired by a contractor on this list. Fees are <strong style={{ color: "var(--brand-fg)" }}>identical across every contractor</strong> — rank is never for sale.
        </p>
        <a
          href="/methodology#disclosures"
          className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold whitespace-nowrap"
          style={{ color: "var(--brand-accent)" }}
        >
          <Coins size={13} /> Read full disclosure <ExternalLink size={11} />
        </a>
      </div>
    </section>
  );
}
