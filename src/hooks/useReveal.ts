import { useEffect, useRef, useState } from 'react'

/**
 * Adds `.is-in` to ref elements (or the element itself) when they enter
 * the viewport. Listens once per element, cleans up after reveal.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (inView) return
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            io.disconnect()
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    io.observe(node)
    // Safety net: if observers are throttled or unsupported in this context,
    // content already at or above the fold must never stay hidden.
    const t = window.setTimeout(() => {
      const rect = node.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.92 && (rect.bottom > 0 || document.body.scrollHeight <= window.innerHeight * 4)) {
        setInView(true)
        io.disconnect()
      }
    }, 1400)
    return () => {
      window.clearTimeout(t)
      io.disconnect()
    }
  }, [inView])

  return { ref, inView }
}
