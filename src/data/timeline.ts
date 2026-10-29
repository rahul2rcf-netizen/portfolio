export interface Milestone {
  date: string
  dateISO: string
  title: string
  body: string
  tag?: string
  kind?: 'win' | 'milestone' | 'ship'
}

/**
 * Sources: the ATS resume (uploaded 29 Oct 2026) for education and
 * experience dates; the public GitHub API for repository creation dates.
 * Both cross-checked on 29-10-2026.
 */
export const milestones: Milestone[] = [
  {
    dateISO: '2020-07-01',
    date: 'Jul 2020',
    title: 'SSC — Z P High School, Chukkaluru',
    body: 'Finished school with a 9.2 CGPA.',
    tag: 'education',
  },
  {
    dateISO: '2020-12-01',
    date: 'Dec 2020 → Apr 2022',
    title: 'Intermediate (MPC) — Sir CV Raman Junior College',
    body: 'Two years of maths-physics-chemistry, scored 8.2.',
    tag: 'education',
  },
  {
    dateISO: '2022-10-01',
    date: 'Oct 2022 → Jun 2026',
    title: 'B.Tech, Computer Science & Engineering',
    body: 'Sir C V Raman Institute of Science and Technology, Andhra Pradesh. Graduating with a 7.92 CGPA — and most of the real learning shipped as repos.',
    tag: 'degree',
  },
  {
    dateISO: '2026-01-01',
    date: 'Jan → Jun 2026',
    title: 'Full Stack Developer Intern — Palle Technology',
    body: 'Built backend modules and authentication flows with Spring Boot + Hibernate over MySQL, and responsive React components for user-facing workflows, on top of REST APIs. Selected through the Campus-to-Corporate (C2C) program.',
    tag: 'experience',
  },
  {
    dateISO: '2026-09-09',
    date: 'Sep 2026',
    title: 'Personal AI OS — first prototype',
    body: 'Notes, tasks, goals, calendar and an AI assistant behind a self-hosted Express API that keeps provider keys server-side.',
    tag: 'personal project',
  },
  {
    dateISO: '2026-10-15',
    date: 'Oct 2026',
    title: 'ResourceNest goes live',
    body: 'Learning hub published to GitHub Pages — search, topic filters, roadmaps with browser-saved progress and career checklists.',
    tag: 'shipped',
  },
  {
    dateISO: '2026-10-25',
    date: 'Oct 2026',
    title: 'CareerLens AI demo ships',
    body: 'Evidence-linked resume-to-role review with an interactive browser demo anyone can try without uploading data.',
    tag: 'shipped',
  },
  {
    dateISO: '2026-10-28',
    date: 'Oct 2026',
    title: 'EvidenceDesk v1 evaluated',
    body: 'Local-first document Q&A with hybrid retrieval, page-level citations, abstention logic and a recorded synthetic evaluation.',
    tag: 'milestone',
  },
  {
    dateISO: '2026-10-29',
    date: 'Oct 2026',
    title: 'Portfolio v2 live',
    body: 'This site — shipped in public, wired with GitHub Pages auto-deploys.',
    tag: 'this site',
  },
]

export const achievements = [
  {
    stat: '500+',
    label: 'CodeChef problems',
    detail: 'difficulty-rated problems solved and counting',
  },
  {
    stat: 'C2C',
    label: 'Internship selection',
    detail: 'chosen for the Campus-to-Corporate program at Palle Technology, 2026',
  },
  {
    stat: 'GSSoC',
    label: 'Open-source community',
    detail: 'contributions across GirlScript Summer of Code and Hacktoberfest',
  },
]

export const experience = {
  role: 'Full Stack Developer Intern',
  org: 'Palle Technology',
  period: 'Jan 2026 — Jun 2026',
  points: [
    'Full-stack feature work across Java, Spring Boot, Hibernate, MySQL, React and REST APIs.',
    'Built backend modules and authentication flows with Spring Boot.',
    'Developed responsive React components for user-facing workflows.',
  ],
}

export const journeyNote =
  'Dates and scores from the uploaded resume (October 2026), cross-checked against the public GitHub API — see everything I claim in a repo or a document.'
