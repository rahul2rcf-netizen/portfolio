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

const MARQUEE_ITEMS = [
  'Document intelligence',
  'Retrieval workflows',
  'Web development',
  'Android',
  'Applied AI',
  'Privacy-aware design',
  'Learning in public',
]

function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[0, 1].map((copy) => (
          <span key={copy} className="marquee__item" aria-hidden={copy === 1}>
            {MARQUEE_ITEMS.map((t) => (
              <span key={`${copy}-${t}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 'inherit' }}>
                <span className="marquee__diamond" />
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
        <Section id="about" index="01" title="About" kicker="WHO BUILDS THIS — AND HOW">
          <About />
        </Section>
        <Section id="projects" index="02" title="Selected Work" kicker="05 REPOS · 02 PUBLIC DEMOS · ALL LINKS VERIFIED">
          <Projects />
        </Section>
        <Section id="skills" index="03" title="Skills" kicker="CORE STACK — SHIPPED TOOLS — HONEST EXPLORATION">
          <Skills />
        </Section>
        <Section id="journey" index="04" title="Journey" kicker="A TIMELINE OF REPO-VERIFIED MILESTONES">
          <Journey />
        </Section>
        <Section id="github" index="05" title="Open Source" kicker="GITHUB — RAHUL2RCF-NETIZEN">
          <GithubSection />
        </Section>
        <Section id="contact" index="06" title="Contact" kicker="EMAIL · LINKEDIN · GITHUB — ONE CLICK AWAY">
          <Contact />
        </Section>
      </main>
      <Footer />
    </>
  )
}
