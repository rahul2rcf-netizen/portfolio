import { skillGroups, skillNote } from '../data/skills'
import { Reveal } from './Reveal'

export function Skills() {
  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-4">
        {skillGroups.map((g, gi) => (
          <Reveal key={g.id} as="article" className={`skill-panel ${gi === 0 ? 'skill-panel--lime' : ''}`} delay={0}>
            <div>
              <span className="proj__ghost-index display" aria-hidden="true" style={{ fontSize: 84, top: 8, right: 12 }}>
                {g.index}
              </span>
              <div className="skill-panel__head">
                <h3 className="display" style={{ fontSize: '1.3rem', lineHeight: 1, textTransform: 'lowercase' }}>
                  {g.title}
                </h3>
                <span className="label text-faint">( {g.index} )</span>
              </div>
            </div>
            <div className="skill-panel__body">
              <p className="label" style={{ color: 'var(--muted)', letterSpacing: '0.04em', textTransform: 'none', fontSize: 11.5 }}>
                {g.kicker}
              </p>
              <div style={{ display: 'grid' }}>
                {g.rows.map((r) => (
                  <div key={r.group} className="skill-row">
                    <span className="label skill-row__group">{r.group.toUpperCase()}</span>
                    <span className="flex flex-wrap" style={{ gap: 8, display: 'inline-flex' }}>
                      {r.items.map((it) => (
                        <span key={it} className="tag">
                          {it}
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="card reveal" style={{ marginTop: 22, display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'baseline', borderBottomColor: 'var(--ink)' }}>
        <span className="chip chip--pink">
          <span className="dot-pulse" aria-hidden="true" /> HOW TO READ THIS
        </span>
        <p className="label" style={{ color: 'var(--muted)', letterSpacing: '0.03em', textTransform: 'none', fontSize: 12, flex: '1 1 420px' }}>
          {skillNote}
        </p>
      </div>
    </div>
  )
}
