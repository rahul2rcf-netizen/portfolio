export interface Milestone {
  date: string
  dateISO: string
  title: string
  body: string
  tag?: string
  live?: boolean
}

/**
 * Timeline built only from verifiable dates: the GitHub account creation
 * date and each repository's creation date from the public GitHub API
 * (retrieved 2026-10-29). No education, internship, award, or certificate
 * entries are included because none are publicly documented yet.
 */
export const milestones: Milestone[] = [
  {
    dateISO: '2025-10-23',
    date: 'Oct 2025',
    title: 'Started shipping in public',
    body: 'Created the GitHub account and made it the default home for everything built since — portfolio work, prototypes and notes, all open source.',
    tag: 'beginning',
  },
  {
    dateISO: '2026-09-09',
    date: 'Sep 2026',
    title: 'Personal AI OS — first prototype',
    body: 'Built the app shell for a personal workspace: notes, tasks, goals, calendar, a learning diary and an AI assistant, with an Express API handler that keeps provider keys server-side.',
    tag: 'Personal AI OS',
  },
  {
    dateISO: '2026-09-10',
    date: 'Sep 2026',
    title: 'RAYA Life OS take shape',
    body: 'A journaling, goals and wellness dashboard in React 19 with optional Gemini features and honest local fallbacks — one more step toward products people can trust with their own data.',
    tag: 'RAYA Life OS',
  },
  {
    dateISO: '2026-10-15',
    date: 'Oct 2026',
    title: 'ResourceNest goes live',
    body: 'Published the learning-resource hub to GitHub Pages: search, topic filters, roadmaps with local progress, and career checklists. First project with a real public URL.',
    tag: 'ResourceNest',
    live: true,
  },
  {
    dateISO: '2026-10-25',
    date: 'Oct 2026',
    title: 'CareerLens AI ships an interactive demo',
    body: 'An evidence-led resume-to-role review engine, with a browser-side demo anyone can try without uploading data — and a Streamlit app behind it.',
    tag: 'CareerLens AI',
    live: true,
  },
  {
    dateISO: '2026-10-28',
    date: 'Oct 2026',
    title: 'EvidenceDesk v1 evaluated',
    body: 'Local-first document Q&A with hybrid retrieval, page-level citations and an abstention path — plus a recorded synthetic evaluation rather than unproven claims.',
    tag: 'EvidenceDesk',
  },
]

export const journeyNote =
  'Dates verified from the public GitHub API on 29 Oct 2026 (account and repository creation dates). Education, internships and certifications are not publicly documented yet — happy to share those on request.'
