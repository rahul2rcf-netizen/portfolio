import { useEffect, useState } from 'react'
import { repoSnapshot, type RepoCard } from '../data/repos'

type Mode = 'static' | 'live'

const DEMO_REPOS = new Set(['careerlence', 'resourcenest'])

function formatDate(iso: string): string {
  const d = new Date(iso)
  const mon = d.toLocaleString('en-US', { month: 'short' })
  return `${mon} ${String(d.getDate()).padStart(2, '0')}, ${d.getFullYear()}`
}

/**
 * Repository grid. Tries a runtime refresh against the public GitHub API
 * (no key required). On failure — including anonymous rate limits — the
 * verified static snapshot from 29 Oct 2026 is shown. No stars or commit
 * counts are displayed anywhere; the profile has none worth showing yet.
 */
export function GithubSection() {
  const [repos, setRepos] = useState<RepoCard[]>(repoSnapshot)
  const [mode, setMode] = useState<Mode>('static')

  useEffect(() => {
    let cancelled = false
    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 8000)

    fetch('https://api.github.com/users/rahul2rcf-netizen/repos?sort=updated&per_page=100', {
      signal: controller.signal,
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((r) => {
        if (!r.ok) throw new Error('github unavailable')
        return r.json()
      })
      .then((data: Array<{ name: string; html_url: string; description: string | null; language: string | null; pushed_at: string; has_pages: boolean; fork: boolean; size: number }>) => {
        if (cancelled || !Array.isArray(data)) return
        const mapped: RepoCard[] = data
          .filter((r) => !r.fork && r.size > 0 && r.name !== 'notes' && r.name !== 'R-Mirror')
          .map((r) => ({
            name: r.name,
            repo: r.html_url,
            blurb:
              repoSnapshot.find((s) => s.name === r.name)?.blurb ??
              (r.description || 'Repository — details in README'),
            language: r.language ?? '—',
            updated: formatDate(r.pushed_at),
            live: r.has_pages || DEMO_REPOS.has(r.name),
          }))
        if (mapped.length > 0) {
          setRepos(mapped)
          setMode('live')
        }
      })
      .catch(() => {
        /* keep the static snapshot */
      })
      .finally(() => window.clearTimeout(timeout))

    return () => {
      cancelled = true
      controller.abort()
    }
  }, [])

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3" style={{ marginBottom: 18 }}>
        <span className={`chip ${mode === 'live' ? 'chip--lime' : ''}`}>
          <span className="dot-pulse" aria-hidden="true" />
          {mode === 'live' ? 'LIVE FROM GITHUB API — NO KEY, NO TRACKING' : 'STATIC SNAPSHOT · 29 OCT 2026'}
        </span>
        <span className="label text-faint">STARS HIDDEN: ZERO EVERYWHERE, AND THAT WOULD BE MISLEADING DATA</span>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {repos.map((r, i) => (
          <a
            key={r.name}
            href={r.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="card card--lift reveal-child"
            style={{ textDecoration: 'none', minHeight: 132, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 12 }}
          >
            <div>
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <span className="mono" style={{ fontSize: '1.02rem', fontWeight: 600 }}>
                  {r.name}
                </span>
                {r.live && <span className="status-chip status-chip--live">DEMO / LIVE</span>}
              </div>
              <p className="label" style={{ color: 'var(--muted)', marginTop: 8, letterSpacing: '0.03em', textTransform: 'none', fontSize: 12.5 }}>
                {r.blurb}
              </p>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className="label text-faint">{(i + 1).toString().padStart(2, '0')} — REPO</span>
              <span className="flex items-center gap-3 flex-wrap">
                <span className="label text-muted">{r.language.toUpperCase()}</span>
                <span className="label text-faint">UPDATED {r.updated.toUpperCase()}</span>
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-4" style={{ marginTop: 24 }}>
        <a className="btn btn--ink" href="https://github.com/rahul2rcf-netizen?tab=repositories" target="_blank" rel="noopener noreferrer">
          ALL REPOSITORIES <span className="btn-arrow" aria-hidden="true">↗</span>
        </a>
        <a className="btn" href="https://github.com/rahul2rcf-netizen/rahul2rcf-netizen" target="_blank" rel="noopener noreferrer">
          PROFILE README <span className="btn-arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  )
}
