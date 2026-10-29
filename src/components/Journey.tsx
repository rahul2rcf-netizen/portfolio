import { experience, journeyNote, milestones, achievements, type Milestone } from '../data/timeline'
import { Reveal } from './Reveal'

function nodeColor(m: Milestone): string {
  const tag = m.tag ?? ''
  if (tag.includes('education') || tag.includes('degree')) return 'tl__node tl__node--violet'
  if (tag.includes('experience')) return 'tl__node tl__node--pink'
  return 'tl__node tl__node--lime'
}

function tagLabel(m: Milestone): string {
  const t = (m.tag ?? '').toUpperCase().replace(/ /g, '·')
  return t
}

export function Journey() {
  return (
    <div className="grid lg:grid-cols-12 gap-10">
      <div className="lg:col-span-7">
        <ol className="tl">
          {milestones.map((m) => (
            <Reveal key={m.dateISO + m.title} as="li">
              <span className={nodeColor(m)} aria-hidden="true" />
              <div className="flex flex-wrap items-baseline gap-3">
                <span
                  className="label-lg"
                  style={{
                    color:
                      (m.tag ?? '').includes('education') || (m.tag ?? '').includes('degree')
                        ? 'var(--ink)'
                        : 'var(--muted)',
                  }}
                >
                  {m.date}
                </span>
                {m.tag && <span className="label text-faint">— {tagLabel(m)}</span>}
              </div>
              <h3
                className="display"
                style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)', marginTop: 8, lineHeight: 1.05 }}
              >
                {m.title}
              </h3>
              <p style={{ marginTop: 8, color: 'var(--ink-2)', fontSize: '0.95rem', maxWidth: '56ch', lineHeight: 1.65 }}>
                {m.body}
              </p>
            </Reveal>
          ))}
        </ol>

        <p
          className="label"
          style={{ color: 'var(--muted)', marginTop: 26, letterSpacing: '0.03em', textTransform: 'none', fontSize: 12 }}
        >
          {journeyNote}
        </p>
      </div>

      <div className="lg:col-span-5" style={{ alignContent: 'start', display: 'grid', gap: 18 }}>
        <Reveal as="div" className="card" style={{ overflow: 'hidden' }}>
          <div
            style={{
              background: 'var(--pink)',
              color: 'var(--ink)',
              padding: '14px 18px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 10,
              borderRadius: '18px 18px 0 0',
              margin: '-0px',
            }}
          >
            <span className="label-lg">INTERNSHIP — VERIFIED</span>
            <span className="label">{experience.period.toUpperCase()}</span>
          </div>          <div style={{ padding: '20px 18px 22px' }}>
            <h3 className="display" style={{ fontSize: '1.4rem', lineHeight: 1.1 }}>
              {experience.role}
            </h3>
            <p className="label-lg" style={{ marginTop: 6 }}>
              {experience.org.toUpperCase()}
            </p>
            <ul className="feat-list" style={{ marginTop: 14 }}>
              {experience.points.map((p) => (
                <li key={p} className="feat-list__item">
                  {p}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap" style={{ gap: 8, marginTop: 16 }}>
              {['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'React', 'REST APIs'].map((t) => (
                <span key={t} className="tag tag--pink">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div>
          <p className="label text-muted reveal-child" style={{ marginBottom: 12 }}>
            ( ACHIEVEMENTS & COMMUNITY )
          </p>
          <div className="grid gap-4">
            {achievements.map((a, i) => (
              <Reveal key={a.stat} as="div" className="ach" >
                <div className="flex items-center gap-4">
                  <span
                    className="ach__stat display"
                    style={{ color: i === 0 ? 'var(--ink)' : i === 1 ? 'var(--violet)' : 'var(--pink)' }}
                  >
                    {a.stat}
                  </span>
                  <div>
                    <div className="label">{a.label.toUpperCase()}</div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--ink-2)', marginTop: 4, lineHeight: 1.5 }}>{a.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal as="div" className="card" style={{ overflow: 'hidden' }}>
          <div style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '16px 18px', borderRadius: '18px 18px 0 0' }}>
            <span className="label" style={{ color: 'var(--lime)' }}>
              ( THE SYMBOLS )
            </span>
          </div>
          <div style={{ display: 'grid', gap: 10, padding: '20px 18px 22px', fontSize: '0.92rem', lineHeight: 1.65, color: 'var(--ink-2)' }}>
            <p>
              <span style={{ color: 'var(--violet)', fontWeight: 700 }} className="display">
                ●
              </span>{' '}
              violet dots — education ·{' '}
              <span className="display" style={{ color: 'var(--pink)', fontWeight: 700 }}>
                ●
              </span>{' '}
              pink — experience ·{' '}
              <span className="display" style={{ color: 'var(--lime-deep, var(--ink))', fontWeight: 700 }}>
                ●
              </span>{' '}
              lime — shipped code.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
