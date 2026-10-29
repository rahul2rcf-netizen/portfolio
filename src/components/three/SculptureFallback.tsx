/**
 * Static SVG sculpture — used while the 3D chunk loads, when WebGL is
 * unavailable, or under prefers-reduced-motion. Mirrors the Real scene's
 * composition: document stack, lime gate ring, orbit chunks.
 */
export default function SculptureFallback({ quiet = false }: { quiet?: boolean }) {
  return (
    <div className="sculpt-fallback" style={quiet ? { opacity: 0.55 } : undefined} aria-hidden="true">
      <svg viewBox="0 0 560 420" role="img" aria-label="">
        <g transform="translate(280 218)">
          {/* orbiting chunks */}
          <g opacity="0.9">
            <polygon points="118,64 138,80 130,104 104,100" fill="#c9f63b" stroke="#131311" strokeWidth="2.5" />
            <polygon points="-128,-46 -108,-60 -104,-38 -120,-24" fill="#fcfaf3" stroke="#131311" strokeWidth="2.5" />
            <rect x="86" y="-120" width="26" height="26" fill="#131311" transform="rotate(18 99 -107)" />
          </g>

          {/* gate rings */}
          <ellipse rx="118" ry="118" cx="0" cy="-28" fill="none" stroke="#c9f63b" strokeWidth="13" />
          <ellipse rx="118" ry="118" cx="0" cy="-28" fill="none" stroke="#131311" strokeWidth="2.5" transform="translate(0 0)" opacity="0" />
          <ellipse rx="64" ry="64" cx="0" cy="-28" fill="none" stroke="#fcfaf3" strokeWidth="9" />
          <ellipse rx="64" ry="64" cx="0" cy="-28" fill="none" stroke="#131311" strokeWidth="2" />

          {/* document stack (layered slabs) */}
          <g>
            <rect x="-128" y="96" width="256" height="12" fill="#fcfaf3" stroke="#131311" strokeWidth="2.5" />
            <rect x="-120" y="72" width="240" height="14" fill="#c9f63b" stroke="#131311" strokeWidth="2.5" />
            <rect x="-132" y="46" width="264" height="18" fill="#fcfaf3" stroke="#131311" strokeWidth="2.5" />
            <rect x="-140" y="6" width="280" height="34" fill="#131311" stroke="#131311" strokeWidth="2.5" />
            {/* text lines on the dark slab */}
            <rect x="-112" y="16" width="150" height="5" fill="#fcfaf3" opacity="0.85" />
            <rect x="-112" y="28" width="96" height="5" fill="#fcfaf3" opacity="0.5" />
            <rect x="46" y="16" width="60" height="17" fill="#c9f63b" />
          </g>
        </g>
      </svg>
    </div>
  )
}
