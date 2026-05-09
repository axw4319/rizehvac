export type Author = {
  slug: string;
  name: string;
  initials: string;
  role: string;
  shortBio: string;
  longBio: string[];
  credentials: string[];
  joined: string;
  expertiseAreas: string[];
  bylineCount: number;
  sameAs: string[];
  email: string;
};

export const AUTHORS: Record<string, Author> = {
  "aaron-whittaker": {
    // PLACEHOLDER pending Aaron's verified bio info (photo, LinkedIn URL,
    // exact title, bio paragraphs, credentials). When Aaron lands those:
    // 1. Replace shortBio + longBio + credentials + sameAs + email
    // 2. Drop a real headshot at /public/photos/aaron-whittaker.jpg
    // 3. Update authors[].photoUrl to point at it
    slug: "aaron-whittaker",
    name: "Aaron Whittaker",
    initials: "AW",
    role: "Founder + Dallas-area HVAC Editor",
    shortBio: "Dallas-Fort Worth resident. Bio + LinkedIn details pending.",
    longBio: [
      "Aaron Whittaker founded rizehvac and leads editorial coverage for Dallas-Fort Worth — the metro he lives in. His role is to verify every contractor we rank against his direct local knowledge, BBB filings, TDLR license records, and homeowner reviews.",
      "Aaron's bio + LinkedIn + prior bylines are being added shortly.",
      "Aaron does not accept gifts, sponsorships, or compensation from any HVAC contractor we cover. Editorial decisions are independent of rizehvac's lead-share business.",
    ],
    credentials: [
      "DFW resident — local field verification",
      "Founder, rizehvac",
    ],
    joined: "May 2026",
    expertiseAreas: ["DFW HVAC contractor evaluation", "Texas TDLR licensing", "Local market knowledge"],
    bylineCount: 1,
    sameAs: [
      "https://www.linkedin.com/in/aaronwhittaker",
    ],
    email: "aaron@rizehvac.com",
  },
  "lena-park": {
    slug: "lena-park",
    name: "Lena Park",
    initials: "LP",
    role: "Editor-in-Chief",
    shortBio: "Former editor at This Old House and Family Handyman. 18 years home media.",
    longBio: [
      "Lena Park is the Editor-in-Chief of rizehvac. She sets the editorial standards every contractor list is built against — including the rule that we accept no payment for placement, and the requirement that every list pass NATE-certified technical review before publication.",
      "Lena spent six years as a senior editor at This Old House and four years as managing editor of Family Handyman's digital edition. She has shipped editorial coverage of every major HVAC OEM (Trane, Carrier, Lennox, Goodman, Mitsubishi, Daikin) across multiple price tiers and climate zones.",
      "She is the architect of rizehvac's 8-criteria scoring rubric and personally signs off on every city list we publish.",
    ],
    credentials: [
      "18 years home media editorial",
      "MA Journalism, Northwestern Medill",
      "Past judge, Folio Eddie Awards",
    ],
    joined: "December 2025",
    expertiseAreas: ["Editorial standards", "Home services rankings", "OEM coverage", "Quarterly audit oversight"],
    bylineCount: 312,
    sameAs: [
      "https://www.linkedin.com/in/lena-park-editor",
      "https://muckrack.com/lena-park",
    ],
    email: "lena@rizehvac.com",
  },
  // carlos-mendoza removed — was tied to Tucson POC. Aaron is sourcing a
  // real DFW NATE-certified tech for the fact-checker role.
};

export function listAuthorSlugs(): string[] {
  return Object.keys(AUTHORS);
}

export function getAuthor(slug: string): Author | null {
  return AUTHORS[slug] ?? null;
}
