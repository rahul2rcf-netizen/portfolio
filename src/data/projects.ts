export interface Project {
  id: string
  index: string
  name: string
  repoName: string
  repo: string
  demo?: string
  live?: string
  liveLabel?: string
  status: 'live' | 'demo' | 'wip' | 'eval'
  statusLabel: string
  purpose: string
  problem: string
  features: string[]
  tech: string[]
  note?: string
  stats?: { value: string; label: string; caveat?: string }[]
  demoLabel?: string
}

/**
 * Every entry below was verified on 2026-10-29 against the repository's
 * README and/or source tree. Features are only listed if the repo content
 * supports them. Demo/live links are only present when the target was
 * reachable during research.
 */
export const projects: Project[] = [
  {
    id: 'evidencedesk',
    index: '01',
    name: 'EvidenceDesk',
    repoName: 'nevidencedesk',
    repo: 'https://github.com/rahul2rcf-netizen/nevidencedesk',
    status: 'eval',
    statusLabel: 'v1 recorded · experimental',
    purpose: 'Local-first document question answering with page-level citations.',
    problem:
      'Finding an answer inside a stack of PDFs means either re-reading everything or shipping private documents to a cloud bot. EvidenceDesk keeps the pipeline local and refuses to answer without evidence.',
    features: [
      'Indexes PDF and text files with PyMuPDF page-level extraction; pages with little extractable text are flagged as likely needing OCR',
      'Hybrid retrieval: BM25 keyword scoring fused with optional Sentence-Transformers / FAISS vectors',
      'Extractive answers by default, constrained to retrieved excerpts; optional OpenAI-compatible generation adapter, keys kept out of source',
      'Abstains when the evidence score falls below a configurable threshold',
      'FastAPI backend with SHA-256 duplicate detection, SQLite storage and history; React + TypeScript client with cited source previews',
      'Synthetic 50-question evaluation with a recorded, reproducible metric report (Recall@5, MRR, citation and groundedness proxies)',
    ],
    tech: ['Python', 'FastAPI', 'SQLite', 'PyMuPDF', 'FAISS', 'React', 'TypeScript', 'Docker'],
    note:
      'Evaluation runs on a fictional single-document test set — the repo explicitly documents it as a baseline, not a production benchmark. No live demo is published.',
    stats: [
      { value: '100%', label: 'Recall@5 (synthetic set)', caveat: '50-question fictional handbook, not a benchmark' },
      { value: '50', label: 'Evaluation cases', caveat: '40 answerable · 10 unanswerable' },
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
    status: 'demo',
    statusLabel: 'Interactive demo live',
    purpose: 'Evidence-linked resume-to-role review with a transparent score.',
    problem:
      'Resume screeners hand you a number and hide the reasoning. CareerLens points back to the exact resume text behind every detected skill, so each match can be checked before anyone acts on them.',
    features: [
      'Compares one resume against one job description and separates required from preferred skills',
      'Shows the resume evidence snippet that triggered each detected skill',
      'Lists role terms not found in the document as explicit gaps with a grounded next-step brief',
      'Transparent score formula: 60% required coverage + 15% preferred coverage + 25% TF-IDF alignment — documented in the repo',
      'Optional opt-in AI enhancement via Groq (open-weight gpt-oss-20b) with before/after re-scoring; local matching works with no key',
      'PDF / DOCX / TXT extraction plus a browser-side synthetic demo that sends nothing to a server',
    ],
    tech: ['Python', 'Streamlit', 'TF-IDF', 'Groq API', 'pytest', 'Ruff'],
    note: 'The static demo is a browser-side showcase, not the full Streamlit engine — labelled as such on the demo itself.',
    stats: [
      { value: '1', label: 'Role at a time', caveat: 'One JD, one resume, full evidence trail' },
      { value: '0', label: 'Data sent by default', caveat: 'Matching is local; AI is opt-in' },
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
    status: 'live',
    statusLabel: 'Live on GitHub Pages',
    purpose: 'A one-stop learning hub for students, freshers and job seekers.',
    problem:
      'Good learning material exists, but it is scattered across blogs, YouTube, docs and dead links. ResourceNest gathers the reliable ones and organises them by what you are actually trying to do.',
    features: [
      'Search and category filters across the full resource collection',
      'Goal-based prompts that suggest a concrete starting point ("not sure where to start?")',
      'Beginner-to-advanced roadmaps with per-step progress saved in the visitor’s browser',
      'Resume, interview and career-preparation checklists, including fresher-specific advice',
      'Curated list of official developer documentation links',
      'Ships as a zero-build static site — plain HTML, CSS and JavaScript',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    note: 'Verified live during research. The newsletter form is a front-end demo; the site itself says so honestly.',
    stats: [
      { value: '0', label: 'Build steps', caveat: 'Pure static front end' },
      { value: 'LIVE', label: 'Publicly accessible', caveat: 'Since October 2026' },
    ],
  },
  {
    id: 'raya',
    index: '04',
    name: 'RAYA Life OS',
    repoName: 'RAYA-Life-Os',
    repo: 'https://github.com/rahul2rcf-netizen/RAYA-Life-Os',
    status: 'wip',
    statusLabel: 'Evolving · no public demo',
    purpose: 'A self-reflection and digital-wellness dashboard in one place.',
    problem:
      'Journaling, goals, routines and breaks usually live in four different apps. RAYA puts them in a single dashboard with optional AI assistance and privacy considered.',
    features: [
      'Journal entries with review, plus goal tracking with milestones and streaks',
      'Wellness and screen-time notes alongside reminders and mindful soundscapes',
      'Interface themes and app snapshots kept in browser storage',
      'Optional Gemini-powered entry summaries and wellness tips, with local fallback responses when no key is configured',
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
    status: 'wip',
    statusLabel: 'Work in progress · early prototype',
    purpose: 'A personal workspace for notes, tasks, goals and a learning journal.',
    problem:
      'Third-party note apps couple your thinking with someone else’s storage model. This project works toward a local-first personal workspace with an AI assistant built around your own content.',
    features: [
      'Notes with an editor, tasks, goals, a Today dashboard, calendar and a long-form learning diary view',
      'Widget board: clock, goals, streaks, voice diary and wellness widgets with a customizer',
      'Global search, quick-add capture, reminders with alarms manager, and a drawing canvas',
      'AI assistant view wired through a self-hosted Express API handler so provider keys stay server-side',
      'Firebase authentication service and a Google Keep import/sync module',
      'Note features verified from the repository source; the repo ships no README yet',
    ],
    tech: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS 4', 'Express', 'Firebase', '@google/genai', 'Motion'],
    note: 'This repo contains no README — the feature list above was verified by reading the component and service source, not from marketing copy.',
  },
]
