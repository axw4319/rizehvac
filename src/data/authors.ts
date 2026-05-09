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
  "jordan-marshall": {
    slug: "jordan-marshall",
    name: "Jordan Marshall",
    initials: "JM",
    role: "Senior HVAC Editor",
    shortBio: "12 years covering home services. Previously led HVAC content at Bob Vila.",
    longBio: [
      "Jordan Marshall is the Senior HVAC Editor at rizehvac, where they lead the editorial research process for every city ranking we publish. Their job is to read every BBB filing, every state license record, and every public review for the contractors we evaluate — then translate that into rankings homeowners can actually use.",
      "Before rizehvac, Jordan led HVAC editorial coverage at Bob Vila for four years and was a senior contributor to Family Handyman's home-systems vertical. Their reporting on heat pump rebate stacking was cited by the Department of Energy in 2024.",
      "Jordan does not accept gifts, sponsorships, or compensation from any HVAC contractor we cover. Editorial decisions are independent of rizehvac's lead-share business.",
    ],
    credentials: [
      "12 years home services editorial",
      "BS Mechanical Engineering, Texas A&M",
      "Member, Society of Professional Journalists",
    ],
    joined: "January 2026",
    expertiseAreas: ["HVAC contractor evaluation", "Heat pump rebates", "AC sizing + Manual J", "BBB + state licensing analysis"],
    bylineCount: 47,
    sameAs: [
      "https://www.linkedin.com/in/jordan-marshall-hvac",
      "https://muckrack.com/jordan-marshall",
    ],
    email: "jordan@rizehvac.com",
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
  "carlos-mendoza": {
    slug: "carlos-mendoza",
    name: "Carlos Mendoza",
    initials: "CM",
    role: "NATE-Certified Master Technician — Fact Checker",
    shortBio: "22 years installing HVAC in Arizona desert markets. NATE Master cert.",
    longBio: [
      "Carlos Mendoza is rizehvac's technical fact-checker. He has personally installed and serviced HVAC systems across Tucson, Phoenix, El Paso, and Las Vegas for the past 22 years — long enough to know which contractor brands hold up in 110°F heat and which fail in five.",
      "Carlos holds NATE Master Technician certification (Heat Pumps, Gas Heating, Air Conditioning, and Air Distribution), EPA Section 608 Universal certification, and an Arizona ROC C-39 Air Conditioning Refrigeration license. Before joining rizehvac, he ran a residential install crew for D&H Air Conditioning and trained junior technicians at Pima Community College's HVAC program.",
      "Carlos personally verifies the license status, certification claims, and installation portfolio of every contractor we rank. He has no financial relationship with any contractor on any list.",
    ],
    credentials: [
      "NATE Master Technician (HP, GH, AC, AD)",
      "EPA Section 608 Universal",
      "AZ ROC C-39 license #SAMPLE-12345",
      "Adjunct instructor, Pima Community College HVAC program",
    ],
    joined: "February 2026",
    expertiseAreas: ["Desert HVAC sizing", "Manual J load calculation", "Refrigerant transition R-22 → R-410A → R-454B", "Contractor installation quality audits"],
    bylineCount: 12,
    sameAs: [
      "https://www.linkedin.com/in/carlos-mendoza-hvac",
      "https://natex.org/profile/carlos-mendoza-sample",
    ],
    email: "carlos@rizehvac.com",
  },
};

export function listAuthorSlugs(): string[] {
  return Object.keys(AUTHORS);
}

export function getAuthor(slug: string): Author | null {
  return AUTHORS[slug] ?? null;
}
