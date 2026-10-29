import { site } from '../data/site'
import { Reveal, useCopy } from './Reveal'

export function Contact() {
  const { copied, copy } = useCopy(site.email)

  return (
    <div style={{ display: 'grid', gap: 'clamp(2rem, 5vw, 3rem)' }}>
      <h3 className="display reveal" style={{ fontSize: 'clamp(2.4rem, 6.4vw, 5.2rem)', lineHeight: 0.95, maxWidth: '18ch' }}>
        let{'’'}s build something <span className="u-mark">useful</span> together.
      </h3>

      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 reveal">
          <span className="label text-muted">( SAY HELLO — ANY CHANNEL )</span>
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
                <rect x="5" y="5" width="9" height="9" rx="2" />
                <path d="M11 5V3H2v9h2" />
              </svg>
              COPY EMAIL
            </button>
          </div>

          <div className="flex flex-wrap" style={{ gap: 12, marginTop: 14 }}>
            <a className="chip chip--violet" href={site.phoneHref} style={{ textDecoration: 'none' }}>
              <svg width="12" height="12" viewBox="0 0 16 16" aria-hidden="true" fill="currentColor">
                <path d="M2.75 1h2.6c.4 0 .75.27.85.65l.83 3a.9.9 0 0 1-.33.95L4.9 6.9a11.5 11.5 0 0 0 5.2 5.2l1.3-1.8a.9.9 0 0 1 .95-.33l3 .83c.38.1.65.45.65.85v2.6c0 .72-.58 1.3-1.3 1.31C7.9 15.24.76 8.1.44 1.44A1.3 1.3 0 0 1 1.75 1Z" />
              </svg>
              {site.phone}
            </a>
            <a className="chip" href={site.linkedin} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              LINKEDIN ↗
            </a>
            <a className="chip" href={site.github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              GITHUB ↗
            </a>
          </div>

          <p style={{ marginTop: 18, color: 'var(--ink-2)', maxWidth: '52ch', lineHeight: 1.7 }}>
            Role conversations, collaborations, feedback on any repo here — or a proper look at the résumé behind this
            site. Direct answers, usually within a day.
          </p>

          <div className="flex flex-wrap gap-4" style={{ marginTop: 24 }}>
            <a className="btn btn--lime" href={`mailto:${site.email}`}>
              WRITE AN EMAIL <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
            <a className="btn btn--violet" href={site.resume} download="M_Rahul_Resume.pdf">
              DOWNLOAD RÉSUMÉ <span className="btn-arrow" aria-hidden="true">↓</span>
            </a>
            <a className="btn" href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LINKEDIN <span className="btn-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <Reveal as="div" className="card tilt-deco" style={{ overflow: 'hidden', boxShadow: 'var(--shadow-m)' }}>
            <div
              style={{
                background: 'var(--ink)',
                color: 'var(--paper)',
                padding: '16px 18px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <span className="label-lg" style={{ color: 'var(--lime)' }}>
                STATUS
              </span>
              <span className="label" style={{ opacity: 0.7 }}>
                {site.builtYear}
              </span>
            </div>
            <div style={{ display: 'grid', gap: 14, padding: '20px 18px 22px' }}>
              <div className="flex items-start gap-3">
                <span className="dot-pulse" style={{ marginTop: 6 }} aria-hidden="true" />
                <p style={{ fontSize: '0.92rem', lineHeight: 1.6 }}>
                  <strong className="label-lg">{site.availability.toUpperCase()}</strong>
                  <br />
                  <span style={{ color: 'var(--muted)' }}>
                    B.Tech CSE {'’'}26 · Palle Technology internship (Jan–Jun 2026) · early-career software / AI-ML roles.
                  </span>
                </p>
              </div>
              <div className="hairline-t" style={{ paddingTop: 12 }}>
                <span className="label text-faint">RESPONSE TIME</span>
                <p className="label-lg" style={{ marginTop: 4 }}>
                  EMAIL OR PHONE — SAME DAY, USUALLY
                </p>
              </div>
              <div className="hairline-t" style={{ paddingTop: 12 }}>
                <span className="label text-faint">PROOF OF WORK</span>
                <p className="label-lg" style={{ marginTop: 4 }}>
                  GITHUB — PUBLIC CODE, DATED COMMITS
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
