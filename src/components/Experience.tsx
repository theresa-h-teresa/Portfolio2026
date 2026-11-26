import { experience, leadership, type ExperienceItem } from '../data/content'
import { SkillPill } from './SkillPill'
import { withBase } from '../lib/url'

function ExperienceCard({ item }: { item: ExperienceItem }) {
  const Wrapper = item.href ? 'a' : 'article'

  return (
    <Wrapper
      {...(item.href
        ? {
            href: item.href.startsWith('/') ? withBase(item.href) : item.href,
            target: '_blank',
            rel: 'noreferrer',
          }
        : {})}
      className={`group block rounded-[10px] border border-ink p-6 no-underline transition-colors duration-200 hover:bg-highlight-bg ${item.href ? 'cursor-pointer' : ''}`}
    >
      <h3
        className={`font-display text-base font-medium text-ink underline-offset-3 transition-colors duration-200 group-hover:text-accent ${item.href ? 'group-hover:underline group-focus-visible:underline' : ''}`}
      >
        {item.role} • {item.org}
      </h3>
      <p className="mb-3 font-display text-sm text-date">{item.date}</p>
      <p className="mb-4 font-display text-sm font-light leading-relaxed text-ink">{item.description}</p>
      <div className="flex flex-wrap gap-2">
        {item.skills.map((s, i) => (
          <SkillPill key={`${s}-${i}`} label={s} />
        ))}
      </div>
    </Wrapper>
  )
}

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-4 flex flex-col gap-8 pt-8 pb-12 md:pt-10 md:pb-16">
      <p className="font-mono text-sm text-ink/60">EXPERIENCE</p>

      {experience.map((item) => (
        <ExperienceCard key={item.role} item={item} />
      ))}

      <p className="font-mono text-sm text-ink/60">LEADERSHIP</p>

      {leadership.map((item) => (
        <ExperienceCard key={item.role} item={item} />
      ))}
    </section>
  )
}
