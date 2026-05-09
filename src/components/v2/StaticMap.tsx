import type { CityData } from "@/data/types";

const NEIGHBORHOODS = [
  { name: "Catalina Foothills", x: 0.62, y: 0.18 },
  { name: "Oro Valley", x: 0.30, y: 0.10 },
  { name: "Marana", x: 0.10, y: 0.20 },
  { name: "Downtown", x: 0.50, y: 0.55 },
  { name: "Sam Hughes", x: 0.56, y: 0.50 },
  { name: "Casas Adobes", x: 0.42, y: 0.30 },
  { name: "Vail", x: 0.84, y: 0.78 },
];

function project(lat: number, lng: number, bbox: CityData["bbox"]) {
  const x = ((lng - bbox.minLng) / (bbox.maxLng - bbox.minLng)) * 100;
  const y = (1 - (lat - bbox.minLat) / (bbox.maxLat - bbox.minLat)) * 100;
  return { x: Math.max(2, Math.min(98, x)), y: Math.max(2, Math.min(98, y)) };
}

export function StaticMap({ city }: { city: CityData }) {
  return (
    <section className="py-10" style={{ background: "var(--brand-surface)" }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "var(--brand-border)" }}>
          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-5 p-6 md:p-7" style={{ background: "var(--brand-muted)" }}>
              <div className="text-xs uppercase font-semibold tracking-wider" style={{ color: "var(--brand-accent)" }}>
                Service area
              </div>
              <h3 className="heading text-2xl md:text-3xl mt-1">Where our top picks operate</h3>
              <p className="text-sm mt-3" style={{ color: "var(--brand-fg-soft)" }}>
                Pins below are color-coded by rank — green is our #1 pick, ranking down through the top {city.contractors.length}. {city.meta.city} metro coverage spans {city.meta.metroPopulation.toLocaleString()} residents.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2 text-xs" style={{ color: "var(--brand-fg-soft)" }}>
                {[
                  ["Avg response", "2.1 hrs"],
                  ["Same-day rate", "87%"],
                  ["State", city.meta.state],
                  ["Recommended", `${city.contractors.length} contractors`],
                ].map(([k, v]) => (
                  <div key={k}>
                    <div className="font-semibold" style={{ color: "var(--brand-fg)" }}>{v}</div>
                    <div>{k}</div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto lg:min-h-[400px]"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 40%, #F1ECE2 0%, #E8DDC6 60%, #C6B79A 100%)",
              }}
            >
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full"
                style={{ pointerEvents: "none" }}
              >
                <path d="M0,72 Q25,68 50,72 T100,75" stroke="#3A6B57" strokeWidth="0.4" fill="none" opacity="0.45" />
                <path d="M0,82 Q35,78 60,82 T100,84" stroke="#3A6B57" strokeWidth="0.4" fill="none" opacity="0.35" />
                <path d="M30,0 Q34,30 30,55 T28,100" stroke="#9E8665" strokeWidth="0.4" fill="none" opacity="0.55" />
                <path d="M62,0 Q66,40 64,68 T62,100" stroke="#9E8665" strokeWidth="0.4" fill="none" opacity="0.55" />
                <path d="M0,30 Q35,28 60,32 T100,28" stroke="#9E8665" strokeWidth="0.5" fill="none" opacity="0.65" />
              </svg>
              {city.slug === "tucson" ? NEIGHBORHOODS.map((n) => (
                <div
                  key={n.name}
                  className="absolute text-[10px] font-semibold"
                  style={{
                    left: `${n.x * 100}%`,
                    top: `${n.y * 100}%`,
                    transform: "translate(-50%, -50%)",
                    color: "rgba(58, 66, 84, 0.7)",
                    letterSpacing: "0.04em",
                    textShadow: "0 0 4px rgba(255,255,255,0.6)",
                  }}
                >
                  {n.name}
                </div>
              )) : null}
              {city.contractors.map((c) => {
                const coords = city.contractorCoords[c.rank];
                if (!coords) return null;
                const { x, y } = project(coords.lat, coords.lng, city.bbox);
                const isTop3 = c.rank <= 3;
                return (
                  <div
                    key={c.rank}
                    className="absolute"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -100%)",
                    }}
                    title={c.name}
                  >
                    <div
                      className="grid place-items-center rounded-full text-xs font-semibold shadow-lg"
                      style={{
                        width: isTop3 ? 32 : 26,
                        height: isTop3 ? 32 : 26,
                        background: isTop3 ? "var(--brand-accent)" : "var(--brand-cta)",
                        color: "white",
                        border: "2px solid white",
                      }}
                    >
                      {c.rank}
                    </div>
                    <div
                      className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-2 w-2 rotate-45"
                      style={{ background: isTop3 ? "var(--brand-accent)" : "var(--brand-cta)", border: "2px solid white", borderTop: 0, borderLeft: 0 }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
