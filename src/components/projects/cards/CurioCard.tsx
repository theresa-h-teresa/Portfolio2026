import { JournalismModalShell } from '../../journalism/JournalismModalShell'
import { useState } from 'react'
import {
  CaseLink,
  CaseStudySection,
  ImageLightbox,
  SkillGroup,
  type CaseImage,
  type CaseImageInput,
} from './CaseStudyParts'

// Curio is still in progress, so this card is intentionally short. The images are
// labeled placeholders: drop files into public/Curio/ and replace
// `{ placeholder: '…' }` with `{ src: '/Curio/<file>' }` (keeping the caption).

const siteHref = 'https://curioreceipt.com/'
const garageHref = 'https://www.thegarage.northwestern.edu/'

const tools = ['Figma', 'React Native', 'TestFlight']
const features = ['Snap', 'Log', 'Share Receipt']

const myRole = [
  'Plan the release roadmap, from the 1.0 App Store launch to a follow-up release with social features',
  'Build and maintain the design system in Figma',
  'Design the onboarding flow and App Store listing assets',
  'Run design QA on TestFlight builds before release',
  'Deliver every design a week ahead of its build, so development never waits on design',
]

const conceptImages: CaseImageInput[] = [
  { src: '/Curio/curio-landing.jpg', caption: 'curioreceipt.com: “Say hello to curio.”' },
  { placeholder: 'Receipt / share image', caption: 'A visit printed as a shareable receipt.' },
]

const body = 'font-display text-base leading-snug text-ink'

export function CurioCard({ onClose }: { onClose: () => void }) {
  const [lightboxImage, setLightboxImage] = useState<CaseImage | null>(null)

  return (
    <>
    <JournalismModalShell title="Curio" onClose={onClose}>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="lg:max-w-sm">
          <p className={body}>
            Curio is a pocket companion for art museum visits. Visitors snap the artworks that stopped them, log them,
            and share the visit as a printed-style receipt. The website is live, and the iOS app is in development.
          </p>
          <p className={`mt-3 ${body}`}>
            I’m the product manager and product designer on Curio’s two-person team, building it at{' '}
            <a href={garageHref} target="_blank" rel="noreferrer" className="text-accent">
              The Garage
            </a>
            , Northwestern’s startup incubator.
          </p>
          <div className="mt-3">
            <CaseLink href={siteHref}>Visit curioreceipt.com</CaseLink>
          </div>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row lg:max-w-md">
          <SkillGroup heading="TOOLS" items={tools} />
          <SkillGroup heading="FEATURES" items={features} />
        </div>
      </div>

      <div className="flex flex-col justify-between gap-1 border-t border-ink/10 pt-4 font-display font-normal text-[#72b0c9] sm:flex-row sm:items-baseline">
        <p className="text-3xl">IN PROGRESS</p>
        <p className="text-sm">SEP 2026-PRESENT</p>
      </div>

      <section id="curio-role" className="scroll-mt-4">
        <h3 className="mb-3 font-display text-xl font-normal text-accent">My Role</h3>
        <ul className={`m-0 flex list-disc flex-col gap-1.5 pl-5 ${body}`}>
          {myRole.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <CaseStudySection
        id="curio-concept"
        heading="Snap, Log, Share"
        images={conceptImages}
        onImageClick={setLightboxImage}
      >
        <p className={body}>“Show me what stopped you. I’ll print the memory.”</p>
        <p className={body}>
          The iOS app is on its way to the App Store. I’ll add the full design process here after launch.
        </p>
      </CaseStudySection>
    </JournalismModalShell>

    {lightboxImage && <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />}
    </>
  )
}
