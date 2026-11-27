import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'
import { createPortal } from 'react-dom'
import { withBase } from '../lib/url'
import { setTankBroken } from '../lib/tankStore'
import { BETTA } from '../data/bettaSprite'

// A fish tank banner with three bettas cut out of my painting (each a random size).
//
// - Before it breaks, the tank holds just three painted bettas, kept fully inside the
//   frame. They wander, turn, and keep some distance from each other.
// - A "keep double tapping the glass!" caption (and an art credit) sits under the tank; its letters fall when it breaks.
// - Hovering shows an orange ring around the cursor. Clicking drops a pellet of food;
//   click-and-drag lays a line of it. Fish swim to the nearest food and eat it, and
//   uneaten food sinks and dissolves after a while.
// - A quick double-tap cracks the glass; quick taps after that crack it further, and once
//   it has three cracks it shatters: the shards fall, the
//   water floods out across the page (turning the background blue), and the fish swim
//   free over the whole screen, joined by three orange and three green ASCII ones (from the ASCII version of the painting) that only appear once the tank
//   is broken. Fish keep some distance from each other instead of piling up. You can keep
//   feeding them: click or drag anywhere on the page (outside links and buttons).
//   "Refill the tank" puts everything back.

const FISH_SRC = withBase('/tank/betta.png')
const FISH_ASPECT = 408 / 420 // height / width of the cutout
const MOUTH = { x: 0.002, y: 0.602 } // mouth position in the image (fish faces left)

// The ASCII betta, drawn as monospace text (0.6em wide characters, 1.1em lines).
const ASCII_ART = BETTA.join('\n')
const ASCII_COLS = BETTA[0].length
const ASCII_ROWS = BETTA.length
const ASCII_CHAR_EM = 0.6
const ASCII_LINE_EM = 1.1
const ASCII_ASPECT = (ASCII_ROWS * ASCII_LINE_EM) / (ASCII_COLS * ASCII_CHAR_EM)
const ASCII_MOUTH = (() => {
  // Mouth = the snout tip: the leftmost drawn column (the fish faces left).
  let col = ASCII_COLS
  let rows: number[] = []
  BETTA.forEach((row, y) => {
    const c = row.search(/\S/)
    if (c < 0) return
    if (c < col) [col, rows] = [c, [y]]
    else if (c === col) rows.push(y)
  })
  return { x: col / ASCII_COLS, y: (rows.reduce((a, b) => a + b, 0) / rows.length + 0.5) / ASCII_ROWS }
})()
const TANK_BLUE = '#a9d2e6'
const ASCII_ORANGE = '#e36c18' // the site's accent
const ASCII_GREEN = '#2f7d52' // matches the seabed's algae
const TANK_HEIGHT = 260

const WANDER_SPEED = 38 // px/s
const CHASE_SPEED = 230 // fish dart for food much faster than they wander
const FOOD_SINK = 12 // px/s
const FOOD_LIFE = 12_000 // ms before uneaten food dissolves
const WANDER_LEG: [number, number] = [4000, 9000] // ms a fish heads for one wander target before picking another
const STALL_SPEED = 12 // px/s; slower than this counts as stalled...
const STALL_MS = 700 // ...and stalled this long means it picks somewhere new to swim
const FOOD_SPACING = 16 // px between pellets when dragging
// Turning: only turn around after clearly swimming the other way for a moment, and not
// again right away, so small back-and-forth nudges don't make fish flip constantly.
const TURN_SPEED = 14 // px/s of sideways speed that counts as "the other way"
const TURN_HOLD = 0.4 // s of wanting to turn before turning (0.12 s when chasing food)
const TURN_GAP = 1100 // ms between turns (450 ms when chasing food)
// Bubbles: every few seconds a fish blows a little stream from its mouth. They grow
// from "." to "o" to "O"/"0" as they rise and wobble, then fade away.
const BUBBLE_EVERY: [number, number] = [1600, 4800] // ms between a fish's puffs (random in this range)
const BUBBLE_RISE = 24 // px/s
const BUBBLE_LIFE: [number, number] = [2400, 4200] // ms
const BUBBLE_BLUE = '#3d86b3'

// Fish are full size on desktop and scale down on iPad and phones.
const sizeScale = () => clamp(window.innerWidth / 1280, 0.55, 1)

// Tapping a painted fish: a little ASCII fart from its tail end, then it darts away.
const FLEE_SPEED = 360 // px/s
const FLEE_MS = 1100
const PUFF_MS = 1000
const PUFF_COLOR = '#6b7a2a'
const PUFF_FRAMES = ['~', ' ~\n~ ~', " ~ ~\n~ ' ~\n ~ ~"]

const DOUBLE_TAP_MS = 350 // two taps this close together (in time)...
const DOUBLE_TAP_PX = 40 // ...and in space make the first crack
const RAPID_TAP_MS = 600 // once cracked, each tap this soon after the last adds a crack
const CRACKS_TO_SHATTER = 3
const CAPTION = 'keep double tapping the glass!'
const CREDIT = 'interactive and art by teresa'
const PERSONAL_SPACE = 0.6 // fish keep about this many (summed) widths apart
const SEPARATION_SPEED = 160 // px/s of push away from a fish that is too close

