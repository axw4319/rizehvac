// Cross-browser QA against the LIVE production URL.
// 3 browsers × 5 viewports × 7 routes = 105 screenshots.
const fs = require("fs");
const path = require("path");
const { chromium, firefox, webkit } = require("playwright");

const BASE = process.env.QA_BASE || "https://rizehvac.onrender.com";
const OUT = path.join(__dirname, "..", "screenshots", "qa-live");
fs.mkdirSync(OUT, { recursive: true });

const ROUTES = [
  { route: "/", label: "home" },
  { route: "/blog", label: "blog-index" },
  { route: "/blog/5000-rule-hvac-repair-vs-replace", label: "blog-5k" },
  { route: "/what-is-rizescore", label: "rizescore" },
  { route: "/methodology", label: "methodology" },
  { route: "/hvac/dallas", label: "dallas-city" },
  { route: "/authors/aaron-whittaker", label: "author-aaron" },
];

const VIEWPORTS = [
  { name: "iphone14", w: 390, h: 844 },
  { name: "pixel7", w: 412, h: 915 },
  { name: "tablet", w: 768, h: 1024 },
  { name: "desktop1440", w: 1440, h: 900 },
  { name: "desktop1920", w: 1920, h: 1080 },
];

const BROWSERS = [
  { name: "chromium", launcher: chromium },
  { name: "firefox", launcher: firefox },
  { name: "webkit", launcher: webkit },
];

const issues = [];

(async () => {
  for (const b of BROWSERS) {
    console.log(`\n▶ ${b.name}`);
    const browser = await b.launcher.launch();
    for (const v of VIEWPORTS) {
      const ctx = await browser.newContext({ viewport: { width: v.w, height: v.h }, deviceScaleFactor: 2 });
      const page = await ctx.newPage();
      const consoleErrors = [];
      page.on("pageerror", (e) => consoleErrors.push(`[pageerror] ${e.message}`));
      page.on("console", (m) => { if (m.type() === "error") consoleErrors.push(`[console.error] ${m.text().slice(0, 200)}`); });
      page.on("requestfailed", (r) => consoleErrors.push(`[net-fail] ${r.url().slice(0, 100)} → ${r.failure()?.errorText}`));

      for (const r of ROUTES) {
        try {
          const t0 = Date.now();
          await page.goto(`${BASE}${r.route}`, { waitUntil: "networkidle", timeout: 60000 });
          const elapsed = Date.now() - t0;
          await page.waitForTimeout(500);
          const filename = `${r.label}__${b.name}__${v.name}.png`;
          await page.screenshot({ path: path.join(OUT, filename), fullPage: false });
          process.stdout.write(elapsed > 5000 ? "S" : "✓");
        } catch (e) {
          issues.push({ browser: b.name, viewport: v.name, route: r.route, error: String(e).slice(0, 200) });
          process.stdout.write("✗");
        }
      }
      if (consoleErrors.length) {
        issues.push({ browser: b.name, viewport: v.name, consoleErrors: consoleErrors.slice(0, 5) });
      }
      await ctx.close();
    }
    await browser.close();
  }

  fs.writeFileSync(path.join(OUT, "_issues.json"), JSON.stringify(issues, null, 2));
  console.log(`\n\nDone. ${issues.length} issue clusters captured. See ${OUT}/_issues.json`);
})().catch((e) => { console.error(e); process.exit(1); });
