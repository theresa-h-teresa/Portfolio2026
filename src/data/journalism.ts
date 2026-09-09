export type JournalismCardKey =
  | 'about-me'
  | 'editing-leadership'
  | 'design'
  | 'broadcast'
  | 'web'
  | 'photojournalism'
  | 'diversity'
  | 'law-ethics'
  | 'marketing'

export interface JournalismTile {
  label: string
  cardKey: JournalismCardKey
}

// Grid order matches the 3x3 layout in the Figma design. The "Reporting and
// Writing" tile doesn't have a dedicated card yet in the design file, so it
// currently opens the "Web & Social Media" card as a placeholder — swap
// `cardKey` here once a dedicated card exists.
export const journalismTiles: JournalismTile[] = [
  { label: 'About Me & Self-Analytical Essay', cardKey: 'about-me' },
  { label: 'Editing, Leadership, and Team Building', cardKey: 'editing-leadership' },
  { label: 'Design', cardKey: 'design' },
  { label: 'Broadcast Journalism', cardKey: 'broadcast' },
  { label: 'Reporting and Writing', cardKey: 'web' },
  { label: 'Photojournalism', cardKey: 'photojournalism' },
  { label: 'Commitment to Diversity', cardKey: 'diversity' },
  { label: 'Law, Ethics, and News Literacy', cardKey: 'law-ethics' },
  { label: 'Marketing and Audience Engagement', cardKey: 'marketing' },
]

export interface WorkSample {
  headline: string
  outlet: string
  date: string
  category: string
  image?: string
  href?: string
}

// The five "Work Samples" showcase cards on the Journalism section, matching
// the Figma design's featured-articles grid.
export const workSamples: WorkSample[] = [
  {
    headline: 'Atlanta’s Beltline rail debate: To build or not to build?',
    outlet: 'Atlanta Community Press Collective',
    date: 'October 22, 2025',
    category: 'Investigative',
    image: '/journalism/Sample_ACPC.jpg',
    href: 'https://atlpresscollective.com/2025/10/22/atlantas-beltline-rail-debate/',
  },
  {
    headline: 'Can Chapel Hill Ease Housing Stigmas as New Neighborhoods Arise?',
    outlet: 'Chapelboro.com',
    date: 'October 27, 2023',
    category: 'Politics',
    image: '/journalism/Sample_Chapelboro.png',
    href: 'https://chapelboro.com/town-square/can-chapel-hill-ease-housing-stigmas-as-new-neighborhoods-arise',
  },
  {
    headline: 'The Art of Persistence: Eastern Market and Its Small Businesses',
    outlet: 'Asian American Journalists Association (AAJA) JCamp',
    date: 'August 18, 2023',
    category: 'Feature',
    image: '/journalism/Sample_AAJA.webp',
    href: 'https://aaja-jcamp.medium.com/the-art-of-persistence-eastern-market-and-its-small-businesses-60403260df5e',
  },
  {
    headline: 'MONEY TALKS: Inside the Inflation Surge',
    outlet: 'C-SPAN',
    date: 'StudentCam 2023 First Prize',
    category: 'Short Documentary',
    image: '/journalism/Sample_MoneyTalks.jpg',
    href: 'https://www.studentcam.org/2023-first-prize-high-school-east-money-talks-inside-the-inflation-surge-by-teresa-fang/',
  },
  {
    headline: 'US-CHINA: Survive or Thrive',
    outlet: 'C-SPAN',
    date: 'StudentCam 2021 Second Prize',
    category: 'Short Documentary',
    image: '/journalism/Sample_USChina.jpg',
    href: 'https://www.studentcam.org/2021-second-prize-middle-school-us-china-survive-or-thrive/',
  },
]
