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
import { TUCSON_COST_FAQS } from "@/data/tucson-cost";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { BRANDS } from "@/lib/brands";

export function V2Page() {
  return (
    <div style={{ ...v2Vars, background: "var(--brand-bg)", minHeight: "100vh", color: "var(--brand-fg)" }}>
      <V2Header />
      <HeroLifestyle />
      <MultiCreditByline />
      <ComparisonTable />
      <VerifiedReviewsCarousel />
      <V2RankingsSection />
      <StaticMap />
      <MethodologyDeepDive />
      <section className="border-t" style={{ borderColor: "var(--brand-border)", background: "var(--brand-muted)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <FaqBlock title="Tucson HVAC FAQ" faqs={TUCSON_COST_FAQS.slice(0, 6)} />
        </div>
      </section>
      <SiteFooter brand={BRANDS.editorial} />
    </div>
  );
}
