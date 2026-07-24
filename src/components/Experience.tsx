import { ArrowUpRight } from 'lucide-react'
import { experience, leadership, hero, type ExperienceItem } from '../data/content'
import { SkillPill } from './SkillPill'
import { withBase } from '../lib/url'

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <article className="group rounded-[10px] p-6 transition-colors duration-200 hover:bg-highlight-bg">
      <h3 className="font-display text-base font-medium text-ink transition-colors duration-200 group-hover:text-accent">
        {item.role} • {item.org}
      </h3>
      <p className="mb-3 font-display text-sm text-date">{item.date}</p>
      <p className="mb-4 font-display text-sm font-light leading-relaxed text-ink">{item.description}</p>
      <div className="flex flex-wrap gap-2">
        {item.skills.map((s, i) => (
          <SkillPill key={`${s}-${i}`} label={s} />
        ))}
      </div>
    </article>
  )
}

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-[92px] flex flex-col gap-8 py-12 md:py-16">
      {experience.map((item) => (
        <ExperienceCard key={item.role} item={item} />
      ))}

      <p className="font-mono text-sm text-ink/60">LEADERSHIP</p>

      {leadership.map((item) => (
        <ExperienceCard key={item.role} item={item} />
      ))}

      <a
        href={withBase(hero.resumeHref)}
        target="_blank"
        rel="noreferrer"
        className="group flex w-fit items-center gap-1 font-mono text-xs text-ink-soft"
      >
        <span className="underline-offset-2 group-hover:underline">View Full Resume</span>
        <ArrowUpRight className="size-3 rotate-45" />
      </a>
    </section>
  )
}
