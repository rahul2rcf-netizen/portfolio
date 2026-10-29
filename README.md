# M. Rahul — Portfolio 2026

Premium single-page portfolio for **M. Rahul** — AI/ML Graduate · Software Developer.
Neo-brutalist art direction on warm paper with one electric-lime accent, an interactive
Three.js sculpture in the hero, and content that is verified against public sources
(resume-derived skill list, GitHub profile README, and each project repository).

**Everything factual on this site traces to a source.** Features of each project were
read from the repository READMEs or source code on 29 Oct 2026. Nothing offers fake
metrics: the Journey timeline uses only dates from the public GitHub API, skills are
grouped into *core / used in projects / actively exploring*, and all stated caveats
(EvidenceDesk's synthetic evaluation, CareerLens' demo-not-engine distinction,
ResourceNest's front-end-only newsletter) are carried through from the projects' own
documentation.

---

## Tech stack

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | React 19 + TypeScript (strict) | Component reuse, typed content data |
| Build | Vite 7 | Fast dev, lean production output |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`) + a hand-written design-token layer in `src/index.css` | Tokens for palette/typography/motion; utilities for layout |
| 3D | `three` via `@react-three/fiber` | One bespoke hero scene, no drei dependency |
| Animation | CSS transitions/keyframes + IntersectionObserver + one small pointer-tilt hook | Zero runtime animation dependencies; respects `prefers-reduced-motion` centrally |
| Fonts | Bricolage Grotesque (display), Archivo (body), Azeret Mono (labels) — Google Fonts, `display=swap` | Editorial character with system-font fallbacks |

Deliberately **not** installed: Framer Motion/GSAP (CSS + IO cover every interaction on
this page), 3D helpers like drei (hand-rolled pointer parallax is smaller), icon fonts.

### Performance profile (production build)

```
index.html                2.8 kB   (gzip 1.0 kB)
index CSS                28.9 kB   (gzip 6.9 kB)
index JS                281.5 kB   (gzip 87.4 kB)  ← react/react-dom + app
Hero3D chunk + three    888.0 kB   (gzip 240 kB)   ← code-split, loads after first paint
```

- The whole 3D layer (three.js + R3F + scene) is `React.lazy`-loaded behind an SVG
  fallback, so first paint never waits on WebGL.
- Canvas FPS loop switches to `demand` when the hero leaves the viewport
  (IntersectionObserver) and under `prefers-reduced-motion`.
- If WebGL is unavailable (or context creation is denied), a static SVG sculpture is
  rendered instead — no broken layout.

---

## Run it

```bash
npm install
npm run dev        # local dev server
npm run typecheck  # tsc --noEmit
npm run build      # production bundle → dist/
npm run preview    # serve dist/ locally (this is what QA ran against)
```

## Deploy

The build uses a **relative base (`'./'`)**, so `dist/` deploys as-is to:

1. **GitHub Pages (project site)** — recommended next step, matching the author's
   existing repos:
   - create a repo (e.g. `portfolio`), push this folder,
   - Settings → Pages → Build and deployment → Source → **GitHub Actions**,
   - use this workflow:

   ```yaml
   name: Deploy to Pages
   on:
     push:
       branches: [main]
   permissions:
     contents: read
     pages: write
     id-token: write
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with: { node-version: 22, cache: npm }
         - run: npm ci
         - run: npm run build
         - uses: actions/configure-pages@v5
         - uses: actions/upload-pages-artifact@v3
           with: { path: dist }
     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - id: deployment
           uses: actions/deploy-pages@v4
   ```

2. **Any static host** (Netlify/Vercel/Cloudflare Pages/S3): point the build command
   at `npm run build` and the publish directory at `dist`. No server, no env vars.

### After hosting, update 4 absolute URLs

`index.html` (canonical + `og:url` + `og:image` + `twitter:image`),
`public/sitemap.xml`, and `public/robots.txt` currently assume
`https://rahul2rcf-netizen.github.io/portfolio/`. `public/404.html` redirects
unknown paths back to the site root (GitHub Pages convention).

---

## Project structure

```
src/
  data/            site.ts, projects.ts, skills.ts, timeline.ts, repos.ts
                   ← all human-readable content lives here
  hooks/           useReveal, useActiveSection, useReducedMotion (+ WebGL probe), useTilt
  components/
    Nav.tsx        fixed nav, active-section state, overlay mobile menu (Esc + scroll lock)
    Hero.tsx       name/roles/headline, availability chip, CTAs, scroll cue
    three/         Hero3D (lazy canvas + boundary), EvidenceStack scene, SVG fallback
    About.tsx      editorial intro, "NOW" tilt panel, verified fact tiles
    Projects.tsx   five verified project cards (problem/features/stack/status/links)
    ProjectPlate   per-project data-driven SVG illustration plates
    Skills.tsx     core / shipped / exploring panels (no fake skill bars)
    Journey.tsx    GitHub-API-verified timeline + "what's not listed" honesty card
    GithubSection  repo grid: live GitHub API refresh with verified static fallback
    Contact.tsx    giant closing statement, mailto + copy-email, LinkedIn, GitHub
    Footer.tsx     dark close with sections/connect columns
  index.css        design tokens + full component stylesheet + reduced-motion rules
```

## Accessibility & UX notes

- Skip link, semantic landmarks, one `h1` → `h2`/`h3` hierarchy, `aria-current` state in nav.
- Lighthouse (production build): **Accessibility 100 · Best Practices 100 · SEO 100**.
- All interactive elements keyboard-reachable; visible `:focus-visible` outlines substituted
  with a lime variant on dark surfaces.
- `prefers-reduced-motion`: entrance/reveal/marquee/tilt/3D loop all switch off; content
  stays fully visible (reveal system has a timeout fallback so scroll-observers can never
  permanently hide in-fold content).
- No hover-only information: every interactive affordance is also a labeled control.

## Verified content — what was checked (29 Oct 2026)

- Repos: `nevidencedesk`, `careerlence`, `resourcenest`, `RAYA-Life-Os`, `MicroServises-notes`
  (READMEs + source trees), profile README, and `api.github.com` metadata.
- Live assets: ResourceNest GitHub Pages site, CareerLens Raw.githack demo.
- Deliberately excluded: `auralis-music-player` (public repo does not exist — no assumed
  Android music player), unlisted education/internships/certifications, unverified
  technologies.

## Known limitations

- Mobile and tablet layouts are implemented mobile-first and reviewed in code, but no
  physical-device or viewport-emulation pass was available in the build environment —
  worth a quick real-phone check before launch.
- The GitHub repo grid prefers the live API (no key, 60 req/h anonymous) and falls back to
  a dated static snapshot; stars/commits are intentionally not displayed.
- OG image (`public/og.png`) is generated via `scripts/make-assets.ps1` (GDI+) — regenerate
  with `powershell.exe -ExecutionPolicy Bypass -File scripts/make-assets.ps1` if you change
  the brand colors.
