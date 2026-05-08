const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const BASE = "http://localhost:8900";
const OUT = path.join(__dirname, "..", "screenshots", "v2");
fs.mkdirSync(OUT, { recursive: true });

const VIEWPORTS = {
  desktop: { width: 1440, height: 900 },
  tablet: { width: 820, height: 1180 },
  mobile: { width: 390, height: 844 },
};

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ deviceScaleFactor: 2 });
  const page = await ctx.newPage();

  for (const [name, vp] of Object.entries(VIEWPORTS)) {
    await page.setViewportSize(vp);
    await page.goto(`${BASE}/preview/v2`, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForTimeout(1500);
    // Above-the-fold
    const fold = path.join(OUT, `v2-${name}-fold.png`);
    await page.screenshot({ path: fold, fullPage: false });
    console.log(`✓ ${path.basename(fold)}`);
    // Section captures by scrolling and grabbing viewport
    if (name === "desktop") {
      const sections = [
        { name: "byline", selector: ".heading", scrollY: 750 },
        { name: "comparison", selector: "table", scrollY: 950 },
        { name: "reviews", selector: "h2", scrollY: 1700 },
        { name: "rankings", selector: "#rank-1", scrollY: 2400 },
        { name: "rankings-mid", selector: "#rank-5", scrollY: 4200 },
        { name: "map", selector: "svg", scrollY: 6000 },
        { name: "methodology", selector: "#methodology", scrollY: 7000 },
      ];
      for (const s of sections) {
        await page.evaluate((y) => window.scrollTo(0, y), s.scrollY);
        await page.waitForTimeout(700);
        const f = path.join(OUT, `v2-desktop-${s.name}.png`);
        await page.screenshot({ path: f, fullPage: false });
        console.log(`✓ ${path.basename(f)}`);
      }
    }
    // Full page
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    const full = path.join(OUT, `v2-${name}-FULL.png`);
    await page.screenshot({ path: full, fullPage: true });
    console.log(`✓ ${path.basename(full)}`);
  }

  await browser.close();
  console.log(`\nDone. Screenshots in ${OUT}`);
})().catch((err) => {
  console.error("Capture failed:", err);
  process.exit(1);
});
