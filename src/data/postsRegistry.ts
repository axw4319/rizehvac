import type { BlogPost } from "./types-blog";
import { POST_5K_RULE } from "./posts/5000-rule-hvac";
import { POST_BEST_HVAC_BRANDS_2026 } from "./posts/best-hvac-brands-2026";
import { POST_TX_HEAT_PUMP_REBATES } from "./posts/texas-heat-pump-rebates-2026";

const POSTS: Record<string, BlogPost> = {
  "5000-rule-hvac-repair-vs-replace": POST_5K_RULE,
  "best-hvac-brands-2026": POST_BEST_HVAC_BRANDS_2026,
  "texas-heat-pump-rebates-2026": POST_TX_HEAT_PUMP_REBATES,
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
