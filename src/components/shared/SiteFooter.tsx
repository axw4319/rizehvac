import { type Brand } from "@/lib/brands";

export function SiteFooter({ brand }: { brand: Brand }) {
  return (
    <footer
      className="mt-20 border-t"
      style={{ borderColor: "var(--brand-border)", background: "var(--brand-muted)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="heading text-lg font-semibold">
            rize<span style={{ color: "var(--brand-accent)" }}>hvac</span>
          </div>
          <p className="text-sm mt-3 max-w-xs" style={{ color: "var(--brand-muted-fg)" }}>
            Independent HVAC research for homeowners. We accept no payment from contractors for inclusion in our top-10 lists.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase font-semibold tracking-wider" style={{ color: "var(--brand-muted-fg)" }}>
            Cities
          </div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="/hvac/dallas">Dallas, TX</a></li>
            <li><a href="/ac-repair/dallas">Dallas AC Repair</a></li>
            <li><a href="/hvac-cost/dallas">Dallas HVAC Cost</a></li>
            <li><a href="mailto:editorial@rizehvac.com?subject=City+request" style={{ opacity: 0.7 }}>Request your city</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase font-semibold tracking-wider" style={{ color: "var(--brand-muted-fg)" }}>
            Resources
          </div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="/blog">Blog + guides</a></li>
            <li><a href="/what-is-rizescore">What is RizeScore™</a></li>
            <li><a href="/methodology">Methodology</a></li>
            <li><a href="/for-contractors">For contractors</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t" style={{ borderColor: "var(--brand-border)" }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs" style={{ color: "var(--brand-muted-fg)" }}>
          <div>© {new Date().getFullYear()} rizehvac · Independent HVAC research · Brand: {brand.name}</div>
          <div className="flex gap-5">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/methodology">Editorial standards</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
