/**
 * Data-driven SVG "plates" — art-direction previews for each project.
 * These are editorial compositions of each project's actual interface
 * motifs, not fake screenshots; every shape is drawn from the verified
 * feature lists (docs + citations, evidence links, browser + roadmaps,
 * dashboard widgets, app shell).
 */

const INK = '#131311'
const PAPER = '#fcfaf3'
const LIME = '#c9f63b'
const SOFT = 'rgba(19,19,17,0.28)'
const MONO = "'Azeret Mono', ui-monospace, monospace"

function Plate({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <svg viewBox="0 0 640 440" role="img" aria-label={label} style={{ maxWidth: 620, marginInline: 'auto' }}>
      {children}
    </svg>
  )
}

function Chip({ x, y, w, text, invert = false }: { x: number; y: number; w: number; text: string; invert?: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={w} height="22" fill={invert ? LIME : PAPER} stroke={INK} strokeWidth="2" />
      <text x="10" y="15" fontFamily={MONO} fontSize="10.5" fill={INK}>
        {text}
      </text>
      <circle cx={w - 12} cy="11" r="4" fill={invert ? INK : 'none'} stroke={INK} strokeWidth="2" />
    </g>
  )
}

function EvidenceDeskPlate() {
  return (
    <Plate label="Illustration of EvidenceDesk: indexed documents with a cited answer panel and page references.">
      {/* stacked documents */}
      <g>
        <rect x="60" y="120" width="180" height="230" fill={PAPER} stroke={INK} strokeWidth="3" transform="rotate(-3 150 235)" />
        <rect x="72" y="110" width="180" height="230" fill={PAPER} stroke={INK} strokeWidth="3" transform="rotate(2 162 225)" />
        <rect x="84" y="100" width="180" height="230" fill={PAPER} stroke={INK} strokeWidth="3" />
        <text x="104" y="132" fontFamily={MONO} fontSize="11" fill={SOFT}>
          DOC_04.PDF
        </text>
        {[0, 1, 2, 3].map((i) => (
          <g key={i} transform={`translate(104 ${158 + i * 34})`}>
            <rect width="130" height="6" fill={INK} opacity={i === 1 ? 1 : 0.35} />
            <rect y="12" width="150" height="6" fill={INK} opacity="0.25" />
            {i === 1 && <rect y="12" x="0" width="110" height="6" fill={LIME} stroke={INK} strokeWidth="2" />}
          </g>
        ))}
      </g>
      {/* question bar */}
      <g>
        <rect x="60" y="368" width="330" height="44" fill={INK} />
        <text x="80" y="395" fontFamily={MONO} fontSize="12" fill={PAPER}>
          Q: WHERE IS THE POLICY?
        </text>
        <rect x="396" y="372" width="60" height="36" fill={LIME} stroke={INK} strokeWidth="3" />
      </g>
      {/* answer panel with citation pins */}
      <g>
        <rect x="330" y="70" width="250" height="200" fill={PAPER} stroke={INK} strokeWidth="3" />
        <rect x="330" y="70" width="250" height="40" fill={INK} />
        <text x="348" y="95" fontFamily={MONO} fontSize="11" fill={LIME}>
          A · GROUNDED
        </text>
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x="348" y={128 + i * 34} width={190 - i * 26} height="7" fill={INK} opacity="0.3" />
            <rect x="348" y={140 + i * 34} width={150 + i * 18} height="7" fill={i === 0 ? LIME : SOFT} />
          </g>
        ))}
        <g stroke={INK} strokeWidth="2.5">
          <line x1="470" y1="150" x2="556" y2="150" strokeDasharray="5 5" />
          <line x1="452" y1="184" x2="552" y2="196" strokeDasharray="5 5" />
          <line x1="480" y1="218" x2="536" y2="236" strokeDasharray="5 5" />
        </g>
        <g transform="translate(560 138)">
          <rect width="52" height="24" fill={LIME} stroke={INK} strokeWidth="2.5" />
          <text x="26" y="16" fontFamily={MONO} fontSize="10.5" fill={INK} textAnchor="middle">
            P.14 §
          </text>
        </g>
        <g transform="translate(556 182)">
          <rect width="52" height="24" fill={PAPER} stroke={INK} strokeWidth="2.5" />
          <text x="26" y="16" fontFamily={MONO} fontSize="10.5" fill={INK} textAnchor="middle">
            P.14 §
          </text>
        </g>
        <g transform="translate(540 222)">
          <rect width="72" height="24" fill={PAPER} stroke={INK} strokeWidth="2.5" />
          <text x="36" y="16" fontFamily={MONO} fontSize="10.5" fill={INK} textAnchor="middle">
            P.09 —
          </text>
        </g>
        <g transform="translate(348 300)">
          <rect width="210" height="26" fill={INK} />
          <text x="10" y="18" fontFamily={MONO} fontSize="10.5" fill={PAPER}>
            LOW EVIDENCE → ABSTAIN
          </text>
        </g>
      </g>
    </Plate>
  )
}

