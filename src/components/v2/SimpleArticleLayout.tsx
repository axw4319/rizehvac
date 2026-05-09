import { v2Vars } from "@/lib/v2theme";
import { V2Header } from "./V2Header";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { BRANDS } from "@/lib/brands";
import type { ReactNode } from "react";

export function SimpleArticleLayout({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <div style={{ ...v2Vars, background: "var(--brand-bg)", minHeight: "100vh", color: "var(--brand-fg)" }}>
      <V2Header phone="(520) 207-2500" cityLabel="" />

      <section className="border-b" style={{ background: "var(--brand-bg-inverse)", color: "var(--brand-fg-inverse)", borderColor: "rgba(63, 169, 245, 0.18)" }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 md:py-16">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--brand-accent-bright)" }}>
            {eyebrow}
          </div>
          <h1 className="display text-4xl md:text-6xl leading-[0.95]">{title}</h1>
          {intro ? (
            <p className="mt-5 text-base md:text-lg max-w-2xl" style={{ color: "var(--brand-fg-inverse-soft)" }}>
              {intro}
            </p>
          ) : null}
        </div>
      </section>

      <article className="prose-style mx-auto max-w-3xl px-4 sm:px-6 py-10 md:py-14">
        {children}
      </article>

      <SiteFooter brand={BRANDS.editorial} />
    </div>
  );
}
