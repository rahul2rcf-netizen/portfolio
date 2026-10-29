import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

/**
 * Container that reveals when scrolled into view, staggering children
 * that carry the `.reveal-child` class and an optional --d delay.
 */
export function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
  stagger = 0,
  childSelector,
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'article' | 'li' | 'figure'
  stagger?: number
  childSelector?: string
}) {
  const { ref, inView } = useReveal<HTMLDivElement>()

  useEffect(() => {
    if (!inView || !ref.current) return
    const nodes = childSelector
      ? ref.current.querySelectorAll(childSelector)
      : ref.current.querySelectorAll('.reveal-child')
    nodes.forEach((n, i) => {
      ;(n as HTMLElement).style.setProperty('--d', `${delay + i * stagger}ms`)
      ;(n as HTMLElement).classList.add('is-in')
    })
  }, [childSelector, delay, inView, ref])

  return (
    <Tag ref={ref as never} className={`reveal ${inView ? 'is-in' : ''} ${className}`} style={{ '--d': `${delay}ms` } as never}>
      {children}
    </Tag>
  )
}

/** Headless copy-to-clipboard with production fallbacks. */
export function useCopy(text: string, resetAfter = 2200) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number>(0)

  const copy = useCallback(async () => {
    let ok = false
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text)
        ok = true
      }
    } catch {
      /* fall through */
    }
    if (!ok) {
      try {
        const ta = document.createElement('textarea')
        ta.value = text
        ta.setAttribute('readonly', '')
        ta.style.position = 'fixed'
        ta.style.left = '-999px'
        document.body.appendChild(ta)
        ta.select()
        ok = document.execCommand('copy')
        ta.remove()
      } catch {
        ok = false
      }
    }
    setCopied(ok)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopied(false), resetAfter)
    return ok
  }, [resetAfter, text])

  useEffect(() => () => window.clearTimeout(timer.current), [])

  return { copied, copy }
}
