import { useEffect, useRef, useState } from 'react'

// An ASCII seabed (rocks, swaying algae, coral, a shell and a starfish) that appears
// in the sidebar once the fish tank has burst and the page has flooded.

const ROWS = 9 // the bottom row is sand; everything else stands on the row above it
const SWAY_MS = 650

type Kind = 'rock' | 'coral' | 'pink' | 'algae' | 'sand' | 'shell' | 'none'

const kindClass: Record<Kind, string> = {
  rock: 'text-ink/55',
  coral: 'text-accent',
  pink: 'text-[#d9577a]',
  algae: 'text-[#2f7d52]',
  sand: 'text-[#9a7f55]',
  shell: 'text-[#b86f3c]',
  none: '',
}

interface Template {
  kind: Kind
  rows: string[] // bottom-aligned
}

const ROCK_BIG: Template = {
  kind: 'rock',
  rows: ['   _____   ', ' _/  .  \\_ ', '/  .   .  \\'],
}
const ROCK_SMALL: Template = {
  kind: 'rock',
  rows: ['  __  ', ' /. \\_', '/  .  \\'],
}
const CORAL_BRANCH: Template = {
  kind: 'coral',
  rows: ['\\ | /', ' \\|/ ', '\\ | /', ' \\|/ ', '  |  '],
}
const CORAL_FAN: Template = {
  kind: 'pink',
  rows: [' .-*-. ', '(*.*.*)', " `-|-' ", '   |   '],
}
const CORAL_STAG: Template = {
  kind: 'coral',
  rows: ['*  * *', ' \\ |/ ', '  \\|  ', '   |  '],
}
const SHELL: Template = { kind: 'shell', rows: ['@'] }
const STAR: Template = { kind: 'pink', rows: ['*'] }

type Item = { template: Template } | { algae: number } // algae = stalk height

// The order things appear along the sea floor (repeats to fill wider sidebars).
const SCENE: Item[] = [
  { template: ROCK_BIG },
  { algae: 5 },
  { algae: 3 },
  { template: CORAL_BRANCH },
  { template: SHELL },
  { algae: 6 },
  { template: ROCK_SMALL },
  { template: CORAL_FAN },
  { algae: 4 },
  { template: STAR },
  { template: CORAL_STAG },
  { algae: 7 },
  { template: ROCK_SMALL },
  { algae: 3 },
  { algae: 5 },
  { template: CORAL_BRANCH },
]

interface Cell {
  ch: string
  kind: Kind
}

/** Deterministic pseudo-random gaps so the layout is the same on every visit. */
function gapAt(i: number) {
  return 1 + ((i * 7 + 3) % 3)
}

function drawScene(cols: number, frame: number): Cell[][] {
  const grid: Cell[][] = Array.from({ length: ROWS }, () =>
    Array.from({ length: cols }, () => ({ ch: ' ', kind: 'none' as Kind })),
  )
  const put = (x: number, y: number, ch: string, kind: Kind) => {
    if (x >= 0 && x < cols && y >= 0 && y < ROWS && ch !== ' ') grid[y][x] = { ch, kind }
  }

  // Sand along the bottom.
  for (let x = 0; x < cols; x++) put(x, ROWS - 1, '~.~,~~.~'[x % 8], 'sand')

  const floor = ROWS - 2
  let x = 1
  for (let i = 0; x < cols; i++) {
    const item = SCENE[i % SCENE.length]
    if ('algae' in item) {
      // A stalk that sways: each segment leans left or right, flipping every frame.
      for (let k = 0; k < item.algae; k++) {
        const lean = (k + frame + i) % 2
        put(x + lean, floor - k, lean ? ')' : '(', 'algae')
      }
      x += 2 + gapAt(i)
    } else {
      const { rows, kind } = item.template
      const w = Math.max(...rows.map((r) => r.length))
      if (x + w > cols) break
      rows.forEach((row, r) => {
        const y = floor - (rows.length - 1 - r)
        ;[...row].forEach((ch, dx) => put(x + dx, y, ch, kind))
      })
      x += w + gapAt(i)
    }
  }
  return grid
}

function Row({ cells }: { cells: Cell[] }) {
  const runs: { text: string; kind: Kind }[] = []
  for (const c of cells) {
    const last = runs[runs.length - 1]
    if (last && last.kind === c.kind) last.text += c.ch
    else runs.push({ text: c.ch, kind: c.kind })
  }
  return (
    <>
      {runs.map((r, i) => (
        <span key={i} className={kindClass[r.kind]}>
          {r.text}
        </span>
      ))}
      {'\n'}
    </>
  )
}

export function Seabed() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const measureRef = useRef<HTMLSpanElement>(null)
  const [cols, setCols] = useState(60)
  const [frame, setFrame] = useState(0)

  // Fit the scene to the sidebar's width, in characters.
  useEffect(() => {
    const wrap = wrapRef.current
    const measure = measureRef.current
    if (!wrap || !measure) return
    const fit = () => {
      const charW = measure.getBoundingClientRect().width / 10 || 7.2
      setCols(Math.max(30, Math.floor(wrap.clientWidth / charW)))
    }
    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(wrap)
    return () => ro.disconnect()
  }, [])

  // Sway the algae (not for reduced-motion visitors).
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => setFrame((f) => f + 1), SWAY_MS)
    return () => window.clearInterval(id)
  }, [])

  const grid = drawScene(cols, frame)

  return (
    <div
      ref={wrapRef}
      role="img"
      aria-label="ASCII art of a seabed with rocks, swaying algae, coral, a shell and a starfish"
      className="seabed-in relative w-full max-w-md"
    >
      <span ref={measureRef} aria-hidden="true" className="invisible absolute font-mono text-xs">
        0000000000
      </span>
      <pre aria-hidden="true" className="m-0 font-mono text-xs leading-[1.15] select-none">
        {grid.map((cells, i) => (
          <Row key={i} cells={cells} />
        ))}
      </pre>
    </div>
  )
}
