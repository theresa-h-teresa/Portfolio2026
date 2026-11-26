import { useState } from 'react'
import { JournalismModalShell } from '../../journalism/JournalismModalShell'
import { CaseLink, CaseStudySection, ImageLightbox, SkillGroup, type CaseImage } from './CaseStudyParts'

const siteHref = 'https://teresafang.net/'

const tools = ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'GitHub Pages', 'Claude Code']
const features = ['Case-Study Cards', 'Image Lightbox', 'Journalism Portfolio', 'Section Navigation', 'Hover States']

const dir = '/portfolio-case'

const conceptImages: CaseImage[] = [
  {
    src: `${dir}/concept-title-card.jpg`,
    caption: 'The “home” window: “hi! i’m teresa,” with hand-drawn icons for each section.',
  },
  {
    src: `${dir}/concept-freeform-canvas.jpg`,
    caption: 'An early freeform canvas, with draggable windows on a blueprint grid.',
  },
  {
    src: `${dir}/concept-color-palette.jpg`,
    caption: 'The first color palette: Fog, Aegean Blue, Ocean, Goldfish, and Peacock.',
  },
  {
    src: `${dir}/concept-landing.jpg`,
    thumb: `${dir}/concept-landing-thumb.jpg`,
    caption: 'A scrolling landing-page concept built around a betta fish illustration.',
  },
]
const finalImages: CaseImage[] = [
  {
    src: `${dir}/final-hero.jpg`,
    caption: 'The final site: a fixed intro and section navigation beside a scrolling column.',
  },
  {
    src: `${dir}/final-projects.jpg`,
    caption: 'Project cards with thumbnails, roles, and skill pills.',
  },
  {
    src: `${dir}/final-case-study.jpg`,
    caption: 'A case-study card, which kept the dark window header and [ x ] from the concept.',
  },
  {
    src: `${dir}/final-lightbox.jpg`,
    caption: 'Click any case-study image to enlarge it, with a close button and caption.',
  },
]

const body = 'font-display text-base leading-snug text-ink'

export function PortfolioCard({ onClose }: { onClose: () => void }) {
  const [lightboxImage, setLightboxImage] = useState<CaseImage | null>(null)

  return (
    <>
      <JournalismModalShell title="teresafang.net" onClose={onClose}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="lg:max-w-sm">
            <p className={body}>
              This portfolio is a project in its own right. I designed and built it to bring my product, research,
              design, and journalism work together in one place that feels like me.
            </p>
            <p className={`mt-3 ${body}`}>
              It’s a React and TypeScript site built with Vite and styled with Tailwind CSS. GitHub Actions deploys it
              to GitHub Pages at teresafang.net, and I used Claude Code as a coding partner throughout.
            </p>
            <div className="mt-3">
              <CaseLink href={siteHref}>Visit teresafang.net</CaseLink>
            </div>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row lg:max-w-md">
            <SkillGroup heading="TOOLS" items={tools} />
            <SkillGroup heading="FEATURES" items={features} />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-1 border-t border-ink/10 pt-4 font-display font-normal text-[#72b0c9] sm:flex-row sm:items-baseline">
          <p className="text-3xl">PERSONAL PORTFOLIO</p>
          <p className="text-sm">2026-PRESENT</p>
        </div>

        <CaseStudySection
          id="portfolio-concept"
          heading="Concept"
          divider={false}
          images={conceptImages}
          onImageClick={setLightboxImage}
        >
          <p className={body}>
            I started with a playful idea: the site as a desktop of windows. A “home” window greeted visitors with
            “hi! i’m teresa,” and hand-drawn orange icons opened about, research, product and design, journalism, and
            CV windows.
          </p>
          <p className={body}>
            I explored a freeform canvas where those windows sat on a blueprint grid. The palette was pulled from the
            blues and oranges of goldfish and peacocks.
          </p>
        </CaseStudySection>

        <CaseStudySection
          id="portfolio-final"
          heading="Final Site"
          images={finalImages}
          onImageClick={setLightboxImage}
        >
          <p className={body}>
            The final site trades the freeform canvas for something faster to scan. The intro and section navigation
            stay fixed on the left while experience, projects, and journalism scroll on the right.
          </p>
          <p className={body}>
            The window idea lives on in the case-study cards: dark headers, a [ x ] to close, and images you can
            enlarge with captions. Warm cream and burnt-orange accents carry the concept’s orange forward.
          </p>
          <div className="mt-1">
            <CaseLink href={siteHref}>Visit teresafang.net</CaseLink>
          </div>
        </CaseStudySection>
      </JournalismModalShell>

      {lightboxImage && <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />}
    </>
  )
}
