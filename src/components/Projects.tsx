import { projects, type Project } from '../data/projects'
import { ProjectPlate } from './ProjectPlate'
import { useTilt } from '../hooks/useTilt'
import { Reveal } from './Reveal'
import { useRef } from 'react'

const techless = (p: Project) => p.tech

function StatusChip({ status, statusLabel }: { status: Project['status']; statusLabel: string }) {
  const cls =
    status === 'live' || status === 'demo' ? 'status-chip status-chip--live' : 'status-chip status-chip--wip'
  return <span className={cls}>{statusLabel}</span>
}

function PlateWrap({ id }: { id: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useTilt(ref, 4)
  return (
    <div className="proj__plate-inner tilt" ref={ref}>
      <div className="proj__float">
        <ProjectPlate id={id} />
      </div>
    </div>
  )
}

function ProjectCard({ p, flip }: { p: Project; flip: boolean }) {
  return (
    <article className={`proj ${flip ? 'proj--flip' : ''}`} aria-labelledby={`proj-${p.id}`}>
      <div className="proj__body" style={{ overflow: 'clip' }}>
        <span className="proj__ghost-index display" aria-hidden="true">
          {p.index}
        </span>

        <div className="flex items-center justify-between gap-3 flex-wrap" style={{ position: 'relative' }}>
          <h3 id={`proj-${p.id}`} className="display h-card">
            {p.name}
          </h3>
          <div className="flex items-center gap-3 flex-wrap">
            {p.badge === 'resume' && <span className="pbadge pbadge--resume">ON THE RÉSUMÉ</span>}
            {p.badge === 'personal' && <span className="pbadge pbadge--personal">PERSONAL BUILD</span>}
            <StatusChip status={p.status} statusLabel={p.statusLabel} />
          </div>
        </div>

        <p className="lead" style={{ marginTop: 14 }}>
          {p.purpose}
        </p>

        <div
          className="card"
          style={{
            marginInline: 0,
            marginBottom: 20,
            marginTop: 22,
            padding: '14px 18px',
            background: 'var(--paper)',
            borderStyle: 'solid',
            boxShadow: 'none',
          }}
        >
          <span className="label text-muted">THE PROBLEM</span>
          <p style={{ marginTop: 6, fontSize: '0.95rem', color: 'var(--ink-2)' }}>{p.problem}</p>
        </div>

        <span className="label text-muted">IMPLEMENTED — VERIFIED FROM THE REPO</span>
        <ul className="feat-list">
          {p.features.map((f) => (
            <li key={f} className="feat-list__item">
              {f}
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 20 }}>
          <span className="label text-muted">STACK</span>
          <div className="flex flex-wrap" style={{ gap: 8, marginTop: 8 }}>
            {techless(p).map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>

        {p.stats && (
          <div className="flex flex-wrap" style={{ gap: 10, marginTop: 20 }}>
            {p.stats.map((s) => (
              <span
                key={s.value}
                style={{
                  border: '2px solid var(--ink)',
                  padding: '10px 12px',
                  background: 'var(--paper)',
                  display: 'inline-block',
                }}
              >
                <span className="label-lg display" style={{ fontSize: 15, letterSpacing: 0 }}>
                  {s.value}
                </span>
                <span className="label" style={{ color: 'var(--muted)', display: 'block', marginTop: 4 }}>
                  {s.label}
                </span>
                {s.caveat && (
                  <span className="label" style={{ color: 'var(--faint)', display: 'block', marginTop: 2 }}>
                    {s.caveat}
                  </span>
                )}
              </span>
            ))}
          </div>
        )}

        {p.note && (
          <p className="label" style={{ color: 'var(--muted)', marginTop: 14, letterSpacing: '0.02em', textTransform: 'none' }}>
            NOTE — {p.note}
          </p>
        )}

        <div className="proj-links">
          <a className="linkbrut" href={p.repo} target="_blank" rel="noopener noreferrer">
            SOURCE — {p.repoName} <span aria-hidden="true">↗</span>
          </a>
          {p.demo && (
            <a className="linkbrut" href={p.demo} target="_blank" rel="noopener noreferrer">
              {p.demoLabel ?? 'DEMO'} <span aria-hidden="true">↗</span>
            </a>
          )}
          {p.live && (
            <a className="linkbrut" href={p.live} target="_blank" rel="noopener noreferrer">
              {p.liveLabel ?? 'LIVE'} <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>

      <div className="proj__plate">
        <PlateWrap id={p.id} />
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <div style={{ display: 'grid', gap: 'clamp(1.6rem, 4vw, 2.6rem)' }}>
      {projects.map((p, i) => (
        <Reveal key={p.id} as="div">
          <ProjectCard p={p} flip={i % 2 === 1} />
        </Reveal>
      ))}
      <p className="label text-faint" style={{ letterSpacing: '0.04em' }}>
        Every feature above was checked against each repository{'’'}s README or source and cross-set with the resume
        bullets on 29 Oct 2026. Preview plates are illustrations of each project{'’'}s interface motifs — not screenshots.
        Pink = on the résumé · lavender = personal build.
      </p>
    </div>
  )
}
