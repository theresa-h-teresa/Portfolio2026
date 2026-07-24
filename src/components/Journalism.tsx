import { useState, type ComponentType } from 'react'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { journalismTiles, type JournalismCardKey } from '../data/journalism'
import { withBase } from '../lib/url'
import { AboutMeCard } from './journalism/cards/AboutMeCard'
import { EditingLeadershipCard } from './journalism/cards/EditingLeadershipCard'
import { DesignCard } from './journalism/cards/DesignCard'
import { BroadcastCard } from './journalism/cards/BroadcastCard'
import { WebCard } from './journalism/cards/WebCard'
import { PhotojournalismCard } from './journalism/cards/PhotojournalismCard'
import { DiversityCard } from './journalism/cards/DiversityCard'
import { LawEthicsCard } from './journalism/cards/LawEthicsCard'
import { MarketingCard } from './journalism/cards/MarketingCard'

const cardComponents: Record<JournalismCardKey, ComponentType<{ onClose: () => void }>> = {
  'about-me': AboutMeCard,
  'editing-leadership': EditingLeadershipCard,
  design: DesignCard,
  broadcast: BroadcastCard,
  web: WebCard,
  photojournalism: PhotojournalismCard,
  diversity: DiversityCard,
  'law-ethics': LawEthicsCard,
  marketing: MarketingCard,
}

export function Journalism() {
  const [activeCard, setActiveCard] = useState<JournalismCardKey | null>(null)
  const ActiveCardComponent = activeCard ? cardComponents[activeCard] : null

  return (
    <section id="journalism" className="scroll-mt-[92px] py-12 md:py-16">
      <div className="mb-6 flex items-start gap-8 font-mono text-xs leading-relaxed text-ink">
        <ArrowRight className="mt-0.5 size-4 shrink-0" />
        <p>This is my award-winning journalism portfolio for 2025 Journalist of the Year of North Carolina.</p>
      </div>

      <p className="mb-8 font-display text-sm font-normal leading-relaxed text-ink">
        From age 11, beginning as a Kid Reporter for Scholastic Kids Press, I now have seven years of experience in
        journalism. Looking back on all these years, I'm both excited for the future and grateful for these
        experiences. Journalism has shown itself as an avenue to unravel the world. I proudly embraced my
        experiences, my connections, and my ideas to be a leader and an initiator, motivating me to try new things
        from a social justice perspective.
      </p>

      <div className="flex flex-col gap-4">
        {journalismTiles.map((tile) => (
          <button
            key={tile.label}
            type="button"
            onClick={() => setActiveCard(tile.cardKey)}
            className="w-fit rounded-[20px] border border-ink bg-pill-bg px-6 py-3 text-left font-mono text-base text-ink transition-colors hover:bg-ink hover:text-bg"
          >
            {tile.label}
          </button>
        ))}
      </div>

      <a
        href={withBase('/Fang_Resume_Journalism.pdf')}
        target="_blank"
        rel="noreferrer"
        className="group mt-8 flex w-fit items-center gap-1 font-mono text-xs text-ink-soft"
      >
        <span className="underline-offset-2 group-hover:underline">View Full Journalism Resume</span>
        <ArrowUpRight className="size-3 rotate-45" />
      </a>

      {ActiveCardComponent && <ActiveCardComponent onClose={() => setActiveCard(null)} />}
    </section>
  )
}
