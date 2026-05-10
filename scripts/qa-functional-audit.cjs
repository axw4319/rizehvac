/* eslint-disable no-console */
/**
 * Functional QA audit for rizehvac.onrender.com
 * Tests every flow + interaction + form + link.
 * Saves to ~/Claude/rizehvac/screenshots/qa-functional/
 */
const { chromium, webkit, firefox } = require('playwright');
const path = require('path');
const fs = require('fs');

const OUT = path.join(process.env.HOME, 'Claude/rizehvac/screenshots/qa-functional');
fs.mkdirSync(OUT, { recursive: true });

const BASE = 'https://rizehvac.onrender.com';

const PAGES = [
  { slug: 'home', url: '/' },
  { slug: 'blog-index', url: '/blog' },
  { slug: 'blog-post', url: '/blog/5000-rule-hvac-repair-vs-replace' },
  { slug: 'methodology', url: '/methodology' },
  { slug: 'rizescore', url: '/what-is-rizescore' },
  { slug: 'about', url: '/about' },
  { slug: 'contact', url: '/contact' },
  { slug: 'privacy', url: '/privacy' },
  { slug: 'terms', url: '/terms' },
  { slug: 'author-aaron', url: '/authors/aaron-whittaker' },
  { slug: 'author-lena', url: '/authors/lena-park' },
  { slug: 'hvac-dallas', url: '/hvac/dallas' },
  { slug: 'ac-dallas', url: '/ac-repair/dallas' },
  { slug: 'cost-dallas', url: '/hvac-cost/dallas' },
  { slug: 'fakecity-404', url: '/hvac/fakecity-test', expect404: true },
];

const VIEWPORTS = [
  { name: 'mobile', w: 390, h: 844, isMobile: true },
  { name: 'tablet', w: 768, h: 1024 },
  { name: 'desktop', w: 1440, h: 900 },
];

const findings = {
  consoleErrors: [],
  networkFailures: [],
  brokenLinks: [],
  formIssues: [],
  navigation: [],
  axe: [],
  pageStatuses: {},
  flowResults: {},
  notes: [],
};

async function withBrowser(name, launch, fn) {
  let browser;
  try {
    browser = await launch();
    await fn(browser);
  } catch (e) {
    findings.notes.push(`Browser ${name} failed: ${e.message}`);
  } finally {
    if (browser) await browser.close();
  }
}

async function captureAllPages(browser, browserName) {
  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({
      viewport: { width: vp.w, height: vp.h },
      userAgent: vp.isMobile
        ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
        : undefined,
    });
    const page = await ctx.newPage();

    page.on('console', msg => {
      if (msg.type() === 'error') {
        findings.consoleErrors.push({ browser: browserName, vp: vp.name, text: msg.text().slice(0, 200) });
      }
    });
    page.on('requestfailed', req => {
      findings.networkFailures.push({ browser: browserName, vp: vp.name, url: req.url(), failure: req.failure()?.errorText });
    });

    for (const p of PAGES) {
      try {
        const resp = await page.goto(BASE + p.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
        const status = resp ? resp.status() : 0;
        findings.pageStatuses[`${p.slug}__${browserName}__${vp.name}`] = status;
        if (p.expect404 && status !== 404) {
          findings.notes.push(`Expected 404 at ${p.url}, got ${status}`);
        }
        // wait a bit for any post-hydration scripts
        await page.waitForTimeout(800);
        await page.screenshot({
          path: path.join(OUT, `${p.slug}__${browserName}__${vp.name}.png`),
          fullPage: true,
        });
      } catch (e) {
        findings.notes.push(`Page ${p.url} failed in ${browserName}/${vp.name}: ${e.message.slice(0, 200)}`);
      }
    }
    await ctx.close();
  }
}

