import type { BlogPost } from "./types-blog";
import { POST_5K_RULE } from "./posts/5000-rule-hvac";

const POSTS: Record<string, BlogPost> = {
  "5000-rule-hvac-repair-vs-replace": POST_5K_RULE,
};

export function listPosts(): BlogPost[] {
  return Object.values(POSTS).sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );
}

export function listPublishablePosts(): BlogPost[] {
  return listPosts().filter((p) => !p.noindex);
}

export function getPost(slug: string): BlogPost | null {
  return POSTS[slug] ?? null;
}

export function listPostSlugs(): string[] {
  return Object.keys(POSTS);
}
