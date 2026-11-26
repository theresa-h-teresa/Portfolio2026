import { useState } from 'react'
import { JournalismModalShell } from '../../journalism/JournalismModalShell'
import {
  CaseLink,
  CaseStudySection,
  ImageLightbox,
  SkillGroup,
  type CaseImage,
  type CaseImageInput,
} from './CaseStudyParts'

const prototypeHref =
  'https://www.figma.com/proto/pfGeYfS4Bg8lGLQK5lrE5L/Final-Project?node-id=1-2&t=QS9skht5aI3EsaZh-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
const guidelinesHref = '/changi-case/changi-brand-guidelines.pdf'
const brandAnalysisHref = '/Changi/LMC2720_Final Project.pdf'

const tools = ['Figma', 'Components & Variants', 'Prototyping']
const methods = ['Brand Analysis', 'Identity Prism', 'Information Architecture', 'Wireframing', 'User Feedback']
const deliverables = ['Brand Guidelines', 'Logo System', 'Color Palette', 'Type System', 'Icon Set', '20+ Hi-Fi Pages']

const dir = '/changi-case'

const body = 'font-display text-base leading-snug text-ink'

// Grid order: diagram | brand audit, then the identity-prism paragraph | prism image.
const researchImages: CaseImageInput[] = [
  {
    src: `${dir}/research-narrative-infrastructure.jpg`,
    caption:
      'Framing the airport as narrative infrastructure: institutional values and interface constraints feed a storytelling interface built from brand, information architecture, and interaction.',
  },
  {
    src: `${dir}/research-our-brand.jpg`,
    caption: 'Brand audit: the current site is efficient but offers little visual comfort or awe.',
  },
  {
    key: 'identity-prism-text',
    content: (
      <p className={body}>
        An identity prism defined the brand I was designing toward. The airport would act as a “caretaker” guiding
        travelers and a “curator of journeys” connecting destinations.
      </p>
    ),
  },
  {
    src: `${dir}/research-identity-prism.jpg`,
    caption: 'Identity prism: physique, personality, relationship, culture, reflection, and self-image.',
  },
]
const identityImages: CaseImage[] = [
  {
    src: `${dir}/identity-logo.jpg`,
    caption: 'A logo with a dynamic and a static version: crayon-textured warm colors with a clean sans-serif wordmark.',
  },
  {
    src: `${dir}/identity-color.jpg`,
    caption: 'Color palette built around Changi’s four signature colors: red, yellow, purple, and gray.',
  },
  {
    src: `${dir}/identity-typography.jpg`,
    caption: 'Type system: Dubai Bold for headlines, Noto Sans SC for body, Segoe Print for quotes and captions.',
  },
  {
    src: `${dir}/identity-iconography.jpg`,
    caption: 'An icon set for core traveler tasks, from maps and immigration to baggage and transportation.',
  },
]
const prototypeImages: CaseImage[] = [
  {
    src: `${dir}/proto-home.jpg`,
    thumb: `${dir}/proto-home-thumb.jpg`,
    caption: 'Home page: “go places you’ve dreamed of,” with search, an arriving/departing toggle, and quick links.',
  },
  {
    src: `${dir}/proto-at-changi.jpg`,
    thumb: `${dir}/proto-at-changi-thumb.jpg`,
    caption: 'At Changi: curated guides to attractions, facilities, and services.',
  },
  {
    src: `${dir}/proto-attractions.jpg`,
    thumb: `${dir}/proto-attractions-thumb.jpg`,
    caption: 'Attractions: an immersive, image-led page for experiences like the Jewel.',
  },
  {
    src: `${dir}/proto-overview.jpg`,
    caption: 'The three prototyped pages side by side, with notes on future work.',
  },
]