async function testFlows(browser) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();

  // Flow 1: Match form (hero ZIP card) — submit attempt
  try {
    await page.goto(BASE + '/', { waitUntil: 'domcontentloaded' });
    const submitBtn = page.locator('button:has-text("Match me")').first();
    const submitVisible = await submitBtn.isVisible().catch(() => false);
    if (!submitVisible) {
      findings.flowResults['match-form'] = 'FAIL: Match button not visible';
    } else {
      // Check button type
      const btnType = await submitBtn.getAttribute('type');
      const formAction = await page.locator('form').first().getAttribute('action');
      const formMethod = await page.locator('form').first().getAttribute('method');
      // attempt click without filling
      await submitBtn.click({ trial: false }).catch(() => {});
      await page.waitForTimeout(500);
      const stillOnHome = page.url().includes('rizehvac.onrender.com/');
      findings.flowResults['match-form'] = `Btn type="${btnType}" formAction="${formAction || 'none'}" formMethod="${formMethod || 'none'}" — stayed on page: ${stillOnHome}`;

      // Test required-field validation: try filling and submit
      await page.fill('input[placeholder="ZIP code"]', '75201');
      await page.selectOption('select', { index: 1 }).catch(() => {});
      await page.fill('input[placeholder="Email for your quote"]', 'test@example.com');
      await submitBtn.click().catch(() => {});
      await page.waitForTimeout(800);
      const urlAfter = page.url();
      findings.flowResults['match-form-submit'] = `After fill+click URL: ${urlAfter}`;
      // detect any visible success state
      const bodyText = await page.locator('body').innerText();
      const hasSuccess = /thank|matched|received|success|next step|24 hours/i.test(bodyText);
      findings.flowResults['match-form-success-state'] = hasSuccess ? 'POTENTIAL pass — keyword found' : 'FAIL: no success keywords on page after submit';
    }
    await page.screenshot({ path: path.join(OUT, 'flow-match-form-after-submit.png'), fullPage: true });
  } catch (e) {
    findings.flowResults['match-form'] = `ERROR: ${e.message.slice(0, 200)}`;
  }

  // Flow 2: Tel: link presence on home and dallas pages
  try {
    await page.goto(BASE + '/', { waitUntil: 'domcontentloaded' });
    const homeTels = await page.locator('a[href^="tel:"]').count();
    await page.goto(BASE + '/hvac/dallas', { waitUntil: 'domcontentloaded' });
    const dallasTels = await page.locator('a[href^="tel:"]').count();
    const homeTelHrefs = await page.evaluate(() => Array.from(document.querySelectorAll('a[href^="tel:"]')).map(a => a.href));
    findings.flowResults['tel-links'] = `home tel count=${homeTels}, dallas tel count=${dallasTels}`;
    findings.flowResults['tel-link-samples'] = homeTelHrefs.slice(0, 5).join(' | ');
  } catch (e) {
    findings.flowResults['tel-links'] = `ERROR: ${e.message}`;
  }

  // Flow 3: Mailto: links on contact page
  try {
    await page.goto(BASE + '/contact', { waitUntil: 'domcontentloaded' });
    const mailtos = await page.locator('a[href^="mailto:"]').count();
    findings.flowResults['mailto-links'] = `count=${mailtos}`;
  } catch (e) {
    findings.flowResults['mailto-links'] = `ERROR: ${e.message}`;
  }

  // Flow 4: Footer links — Dallas city has Tucson-only footer (BUG)
  try {
    await page.goto(BASE + '/', { waitUntil: 'domcontentloaded' });
    const footerLinks = await page.evaluate(() => {
      const footer = document.querySelector('footer');
      if (!footer) return [];
      return Array.from(footer.querySelectorAll('a[href]')).map(a => ({ href: a.getAttribute('href'), text: (a.textContent || '').trim() }));
    });
    findings.flowResults['footer-links'] = footerLinks;
    // test each non-anchor footer link
    const broken = [];
    for (const link of footerLinks) {
      if (!link.href || link.href.startsWith('#') || link.href.startsWith('mailto:') || link.href.startsWith('tel:')) continue;
      const u = link.href.startsWith('http') ? link.href : BASE + link.href;
      try {
        const r = await page.context().request.get(u);
        if (r.status() >= 400) broken.push({ url: u, text: link.text, status: r.status() });
      } catch (e) {
        broken.push({ url: u, text: link.text, error: e.message.slice(0, 100) });
      }
    }
    findings.flowResults['footer-broken'] = broken;
  } catch (e) {
    findings.flowResults['footer-links'] = `ERROR: ${e.message}`;
  }

  // Flow 5: Header navigation
  try {
    await page.goto(BASE + '/', { waitUntil: 'domcontentloaded' });
    const navLinks = await page.evaluate(() => {
      const header = document.querySelector('header');
      if (!header) return [];
      return Array.from(header.querySelectorAll('a[href]')).map(a => ({ href: a.getAttribute('href'), text: (a.textContent || '').trim().slice(0, 30) }));
    });
    findings.flowResults['header-nav'] = navLinks;
  } catch (e) {
    findings.flowResults['header-nav'] = `ERROR: ${e.message}`;
  }

  // Flow 6: Methodology page — anchor links + FAQ accordion
  try {
    await page.goto(BASE + '/methodology', { waitUntil: 'domcontentloaded' });
    const detailsCount = await page.locator('details').count();
    if (detailsCount > 0) {
      const first = page.locator('details summary').first();
      await first.click().catch(() => {});
      await page.waitForTimeout(300);
      const isOpen = await page.locator('details[open]').count();
      findings.flowResults['methodology-faq'] = `details count=${detailsCount}, opened after click=${isOpen}`;
    } else {
      findings.flowResults['methodology-faq'] = `details count=0 (no FAQ accordion)`;
    }
    const anchors = await page.evaluate(() => Array.from(document.querySelectorAll('a[href^="#"]')).map(a => a.getAttribute('href')));
    findings.flowResults['methodology-anchors'] = anchors;
  } catch (e) {
    findings.flowResults['methodology-faq'] = `ERROR: ${e.message}`;
  }

  // Flow 7: Blog post — internal/external links
  try {
    await page.goto(BASE + '/blog/5000-rule-hvac-repair-vs-replace', { waitUntil: 'domcontentloaded' });
    const externalLinks = await page.evaluate(() =>
      Array.from(document.querySelectorAll('a[href^="http"]'))
        .filter(a => !a.href.includes('rizehvac.onrender.com'))
        .map(a => ({ href: a.href, text: (a.textContent || '').trim().slice(0, 40), target: a.getAttribute('target'), rel: a.getAttribute('rel') }))
    );
    findings.flowResults['blog-external-links'] = externalLinks.slice(0, 30);
    const noTarget = externalLinks.filter(l => !l.target).length;
    const noNoopener = externalLinks.filter(l => l.target === '_blank' && (!l.rel || !l.rel.includes('noopener'))).length;
    findings.flowResults['blog-external-link-summary'] = `total=${externalLinks.length}, missing target=_blank: ${noTarget}, target=_blank but no rel=noopener: ${noNoopener}`;
  } catch (e) {
    findings.flowResults['blog-external-links'] = `ERROR: ${e.message}`;
  }

  // Flow 8: Author page — outbound links
  try {
    await page.goto(BASE + '/authors/aaron-whittaker', { waitUntil: 'domcontentloaded' });
    const externalLinks = await page.evaluate(() =>
      Array.from(document.querySelectorAll('a[href^="http"]'))
        .filter(a => !a.href.includes('rizehvac.onrender.com'))
        .map(a => ({ href: a.href, target: a.getAttribute('target'), rel: a.getAttribute('rel') }))
    );
    const noNoopener = externalLinks.filter(l => l.target === '_blank' && (!l.rel || !l.rel.includes('noopener'))).length;
    findings.flowResults['author-external-links'] = `total=${externalLinks.length}, target=_blank without noopener: ${noNoopener}`;
    findings.flowResults['author-link-samples'] = externalLinks.slice(0, 10);
  } catch (e) {
    findings.flowResults['author-external-links'] = `ERROR: ${e.message}`;
  }

  // Flow 9: City page comparison table
  try {
    await page.goto(BASE + '/hvac/dallas', { waitUntil: 'domcontentloaded' });
    const tableRows = await page.locator('table tr').count();
    const sortableHeaders = await page.locator('th button, th [role="button"], th[aria-sort]').count();
    const getQuoteBtns = await page.locator('a:has-text("Get quote"), button:has-text("Get quote"), a:has-text("Get free quote")').count();
    findings.flowResults['comparison-table'] = `rows=${tableRows}, sortable headers=${sortableHeaders}, get-quote buttons=${getQuoteBtns}`;
  } catch (e) {
    findings.flowResults['comparison-table'] = `ERROR: ${e.message}`;
  }

  // Flow 10: City page map
  try {
    await page.goto(BASE + '/hvac/dallas', { waitUntil: 'domcontentloaded' });
    const mapEls = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img')).filter(i => /map|maps\.googleapis|mapbox/i.test(i.src) || /map/i.test(i.alt || ''));
      const iframes = Array.from(document.querySelectorAll('iframe')).filter(f => /map/i.test(f.src));
      return { imgs: imgs.length, iframes: iframes.length, sampleSrc: imgs[0]?.src?.slice(0, 200) || '' };
    });
    findings.flowResults['map'] = mapEls;
  } catch (e) {
    findings.flowResults['map'] = `ERROR: ${e.message}`;
  }

  // Flow 11: Image alt text audit
  try {
    await page.goto(BASE + '/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(800);
    const imgAudit = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return {
        total: imgs.length,
        missingAlt: imgs.filter(i => !i.hasAttribute('alt')).length,
        emptyAlt: imgs.filter(i => i.getAttribute('alt') === '').length,
        veryShortAlt: imgs.filter(i => (i.alt || '').length > 0 && (i.alt || '').length < 5).length,
        longestAlt: imgs.map(i => i.alt || '').sort((a, b) => b.length - a.length)[0]?.slice(0, 80) || '',
        samples: imgs.slice(0, 10).map(i => ({ src: i.src.slice(-60), alt: (i.alt || '').slice(0, 60) })),
      };
    });
    findings.flowResults['home-img-audit'] = imgAudit;

    await page.goto(BASE + '/hvac/dallas', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(800);
    const dalAudit = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return {
        total: imgs.length,
        missingAlt: imgs.filter(i => !i.hasAttribute('alt')).length,
        emptyAlt: imgs.filter(i => i.getAttribute('alt') === '').length,
      };
    });
    findings.flowResults['dallas-img-audit'] = dalAudit;
  } catch (e) {
    findings.flowResults['img-audit'] = `ERROR: ${e.message}`;
  }

  // Flow 12: 404 behavior
  try {
    const r = await page.goto(BASE + '/hvac/fakecity-test-404', { waitUntil: 'domcontentloaded' });
    const status = r ? r.status() : 0;
    const bodyText = await page.locator('body').innerText().catch(() => '');
    findings.flowResults['404-behavior'] = `status=${status}, has 404 keyword=${/404|not found|page not/i.test(bodyText)}, body length=${bodyText.length}, has nav home link=${bodyText.toLowerCase().includes('home')}`;
    await page.screenshot({ path: path.join(OUT, 'flow-404-behavior.png'), fullPage: true });
  } catch (e) {
    findings.flowResults['404-behavior'] = `ERROR: ${e.message}`;
  }

  // Flow 13: Skip link / keyboard nav
  try {
    await page.goto(BASE + '/', { waitUntil: 'domcontentloaded' });
    const skipLink = await page.evaluate(() => {
      const all = Array.from(document.querySelectorAll('a, button'));
      const first = all[0];
      return first ? { tag: first.tagName, text: (first.textContent || '').trim().slice(0, 40), href: first.getAttribute('href'), className: first.className.slice(0, 50) } : null;
    });
    findings.flowResults['skip-link'] = skipLink || 'NONE';

    // tab through first 5 elements
    await page.keyboard.press('Tab');
    const f1 = await page.evaluate(() => ({ tag: document.activeElement?.tagName, text: (document.activeElement?.textContent || '').trim().slice(0, 30) }));
    await page.keyboard.press('Tab');
    const f2 = await page.evaluate(() => ({ tag: document.activeElement?.tagName, text: (document.activeElement?.textContent || '').trim().slice(0, 30) }));
    await page.keyboard.press('Tab');
    const f3 = await page.evaluate(() => ({ tag: document.activeElement?.tagName, text: (document.activeElement?.textContent || '').trim().slice(0, 30) }));
    findings.flowResults['keyboard-tab-order'] = [f1, f2, f3];
  } catch (e) {
    findings.flowResults['skip-link'] = `ERROR: ${e.message}`;
  }

  // Flow 14: Axe-core accessibility on home + dallas city + blog post + methodology
  try {
    const axeSrc = require('fs').readFileSync(path.join(__dirname, '..', 'node_modules', 'axe-core', 'axe.min.js'), 'utf8').toString();
    for (const url of ['/', '/hvac/dallas', '/blog/5000-rule-hvac-repair-vs-replace', '/methodology']) {
      try {
        await page.goto(BASE + url, { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(800);
        await page.evaluate(axeSrc);
        const result = await page.evaluate(async () => {
          // @ts-ignore
          const r = await axe.run({ resultTypes: ['violations'] });
          return r.violations.map(v => ({
            id: v.id,
            impact: v.impact,
            description: v.description,
            nodes: v.nodes.length,
            target: v.nodes[0]?.target?.join(' '),
          }));
        });
        findings.axe.push({ url, violations: result });
      } catch (e) {
        findings.axe.push({ url, error: e.message.slice(0, 200) });
      }
    }
  } catch (e) {
    findings.axe.push({ error: `axe init failed: ${e.message}` });
  }

  await ctx.close();
}

(async () => {
  // try axe-core install
  try { require.resolve('axe-core'); } catch {
    require('child_process').execSync('npm i -D axe-core --no-save', { cwd: path.join(__dirname, '..'), stdio: 'inherit' });
  }

  await withBrowser('chromium', () => chromium.launch({ headless: true }), async (b) => {
    await captureAllPages(b, 'chromium');
    await testFlows(b);
  });
  await withBrowser('webkit', () => webkit.launch({ headless: true }), async (b) => {
    await captureAllPages(b, 'webkit');
  });
  await withBrowser('firefox', () => firefox.launch({ headless: true }), async (b) => {
    await captureAllPages(b, 'firefox');
  });

  fs.writeFileSync(path.join(OUT, '_findings.json'), JSON.stringify(findings, null, 2));
  console.log('\n=== QA findings saved to', path.join(OUT, '_findings.json'));
  console.log('Console errors:', findings.consoleErrors.length);
  console.log('Network failures:', findings.networkFailures.length);
  console.log('Notes:', findings.notes.length);
  console.log('Axe violations across pages:', findings.axe.reduce((s, p) => s + (p.violations?.length || 0), 0));
})();
