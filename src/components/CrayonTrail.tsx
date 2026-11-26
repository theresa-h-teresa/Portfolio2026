import { useEffect, useRef } from 'react'

// A blue crayon line that follows the cursor over its parent element. Each point
// starts fading HOLD_MS after it was drawn, and never before the point drawn just
// before it, so the line disappears from its oldest end like falling dominoes.

const COLOR = '61, 134, 179' // #3d86b3
const WIDTH = 3.2
const HOLD_MS = 1000
const DOMINO_GAP_MS = 14 // minimum delay between neighbouring points starting to fade
const FADE_MS = 220
const MIN_STEP_PX = 2 // ignore tiny moves so the line isn't over-dense
const PASSES = 3

interface Point {
  x: number
  y: number
  stroke: number
  fadeAt: number
  // Fixed per-point jitter for the crayon passes, so the texture doesn't shimmer.
  jitter: [number, number][]
  grain: number
}

/** Wires the trail to `host`'s pointer events and draws it on `canvas`. Returns a cleanup function. */
export function attachCrayonTrail(canvas: HTMLCanvasElement, host: HTMLElement): () => void {
  const maybeCtx = canvas.getContext('2d')
  if (!maybeCtx) return () => {}
  const ctx: CanvasRenderingContext2D = maybeCtx

  const points: Point[] = []
  let stroke = 0
  let frame: number | undefined
  let dpr = 1

  const alphaOf = (p: Point, now: number) => Math.max(0, Math.min(1, 1 - (now - p.fadeAt) / FADE_MS))

  const draw = (now: number) => {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    for (let i = 1; i < points.length; i++) {
      const a = points[i - 1]
      const b = points[i]
      if (a.stroke !== b.stroke) continue
      const alpha = Math.min(alphaOf(a, now), alphaOf(b, now))
      if (alpha <= 0) continue
      // Several thin, slightly offset passes with uneven opacity read as wax crayon.
      for (let k = 0; k < PASSES; k++) {
        ctx.strokeStyle = `rgba(${COLOR}, ${(alpha * (0.45 + 0.4 * b.grain)).toFixed(3)})`
        ctx.lineWidth = WIDTH * (k === 0 ? 1 : 0.6)
        ctx.beginPath()
        ctx.moveTo(a.x + a.jitter[k][0], a.y + a.jitter[k][1])
        ctx.lineTo(b.x + b.jitter[k][0], b.y + b.jitter[k][1])
        ctx.stroke()
      }
    }
  }

  const resize = () => {
    dpr = window.devicePixelRatio || 1
    canvas.width = Math.round(host.clientWidth * dpr)
    canvas.height = Math.round(host.clientHeight * dpr)
    draw(performance.now())
  }

  const loop = () => {
    const now = performance.now()
    // Drop points that have fully faded from the front of the line.
    while (points.length && alphaOf(points[0], now) <= 0) points.shift()
    draw(now)
    frame = points.length ? requestAnimationFrame(loop) : undefined
  }

  const addPoint = (e: PointerEvent) => {
    const rect = host.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const last = points[points.length - 1]
    if (last && last.stroke === stroke && Math.hypot(x - last.x, y - last.y) < MIN_STEP_PX) return
    const now = performance.now()
    const fadeAt = Math.max(now + HOLD_MS, (last?.fadeAt ?? 0) + DOMINO_GAP_MS)
    const jitter = Array.from({ length: PASSES }, (_, k): [number, number] =>
      k === 0 ? [0, 0] : [(Math.random() - 0.5) * 1.6, (Math.random() - 0.5) * 1.6],
    )
    points.push({ x, y, stroke, fadeAt, jitter, grain: Math.random() })
    if (frame === undefined) frame = requestAnimationFrame(loop)
  }
  const startStroke = (e: PointerEvent) => {
    stroke++
    addPoint(e)
  }
  const endStroke = () => {
    stroke++
  }

  host.addEventListener('pointerenter', startStroke)
  host.addEventListener('pointermove', addPoint)
  host.addEventListener('pointerleave', endStroke)
  const ro = new ResizeObserver(resize)
  ro.observe(host)
  resize()

  return () => {
    host.removeEventListener('pointerenter', startStroke)
    host.removeEventListener('pointermove', addPoint)
    host.removeEventListener('pointerleave', endStroke)
    ro.disconnect()
    if (frame !== undefined) cancelAnimationFrame(frame)
  }
}

export function CrayonTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const host = canvas?.parentElement
    if (!canvas || !host) return
    return attachCrayonTrail(canvas, host)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10 h-full w-full"
    />
  )
}