export function ChangiCard({ onClose }: { onClose: () => void }) {
  const [lightboxImage, setLightboxImage] = useState<CaseImage | null>(null)

  return (
    <>
      <JournalismModalShell title="Singapore Changi Airport" onClose={onClose}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="lg:max-w-sm">
            <p className={body}>
              For my final project in a visual design course (LMC 2720) at Georgia Tech, I redesigned the brand and
              digital experience of Singapore Changi Airport, the 13-time Skytrax World’s Best Airport.
            </p>
            <p className={`mt-3 ${body}`}>
              I treated the airport’s website as civic infrastructure and took it from wireframes to 20+ high-fidelity
              pages. Along the way I built a full visual identity system with brand guidelines, typography, and
              information architecture.
            </p>
            <div className="mt-3">
              <CaseLink href={prototypeHref}>View the Figma prototype</CaseLink>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:max-w-md">
            <div className="flex flex-col gap-6 sm:flex-row">
              <SkillGroup heading="TOOLS" items={tools} />
              <SkillGroup heading="METHODS" items={methods} />
            </div>
            <SkillGroup heading="DELIVERABLES" items={deliverables} />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-1 border-t border-ink/10 pt-4 font-display font-normal text-[#72b0c9] sm:flex-row sm:items-baseline">
          <p className="text-3xl">VISUAL DESIGN COURSE PROJECT</p>
          <p className="text-sm">GEORGIA TECH, AUG-DEC 2025</p>
        </div>

        <CaseStudySection
          id="changi-research"
          heading="Brand Research & Strategy"
          divider={false}
          images={researchImages}
          fit="contain"
          onImageClick={setLightboxImage}
        >
          <p className={body}>
            Changi handled about 67.7 million passengers in 2024 and is known for far more than flights: the Jewel’s
            indoor waterfall, gardens, art, and shopping. I summed up its identity in five words: efficient, elevated,
            connective, local-appreciating, and science-nature.
          </p>
          <p className={body}>
            The brand rests on four values: elegance, efficiency, comfort, and awe. The existing website delivered on
            efficiency but not much else, with flashing videos, outdated stock images, modular buttons, and too much
            negative space. So I framed the airport as narrative infrastructure: a civic interface that can tell the
            story of a nation to the millions of people moving through it.
          </p>
          <div className="mt-1">
            <CaseLink href={brandAnalysisHref}>Read the brand analysis (PDF)</CaseLink>
          </div>
        </CaseStudySection>

        <CaseStudySection
          id="changi-identity"
          heading="Visual Identity System"
          images={identityImages}
          onImageClick={setLightboxImage}
        >
          <p className={body}>
            I redesigned the logo with a dynamic and a static version to balance personal whimsy with professional
            elegance. A crayon-like texture in warm colors evokes childlike nostalgia, while a simple black-and-white
            sans-serif wordmark keeps it polished.
          </p>
          <p className={body}>
            The palette keeps Changi’s four signature colors at its center. They rarely appear together, which makes
            them instantly recognizable, and their closeness on the color wheel mirrors the closeness of Singapore’s
            cultures. The type system pairs Dubai Bold headlines with Noto Sans SC body text and a handwritten Segoe
            Print for quotes and captions.
          </p>
          <div className="mt-1">
            <CaseLink href={guidelinesHref}>Open the brand guidelines (PDF)</CaseLink>
          </div>
        </CaseStudySection>

        <CaseStudySection
          id="changi-prototypes"
          heading="High-Fidelity Prototypes"
          images={prototypeImages}
          onImageClick={setLightboxImage}
          belowImages={
            <p className={body}>
              Next time, I’d also document my design decisions as I go, so the reasoning behind each choice is as
              visible as the final screens.
            </p>
          }
        >
          <p className={body}>
            I prototyped the Home, At Changi, and Attractions pages in Figma. A reusable component library (nav bar,
            cards, buttons) with variants kept every page consistent.
          </p>
          <p className={body}>
            A friend who tested the mockups found the colors and button borders in the Home page’s Quick Links
            distracting next to the rest of the site. Given more time, I would simplify those icons or remove their
            enclosures to balance where the eye lands.
          </p>
          <div className="mt-1">
            <CaseLink href={prototypeHref}>Open the final Figma prototype</CaseLink>
          </div>
        </CaseStudySection>
      </JournalismModalShell>

      {lightboxImage && <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />}
    </>
  )
}
