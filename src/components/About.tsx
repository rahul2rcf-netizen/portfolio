import { useRef } from 'react'
import { useTilt } from '../hooks/useTilt'
import { site } from '../data/site'

function TiltPanel() {
  const ref = useRef<HTMLDivElement>(null)
  useTilt(ref, 6)
  return (
    <div ref={ref} className="card tilt tilt-deco--l" style={{ padding: 0, overflow: 'hidden' }}>
      <div
        style={{
          background: 'var(--ink)',
          color: 'var(--paper)',
          padding: '18px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
        }}
      >
        <span className="label-lg" style={{ color: 'var(--lime)' }}>
          NOW
        </span>
        <span className="label" style={{ color: 'var(--paper)', opacity: 0.7 }}>
          AS OF OCT 2026
        </span>
      </div>
      <div style={{ padding: '20px 20px 24px', display: 'grid', gap: 14 }}>
        <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--ink-2)' }}>
          Just wrapped a 6-month full-stack internship at Palle Technology — Spring Boot, MySQL and React in
          production-shaped workflows. Now open to software and AI/ML roles while shipping two document-intelligence builds.
        </p>
        <div className="flex flex-wrap" style={{ gap: 8 }}>
          {['SPRING BOOT', 'REACT', 'BM25', 'CITATIONS', 'FAISS'].map((t) => (
            <span key={t} className="tag tag--lime">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function About() {
  return (
    <div style={{ display: 'grid', gap: 'clamp(2rem, 5vw, 3rem)' }}>
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-5" style={{ display: 'grid', gap: 22, alignContent: 'start' }}>
          <p className="label text-muted reveal-child">( WHO IS BUILDING )</p>
          <p
            className="display reveal-child"
            style={{ fontSize: 'clamp(1.35rem, 2.6vw, 1.9rem)', lineHeight: 1.15, letterSpacing: '-0.015em' }}
          >
            B.Tech CSE graduate{'’'}26. Full-stack intern alumnus. Builds AI tools that show their receipts.
          </p>
          <TiltPanel />
        </div>

        <div className="lg:col-span-7 prose" style={{ display: 'grid', gap: 4, alignContent: 'start' }}>
          <p className="lead reveal-child">
            I{'’'}m M. Rahul, an AI/ML graduate from Andhra Pradesh with a Computer Science degree behind me and six
            months of internship experience in front of me. I build practical web products and explore applied AI —
            document intelligence, retrieval workflows, privacy-aware design — in the open, one repository at a time.
          </p>
          <p className="lead reveal-child">
            My projects share one habit: don{'’'}t make the user take anything on faith. EvidenceDesk quotes the exact
            page it answered from and abstains when the evidence runs out. CareerLens points back to the resume text
            behind every skill it detects. The internship taught me the other half — shipping backend modules and
            responsive UI on a team{'’'}s schedule.
          </p>
          <p className="lead reveal-child">
            I use AI-assisted development as part of my workflow and keep a beginner{'’'}s discipline doing it: small
            scope, honest limitations, READMEs that state what is real. The five projects below — more than any claim on
            a résumé — are how I{'’'}d like you to evaluate me.
          </p>

          <div className="grid sm:grid-cols-3 gap-4" style={{ marginTop: 22 }}>
            {[
              {
                n: '05',
                t: 'Public projects',
                d: 'Open-source repositories shipped during 2026 — documents to dashboards.',
              },
              {
                n: '500+',
                t: 'CodeChef problems',
                d: 'Difficulty-rated problems solved, per the resume.',
              },
              {
                n: '7.92',
                t: 'B.Tech CGPA',
                d: 'Computer Science & Engineering, class of 2026.',
              },
            ].map((f) => (
              <div key={f.n} className="fact reveal-child">
                <div className="fact__num display">{f.n}</div>
                <div className="label" style={{ marginTop: 8 }}>
                  {f.t.toUpperCase()}
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: 6, lineHeight: 1.5 }}>{f.d}</p>
              </div>
            ))}
          </div>

          <p className="label reveal-child" style={{ color: 'var(--muted)', marginTop: 20, letterSpacing: '0.03em', textTransform: 'none' }}>
            P.S — the real résumé is on this site now:{' '}
            <a
              href={site.resume}
              download="M_Rahul_Resume.pdf"
              style={{ color: 'var(--ink)', textDecorationColor: 'var(--violet)', textDecorationThickness: 2 }}
            >
              download the PDF ↓
            </a>
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {[
          {
            i: '01',
            t: 'Build to understand',
            d: 'Courses give vocabulary; building gives context. Every technology on this page shows up inside a repo.',
          },
          {
            i: '02',
            t: 'Design for trust',
            d: 'Citations, abstention, opt-in AI, local fallbacks — small honest mechanisms that respect users and reviewers.',
          },
          {
            i: '03',
            t: 'AI as a tool, not a crutch',
            d: 'AI-assisted development speeds the making. Reviewing, testing and documenting the result is still my job.',
          },
        ].map((c, i) => (
          <div
            key={c.i}
            className="card card--lift reveal-child"
            style={{ boxShadow: i === 1 ? 'var(--shadow-s)' : '5px 5px 0 ' + (i === 0 ? 'var(--violet)' : 'var(--pink)') }}
          >
            <span className="label text-faint">( {c.i} )</span>
            <h3 className="display" style={{ fontSize: '1.15rem', marginTop: 10, lineHeight: 1.1 }}>
              {c.t}
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--ink-2)', marginTop: 10, lineHeight: 1.6 }}>{c.d}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
