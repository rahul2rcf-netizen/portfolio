import { useRef } from 'react'
import { useTilt } from '../hooks/useTilt'

function TiltPanel() {
  const ref = useRef<HTMLDivElement>(null)
  useTilt(ref, 6)
  return (
    <div ref={ref} className="card tilt" style={{ padding: 0, overflow: 'hidden' }}>
      <div style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <span className="label-lg" style={{ color: 'var(--lime)' }}>
          NOW
        </span>
        <span className="label" style={{ color: 'var(--paper)', opacity: 0.7 }}>
          CURRENT FOCUS
        </span>
      </div>
      <div style={{ padding: '20px 20px 24px', display: 'grid', gap: 14 }}>
        <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--ink-2)' }}>
          Document intelligence and retrieval: measured QA over private documents (EvidenceDesk) and evidence-linked
          resume analysis (CareerLens) — the two ends of the same problem: making an answer checkable.
        </p>
        <div className="flex flex-wrap" style={{ gap: 8 }}>
          {['BM25', 'FAISS', 'CITATIONS', 'ABSTENTION', 'TF-IDF'].map((t) => (
            <span key={t} className="tag" style={{ background: 'var(--lime)' }}>
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
          <p className="display reveal-child" style={{ fontSize: 'clamp(1.35rem, 2.6vw, 1.9rem)', lineHeight: 1.15, letterSpacing: '-0.015em' }}>
            Recent AI/ML graduate. Builds web and Android products. Learns by shipping.
          </p>
          <TiltPanel />
        </div>

        <div className="lg:col-span-7 prose" style={{ display: 'grid', gap: 4, alignContent: 'start' }}>
          <p className="lead reveal-child">
            I'm M. Rahul, an AI/ML graduate and software developer. I build practical web and Android products and
            explore applied AI — document intelligence, retrieval workflows, and privacy-aware design — out in the open,
            one repository at a time.
          </p>
          <p className="lead reveal-child">
            My projects share one habit: don't make the user take anything on faith. EvidenceDesk shows the exact page
            it quotes and abstains when the evidence runs out. CareerLens points back to the resume text behind every
            skill it detects. RAYA Life OS documents where optional AI features send your words — and what happens when
            you keep them local.
          </p>
          <p className="lead reveal-child">
            I use AI-assisted development tools as part of my workflow, and I keep a beginner's discipline while doing
            so: small scope, honest limitations, and a README that states what is real. The five projects below — more
            than any claim on a résumé — are how I'd like you to evaluate me.
          </p>

          <div className="grid sm:grid-cols-3 gap-4" style={{ marginTop: 22 }}>
            {[
              {
                n: '05',
                t: 'Projects in public',
                d: 'Featured open-source repositories, Sep 2025 → Oct 2026 era of experimentation.',
              },
              {
                n: '02',
                t: 'Public, working demos',
                d: 'ResourceNest live on GitHub Pages; CareerLens with an interactive browser demo.',
              },
              {
                n: '12',
                t: 'Months in public',
                d: 'GitHub account born Oct 2025; shipping continuously since.',
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
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {[
          {
            i: '01',
            t: 'Build to understand',
            d: 'Courses give vocabulary; building gives context. Every new technology here shows up inside a repo.',
          },
          {
            i: '02',
            t: 'Design for trust',
            d: 'Citations, abstention, opt-in AI, local fallbacks — small honest mechanisms that treat users and reviewers with respect.',
          },
          {
            i: '03',
            t: 'AI as a tool, not a crutch',
            d: 'AI-assisted development speeds the crafting; reviewing, testing, and documenting the result is still my job.',
          },
        ].map((c) => (
          <div key={c.i} className="card card--lift reveal-child" style={{ boxShadow: 'var(--shadow-s)' }}>
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
