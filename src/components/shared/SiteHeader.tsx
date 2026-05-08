import { Phone, Wind } from "lucide-react";
import { type Brand } from "@/lib/brands";

export function SiteHeader({ brand }: { brand: Brand }) {
  const isUtility = brand.id === "utility";
  return (
    <header
      className="border-b sticky top-0 z-30 backdrop-blur-md"
      style={{
        background:
          brand.id === "editorial"
            ? "rgba(250, 248, 244, 0.85)"
            : "rgba(255, 255, 255, 0.92)",
        borderColor: "var(--brand-border)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2.5">
          <span
            className="grid place-items-center rounded-lg"
            style={{
              background: "var(--brand-accent)",
              color: "var(--brand-accent-fg)",
              width: 36,
              height: 36,
            }}
          >
            <Wind size={18} strokeWidth={2.4} />
          </span>
          <span className="heading text-lg font-semibold tracking-tight">
            rize<span style={{ color: "var(--brand-accent)" }}>hvac</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm" style={{ color: "var(--brand-muted-fg)" }}>
          <a href="#" className="hover:opacity-100 opacity-80">Best HVAC</a>
          <a href="#" className="hover:opacity-100 opacity-80">AC Repair</a>
          <a href="#" className="hover:opacity-100 opacity-80">Cost Guides</a>
          <a href="#" className="hover:opacity-100 opacity-80">Methodology</a>
        </nav>
        <div className="flex items-center gap-3">
          {isUtility ? (
            <a
              href="tel:5202072500"
              className="hidden sm:flex items-center gap-2 text-sm font-semibold"
              style={{ color: "var(--brand-accent)" }}
            >
              <Phone size={16} /> (520) 207-2500
            </a>
          ) : null}
          <a href="#hero" className="brand-button text-sm">
            Get matched
          </a>
        </div>
      </div>
    </header>
  );
}
