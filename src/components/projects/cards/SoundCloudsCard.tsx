import { useRef, useState } from 'react'
import { Pause, Play, Volume2, VolumeX } from 'lucide-react'
import { JournalismModalShell } from '../../journalism/JournalismModalShell'
import { withBase } from '../../../lib/url'
import { CaseLink, CaseStudySection, ImageLightbox, SkillGroup, type CaseImage } from './CaseStudyParts'

const repoHref = 'https://github.gatech.edu/Expressive-Machinery-Lab/ResonantSpaces_AuthoringTool'

const tools = ['Figma', 'TouchDesigner', 'Unity 2D/3D', 'LoopMidi', 'Ableton', 'Max']
const development = ['Python', 'JavaScript', 'HTML/CSS', 'C/C#']

const dir = '/Sound Clouds'
const uxImages = [
  `${dir}/SoundClouds_UX Brainstorm Organization_A1.png`,
  `${dir}/SoundClouds_UX Brainstorm Organization_A2.png`,
  `${dir}/SoundClouds_UX Brainstorm Organization_A3.png`,
  `${dir}/SoundClouds_UX Brainstorm Organization_A4.png`,
]
const computerVisionImages = [
  `${dir}/SoundClouds_ComputerVision_B1.png`,
  `${dir}/SoundClouds_ComputerVision_B2.png`,
  `${dir}/SoundClouds_ComputerVision_B3.png`,
  `${dir}/SoundClouds_ComputerVision_B4.png`,
]
const authoringToolImages = [
  `${dir}/SoundClouds_AuthoringTool_C1.png`,
  `${dir}/SoundClouds_AuthoringTool_C2.png`,
  `${dir}/SoundClouds_AuthoringTool_C3.png`,
  `${dir}/SoundClouds_AuthoringTool_C4.png`,
]

function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const [muted, setMuted] = useState(false)

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play()
      setIsPlaying(true)
      setHasStarted(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div
      className="relative w-full cursor-pointer overflow-hidden rounded-[10px] bg-[#d9d9d9]"
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={withBase(src)}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        className="aspect-video w-full object-cover"
      />

      <div
        className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          isPlaying ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
          {hasStarted ? (
            <Pause className="h-7 w-7 fill-black text-black" />
          ) : (
            <Play className="ml-1 h-7 w-7 fill-black text-black" />
          )}
        </span>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          setMuted((m) => !m)
        }}
        aria-label={muted ? 'Unmute video' : 'Mute video'}
        className="absolute right-3 top-3 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-black/90"
      >
        {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      </button>
    </div>
  )
}

export function SoundCloudsCard({ onClose }: { onClose: () => void }) {
  const [lightboxImage, setLightboxImage] = useState<CaseImage | null>(null)

  return (
    <>
      <JournalismModalShell title="Sound Clouds / Array" onClose={onClose}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="lg:max-w-sm">
            <p className="font-display text-base leading-snug text-ink">
              For my freshman year in college, I worked with the Expressive Machinery Lab at Georgia Tech as an
              undergraduate assistant, doing UX design and frontend developing. In the following summer, my role was
              exclusively backend developing.
            </p>
            <p className="mt-3 font-display text-base leading-snug text-ink">
              Our goal this year was to develop an authoring tool for this installation which anybody, regardless of
              prior coding experience, could use and customize.
            </p>
            <div className="mt-3">
              <CaseLink href={repoHref}>View the authoring tool repository</CaseLink>
            </div>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row">
            <SkillGroup heading="TOOLS" items={tools} />
            <SkillGroup heading="DEVELOPMENT" items={development} />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-1 border-t border-ink/10 pt-4 font-display font-normal text-[#72b0c9] sm:flex-row sm:items-baseline">
          <p className="text-3xl">EXPRESSIVE MACHINERY LAB</p>
          <p className="text-sm">GEORGIA TECH, AUG 2025-AUG 2026</p>
        </div>

        <CaseStudySection
          id="ux-hci-design"
          heading="UX and HCI Design"
          divider={false}
          images={uxImages}
          onImageClick={setLightboxImage}
        >
          <p className="font-display text-base leading-snug text-ink">
            As part of a early-concept project for the Expressive Machinery Lab at Georgia Tech, I had the
            opportunity to contribute to the development of an authoring platform for "Sound Clouds," now known as
            "ARRAY." As public art installation, ARRAY is also an ambient intelligence system designed to elicit
            deep human experience of awe, wonder, and beauty.
          </p>
          <p className="font-display text-base leading-snug text-ink">
            My role in this project was to translate these evaluations through designing and storyboarding
            interactions, offering a fluid and comprehensive plan of action for our team's engineers and
            programmers. This was my first college research project, so I mainly learned from my upperclassmen
            colleagues about HCI and UX research processes, like storyboarding, user testing, and developing shared
            vocabulary for our cross-disciplinary team.
          </p>
        </CaseStudySection>

        <CaseStudySection
          id="blob-tracking"
          heading="Computer Vision & Blob Tracking Model"
          images={computerVisionImages}
          onImageClick={setLightboxImage}
        >
          <p className="font-display text-base leading-snug text-ink">
            To develop the human-computer interactive pipeline, I worked with the engineering team to the computer
            vision system to track participant movement. My role was to increase the blob-detection and spatial
            tracking integrity on TouchDesigner. This work required balancing accuracy, responsiveness, and
            robustness while designing interactions that felt realistic, intuitive, and engaging for participants.
          </p>
        </CaseStudySection>

        <CaseStudySection
          id="authoring-tool"
          heading="Authoring Tool for 2D & 3D Interactions"
          images={authoringToolImages}
          onImageClick={setLightboxImage}
          belowImages={
            <p className="font-display text-base leading-snug text-ink">
              To ensure accuracy and smooth workflow throughout this process, I cross-examined the code with the
              approved storyboard at each major commit and weekly meeting with colleagues. There was a lot of
              troubleshooting needed, but by seeing problems in different angles and shifting mechanisms around in
              different programs, we were able to have three exhibition-ready interactions by the summer's end.
            </p>
          }
          footer={
            <>
              <VideoPlayer src={`${dir}/SoundClouds_Video1.mp4`} />
              <VideoPlayer src={`${dir}/SoundClouds_Video2.mp4`} />
            </>
          }
        >
          <p className="font-display text-base leading-snug text-ink">
            Building an authoring tool sounded tough for two reasons: organizing the code so that it makes sense to
            both the developer and audience, and making sure that code is flexible and functions as expected.
          </p>
          <p className="font-display text-base leading-snug text-ink">
            To tackle this, first, I worked on prototyping the installation's sound, lighting, and physical
            behaviors before fabrication by storyboarding multiple ways of interaction inputs and outputs. These
            were discussed and tweaked with my lab professor and colleagues from concept to extreme testing in the
            lab.
          </p>
          <p className="font-display text-base leading-snug text-ink">
            Then, I worked on turning those ideas into code; I developed a 2D and 3D simulation environment with
            customizable inputs and outputs. The simulation modeled the movement of suspended objects, spatial audio
            interactions, and responsive lighting effects, allowing the team to test and refine ideas rapidly.
          </p>
        </CaseStudySection>
      </JournalismModalShell>

      {lightboxImage && <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />}
    </>
  )
}
