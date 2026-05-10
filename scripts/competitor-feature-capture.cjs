/* eslint-disable no-console */
/**
 * Capture key feature screenshots from competitor directory sites.
 * Save to ~/Claude/rizehvac/screenshots/competitor-functionality/
 */
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const OUT = path.join(process.env.HOME, 'Claude/rizehvac/screenshots/competitor-functionality');
fs.mkdirSync(OUT, { recursive: true });

const SITES = [
  { slug: 'yelp', url: 'https://www.yelp.com/biz/d-h-air-conditioning-tucson', label: 'Yelp single-business profile' },
  { slug: 'angi', url: 'https://www.angi.com/companylist/us/tx/dallas/heating-cooling.htm', label: 'Angi directory listing' },
  { slug: 'bbb', url: 'https://www.bbb.org/us/tx/dallas/category/heating-air-conditioning', label: 'BBB directory + accreditation' },
  { slug: 'houzz', url: 'https://www.houzz.com/professionals/hvac-contractor', label: 'Houzz pro listing' },
  { slug: 'thumbtack', url: 'https://www.thumbtack.com/k/hvac/near-me/', label: 'Thumbtack marketplace' },
  { slug: 'homeadvisor', url: 'https://www.homeadvisor.com/c.HVAC.html', label: 'HomeAdvisor lead-gen' },
];

const VIEWPORTS = [
  { name: 'desktop', w: 1440, h: 900 },
  { name: 'mobile', w: 390, h: 844 },
];

const FEATURE_PROBES = [
  // selectors to detect features
  { feature: 'lead-form', selectors: ['form[action*="lead"]', 'form[action*="quote"]', 'input[placeholder*="ZIP"]', 'input[placeholder*="zip"]', 'button:has-text("Get quote")', 'button:has-text("Get a quote")', 'button:has-text("Request a quote")', 'button:has-text("Get matched")'] },
  { feature: 'phone-cta', selectors: ['a[href^="tel:"]'] },
  { feature: 'review-submit', selectors: ['a[href*="review"]', 'button:has-text("Write a review")', 'a:has-text("Write a review")'] },
  { feature: 'photo-upload', selectors: ['input[type="file"]', 'a:has-text("Add a photo")', 'a:has-text("Upload")'] },
  { feature: 'profile-claim', selectors: ['a:has-text("Claim")', 'a:has-text("Is this your business")', 'a[href*="claim"]'] },
  { feature: 'trust-badge', selectors: ['[class*="badge"]', '[class*="verified"]', '[aria-label*="Verified"]', '[aria-label*="Accredited"]'] },
  { feature: 'filter-sort', selectors: ['select[name*="sort"]', 'button:has-text("Sort")', 'button:has-text("Filter")', '[role="listbox"]'] },
  { feature: 'compare', selectors: ['button:has-text("Compare")', 'a:has-text("Compare")', 'input[type="checkbox"][name*="compare"]'] },
  { feature: 'save-favorites', selectors: ['button[aria-label*="Save"]', 'button[aria-label*="favorite"]', 'a:has-text("Save")', '[class*="bookmark"]'] },
  { feature: 'photo-gallery', selectors: ['[class*="gallery"]', '[class*="carousel"]', '[role="img"]'] },
  { feature: 'service-area-map', selectors: ['iframe[src*="maps"]', '[class*="map"]', '[id*="map"]'] },
  { feature: 'message-the-pro', selectors: ['button:has-text("Message")', 'a:has-text("Message")', 'button:has-text("Contact")'] },
  { feature: 'hours', selectors: ['*:has-text("Hours")', '[itemprop="openingHours"]'] },
  { feature: 'languages', selectors: ['*:has-text("Languages")'] },
  { feature: 'payment-methods', selectors: ['*:has-text("Accepts credit")', '*:has-text("Payment")'] },
];

async function probeFeatures(page) {
  const results = {};
  for (const probe of FEATURE_PROBES) {
    let found = 0;
    for (const sel of probe.selectors) {
      try {
        const c = await page.locator(sel).count();
        if (c > 0) { found = c; break; }
      } catch (e) { /* invalid sel */ }
    }
    results[probe.feature] = found;
  }
  return results;
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const features = {};

  for (const site of SITES) {
    console.log('Capturing', site.slug);
    features[site.slug] = { url: site.url, label: site.label };
    for (const vp of VIEWPORTS) {
      try {
        const ctx = await browser.newContext({
          viewport: { width: vp.w, height: vp.h },
          userAgent: vp.name === 'mobile'
            ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
            : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        });
        const page = await ctx.newPage();
        const r = await page.goto(site.url, { waitUntil: 'domcontentloaded', timeout: 45000 });
        await page.waitForTimeout(2500);
        const status = r ? r.status() : 0;
        await page.screenshot({ path: path.join(OUT, `${site.slug}__${vp.name}__above.png`) });
        await page.screenshot({ path: path.join(OUT, `${site.slug}__${vp.name}__full.png`), fullPage: true });
        if (vp.name === 'desktop') {
          features[site.slug].status = status;
          features[site.slug].features = await probeFeatures(page);
          features[site.slug].title = await page.title();
        }
        await ctx.close();
      } catch (e) {
        console.log('  ERR', site.slug, vp.name, e.message.slice(0, 100));
        features[site.slug].error = e.message.slice(0, 200);
      }
    }
  }

  fs.writeFileSync(path.join(OUT, '_features.json'), JSON.stringify(features, null, 2));
  await browser.close();
  console.log('\nDone. Features written.');
})();
