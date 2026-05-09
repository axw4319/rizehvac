// Master list of city slugs we'll cover (rendered as tiles on the home grid).
// Order = launch sequence. DFW first (Aaron is local), then Texas, then national.
//
// Live status comes from cityRegistry.ts — only registered slugs get
// indexable URLs + sitemap entries. The rest render as "coming soon" tiles.
export const CITIES: string[] = [
  "dallas",
  "fort-worth",
  "arlington",
  "plano",
  "frisco",
  "houston",
  "austin",
  "san-antonio",
  "phoenix",
  "atlanta",
];
