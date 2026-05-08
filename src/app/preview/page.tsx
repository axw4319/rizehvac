import Link from "next/link";
import { BRANDS, type BrandId } from "@/lib/brands";
import {
  ARCHETYPE_META,
  HERO_META,
  ARCHETYPES,
  HEROES,
  type ArchetypeId,
  type HeroId,
} from "@/lib/variants";

export default function PreviewIndex() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "#0B1220",
        color: "#E2E8F0",
        fontFamily: "var(--font-sans)",
      }}
    >
      <header className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#94A3B8" }}>
            Design checkpoint · rizehvac
          </div>
          <h1 className="text-4xl font-semibold tracking-tight mt-2">
            2 brands × 3 archetypes × 3 heroes = 18 mockups
          </h1>
          <p className="mt-4 max-w-2xl text-lg" style={{ color: "#CBD5E1" }}>
            Real Tucson HVAC contractor data, real cost benchmarks, real Ahrefs keyword targets. Click any tile to view the full mockup. Pick a brand direction + a hero variant per archetype, or kill both and tell me what you want instead.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-3 max-w-3xl">
            <Card label="City KD avg" value="17" sub="Tucson head terms" />
            <Card label="Combined volume" value="1,200" sub="searches/month" />
            <Card label="Real contractors" value="10" sub="ranked w/ verified data" />
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10 grid gap-12">
        {(Object.keys(BRANDS) as BrandId[]).map((brandId) => {
          const brand = BRANDS[brandId];
          return (
            <div key={brandId}>
              <div className="flex flex-wrap items-end justify-between gap-4 mb-5">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#94A3B8" }}>
                    Brand direction · {brandId === "editorial" ? "A" : "B"}
                  </div>
                  <h2 className="text-3xl font-semibold mt-1" style={{ color: "#F8FAFC" }}>{brand.name}</h2>
                  <p className="mt-2 max-w-2xl" style={{ color: "#94A3B8" }}>{brand.description}</p>
                </div>
                <div className="flex gap-2">
                  {Object.values(brand.colors).slice(0, 5).map((c) => (
                    <div
                      key={c}
                      className="h-8 w-8 rounded-lg"
                      style={{ background: c, border: "1px solid rgba(255,255,255,0.1)" }}
                      title={c}
                    />
                  ))}
                </div>
              </div>

              <div className="grid gap-8">
                {(ARCHETYPES as readonly ArchetypeId[]).map((archetype) => {
                  const meta = ARCHETYPE_META[archetype];
                  return (
                    <div key={archetype}>
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                        <h3 className="text-xl font-semibold" style={{ color: "#F8FAFC" }}>
                          {meta.name}
                        </h3>
                        <code className="text-xs px-2 py-0.5 rounded" style={{ color: "#CBD5E1", background: "rgba(255,255,255,0.05)" }}>
                          {meta.route}
                        </code>
                      </div>
                      <p className="text-sm mb-4" style={{ color: "#94A3B8" }}>{meta.description}</p>
                      <div className="grid sm:grid-cols-3 gap-4">
                        {(HEROES as readonly HeroId[]).map((hero) => {
                          const heroMeta = HERO_META[hero];
                          return (
                            <Link
                              key={hero}
                              href={`/preview/${brandId}/${archetype}/${hero}`}
                              className="group rounded-xl border overflow-hidden hover:border-white/30 transition"
                              style={{
                                background: "#111A2C",
                                borderColor: "rgba(255,255,255,0.10)",
                              }}
                            >
                              <div
                                className="aspect-[4/3] relative overflow-hidden"
                                style={{ background: brand.colors.bg }}
                              >
                                <iframe
                                  src={`/preview/${brandId}/${archetype}/${hero}`}
                                  className="absolute pointer-events-none"
                                  style={{
                                    width: 1280,
                                    height: 960,
                                    transform: "scale(0.265)",
                                    transformOrigin: "top left",
                                    border: 0,
                                  }}
                                  loading="lazy"
                                />
                              </div>
                              <div className="p-4">
                                <div className="flex items-center justify-between">
                                  <div className="font-semibold text-sm" style={{ color: "#F8FAFC" }}>
                                    {heroMeta.name}
                                  </div>
                                  <span className="text-xs opacity-0 group-hover:opacity-100 transition" style={{ color: "#60A5FA" }}>
                                    Open →
                                  </span>
                                </div>
                                <p className="mt-1 text-xs" style={{ color: "#94A3B8" }}>{heroMeta.description}</p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>

      <footer className="border-t border-white/10 mt-12">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm" style={{ color: "#94A3B8" }}>
          Once you pick a direction, I'll build the chosen variant for production at <code style={{ color: "#CBD5E1" }}>/hvac/tucson/</code>, run QA, and request your "ship it" before anything goes live.
        </div>
      </footer>
    </div>
  );
}

function Card({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-xl border p-4" style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.10)" }}>
      <div className="text-xs uppercase tracking-wider" style={{ color: "#94A3B8" }}>{label}</div>
      <div className="text-3xl font-semibold mt-1" style={{ color: "#F8FAFC" }}>{value}</div>
      <div className="text-xs mt-1" style={{ color: "#94A3B8" }}>{sub}</div>
    </div>
  );
}