function CareerLensPlate() {
  return (
    <Plate label="Illustration of CareerLens AI: a job description linked to resume evidence snippets with a transparent match overview.">
      {/* job description card */}
      <g>
        <rect x="52" y="64" width="200" height="284" fill={PAPER} stroke={INK} strokeWidth="3" />
        <rect x="52" y="64" width="200" height="38" fill={INK} />
        <text x="68" y="88" fontFamily={MONO} fontSize="11" fill={LIME}>
          JD · REQUIRED
        </text>
        {['PYTHON', 'SQL', 'POSTGRES', 'AWS', 'DOCKER'].map((t, i) => (
          <Chip key={t} x={72} y={126 + i * 34} w={140} text={t} invert={i < 2} />
        ))}
      </g>
      {/* evidence links */}
      <g>
        {[0, 1, 2].map((i) => (
          <line key={i} x1="252" y1={136 + i * 8} x2="368" y2={124 + i * 44} stroke={INK} strokeWidth="2" strokeDasharray="5 5" />
        ))}
        <line x1="252" y1="170" x2="368" y2="256" stroke={INK} strokeWidth="2" strokeDasharray="5 5" />
      </g>
      {/* resume with evidence highlight */}
      <g>
        <rect x="368" y="64" width="220" height="180" fill={PAPER} stroke={INK} strokeWidth="3" />
        <text x="386" y="90" fontFamily={MONO} fontSize="10.5" fill={SOFT}>
          RESUME.PDF
        </text>
        <rect x="386" y="104" width="168" height="10" fill={LIME} stroke={INK} strokeWidth="2" />
        <text x="386" y="136" fontFamily={MONO} fontSize="10" fill={SOFT}>
          {'… built pipeline in python …'}
        </text>
        {[0, 1, 2].map((i) => (
          <rect key={i} x="386" y={154 + i * 24} width={i === 1 ? 100 : 168} height="8" fill={SOFT} />
        ))}
      </g>
      {/* gap brief card */}
      <g>
        <rect x="368" y="268" width="220" height="80" fill={INK} />
        <text x="386" y="292" fontFamily={MONO} fontSize="10.5" fill={LIME}>
          GAPS · NEXT STEP
        </text>
        <rect x="386" y="306" width="96" height="22" fill="none" stroke={LIME} strokeWidth="2" />
        <text x="394" y="321" fontFamily={MONO} fontSize="10" fill={PAPER}>
          AWS · DOCKER
        </text>
      </g>
      {/* transparency banner */}
      <g>
        <rect x="52" y="380" width="260" height="36" fill={LIME} stroke={INK} strokeWidth="3" />
        <text x="68" y="404" fontFamily={MONO} fontSize="11" fill={INK}>
          ESTIMATE · NOT A PREDICTION
        </text>
      </g>
    </Plate>
  )
}

