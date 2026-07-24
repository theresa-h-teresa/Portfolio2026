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
