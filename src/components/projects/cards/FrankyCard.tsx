import { useState } from 'react'
import { JournalismModalShell } from '../../journalism/JournalismModalShell'
import {
  CaseStudySection,
  ImageLightbox,
  SkillGroup,
  type CaseImage,
  type CaseImageInput,
} from './CaseStudyParts'

// Franky: most visuals are still labeled placeholders. To swap one in,
// drop the file into public/Franky/ and replace `{ placeholder: '…' }` with
// `{ src: '/Franky/<file>' }` (keeping the caption).

const methods = ['User Interviews', 'Personas', 'Competitive Analysis', 'MVP Scoping', 'Test Planning']
const features = ['Quest Board', 'Focus Quest Mode', 'Rewards & World Building', 'Physical Quest Tokens']

const problemImages: CaseImageInput[] = [
  { src: '/Thumbnail_Franky.png', caption: 'Early Franky concept.' },
  { placeholder: 'Personas', caption: 'Three personas from interviews with eight students.' },
]
const conceptImages: CaseImageInput[] = [
  { placeholder: 'Quest board', caption: 'Quest board: 3–6 quests, each with a time estimate and a reward preview.' },
  { placeholder: 'Focus mode', caption: 'Focus Quest Mode: a 5–10 minute timer, a progress bar, and a line of story.' },
  { placeholder: 'World grid', caption: 'Rewards: place an unlocked item into your own fantasy world.' },
  { placeholder: 'Quest tokens & dock', caption: 'Physical quest tokens dropped into a dock start the quest.' },
]
const nextImages: CaseImageInput[] = [
  { placeholder: 'Functional prototype 1', caption: 'The first of two functional prototypes.' },
  { placeholder: 'Functional prototype 2', caption: 'The second functional prototype.' },
]

const body = 'font-display text-base leading-snug text-ink'

export function FrankyCard({ onClose }: { onClose: () => void }) {
  const [lightboxImage, setLightboxImage] = useState<CaseImage | null>(null)

  return (
    <>
      <JournalismModalShell title="Franky" onClose={onClose}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="lg:max-w-sm">
            <p className={body}>
              Franky is a physical-digital focus companion for middle schoolers (ages 9–15) with ADHD. A student drops
              a quest token into a small dock, and it kicks off a short, game-like focus session for their homework,
              with real-time feedback and a reward at the end.
            </p>
            <p className={`mt-3 ${body}`}>
              I’m the founder and product lead. I took Franky from discovery to a defined MVP: interviewing 8 students,
              building 3 personas, and testing 2 concepts. Then I built two functional prototypes.
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:max-w-md">
            <SkillGroup heading="METHODS" items={methods} />
            <SkillGroup heading="MVP FEATURES" items={features} />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-1 border-t border-ink/10 pt-4 font-display font-normal text-[#72b0c9] sm:flex-row sm:items-baseline">
          <p className="text-3xl">INDEPENDENT PRODUCT VENTURE</p>
          <p className="text-sm">DEC 2025-PRESENT</p>
        </div>

        <CaseStudySection
          id="franky-problem"
          heading="The Problem"
          divider={false}
          images={problemImages}
          onImageClick={setLightboxImage}
        >
          <p className={body}>
            Students with ADHD often can start a task. The hard part is staying with it once something more
            stimulating is nearby. Most tools remind kids to begin; few help them through the first critical minutes,
            when tasks are most often abandoned.
          </p>
          <p className={body}>
            Existing products each cover one piece. Octopus Watch gives reminders that are easy to ignore. Routio
            structures routines but doesn’t sustain focus. Habitica gamifies tasks, but its rewards feel abstract.
          </p>
        </CaseStudySection>

        <CaseStudySection
          id="franky-concept"
          heading="Concept & MVP"
          images={conceptImages}
          onImageClick={setLightboxImage}
        >
          <p className={body}>
            Franky turns homework and chores into quests. Finishing one unlocks items, places, and creatures that grow
            a personal fantasy world, so effort becomes something you can see and build on. It draws on Dungeons &amp;
            Dragons, Animal Crossing, and Pokémon Sleep.
          </p>
          <p className={body}>
            The MVP is a quest board, a timed Focus Quest Mode, rewards placed into a world grid, and low-fidelity
            physical tokens. The tokens test whether a physical ritual actually makes students more committed.
          </p>
        </CaseStudySection>

        <CaseStudySection
          id="franky-next"
          heading="Scoping Down & Prototyping"
          images={nextImages}
          onImageClick={setLightboxImage}
        >
          <p className={body}>
            Mentor feedback pushed me to cut further. Instead of a full worldbuilding game, the first version tests
            one core loop: start a quest, stay in a short focus session, and earn a reward. The bigger ideas (an AI
            “dungeon master,” multiplayer quests, a parent app) are parked for later.
          </p>
          <p className={body}>
            I built two functional prototypes of that loop to test with students through I Can Fly. Each test measures
            time spent in focus mode, how fun students rate it, and whether they choose to start a second quest.
          </p>
        </CaseStudySection>
      </JournalismModalShell>

      {lightboxImage && <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />}
    </>
  )
}
