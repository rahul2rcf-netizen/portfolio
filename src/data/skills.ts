export interface SkillGroup {
  id: string
  index: string
  title: string
  kicker: string
  rows: { group: string; items: string[] }[]
}

/**
 * Source of truth: the resume-derived skill list (languages, frontend,
 * backend, database, fundamentals) plus technologies that are actually
 * shipped inside verified repositories. Anything from the GitHub README
 * that no repo demonstrates is labelled "exploring" — never rated.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: 'core',
    index: 'A',
    title: 'Core stack',
    kicker: 'Fundamentals — established through coursework and repeated practice',
    rows: [
      { group: 'Languages', items: ['Java', 'JavaScript'] },
      { group: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'React', 'Tailwind CSS'] },
      { group: 'Backend', items: ['Spring', 'Spring Boot', 'JDBC', 'JSP / Servlets', 'REST APIs'] },
      { group: 'Database', items: ['MySQL'] },
      { group: 'Fundamentals', items: ['OOP', 'DBMS', 'Computer Networks'] },
    ],
  },
  {
    id: 'shipped',
    index: 'B',
    title: 'Used in projects',
    kicker: 'Each of these is shipped somewhere in a linked repository',
    rows: [
      { group: 'AI / retrieval', items: ['FastAPI', 'BM25', 'FAISS', 'TF-IDF matching', 'Groq API', 'Google GenAI SDK'] },
      { group: 'Data & storage', items: ['SQLite', 'PyMuPDF', 'Firebase'] },
      { group: 'Web & tooling', items: ['TypeScript', 'Python', 'Vite', 'Express', 'Bun', 'Docker', 'GitHub Pages', 'pytest'] },
    ],
  },
  {
    id: 'exploring',
    index: 'C',
    title: 'Actively exploring',
    kicker: 'Following along and prototyping — not yet shipped, not yet claimed',
    rows: [
      { group: 'Android', items: ['Kotlin', 'Jetpack Compose', 'Android Media3'] },
      { group: 'ML tooling', items: ['PyTorch', 'Pandas', 'NumPy'] },
      { group: 'Cloud & misc', items: ['Google Cloud', 'AWS', 'Vercel', 'Solidity', 'Apache Groovy'] },
      { group: 'Creative', items: ['Adobe Premiere Pro'] },
    ],
  },
]

export const skillNote =
  'Notation: “Core stack” reflects the formal skill list; “Used in projects” appears in one of the five featured repositories; “Actively exploring” means reading and prototyping. No percentage bars — skill levels should be judged from the work itself.'