interface Fish {
  x: number // centre, in the current world's coordinates
  y: number
  vx: number
  vy: number
  width: number // current on-screen width (baseWidth scaled to the screen)
  baseWidth: number // width at desktop size
  face: number // +1 = facing left (as painted), -1 = facing right; eases through 0 when turning
  facing: 1 | -1 // the way it has decided to face (face eases toward this)
  turnHold: number // seconds it has wanted to turn around
  lastTurn: number // when it last turned (ms)
  nextBubble: number // when it next blows bubbles (ms)
  fleeUntil: number // darting away (after being tapped) until this time (ms)
  fleeX: number // direction of the dart
  fleeY: number
  tx: number // wander target
  ty: number
  wanderUntil: number // picks a new wander target by this time (ms), even if it isn't there yet
  stalledFor: number // ms it has been barely moving (e.g. pressed against the glass)
  phase: number
  ascii: boolean // drawn as the ASCII betta instead of the painting
  onlyFree: boolean // hidden inside the tank; joins in once it breaks
  color: string // text colour for ASCII fish
  aspect: number // height / width
  mouth: { x: number; y: number } // fractions of the sprite (facing left)
}

interface Puff {
  x: number
  y: number
  born: number
  drift: number // which way the puff drifts (away from the fish)
}

interface Bubble {
  x: number
  y: number
  born: number
  life: number
  drift: number
  big: string // "O" or "0" once it has grown
}

interface Food {
  id: number
  x: number
  y: number
  born: number
  drift: number
}

interface Crack {
  id: number
  lines: string[] // SVG polyline point lists
}

interface Shard {
  id: number
  clip: string
  left: number
  top: number
  width: number
  height: number
  dx: number
  rot: number
  delay: number
}

type Phase = 'intact' | 'shattering' | 'broken'

interface Bounds {
  minX: number
  maxX: number
  minY: number
  maxY: number
}

const MAX_TILT = 0.35 // radians a fish tilts up or down while swimming
const rand = (a: number, b: number) => a + Math.random() * (b - a)
const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v))

/** Inside the intact tank, where a fish's centre may go so its whole body stays in view. */
function insideTank(f: Fish, w: number, h: number): Bounds {
  // Size of the fish's box when tilted as far as it can go, plus a little for the tail beat.
  const w0 = f.width
  const h0 = f.width * f.aspect
  const pad = 3
  const halfW = (w0 * Math.cos(MAX_TILT) + h0 * Math.sin(MAX_TILT)) / 2 + pad
  const halfH = (h0 * Math.cos(MAX_TILT) + w0 * Math.sin(MAX_TILT)) / 2 + pad
  const xs = halfW <= w - halfW ? [halfW, w - halfW] : [w / 2, w / 2]
  const ys = halfH <= h - halfH ? [halfH, h - halfH] : [h / 2, h / 2]
  return { minX: xs[0], maxX: xs[1], minY: ys[0], maxY: ys[1] }
}
/** Once free, the fish roam the whole viewport (and a little past it). */
function screenWorld(): Bounds {
  const w = window.innerWidth
  const h = window.innerHeight
  return { minX: -0.15 * w, maxX: 1.15 * w, minY: 0.05 * h, maxY: 0.95 * h }
}

function pickTarget(f: Fish, world: Bounds, view: { w: number; h: number }, others: Fish[] = []) {
  // Mostly aim somewhere visible, sometimes into the rest of the world (once free,
  // that includes just off screen). Targets always land inside `world`. Try a few spots and keep the one farthest from where the other fish are and are
  // heading, so the school spreads out instead of piling up.
  let best = { x: 0, y: 0, score: -Infinity }
  for (let i = 0; i < 6; i++) {
    const visible = Math.random() < 0.65
    const x = clamp(visible ? rand(0.1 * view.w, 0.9 * view.w) : rand(world.minX, world.maxX), world.minX, world.maxX)
    const y = clamp(visible ? rand(0.2 * view.h, 0.8 * view.h) : rand(world.minY, world.maxY), world.minY, world.maxY)
    let score = Infinity
    for (const o of others) {
      if (o === f) continue
      score = Math.min(score, Math.hypot(x - o.x, y - o.y), Math.hypot(x - o.tx, y - o.ty))
    }
    if (score > best.score) best = { x, y, score }
  }
  f.tx = best.x
  f.ty = best.y
  f.wanderUntil = performance.now() + rand(...WANDER_LEG)
  f.stalledFor = 0
}

/** A push away from every fish that is inside this one's personal space. */
function separation(f: Fish, others: Fish[]) {
  let sx = 0
  let sy = 0
  for (const o of others) {
    if (o === f) continue
    let dx = f.x - o.x
    let dy = f.y - o.y
    let d = Math.hypot(dx, dy)
    const minD = (f.width + o.width) * PERSONAL_SPACE
    if (d >= minD) continue
    if (d < 0.5) {
      // Exactly on top of each other: split in a random direction.
      const a = Math.random() * Math.PI * 2
      dx = Math.cos(a)
      dy = Math.sin(a)
      d = 1
    }
    const push = (minD - d) / minD // 0 at the edge of personal space, 1 when touching
    sx += (dx / d) * push
    sy += (dy / d) * push * 1.3 // spread out vertically a little more, like a school
  }
  return { x: sx, y: sy }
}

function mouthOf(f: Fish) {
  const h = f.width * f.aspect
  return { x: f.x + (f.mouth.x - 0.5) * f.width * Math.sign(f.face || 1), y: f.y + (f.mouth.y - 0.5) * h }
}

