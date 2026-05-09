import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { v2Vars } from "@/lib/v2theme";
import { V2Header } from "@/components/v2/V2Header";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { BRANDS } from "@/lib/brands";
import { getPost, listPostSlugs } from "@/data/postsRegistry";
import { getAuthor } from "@/data/authors";
import { BlogPostBody } from "@/components/v2/BlogPostBody";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQPageSchema,
  generateSpeakableSchema,
} from "@/lib/schema";
import { Calendar, Clock, ExternalLink, ShieldCheck } from "lucide-react";
import Image from "next/image";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return listPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `/blog/${slug}`,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
    },
    ...(post.noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const author = getAuthor(post.authorSlug);
  const reviewer = post.reviewerSlug ? getAuthor(post.reviewerSlug) : null;

  const article = generateArticleSchema({
    headline: post.title,
    description: post.metaDescription,
    pageUrl: `/blog/${slug}`,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    authors: author
      ? [{ name: author.name, slug: author.slug, sameAs: author.sameAs }]
      : undefined,
    imageUrl: post.heroPhotoSlug
      ? `https://rizehvac.com/photos/${post.heroPhotoSlug}-2400.webp`
      : undefined,
  });
  const faqSchema = generateFAQPageSchema(post.faq);
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title.length > 60 ? post.title.slice(0, 57) + "..." : post.title, url: `/blog/${slug}` },
  ]);
  const speakable = generateSpeakableSchema(`/blog/${slug}`);

  return (
    <div style={{ ...v2Vars, background: "var(--brand-bg)", minHeight: "100vh", color: "var(--brand-fg)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
      <V2Header phone="(214) 414-2500" cityLabel="" />

      <article>
        <header className="border-b" style={{ background: "var(--brand-surface)", borderColor: "var(--brand-border)" }}>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 py-10 md:py-14">
            <a href="/blog" className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--brand-cta)" }}>
              ← All guides
            </a>
            <h1 className="display text-4xl md:text-6xl leading-[0.95] mt-4" style={{ color: "var(--brand-fg)" }}>
              {post.title}
            </h1>
            <p className="mt-5 text-lg" style={{ color: "var(--brand-fg-soft)" }}>{post.excerpt}</p>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm border-t pt-5" style={{ borderColor: "var(--brand-border)", color: "var(--brand-fg-soft)" }}>
              {author ? (
                <a href={`/authors/${author.slug}`} className="inline-flex items-center gap-2 hover:underline">
                  <span className="grid place-items-center rounded-full text-white text-xs font-semibold shrink-0" style={{ width: 32, height: 32, background: "linear-gradient(135deg, #0A1F3E 0%, #3FA9F5 100%)" }}>
                    {author.initials}
                  </span>
                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-wider" style={{ color: "var(--brand-fg-soft)" }}>Written by</span>
                    <span className="block font-semibold" style={{ color: "var(--brand-fg)" }}>{author.name}</span>
                  </span>
                </a>
              ) : null}
              {reviewer ? (
                <a href={`/authors/${reviewer.slug}`} className="inline-flex items-center gap-2 hover:underline">
                  <ShieldCheck size={16} style={{ color: "var(--brand-success)" }} />
                  <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-wider" style={{ color: "var(--brand-fg-soft)" }}>Fact-checked by</span>
                    <span className="block font-semibold" style={{ color: "var(--brand-fg)" }}>{reviewer.name}</span>
                  </span>
                </a>
              ) : null}
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={14} />
                Last reviewed <strong style={{ color: "var(--brand-fg)" }}>{post.lastReviewed}</strong>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={14} />
                {post.readingTimeMin} min read
              </span>
            </div>
          </div>
        </header>

        {post.heroPhotoSlug ? (
          <div className="mx-auto max-w-4xl px-4 sm:px-6 mt-6">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src={`/photos/${post.heroPhotoSlug}-1920.webp`}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            </div>
          </div>
        ) : null}

        <BlogPostBody sections={post.body} />

        <section className="py-12 border-t" style={{ borderColor: "var(--brand-border)", background: "var(--brand-muted)" }}>
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="display text-3xl md:text-4xl mb-6" style={{ color: "var(--brand-fg)" }}>Frequently asked questions</h2>
            <div>
              {post.faq.map((f, i) => (
                <details key={i} className="group py-5 border-b" style={{ borderColor: "var(--brand-border)" }}>
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                    <h3 className="display text-xl pr-4" style={{ color: "var(--brand-fg)" }}>{f.q}</h3>
                    <span className="display text-2xl group-open:rotate-45 transition-transform shrink-0" style={{ color: "var(--brand-cta)" }}>+</span>
                  </summary>
                  <div className="mt-3 text-base leading-relaxed" style={{ color: "var(--brand-fg-soft)" }}>{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 border-t" style={{ borderColor: "var(--brand-border)" }}>
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--brand-cta)" }}>
              Primary sources
            </div>
            <h2 className="display text-2xl md:text-3xl mb-5" style={{ color: "var(--brand-fg)" }}>Citations + further reading</h2>
            <ul className="space-y-2">
              {post.primarySources.map((src) => (
                <li key={src.url}>
                  <a href={src.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2 text-base font-medium hover:underline" style={{ color: "var(--brand-cta)" }}>
                    <ExternalLink size={14} className="mt-1 shrink-0" />
                    <span>{src.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </article>

      <SiteFooter brand={BRANDS.editorial} />
    </div>
  );
}
