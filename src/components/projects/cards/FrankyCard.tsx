import { useState, type ReactNode } from 'react'
import { JournalismModalShell } from '../../journalism/JournalismModalShell'
import {
  CaseLink,
  CaseStudySection,
  ImageLightbox,
  SkillGroup,
  type CaseImage,
  type CaseImageInput,
} from './CaseStudyParts'

// Screenshots (close-ups and one full screen) are from the playable web prototype, in public/Franky/.
// To add the personas, drop the image into public/Franky/ and add it to problemImages.

const dir = '/Franky'

// The playable prototype (a claude.ai artifact). The grown-up view is the same artifact with #parent.
const kidAppHref = 'https://claude.ai/artifact/R5uH2N5JrB6DaduYy9nJ2z'
const grownUpAppHref = `${kidAppHref}#parent`

const methods = ['User Interviews', 'Personas', 'Competitive Analysis', 'MVP Scoping', 'Figma Prototyping', 'Test Planning']
const features = ['Quest Board', 'Focus Quest Mode', 'Rewards & World Building', 'Physical Quest Tokens', 'Grown-up View']

const problemImages: CaseImageInput[] = [
  { src: '/Thumbnail_Franky.png', caption: 'Early Franky concept.' },
]
const conceptImages: CaseImage[] = [
  {
    src: `${dir}/close-quest-board.jpg`,
    caption: 'Quest Board: each quest shows its time, deadline, reward, hint, and token number.',
  },
  {
    src: `${dir}/close-quest-ready.jpg`,
    caption: 'Dropping in a token opens Quest Ready: the objective, a 5–10 minute timer, the reward, and a tip.',
  },
]
const kidImages: CaseImage[] = [
  {
    src: `${dir}/proto-focus.jpg`,
    caption: 'Focus Quest Mode: a countdown, a line of story, and Franky the narrator. Friends join along the road.',
  },
  {
    src: `${dir}/close-reward.jpg`,
    caption: 'Reward Unlocked, with a quick “Did you finish?” self-report before the reward is claimed.',
  },
  {
    src: `${dir}/close-world.jpg`,
    caption: 'My World: the Magic Lantern brings fireflies and villagers. Drag anything to rearrange it.',
  },
  {
    src: `${dir}/close-home.jpg`,
    caption: 'Home: goals with progress bars, and the latest reward.',
  },
]
const grownUpImages: CaseImage[] = [
  {
    src: `${dir}/close-add-quest.jpg`,
    caption: 'Adding a quest, with a preview of exactly what the child will see on their board.',
  },
  {
    src: `${dir}/close-grownup-dashboard.jpg`,
    caption: 'The grown-up dashboard: what the child is doing right now, their progress, and the quests on their board.',
  },
]

const body = 'font-display text-base leading-snug text-ink'

/** A design decision: what I chose (bold), then why. */
function Choice({ title, children }: { title: string; children: ReactNode }) {
  return (
    <li>
      <span className="font-medium">{title}</span> {children}
    </li>
  )
}

function ChoiceList({ children }: { children: ReactNode }) {
  return <ul className={`m-0 flex list-disc flex-col gap-2 pl-5 ${body}`}>{children}</ul>
}

