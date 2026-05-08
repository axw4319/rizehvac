import { TUCSON_CONTRACTORS } from "@/data/tucson-contractors";
import { V2ContractorCard } from "./V2ContractorCard";

export function V2RankingsSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm mb-6" style={{ color: "var(--brand-fg-soft)" }}>
          <span><strong style={{ color: "var(--brand-fg)" }}>62</strong> contractors researched</span>
          <span><strong style={{ color: "var(--brand-fg)" }}>10</strong> recommended</span>
          <span><strong style={{ color: "var(--brand-fg)" }}>4.8</strong> avg rating</span>
          <span>Updated May 8, 2026</span>
        </div>
        <h2 className="heading text-3xl md:text-4xl mb-3">The 10 best HVAC contractors in Tucson, ranked</h2>
        <p className="text-base md:text-lg max-w-3xl mb-8" style={{ color: "var(--brand-fg-soft)" }}>
          Our editorial team — backed by Carlos Mendoza, NATE-certified Master Technician with 22 years in Arizona — interviewed technicians, compared warranties, and verified review authenticity. Here's who we'd hire for our own homes, and why.
        </p>
        <div className="space-y-4">
          {TUCSON_CONTRACTORS.map((c) => (
            <V2ContractorCard key={c.rank} contractor={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
