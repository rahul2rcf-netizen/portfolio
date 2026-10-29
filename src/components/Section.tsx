import { useEffect } from 'react'
import { useReveal } from '../hooks/useReveal'

export function Section({
  id,
  index,
  title,
  kicker,
  accent = 'lime',
  children,
  className = '',
}: {
  id: string
  index: string
  title: string
  /** Plain strings for most sections; richer ReactNodes (e.g. live contact
   * links) render as the same mono label line. */
  kicker: React.ReactNode
  accent?: 'lime' | 'violet' | 'pink'
  children: React.ReactNode
  className?: string
}) {
  const { ref, inView } = useReveal<HTMLElement>()

  useEffect(() => {
    if (!inView || !ref.current) return
    const node = ref.current
    node.classList.add('is-in')
    node.querySelectorAll('.reveal-child').forEach((n, i) => {
      ;(n as HTMLElement).style.setProperty('--d', `${i * 70}ms`)
      ;(n as HTMLElement).classList.add('is-in')
    })
  }, [inView, ref])

  const stickerCls =
    accent === 'violet' ? 'sec-sticker sec-sticker--violet' : accent === 'pink' ? 'sec-sticker sec-sticker--pink' : 'sec-sticker'

  return (
    <section id={id} ref={ref} className={`section ${inView ? 'is-in' : ''} ${className}`} aria-labelledby={`${id}-heading`}>
      <div className="container-x">
        <header className="sec-head">
          <div className="reveal-child">
            <span className={stickerCls} aria-hidden="true">
              {index}
            </span>
            <h2 id={`${id}-heading`} className="display h-section sec-title">
              {title}
            </h2>
          </div>
          <p className="label-lg sec-kicker reveal-child">{kicker}</p>
        </header>
        {children}
      </div>
    </section>
  )
}
