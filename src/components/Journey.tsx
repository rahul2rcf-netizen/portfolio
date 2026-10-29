import { milestones, journeyNote } from '../data/timeline'
import { Reveal } from './Reveal'

export function Journey() {
  return (
    <div className="grid lg:grid-cols-12 gap-10">
      <div className="lg:col-span-7">
        <ol className="tl">
          {milestones.map((m) => (
            <Reveal key={m.dateISO} as="li">
              <span
                className={`tl__node ${m.live ? 'tl__node--lime' : ''}`}
                style={{ top: 6 }}
                aria-hidden="true"
              />
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="label-lg" style={{ color: m.live ? 'var(--ink)' : 'var(--muted)' }}>
                  {m.date}
                </span>
                {m.tag && <span className="label text-faint">— {m.tag.toUpperCase()}</span>}
              </div>
              <h3 className="display" style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)', marginTop: 8, lineHeight: 1.05 }}>
                {m.title}
              </h3>
              <p style={{ marginTop: 8, color: 'var(--ink-2)', fontSize: '0.95rem', maxWidth: '56ch', lineHeight: 1.65 }}>
                {m.body}
              </p>
            </Reveal>
          ))}
        </ol>

        <p className="label" style={{ color: 'var(--muted)', marginTop: 26, letterSpacing: '0.03em', textTransform: 'none', fontSize: 12 }}>
          {journeyNote}
        </p>
      </div>

      <div className="lg:col-span-5" style={{ alignContent: 'start', display: 'grid', gap: 18 }}>
        <div className="card reveal" style={{ boxShadow: 'var(--shadow-m)' }}>
          <span className="label text-muted">( LEARNING LOOP )</span>
          <h3 className="display" style={{ fontSize: '1.5rem', marginBlock: 14 }}>
            Build → Measure → Refine
          </h3>
          <p style={{ color: 'var(--ink-2)', fontSize: '0.95rem', lineHeight: 1.7 }}>
            EvidenceDesk is the method made visible: define a test set, run it, record the numbers next to their
            caveats, then rewrite the weak parts. The next versions of CareerLens and EvidenceDesk are being built the
            same way — in the open, one measured iteration at a time.
          </p>
        </div>

        <div className="card reveal" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>
          <span className="label" style={{ color: 'var(--lime)' }}>
            ( NOT LISTED )
          </span>
          <p style={{ marginTop: 14, lineHeight: 1.7, fontSize: '0.95rem' }}>
            No degree, internship, award, or certification entries appear here because none are publicly verifiable
            yet. Ask at <a href="mailto:rahul2rcf@gmail.com" style={{ color: 'var(--lime)', textDecorationThickness: 2 }}>rahul2rcf@gmail.com</a> and
            you will get straight answers — with dates.
          </p>
        </div>
      </div>
    </div>
  )
}
