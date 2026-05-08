import { Phone, MapPin, ShieldCheck, Clock, Award, ThumbsUp, ThumbsDown } from "lucide-react";
import { type Contractor } from "@/data/tucson-contractors";
import { type Brand } from "@/lib/brands";
import { StarRating } from "./StarRating";

export function ContractorCard({ contractor, brand }: { contractor: Contractor; brand: Brand }) {
  const c = contractor;
  return (
    <article className="brand-card">
      <div className="p-5 md:p-6">
        <div className="flex items-start gap-5">
          <div
            className="hidden sm:grid place-items-center heading text-2xl font-semibold flex-shrink-0"
            style={{
              width: 56,
              height: 56,
              background: "var(--brand-muted)",
              color: "var(--brand-accent)",
              borderRadius: "0.625rem",
            }}
          >
            #{c.rank}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
              <h3 className="heading text-xl md:text-2xl font-semibold">{c.name}</h3>
              <span className="text-sm font-medium" style={{ color: "var(--brand-muted-fg)" }}>
                {c.priceRange} · {c.yearsInBusiness} yrs in business
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
              <div className="inline-flex items-center gap-1.5">
                <StarRating rating={c.rating} />
                <span className="font-semibold">{c.rating}</span>
                <span style={{ color: "var(--brand-muted-fg)" }}>({c.reviewCount.toLocaleString()} reviews)</span>
              </div>
              {c.emergencyAvailable ? (
                <span className="inline-flex items-center gap-1" style={{ color: "var(--brand-success)" }}>
                  <Clock size={14} /> 24/7 emergency
                </span>
              ) : null}
              <span className="inline-flex items-center gap-1" style={{ color: "var(--brand-muted-fg)" }}>
                <ShieldCheck size={14} /> {c.warrantyYears}-yr warranty
              </span>
            </div>
            <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--brand-muted-fg)" }}>
              {c.summary}
            </p>
            <div className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: "var(--brand-fg)" }}>
              <Award size={15} style={{ color: "var(--brand-accent)" }} />
              <span>Best for: <strong>{c.bestFor}</strong></span>
            </div>
          </div>
        </div>

        <div className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--brand-muted-fg)" }}>
              <ThumbsUp size={12} className="inline mr-1" style={{ color: "var(--brand-success)" }} />
              Pros
            </div>
            <ul className="space-y-1">
              {c.pros.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span style={{ color: "var(--brand-success)" }}>+</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--brand-muted-fg)" }}>
              <ThumbsDown size={12} className="inline mr-1" style={{ color: "var(--brand-danger)" }} />
              Cons
            </div>
            <ul className="space-y-1">
              {c.cons.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span style={{ color: "var(--brand-danger)" }}>−</span>
                  <span>{p}</span>
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
              style={{
                background: "var(--brand-muted)",
                color: "var(--brand-muted-fg)",
              }}
            >
              {cert}
            </span>
          ))}
        </div>
      </div>

      <div
        className="px-5 md:px-6 py-3 border-t flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between"
        style={{
          background: brand.id === "utility" ? "var(--brand-muted)" : "transparent",
          borderColor: "var(--brand-border)",
        }}
      >
        <div className="flex flex-col sm:flex-row gap-x-4 gap-y-1 text-sm" style={{ color: "var(--brand-muted-fg)" }}>
          <span className="inline-flex items-center gap-1.5">
            <Phone size={14} /> {c.phone}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} /> {c.address}
          </span>
        </div>
        <div className="flex gap-2">
          <a
            href={`tel:${c.phone.replace(/[^0-9]/g, "")}`}
            className="text-sm font-semibold rounded-md px-4 py-2 border"
            style={{
              borderColor: "var(--brand-border)",
              color: "var(--brand-fg)",
            }}
          >
            Call
          </a>
          <a href="#" className="brand-button text-sm">Get free quote</a>
        </div>
      </div>
    </article>
  );
}
