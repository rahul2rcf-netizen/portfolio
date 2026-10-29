import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Journey } from './components/Journey'
import { GithubSection } from './components/GithubSection'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Section } from './components/Section'
import { site } from './data/site'

const MARQUEE_ITEMS = [
  'document intelligence',
  'retrieval workflows',
  'web development',
  'android',
  'applied ai',
  'privacy-first design',
  'shipped in public',
]

/** Exact contact details, live-linked — the real data fills the header
 * strip instead of a placeholder label (no dead space). */
function ContactKicker() {
  const linkedinName = site.linkedin.replace(/\/$/, '').split('/').pop() ?? 'LINKEDIN'
  const githubName = site.github.replace(/\/$/, '').split('/').pop() ?? 'GITHUB'
  const sep = (key: string) => (
    <span key={key} className="ck-sep" aria-hidden="true">
      ✦
    </span>
  )
  return (
    <span className="contact-kicker">
      <a className="ck" href={`mailto:${site.email}`}>
        {site.email}
      </a>
      {sep('s1')}
      <a className="ck" href={site.phoneHref}>
        {site.phone}
      </a>
      {sep('s2')}
      <a className="ck" href={site.linkedin} target="_blank" rel="noopener noreferrer">
        /{linkedinName}
      </a>
      {sep('s3')}
      <a className="ck" href={site.github} target="_blank" rel="noopener noreferrer">
        /{githubName}
      </a>
      {sep('s4')}
      <span className="ck-note">one click away</span>
    </span>
  )
}

function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[0, 1].map((copy) => (
          <span key={copy} className="marquee__item" aria-hidden={copy === 1}>
            {MARQUEE_ITEMS.map((t) => (
              <span key={`${copy}-${t}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 'inherit' }}>
                <span className="marquee__star">✦</span>
                {t}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <div className="checker" aria-hidden="true" />
        <Section id="about" index="01" title="about me" kicker="WHO IS BUILDING — AND HOW" accent="lime">
          <About />
        </Section>
        <Section id="projects" index="02" title="selected work" kicker="05 REPOS · 02 PUBLIC DEMOS · ALL LINKS VERIFIED" accent="violet">
          <Projects />
        </Section>
        <Section id="skills" index="03" title="skills, sorted" kicker="RESUME-VERIFIED CORE — SHIPPED TOOLS — HONEST EXPLORATION" accent="pink">
          <Skills />
        </Section>
        <Section id="journey" index="04" title="the journey" kicker="RESUME + GITHUB — DATED, SOURCED, NO FILLER" accent="lime">
          <Journey />
        </Section>
        <Section id="github" index="05" title="open source" kicker="GITHUB — RAHUL2RCF-NETIZEN" accent="violet">
          <GithubSection />
        </Section>
        <Section id="contact" index="06" title="say hi" kicker={<ContactKicker />} accent="pink">
          <Contact />
        </Section>
      </main>
      <Footer />
    </>
  )
}
