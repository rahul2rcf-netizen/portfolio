export interface SkillGroup {
  id: string
  index: string
  title: string
  kicker: string
  rows: { group: string; items: string[] }[]
}

/**
 * Group A is the resume's official "Technical Skills" list (ATS resume,
 * October 2026) — reproduced faithfully. Group B is backed by shipped
 * repositories. Group C is documented exploration only — never rated.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: 'core',
    index: 'A',
    title: 'the core stack',
    kicker: 'Straight from the resume — no inflation',
    rows: [
      { group: 'Programming', items: ['Python', 'Java', 'JavaScript (ES6)', 'TypeScript', 'SQL'] },
      { group: 'AI / Doc intelligence', items: ['NLP fundamentals', 'Document Q&A', 'Hybrid retrieval', 'BM25', 'Embeddings & vector search', 'Evidence-grounded answers', 'Evaluation metrics'] },
      { group: 'Backend / APIs', items: ['FastAPI', 'REST APIs', 'Spring Boot', 'JDBC', 'JSP / Servlets'] },
      { group: 'Frontend', items: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive UI'] },
      { group: 'Data', items: ['SQLite', 'MySQL'] },
      { group: 'Tools', items: ['Git', 'GitHub', 'Vite', 'Streamlit', 'PyMuPDF'] },
      { group: 'Core CS', items: ['OOP', 'DBMS', 'Computer Networks'] },
    ],
  },
  {
    id: 'shipped',
    index: 'B',
    title: 'shipped in the wild',
    kicker: 'Every one of these lives inside a linked repo',
    rows: [
      { group: 'Retrieval stack', items: ['FAISS', 'Sentence Transformers', 'TF-IDF matching', 'Groq API', 'Google GenAI SDK'] },
      { group: 'App plumbing', items: ['Firebase', 'Express', 'Bun', 'Docker', 'GitHub Pages', 'pytest'] },
    ],
  },
  {
    id: 'exploring',
    index: 'C',
    title: 'actively exploring',
    kicker: 'Reading and prototyping — not yet claimed',
    rows: [
      { group: 'Android', items: ['Kotlin', 'Jetpack Compose', 'Android Media3'] },
      { group: 'ML tooling', items: ['PyTorch', 'Pandas', 'NumPy'] },
      { group: 'Cloud & misc', items: ['Google Cloud', 'AWS', 'Vercel', 'Solidity', 'Apache Groovy'] },
    ],
  },
]

export const skillNote =
  'Group A is exactly what the resume states. Group B appears in the feature set of a live repository. Group C is honest "learning in progress" — no fake percentage bars, no invented ratings. Judge the levels from the projects.'
