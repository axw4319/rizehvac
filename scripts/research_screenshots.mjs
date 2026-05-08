import { chromium } from 'playwright';
import fs from 'fs';

const OUT = '/Users/aaronwhittaker/Claude/rizehvac/screenshots/research';
fs.mkdirSync(OUT, { recursive: true });

const sites = [
  ['money',          'https://money.com/best-hvac-companies/'],
  ['bbb',            'https://www.bbb.org/near-me/heating-and-air-conditioning'],
  ['angi-tucson',    'https://www.angi.com/companylist/us/az/tucson/heating-cooling.htm'],
  ['forbes',         'https://www.forbes.com/home-improvement/hvac/best-hvac-companies/'],
  ['thisoldhouse',   'https://www.thisoldhouse.com/heating-cooling/reviews/best-hvac-companies'],
  ['angi-hvac',      'https://www.angi.com/hvac/'],
  ['thumbtack',      'https://www.thumbtack.com/k/hvac/near-me/'],
  ['houzz',          'https://www.houzz.com/professionals/hvac-contractor'],
  ['homeadvisor',    'https://www.homeadvisor.com/c.HVAC.html'],
  ['nerdwallet',     'https://www.nerdwallet.com/best/banking/savings-accounts'],
  ['wirecutter',     'https://www.nytimes.com/wirecutter/reviews/best-air-conditioner/'],
  ['bankrate',       'https://www.bankrate.com/banking/savings/best-high-yield-interests-savings-accounts/'],
  ['tripadvisor',    'https://www.tripadvisor.com/Restaurants-g31337-Tucson_Arizona.html'],
  ['yelp-tucson-ac', 'https://www.yelp.com/search?find_desc=Air+Conditioning+Repair&find_loc=Tucson%2C+AZ'],
  ['dandhac',        'https://www.dandhac.com/'],
  ['goettl-tucson',  'https://www.goettl.com/location/tucson-arizona/'],
  ['hamstrahvac',    'https://www.hamstrahvac.com/'],
  ['parker-tucson',  'https://www.parkerandsons.com/tucson/cooling/ac-repair'],
  ['cnet-hvac',      'https://www.cnet.com/home/heating-cooling/best-hvac-companies/'],
  ['usnews-hvac',    'https://www.usnews.com/360-reviews/services/best-hvac-companies'],
  ['consumeraffairs','https://www.consumeraffairs.com/homeowners/hvac/'],
  ['ad-hvac',        'https://www.architecturaldigest.com/reviews/home-warranty/best-home-warranty-companies-for-hvac'],
];

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
});

const results = [];
for (const [name, url] of sites) {
  const page = await ctx.newPage();
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 35000 });
    await page.waitForTimeout(2500); // let JS hydrate
    // Above-the-fold viewport screenshot
    await page.screenshot({ path: `${OUT}/${name}__hero.png`, fullPage: false });
    // Full-page screenshot for body structure
    await page.screenshot({ path: `${OUT}/${name}__full.png`, fullPage: true });
    // Pull headings + key text from the rendered DOM
    const text = await page.evaluate(() => {
      const pick = (sel) => Array.from(document.querySelectorAll(sel)).slice(0,30).map(el => el.innerText.trim()).filter(Boolean);
      return {
        title: document.title,
        h1: pick('h1'),
        h2: pick('h2'),
        h3: pick('h3').slice(0, 20),
        bylineCandidates: pick('[class*="byline"], [class*="author"], [rel="author"]').slice(0,5),
        dateCandidates: pick('time, [class*="date"], [class*="updated"]').slice(0,8),
        ctas: pick('button, a.button, a[class*="cta"], a[class*="btn"]').slice(0,15),
      };
    });
    results.push({ name, url, ok: true, text });
    console.log(`OK   ${name}`);
  } catch (e) {
    results.push({ name, url, ok: false, error: String(e).slice(0,200) });
    console.log(`FAIL ${name}: ${String(e).slice(0,120)}`);
  }
  await page.close();
}
await browser.close();
fs.writeFileSync(`${OUT}/_meta.json`, JSON.stringify(results, null, 2));
console.log(`\nDone. Wrote ${results.filter(r=>r.ok).length}/${results.length} screenshots.`);
