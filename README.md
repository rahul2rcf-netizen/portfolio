# M. Rahul — Portfolio 2026 · v2 "sticker mode"

Single-page portfolio for **M. Rahul** — AI/ML Graduate · Software Developer (B.Tech CSE ’26).
Gen-Z sticker-mode art direction: warm paper base, deep ink structure, one lime brand
accent with candy violet/pink stickers, pill chips on brutalist borders, a marquee +
checker divider, and a pure-SVG sticker collage in the hero. The real résumé
(`public/resume.pdf`) is served from the site itself, and every section header in
Contact links your actual email / phone / LinkedIn / GitHub — no placeholder labels.

**Everything factual on this site traces to a source.** Project features were read from
each repository's README or source, the Journey timeline uses dates from the résumé plus
the public GitHub API, the skills panel reproduces the ATS résumé list verbatim, and all
stated caveats (EvidenceDesk's synthetic evaluation, CareerLens' demo-not-engine
distinction, ResourceNest's front-end-only newsletter) are carried through from the
projects' own documentation. Renders tested from 360 px phone through 1920 px desktop.

---

## Tech stack

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | React 19 + TypeScript (strict) | Component reuse, typed content data |
| Build | Vite 7 | Fast dev, lean production output |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`) + a hand-written design-token layer in `src/index.css` | Tokens for palette/typography/motion; utilities for layout |
| Hero art | `StickerPile.tsx` — SVG starburst + circle stickers + ticket chips + hand-drawn arrow, Casio-plain CSS motion | Sticker collage replaces any WebGL scene: zero canvas, tiny payload |
| Animation | CSS transitions/keyframes + IntersectionObserver + one small pointer-tilt hook | Zero runtime animation dependencies; respects `prefers-reduced-motion` centrally |
| Fonts | Bricolage Grotesque (display), Archivo (body), Azeret Mono (labels) — Google Fonts, `display=swap` | Editorial character with system-font fallbacks |

Deliberately **not** installed: `three` / `@react-three/fiber` (removed in v2 — the
884 kB 3D chunk is gone), Framer Motion/GSAP, icon fonts.

### Performance profile (production build, v2)

```
index.html                2.8 kB   (gzip 1.1 kB)
index CSS                31.7 kB   (gzip 7.6 kB)
index JS                287.2 kB   (gzip 88.7 kB)   react/react-dom + app — single chunk
```

---

## Run it

```bash
npm install
npm run dev        # local dev server
npm run typecheck  # tsc --noEmit
npm run build      # production bundle → dist/
npm run preview    # serve dist/ locally (this is what QA ran against)
```

Optional responsive QA sweep (uses your installed Edge/Chrome, no browser download):

```bash
npm i --no-save playwright     # one-time driver install
node scripts/qa-responsive.mjs # 8 viewports × overflow/offender/viewport nav checks
```

## Deploy

Automatic — the repo deploys on every push to `main` via
`.github/workflows/deploy.yml` (GitHub Pages, Source = GitHub Actions):

**Live: https://rahul2rcf-netizen.github.io/portfolio/**

Relative base (`'./'`) means `dist/` also drops onto any static host
(Netlify/Vercel/Cloudflare Pages/S3) as-is. `public/404.html` redirects unknown paths
back to the site root (GitHub Pages convention).

---

## Project structure

```
public/            resume.pdf (the real résumé), og.png, apple-touch-icon.png,
                   robots.txt, sitemap.xml, 404.html
src/
  data/            site.ts, projects.ts, skills.ts, timeline.ts, repos.ts
                   ← all human-readable content lives here
  hooks/           useReveal, useActiveSection, useTilt
  components/
    Nav.tsx        fixed nav, active-section state, burger overlay ≤1023px
                   (Esc + scroll-lock + résumé entry)
    Hero.tsx       name/roles/headline, availability chip, CTA → résumé PDF, scroll cue
    StickerPile    hero collage: starburst, CodeChef circle, C2C ticket, GSSoC ticket
    Marquee +      App.tsx: skills marquee (✦) + checker divider between hero and about
    checker
    Section.tsx    lowercase section titles with rotated candy index stickers
    About.tsx      editorial intro, "NOW" tilt panel, verified fact tiles (05 repos,
                   500+ CodeChef, CGPA 7.92)
    Projects.tsx   five verified project cards with ON THE RÉSUMÉ / PERSONAL BUILD
                   badges, problem/features/stack/status/links
    Skills.tsx     core (verbatim résumé list) / shipped-in-repos / exploring panels
    Journey.tsx    résumé-verified timeline (education violet · experience pink ·
                   shipped lime) + internship card + achievements
    GithubSection  repo grid: live GitHub API refresh with verified static fallback
    Contact.tsx    giant closing statement, mailto + copy-email, tel:+91 chip,
                   résumé download, LinkedIn
    Footer.tsx     dark close with sections/connect columns
  index.css        design tokens + full component stylesheet + reduced-motion rules
```

## Accessibility & UX notes

- Skip link, semantic landmarks, one `h1` → `h2`/`h3` hierarchy, `aria-current` state in nav.
- Lighthouse (v1 baseline): **Accessibility 100 · Best Practices 100 · SEO 100**.
- All interactive elements keyboard-reachable; visible `:focus-visible` outlines
  substituted with a lime variant on dark surfaces.
- `prefers-reduced-motion`: entrance/reveal/marquee/pop/tilt all switch off and content
  renders fully visible statically (the same mode the responsive QA screenshots use).
- Burger menu below 1024px: opens 6 overlay links, closes on Escape, scroll is locked.
- No hover-only information: every interactive affordance is also a labeled control.

## Responsive verification (29 Oct 2026)

Automated sweep against the production build — `scripts/qa-responsive.mjs`:

| Viewport | Doc overflow | Off-viewport elements | Mobile nav |
| --- | --- | --- | --- |
| 360×740 phone-S | 0 px | none | burger opens 6 links, Esc closes |
| 390×844 phone-M | 0 px | none | ✓ |
| 414×896 phone-L | 0 px | none | ✓ |
| 768×1024 tablet | 0 px | none | ✓ |
| 1024×768 tablet-L | 0 px | none | full nav (≥1024) |
| 1280×800 laptop | 0 px | none | full nav |
| 1440×900 desktop | 0 px | none | full nav |
| 1920×1080 wide | 0 px | none | full nav |

Full-page captures at every size were visually reviewed (sticker mode renders statically
under reduced motion for capture). Console clean (no errors) at all sizes.

## Verified content — what was checked (29 Oct 2026)

- Résumé: `M_Rahul_ATS_Resume.pdf` — education (SSC 9.2 · Intermediate 8.2 · B.Tech
  CSE CGPA 7.92), internship (Full Stack Developer Intern, Palle Technology,
  Jan–Jun 2026, C2C selection), phone, skills list, project bullets.
- Repos: `nevidencedesk`, `careerlence`, `resourcenest`, `RAYA-Life-Os`, `MicroServises-notes`
  (READMEs + source trees), profile README, and `api.github.com` metadata.
- Live assets: ResourceNest GitHub Pages site, CareerLens Raw.githack demo.
- Deliberately excluded: `auralis-music-player` (public repo does not exist), unverified
  technologies, invented metrics.

## Known limitations

- The GitHub repo grid prefers the live API (no key, 60 req/h anonymous) and falls back to
  a dated static snapshot; stars/commits are intentionally not displayed.
- OG image (`public/og.png`) is generated via `scripts/make-assets.ps1` (GDI+) — regenerate
  with `powershell.exe -ExecutionPolicy Bypass -File scripts/make-assets.ps1` if you change
  the brand colors.

- A physical-device smoke test (real phone) is still worth a pass after launch; the
  automated sweep emulates viewports but not touch latency itself.
