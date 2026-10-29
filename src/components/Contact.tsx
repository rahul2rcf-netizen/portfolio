import { site } from '../data/site'
import { Reveal, useCopy } from './Reveal'

export function Contact() {
  const { copied, copy } = useCopy(site.email)

  return (
    <div style={{ display: 'grid', gap: 'clamp(2rem, 5vw, 3rem)' }}>
      <h3 className="display reveal" style={{ fontSize: 'clamp(2.4rem, 6.4vw, 5.2rem)', lineHeight: 0.95, maxWidth: '18ch' }}>
        Let's build something <span className="u-mark">useful</span> together.
      </h3>

      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 reveal">
          <span className="label text-muted">( SAY HELLO )</span>
          <div className="email-copy" style={{ marginTop: 12, marginLeft: -2 }}>
            <span className={`email-copy__feedback ${copied ? 'is-visible' : ''}`} aria-live="polite">
              Copied to clipboard
            </span>
            <a
              href={`mailto:${site.email}?subject=Portfolio%20inquiry%20—%20M.%20Rahul`}
              className="display"
              style={{ fontSize: 'clamp(1.25rem, 3.4vw, 2.3rem)', letterSpacing: '-0.02em' }}
            >
              {site.email}
            </a>
            <button type="button" className="chip" onClick={() => copy()}>
              <svg width="12" height="12" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="5" y="5" width="9" height="9" />
                <path d="M11 5V3H2v9h1" />
              </svg>
              COPY EMAIL
            </button>
          </div>

          <p style={{ marginTop: 18, color: 'var(--ink-2)', maxWidth: '52ch', lineHeight: 1.7 }}>
            Use it for role conversations, collaborations, feedback on any repo here, or to ask for the background
            details this site deliberately leaves out. Straight answers, usually within a day.
          </p>

          <div className="flex flex-wrap gap-4" style={{ marginTop: 24 }}>
            <a className="btn btn--lime" href={`mailto:${site.email}`}>
              WRITE AN EMAIL <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
            <a className="btn" href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LINKEDIN <span className="btn-arrow" aria-hidden="true">↗</span>
            </a>
            <a className="btn" href={site.github} target="_blank" rel="noopener noreferrer">
              GITHUB <span className="btn-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <Reveal as="div" className="card" >
            <div style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '16px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
              <span className="label-lg" style={{ color: 'var(--lime)' }}>STATUS</span>
              <span className="label" style={{ opacity: 0.7 }}>{site.builtYear}</span>
            </div>
            <div style={{ display: 'grid', gap: 14, padding: '20px 18px 22px' }}>
              <div className="flex items-start gap-3">
                <span className="dot-pulse" style={{ marginTop: 6 }} aria-hidden="true" />
                <p style={{ fontSize: '0.92rem', lineHeight: 1.6 }}>
                  <strong className="label-lg">{site.availability.toUpperCase()}</strong>
                  <br />
                  <span style={{ color: 'var(--muted)' }}>Recent graduate — early-career roles suitable for AI/ML or web/Android development.</span>
                </p>
              </div>
              <div className="hairline-t" style={{ paddingTop: 12 }}>
                <span className="label text-faint">RESPONSE TIME</span>
                <p className="label-lg" style={{ marginTop: 4 }}>EMAIL · SAME DAY, USUALLY</p>
              </div>
              <div className="hairline-t" style={{ paddingTop: 12 }}>
                <span className="label text-faint">ALWAYS REACHABLE VIA</span>
                <p className="label-lg" style={{ marginTop: 4 }}>GITHUB — PUBLIC CODE, DATED COMMITS</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
