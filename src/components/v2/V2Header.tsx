import { Menu, Phone } from "lucide-react";

export function V2Header({ phone, cityLabel }: { phone: string; cityLabel: string }) {
  const tel = phone.replace(/[^0-9]/g, "");
  return (
    <header
      className="sticky top-0 z-30"
      style={{ background: "var(--brand-bg-inverse, #0A1F3E)", color: "var(--brand-fg-inverse, #ffffff)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-2.5">
          <span className="display text-3xl tracking-tight" style={{ color: "var(--brand-fg-inverse)" }}>
            RIZE
          </span>
          <svg width="22" height="26" viewBox="0 0 22 26" aria-hidden>
            <polygon points="0,26 8,8 11,14 14,8 22,26" fill="var(--brand-cta)" />
            <polygon points="8,8 11,14 14,8 11,2" fill="var(--brand-accent-bright)" />
          </svg>
          {cityLabel ? (
            <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm ml-1" style={{ background: "var(--brand-accent-bright)", color: "var(--brand-bg-inverse)" }}>
              {cityLabel}
            </span>
          ) : null}
        </a>

        <nav className="hidden md:flex items-center gap-9 text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--brand-fg-inverse-soft, rgba(255,255,255,0.78))" }}>
          <a href="/" className="hover:text-white">Services</a>
          <a href="#methodology" className="hover:text-white">About</a>
          <a href="/" className="hover:text-white">Cities</a>
          <a href="/" className="hover:text-white">Blog</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${tel}`}
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold rounded-md px-4 py-2.5"
            style={{ border: "2px solid var(--brand-fg-inverse)", color: "var(--brand-fg-inverse)" }}
          >
            <Phone size={15} />
            {phone}
          </a>
          <a
            href="#hero"
            className="display text-sm font-extrabold rounded-md px-5 py-3 tracking-wider whitespace-nowrap"
            style={{ background: "var(--brand-cta)", color: "var(--brand-cta-fg)" }}
          >
            Let's Connect
          </a>
          <button type="button" className="md:hidden p-2 -mr-2" aria-label="Menu">
            <Menu size={22} style={{ color: "var(--brand-fg-inverse)" }} />
          </button>
        </div>
      </div>
    </header>
  );
}
