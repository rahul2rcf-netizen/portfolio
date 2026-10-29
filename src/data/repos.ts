export interface RepoCard {
  name: string
  repo: string
  blurb: string
  language: string
  updated: string
  live?: boolean
}

/**
 * Static snapshot of the GitHub profile (2026-10-29). The component tries
 * to refresh this list from the GitHub API at runtime; when the request
 * fails or is rate-limited, this verified snapshot is shown instead.
 * Stars/commits are intentionally absent — all are 0 and would not mean
 * anything yet.
 */
export const repoSnapshot: RepoCard[] = [
  {
    name: 'nevidencedesk',
    repo: 'https://github.com/rahul2rcf-netizen/nevidencedesk',
    blurb: 'Document Q&A — hybrid retrieval, citations, abstention',
    language: 'Python',
    updated: 'Oct 28, 2026',
  },
  {
    name: 'careerlence',
    repo: 'https://github.com/rahul2rcf-netizen/careerlence',
    blurb: 'Evidence-led resume-to-role review + live demo',
    language: 'Python',
    updated: 'Oct 25, 2026',
    live: true,
  },
  {
    name: 'resourcenest',
    repo: 'https://github.com/rahul2rcf-netizen/resourcenest',
    blurb: 'Learning hub for students & job seekers',
    language: 'CSS',
    updated: 'Oct 15, 2026',
    live: true,
  },
  {
    name: 'RAYA-Life-Os',
    repo: 'https://github.com/rahul2rcf-netizen/RAYA-Life-Os',
    blurb: 'Journal, goals, routines, wellness dashboard',
    language: 'TypeScript',
    updated: 'Oct 15, 2026',
  },
  {
    name: 'MicroServises-notes',
    repo: 'https://github.com/rahul2rcf-netizen/MicroServises-notes',
    blurb: 'Personal AI OS workspace — notes, tasks, AI assistant',
    language: 'TypeScript',
    updated: 'Sep 09, 2026',
  },
  {
    name: 'rahul2rcf-netizen',
    repo: 'https://github.com/rahul2rcf-netizen/rahul2rcf-netizen',
    blurb: 'Profile README — about, featured projects, contact',
    language: 'Markdown',
    updated: 'Oct 29, 2026',
  },
]
