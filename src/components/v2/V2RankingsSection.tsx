import { V2ContractorCard } from "./V2ContractorCard";
import type { CityData } from "@/data/types";

export function V2RankingsSection({ city }: { city: CityData }) {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm mb-6" style={{ color: "var(--brand-fg-soft)" }}>
          <span><strong style={{ color: "var(--brand-fg)" }}>{city.meta.totalContractorsResearched}</strong> contractors researched</span>
          <span><strong style={{ color: "var(--brand-fg)" }}>{city.contractors.length}</strong> recommended</span>
          <span><strong style={{ color: "var(--brand-fg)" }}>{city.meta.avgRating.toFixed(1)}</strong> avg rating</span>
          <span>Updated {city.meta.lastResearched}</span>
        </div>
        <h2 className="heading text-3xl md:text-4xl mb-3">The {city.contractors.length} best HVAC contractors in {city.meta.city}, ranked</h2>
        <p className="text-base md:text-lg max-w-3xl mb-8" style={{ color: "var(--brand-fg-soft)" }}>
          Our editorial team — backed by {city.credits.factChecker.name}, {city.credits.factChecker.title} — interviewed technicians, compared warranties, and verified review authenticity. Here's who we'd hire for our own homes, and why.
        </p>
        <div className="space-y-4">
          {city.contractors.map((c) => (
            <V2ContractorCard key={c.rank} contractor={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
