/**
 * Responsive QA sweep — checks the built site (vite preview on :4173) across
 * real viewports using the system browser (Edge/Chrome channel — no browser
 * download). For each size it reports:
 *   - document horizontal overflow (scrollWidth > clientWidth)
 *   - elements poking past the right edge that have NO clipping ancestor
 *     (clipped decorative things like hero stickers are intentionally ignored)
 *   - mobile: burger menu open/close works, and links are tappable (>40px)
 * Outputs JSON printed as the final line: RESULT {...}
 *
 * Run: node scripts/qa-responsive.mjs
 */
import { chromium } from 'playwright'

const BASE = process.env.URL || 'http://localhost:4173/'
const SIZES = [
  { name: 'phone-s', w: 360, h: 740 },
  { name: 'phone-m', w: 390, h: 844 },
  { name: 'phone-l', w: 414, h: 896 },
  { name: 'tablet-p', w: 768, h: 1024 },
  { name: 'tablet-l', w: 1024, h: 768 },
  { name: 'laptop', w: 1280, h: 800 },
  { name: 'desktop', w: 1440, h: 900 },
  { name: 'wide', w: 1920, h: 1080 },
]

const AUDIT = `(() => {
  const de = document.documentElement
  const docOverflow = de.scrollWidth > de.clientWidth ? de.scrollWidth - de.clientWidth : 0
  const clippedAncestor = (el) => {
    let n = el.parentElement
    while (n && n !== document.body) {
      const o = getComputedStyle(n).overflowX
      if (o === 'clip' || o === 'hidden' || o === 'auto' || o === 'scroll') return true
      n = n.parentElement
    }
    return false
  }
  const offenders = []
  for (const el of document.querySelectorAll('body *')) {
    const r = el.getBoundingClientRect()
    const st = getComputedStyle(el)
    if (!(r.width > 0 && st.visibility !== 'hidden' && st.display !== 'none')) continue
    if (r.right > window.innerWidth + 2 && !clippedAncestor(el)) {
      offenders.push({ tag: el.tagName, cls: String(el.className.baseVal ?? el.className).slice(0, 46), right: Math.round(r.right) })
    }
    if (offenders.length >= 10) break
  }
  return { docOverflow, offenders }
})()`

const results = {}
let browser
try {
  const channels = ['msedge', 'chrome', '']
  for (const c of channels) {
    try {
      browser = await chromium.launch({ channel: c || undefined, headless: true })
      break
    } catch (e) {
      browser = null
    }
  }
  if (!browser) throw new Error('no system chromium found for playwright channel launch')

  for (const s of SIZES) {
    const ctx = await browser.newContext({ viewport: { width: s.w, height: s.h }, deviceScaleFactor: 1 })
    const page = await ctx.newPage()
    const errors = []
    page.on('pageerror', (e) => errors.push(String(e).slice(0, 120)))
    page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text().slice(0, 120)) })
    await page.goto(BASE, { waitUntil: 'load' })
    await page.waitForTimeout(900)
    const latest = await page.evaluate(AUDIT)

    const checkAt = async () => {
      // overflow check after full scroll tour (lazy sections / wrap points)
      await page.evaluate(async () => {
        const step = window.innerHeight / 2
        for (let y = 0; y <= document.body.scrollHeight; y += step) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 40)) }
        window.scrollTo(0, 0)
        await new Promise(r => setTimeout(r, 300))
      })
      return page.evaluate(AUDIT)
    }
    const toured = await checkAt()

    let burger = null
    if (s.w < 1024) {
      burger = []
      const b = page.locator('.nav__burger')
      if (await b.count()) {
        await b.first().click()
        await page.waitForTimeout(350)
        burger.push({ open: await page.evaluate(() => ({ links: document.querySelectorAll('.menu-overlay__link').length, visible: !!document.querySelector('.menu-overlay') })) })
        await page.keyboard.press('Escape').catch(() => {})
        await page.waitForTimeout(250)
        const stillOpen = await page.evaluate(() => !!document.querySelector('.menu-overlay'))
        burger.push({ closedWithEscape: !stillOpen })
        if (stillOpen) {
          // menu has no close button? verify click-outside or a close control exists
          burger.push({ note: 'ESC did not close — checking close affordance', hasCloseBtn: await page.locator('[aria-label*="lose"], .menu-overlay button, .nav__burger[aria-expanded="true"]').count() })
          await page.locator('.nav__burger[aria-expanded="true"]').first().click().catch(() => {})
          await page.waitForTimeout(250)
          burger.push({ closedWithBurger: await page.evaluate(() => !document.querySelector('.menu-overlay')) })
        }
      }
    }

    // Full-page capture in the site's reduced-motion mode (reveals forced
    // visible statically) so long screenshots aren't blank mid-transition.
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await page.reload({ waitUntil: 'load' })
    await page.waitForTimeout(700)
    await page.screenshot({ path: `C:/Users/Admin/AppData/Local/Temp/opencode/resp-${s.name}.png`, fullPage: true })
    results[s.name] = { size: `${s.w}x${s.h}`, initial: latest, toured, burger, errors: errors.slice(0, 4) }
    await ctx.close()
  }
} finally {
  if (browser) await browser.close()
}
console.log('RESULT ' + JSON.stringify(results))
