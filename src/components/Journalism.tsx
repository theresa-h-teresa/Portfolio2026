import { useState, type ComponentType } from 'react'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { type JournalismCardKey } from '../data/journalism'
import { withBase } from '../lib/url'
import { WorkSamples } from './journalism/WorkSamples'
import { PortfolioDropdown } from './journalism/PortfolioDropdown'
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
      <div className="mb-4 flex items-start gap-8 font-mono text-xs leading-relaxed text-ink">
        <ArrowRight className="mt-0.5 size-4 shrink-0" />
        <p>I have been doing journalism since 2018. Here are some of my most meaningful works.</p>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <WorkSamples />
        <PortfolioDropdown onSelect={setActiveCard} />
      </div>

      <a
        href={withBase('/Fang_Resume_Journalism.pdf')}
        target="_blank"
        rel="noreferrer"
        className="group flex w-fit cursor-pointer items-center gap-1 font-mono text-xs text-ink-soft"
      >
        <span className="underline-offset-2 group-hover:underline">View Full Journalism Resume</span>
        <ArrowUpRight className="size-3 rotate-45" />
      </a>

      {ActiveCardComponent && <ActiveCardComponent onClose={() => setActiveCard(null)} />}
    </section>
  )
}
