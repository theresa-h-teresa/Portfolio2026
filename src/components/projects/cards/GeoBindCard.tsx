import { useState } from 'react'
import { JournalismModalShell } from '../../journalism/JournalismModalShell'
import { withBase } from '../../../lib/url'
import { CaseLink, CaseStudySection, ImageLightbox, SkillGroup, type CaseImage } from './CaseStudyParts'

const dir = '/geobind-case'
const posterHref = '/GeoBind/L12-GeoBindCementFinalPoster.png'

const methods = ['Stakeholder Interviews', 'Systems Mapping', 'Personas', 'Experiment Design', 'Market Analysis', 'Pitching']
const outcomes = ['Investor’s Award', 'Innovation Award', '24 Stakeholders', '11 Interviews']

const discoveryImages: CaseImage[] = [
  {
    src: `${dir}/team-brownfield-association.jpg`,
    caption: 'Our team at a Georgia Brownfield Association panel on the Westside Lead Superfund site.',
  },
  {
    src: `${dir}/systems-map.jpg`,
    caption: 'The systems map we built from interviews, linking brownfields to health, property values, and landfilled soil.',
  },
  {
    src: `${dir}/site-dig-and-haul.jpg`,
    caption: 'A West Atlanta site visit: dig-and-haul remediation in progress.',
  },
  {
    src: `${dir}/site-vacant-house.jpg`,
    caption: 'A vacant house on contaminated land, the kind of site where redevelopment stalls.',
  },
]
const pivotImages: CaseImage[] = [
  {
    src: `${dir}/landfill-route.jpg`,
    caption: 'The insight behind the pivot: hauled soil travels about three hours each way to the nearest landfill.',
  },
]
const testingImages: CaseImage[] = [
  {
    src: `${dir}/test-mixing.jpg`,
    caption: 'Mixing soil and cement samples at different ratios.',
  },
  {
    src: `${dir}/test-curing.jpg`,
    caption: 'Soil–cement mixes curing in cups before testing.',
  },
  {
    src: `${dir}/test-samples.jpg`,
    caption: 'Cured samples, labeled by soil-to-cement ratio.',
  },
  {
    src: `${dir}/test-instron.jpg`,
    caption: 'Testing a sample’s strength in an Instron machine.',
  },
]
const pitchImages: CaseImage[] = [
  {
    src: `${dir}/showcase-team.jpg`,
    caption: 'Presenting GeoBind with our samples and poster at the Grand Challenges showcase.',
  },
]
const poster: CaseImage = {
  src: `${dir}/poster.jpg`,
  caption: 'Our final poster for the Grand Challenges showcase.',
}

const body = 'font-display text-base leading-snug text-ink'

