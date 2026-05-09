const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const BASE = "http://localhost:8900";
const OUT = path.join(__dirname, "..", "screenshots", "v2");
fs.mkdirSync(OUT, { recursive: true });

const ROUTES = [
  { route: "/", label: "home" },
  { route: "/hvac/tucson", label: "hvac-tucson" },
  { route: "/ac-repair/tucson", label: "ac-repair-tucson" },
  { route: "/hvac-cost/tucson", label: "hvac-cost-tucson" },
];

const VIEWPORTS = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 390, height: 844 },
};

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  for (const r of ROUTES) {
    for (const [vpName, vp] of Object.entries(VIEWPORTS)) {
      await page.setViewportSize(vp);
      await page.goto(`${BASE}${r.route}`, { waitUntil: "networkidle", timeout: 60000 });
      await page.waitForTimeout(1200);
      const filename = `${r.label}-${vpName}-fold.png`;
      await page.screenshot({ path: path.join(OUT, filename), fullPage: false });
      console.log(`✓ ${filename}`);
      if (vpName === "desktop") {
        const fullName = `${r.label}-desktop-FULL.png`;
        await page.screenshot({ path: path.join(OUT, fullName), fullPage: true });
        console.log(`✓ ${fullName}`);
      }
    }
  }
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
