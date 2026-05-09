import type { BlogSection } from "@/data/types-blog";
import { AlertTriangle, BookOpen, ExternalLink, Info, Quote, Sparkles } from "lucide-react";

const CALLOUT_STYLES: Record<string, { bg: string; border: string; iconColor: string; icon: typeof Info }> = {
  info: {
    bg: "var(--brand-accent-soft)",
    border: "var(--brand-accent)",
    iconColor: "var(--brand-accent)",
    icon: Info,
  },
  warning: {
    bg: "rgba(220, 75, 12, 0.08)",
    border: "var(--brand-cta)",
    iconColor: "var(--brand-cta)",
    icon: AlertTriangle,
  },
  success: {
    bg: "rgba(16, 185, 129, 0.08)",
    border: "var(--brand-success)",
    iconColor: "var(--brand-success)",
    icon: Sparkles,
  },
};

export function BlogPostBody({ sections }: { sections: BlogSection[] }) {
  return (
    <div className="prose-style max-w-3xl mx-auto px-4 sm:px-6 py-10 md:py-14">
      {sections.map((s, i) => {
        switch (s.type) {
          case "h2":
            return (
              <h2
                key={i}
                id={s.id}
                className="display text-3xl md:text-4xl mt-12 mb-4 scroll-mt-24"
                style={{ color: "var(--brand-fg)" }}
              >
                {s.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                id={s.id}
                className="display text-xl md:text-2xl mt-8 mb-3 scroll-mt-24"
                style={{ color: "var(--brand-fg)" }}
              >
                {s.text}
              </h3>
            );
          case "p":
            return (
              <p
                key={i}
                className="text-base md:text-lg leading-relaxed mb-5"
                style={{ color: "var(--brand-fg-soft)" }}
              >
                {s.text}
              </p>
            );
          case "atomic":
            return (
              <p
                key={i}
                className="text-base md:text-lg leading-relaxed mb-5"
                style={{ color: "var(--brand-fg-soft)" }}
              >
                {s.claim}{" "}
                <a
                  href={s.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold whitespace-nowrap"
                  style={{ color: "var(--brand-cta)" }}
                >
                  ({s.source.name} <ExternalLink size={10} className="inline -mt-0.5" />)
                </a>
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-2 mb-6 ml-6 list-disc">
                {s.items.map((item, j) => (
                  <li key={j} className="text-base md:text-lg leading-relaxed" style={{ color: "var(--brand-fg-soft)" }}>
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="space-y-2 mb-6 ml-6 list-decimal">
                {s.items.map((item, j) => (
                  <li key={j} className="text-base md:text-lg leading-relaxed" style={{ color: "var(--brand-fg-soft)" }}>
                    {item}
                  </li>
                ))}
              </ol>
            );
          case "callout": {
            const cs = CALLOUT_STYLES[s.tone];
            const Icon = cs.icon;
            return (
              <aside
                key={i}
                className="rounded-xl p-5 mb-6 flex items-start gap-3"
                style={{ background: cs.bg, border: `1px solid ${cs.border}` }}
              >
                <Icon size={20} style={{ color: cs.iconColor, flexShrink: 0, marginTop: 3 }} />
                <div>
                  {s.title ? (
                    <div className="display text-lg mb-1" style={{ color: "var(--brand-fg)" }}>{s.title}</div>
                  ) : null}
                  <p className="text-base leading-relaxed" style={{ color: "var(--brand-fg-soft)" }}>{s.text}</p>
                </div>
              </aside>
            );
          }
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-4 pl-6 py-2 mb-6 italic"
                style={{ borderColor: "var(--brand-cta)", color: "var(--brand-fg-soft)" }}
              >
                <Quote size={18} style={{ color: "var(--brand-cta)" }} className="mb-2" />
                <p className="text-lg leading-relaxed">{s.text}</p>
                {s.cite ? <cite className="block text-sm not-italic mt-2 font-semibold" style={{ color: "var(--brand-fg)" }}>— {s.cite}</cite> : null}
              </blockquote>
            );
          case "table":
            return (
              <div key={i} className="rounded-xl overflow-hidden border my-6 overflow-x-auto" style={{ borderColor: "var(--brand-border)" }}>
                <table className="w-full text-sm">
                  <thead style={{ background: "var(--brand-muted)" }}>
                    <tr>
                      {s.headers.map((h, hi) => (
                        <th key={hi} scope="col" className="text-left px-4 py-3 font-semibold uppercase text-xs tracking-wider" style={{ color: "var(--brand-fg-soft)" }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {s.rows.map((row, ri) => (
                      <tr key={ri} style={{ borderTop: ri === 0 ? "none" : "1px solid var(--brand-border)" }}>
                        {row.map((cell, ci) => (
                          <td key={ci} className="px-4 py-3 align-top" style={{ color: ci === 0 ? "var(--brand-fg)" : "var(--brand-fg-soft)" }}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {s.caption ? <div className="px-4 py-2 text-xs" style={{ background: "var(--brand-muted)", color: "var(--brand-fg-soft)" }}>{s.caption}</div> : null}
              </div>
            );
          case "stat":
            return (
              <div key={i} className="rounded-xl border-l-4 pl-5 py-3 mb-6" style={{ borderColor: "var(--brand-cta)", background: "var(--brand-muted)" }}>
                <div className="display text-4xl tabular-nums" style={{ color: "var(--brand-fg)" }}>{s.value}</div>
                <div className="text-sm font-semibold uppercase tracking-wider mt-1" style={{ color: "var(--brand-fg-soft)" }}>{s.label}</div>
                {s.source ? <div className="text-xs mt-1" style={{ color: "var(--brand-fg-soft)" }}>Source: {s.source}</div> : null}
              </div>
            );
          case "tldr":
            return (
              <aside key={i} data-speakable className="rounded-xl p-5 md:p-6 mb-8" style={{ background: "var(--brand-bg-inverse)", color: "var(--brand-fg-inverse)" }}>
                <div className="text-[11px] font-semibold uppercase tracking-widest mb-2 inline-flex items-center gap-1.5" style={{ color: "var(--brand-cta-bright)" }}>
                  <BookOpen size={12} />
                  TL;DR
                </div>
                <ul className="space-y-2.5">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="text-base md:text-lg leading-relaxed flex items-start gap-2.5">
                      <span className="display text-base shrink-0 mt-1" style={{ color: "var(--brand-cta-bright)" }}>→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
