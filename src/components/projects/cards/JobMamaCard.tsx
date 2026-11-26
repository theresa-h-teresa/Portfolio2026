import { useState } from 'react'
import { JournalismModalShell } from '../../journalism/JournalismModalShell'
import { CaseLink, CaseStudySection, ImageLightbox, SkillGroup, type CaseImage } from './CaseStudyParts'

const prototypeHref =
  'https://www.figma.com/proto/cSLYSMh1VsXet38Mfj7f6I/CS3751-prototype---poster--Copy-?node-id=361-554&t=KC0w8Rndq1vCYgGZ-1&scaling=scale-down&content-scaling=fixed&page-id=361%3A553&starting-point-node-id=366%3A981'

const caseStudyHref = '/Job Mama/UI Case Study Final.pdf'

const tools = ['Figma', 'Google Forms', 'Google Docs']
const features = ['Practice Page', 'Project Showcase Library', 'Timeblocker', 'User Dashboard', 'Resume Builder']
const methods = ['User Interviews', 'Surveys', 'Task Analysis', 'Personas', 'Storyboarding', 'Heuristic Evaluation', 'Think-Aloud Testing']

const researchImages: CaseImage[] = [
  {
    src: '/jobmama/research-poster.png',
    caption: 'Our Milestone 2 poster: the three problems, target users, goals, and first feature concepts.',
  },
  {
    src: '/jobmama/research-task-analysis.png',
    caption:
      'Hierarchical task analysis of preparing for a technical interview: studying data structures, practicing LeetCode problems, and simulating interviews.',
  },
]
const lofiImages: CaseImage[] = [
  {
    src: '/jobmama/lofi-showcase-library.png',
    caption: 'Showcase Library home: a carousel of real projects from companies like Google, Roblox, and NASA.',
  },
  {
    src: '/jobmama/lofi-showcase-project.png',
    caption: 'A project page (Roblox’s ML for Voice Safety), with a sidebar for moving between companies and projects.',
  },
  {
    src: '/jobmama/lofi-dashboard.png',
    caption: 'User Dashboard: profile, job preferences, settings, and the Resume Editor.',
  },
  {
    src: '/jobmama/lofi-resume-builder.png',
    caption: 'Resume Builder: students enter experiences, awards, and skills once to build tailored resumes.',
  },
]
const evaluationImages: CaseImage[] = [
  {
    src: '/jobmama/eval-practice.png',
    caption: 'No clear call to action led from reviewing a data structure to practicing interview problems.',
  },
  {
    src: '/jobmama/eval-showcase-isolated.png',
    caption: 'Project pages had no obvious path to the rest of the platform.',
  },
  {
    src: '/jobmama/eval-empty-home.png',
    caption: 'The main page was nearly empty and didn’t explain what the platform could do.',
  },
  {
    src: '/jobmama/eval-showcase-description.png',
    caption: 'The Showcase Library’s broad description undersold what made the feature unique.',
  },
]
const finalImages: CaseImage[] = [
  {
    src: '/jobmama/final-home.png',
    caption: 'New home page and navigation bar, designed to feel decluttered and low-stress.',
  },
  {
    src: '/jobmama/final-project-library.png',
    caption: 'Redesigned Project Library with clearer calls to action.',
  },
  {
    src: '/jobmama/final-practice.png',
    caption: 'Each unit on the Practice page has an “Add to Timeblocker” button.',
  },
  {
    src: '/jobmama/final-confirm.png',
    caption: 'A confirmation prompt appears before an AI-suggested event is added to the Timeblocker.',
  },
]

const body = 'font-display text-base leading-snug text-ink'

