import { useEffect, useRef, type ReactNode } from 'react'

export interface JournalismNavItem {
  label: string
  id: string
}

interface JournalismModalShellProps {
  title: string
  navHeading?: string
  navItems?: JournalismNavItem[]
  leftExtra?: ReactNode
  onClose: () => void
  children: ReactNode
}

export function JournalismModalShell({
  title,
  navHeading,
  navItems,
  leftExtra,
  onClose,
  children,
}: JournalismModalShellProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose])

  const goTo = (id: string) => {
    contentRef.current?.querySelector<HTMLElement>(`#${id}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 md:p-10"
      onClick={onClose}
    >
      <div
        className="flex max-h-full w-full max-w-5xl flex-col overflow-hidden rounded-[30px] border-[3px] border-card-border bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-between bg-card-header px-6 py-5 md:px-10">
          <h2 className="pr-4 font-mono text-lg text-white md:text-2xl">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 font-sans text-2xl text-white transition-opacity hover:opacity-70"
          >
            [ x ]
          </button>
        </div>

        <div className="flex min-h-0 flex-1 flex-col md:flex-row">
          {((navItems && navItems.length > 0) || leftExtra) && (
            <nav className="scrollbar-none shrink-0 overflow-y-auto border-b border-ink/10 px-6 py-6 md:w-64 md:border-b-0 md:border-r md:px-8 md:py-8">
              {navItems && navItems.length > 0 && (
                <>
                  <p className="mb-4 font-display text-2xl leading-none text-ink">{navHeading}</p>
                  <ul className="flex flex-col gap-2">
                    {navItems.map((item) => (
                      <li key={item.id}>
                        <button
                          type="button"
                          onClick={() => goTo(item.id)}
                          className="text-left font-mono text-sm text-ink hover:underline underline-offset-2"
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {leftExtra}
            </nav>
          )}

          <div
            ref={contentRef}
            className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto px-6 py-6 md:px-10 md:py-8"
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
