/**
 * "Sticker pile" — the Gen-Z hero centerpiece that replaces the old 3D
 * sculpture: rotated candy stickers, a starburst badge, a circle sticker,
 * a ticket chip and a hand-drawn arrow. Pure SVG + CSS; no canvas, no WebGL.
 * Under prefers-reduced-motion everything lands flat and still.
 */

function starPoints(cx: number, cy: number, spikes: number, outer: number, inner: number): string {
  const pts: string[] = []
  const step = Math.PI / spikes
  for (let i = 0; i < spikes * 2; i++) {
    const r = i % 2 === 0 ? outer : inner
    const a = i * step - Math.PI / 2
    pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`)
  }
  return pts.join(' ')
}

const INK = '#131311'
const LIME = '#c9f63b'
const VIOLET = '#8b6cff'
const PINK = '#ff6fb2'

const MONO = "'Azeret Mono', monospace"
const DISPLAY = "'Bricolage Grotesque', sans-serif"

function StarSticker() {
  return (
    <svg width="188" height="188" viewBox="0 0 188 188" aria-hidden="true">
      <polygon points={starPoints(94, 94, 12, 86, 62)} fill={LIME} stroke={INK} strokeWidth="3" />
      <text x="94" y="86" textAnchor="middle" fontFamily={DISPLAY} fontWeight="800" fontSize="34" fill={INK}>
        GRAD
      </text>
      <text x="94" y="120" textAnchor="middle" fontFamily={DISPLAY} fontWeight="800" fontSize="40" fill={INK}>
        ’26
      </text>
      <text x="94" y="142" textAnchor="middle" fontFamily={MONO} fontWeight="600" fontSize="9.5" letterSpacing="2" fill={INK} opacity="0.75">
        B.TECH CSE
      </text>
    </svg>
  )
}

function CircleSticker() {
  return (
    <svg width="148" height="148" viewBox="0 0 148 148" aria-hidden="true">
      <circle cx="74" cy="74" r="70" fill={PINK} stroke={INK} strokeWidth="3" />
      <circle cx="74" cy="74" r="52" fill="none" stroke={INK} strokeWidth="2" strokeDasharray="4 6" opacity="0.5" />
      <text x="74" y="70" textAnchor="middle" fontFamily={DISPLAY} fontWeight="800" fontSize="34" fill={INK}>
        500+
      </text>
      <text x="74" y="90" textAnchor="middle" fontFamily={MONO} fontWeight="600" fontSize="9" letterSpacing="1.5" fill={INK}>
        CODECHEF
      </text>
      <text x="74" y="104" textAnchor="middle" fontFamily={MONO} fontWeight="600" fontSize="9" letterSpacing="1.5" fill={INK}>
        PROBLEMS
      </text>
    </svg>
  )
}

function Ticket({ big, small, tone }: { big: string; small: string; tone: 'violet' | 'paper' }) {
  return (
    <div className={`sticker sticker--pill ${tone === 'violet' ? 'sticker--violet' : 'sticker--paper'}`}>
      <span>
        {big}
        <span className="sticker__small">{small}</span>
      </span>
    </div>
  )
}

function Slot({
  cls,
  rot,
  delay,
  bobDelay,
  children,
}: {
  cls: string
  rot: number
  delay: string
  bobDelay?: string
  children: React.ReactNode
}) {
  return (
    <div className={`slot ${cls}`}>
      <div className="pop" style={{ ['--r' as string]: `${rot}deg`, ['--d' as string]: delay }}>
        <div className="bob" style={bobDelay ? { animationDelay: bobDelay } : undefined}>
          {children}
        </div>
      </div>
    </div>
  )
}

export function StickerPile() {
  return (
    <div className="stickers" aria-hidden="true">
      <Slot cls="slot--grad" rot={-9} delay="480ms" bobDelay="-1.2s">
        <StarSticker />
      </Slot>
      <Slot cls="slot--codechef" rot={7} delay="620ms" bobDelay="-2.6s">
        <CircleSticker />
      </Slot>
      <Slot cls="slot--intern" rot={-5} delay="760ms" bobDelay="-3.4s">
        <Ticket big="C2C INTERN" small="palle technology ’26" tone="violet" />
      </Slot>
      <Slot cls="slot--gssoc" rot={4} delay="900ms" bobDelay="-4.2s">
        <Ticket big="GSSoC ✦ HACKTOBERFEST" small="contributed in open source" tone="paper" />
      </Slot>
      <Slot cls="slot--arrow" rot={-2} delay="1000ms">
        <svg width="150" height="120" viewBox="0 0 150 120" fill="none" aria-hidden="true">
          <path
            d="M12 96 C 44 88, 60 52, 58 24 C 74 46, 108 58, 138 50"
            stroke={INK}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path d="M124 44 L 140 49 L 132 63" stroke={INK} strokeWidth="3.5" strokeLinecap="round" fill={VIOLET} />
          <circle cx="12" cy="96" r="7" fill={VIOLET} stroke={INK} strokeWidth="2.5" />
        </svg>
      </Slot>
    </div>
  )
}

export const _stickerPalette = { INK, LIME, VIOLET, PINK }