function fishTransform(f: Fish, reduced: boolean) {
  const h = f.width * f.aspect
  const s = f.face
  // Tilt the head up or down with the swim direction (head is on the left when s > 0).
  const tilt = clamp(-Math.sign(s || 1) * Math.atan2(f.vy, Math.abs(f.vx) + 8), -MAX_TILT, MAX_TILT)
  // A gentle tail beat: the body flexes a little, faster when swimming fast.
  const beat = reduced ? 0 : Math.sin(f.phase)
  const sx = s * (1 + 0.025 * beat)
  const sy = 1 - 0.02 * beat
  const skew = reduced ? 0 : 1.6 * beat
  return `translate(${(f.x - f.width / 2).toFixed(1)}px, ${(f.y - h / 2).toFixed(1)}px) rotate(${tilt.toFixed(3)}rad) skewY(${skew.toFixed(2)}deg) scale(${sx.toFixed(3)}, ${sy.toFixed(3)})`
}

function makeCrack(x: number, y: number): Crack {
  const lines: string[] = []
  const arms = Math.round(rand(4, 7))
  for (let i = 0; i < arms; i++) {
    let angle = (i / arms) * Math.PI * 2 + rand(-0.3, 0.3)
    let px = x
    let py = y
    const pts = [`${px.toFixed(1)},${py.toFixed(1)}`]
    const segs = Math.round(rand(3, 6))
    for (let k = 0; k < segs; k++) {
      angle += rand(-0.5, 0.5)
      const len = rand(8, 22)
      px += Math.cos(angle) * len
      py += Math.sin(angle) * len
      pts.push(`${px.toFixed(1)},${py.toFixed(1)}`)
    }
    lines.push(pts.join(' '))
  }
  return { id: Math.random(), lines }
}

/** Break the tank's rectangle into jittered triangles that fall away. */
function makeShards(rect: DOMRect): Shard[] {
  const cols = 6
  const rows = 3
  const pts: [number, number][][] = []
  for (let r = 0; r <= rows; r++) {
    pts[r] = []
    for (let c = 0; c <= cols; c++) {
      const edgeX = c === 0 || c === cols
      const edgeY = r === 0 || r === rows
      pts[r][c] = [
        (c / cols) * rect.width + (edgeX ? 0 : rand(-0.35, 0.35) * (rect.width / cols)),
        (r / rows) * rect.height + (edgeY ? 0 : rand(-0.35, 0.35) * (rect.height / rows)),
      ]
    }
  }
  const shards: Shard[] = []
  const tri = (a: [number, number], b: [number, number], c: [number, number]) => {
    const minX = Math.min(a[0], b[0], c[0])
    const minY = Math.min(a[1], b[1], c[1])
    const w = Math.max(a[0], b[0], c[0]) - minX
    const h = Math.max(a[1], b[1], c[1]) - minY
    const pct = (p: [number, number]) =>
      `${(((p[0] - minX) / (w || 1)) * 100).toFixed(1)}% ${(((p[1] - minY) / (h || 1)) * 100).toFixed(1)}%`
    shards.push({
      id: shards.length,
      clip: `polygon(${pct(a)}, ${pct(b)}, ${pct(c)})`,
      left: rect.left + minX,
      top: rect.top + minY,
      width: w,
      height: h,
      dx: rand(-140, 140),
      rot: rand(-160, 160),
      delay: rand(0, 0.18),
    })
  }
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const p00 = pts[r][c]
      const p10 = pts[r][c + 1]
      const p01 = pts[r + 1][c]
      const p11 = pts[r + 1][c + 1]
      tri(p00, p10, p11)
      tri(p00, p11, p01)
    }
  }
  return shards
}

