import { Component, Suspense, lazy, useEffect, useRef, useState, type ReactNode } from 'react'
import { Canvas } from '@react-three/fiber'
import { useReducedMotion, useHasWebGL } from '../../hooks/useReducedMotion'
import SculptureFallback from './SculptureFallback'

const EvidenceStack = lazy(() => import('./EvidenceStack'))

class Boundary extends Component<{ children: ReactNode; fallback: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children
  }
}

function Scene({ visible }: { visible: boolean }) {
  const reduced = useReducedMotion()
  return (
    <Canvas
      frameloop={reduced ? 'demand' : visible ? 'always' : 'demand'}
      dpr={[1, 1.75]}
      camera={{ position: [0.4, 0.7, 7.1], fov: 34 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance', failIfMajorPerformanceCaveat: true }}
      style={{ width: '100%', height: '100%' }}
      aria-hidden="true"
    >
      <EvidenceStack reducedMotion={reduced} />
    </Canvas>
  )
}

/**
 * Hero 3D wrapper. Render policy:
 *  - prefers-reduced-motion of WebGL failure → static SVG poster only
 *  - three.js is code-split and loads after first paint
 *  - scene FPS loop pauses when the hero is offscreen
 */
export default function Hero3D() {
  const hasWebGL = useHasWebGL()
  const wrap = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const node = wrap.current
    if (!node || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => setVisible(e.isIntersecting)),
      { threshold: 0.02 },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={wrap} className="hero__canvas" aria-hidden="true">
      {hasWebGL ? (
        <Boundary fallback={<SculptureFallback />}>
          <Suspense fallback={<SculptureFallback quiet />}>
            <Scene visible={visible} />
          </Suspense>
        </Boundary>
      ) : (
        <SculptureFallback />
      )}
    </div>
  )
}
