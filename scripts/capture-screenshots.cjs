const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const BASE = "http://localhost:8772";
const OUT = path.join(__dirname, "..", "screenshots");
fs.mkdirSync(OUT, { recursive: true });

const VIEWPORTS = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 390, height: 844 },
};

const BRANDS = ["editorial", "utility"];
const ARCHETYPES = ["city", "service-city", "cost"];
const HEROES = ["zip-only", "multistep", "editorial-sticky"];

async function shoot(page, route, label, viewportName, fullPage = false) {
  await page.setViewportSize(VIEWPORTS[viewportName]);
  await page.goto(`${BASE}${route}`, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(800);
  const filename = `${label}__${viewportName}${fullPage ? "__full" : ""}.png`;
  const filepath = path.join(OUT, filename);
  await page.screenshot({ path: filepath, fullPage });
  console.log(`✓ ${filename}`);
  return filename;
}

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  // Index page
  await shoot(page, "/preview", "00-INDEX", "desktop", false);
  await shoot(page, "/preview", "00-INDEX", "mobile", false);

  // All 18 variants (above-the-fold desktop)
  for (const brand of BRANDS) {
    for (const archetype of ARCHETYPES) {
      for (const hero of HEROES) {
        const route = `/preview/${brand}/${archetype}/${hero}`;
        const label = `${brand}__${archetype}__${hero}`;
        await shoot(page, route, label, "desktop", false);
      }
    }
  }

  // Mobile of one full variant per brand+archetype combo (so Aaron sees mobile breakdown)
  for (const brand of BRANDS) {
    for (const archetype of ARCHETYPES) {
      const route = `/preview/${brand}/${archetype}/zip-only`;
      const label = `${brand}__${archetype}__zip-only`;
      await shoot(page, route, label, "mobile", false);
    }
  }

  // Two full-page captures of standout variants for deep review
  await shoot(page, "/preview/editorial/city/editorial-sticky", "FULL__editorial__city__editorial-sticky", "desktop", true);
  await shoot(page, "/preview/utility/service-city/multistep", "FULL__utility__service-city__multistep", "desktop", true);

  await browser.close();
  console.log(`\nDone. Screenshots in ${OUT}`);
})().catch((err) => {
  console.error("Capture failed:", err);
  process.exit(1);
});
