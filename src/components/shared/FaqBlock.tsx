import { ChevronDown } from "lucide-react";

export function FaqBlock({
  title = "Frequently asked questions",
  faqs,
}: {
  title?: string;
  faqs: { q: string; a: string }[];
}) {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="heading text-3xl md:text-4xl">{title}</h2>
        <div className="mt-6 divide-y" style={{ borderColor: "var(--brand-border)" }}>
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group py-5"
              style={{ borderTop: i === 0 ? `1px solid var(--brand-border)` : "none", borderBottom: `1px solid var(--brand-border)` }}
            >
              <summary
                className="flex cursor-pointer list-none items-start justify-between gap-4 text-left"
              >
                <h3 className="heading text-lg md:text-xl pr-4" style={{ color: "var(--brand-fg)" }}>{f.q}</h3>
                <ChevronDown
                  size={22}
                  className="flex-shrink-0 transition-transform duration-200 group-open:rotate-180 mt-1"
                  style={{ color: "var(--brand-muted-fg)" }}
                />
              </summary>
              <div className="mt-3 text-base leading-relaxed" style={{ color: "var(--brand-muted-fg)" }}>
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
