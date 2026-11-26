import { useEffect, useRef } from 'react'
import { BETTA } from '../data/bettaSprite'
import { CrayonTrail } from './CrayonTrail'

// The betta from my painting, as ASCII, swimming back and forth across the banner.
// It turns around at each wall (with a quick squash as it flips), blows bubbles from
// its mouth, and its body and fins ripple through a traveling wave: the head stays
// steady and motion grows toward the tail and fin edges. Moving the cursor over the
// tank draws a fading blue crayon line (see CrayonTrail).

const SPRITE_W = BETTA[0].length
const SPRITE_H = BETTA.length
const PAD_ROWS = 4 // room above/below for the bob and fin ripple
const ROWS = SPRITE_H + PAD_ROWS * 2
const TICK_MS = 60
const SPEED = 1.25 // columns per tick
const TURN_TICKS = 14
const HEAD_COLS = 26 // rigid head region, measured from the snout
const MID_ROW = SPRITE_H / 2

// Mouth = the rows at the snout tip (leftmost column of the left-facing sprite).
const MOUTH_ROW = (() => {
  let best = { col: SPRITE_W, rows: [] as number[] }
  BETTA.forEach((row, y) => {
    const col = row.search(/\S/)
    if (col < 0) return
    if (col < best.col) best = { col, rows: [y] }
    else if (col === best.col) best.rows.push(y)
  })
  return best.rows.reduce((a, b) => a + b, 0) / best.rows.length
})()

interface Bubble {
  x: number // in columns
  y: number // in rows
  age: number
  life: number
  drift: number
}

interface Swim {
  x: number
  t: number
  facingLeft: boolean
  turn: number // 0 when swimming; counts up to TURN_TICKS while turning
  bubbles: Bubble[]
}

/** Character at fish-space (fx, sy) after the swimming deformation. Fish space faces left. */
function sampleFish(fx: number, sy: number, t: number): string {
  const phase = t * 0.34
  const u = Math.min(1, Math.max(0, (fx - HEAD_COLS) / (SPRITE_W - HEAD_COLS))) // 0 head .. 1 tail tip
  const v = (sy - MID_ROW) / MID_ROW // -1 top fin edge .. +1 bottom fin edge

  const body = 2.6 * u ** 1.6 * Math.sin(phase - u * Math.PI * 2.2) // wave travels head -> tail
  const fin = 1.6 * Math.abs(v) ** 2 * Math.sin(phase * 1.35 - fx * 0.14) // fins ripple at their edges
  const fan = 1.8 * u ** 2.5 * v * Math.sin(phase * 0.9) // tail fan opens and closes

  const srcX = Math.round(fx - fan)
  const srcY = Math.round(sy - body - fin)
  if (srcY < 0 || srcY >= SPRITE_H || srcX < 0 || srcX >= SPRITE_W) return ' '
  return BETTA[srcY][srcX]
}

function fishTop(swim: Swim) {
  return Math.round(PAD_ROWS + Math.sin(swim.t * 0.045) * 1.2)
}

function drawFish(swim: Swim, cols: number): string {
  const x0 = Math.round(swim.x)
  const y0 = fishTop(swim)
  // While turning, squash the fish horizontally to a sliver and back out.
  const scale = swim.turn > 0 ? Math.max(0.08, Math.abs(Math.cos((Math.PI * swim.turn) / TURN_TICKS))) : 1
  const center = (SPRITE_W - 1) / 2
  const rows: string[] = []
  for (let y = 0; y < ROWS; y++) {
    const sy = y - y0
    let line = ''
    for (let x = 0; x < cols; x++) {
      const local = x - x0
      if (sy < -4 || sy > SPRITE_H + 4 || local < -3 || local > SPRITE_W + 3) {
        line += ' '
        continue
      }
      const sx = center + (local - center) / scale
      if (sx < -3 || sx > SPRITE_W + 3) {
        line += ' '
        continue
      }
      const fx = swim.facingLeft ? sx : SPRITE_W - 1 - sx
      line += sampleFish(fx, sy, swim.t)
    }
    rows.push(line)
  }
  return rows.join('\n')
}

