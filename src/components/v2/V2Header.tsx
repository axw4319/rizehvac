import { Menu, Phone, Wind } from "lucide-react";

export function V2Header() {
  return (
    <header
      className="sticky top-0 z-30 backdrop-blur-md"
      style={{ background: "rgba(250, 250, 247, 0.92)", borderBottom: "1px solid var(--brand-border)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2.5">
          <span
            className="grid place-items-center rounded-lg"
            style={{ background: "var(--brand-accent)", color: "var(--brand-accent-fg)", width: 36, height: 36 }}
          >
            <Wind size={18} strokeWidth={2.4} />
          </span>
          <span className="heading text-lg font-semibold tracking-tight">
            rize<span style={{ color: "var(--brand-accent)" }}>hvac</span>
          </span>
          <span className="hidden sm:inline-block text-xs px-2 py-0.5 rounded-full ml-1" style={{ background: "var(--brand-muted)", color: "var(--brand-fg-soft)" }}>
            Tucson
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm" style={{ color: "var(--brand-fg-soft)" }}>
          <a href="#" className="hover:opacity-100 opacity-90">Best HVAC</a>
          <a href="#" className="hover:opacity-100 opacity-90">AC Repair</a>
          <a href="#" className="hover:opacity-100 opacity-90">Cost Guides</a>
          <a href="#methodology" className="hover:opacity-100 opacity-90">Methodology</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="tel:5202072500"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: "var(--brand-fg)" }}
          >
            <Phone size={16} style={{ color: "var(--brand-cta)" }} />
            <span className="leading-none">(520) 207-2500</span>
          </a>
          <a
            href="#hero"
            className="text-sm font-semibold rounded-lg px-4 py-2"
            style={{ background: "var(--brand-cta)", color: "var(--brand-cta-fg)" }}
          >
            Get matched
          </a>
          <button type="button" className="md:hidden p-2 -mr-2" aria-label="Menu">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
