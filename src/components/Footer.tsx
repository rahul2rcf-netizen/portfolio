import { site } from '../data/site'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container-x">
        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          <div>
            <div className="flex items-center gap-3">
              <span className="nav__brand-mark" aria-hidden="true" style={{ background: 'var(--lime)', color: 'var(--ink)' }}>
                R
              </span>
              <span className="label-lg">M.RAHUL — PORTFOLIO V.2026</span>
            </div>
            <p className="label" style={{ color: 'rgba(244,241,232,0.72)', marginTop: 14, letterSpacing: '0.04em', textTransform: 'none', fontSize: 11.5, lineHeight: 1.7 }}>
              Hand-built: React, TypeScript, Vite, Tailwind CSS, React Three Fiber. One accent, one page, no template.
              Content verified against public sources, October 2026.
            </p>
          </div>

          <nav aria-label="Footer" style={{ display: 'grid', gap: 10, alignContent: 'start' }}>
            <span className="label" style={{ color: 'var(--lime)' }}>
              SECTIONS
            </span>
            {[
              ['ABOUT', '#about'],
              ['PROJECTS', '#projects'],
              ['SKILLS', '#skills'],
              ['JOURNEY', '#journey'],
              ['GITHUB', '#github'],
              ['CONTACT', '#contact'],
            ].map(([t, href]) => (
              <a key={href} href={href} className="label-lg" style={{ width: 'fit-content' }}>
                {t}
              </a>
            ))}
          </nav>

          <div style={{ display: 'grid', gap: 10, alignContent: 'start' }}>
            <span className="label" style={{ color: 'var(--lime)' }}>
              CONNECT
            </span>
            <a href={`mailto:${site.email}`} className="label-lg" style={{ width: 'fit-content' }}>
              {site.email.toUpperCase()}
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="label-lg" style={{ width: 'fit-content' }}>
              LINKEDIN
            </a>
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="label-lg" style={{ width: 'fit-content' }}>
              GITHUB
            </a>
            <a href="https://rahul2rcf-netizen.github.io/resourcenest/" target="_blank" rel="noopener noreferrer" className="label-lg" style={{ width: 'fit-content' }}>
              RESOURCENEST — LIVE
            </a>
          </div>
        </div>

        <div className="flex justify-between gap-4 flex-wrap" style={{ marginTop: 34, paddingTop: 20, borderTop: '1.5px solid rgba(244,241,232,0.2)' }}>
          <span className="label" style={{ color: 'rgba(244,241,232,0.72)' }}>
            © {site.builtYear} M. RAHUL
          </span>
          <span className="label" style={{ color: 'rgba(244,241,232,0.72)' }}>
            AI/ML GRADUATE · SOFTWARE DEVELOPER — {site.lastUpdated.toUpperCase()}
          </span>
          <a href="#top" className="label" style={{ color: 'var(--lime)' }}>
            BACK TO TOP ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
