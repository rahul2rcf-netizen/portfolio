import { useEffect, useState } from 'react'

const NAV_IDS = ['about', 'projects', 'skills', 'journey', 'github', 'contact'] as const
export type SectionId = (typeof NAV_IDS)[number]

/**
 * Tracks which page section is currently in view so the nav can show an
 * active state. Uses IntersectionObserver only — no scroll listeners.
 */
export function useActiveSection(): SectionId {
  const [active, setActive] = useState<SectionId>('about')

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const sections = NAV_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    )
    if (sections.length === 0) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId)
        }
      },
      // A narrow band just below the fixed nav decides the active section.
      { rootMargin: '-25% 0px -65% 0px', threshold: 0 },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return active
}