export function JobMamaCard({ onClose }: { onClose: () => void }) {
  const [lightboxImage, setLightboxImage] = useState<CaseImage | null>(null)

  return (
    <>
      <JournalismModalShell title="Job Mama" onClose={onClose}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="lg:max-w-sm">
            <p className={body}>
              In Spring 2026, my team of five (Ana Briceno, Johann Castellanos, Richard Lin, Yash Pandit, and I) designed
              Job Mama for a human-computer interaction course at Georgia Tech. It is one platform where undergraduate
              computing students can prepare for technical interviews, learn from real industry projects, and manage
              recruiting deadlines.
            </p>
            <p className={`mt-3 ${body}`}>
              I designed the Project Showcase Library and the User Dashboard, ran one of our five think-aloud
              evaluations, and helped turn the findings into a redesigned high-fidelity prototype.
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
            <SkillGroup heading="FEATURES" items={features} />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-1 border-t border-ink/10 pt-4 font-display font-normal text-[#72b0c9] sm:flex-row sm:items-baseline">
          <p className="text-3xl">HCI COURSE PROJECT</p>
          <p className="text-sm">GEORGIA TECH, JAN-MAY 2026</p>
        </div>

        <CaseStudySection
          id="research"
          heading="Research & Problem Space"
          divider={false}
          images={researchImages}
          fit="contain"
          imageColumn
          onImageClick={setLightboxImage}
        >
          <p className={body}>
            Through surveys and interviews with computing students ages 18–22, we found three recurring problems:
            juggling fragmented tools (resumes, GitHub, job boards, company portals), getting little feedback or
            transparency from employers after applying, and fitting a time-intensive search around coursework.
          </p>
          <p className={body}>
            We mapped the work with hierarchical task analyses, like the one for preparing for a technical interview,
            and built two personas around it. A Crazy 8s round produced ideas ranging from a VR workplace simulator to a
            desk "application brick." We chose a centralized website because it addressed the largest share of the
            problem space.
          </p>
        </CaseStudySection>

        <CaseStudySection
          id="low-fidelity"
          heading="Low-Fidelity Prototype"
          images={lofiImages}
          onImageClick={setLightboxImage}
        >
          <p className={body}>
            Our first prototype had three core features: a LeetCode-style Practice page, a Project Showcase Library,
            and a Timeblocker calendar for recruiting deadlines.
          </p>
          <p className={body}>
            I designed the Showcase Library, where verified employees share real projects (timelines, design
            decisions, pitch decks) so students can see what industry work looks like and get expert feedback in the
            comments. I also designed the User Dashboard, whose Resume Builder stores a student's experiences once so
            tailored resumes can be built without retyping the same information for every application.
          </p>
        </CaseStudySection>

        <CaseStudySection
          id="evaluation"
          heading="Evaluation"
          images={evaluationImages}
          onImageClick={setLightboxImage}
        >
          <p className={body}>
            An in-class heuristic evaluation flagged hidden navigation (clicking the title to go home), visual clutter,
            and no feedback on whether edits were saved.
          </p>
          <p className={body}>
            Each of us then ran a think-aloud session with a student at a different stage of internship preparation.
            Participants found a Linked Lists lesson, explored Roblox's ML for Voice Safety project, and added a
            Timeblocker deadline. Three more pain points came out of those sessions: users didn't know what to do next,
            the features felt like separate tools, and they weren't sure why they would switch from Google Calendar,
            LeetCode, or LinkedIn.
          </p>
        </CaseStudySection>

        <CaseStudySection
          id="final-prototype"
          heading="Final Prototype"
          images={finalImages}
          onImageClick={setLightboxImage}
          belowImages={
            <p className={body}>
              Going in, we assumed that combining many features into one platform would be enough. Testing showed that
              usability depends on how well a system supports users' workflows, not just on what it includes.
            </p>
          }
        >
          <p className={body}>
            We addressed all six pain points in the redesign. A global navigation bar with a clear logout replaced the
            hidden shortcuts. A folder-tab layout introduces Practice content a little at a time. Confirmation prompts
            and save states now show when a change has been made.
          </p>
          <p className={body}>
            Calls to action such as "Add to Timeblocker" link the features together, and integrations with Google,
            LeetCode, and LinkedIn make Job Mama part of the tools students already use.
          </p>
          <div className="mt-1 flex flex-col gap-2">
            <CaseLink href={prototypeHref}>Open the final Figma prototype</CaseLink>
            <CaseLink href={caseStudyHref}>Open the final UI case study (PDF)</CaseLink>
          </div>
        </CaseStudySection>
      </JournalismModalShell>

      {lightboxImage && <ImageLightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />}
    </>
  )
}
