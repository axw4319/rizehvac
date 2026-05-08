import { type Brand } from "@/lib/brands";
import { TUCSON_CONTRACTORS, TUCSON_META } from "@/data/tucson-contractors";
import { TUCSON_COST_FAQS } from "@/data/tucson-cost";
import { ContractorCard } from "@/components/shared/ContractorCard";
import { MethodologyBlock } from "@/components/shared/MethodologyBlock";
import { FaqBlock } from "@/components/shared/FaqBlock";

export function CityDirectoryBody({ brand }: { brand: Brand }) {
  return (
    <main>
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm mb-8" style={{ color: "var(--brand-muted-fg)" }}>
            <span><strong style={{ color: "var(--brand-fg)" }}>{TUCSON_META.totalContractorsResearched}</strong> contractors researched</span>
            <span><strong style={{ color: "var(--brand-fg)" }}>{TUCSON_META.contractorCount}</strong> recommended</span>
            <span><strong style={{ color: "var(--brand-fg)" }}>{TUCSON_META.avgRating.toFixed(1)}</strong> avg rating</span>
            <span>Updated {TUCSON_META.lastResearched}</span>
          </div>
          <h2 className="heading text-3xl md:text-4xl mb-3">The 10 best HVAC contractors in Tucson, ranked</h2>
          <p className="text-lg" style={{ color: "var(--brand-muted-fg)" }}>
            Our editorial team spent 40 hours interviewing technicians, comparing warranties, and reading verified reviews. Here's who we'd hire and why.
          </p>
        </div>
      </section>

      <section className="pb-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 space-y-5">
          {TUCSON_CONTRACTORS.map((c) => (
            <ContractorCard key={c.rank} contractor={c} brand={brand} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <MethodologyBlock />
      </section>

      <section className="border-t" style={{ borderColor: "var(--brand-border)", background: "var(--brand-muted)" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 md:py-16">
          <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--brand-accent)" }}>
            About Tucson HVAC
          </div>
          <h2 className="heading text-3xl md:text-4xl mb-4">Why Tucson HVAC is different</h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--brand-muted-fg)" }}>
            {TUCSON_META.climateNotes}
          </p>
          <p className="text-base mt-4 leading-relaxed" style={{ color: "var(--brand-muted-fg)" }}>
            {TUCSON_META.permittingNotes}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <FaqBlock faqs={TUCSON_COST_FAQS.slice(0, 5)} />
      </section>
    </main>
  );
}
