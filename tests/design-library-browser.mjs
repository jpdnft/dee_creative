// Start a loopback-only preview on 3002 and a production build on 3003 first.
import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';

const preview = 'http://127.0.0.1:3002';
const production = 'http://127.0.0.1:3003';
const article = '/design-library/architectural-styles/craftsman';
const victorianArticle = '/design-library/architectural-styles/victorian';
const categories = ['architectural-styles', 'house-types-and-forms', 'interior-design-styles', 'architectural-elements-and-details', 'materials-and-finishes', 'design-principles-and-philosophies'];
const browser = await chromium.launch({ channel: 'msedge', headless: true });
try {
  await fs.mkdir('artifacts/design-library', { recursive: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  for (const width of [1440, 1280, 820, 390, 320]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const path of ['/design-library', '/design-library/architectural-styles', article, victorianArticle]) {
      assert.equal((await page.goto(preview + path, { waitUntil: 'networkidle' })).status(), 200);
      await page.evaluate(() => document.fonts.ready);
      assert.equal(await page.locator('h1').count(), 1);
      assert.match(await page.locator('meta[name="robots"]').getAttribute('content'), /noindex/);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${width} ${path}: overflow`);
      const broken = await page.locator('a[href^="#"]').evaluateAll(links => links.filter(link => !document.getElementById(link.hash.slice(1))).map(link => link.hash));
      assert.deepEqual(broken, []);
      const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
      assert.deepEqual(results.violations.map(item => ({ id: item.id, targets: item.nodes.map(node => node.target) })), [], `${width} ${path}`);
      for (const img of await page.locator('article figure img').all()) {
        await img.scrollIntoViewIfNeeded();
        await img.evaluate(element => element.decode());
      }
      if (path === victorianArticle) {
        const summary = page.getByRole('region', { name: 'At a glance', exact: true });
        assert.equal(await summary.locator('img').count(), 6);
        for (const img of await summary.locator('img').all()) {
          await img.scrollIntoViewIfNeeded();
          await img.evaluate(element => element.decode());
          assert(await img.evaluate(element => element.naturalWidth === 384 && element.naturalHeight === 256));
          const bounds = await img.boundingBox();
          assert(bounds && bounds.width <= 108 && bounds.height <= 72.1);
          assert.match(await img.getAttribute('alt'), /^Generated illustration:/);
        }
      }
      if ([1440, 390].includes(width)) await page.screenshot({ path: `artifacts/design-library/${path === article ? 'craftsman' : path.split('/').at(-1)}-${width}.png`, fullPage: true });
    }
    assert.equal(await page.locator('article figure').count(), 5);
    const snapshot = page.getByRole('region', { name: 'At a glance', exact: true });
    assert.equal(await snapshot.isVisible(), true);
    assert(await snapshot.evaluate(element => Boolean(element.compareDocumentPosition(document.querySelector('nav[aria-label="In this article"]')) & Node.DOCUMENT_POSITION_FOLLOWING)));
    assert.equal(await page.getByRole('complementary', { name: 'Common colors & materials' }).isVisible(), true);
    assert.equal(await page.locator('article figure img').count(), 5);
    for (const img of await page.locator('article figure img').all()) {
      await img.scrollIntoViewIfNeeded();
      await img.evaluate(element => element.decode());
      assert(await img.evaluate(element => element.naturalWidth === 1536 && element.naturalHeight === 1024));
      assert(await img.getAttribute('alt'));
      assert(!(await img.getAttribute('src')).startsWith('/_next/image'));
    }
    for (const caption of await page.locator('article figcaption').all()) assert.match(await caption.textContent(), /Generated architectural illustration/);
    assert.equal(await page.locator('article a[href="/start-a-project"]').count(), 1);
    if (width <= 1200) {
      await page.getByRole('button', { name: 'Menu', exact: true }).click();
      assert.equal(await page.locator('#primary-navigation a[href="/design-library"]').getAttribute('aria-current'), 'page');
      await page.keyboard.press('Escape');
      assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'), 'false');
      assert.equal(await page.locator('.menu-toggle').evaluate(element => element === document.activeElement), true);
    } else {
      assert.equal(await page.locator('#primary-navigation').isVisible(), true);
      const bounds = await page.locator('#primary-navigation').boundingBox();
      const cta = await page.locator('.header-cta').boundingBox();
      assert(bounds && cta && cta.x + cta.width <= width, 'Desktop navigation fits');
    }
    console.log(`${width}px: preview pages, accessibility, anchors, overflow, navigation passed`);
  }
  for (const category of categories) {
    assert.equal((await page.goto(`${preview}/design-library/${category}`)).status(), 200);
    if (category !== 'architectural-styles') assert(await page.getByText('No articles are published in this category yet.').isVisible());
  }
  for (const path of ['/design-library/unknown', '/design-library/materials-and-finishes/craftsman', '/design-library/architectural-styles/unknown']) assert.equal((await page.goto(preview + path)).status(), 404);
  assert.equal((await page.request.get(preview + '/sitemap.xml')).status(), 200);
  assert(!(await (await page.request.get(preview + '/sitemap.xml')).text()).includes('/design-library'));
  for (const [slug, ids] of [['craftsman', ['exterior', 'porch', 'eave', 'rooms', 'materials']], ['victorian', ['exterior', 'italianate', 'mansard', 'detail', 'interior', 'snapshot-when', 'snapshot-idea', 'snapshot-roof', 'snapshot-italianate', 'snapshot-empire', 'snapshot-queen-anne']]]) for (const id of ids) {
    const imagePath = `/api/design-library-images/${slug}-${id}.webp`;
    const response = await page.request.get(preview + imagePath);
    assert.equal(response.status(), 200);
    assert.match(response.headers()['content-type'], /image\/webp/);
    assert.match(response.headers()['cache-control'], /private, no-store/);
    assert.match(response.headers()['x-robots-tag'], /noindex/);
    assert.equal((await page.request.get(production + imagePath)).status(), 404);
    assert.equal((await page.request.get(production + `/assets/design-library/${slug}/${slug}-${id}.webp`)).status(), 404);
  }
  assert.equal((await page.request.get(preview + '/api/design-library-images/craftsman-unknown.webp')).status(), 404);
  const optimizedDraft = await page.request.get(production + '/_next/image?url=%2Fapi%2Fdesign-library-images%2Fcraftsman-exterior.webp&w=640&q=75');
  assert(optimizedDraft.status() >= 400);
  for (const path of ['/design-library', ...categories.map(category => `/design-library/${category}`), article, victorianArticle]) {
    const response = await page.request.get(production + path);
    assert.equal(response.status(), 404, `Production must reject ${path}`);
    assert(!(await response.text()).includes('An argument about how things are made'));
  }
  await page.goto(production + '/');
  assert.equal(await page.locator('a[href="/design-library"]').count(), 0);
  const sitemap = await (await page.request.get(production + '/sitemap.xml')).text();
  assert(sitemap.includes('https://studiodeepdx.com'));
  assert(!sitemap.includes('/design-library'));
  assert.deepEqual(errors, []);
  await page.goto(preview + '/design-library/architectural-styles');
  assert.equal(await page.getByText('Approved · Awaiting publication', { exact: true }).count(), 1);
  assert.equal(await page.getByText('Draft for review', { exact: true }).count(), 1);
  console.log('All categories, unknown URLs, production 404s, hidden navigation, and published-only sitemap passed');
} finally { await browser.close(); }