function step(swim: Swim, cols: number) {
  swim.t++
  const minX = 1
  const maxX = cols - SPRITE_W - 1

  if (swim.turn > 0) {
    swim.turn++
    if (swim.turn === Math.ceil(TURN_TICKS / 2)) swim.facingLeft = !swim.facingLeft
    if (swim.turn >= TURN_TICKS) swim.turn = 0
  } else if (maxX <= minX) {
    // Tank narrower than the fish: stay centered and turn now and then.
    swim.x = (cols - SPRITE_W) / 2
    if (swim.t % 160 === 0) swim.turn = 1
  } else {
    swim.x += swim.facingLeft ? -SPEED : SPEED
    if (swim.facingLeft && swim.x <= minX) { swim.x = minX; swim.turn = 1 }
    if (!swim.facingLeft && swim.x >= maxX) { swim.x = maxX; swim.turn = 1 }
  }

  // Blow a little stream of bubbles from the mouth while swimming.
  if (swim.turn === 0 && swim.t % 12 === 0) {
    const mouthX = swim.facingLeft ? swim.x - 1 : swim.x + SPRITE_W
    const count = 1 + (swim.t % 36 === 0 ? 1 : 0)
    for (let i = 0; i < count; i++) {
      swim.bubbles.push({
        x: mouthX + (Math.random() - 0.5) * 2,
        y: fishTop(swim) + MOUTH_ROW - i * 2,
        age: 0,
        life: 45 + Math.random() * 45,
        drift: Math.random() * Math.PI * 2,
      })
    }
  }
  for (const b of swim.bubbles) {
    b.age++
    b.y -= 0.45
    b.x += Math.sin(b.age / 6 + b.drift) * 0.35
  }
  swim.bubbles = swim.bubbles.filter((b) => b.age < b.life && b.y > -2)
}

/** Bubbles grow as they rise and pop (a brief "*") at the end of their life. */
function bubbleGlyph(b: Bubble) {
  if (b.life - b.age <= 2) return '*'
  if (b.age > 30) return 'O'
  if (b.age > 12) return 'o'
  return '.'
}

export function FishBanner() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const preRef = useRef<HTMLPreElement>(null)
  const bubblesRef = useRef<HTMLDivElement>(null)
  const measureRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const pre = preRef.current
    const bubbleLayer = bubblesRef.current
    const measure = measureRef.current
    if (!wrap || !pre || !bubbleLayer || !measure) return

    let cols = SPRITE_W + 20
    let charW = 2.4
    let lineH = 4.4
    const swim: Swim = { x: 0, t: 0, facingLeft: true, turn: 0, bubbles: [] }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const render = () => {
      pre.textContent = drawFish(swim, cols)
      bubbleLayer.innerHTML = swim.bubbles
        .map(
          (b) =>
            `<span style="left:${(b.x * charW).toFixed(1)}px;top:${(b.y * lineH).toFixed(1)}px">${bubbleGlyph(b)}</span>`,
        )
        .join('')
    }

    // Fit the tank to the column width, in characters.
    let placed = false
    const fit = () => {
      charW = measure.getBoundingClientRect().width / 10 || charW
      lineH = parseFloat(getComputedStyle(pre).lineHeight) || lineH
      const styles = getComputedStyle(wrap)
      const inner = wrap.clientWidth - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight)
      cols = Math.max(SPRITE_W, Math.floor(inner / charW))
      if (!placed || reduced) swim.x = Math.max(1, Math.floor((cols - SPRITE_W) * (reduced ? 0.5 : 0.7)))
      placed = true
      swim.x = Math.min(swim.x, Math.max(1, cols - SPRITE_W - 1))
      render()
    }
    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(wrap)
    if (reduced) return () => ro.disconnect()

    // Swim only while the banner is on screen.
    let timer: number | undefined
    const tick = () => {
      step(swim, cols)
      render()
    }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && timer === undefined) timer = window.setInterval(tick, TICK_MS)
      if (!entry.isIntersecting && timer !== undefined) {
        window.clearInterval(timer)
        timer = undefined
      }
    })
    io.observe(wrap)

    return () => {
      ro.disconnect()
      io.disconnect()
      if (timer !== undefined) window.clearInterval(timer)
    }
  }, [])

  return (
    <div
      ref={wrapRef}
      role="img"
      aria-label="ASCII art of a betta fish, from my painting, swimming back and forth and blowing bubbles"
      className="relative mt-12 overflow-hidden rounded-[10px] border border-ink bg-[#72b0c9]/10 px-3 py-3 md:mt-16"
    >
      <span ref={measureRef} aria-hidden="true" className="invisible absolute font-mono text-[4px]">
        0000000000
      </span>
      {/* Bubbles use a larger font so they read as bubbles at this scale. They sit behind
          the fish (earlier in the DOM), so it swims in front of its own bubble trail. */}
      <div
        ref={bubblesRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 font-mono text-[9px] leading-none text-[#3d86b3] [&>span]:absolute [&>span]:-translate-x-1/2 [&>span]:-translate-y-1/2"
      />
      <pre
        ref={preRef}
        aria-hidden="true"
        className="relative m-0 font-mono text-[4px] leading-[4.4px] text-accent select-none"
      />
      <CrayonTrail />
    </div>
  )
}
