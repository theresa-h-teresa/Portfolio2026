import { Mail, ArrowRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { sections, hero } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'

export function Sidebar() {
  const sectionIds = sections.map((s) => s.id)
  const activeId = useActiveSection(sectionIds)

  return (
    // Outer element stretches to match the tall content column (default flex
    // align-items: stretch), giving the inner sticky wrapper room to travel
    // across the full scroll instead of unsticking almost immediately.
    <aside className="md:w-[563px] md:shrink-0">
      <div className="flex flex-col gap-8 pt-12 pb-24 md:sticky md:top-[92px] md:pt-16 md:pb-32">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-ink bg-pill-bg px-4 py-1.5">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-live opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-live" />
          </span>
          <span className="font-mono text-xs text-ink">OPEN FOR WORK</span>
        </div>

        <div>
          <h1 className="font-display text-4xl leading-[0.9] font-black text-ink md:text-6xl">
            {hero.name}
          </h1>
          <p className="mt-2 font-display text-2xl text-ink md:text-4xl">{hero.title}</p>
        </div>

        <div className="flex max-w-md items-start gap-8">
          <ArrowRight className="mt-0.5 size-4 shrink-0 text-ink" />
          <p className="font-mono text-xs leading-relaxed text-ink">{hero.tagline}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {hero.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-ink bg-pill-bg px-4 py-2.5 font-mono text-xs text-ink"
            >
              {tag}
            </span>
          ))}
        </div>

        <nav className="flex flex-col gap-3 font-mono text-sm">
          {sections.map((s) => {
            const isActive = activeId === s.id
            return (
              <a key={s.id} href={`#${s.id}`} className="flex items-center gap-3">
                <span
                  className={`shrink-0 bg-brand transition-all duration-300 ${
                    isActive ? 'h-[2px] w-16' : 'h-px w-10'
                  }`}
                />
                <span
                  className={`text-brand transition-all duration-300 ${
                    isActive ? 'translate-x-2 font-semibold' : 'font-normal'
                  }`}
                >
                  {s.label.toUpperCase()}
                </span>
              </a>
            )
          })}
        </nav>

        <div className="flex gap-4 text-ink">
          <a href={hero.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon className="size-6" />
          </a>
          <a href={hero.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon className="size-6" />
          </a>
          <a href={hero.socials.mail} aria-label="Email">
            <Mail className="size-6" />
          </a>
        </div>
      </div>
    </aside>
  )
}
