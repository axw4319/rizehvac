// RizeScore™ — 0-100 composite ranking score for HVAC contractors.
//
// Six weighted pillars. Each contractor is scored against a transparent
// rubric; the published methodology page is at /what-is-rizescore.
//
// V1 (current): scores from the data fields we already store in
// dallas-contractors.ts (rating, reviewCount, yearsInBusiness, warranty,
// certifications, etc.). Designed to be extended as we add API pulls
// for BBB, Yelp, GBP, Peec.ai, Ahrefs.

import type { Contractor } from "@/data/types";

export type PillarScore = {
  pillar: string;
  weight: number;
  score: number;       // 0-100 within the pillar
  contribution: number; // weight × (score / 100)
  signals: { label: string; value: string | number; status: "good" | "ok" | "weak" }[];
};

export type RizeScoreResult = {
  overall: number;     // 0-100
  pillars: PillarScore[];
  band: "Outstanding" | "Excellent" | "Good" | "Acceptable" | "Below cutoff";
};

// Pillar weights — must sum to 100. Adjusting any of these changes the
// overall score for every contractor — version bump if changing.
export const RIZESCORE_WEIGHTS = {
  reputation: 25,
  trust: 20,
  service: 15,
  aiVisibility: 15,
  seoAuthority: 15,
  onSite: 10,
} as const;

export const RIZESCORE_VERSION = "1.0 — May 2026";

function clamp(n: number): number {
  return Math.max(0, Math.min(100, n));
}

// ----- Pillar 1: Public reputation (25%) -----
function scoreReputation(c: Contractor): PillarScore {
  // Composite rating × log(reviewCount). Unrated companies score 0.
  const ratingNorm = ((c.rating - 3.5) / (5 - 3.5)) * 100; // 3.5★ = 0, 5★ = 100
  const reviewBoost = Math.min(c.reviewCount / 1000, 1) * 30; // cap +30 at 1000 reviews
  const score = clamp(ratingNorm + reviewBoost - 30);
  return {
    pillar: "Public reputation",
    weight: RIZESCORE_WEIGHTS.reputation,
    score,
    contribution: (score / 100) * RIZESCORE_WEIGHTS.reputation,
    signals: [
      {
        label: "Average rating",
        value: `${c.rating.toFixed(1)}★`,
        status: c.rating >= 4.7 ? "good" : c.rating >= 4.3 ? "ok" : "weak",
      },
      {
        label: "Review count",
        value: c.reviewCount.toLocaleString(),
        status: c.reviewCount >= 500 ? "good" : c.reviewCount >= 100 ? "ok" : "weak",
      },
    ],
  };
}

// ----- Pillar 2: Trust & credentials (20%) -----
function scoreTrust(c: Contractor): PillarScore {
  const certs = c.certifications.join(" ").toLowerCase();
  const hasNATE = certs.includes("nate");
  const hasBBB = certs.includes("bbb");
  const hasFactoryAuth = certs.includes("authorized") || certs.includes("specialist") || certs.includes("dealer");
  const yearsSignal = Math.min(c.yearsInBusiness / 25, 1) * 30; // cap +30 at 25 yrs
  let score = 0;
  if (hasNATE) score += 35;
  if (hasBBB) score += 20;
  if (hasFactoryAuth) score += 15;
  score += yearsSignal;
  score = clamp(score);
  return {
    pillar: "Trust & credentials",
    weight: RIZESCORE_WEIGHTS.trust,
    score,
    contribution: (score / 100) * RIZESCORE_WEIGHTS.trust,
    signals: [
      { label: "NATE certified", value: hasNATE ? "Yes" : "No", status: hasNATE ? "good" : "weak" },
      { label: "BBB A+ accredited", value: hasBBB ? "Yes" : "No", status: hasBBB ? "good" : "weak" },
      { label: "Factory authorized dealer", value: hasFactoryAuth ? "Yes" : "No", status: hasFactoryAuth ? "good" : "ok" },
      { label: "Years in business", value: c.yearsInBusiness, status: c.yearsInBusiness >= 15 ? "good" : c.yearsInBusiness >= 5 ? "ok" : "weak" },
    ],
  };
}

// ----- Pillar 3: Service signals (15%) -----
function scoreService(c: Contractor): PillarScore {
  let score = 0;
  if (c.emergencyAvailable) score += 35;
  if (c.warrantyYears >= 10) score += 35;
  else if (c.warrantyYears >= 5) score += 18;
  // Pricing transparency proxy: $$ or $ implies clear pricing tier; $$$ premium also OK
  if (c.priceRange === "$$") score += 20;
  else if (c.priceRange === "$") score += 15;
  else score += 10;
  // Service breadth — multi-trade adds points
  const services = c.servicesOffered.length;
  score += Math.min(services * 2, 10);
  score = clamp(score);
  return {
    pillar: "Service signals",
    weight: RIZESCORE_WEIGHTS.service,
    score,
    contribution: (score / 100) * RIZESCORE_WEIGHTS.service,
    signals: [
      { label: "24/7 emergency", value: c.emergencyAvailable ? "Yes" : "No", status: c.emergencyAvailable ? "good" : "weak" },
      { label: "Warranty length", value: `${c.warrantyYears} yr`, status: c.warrantyYears >= 10 ? "good" : c.warrantyYears >= 5 ? "ok" : "weak" },
      { label: "Service breadth", value: `${services} trades`, status: services >= 4 ? "good" : services >= 2 ? "ok" : "weak" },
    ],
  };
}