function ResourceNestPlate() {
  return (
    <Plate label="Illustration of ResourceNest: a browser window with a search field, filter chips, and a roadmap progress line.">
      {/* browser window */}
      <g>
        <rect x="80" y="56" width="480" height="330" fill={PAPER} stroke={INK} strokeWidth="3" />
        <rect x="80" y="56" width="480" height="42" fill={INK} />
        <circle cx="104" cy="77" r="6" fill={LIME} />
        <circle cx="124" cy="77" r="6" fill={PAPER} />
        <circle cx="144" cy="77" r="6" fill={PAPER} opacity="0.4" />
        <rect x="170" y="66" width="270" height="22" fill={PAPER} opacity="0.14" />
        <text x="182" y="82" fontFamily={MONO} fontSize="10.5" fill={PAPER}>
          github.io/resourcenest
        </text>
      </g>
      {/* search */}
      <g>
        <rect x="104" y="120" width="300" height="34" fill={PAPER} stroke={INK} strokeWidth="2.5" />
        <text x="118" y="142" fontFamily={MONO} fontSize="11" fill={SOFT}>
          SEARCH RESOURCES
        </text>
        <rect x="120" y="132" width="2" height="14" fill={INK} />
        <rect x="416" y="120" width="70" height="34" fill={LIME} stroke={INK} strokeWidth="2.5" />
      </g>
      {/* topic chips */}
      <g>
        {['WEB', 'AI', 'INTERVIEWS', 'ROADMAPS'].map((t, i) => (
          <g key={t} transform={`translate(${104 + (i % 3) * 122} ${174 + Math.floor(i / 3) * 40})`}>
            <rect width="108" height="28" fill={i === 0 ? LIME : PAPER} stroke={INK} strokeWidth="2.5" />
            <text x="12" y="19" fontFamily={MONO} fontSize="10.5" fill={INK}>
              {t}
            </text>
          </g>
        ))}
      </g>
      {/* roadmap progress */}
      <g>
        <line x1="128" y1="292" x2="512" y2="292" stroke={INK} strokeWidth="2.5" />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={150 + i * 88 - 9} y="283" width="18" height="18" fill={i < 3 ? LIME : PAPER} stroke={INK} strokeWidth="2.5" transform={`rotate(45 ${150 + i * 88} 292)`} />
        ))}
        <rect x="128" y="318" width="384" height="10" fill={SOFT} />
        <rect x="128" y="318" width="232" height="10" fill={LIME} stroke={INK} strokeWidth="2" />
        <text x="128" y="348" fontFamily={MONO} fontSize="10" fill={SOFT}>
          PROGRESS SAVED IN THIS BROWSER
        </text>
      </g>
    </Plate>
  )
}

function RayaPlate() {
  return (
    <Plate label="Illustration of RAYA Life OS: a dashboard with a journal card, a goals tile with a streak ring, and reminders.">
      {/* sidebar rail */}
      <g>
        <rect x="70" y="56" width="64" height="330" fill={INK} />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x="86" y={90 + i * 44} width="32" height="24" fill={i === 0 ? LIME : PAPER} opacity={i === 0 ? 1 : 0.3} />
        ))}
      </g>
      {/* journal card */}
      <g>
        <rect x="158" y="80" width="250" height="180" fill={PAPER} stroke={INK} strokeWidth="3" />
        <text x="176" y="106" fontFamily={MONO} fontSize="11" fill={SOFT}>
          JOURNAL · TODAY
        </text>
        {[0, 1, 2, 3].map((i) => (
          <line key={i} x1="176" x2="388" y1={134 + i * 26} y2={134 + i * 26} stroke={INK} strokeWidth="2.5" opacity="0.3" />
        ))}
        <circle cx="176" cy="134" r="5" fill={LIME} stroke={INK} strokeWidth="2" />
        <line x1="176" y1="238" x2="300" y2="238" stroke={INK} strokeWidth="4" />
      </g>
      {/* goals + streak ring */}
      <g>
        <rect x="432" y="80" width="140" height="180" fill={PAPER} stroke={INK} strokeWidth="3" />
        <circle cx="502" cy="136" r="30" fill="none" stroke={SOFT} strokeWidth="8" />
        <circle cx="502" cy="136" r="30" fill="none" stroke={LIME} strokeWidth="8" strokeDasharray="140 200" transform="rotate(-90 502 136)" />
        <text x="502" y="141" fontFamily={MONO} fontSize="10.5" fill={INK} textAnchor="middle">
          STREAK
        </text>
        <rect x="452" y="186" width="120" height="10" fill={LIME} />
        <rect x="452" y="208" width="84" height="10" fill={SOFT} />
        <rect x="452" y="230" width="100" height="10" fill={SOFT} />
      </g>
      {/* reminders + themes */}
      <g>
        <rect x="158" y="286" width="212" height="100" fill={INK} />
        <polygon points="200,330 208,318 216,330 208,342" fill={LIME} />
        <text x="248" y="327" fontFamily={MONO} fontSize="11" fill={PAPER}>
          MINDFUL BREAK
        </text>
        <text x="248" y="344" fontFamily={MONO} fontSize="10" fill={LIME}>
          21:30 · SOUNDSCAPE
        </text>
      </g>
      <g>
        <rect x="392" y="286" width="180" height="100" fill={PAPER} stroke={INK} strokeWidth="3" />
        <text x="410" y="310" fontFamily={MONO} fontSize="10.5" fill={SOFT}>
          THEMES
        </text>
        <rect x="410" y="322" width="26" height="26" fill={PAPER} stroke={INK} strokeWidth="2.5" />
        <rect x="444" y="322" width="26" height="26" fill={INK} />
        <rect x="478" y="322" width="26" height="26" fill={LIME} />
      </g>
    </Plate>
  )
}

