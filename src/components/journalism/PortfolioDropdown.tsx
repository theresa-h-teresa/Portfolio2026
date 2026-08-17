import { useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'
import { ArrowDownRight } from 'lucide-react'
import { journalismTiles, type JournalismCardKey } from '../../data/journalism'

interface DragState {
  startX: number
  startY: number
  originX: number
  originY: number
  dragging: boolean
}

interface NotePosition {
  x: number
  y: number
}

const STORAGE_KEY = 'journalism-portfolio-note-position'

function loadStoredPosition(): NotePosition | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (typeof parsed?.x === 'number' && typeof parsed?.y === 'number') return parsed
  } catch {
    // localStorage unavailable (private browsing, etc.) — fall back to default placement.
  }
  return null
}

export function PortfolioDropdown({ onSelect }: { onSelect: (cardKey: JournalismCardKey) => void }) {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState<NotePosition | null>(loadStoredPosition)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const dragState = useRef<DragState | null>(null)

  const persistPosition = (next: NotePosition) => {
    setPosition(next)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      // ignore — position just won't survive a reload
    }
  }

  const openNote = () => {
    // Only pick a default spot the very first time — after that, reopen wherever
    // the user last dragged it (persisted across closes, tab switches, reloads).
    if (!position) {
      const rect = triggerRef.current?.getBoundingClientRect()
      persistPosition({
        x: rect ? Math.max(16, rect.right - 320) : 200,
        y: rect ? rect.bottom + 16 : 200,
      })
    }
    setIsOpen(true)
  }

  const handlePointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    // Don't start a drag from an interactive element — let its click fire normally.
    if ((e.target as HTMLElement).closest('button') || !position) return
    dragState.current = { startX: e.clientX, startY: e.clientY, originX: position.x, originY: position.y, dragging: false }
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragState.current
    if (!drag) return
    const dx = e.clientX - drag.startX
    const dy = e.clientY - drag.startY
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) drag.dragging = true
    if (drag.dragging) persistPosition({ x: drag.originX + dx, y: drag.originY + dy })
  }

  const handlePointerUp = () => {
    dragState.current = null
  }

  return (
    <div className="relative flex h-full flex-col items-end justify-end text-right">
      <button
        ref={triggerRef}
        type="button"
        onClick={openNote}
        className="flex cursor-pointer items-start gap-2 font-mono text-xs text-ink-soft"
      >
        <span>
          Check out my award-winning journalism portfolio for 2025 Journalist of the Year of North Carolina.
        </span>
        <ArrowDownRight className="mt-0.5 size-4 shrink-0" />
      </button>

      {isOpen && position && (
        <div
          className="fixed z-50 aspect-square w-[420px] cursor-grab touch-none select-none rounded-[4px] bg-[#c1cad7] p-6 text-left shadow-xl active:cursor-grabbing"
          style={{ left: position.x, top: position.y }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
            className="absolute right-4 top-4 cursor-pointer font-mono text-sm text-ink transition-opacity hover:opacity-70"
          >
            [ x ]
          </button>

          <ul className="mt-8 flex flex-col gap-2.5 text-left">
            {journalismTiles.map((tile) => (
              <li key={tile.label}>
                <button
                  type="button"
                  onClick={() => {
                    onSelect(tile.cardKey)
                    setIsOpen(false)
                  }}
                  className="cursor-pointer text-left font-mono text-xs text-ink underline underline-offset-2 hover:opacity-70"
                >
                  {tile.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
