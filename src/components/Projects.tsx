import { useState, type ComponentType } from 'react'
import { projects, type ProjectItem } from '../data/content'
import { SkillPill } from './SkillPill'
import { withBase } from '../lib/url'
import { SoundCloudsCard } from './projects/cards/SoundCloudsCard'

function ProjectCard({ item, onOpenCard }: { item: ProjectItem; onOpenCard?: () => void }) {
  const Wrapper = onOpenCard ? 'button' : item.href ? 'a' : 'div'

  return (
    <Wrapper
      {...(onOpenCard
        ? { type: 'button', onClick: onOpenCard }
        : item.href
          ? { href: item.href, target: '_blank', rel: 'noreferrer' }
          : {})}
      className={`group flex w-full flex-col gap-4 rounded-[10px] p-6 text-left transition-colors duration-200 hover:bg-highlight-bg md:flex-row ${onOpenCard || item.href ? 'cursor-pointer' : ''}`}
    >
      <img
        src={withBase(item.thumbnail)}
        alt={item.title}
        className="h-[83px] w-[124px] shrink-0 rounded-lg object-cover"
      />
      <div>
        <h3 className="font-display text-base font-medium text-ink transition-colors duration-200 group-hover:text-accent">
          {item.title}
        </h3>
        <p className="mb-3 font-display text-sm font-normal text-ink transition-colors duration-200 group-hover:text-accent">
          {item.role}
        </p>
        <p className="mb-4 font-display text-sm font-light leading-relaxed text-ink">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.skills.map((s, i) => (
            <SkillPill key={`${s}-${i}`} label={s} />
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

const detailCards: Record<string, ComponentType<{ onClose: () => void }>> = {
  'Sound Clouds / ARRAY': SoundCloudsCard,
}

export function Projects() {
  const [openCard, setOpenCard] = useState<string | null>(null)
  const ActiveCardComponent = openCard ? detailCards[openCard] : null

  return (
    <section id="projects" className="scroll-mt-[92px] flex flex-col gap-6 py-12 md:py-16">
      {projects.map((item) => {
        const hasDetailCard = item.title in detailCards
        return (
          <ProjectCard
            key={item.title}
            item={item}
            onOpenCard={hasDetailCard ? () => setOpenCard(item.title) : undefined}
          />
        )
      })}

      {ActiveCardComponent && <ActiveCardComponent onClose={() => setOpenCard(null)} />}
    </section>
  )
}