export function FishTank() {
  const tankRef = useRef<HTMLDivElement>(null)
  const foodLayerRef = useRef<HTMLDivElement>(null)
  const bubbleLayerRef = useRef<HTMLDivElement>(null)
  const bubbles = useRef<Bubble[]>([])
  const puffLayerRef = useRef<HTMLDivElement>(null)
  const puffs = useRef<Puff[]>([])
  const [, setSizeTick] = useState(0) // re-render when the fish are resized
  const ringRef = useRef<HTMLDivElement>(null)
  const fishEls = useRef<(HTMLElement | null)[]>([])
  const fish = useRef<Fish[]>([])
  const food = useRef<Food[]>([])
  const lastTap = useRef<{ t: number; x: number; y: number } | null>(null)
  const lastTapAt = useRef(0)
  const crackCount = useRef(0)
  const dragging = useRef<{ x: number; y: number } | null>(null)
  const phaseRef = useRef<Phase>('intact')
  const letterFall = useRef(
    [...CAPTION].map(() => ({ dx: rand(-60, 60), rot: rand(-220, 220), delay: rand(0, 0.35) })),
  )

  const [phase, setPhase] = useState<Phase>('intact')
  const [cracks, setCracks] = useState<Crack[]>([])
  const [shards, setShards] = useState<Shard[]>([])
  const [flood, setFlood] = useState<{ x: number; y: number } | null>(null)
  const [reduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  const freed = phase !== 'intact'

  // Seed three painted fish of different sizes, plus three ASCII ones that stay hidden
  // in the tank until it breaks.
  if (fish.current.length === 0) {
    const painted = (onlyFree: boolean) => ({ width: Math.round(rand(58, 118)), ascii: false, onlyFree, color: '' })
    const asciiFish = (color: string) => ({ width: Math.round(rand(100, 185)), ascii: true, onlyFree: true, color })
    const kinds = [
      painted(false),
      painted(false),
      painted(false), // the three painted fish (the only ones in the intact tank)
      asciiFish(ASCII_ORANGE),
      asciiFish(ASCII_ORANGE),
      asciiFish(ASCII_ORANGE),
      asciiFish(ASCII_GREEN),
      asciiFish(ASCII_GREEN),
      asciiFish(ASCII_GREEN),
    ]
    const scaleNow = sizeScale()
    fish.current = kinds.map(({ width: baseWidth, ascii, onlyFree, color }, i) => ({
      x: rand(0.1, 0.9) * 600,
      y: rand(0.3, 0.7) * TANK_HEIGHT,
      vx: (i % 2 ? 1 : -1) * WANDER_SPEED,
      vy: 0,
      width: Math.round(baseWidth * scaleNow),
      baseWidth,
      face: i % 2 ? -1 : 1,
      facing: i % 2 ? -1 : 1,
      turnHold: 0,
      lastTurn: 0,
      nextBubble: rand(...BUBBLE_EVERY),
      fleeUntil: 0,
      fleeX: 0,
      fleeY: 0,
      tx: 0,
      ty: 0,
      wanderUntil: 0,
      stalledFor: 0,
      phase: rand(0, Math.PI * 2),
      ascii,
      onlyFree,
      color,
      aspect: ascii ? ASCII_ASPECT : FISH_ASPECT,
      mouth: ascii ? ASCII_MOUTH : MOUTH,
    }))
  }

  // The simulation loop.
  useEffect(() => {
    let frame = 0
    let last = performance.now()
    const viewSize = () => {
      if (phaseRef.current !== 'intact') return { w: window.innerWidth, h: window.innerHeight }
      const el = tankRef.current
      return { w: el?.clientWidth ?? 600, h: el?.clientHeight ?? TANK_HEIGHT }
    }
    // Where each fish may swim: inside the tank while it's intact, the screen once free.
    const boundsFor = (f: Fish, v: { w: number; h: number }) =>
      phaseRef.current === 'intact' ? insideTank(f, v.w, v.h) : screenWorld()
    // Start every fish inside the visible window, then let them wander.
    const startView = viewSize()
    fish.current.forEach((f) => {
      const b = boundsFor(f, startView)
      if (phaseRef.current === 'intact') {
        f.x = rand(b.minX, b.maxX)
        f.y = rand(b.minY, b.maxY)
      }
      pickTarget(f, b, startView, fish.current)
      // Draw them in their starting spots right away, not on the first frame.
      const el = fishEls.current[fish.current.indexOf(f)]
      if (el) el.style.transform = fishTransform(f, reduced)
    })

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      const view = viewSize()
      const pellets = food.current

      // While the tank is intact only its own fish swim (and space themselves out).
      const active = phaseRef.current === 'intact' ? fish.current.filter((f) => !f.onlyFree) : fish.current
      for (const f of active) {
        const bounds = boundsFor(f, view)
        const fleeing = now < f.fleeUntil
        // Head for the nearest food if there is any, otherwise wander.
        let target: { x: number; y: number } | null = null
        let speed = WANDER_SPEED
        if (pellets.length && !fleeing) {
          const m = mouthOf(f)
          const reach = Math.max(9, f.width * 0.1)
          let best = Infinity
          for (const p of pellets) {
            // Where the centre has to be to bring the mouth (not the centre) to the pellet.
            const cx = p.x - (m.x - f.x)
            const cy = p.y - (m.y - f.y)
            // Skip food it can't reach (sunk past the floor, or tucked in a corner), so it
            // doesn't sit pressed against the glass waiting for it to dissolve.
            if (Math.hypot(clamp(cx, bounds.minX, bounds.maxX) - cx, clamp(cy, bounds.minY, bounds.maxY) - cy) > reach) continue
            const dist = Math.hypot(p.x - m.x, p.y - m.y)
            if (dist < best) {
              best = dist
              target = { x: cx, y: cy }
            }
          }
          if (target) speed = CHASE_SPEED
        }
        if (!target) {
          // Head for the wander target; pick a new one on arrival, when this leg runs long,
          // or when it has stalled (so it never just parks at the bottom or an edge).
          if (Math.hypot(f.tx - f.x, f.ty - f.y) < 30 || now > f.wanderUntil || f.stalledFor > STALL_MS) {
            pickTarget(f, bounds, view, active)
          }
          target = { x: f.tx, y: f.ty }
        }
        const chasing = speed === CHASE_SPEED
        const dx = target.x - f.x
        const dy = target.y - f.y
        const dist = Math.hypot(dx, dy) || 1
        const want = Math.min(speed, dist * 2.5)
        const steer = Math.min(1, dt * (chasing ? 4 : 1.1))
        // Keep some distance from the other fish (gentler when racing for food).
        if (fleeing) {
          // Startled: dart off in the chosen direction, ignoring food and the others.
          const kick = Math.min(1, dt * 6)
          f.vx += (f.fleeX * FLEE_SPEED - f.vx) * kick
          f.vy += (f.fleeY * FLEE_SPEED - f.vy) * kick
        } else {
          const sep = separation(f, active)
          const sepSpeed = SEPARATION_SPEED * (chasing ? 0.5 : 1)
          f.vx += ((dx / dist) * want + sep.x * sepSpeed - f.vx) * steer
          f.vy += ((dy / dist) * want * 0.75 + sep.y * sepSpeed - f.vy) * steer
        }
        const px = f.x
        const py = f.y
        f.x = clamp(f.x + f.vx * dt, bounds.minX, bounds.maxX)
        f.y = clamp(f.y + f.vy * dt, bounds.minY, bounds.maxY)
        // Track how long it has barely moved (its real movement, after the glass stops it).
        const moved = dt > 0 ? Math.hypot(f.x - px, f.y - py) / dt : WANDER_SPEED
        f.stalledFor = !fleeing && moved < STALL_SPEED ? f.stalledFor + dt * 1000 : 0

        // Turn to face the way it's swimming, squashing through 0 like a real turn.
        const wantFace = fleeing ? f.facing : f.vx < -TURN_SPEED ? 1 : f.vx > TURN_SPEED ? -1 : f.facing
        if (wantFace !== f.facing) {
          f.turnHold += dt
          const hungry = chasing
          if (f.turnHold >= (hungry ? 0.12 : TURN_HOLD) && now - f.lastTurn >= (hungry ? 450 : TURN_GAP)) {
            f.facing = wantFace
            f.lastTurn = now
            f.turnHold = 0
          }
        } else {
          f.turnHold = 0
        }
        f.face += (f.facing - f.face) * Math.min(1, dt * 5)
        if (Math.abs(f.face) < 0.06) f.face = 0.06 * f.facing
        f.phase += dt * (5 + Math.hypot(f.vx, f.vy) / 12)

        // Eat any pellet close to the mouth.
        if (pellets.length && !fleeing) {
          const m = mouthOf(f)
          food.current = food.current.filter((p) => Math.hypot(p.x - m.x, p.y - m.y) > Math.max(9, f.width * 0.1))
        }
      }

      // Food sinks, sways, and dissolves after a while.
      food.current = food.current.filter((p) => now - p.born < FOOD_LIFE && p.y < view.h + 20)
      for (const p of food.current) {
        p.y += FOOD_SINK * dt
        p.x += Math.sin((now - p.born) / 700 + p.drift) * 4 * dt
      }

      fish.current.forEach((f, i) => {
        const el = fishEls.current[i]
        if (el) el.style.transform = fishTransform(f, reduced)
      })
      // Bubbles: puff from each swimming fish's mouth now and then, rise, then fade out.
      for (const f of active) {
        if (now < f.nextBubble) continue
        f.nextBubble = now + rand(...BUBBLE_EVERY)
        const m = mouthOf(f)
        const n = Math.random() < 0.4 ? 2 : 1 + Math.round(Math.random())
        for (let k = 0; k < n; k++) {
          bubbles.current.push({
            x: m.x - Math.sign(f.face || 1) * rand(2, 8),
            y: m.y - k * 9,
            born: now + k * 140, // a little stream, not all at once
            life: rand(...BUBBLE_LIFE),
            drift: rand(0, Math.PI * 2),
            big: Math.random() < 0.5 ? 'O' : '0',
          })
        }
      }
      bubbles.current = bubbles.current.filter((b) => now - b.born < b.life && b.y > -30)
      for (const b of bubbles.current) {
        if (now < b.born) continue
        b.y -= BUBBLE_RISE * dt
        b.x += Math.sin((now - b.born) / 380 + b.drift) * 9 * dt
      }
      const bubbleLayer = bubbleLayerRef.current
      if (bubbleLayer) {
        bubbleLayer.innerHTML = bubbles.current
          .filter((b) => now >= b.born)
          .map((b) => {
            const t = (now - b.born) / b.life
            const glyph = t < 0.22 ? '.' : t < 0.55 ? 'o' : b.big
            const fade = t > 0.7 ? (1 - t) / 0.3 : 1
            return `<span style="transform:translate(${b.x.toFixed(1)}px,${b.y.toFixed(1)}px) translate(-50%,-50%);opacity:${fade.toFixed(2)}">${glyph}</span>`
          })
          .join('')
      }

      // Fart puffs grow, drift away from the fish, and fade.
      puffs.current = puffs.current.filter((p) => now - p.born < PUFF_MS)
      const puffLayer = puffLayerRef.current
      if (puffLayer) {
        puffLayer.innerHTML = puffs.current
          .map((p) => {
            const t = (now - p.born) / PUFF_MS
            const frame = PUFF_FRAMES[Math.min(PUFF_FRAMES.length - 1, Math.floor(t * 4))]
            const x = p.x + p.drift * 22 * t
            const y = p.y - 10 * t
            const fade = t > 0.6 ? (1 - t) / 0.4 : 1
            const label = t < 0.75 ? '<b>pfft!</b>' : ''
            return `<span style="transform:translate(${x.toFixed(1)}px,${y.toFixed(1)}px) translate(-50%,-50%) scale(${(0.8 + t * 0.6).toFixed(2)});opacity:${fade.toFixed(2)}">${label}${frame}</span>`
          })
          .join('')
      }

      const layer = foodLayerRef.current
      if (layer) {
        layer.innerHTML = food.current
          .map((p) => {
            const age = now - p.born
            const fade = age > FOOD_LIFE - 1500 ? (FOOD_LIFE - age) / 1500 : 1
            return `<span style="transform:translate(${(p.x - 3).toFixed(1)}px,${(p.y - 3).toFixed(1)}px);opacity:${fade.toFixed(2)}"></span>`
          })
          .join('')
      }
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [reduced])

  const localPoint = (e: ReactPointerEvent) => {
    const rect = tankRef.current!.getBoundingClientRect()
    return { x: e.clientX - rect.left, y: e.clientY - rect.top }
  }

  const dropFood = (x: number, y: number) => {
    food.current.push({ id: Math.random(), x, y, born: performance.now(), drift: rand(0, Math.PI * 2) })
    if (food.current.length > 120) food.current.shift()
  }

  /** The painted fish under a point (in the current world's coordinates), if any. */
  const paintedFishAt = (x: number, y: number) => {
    const swimming = fish.current.filter((f) => !f.ascii && (phaseRef.current !== 'intact' || !f.onlyFree))
    // Topmost first (later fish are drawn on top); an oval a bit smaller than the image.
    for (let i = swimming.length - 1; i >= 0; i--) {
      const f = swimming[i]
      const dx = (x - f.x) / (f.width * 0.42)
      const dy = (y - f.y) / (f.width * f.aspect * 0.4)
      if (dx * dx + dy * dy < 1) return f
    }
    return null
  }

  /** A little fart from the tail end, then dart away fast in a random direction. */
  const startle = (f: Fish) => {
    const now = performance.now()
    const tailSide = Math.sign(f.face || 1) // the tail is on the right when facing left
    puffs.current.push({
      x: f.x + tailSide * f.width * 0.46,
      y: f.y + f.width * f.aspect * 0.08,
      born: now,
      drift: tailSide,
    })
    const a = rand(0, Math.PI * 2)
    f.fleeX = Math.cos(a)
    f.fleeY = Math.sin(a) * 0.7
    f.fleeUntil = now + FLEE_MS
    f.facing = f.fleeX < 0 ? 1 : -1 // face the way it bolts
    f.lastTurn = now
    f.turnHold = 0
  }

  const shatter = useCallback(() => {
    const tank = tankRef.current
    if (!tank || phaseRef.current !== 'intact') return
    const rect = tank.getBoundingClientRect()
    // Switch worlds now (not on the next render) so the loop never clamps screen
    // coordinates to the tank's bounds for a frame.
    phaseRef.current = 'shattering'
    // The painted fish burst out of the tank (tank -> screen coordinates); the hidden
    // ASCII fish instead appear at random spots on the screen and fade in.
    const vw = window.innerWidth
    const vh = window.innerHeight
    for (const f of fish.current) {
      if (f.onlyFree) {
        f.x = rand(0.1, 0.9) * vw
        f.y = rand(0.15, 0.85) * vh
        f.vx = rand(-30, 30)
        f.vy = rand(-20, 20)
        f.facing = f.vx < 0 ? 1 : -1
        f.face = f.facing
      } else {
        f.x += rect.left
        f.y += rect.top
        f.vx *= 2.2
        f.vy = rand(-60, 60)
      }
      pickTarget(f, screenWorld(), { w: vw, h: vh }, fish.current)
    }
    food.current = []
    bubbles.current = []
    puffs.current = []
    dragging.current = null
    setShards(makeShards(rect))
    setCracks([])
    setFlood({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
    setPhase('shattering')
    window.setTimeout(() => {
      setPhase('broken')
    }, 1600)
    window.setTimeout(() => setShards([]), 2200)
  }, [])

  const refill = () => {
    const tank = tankRef.current
    const rect = tank?.getBoundingClientRect()
    for (const f of fish.current) {
      // Put each fish back somewhere inside the tank.
      const b = insideTank(f, rect?.width ?? 600, rect?.height ?? TANK_HEIGHT)
      f.x = rand(b.minX, b.maxX)
      f.y = rand(b.minY, b.maxY)
      f.vx = 0
      f.vy = 0
    }
    bubbles.current = []
    puffs.current = []
    lastTap.current = null
    lastTapAt.current = 0
    crackCount.current = 0
    phaseRef.current = 'intact'
    setFlood(null)
    setPhase('intact')
  }

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (phaseRef.current !== 'intact') return
    const p = localPoint(e)
    // Tapping a painted fish startles it instead of dropping food or tapping the glass.
    const hit = paintedFishAt(p.x, p.y)
    if (hit) {
      startle(hit)
      return
    }
    dropFood(p.x, p.y)
    dragging.current = p
    try {
      e.currentTarget.setPointerCapture(e.pointerId) // keep the drag going if it strays outside
    } catch {
      // Some synthetic or already-released pointers can't be captured; dragging still works.
    }

    // Tapping the glass: a quick double-tap makes the first crack. After that, every
    // quick follow-up tap adds another; with three cracks the tank shatters. Slow,
    // single clicks just drop food.
    const now = performance.now()
    const addCrack = (x: number, y: number) => {
      if (crackCount.current >= CRACKS_TO_SHATTER) return // already about to shatter
      crackCount.current++
      setCracks((c) => [...c, makeCrack(x, y)])
      // Show the last crack for a beat, then the glass gives way.
      if (crackCount.current === CRACKS_TO_SHATTER) window.setTimeout(shatter, 300)
    }
    if (crackCount.current === 0) {
      const prev = lastTap.current
      if (prev && now - prev.t < DOUBLE_TAP_MS && Math.hypot(p.x - prev.x, p.y - prev.y) < DOUBLE_TAP_PX) {
        lastTap.current = null
        addCrack((p.x + prev.x) / 2, (p.y + prev.y) / 2)
      } else {
        lastTap.current = { t: now, x: p.x, y: p.y }
      }
    } else if (now - lastTapAt.current < RAPID_TAP_MS) {
      addCrack(p.x, p.y)
    }
    lastTapAt.current = now
  }

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const p = localPoint(e)
    const ring = ringRef.current
    if (ring) {
      ring.style.transform = `translate(${p.x}px, ${p.y}px) translate(-50%, -50%)`
      ring.style.opacity = phaseRef.current === 'intact' && e.pointerType !== 'touch' ? '1' : '0'
    }
    // Dragging lays a line of food, one pellet every FOOD_SPACING pixels.
    const d = dragging.current
    if (!d || phaseRef.current !== 'intact') return
    let dist = Math.hypot(p.x - d.x, p.y - d.y)
    while (dist >= FOOD_SPACING) {
      const t = FOOD_SPACING / dist
      d.x += (p.x - d.x) * t
      d.y += (p.y - d.y) * t
      dropFood(d.x, d.y)
      dist = Math.hypot(p.x - d.x, p.y - d.y)
    }
  }

  const endDrag = () => {
    dragging.current = null
  }

  const hideRing = () => {
    if (ringRef.current) ringRef.current.style.opacity = '0'
    endDrag()
  }

  // The sidebar seabed follows the tank: it only exists while the tank is broken (and is
  // cleared whenever this tank mounts intact, e.g. after a reload or hot update).
  useEffect(() => {
    setTankBroken(phase === 'broken')
  }, [phase])
  useEffect(() => () => setTankBroken(false), [])

  // Resize the fish with the screen (smaller on iPad and phones).
  useEffect(() => {
    const onResize = () => {
      const scaleNow = sizeScale()
      let changed = false
      for (const f of fish.current) {
        const w = Math.round(f.baseWidth * scaleNow)
        if (w !== f.width) {
          f.width = w
          changed = true
        }
      }
      if (changed) setSizeTick((n) => n + 1)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Keep the freed fish inside the new world if the window is resized.
  useEffect(() => {
    if (!freed) return
    const onResize = () => fish.current.forEach((f) =>
        pickTarget(f, screenWorld(), { w: window.innerWidth, h: window.innerHeight }, fish.current),
      )
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [freed])

  // After the tank breaks, keep feeding: click (or drag) anywhere on the page that isn't
  // a link, button or form field to drop food where the freed fish can reach it.
  useEffect(() => {
    if (phase !== 'broken') return
    const interactive = 'a, button, input, textarea, select, label, summary, [role="button"], [role="dialog"]'
    let last: { x: number; y: number } | null = null
    let touchStart: { x: number; y: number } | null = null
    const down = (e: PointerEvent) => {
      if (e.button !== 0 || (e.target as Element | null)?.closest(interactive)) return
      if (e.pointerType === 'touch') {
        touchStart = { x: e.clientX, y: e.clientY } // decide on lift: tap = food, swipe = scroll
        return
      }
      const hit = paintedFishAt(e.clientX, e.clientY)
      if (hit) {
        startle(hit)
        return
      }
      last = { x: e.clientX, y: e.clientY }
      dropFood(last.x, last.y)
    }
    const move = (e: PointerEvent) => {
      if (!last) return
      if (!(e.buttons & 1)) {
        last = null
        return
      }
      window.getSelection()?.removeAllRanges() // feeding, not selecting text
      let dist = Math.hypot(e.clientX - last.x, e.clientY - last.y)
      while (dist >= FOOD_SPACING) {
        const t = FOOD_SPACING / dist
        last.x += (e.clientX - last.x) * t
        last.y += (e.clientY - last.y) * t
        dropFood(last.x, last.y)
        dist = Math.hypot(e.clientX - last.x, e.clientY - last.y)
      }
    }
    const up = (e: PointerEvent) => {
      if (touchStart && Math.hypot(e.clientX - touchStart.x, e.clientY - touchStart.y) < 10) {
        const hit = paintedFishAt(e.clientX, e.clientY)
        if (hit) startle(hit)
        else dropFood(e.clientX, e.clientY)
      }
      touchStart = null
      last = null
    }
    document.addEventListener('pointerdown', down)
    document.addEventListener('pointermove', move)
    document.addEventListener('pointerup', up)
    return () => {
      document.removeEventListener('pointerdown', down)
      document.removeEventListener('pointermove', move)
      document.removeEventListener('pointerup', up)
    }
  }, [phase])

  // Painted fish are images; ASCII fish are monospace text sized to the fish width.
  const renderFish = (includeFreeOnly: boolean) =>
    fish.current.map((f, i) => {
      if (f.onlyFree && !includeFreeOnly) return null
      const setRef = (el: HTMLElement | null) => {
        fishEls.current[i] = el
      }
      const style = { width: f.width, height: f.width * f.aspect, transform: fishTransform(f, reduced) }
      const className = 'pointer-events-none absolute left-0 top-0 origin-center select-none will-change-transform'
      return f.ascii ? (
        <div
          key={i}
          ref={setRef}
          className={`${className} tank-fish-appear`}
          style={{ ...style, animationDelay: `${(0.3 + (i % 6) * 0.25).toFixed(2)}s` }}
        >
          <pre
            className="m-0 font-mono"
            style={{ color: f.color, fontSize: f.width / (ASCII_COLS * ASCII_CHAR_EM), lineHeight: ASCII_LINE_EM }}
          >
            {ASCII_ART}
          </pre>
        </div>
      ) : (
        <img key={i} ref={setRef} src={FISH_SRC} alt="A betta fish from my painting" draggable={false} className={className} style={style} />
      )
    })

  const puffLayer = (
    <div
      ref={puffLayerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10 font-mono text-[12px] leading-none [&>span]:absolute [&>span]:left-0 [&>span]:top-0 [&>span]:whitespace-pre [&>span]:text-center [&_b]:mb-0.5 [&_b]:block [&_b]:font-normal"
      style={{ color: PUFF_COLOR }}
    />
  )

  const bubbleLayer = (
    <div
      ref={bubbleLayerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 font-mono text-[11px] leading-none [&>span]:absolute [&>span]:left-0 [&>span]:top-0"
      style={{ color: BUBBLE_BLUE }}
    />
  )

  const foodLayer = (
    <div
      ref={foodLayerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 [&>span]:absolute [&>span]:left-0 [&>span]:top-0 [&>span]:size-1.5 [&>span]:rounded-full [&>span]:bg-[#7a4320]"
    />
  )

  return (
    <>
      <div
        ref={tankRef}
        role="img"
        aria-label="A fish tank with three bettas from my painting. Click to drop food; drag to lay a line of it."
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={hideRing}
        className={`relative mt-2 h-[220px] touch-pan-y select-none overflow-hidden rounded-[10px] border transition-colors duration-700 sm:h-[260px] lg:mt-16 ${
          freed ? 'cursor-default border-dashed border-ink/40' : 'cursor-pointer border-ink'
        }`}
        style={{
          background: freed ? 'transparent' : `linear-gradient(180deg, ${TANK_BLUE} 0%, #8fc1db 100%)`,
        }}
      >
        {/* Food sits behind the fish so they swim over it to eat. */}
        {!freed && foodLayer}
        {!freed && bubbleLayer}
        {!freed && <div aria-hidden="true">{renderFish(false)}</div>}
        {!freed && puffLayer}

        {cracks.length > 0 && (
          <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full">
            {cracks.map((c) =>
              c.lines.map((pts, i) => (
                <polyline key={`${c.id}-${i}`} points={pts} fill="none" stroke="white" strokeWidth={1.4} strokeLinejoin="round" opacity={0.9} />
              )),
            )}
          </svg>
        )}

        {phase === 'broken' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              type="button"
              onClick={refill}
              className="cursor-pointer rounded-full border border-ink bg-bg/80 px-4 py-2 font-mono text-xs text-ink"
            >
              refill the tank
            </button>
          </div>
        )}

        {/* Orange ring that follows the cursor over the tank. */}
        <div
          ref={ringRef}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-20 size-7 rounded-full border-2 border-accent opacity-0 transition-opacity duration-150"
        />
      </div>

      {/* The caption under the tank (its letters fall when the glass shatters), with the
          credit on the same line at the right. On narrow screens the credit wraps but stays right. */}
      <div className="mt-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 font-mono text-xs text-ink/60 select-none">
        <p aria-label={CAPTION} className="m-0">
          {[...CAPTION].map((ch, i) => (
            <span
              key={i}
              aria-hidden="true"
              className={`inline-block ${freed ? 'tank-letter-fall' : ''}`}
              style={
                freed
                  ? ({
                      '--dx': `${letterFall.current[i].dx}px`,
                      '--rot': `${letterFall.current[i].rot}deg`,
                      animationDelay: `${letterFall.current[i].delay}s`,
                    } as React.CSSProperties)
                  : undefined
              }
            >
              {ch === ' ' ? <>&nbsp;</> : ch}
            </span>
          ))}
        </p>
        <p className="m-0 ml-auto">{CREDIT}</p>
      </div>

      {/* Freed fish (painted and ASCII) roam over the whole page, with their food. */}
      {freed &&
        createPortal(
          <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
            {foodLayer}
            {bubbleLayer}
            {renderFish(true)}
            {puffLayer}
          </div>,
          document.body,
        )}

      {/* Falling glass shards. */}
      {shards.length > 0 &&
        createPortal(
          <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
            {shards.map((s) => (
              <div
                key={s.id}
                className="tank-shard absolute"
                style={
                  {
                    left: s.left,
                    top: s.top,
                    width: s.width,
                    height: s.height,
                    clipPath: s.clip,
                    '--dx': `${s.dx}px`,
                    '--rot': `${s.rot}deg`,
                    animationDelay: `${s.delay}s`,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>,
          document.body,
        )}

      {/* The water spills out of the tank and floods the page behind the content. */}
      {flood &&
        createPortal(
          <div
            aria-hidden="true"
            className={`tank-flood pointer-events-none fixed inset-0 -z-10 ${reduced ? 'tank-flood-instant' : ''}`}
            style={{ background: TANK_BLUE, '--fx': `${flood.x}px`, '--fy': `${flood.y}px` } as React.CSSProperties}
          />,
          document.body,
        )}
    </>
  )
}
