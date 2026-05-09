// Blog post types — shared by all rizehvac long-form content.

export type BlogSection =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string; id?: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; tone: "info" | "warning" | "success"; title?: string; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "table"; headers: string[]; rows: string[][]; caption?: string }
  | { type: "stat"; value: string; label: string; source?: string }
  | { type: "tldr"; bullets: string[] }
  | { type: "atomic"; claim: string; source: { name: string; url: string } };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  authorSlug: string;       // points at AUTHORS in src/data/authors.ts
  reviewerSlug?: string;    // optional fact-checker
  datePublished: string;    // YYYY-MM-DD
  dateModified: string;     // YYYY-MM-DD
  lastReviewed: string;     // YYYY-MM-DD
  readingTimeMin: number;
  category: "buyer-guide" | "data" | "comparison" | "technical" | "regional";
  tags: string[];
  heroPhotoSlug?: string;   // /photos/{slug}-{1200,1920,2400}.webp
  primarySources: { name: string; url: string }[]; // outbound to .gov/.edu/standards bodies
  faq: { q: string; a: string }[];
  body: BlogSection[];
  noindex?: boolean;        // gate publication until verified
};
