import { v2Vars } from "@/lib/v2theme";
import { V2Header } from "./V2Header";
import { HeroLifestyle } from "./HeroLifestyle";
import { MultiCreditByline } from "./MultiCreditByline";
import { ComparisonTable } from "./ComparisonTable";
import { VerifiedReviewsCarousel } from "./VerifiedReviewsCarousel";
import { V2RankingsSection } from "./V2RankingsSection";
import { StaticMap } from "./StaticMap";
import { MethodologyDeepDive } from "./MethodologyDeepDive";
import { FaqBlock } from "@/components/shared/FaqBlock";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { BRANDS } from "@/lib/brands";
import type { CityData } from "@/data/types";

export type V2Variant = "city" | "service-city" | "cost";

export function V2Page({
  city,
  variant = "city",
}: {
  city: CityData;
  variant?: V2Variant;
}) {
  const headlines: Record<V2Variant, { headline: string; subhead: string }> = {
    city: {
      headline: `The ${city.contractors.length} best HVAC contractors in ${city.meta.city}`,
      subhead: `We compared ${city.meta.totalContractorsResearched} ${city.meta.city} HVAC contractors against 8 weighted criteria. Here are the ${city.contractors.length} we'd hire — and the contractors we'd specifically avoid.`,
    },
    "service-city": {
      headline: `AC repair in ${city.meta.city}: who to call when your unit fails`,
      subhead: `Our top-rated ${city.meta.city} HVAC contractors for repair calls, ranked by speed, transparency, and repair-only specialization.`,
    },
    cost: {
      headline: `How much does HVAC cost in ${city.meta.city}? 2026 prices, rebates, and what to budget`,
      subhead: `Real ${city.meta.city} HVAC pricing benchmarks, stackable rebate programs, and what's worth paying for. Updated quarterly.`,
    },
  };
  const { headline, subhead } = headlines[variant];

  return (
    <div style={{ ...v2Vars, background: "var(--brand-bg)", minHeight: "100vh", color: "var(--brand-fg)" }}>
      <V2Header phone={city.phone} cityLabel={city.meta.city} />
      <HeroLifestyle city={city} headline={headline} subhead={subhead} />
      <MultiCreditByline credits={city.credits} />
      <ComparisonTable city={city} />
      <VerifiedReviewsCarousel reviews={city.verifiedReviews} cityName={city.meta.city} />
      <V2RankingsSection city={city} />
      <StaticMap city={city} />
      <MethodologyDeepDive city={city} />
      <section className="border-t" style={{ borderColor: "var(--brand-border)", background: "var(--brand-muted)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <FaqBlock title={`${city.meta.city} HVAC FAQ`} faqs={city.costFaqs.slice(0, 6)} />
        </div>
      </section>
      <SiteFooter brand={BRANDS.editorial} />
    </div>
  );
}
