import { ArrowRight, Award, Clock, Phone, ShieldCheck, ThumbsDown, ThumbsUp } from "lucide-react";
import { type Contractor } from "@/data/tucson-contractors";
import { StarRating } from "@/components/shared/StarRating";

export function V2ContractorCard({ contractor }: { contractor: Contractor }) {
  const c = contractor;
  return (
    <article
      id={`rank-${c.rank}`}
      className="rounded-xl scroll-mt-24"
      style={{ background: "var(--brand-surface)", border: "1px solid var(--brand-border)" }}
    >
      <div className="p-5 md:p-6">
        <div className="flex items-start gap-5">
          <div
            className="grid place-items-center heading text-2xl font-semibold flex-shrink-0"
            style={{
              width: 56,
              height: 56,
              background: c.rank === 1 ? "var(--brand-accent)" : "var(--brand-muted)",
              color: c.rank === 1 ? "var(--brand-accent-fg)" : "var(--brand-accent)",
              borderRadius: "0.625rem",
            }}
          >
            {c.rank}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="heading text-xl md:text-2xl font-semibold" style={{ color: "var(--brand-fg)" }}>
                {c.name}
              </h3>
              {c.rank === 1 ? (
                <span
                  className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
                  style={{ background: "var(--brand-accent)", color: "var(--brand-accent-fg)" }}
                >
                  Best overall
                </span>
              ) : null}
              <span className="text-sm font-medium" style={{ color: "var(--brand-fg-soft)" }}>
                {c.priceRange} · {c.yearsInBusiness} yrs
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm mt-1.5">
              <div className="inline-flex items-center gap-1.5">
                <StarRating rating={c.rating} />
                <span className="font-semibold tabular-nums">{c.rating.toFixed(1)}</span>
                <span style={{ color: "var(--brand-fg-soft)" }}>({c.reviewCount.toLocaleString()})</span>
              </div>
              {c.emergencyAvailable ? (
                <span className="inline-flex items-center gap-1" style={{ color: "var(--brand-success)" }}>
                  <Clock size={14} /> 24/7 emergency
                </span>
              ) : null}
              <span className="inline-flex items-center gap-1" style={{ color: "var(--brand-fg-soft)" }}>
                <ShieldCheck size={14} /> {c.warrantyYears}-yr warranty
              </span>
            </div>
            <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--brand-fg-soft)" }}>
              {c.summary}
            </p>
            <div className="mt-3 inline-flex items-start gap-1.5 text-sm font-medium" style={{ color: "var(--brand-fg)" }}>
              <Award size={16} style={{ color: "var(--brand-accent)", flexShrink: 0, marginTop: 2 }} />
              <span>Best for: <strong>{c.bestFor}</strong></span>
            </div>
          </div>
        </div>

        <div className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--brand-fg-soft)" }}>
              <ThumbsUp size={12} className="inline mr-1" style={{ color: "var(--brand-success)" }} />
              Pros
            </div>
            <ul className="space-y-1">
              {c.pros.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span style={{ color: "var(--brand-success)" }}>+</span>
                  <span style={{ color: "var(--brand-fg-soft)" }}>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--brand-fg-soft)" }}>
              <ThumbsDown size={12} className="inline mr-1" style={{ color: "var(--brand-danger)" }} />
              Cons
            </div>
            <ul className="space-y-1">
              {c.cons.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span style={{ color: "var(--brand-danger)" }}>−</span>
                  <span style={{ color: "var(--brand-fg-soft)" }}>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t flex flex-wrap gap-2" style={{ borderColor: "var(--brand-border)" }}>
          {c.certifications.map((cert) => (
            <span
              key={cert}
              className="text-xs px-2.5 py-1 rounded-full"
              style={{ background: "var(--brand-muted)", color: "var(--brand-fg-soft)" }}
            >
              {cert}
            </span>
          ))}
        </div>
      </div>

      <div
        className="px-5 md:px-6 py-3 border-t flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between"
        style={{ background: "var(--brand-muted)", borderColor: "var(--brand-border)" }}
      >
        <a
          href={`tel:${c.phone.replace(/[^0-9]/g, "")}`}
          className="inline-flex items-center gap-2 text-sm font-semibold"
          style={{ color: "var(--brand-fg)" }}
        >
          <Phone size={15} style={{ color: "var(--brand-cta)" }} /> {c.phone}
        </a>
        <a
          href="#hero"
          className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold rounded-lg px-5 py-2.5 whitespace-nowrap"
          style={{ background: "var(--brand-cta)", color: "var(--brand-cta-fg)" }}
        >
          Get free quote <ArrowRight size={16} />
        </a>
      </div>
    </article>
  );
}
