import type { RefObject } from 'react'

/**
 * Pointer-follow tilt for premium cards. Applied as CSS custom properties
 * so the CSS owns the transform. Skipped for touch input, reduced motion,
 * and coarse pointers.
 */
export function useTilt(ref: RefObject<HTMLElement | null>, maxDeg = 5): void {
  if (typeof window === 'undefined') return

  const el = ref.current
  if (!el || el.dataset.tiltBound) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return

  el.dataset.tiltBound = '1'
  let frame = 0
  let rx = 0
  let ry = 0

  const apply = () => {
    frame = 0
    el.style.setProperty('--rx', `${rx.toFixed(2)}deg`)
    el.style.setProperty('--ry', `${ry.toFixed(2)}deg`)
  }

  const onMove = (e: PointerEvent) => {
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    ry = px * maxDeg * 2
    rx = -py * maxDeg * 2
    if (!frame) frame = requestAnimationFrame(apply)
  }

  const onLeave = () => {
    rx = 0
    ry = 0
    if (!frame) frame = requestAnimationFrame(apply)
  }

  el.addEventListener('pointermove', onMove)
  el.addEventListener('pointerleave', onLeave)
}