function PersonalAiOsPlate() {
  return (
    <Plate label="Illustration of Personal AI OS: an app shell with a widget board, an AI assistant chip, and a task checklist.">
      {/* shell */}
      <g>
        <rect x="70" y="56" width="500" height="330" rx="10" fill={PAPER} stroke={INK} strokeWidth="3" />
        <rect x="70" y="56" width="500" height="38" fill={INK} />
        <text x="92" y="80" fontFamily={MONO} fontSize="11" fill={PAPER}>
          PERSONAL AI OS
        </text>
      </g>
      {/* clock widget */}
      <g>
        <rect x="92" y="116" width="140" height="140" fill={PAPER} stroke={INK} strokeWidth="2.5" />
        <circle cx="162" cy="178" r="40" fill="none" stroke={INK} strokeWidth="3" />
        <line x1="162" y1="178" x2="162" y2="152" stroke={INK} strokeWidth="3" />
        <line x1="162" y1="178" x2="182" y2="186" stroke={LIME} strokeWidth="4" />
      </g>
      {/* notes widget */}
      <g>
        <rect x="256" y="116" width="150" height="140" fill={PAPER} stroke={INK} strokeWidth="2.5" />
        {[0, 1, 2].map((i) => (
          <rect key={i} x="272" y={140 + i * 26} width={120 - i * 24} height="9" fill={i === 0 ? LIME : SOFT} />
        ))}
        <rect x="272" y="218" width="88" height="20" fill={INK} />
        <text x="279" y="232" fontFamily={MONO} fontSize="9.5" fill={PAPER}>
          SEARCH
        </text>
      </g>
      {/* AI assistant */}
      <g>
        <rect x="430" y="116" width="118" height="140" fill={INK} />
        <polygon points="489,146 492,155 501,158 492,161 489,170 486,161 477,158 486,155" fill={LIME} />
        <rect x="446" y="200" width="86" height="28" fill="none" stroke={LIME} strokeWidth="2" />
        <text x="489" y="219" fontFamily={MONO} fontSize="11" fill={PAPER} textAnchor="middle">
          ASK AI
        </text>
      </g>
      {/* tasks + nav rail */}
      <g>
        <rect x="92" y="280" width="300" height="80" fill={PAPER} stroke={INK} strokeWidth="2.5" />
        {['TASK A', 'TASK B'].map((t, i) => (
          <g key={t} transform={`translate(110 ${302 + i * 30})`}>
            <rect width="18" height="18" fill={i === 0 ? LIME : 'none'} stroke={INK} strokeWidth="2.5" />
            {i === 0 && <path d="M4 9 L8 13 L15 4" stroke={INK} strokeWidth="2.5" fill="none" />}
            <text x="30" y="14" fontFamily={MONO} fontSize="10.5" fill={INK}>
              {t}
            </text>
          </g>
        ))}
        <rect x="420" y="280" width="128" height="80" fill={PAPER} stroke={INK} strokeWidth="2.5" />
        {[0, 1, 2].map((i) => (
          <circle key={i} cx={448 + i * 34} cy="320" r="8" fill={i === 1 ? INK : 'none'} stroke={INK} strokeWidth="2.5" />
        ))}
      </g>
    </Plate>
  )
}

export function ProjectPlate({ id }: { id: string }) {
  switch (id) {
    case 'evidencedesk':
      return <EvidenceDeskPlate />
    case 'careerlens':
      return <CareerLensPlate />
    case 'resourcenest':
      return <ResourceNestPlate />
    case 'raya':
      return <RayaPlate />
    case 'personal-ai-os':
      return <PersonalAiOsPlate />
    default:
      return null
  }
}
