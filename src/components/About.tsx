import type { ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { hero } from '../data/content'
import { withBase } from '../lib/url'

const linkClass = 'font-normal text-accent-light underline-offset-2 hover:underline'

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={linkClass}>
      {children}
    </a>
  )
}

export function About() {
  return (
    <section id="about" className="scroll-mt-4 py-10 font-display text-base font-light leading-relaxed text-ink lg:py-16">
      <p className="mb-6 font-mono text-sm text-ink/60">ABOUT</p>
      <p className="mb-4">
        Hi! I’m Teresa, a product builder and researcher studying Computer Science, Economics, and Journalism at
        Northwestern University. I’m currently the product manager and designer on a two-person team building{' '}
        <ExtLink href="https://curioreceipt.com/">Curio</ExtLink>, a museum-visit companion app, at{' '}
        <ExtLink href="https://www.thegarage.northwestern.edu/">The Garage</ExtLink>, Northwestern’s startup
        incubator. I lead the app’s design system and plan its initial iOS release.
      </p>
      <p className="mb-4">
        As a research assistant at Northwestern’s{' '}
        <ExtLink href="https://www.creativeinterfaces.northwestern.edu/">Creative Interfaces Research + Design Studio</ExtLink>
        , I lead early-stage product discovery and plan participatory design workshops exploring how artists use
        AI-assisted creative tools. Before Northwestern, I studied Computational Media at Georgia Tech and worked at
        the <ExtLink href="https://expressivemachinery.gatech.edu/">Expressive Machinery Lab</ExtLink>, where I
        translated user research into product requirements and prototyped interactions for creative authoring tools.
      </p>
      <p className="mb-4">
        <ExtLink href="https://nique.net/author/Teresa%20Fang">Journalism</ExtLink> taught me how to ask better
        questions. I’ve led a student{' '}
        <a href="#journalism" className={linkClass}>
          newsroom
        </a>{' '}
        and{' '}
        <ExtLink href="https://atlpresscollective.com/author/teresa-fang/">
          reported on transportation and infrastructure
        </ExtLink>{' '}
        in metro Atlanta. I also help pitch{' '}
        <ExtLink href="https://news.northwestern.edu/">Northwestern news and research</ExtLink> to the press as a
        Media Relations Associate. Those experiences shape how I interview users and make sense of competing
        priorities.
      </p>
      <p>
        Outside of class and work, I{' '}
        <ExtLink href="https://www.youtube.com/@teresazfang">make documentaries</ExtLink>, paint, hike, and spend more
        time than I planned looking for the right blocks in Minecraft.
      </p>

      <a
        href={withBase(hero.resumeHref)}
        target="_blank"
        rel="noreferrer"
        className="group mt-8 flex w-fit items-center gap-1 font-mono text-xs font-normal text-ink-soft"
      >
        <span className="underline-offset-2 group-hover:underline">View Full Resume</span>
        <ArrowUpRight className="size-3 rotate-45" />
      </a>
    </section>
  )
}