function PrototypeLinks() {
  return (
    <div className="flex flex-col gap-1">
      <CaseLink href={kidAppHref}>Play the kid app</CaseLink>
      <CaseLink href={grownUpAppHref}>Open the grown-up view</CaseLink>
    </div>
  )
}

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
              building 3 personas, and testing 2 concepts. Then I built two functional prototypes: a clickable Figma
              prototype and a playable web app with a companion view for grown-ups.
            </p>
            <div className="mt-3">
              <PrototypeLinks />
            </div>
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
          imageColumn
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
            Mentor feedback pushed me to cut the MVP down to one core loop: pick a quest, drop in its token, stay
            with a short focus session, and earn a reward. Everything in the prototype exists to test that loop.
          </p>
        </CaseStudySection>

        <CaseStudySection
          id="franky-kid-app"
          heading="The Kid App"
          images={kidImages}
          imageColumn
          onImageClick={setLightboxImage}
        >
          <p className={body}>
            The kid app is the whole quest loop. Its job is to answer one question: once a student has started, does
            a short, story-driven session keep them going until the task is done? Each choice below serves that.
          </p>
          <ChoiceList>
            <Choice title="Starting is a physical act.">
              A quest only begins when its token goes into the dock. Picking up a token and dropping it in is a small
              ritual, and I want to see whether it makes students more committed than tapping a button.
            </Choice>
            <Choice title="Short, adjustable sessions.">
              Quests run 5 or 10 minutes, short enough to finish before attention runs out. The timer adjusts in
              5-minute steps, so testing can compare lengths.
            </Choice>
            <Choice title="A narrator instead of a scoreboard.">
              Franky’s lines change as the timer runs (“Keep going, the treasure is close!”), so encouragement arrives
              in the minutes when kids usually drift off. I left out XP and levels, since long-term leveling was
              outside the MVP.
            </Choice>
            <Choice title="Honesty before the reward.">
              Before claiming anything, the student answers “Did you finish?”. “Not yet” offers five more minutes or a
              return to the board, so the reward always stands for real work.
            </Choice>
            <Choice title="Rewards you can see.">
              Each reward is a piece of the student’s own world, and the world responds: a tavern brings houses and
              villagers, a lantern brings fireflies. Students can place pieces anywhere and drag them around later,
              so the world feels like theirs.
            </Choice>
            <Choice title="A beat before the next quest.">
              “Ready for another quest?” appears about a second after a piece is placed, so the student gets to watch
              their world change first. Starting another quest from there is one of the things testing measures.
            </Choice>
            <Choice title="Calm and easy to read.">
              Warm parchment and forest green, a book-style serif, and thin progress bars keep the screen quiet, so
              the timer and quest text read at a glance. Animations turn off for anyone who has reduced motion set
              on their device.
            </Choice>
            <Choice title="Friends along the way.">
              Placeholder friends join partway through a quest and walk alongside the student, to test whether company
              helps students stay with a task.
            </Choice>
          </ChoiceList>
        </CaseStudySection>

        <CaseStudySection
          id="franky-grownups"
          heading="The Grown-up View"
          images={grownUpImages}
          imageColumn
          onImageClick={setLightboxImage}
        >
          <p className={body}>
            Franky only works if its quests match a student’s real homework, and a parent or teacher knows what that
            is. The grown-up view lets them set up quests without taking over the student’s screen, and check in on
            how it’s going.
          </p>
          <ChoiceList>
            <Choice title="The form mirrors the quest card.">
              The fields match what appears on the student’s board: what to do, focus time, deadline, reward, a hint,
              and which token starts it. A live preview shows exactly what the student will see, so mistakes are
              caught before they reach the board.
            </Choice>
            <Choice title="A voice from home.">
              A grown-up can add a custom tip. It shows on Quest Ready and during the timer as “Tip from your
              grown-up,” so a parent can encourage from the sidelines instead of interrupting.
            </Choice>
            <Choice title="A check-in, not a control panel.">
              The dashboard shows what the student is doing right now, their progress toward goals, and their world
              as they build it, with the latest piece marked “Just placed.” It refreshes every 15 seconds and has a
              Refresh button, which is enough to glance at.
            </Choice>
            <Choice title="Only what testing needs.">
              A parent app was outside the MVP’s scope, so there are no accounts, messages, or settings: just quests,
              progress, and the world. It shares its data with the kid app, so a quest added here appears on the
              student’s board right away.
            </Choice>
          </ChoiceList>
        </CaseStudySection>

        <CaseStudySection
          id="franky-prototypes"
          heading="Prototyping & Testing"
          images={[]}
          imageColumn
          onImageClick={setLightboxImage}
        >
          <p className={body}>
            I built the loop twice. The Figma prototype is a clickable path through all six quests, from the Quest
            Board to the finished world, plus the grown-up screens. The playable web app runs it for real, with a
            working timer, rewards that save, and keys 1–6 that stand in for the six tokens, so a keyboard-style
            token reader can start a quest from a cardboard dock without extra code.
          </p>
          <p className={body}>
            Next, I’ll test it with students through I Can Fly. Each session measures time spent in focus mode, how
            fun students rate it, and whether they choose to start a second quest.
          </p>
          <div className="mt-1">
            <PrototypeLinks />
          </div>
        </CaseStudySection>
      </JournalismModalShell>

      {lightboxImage && <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />}
    </>
  )
}
