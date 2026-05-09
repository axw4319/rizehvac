import { v2Vars } from "@/lib/v2theme";
import { V2Header } from "./V2Header";
import { HeroEditorial } from "./HeroEditorial";
import { MultiCreditByline } from "./MultiCreditByline";
import { QuickAnswerBlock } from "./QuickAnswerBlock";
import { ComparisonTable } from "./ComparisonTable";
import { VerifiedReviewsCarousel } from "./VerifiedReviewsCarousel";
import { V2ContractorCard } from "./V2ContractorCard";
import { StaticMap } from "./StaticMap";
import { FaqBlock } from "@/components/shared/FaqBlock";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { BRANDS } from "@/lib/brands";
import { AlertCircle, Clock, DollarSign, ShieldCheck } from "lucide-react";
import type { CityData } from "@/data/types";

const FAILURE_PATTERNS = [
  {
    title: "Capacitor or contactor failure",
    description: "Most common AC repair. Symptoms: clicks but won't start, fan runs but no cold air. Repair: $150-$350. Same-day fix in most cases.",
  },
  {
    title: "Refrigerant leak (low charge)",
    description: "Symptoms: warm air from vents, ice on copper line, hissing near outdoor unit. Repair: $250-$800. R-410A leaks add detection cost.",
  },
  {
    title: "Compressor failure",
    description: "The expensive one. Symptoms: AC runs but no cooling, breaker trips. Repair: $1,500-$2,800 — at this point evaluate replacement.",
  },
  {
    title: "Frozen evaporator coil",
    description: "Symptoms: ice on indoor unit, weak airflow. Cause: dirty filter or low refrigerant. DIY filter swap fixes 60%; otherwise call for cleaning.",
  },
];

export function ServiceCityPage({ city }: { city: CityData }) {
  const top5 = city.contractors.slice(0, 5);
  return (
    <div style={{ ...v2Vars, background: "var(--brand-bg)", minHeight: "100vh", color: "var(--brand-fg)" }}>
      <V2Header phone={city.phone} cityLabel={city.meta.city} />
      <HeroEditorial
        city={city}
        headline={`AC repair in ${city.meta.city}: who to call when your unit fails`}
        subhead={`Our top-rated ${city.meta.city} contractors for repair calls — ranked by speed, transparency, and repair-only specialization. Same-day appointments available for emergencies.`}
      />
      <MultiCreditByline credits={city.credits} />
      <QuickAnswerBlock city={city} variant="service-city" />

      <section className="py-10 md:py-12 border-b" style={{ borderColor: "var(--brand-border)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="rounded-xl p-5" style={{ background: "var(--brand-surface)", border: "1px solid var(--brand-border)" }}>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--brand-fg-soft)" }}>
                <DollarSign size={14} /> Avg {city.meta.city} cost
              </div>
              <div className="heading text-3xl mt-3">${city.costData[0]?.average.toLocaleString() ?? "380"}</div>
              <div className="text-sm mt-1" style={{ color: "var(--brand-fg-soft)" }}>Typical repair range</div>
            </div>
            <div className="rounded-xl p-5" style={{ background: "var(--brand-surface)", border: "1px solid var(--brand-border)" }}>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--brand-fg-soft)" }}>
                <Clock size={14} /> Same-day rate
              </div>
              <div className="heading text-3xl mt-3">87%</div>
              <div className="text-sm mt-1" style={{ color: "var(--brand-fg-soft)" }}>Routine AC repair calls</div>
            </div>
            <div className="rounded-xl p-5" style={{ background: "var(--brand-surface)", border: "1px solid var(--brand-border)" }}>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--brand-fg-soft)" }}>
                <ShieldCheck size={14} /> Avg warranty
              </div>
              <div className="heading text-3xl mt-3">90 days</div>
              <div className="text-sm mt-1" style={{ color: "var(--brand-fg-soft)" }}>Parts + labor on repairs</div>
            </div>
          </div>
        </div>
      </section>

      <ComparisonTable city={city} />
      <VerifiedReviewsCarousel reviews={city.verifiedReviews} cityName={city.meta.city} />

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="heading text-3xl md:text-4xl mb-3">Top 5 {city.meta.city} HVAC repair specialists</h2>
          <p className="text-base md:text-lg max-w-3xl mb-8" style={{ color: "var(--brand-fg-soft)" }}>
            Repair-only ranking. For full-system replacement see our <a href={`/hvac/${city.slug}`} style={{ color: "var(--brand-accent)" }} className="underline">best HVAC contractors guide</a>.
          </p>
          <div className="space-y-4">
            {top5.map((c) => (
              <V2ContractorCard key={c.rank} contractor={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t py-12 md:py-16" style={{ borderColor: "var(--brand-border)", background: "var(--brand-muted)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--brand-accent)" }}>
            Common AC failures
          </div>
          <h2 className="heading text-3xl md:text-4xl mb-4">What's actually wrong with your AC</h2>
          <p className="text-lg" style={{ color: "var(--brand-fg-soft)" }}>
            Four issues account for 80% of AC repair calls. Knowing the symptoms helps you describe the problem accurately when you call a contractor.
          </p>
          <div className="mt-7 grid md:grid-cols-2 gap-4">
            {FAILURE_PATTERNS.map((s, i) => (
              <div key={i} className="rounded-xl p-5" style={{ background: "var(--brand-surface)", border: "1px solid var(--brand-border)" }}>
                <div className="flex items-start gap-3">
                  <div
                    className="grid place-items-center heading text-base font-semibold shrink-0"
                    style={{ width: 32, height: 32, background: "var(--brand-accent)", color: "var(--brand-accent-fg)", borderRadius: "0.5rem" }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="heading text-lg">{s.title}</h3>
                    <p className="text-sm mt-1.5" style={{ color: "var(--brand-fg-soft)" }}>{s.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-7 rounded-xl p-5 flex items-start gap-3" style={{ background: "var(--brand-surface)", border: "1px solid var(--brand-danger)" }}>
            <AlertCircle size={20} style={{ color: "var(--brand-danger)", flexShrink: 0 }} />
            <div>
              <div className="font-semibold">When to stop trying to repair</div>
              <p className="text-sm mt-1" style={{ color: "var(--brand-fg-soft)" }}>
                The 5,000 rule: multiply system age × repair cost. Result over $5,000? Replace. {city.meta.city}-specific: drop the threshold to $4,000 because heat-stressed equipment fails again sooner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StaticMap city={city} />
      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <FaqBlock faqs={city.costFaqs.slice(0, 5)} />
      </section>
      <SiteFooter brand={BRANDS.editorial} />
    </div>
  );
}
