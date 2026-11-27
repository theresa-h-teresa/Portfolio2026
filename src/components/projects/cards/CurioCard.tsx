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
            Curio was founded by Cassie Song, and I joined her as product designer and product manager, leading the
            design system and release planning for the app. We’re building it as part of{' '}
            <a
              href={garageHref}
              target="_blank"
              rel="noreferrer"
              className="text-accent"
            >
              The Garage at Northwestern
            </a>
            ’s Jumpstart Program.
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

      <CaseStudySection
        id="curio-concept"
        heading="Snap, Log, Share"
        divider={false}
        images={conceptImages}
        onImageClick={setLightboxImage}
      >
        <p className={body}>“Show me what stopped you. I’ll print the memory.”</p>
        <p className={body}>
          The iOS app is on its way to the App Store. More of the design process will be here once it launches.
        </p>
      </CaseStudySection>
    </JournalismModalShell>

    {lightboxImage && <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />}
    </>
  )
}
