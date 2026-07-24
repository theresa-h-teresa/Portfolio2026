import { projects, type ProjectItem } from '../data/content'
import { SkillPill } from './SkillPill'
import { withBase } from '../lib/url'

function ProjectCard({ item }: { item: ProjectItem }) {
  const Wrapper = item.href ? 'a' : 'div'

  return (
    <Wrapper
      {...(item.href ? { href: item.href, target: '_blank', rel: 'noreferrer' } : {})}
      className="group flex flex-col gap-4 rounded-[10px] p-6 transition-colors duration-200 hover:bg-highlight-bg md:flex-row"
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

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-[92px] flex flex-col gap-6 py-12 md:py-16">
      {projects.map((item) => (
        <ProjectCard key={item.title} item={item} />
      ))}
    </section>
  )
}