export function GeoBindCard({ onClose }: { onClose: () => void }) {
  const [lightboxImage, setLightboxImage] = useState<CaseImage | null>(null)

  return (
    <>
      <JournalismModalShell title="GeoBind Cement" onClose={onClose}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="lg:max-w-sm">
            <p className={body}>
              GeoBind is our Georgia Tech Grand Challenges team’s proposal to lock lead-contaminated West Atlanta soil
              inside cement on site, so it becomes construction material instead of landfill waste.
            </p>
            <p className={`mt-3 ${body}`}>
              I was the team’s product manager. Our five-person team was otherwise all engineers (environmental,
              mechanical, industrial, and materials science), and my job was to keep the work pointed at a real
              customer: I led our stakeholder outreach and interviews, turned what we heard into product priorities,
              and built the implementation and commercialization roadmap we pitched. GeoBind won the Grand Challenges
              Investor’s Award and Innovation Award.
            </p>
            <div className="mt-3">
              <CaseLink href={posterHref}>View the final poster</CaseLink>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:max-w-md">
            <SkillGroup heading="METHODS" items={methods} />
            <SkillGroup heading="OUTCOMES" items={outcomes} />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-1 border-t border-ink/10 pt-4 font-display font-normal text-[#72b0c9] sm:flex-row sm:items-baseline">
          <p className="text-3xl">GEORGIA TECH GRAND CHALLENGES</p>
          <p className="text-sm">AUG 2025-MAY 2026</p>
        </div>

        <CaseStudySection
          id="geobind-discovery"
          heading="Discovery: 24 Stakeholders"
          divider={false}
          images={discoveryImages}
          onImageClick={setLightboxImage}
        >
          <p className={body}>
            We started in the fall with a broad brief: lead in West Atlanta’s soil, and a hunch that plants could pull
            it out. Before designing anything, I set up our outreach so each conversation led to the next. We began
            with two university researchers, and their referrals took us to EPA and Georgia EPD engineers, Superfund
            project managers, a brownfield lawyer, and the West Atlanta residents and advocates living with it.
          </p>
          <p className={body}>
            In all we engaged 24 stakeholders and ran 11 interviews, logging each one’s insight and referrals in a
            shared tracker. We also went to a Georgia Brownfield Association panel and a remediation site visit, and
            turned what we learned into a systems map.
          </p>
        </CaseStudySection>

        <CaseStudySection
          id="geobind-pivot"
          heading="Narrowing & Pivoting"
          images={pivotImages}
          imageColumn
          onImageClick={setLightboxImage}
        >
          <p className={body}>
            The interviews changed our direction. Researchers told us plants take years and still leave lead to
            dispose of. Residents told us they resist remediation that tears up their yards. The EPA told us it had
            already weighed the options and chosen dig-and-haul, which trucks the soil hours away to a landfill.
          </p>
          <p className={body}>
            So I moved the team from one question to three concepts: turning hauled soil into construction
            material, preventing future brownfields at data centers, and a community remediation kit. We chose the
            first because it had a paying customer, developers who already pay to dispose of this soil, and an EPA
            remediation lead told us it was a process they could adopt.
          </p>
          <p className={body}>
            To keep that customer in view, we wrote a persona and storyboard for a community redevelopment
            coordinator whose projects stall on contaminated land, and tested every decision against her concerns
            about safety and liability.
          </p>
        </CaseStudySection>

        <CaseStudySection
          id="geobind-testing"
          heading="Testing Our Riskiest Assumptions"
          images={testingImages}
          onImageClick={setLightboxImage}
        >
          <p className={body}>
            We named the three assumptions that could sink GeoBind: the cement has to be strong enough for
            low-force uses, the lead has to be spread evenly through the mix, and it can’t leach out.
          </p>
          <p className={body}>
            Our engineers led the lab work while I planned the experiment around those assumptions. We made
            soil-to-cement mixes from 1:1 to 5:1 and tested their strength. The 1:1 mix peaked at 19.77 kN, well
            above what barriers, planters, and pavers need. Leaching tests were the next step on the roadmap.
          </p>
        </CaseStudySection>

        <CaseStudySection
          id="geobind-roadmap"
          heading="Roadmap & Pitch"
          images={pitchImages}
          imageColumn
          onImageClick={setLightboxImage}
          footer={
            // The final poster, shown whole (not cropped); click to enlarge.
            <figure className="m-0 mx-auto flex w-full max-w-xl flex-col gap-1.5">
              <img
                src={withBase(poster.src)}
                alt={poster.caption}
                onClick={() => setLightboxImage(poster)}
                className="w-full cursor-pointer rounded-lg border border-ink/10 transition-opacity hover:opacity-90"
              />
              <figcaption className="font-display text-xs leading-snug text-ink/60">{poster.caption}</figcaption>
            </figure>
          }
        >
          <p className={body}>
            I built the business case from market and competitive analysis. Our first customers are West Atlanta
            developers, and GeoBind can cost half as much as bagged cement while cutting transport and disposal.
          </p>
          <p className={body}>
            The roadmap I drafted runs from leaching tests and a city-overseen pilot on a lot already being
            remediated, through community partners, to developers and new construction. We pitched it at the
            showcase, where GeoBind won both the Investor’s Award and the Innovation Award.
          </p>
        </CaseStudySection>
      </JournalismModalShell>

      {lightboxImage && <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />}
    </>
  )
}
