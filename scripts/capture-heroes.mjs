import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const BASE = "http://localhost:8800";
const OUT = "screenshots/heroes";

const BRANDS = ["editorial", "utility"];
const ARCHETYPES = ["city", "service-city", "cost"];
const HEROES = ["zip-only", "multistep", "editorial-sticky"];
const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

async function run() {
  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch();
  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
    });
    for (const brand of BRANDS) {
      for (const arch of ARCHETYPES) {
        for (const hero of HEROES) {
          const page = await ctx.newPage();
          const url = `${BASE}/preview/${brand}/${arch}/${hero}`;
          const file = `${OUT}/${vp.name}-${brand}-${arch}-${hero}.png`;
          try {
            await page.goto(url, { waitUntil: "networkidle", timeout: 45000 });
            await page.waitForTimeout(400);
            await page.screenshot({ path: file, fullPage: false });
            console.log(`✓ ${file}`);
          } catch (e) {
            console.log(`✗ ${file} :: ${e.message}`);
          }
          await page.close();
        }
      }
    }
    await ctx.close();
  }
  await browser.close();
}
run();
