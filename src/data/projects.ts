export interface Project {
  id: string
  index: string
  name: string
  repoName: string
  repo: string
  demo?: string
  demoLabel?: string
  live?: string
  liveLabel?: string
  status: 'live' | 'demo' | 'wip' | 'eval' | 'intern'
  statusLabel: string
  purpose: string
  problem: string
  features: string[]
  tech: string[]
  note?: string
  stats?: { value: string; label: string; caveat?: string }[]
  badge?: 'resume' | 'personal'
}

/**
 * Sources, verified 2026-10-29: the ATS resume (project bullets) and each
 * repository's README / source tree. Feature lists only contain items
 * documented in at least one of those two places. Demo/live links were
 * reachable at research time.
 */
export const projects: Project[] = [
  {
    id: 'evidencedesk',
    index: '01',
    name: 'EvidenceDesk',
    repoName: 'nevidencedesk',
    repo: 'https://github.com/rahul2rcf-netizen/nevidencedesk',
    badge: 'resume',
    status: 'eval',
    statusLabel: 'v1 recorded · experimental',
    purpose: 'Local-first document question answering with page-level citations.',
    problem:
      'Finding an answer inside a stack of PDFs means either re-reading everything or shipping private documents to a cloud bot. EvidenceDesk keeps the pipeline local and refuses to answer without evidence.',
    features: [
      'Page-aware PDF/TXT extraction with chunking, plus hybrid keyword + vector retrieval (BM25, optional Sentence-Transformers / FAISS)',
      'Answers cite their source — document, page and excerpt previews',
      'Document validation, SHA-256 duplicate detection, SQLite-backed metadata, query history and feedback capture',
      'Abstains when the evidence score falls below a configurable threshold',
      'FastAPI backend with a React + TypeScript client',
      'Reproducible evaluation: Recall@5 1.00 and MRR 0.975 on 50 synthetic questions — experimental, not human-reviewed',
    ],
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'PyMuPDF', 'SQLite', 'BM25', 'FAISS', 'Sentence Transformers'],
    note:
      'The recorded metrics come from a fictional single-document test set, and the repo says so plainly. No live demo is published.',
    stats: [
      { value: '1.00', label: 'Recall@5 · synthetic set', caveat: '50 fictional questions, not a benchmark' },
      { value: '0.975', label: 'MRR · same test', caveat: 'experimental, unreviewed' },
    ],
  },
  {
    id: 'careerlens',
    index: '02',
    name: 'CareerLens AI',
    repoName: 'careerlence',
    repo: 'https://github.com/rahul2rcf-netizen/careerlence',
    demo: 'https://raw.githack.com/rahul2rcf-netizen/careerlence/main/docs/index.html',
    demoLabel: 'Interactive demo',
    badge: 'resume',
    status: 'demo',
    statusLabel: 'Interactive demo live',
    purpose: 'Evidence-linked resume-to-role analysis with a transparent estimate.',
    problem:
      'Resume screeners hand you a number and hide the reasoning. CareerLens points back to the exact resume text behind every detected skill, so each match can be checked before anyone acts on it.',
    features: [
      'Compares one resume against one target job description; separates matched skills, missing terms and required/preferred requirements',
      'Surfaces the resume snippets that triggered each detected skill',
      'Role-specific improvement guidance, downloadable reports and reviewed-draft exports',
      'Optional AI-assisted rewriting via Groq, with the local matcher fully working without any key',
      'Interactive synthetic-data demo that never uploads your document',
      'The score is documented as a heuristic estimate — not an ATS score or hiring prediction',
    ],
    tech: ['Python', 'Streamlit', 'TF-IDF', 'Groq API', 'HTML/CSS/JS demo'],
    note: 'The static demo is a browser-side showcase, not the full Streamlit engine — labelled as such on the demo itself.',
    stats: [
      { value: '1', label: 'Role at a time', caveat: 'One JD, one resume, full evidence trail' },
      { value: '0', label: 'Data sent by default', caveat: 'local matching; AI is opt-in' },
    ],
  },
  {
    id: 'resourcenest',
    index: '03',
    name: 'ResourceNest',
    repoName: 'resourcenest',
    repo: 'https://github.com/rahul2rcf-netizen/resourcenest',
    live: 'https://rahul2rcf-netizen.github.io/resourcenest/',
    liveLabel: 'Live site',
    badge: 'resume',
    status: 'live',
    statusLabel: 'Live on GitHub Pages',
    purpose: 'A searchable learning and career resource hub.',
    problem:
      'Good learning material exists, but it is scattered across blogs, YouTube, docs and dead links. ResourceNest gathers the reliable ones and organises them by what you are actually trying to do.',
    features: [
      'Search and category filters across the full resource collection',
      'Learning roadmaps with per-step progress saved in the browser',
      'Resume, interview and career-preparation checklists',
      'Organised around developer documentation, learning paths and job prep',
      'Ships as a zero-build static site — plain HTML, CSS and JavaScript',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    note: 'Verified live during research. The newsletter form is a front-end demo; the site itself says so honestly.',
    stats: [
      { value: '0', label: 'Build steps', caveat: 'pure static front end' },
      { value: 'LIVE', label: 'Publicly accessible', caveat: 'github.io/resourcenest' },
    ],
  },
  {
    id: 'raya',
    index: '04',
    name: 'RAYA Life OS',
    repoName: 'RAYA-Life-Os',
    repo: 'https://github.com/rahul2rcf-netizen/RAYA-Life-Os',
    badge: 'personal',
    status: 'wip',
    statusLabel: 'Evolving · no public demo',
    purpose: 'A self-reflection and digital-wellness dashboard in one place.',
    problem:
      'Journaling, goals, routines and breaks usually live in four different apps. RAYA puts them in a single dashboard with optional AI assistance and the data flow documented.',
    features: [
      'Journal entries with review, plus goal tracking with milestones and streaks',
      'Wellness and screen-time notes alongside reminders and mindful soundscapes',
      'Interface themes and app snapshots kept in browser storage',
      'Optional Gemini-powered summaries and tips, with local fallback responses when no key is configured',
      'Public either way: the repo documents exactly what is sent where',
    ],
    tech: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Express', 'Firebase', 'Google GenAI SDK', 'Bun'],
    note: 'README status: an evolving project where some features and integrations may require additional configuration.',
  },
  {
    id: 'personal-ai-os',
    index: '05',
    name: 'Personal AI OS',
    repoName: 'MicroServises-notes',
    repo: 'https://github.com/rahul2rcf-netizen/MicroServises-notes',
    badge: 'personal',
    status: 'wip',
    statusLabel: 'Work in progress · early prototype',
    purpose: 'A personal workspace for notes, tasks, goals and a learning journal.',
    problem:
      'Third-party note apps couple your thinking with someone else’s storage model. This project works toward a local-first personal workspace with an AI assistant built around your own content.',
    features: [
      'Notes with an editor, tasks, goals, a Today dashboard, calendar and a long-form learning diary view',
      'Widget board: clock, goals, streaks, voice diary and wellness widgets with a customizer',
      'Global search, quick-add capture, reminders with alarms manager, and a drawing canvas',
      'AI assistant wired through a self-hosted Express API handler so provider keys stay server-side',
      'Firebase authentication service and a Google Keep import/sync module',
      'Features verified from the repository source; the repo ships no README yet',
    ],
    tech: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS 4', 'Express', 'Firebase', '@google/genai', 'Motion'],
    note: 'No README in this repo — the feature list above was verified by reading the component and service source, not from marketing copy.',
  },
]
