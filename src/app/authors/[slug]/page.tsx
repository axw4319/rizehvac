import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { v2Vars } from "@/lib/v2theme";
import { V2Header } from "@/components/v2/V2Header";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { BRANDS } from "@/lib/brands";
import { getAuthor, listAuthorSlugs, type Author } from "@/data/authors";
import { generateBreadcrumbSchema, generatePersonSchema } from "@/lib/schema";
import { Award, ExternalLink, Mail, ShieldCheck } from "lucide-react";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return listAuthorSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const a = getAuthor(slug);
  if (!a) return {};
  return {
    title: `${a.name} — ${a.role}`,
    description: a.shortBio,
    alternates: { canonical: `/authors/${a.slug}` },
    openGraph: { title: `${a.name} — ${a.role}`, description: a.shortBio, type: "profile" },
  };
}

const AVATAR_GRADIENTS: Record<string, string> = {
  JM: "linear-gradient(135deg, #0E5340 0%, #2E8C6F 100%)",
  LP: "linear-gradient(135deg, #743A2E 0%, #C28A2A 100%)",
  CM: "linear-gradient(135deg, #1A2944 0%, #3F5A85 100%)",
};

function gradientFor(initials: string): string {
  return AVATAR_GRADIENTS[initials] || "linear-gradient(135deg, #1A2944 0%, #3F5A85 100%)";
}

export default async function AuthorPage({ params }: { params: Params }) {
  const { slug } = await params;
  const a = getAuthor(slug);
  if (!a) notFound();

  const personSchema = generatePersonSchema({
    name: a.name,
    slug: a.slug,
    jobTitle: a.role,
    description: a.longBio.join(" "),
    email: a.email,
    knowsAbout: a.expertiseAreas,
    sameAs: a.sameAs,
  });
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Editorial team", url: "/methodology" },
    { name: a.name, url: `/authors/${a.slug}` },
  ]);

  return (
    <div style={{ ...v2Vars, background: "var(--brand-bg)", minHeight: "100vh", color: "var(--brand-fg)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <V2Header phone="(214) 414-2500" cityLabel="" />

      <section className="border-b" style={{ background: "var(--brand-bg-inverse)", color: "var(--brand-fg-inverse)", borderColor: "rgba(63, 169, 245, 0.18)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-16">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--brand-accent-bright)" }}>
            Editorial team
          </div>
          <div className="flex items-center gap-5 mb-5">
            <div
              className="grid place-items-center rounded-full text-white text-3xl font-extrabold shrink-0"
              style={{ width: 96, height: 96, background: gradientFor(a.initials) }}
            >
              {a.initials}
            </div>
            <div>
              <h1 className="display text-4xl md:text-6xl leading-[0.95]">{a.name}</h1>
              <div className="text-sm md:text-base mt-2 font-semibold" style={{ color: "var(--brand-accent-bright)" }}>{a.role}</div>
            </div>
          </div>
          <p className="mt-4 text-base md:text-lg max-w-3xl" style={{ color: "var(--brand-fg-inverse-soft)" }}>
            {a.shortBio}
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 sm:px-6 py-10 md:py-14">
        <div className="grid sm:grid-cols-3 gap-3 mb-8">
          {[
            { label: "Joined", value: a.joined },
            { label: "Bylines", value: `${a.bylineCount}+` },
            { label: "Email", value: a.email, isLink: `mailto:${a.email}` },
          ].map((s) => (
            <div key={s.label} className="rounded-lg p-4 border" style={{ borderColor: "var(--brand-border)", background: "var(--brand-surface)" }}>
              <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--brand-fg-soft)" }}>{s.label}</div>
              {s.isLink ? (
                <a href={s.isLink} className="block text-sm font-semibold mt-1 truncate" style={{ color: "var(--brand-cta)" }}>{s.value}</a>
              ) : (
                <div className="text-sm font-semibold mt-1">{s.value}</div>
              )}
            </div>
          ))}
        </div>

        <h2 className="display text-2xl md:text-3xl mb-4" style={{ color: "var(--brand-fg)" }}>About {a.name.split(" ")[0]}</h2>
        {a.longBio.map((p, i) => (
          <p key={i} className="text-base leading-relaxed mb-4" style={{ color: "var(--brand-fg-soft)" }}>{p}</p>
        ))}

        <h2 className="display text-2xl md:text-3xl mt-10 mb-4" style={{ color: "var(--brand-fg)" }}>Credentials</h2>
        <ul className="space-y-2">
          {a.credentials.map((c) => (
            <li key={c} className="flex items-start gap-3">
              <Award size={18} style={{ color: "var(--brand-cta)", flexShrink: 0, marginTop: 3 }} />
              <span className="text-base" style={{ color: "var(--brand-fg-soft)" }}>{c}</span>
            </li>
          ))}
        </ul>

        <h2 className="display text-2xl md:text-3xl mt-10 mb-4" style={{ color: "var(--brand-fg)" }}>Expertise</h2>
        <div className="flex flex-wrap gap-2">
          {a.expertiseAreas.map((e) => (
            <span
              key={e}
              className="text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{ background: "var(--brand-muted)", color: "var(--brand-fg-soft)" }}
            >
              {e}
            </span>
          ))}
        </div>

        <h2 className="display text-2xl md:text-3xl mt-10 mb-4" style={{ color: "var(--brand-fg)" }}>Find {a.name.split(" ")[0]} elsewhere</h2>
        <ul className="space-y-2">
          {a.sameAs.map((url) => (
            <li key={url}>
              <a href={url} target="_blank" rel="noopener noreferrer me" className="inline-flex items-center gap-2 text-base font-semibold" style={{ color: "var(--brand-cta)" }}>
                <ExternalLink size={16} />
                {url.replace(/^https?:\/\//, "")}
              </a>
            </li>
          ))}
          <li>
            <a href={`mailto:${a.email}`} className="inline-flex items-center gap-2 text-base font-semibold" style={{ color: "var(--brand-cta)" }}>
              <Mail size={16} />
              {a.email}
            </a>
          </li>
        </ul>

        <div className="mt-12 rounded-xl p-5" style={{ background: "var(--brand-accent-soft)", border: "1px solid var(--brand-accent)" }}>
          <div className="flex items-start gap-3">
            <ShieldCheck size={20} style={{ color: "var(--brand-accent)", flexShrink: 0, marginTop: 3 }} />
            <div>
              <div className="font-semibold">Editorial independence</div>
              <p className="text-sm mt-1" style={{ color: "var(--brand-fg-soft)" }}>
                {a.name.split(" ")[0]} accepts no compensation, gifts, or sponsorships from any HVAC contractor we cover. Editorial decisions are independent of rizehvac&apos;s lead-share business model.
              </p>
            </div>
          </div>
        </div>
      </article>

      <SiteFooter brand={BRANDS.editorial} />
    </div>
  );
}
