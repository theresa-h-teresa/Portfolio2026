import type { ReactNode } from 'react'
import { JournalismModalShell } from '../../journalism/JournalismModalShell'
import { JLink } from '../../journalism/JournalismBlocks'
import { PlaceholderImage } from '../../PlaceholderImage'

const repoHref = 'https://github.gatech.edu/Expressive-Machinery-Lab/ResonantSpaces_AuthoringTool'

const tools = ['Figma', 'TouchDesigner', 'Unity 2D/3D', 'LoopMidi', 'Ableton', 'Max']
const development = ['Python', 'JavaScript', 'HTML/CSS', 'C/C#']

function ToolButton({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center justify-center rounded-[10px] border border-[#d9d9d9] bg-white px-3 py-2 text-xs text-ink shadow-[0px_4px_0px_0px_rgba(0,0,0,0.25)]">
      {label}
    </span>
  )
}

function SkillGroup({ heading, items }: { heading: string; items: string[] }) {
  return (
    <div>
      <p className="mb-2 font-display text-3xl font-normal text-[#72b0c9]">{heading}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <ToolButton key={item} label={item} />
        ))}
      </div>
    </div>
  )
}

function ImageGrid() {
  return (
    <div className="grid flex-1 grid-cols-2 gap-4">
      <PlaceholderImage className="aspect-[8/5]" />
      <PlaceholderImage className="aspect-[8/5]" />
      <PlaceholderImage className="aspect-[8/5]" />
      <PlaceholderImage className="aspect-[8/5]" />
    </div>
  )
}

function CaseStudySection({
  id,
  heading,
  divider = true,
  children,
}: {
  id: string
  heading: string
  divider?: boolean
  children: ReactNode
}) {
  return (
    <section id={id} className={`scroll-mt-4 ${divider ? 'border-t border-ink/10 pt-6' : ''}`}>
      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        <div className="md:w-60 md:shrink-0">
          <h3 className="mb-3 font-display text-xl font-normal text-accent">{heading}</h3>
          <div className="flex flex-col gap-2.5">{children}</div>
        </div>
        <ImageGrid />
      </div>
    </section>
  )
}

export function SoundCloudsCard({ onClose }: { onClose: () => void }) {
  return (
    <JournalismModalShell title="Sound Clouds / Array" onClose={onClose}>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="lg:max-w-sm">
          <p className="font-display text-sm leading-snug text-ink">
            For my freshman year in college, I worked with the Expressive Machinery Lab at Georgia Tech as an
            undergraduate assistant, doing UX design and frontend developing. In the following summer, my role was
            exclusively backend developing.
          </p>
          <p className="mt-3 font-display text-sm leading-snug text-ink">
            Our goal this year was to develop an authoring tool for this installation which anybody, regardless of
            prior coding experience, could use and customize.
          </p>
          <div className="mt-3">
            <JLink href={repoHref}>View the authoring tool repository</JLink>
          </div>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row">
          <SkillGroup heading="TOOLS" items={tools} />
          <SkillGroup heading="DEVELOPMENT" items={development} />
        </div>
      </div>

      <div className="flex flex-col justify-between gap-1 border-t border-ink/10 pt-4 font-display font-normal text-[#72b0c9] sm:flex-row sm:items-baseline">
        <p className="text-3xl">EXPRESSIVE MACHINERY LAB</p>
        <p className="text-sm">GEORGIA TECH, SEP 2025-PRESENT</p>
      </div>

      <CaseStudySection id="ux-hci-design" heading="UX and HCI Design" divider={false}>
        <p className="font-display text-sm leading-snug text-ink">
          As part of a early-concept project for the Expressive Machinery Lab at Georgia Tech, I had the opportunity
          to contribute to the development of an authoring platform for "Sound Clouds," now known as "ARRAY." As
          public art installation, ARRAY is also an ambient intelligence system designed to elicit deep human
          experience of awe, wonder, and beauty.
        </p>
        <p className="font-display text-sm leading-snug text-ink">
          My role in this project was to translate these evaluations through designing and storyboarding
          interactions, offering a fluid and comprehensive plan of action for our team's engineers and programmers.
          This was my first college research project, so I mainly learned from my upperclassmen colleagues about HCI
          and UX research processes, like storyboarding, user testing, and developing shared vocabulary for our
          cross-disciplinary team.
        </p>
      </CaseStudySection>

      <CaseStudySection id="blob-tracking" heading="Computer Vision & Blob Tracking Model">
        <p className="font-display text-sm leading-snug text-ink">
          To develop the human-computer interactive pipeline, I worked with the engineering team to the computer
          vision system to track participant movement. My role was to increase the blob-detection and spatial
          tracking integrity on TouchDesigner. This work required balancing accuracy, responsiveness, and robustness
          while designing interactions that felt realistic, intuitive, and engaging for participants.
        </p>
      </CaseStudySection>

      <CaseStudySection id="authoring-tool" heading="Authoring Tool for 2D & 3D Interactions">
        <p className="font-display text-sm leading-snug text-ink">
          Building an authoring tool sounded tough for two reasons: organizing the code so that it makes sense to
          both the developer and audience, and making sure that code is flexible and functions as expected.
        </p>
        <p className="font-display text-sm leading-snug text-ink">
          To tackle this, first, I worked on prototyping the installation's sound, lighting, and physical behaviors
          before fabrication by storyboarding multiple ways of interaction inputs and outputs. These were discussed
          and tweaked with my lab professor and colleagues from concept to extreme testing in the lab.
        </p>
        <p className="font-display text-sm leading-snug text-ink">
          Then, I worked on turning those ideas into code; I developed a 2D and 3D simulation environment with
          customizable inputs and outputs. The simulation modeled the movement of suspended objects, spatial audio
          interactions, and responsive lighting effects, allowing the team to test and refine ideas rapidly.
        </p>
        <p className="font-display text-sm leading-snug text-ink">
          To ensure accuracy and smooth workflow throughout this process, I cross-examined the code with the
          approved storyboard at each major commit and weekly meeting with colleagues. There was a lot of
          troubleshooting needed, but by seeing problems in different angles and shifting mechanisms around in
          different programs, we were able to have three exhibition-ready interactions by the summer's end.
        </p>
      </CaseStudySection>
    </JournalismModalShell>
  )
}
