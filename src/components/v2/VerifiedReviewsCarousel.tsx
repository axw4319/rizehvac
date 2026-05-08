import { Quote, ShieldCheck } from "lucide-react";
import { TUCSON_VERIFIED_REVIEWS } from "@/data/tucson-reviews";
import { StarRating } from "@/components/shared/StarRating";

const AVATAR_BG: Record<string, string> = {
  MR: "linear-gradient(135deg, #C28A2A 0%, #E0A748 100%)",
  JT: "linear-gradient(135deg, #1E4A40 0%, #2E8C6F 100%)",
  PK: "linear-gradient(135deg, #743A2E 0%, #B0573F 100%)",
  SM: "linear-gradient(135deg, #1A2944 0%, #3F5A85 100%)",
  AL: "linear-gradient(135deg, #57452E 0%, #886A48 100%)",
};

export function VerifiedReviewsCarousel() {
  return (
    <section className="py-12 md:py-14" style={{ background: "var(--brand-muted)" }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "var(--brand-accent-soft)", color: "var(--brand-accent)" }}>
            <ShieldCheck size={13} /> Verified by HomeAdvisor
          </span>
        </div>
        <h2 className="heading text-2xl md:text-3xl mt-1">What real Tucson homeowners say about our top picks</h2>
        <p className="text-base mt-2 max-w-2xl" style={{ color: "var(--brand-fg-soft)" }}>
          We pull verified reviews from each contractor's HomeAdvisor and Google Business Profile every quarter. Here are the most recent five we've vetted.
        </p>

        <div className="mt-7 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TUCSON_VERIFIED_REVIEWS.map((r) => (
            <article
              key={r.authorName + r.contractor}
              className="rounded-xl p-5 relative"
              style={{ background: "var(--brand-surface)", border: "1px solid var(--brand-border)" }}
            >
              <Quote size={28} style={{ color: "var(--brand-accent-soft)", position: "absolute", top: 16, right: 16 }} />
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="grid place-items-center rounded-full text-white text-sm font-semibold flex-shrink-0"
                  style={{ width: 42, height: 42, background: AVATAR_BG[r.authorInitials] || "#3A4254" }}
                >
                  {r.authorInitials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm" style={{ color: "var(--brand-fg)" }}>{r.authorName}</div>
                  <div className="text-xs" style={{ color: "var(--brand-fg-soft)" }}>
                    {r.neighborhood} · {r.date}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <StarRating rating={r.rating} size={14} />
                <span className="text-xs" style={{ color: "var(--brand-fg-soft)" }}>· Hired {r.contractor}</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--brand-fg-soft)" }}>
                "{r.quote}"
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
