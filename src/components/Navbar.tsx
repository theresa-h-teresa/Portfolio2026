import { sections, hero } from '../data/content'
import { withBase } from '../lib/url'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex h-[92px] w-full items-center justify-between bg-bg px-6 md:px-10">
      <span className="font-display text-base font-medium text-ink">{hero.name}</span>
      <nav className="flex items-center gap-2 font-display text-sm">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="rounded-full border border-transparent px-3 py-1 uppercase text-ink transition-colors hover:border-ink"
          >
            {s.label}
          </a>
        ))}
        <a
          href={withBase(hero.resumeHref)}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-transparent px-3 py-1 uppercase text-ink transition-colors hover:border-ink"
        >
          CV
        </a>
      </nav>
    </header>
  )
}
