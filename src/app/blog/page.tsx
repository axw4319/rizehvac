import type { Metadata } from "next";
import { v2Vars } from "@/lib/v2theme";
import { V2Header } from "@/components/v2/V2Header";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { BRANDS } from "@/lib/brands";
import { listPosts } from "@/data/postsRegistry";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "rizehvac blog — HVAC buying, repair, and decision guides",
  description:
    "Deeply-researched guides on HVAC repair-vs-replace economics, contractor licensing, refrigerant transitions, rebate stacking, and brand comparisons. Written by Dallas-area editors, fact-checked by NATE-certified technicians.",
  alternates: { canonical: "/blog" },
};

const CATEGORY_LABELS: Record<string, string> = {
  "buyer-guide": "Buyer's guide",
  data: "Original data",
  comparison: "Comparison",
  technical: "Technical",
  regional: "Regional",
};

export default function BlogIndex() {
  const posts = listPosts();
  return (
    <div style={{ ...v2Vars, background: "var(--brand-bg)", minHeight: "100vh", color: "var(--brand-fg)" }}>
      <V2Header phone="(214) 414-2500" cityLabel="" />

      <section className="border-b" style={{ background: "var(--brand-bg-inverse)", color: "var(--brand-fg-inverse)", borderColor: "rgba(63, 169, 245, 0.18)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-16">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--brand-accent-bright)" }}>
            Editorial
          </div>
          <h1 className="display text-5xl md:text-7xl leading-[0.95]">HVAC, decoded.</h1>
          <p className="mt-6 text-lg max-w-3xl" style={{ color: "var(--brand-fg-inverse-soft)" }}>
            Deeply-researched guides on HVAC buying decisions, repair-vs-replace economics, contractor licensing, and rebate stacking. Fact-checked, primary-source-cited, written by Dallas-area editors.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {posts.length === 0 ? (
            <p className="text-base" style={{ color: "var(--brand-fg-soft)" }}>
              No posts published yet — check back soon.
            </p>
          ) : null}
          <div className="space-y-6">
            {posts.map((p) => (
              <a
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group block rounded-xl border p-6 transition hover:border-[var(--brand-cta)]"
                style={{ borderColor: "var(--brand-border)", background: "var(--brand-surface)" }}
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--brand-fg-soft)" }}>
                  <span style={{ color: "var(--brand-cta)" }}>{CATEGORY_LABELS[p.category] ?? p.category}</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1"><Clock size={12} /> {p.readingTimeMin} min read</span>
                  <span>·</span>
                  <span>Updated {p.dateModified}</span>
                  {p.noindex ? (
                    <>
                      <span>·</span>
                      <span className="px-2 py-0.5 rounded-sm text-[10px]" style={{ background: "var(--brand-cta)", color: "var(--brand-cta-fg)" }}>
                        Draft (noindex)
                      </span>
                    </>
                  ) : null}
                </div>
                <h2 className="display text-2xl md:text-3xl mb-3" style={{ color: "var(--brand-fg)" }}>
                  {p.title}
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--brand-fg-soft)" }}>
                  {p.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "var(--brand-cta)" }}>
                  Read the full guide <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter brand={BRANDS.editorial} />
    </div>
  );
}
