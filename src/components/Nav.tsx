import { useEffect, useState } from 'react'
import { useActiveSection, type SectionId } from '../hooks/useActiveSection'

const LINKS: { id: SectionId; n: string; label: string }[] = [
  { id: 'about', n: '01', label: 'About' },
  { id: 'projects', n: '02', label: 'Projects' },
  { id: 'skills', n: '03', label: 'Skills' },
  { id: 'journey', n: '04', label: 'Journey' },
  { id: 'github', n: '05', label: 'GitHub' },
  { id: 'contact', n: '06', label: 'Contact' },
]

export function Nav() {
  const active = useActiveSection()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock background scroll + close on Escape while the overlay is open.
  useEffect(() => {
    if (!open) return
    document.documentElement.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.documentElement.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <nav className={`nav ${scrolled ? 'is-scrolled' : ''}`} aria-label="Primary">
        <div className="container-x nav__inner">
          <a href="#top" className="nav__brand">
            <span className="nav__brand-mark" aria-hidden="true">
              R
            </span>
            <span className="label">M.RAHUL — PORTFOLIO</span>
          </a>
          <div className="nav__links">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="nav__link"
                aria-current={active === l.id ? 'true' : undefined}
              >
                <sup>{l.n}</sup>
                {l.label}
              </a>
            ))}
          </div>
          <a href="#contact" className="chip chip--ink hidden md:inline-flex">
            SAY HELLO
          </a>
          <button
            type="button"
            className="nav__burger md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav__burger-box" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="menu-overlay md:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="container-x">
            <p className="label text-faint" style={{ marginBottom: 18 }}>
              MENU — M.RAHUL
            </p>
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="menu-overlay__link display"
                aria-current={active === l.id ? 'true' : undefined}
                onClick={() => setOpen(false)}
              >
                <span className="menu-overlay__index label-lg">{l.n}</span>
                <span className="menu-overlay__big">{l.label}</span>
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn--lime"
              style={{ marginTop: 28 }}
              onClick={() => setOpen(false)}
            >
              SAY HELLO <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      )}
    </>
  )
}