// ----- Pillar 4: AI visibility (15%) — placeholder until Peec wired -----
// Currently scored by proxy: factory-authorized dealers get cited more in
// AI Overviews because LLMs index manufacturer dealer locators. When Peec
// API integration lands, this becomes a real prompt-coverage score.
function scoreAIVisibility(c: Contractor): PillarScore {
  const certs = c.certifications.join(" ").toLowerCase();
  const factoryAuthDepth =
    (certs.match(/(specialist|authorized|premier|elite|dealer|authoriz)/g) || []).length;
  // Years in business proxy + factory auth = decent AI visibility predictor
  let score = Math.min(factoryAuthDepth * 25, 50) + Math.min(c.yearsInBusiness * 1.5, 30);
  // Reviews >2k is a strong AI-visibility signal (LLMs cite high-review businesses)
  if (c.reviewCount >= 2000) score += 20;
  else if (c.reviewCount >= 1000) score += 12;
  else if (c.reviewCount >= 500) score += 7;
  score = clamp(score);
  return {
    pillar: "AI visibility",
    weight: RIZESCORE_WEIGHTS.aiVisibility,
    score,
    contribution: (score / 100) * RIZESCORE_WEIGHTS.aiVisibility,
    signals: [
      { label: "Factory dealer depth", value: factoryAuthDepth, status: factoryAuthDepth >= 2 ? "good" : factoryAuthDepth >= 1 ? "ok" : "weak" },
      { label: "Cite-worthy review volume", value: c.reviewCount >= 1000 ? "Yes" : "No", status: c.reviewCount >= 1000 ? "good" : "weak" },
      { label: "Peec.ai prompt coverage", value: "Pending integration", status: "ok" },
    ],
  };
}

// ----- Pillar 5: SEO authority (15%) — placeholder until Ahrefs wired -----
// V1 proxy: yearsInBusiness + reviewCount as crude domain-authority signal.
// V2 will pull real Ahrefs DR + organic traffic for each contractor's domain.
function scoreSEOAuthority(c: Contractor): PillarScore {
  const yearsSignal = Math.min(c.yearsInBusiness * 2, 50);
  const reviewSignal = Math.min(c.reviewCount / 50, 50);
  const score = clamp(yearsSignal + reviewSignal);
  return {
    pillar: "SEO authority",
    weight: RIZESCORE_WEIGHTS.seoAuthority,
    score,
    contribution: (score / 100) * RIZESCORE_WEIGHTS.seoAuthority,
    signals: [
      { label: "Domain longevity proxy", value: `${c.yearsInBusiness} yr`, status: c.yearsInBusiness >= 15 ? "good" : c.yearsInBusiness >= 5 ? "ok" : "weak" },
      { label: "Public footprint proxy", value: c.reviewCount.toLocaleString(), status: c.reviewCount >= 1000 ? "good" : c.reviewCount >= 200 ? "ok" : "weak" },
      { label: "Ahrefs DR pull", value: "Pending integration", status: "ok" },
    ],
  };
}

// ----- Pillar 6: On-site signals (10%) -----
// Placeholder. V2 will run PageSpeed Insights on each contractor's domain.
function scoreOnSite(c: Contractor): PillarScore {
  const baseline = 60; // assume reasonable on-site signals until we audit
  const certBoost = c.certifications.length >= 3 ? 20 : c.certifications.length >= 1 ? 10 : 0;
  const score = clamp(baseline + certBoost);
  return {
    pillar: "On-site signals",
    weight: RIZESCORE_WEIGHTS.onSite,
    score,
    contribution: (score / 100) * RIZESCORE_WEIGHTS.onSite,
    signals: [
      { label: "Schema + NAP audit", value: "Pending", status: "ok" },
      { label: "PageSpeed pull", value: "Pending", status: "ok" },
    ],
  };
}

export function computeRizeScore(contractor: Contractor): RizeScoreResult {
  const pillars: PillarScore[] = [
    scoreReputation(contractor),
    scoreTrust(contractor),
    scoreService(contractor),
    scoreAIVisibility(contractor),
    scoreSEOAuthority(contractor),
    scoreOnSite(contractor),
  ];
  const overall = clamp(
    pillars.reduce((sum, p) => sum + p.contribution, 0)
  );

  let band: RizeScoreResult["band"];
  if (overall >= 90) band = "Outstanding";
  else if (overall >= 80) band = "Excellent";
  else if (overall >= 70) band = "Good";
  else if (overall >= 60) band = "Acceptable";
  else band = "Below cutoff";

  return {
    overall: Math.round(overall),
    pillars,
    band,
  };
}

export function rankContractorsByRizeScore<T extends Contractor>(
  contractors: T[]
): (T & { rizeScore: RizeScoreResult })[] {
  return contractors
    .map((c) => ({ ...c, rizeScore: computeRizeScore(c) }))
    .sort((a, b) => b.rizeScore.overall - a.rizeScore.overall);
}
