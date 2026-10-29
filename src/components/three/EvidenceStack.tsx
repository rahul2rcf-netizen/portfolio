import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const INK = '#131311'
const PAPER = '#fcfaf3'
const LIME = '#c9f63b'

/**
 * "Evidence Stack" — an abstract desk built from the site's art direction:
 * a stack of document slabs, a lime gate ring (citation loop), and small
 * faceted chunks orbiting like indexed references. Palette is limited to
 * the site's ink / paper / lime tokens.
 */

function useEdgeGeometry(geometry: THREE.BufferGeometry, threshold = 20) {
  return useMemo(() => new THREE.EdgesGeometry(geometry, threshold), [geometry])
}

function FacetEdges({ geometry, color = INK, scale = 1 }: { geometry: THREE.BufferGeometry; color?: string; scale?: number }) {
  const geom = useEdgeGeometry(geometry)
  return (
    <lineSegments geometry={geom} scale={[scale, scale, scale]}>
      <lineBasicMaterial color={color} toneMapped={false} transparent opacity={0.85} />
    </lineSegments>
  )
}

export default function EvidenceStack({ reducedMotion }: { reducedMotion: boolean }) {
  const root = useRef<THREE.Group>(null)
  const core = useRef<THREE.Group>(null)
  const gate = useRef<THREE.Mesh>(null)
  const gate2 = useRef<THREE.Mesh>(null)
  const chunkA = useRef<THREE.Mesh>(null)
  const chunkB = useRef<THREE.Mesh>(null)
  const chunkC = useRef<THREE.Mesh>(null)

  const geomBox = useMemo(() => new THREE.BoxGeometry(3.3, 0.34, 4.3), [])
  const geomPaper = useMemo(() => new THREE.BoxGeometry(3.3, 0.12, 4.3), [])
  const geomGate = useMemo(() => new THREE.TorusGeometry(1.16, 0.17, 12, 36), [])
  const geomGate2 = useMemo(() => new THREE.TorusGeometry(0.62, 0.1, 10, 28), [])
  const geomIco = useMemo(() => new THREE.IcosahedronGeometry(0.42, 0), [])
  const geomOcta = useMemo(() => new THREE.OctahedronGeometry(0.3, 0), [])
  const geomCube = useMemo(() => new THREE.BoxGeometry(0.36, 0.36, 0.36), [])

  const pointer = useRef({ x: 0, y: 0 })
  const spin = useRef(0)

  // Pointer parallax: window-level so the sculpture answers to the whole hero.
  const listening = useRef(false)
  if (!reducedMotion && !listening.current && typeof window !== 'undefined') {
    listening.current = true
    window.addEventListener(
      'pointermove',
      (e) => {
        pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1
        pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1
      },
      { passive: true },
    )
  }

  useFrame((_state, delta) => {
    const dt = Math.min(delta, 0.05)
    spin.current += dt
    const t = spin.current

    if (core.current) {
      core.current.rotation.y = t * 0.16
      core.current.rotation.x = THREE.MathUtils.lerp(
        core.current.rotation.x,
        pointer.current.y * 0.07 + 0.04,
        0.05,
      )
    }
    if (root.current) {
      root.current.rotation.y = THREE.MathUtils.lerp(root.current.rotation.y, pointer.current.x * 0.14, 0.05)
      root.current.rotation.x = THREE.MathUtils.lerp(root.current.rotation.x, pointer.current.y * 0.1, 0.05)
      root.current.position.y = Math.sin(t * 0.7) * 0.07
    }
    if (gate.current) gate.current.rotation.z = t * 0.22
    if (gate2.current) gate2.current.rotation.z = -t * 0.4
    if (chunkA.current) {
      const a = t * 0.55
      chunkA.current.position.set(Math.cos(a) * 2.05, 0.9 + Math.sin(a * 1.3) * 0.35, Math.sin(a) * 2.05)
      chunkA.current.rotation.set(t * 0.4, t * 0.3, 0)
    }
    if (chunkB.current) {
      const a = -t * 0.42 + 2.2
      chunkB.current.position.set(Math.cos(a) * 1.75, -0.35 + Math.sin(a * 1.7) * 0.4, Math.sin(a) * 1.75)
      chunkB.current.rotation.set(-t * 0.35, t * 0.5, 0)
    }
    if (chunkC.current) {
      const a = t * 0.3 + 4.1
      chunkC.current.position.set(Math.cos(a) * 2.45, 0.3 + Math.sin(a * 1.1) * 0.5, Math.sin(a) * 2.45)
      chunkC.current.rotation.set(t * 0.2, -t * 0.25, t * 0.1)
    }
  })

  return (
    <>
      <hemisphereLight args={['#f8f6ee', '#1a1915', 1.05]} />
      <directionalLight position={[3.5, 4.5, 2.5]} intensity={2.4} />
      <directionalLight position={[-4, 2.5, -3]} intensity={0.7} color="#e8ffd0" />
      <ambientLight intensity={0.35} />

      <group ref={root} position={[0, 0.1, 0]}>
        <group ref={core} rotation={[0.04, 0, 0]}>
          {/* document stack */}
          <group position={[0, -1.05, 0]}>
            <mesh geometry={geomBox} castShadow={false}>
              <meshStandardMaterial color={INK} flatShading roughness={0.5} metalness={0.08} />
            </mesh>
            <FacetEdges geometry={geomBox} />

            <mesh geometry={geomPaper} position={[0, -0.24, 0]}>
              <meshStandardMaterial color={PAPER} flatShading roughness={0.6} metalness={0.04} />
            </mesh>
            <FacetEdges geometry={geomPaper} />

            <mesh geometry={geomPaper} position={[0, -0.48, 0]} scale={0.94}>
              <meshStandardMaterial color={LIME} flatShading roughness={0.55} metalness={0.04} emissive="#3f6600" emissiveIntensity={0.16} />
            </mesh>
            <FacetEdges geometry={geomPaper} />

            <mesh geometry={geomPaper} position={[0, -0.68, 0]} scale={0.88}>
              <meshStandardMaterial color={PAPER} flatShading roughness={0.6} />
            </mesh>
            <FacetEdges geometry={geomPaper} />
          </group>

          {/* gate rings */}
          <mesh ref={gate} geometry={geomGate} position={[0, 0.32, 0]} rotation={[0, 0, 0]}>
            <meshStandardMaterial color={LIME} flatShading roughness={0.42} metalness={0.1} emissive="#4d7a00" emissiveIntensity={0.22} />
          </mesh>
          <mesh ref={gate2} geometry={geomGate2} position={[0, 0.32, 0]} rotation={[0, 0, 0]}>
            <meshStandardMaterial color={PAPER} flatShading roughness={0.5} />
          </mesh>
        </group>

        {/* orbiting references */}
        <mesh ref={chunkA} geometry={geomIco}>
          <meshStandardMaterial color={LIME} flatShading roughness={0.45} emissive="#4d7a00" emissiveIntensity={0.18} />
        </mesh>
        <mesh ref={chunkB} geometry={geomOcta}>
          <meshStandardMaterial color={PAPER} flatShading roughness={0.55} />
        </mesh>
        <mesh ref={chunkC} geometry={geomCube}>
          <meshStandardMaterial color={INK} flatShading roughness={0.5} />
        </mesh>
      </group>
    </>
  )
}
