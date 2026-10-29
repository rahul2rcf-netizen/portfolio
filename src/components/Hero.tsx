import { site } from '../data/site'
import { StickerPile } from './StickerPile'

const cast = (v: string) => ({ '--d': v }) as React.CSSProperties

function GithubMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  )
}

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__frame">
        <span className="hero__corner hero__corner--tr label on-ink" style={{ padding: '6px 12px', borderRadius: 999 }}>
          PORTFOLIO — V2
        </span>

        <StickerPile />

        <div className="hero__content">
          <div className="rise flex flex-wrap items-center gap-3" style={cast('80ms')}>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="chip"
              style={{ textDecoration: 'none' }}
            >
              <GithubMark />
              GITHUB — RAHUL2RCF-NETIZEN
            </a>
            <span className="chip chip--lime">
              <span className="dot-pulse" aria-hidden="true" />
              {site.availability.toUpperCase()}
            </span>
          </div>

          <h1 className="display h-hero rise" style={cast('160ms')}>
            M. Rahul
          </h1>

          <p className="label-lg rise" style={cast('250ms')}>
            <span style={{ display: 'inline-block', color: 'var(--muted)' }}>
              {site.roleName.toUpperCase()} <span style={{ color: 'var(--violet)' }}>✶</span> {site.roleB.toUpperCase()}
            </span>
          </p>

          <h2 className="display h-headline rise" style={cast('340ms')}>
            I build <span className="u-violet">digital</span> products
            <br />
            with <span className="squiggle">purpose</span>.
          </h2>

          <p className="lead rise" style={{ ...cast('440ms'), maxWidth: '52ch' }}>
            {site.intro}
          </p>

          <div className="rise flex flex-wrap items-center gap-4" style={cast('540ms')}>
            <a className="btn btn--lime" href="#projects">
              SEE THE PROJECTS <span className="btn-arrow" aria-hidden="true">↓</span>
            </a>
            <a className="btn btn--ghost" href={site.resume} download="M_Rahul_Resume.pdf">
              RÉSUMÉ <span className="btn-arrow" aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero__canvas-foot">
          <a href="#about" className="scrollcue">
            <span className="label">SCROLL TO ABOUT</span>
            <span className="scrollcue__bar" aria-hidden="true" />
          </a>
          <span className="label text-faint on-ink hero-foot-tag" style={{ padding: '6px 12px', borderRadius: 999, order: 2 }}>
            WEB ✦ AI ✦ DOCUMENT INTELLIGENCE
          </span>
          <span className="label text-muted hero-foot-note" style={{ order: 1 }} aria-hidden="true">
            GRADUATED 2026 — SHIPPED EVER SINCE
          </span>
        </div>
      </div>
    </header>
  )
}
