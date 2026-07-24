import { JournalismModalShell } from '../JournalismModalShell'
import { JSection, JP, JLink } from '../JournalismBlocks'

const organizations = [
  { label: 'The Stentorian', href: 'https://ncssmstentorian.com/author/fang25t/' },
  { label: 'Scholastic Inc.', href: 'https://kpcnotebook.scholastic.com/author/teresa-fang' },
  { label: 'C-SPAN', href: 'https://www.c-span.org/person/teresa-fang/129523/' },
  {
    label: '2023',
    href: 'https://www.studentcam.org/2023-first-prize-high-school-east-money-talks-inside-the-inflation-surge-by-teresa-fang/',
  },
  {
    label: '2021',
    href: 'https://www.studentcam.org/2021-second-prize-middle-school-us-china-survive-or-thrive/',
  },
  { label: 'Chapel Hill Magazine', href: 'https://chapelhillmagazine.com/max-chen-scholastic-kids-press/' },
  {
    label: 'Asian American Journalists Association (AAJA) JCamp',
    href: 'https://aaja-jcamp.medium.com/the-art-of-persistence-eastern-market-and-its-small-businesses-60403260df5e',
  },
  { label: 'WCHL 97.9 The Hill / Chapelboro.com', href: 'https://chapelboro.com/author/tfang' },
  {
    label: 'Curious Science Writers',
    href: 'https://curioussciencewriters.org/articles/2024/09/25/when-bioinformatics-looks-like-hot-dogs-how-t-cell-and-b-cell-epitope-prediction-preps-you-against-pathogens/',
  },
]

const featuredIn = [
  { label: "Chapel Hill Magazine Editor's Note (2023)", href: 'https://chapelhillmagazine.com/january-february-2023/' },
  {
    label: 'Chapelboro Media Interview (2023)',
    href: 'https://chapelboro.com/news/arts/east-chapel-hill-highs-teresa-fang-wins-congressional-art-competition',
  },
  {
    label: 'Chapelboro Media Interview (2023)',
    href: 'https://chapelboro.com/news/arts/east-chapel-hill-highs-teresa-fang-shares-details-on-winning-documentary-project',
  },
  {
    label: '97.9 The Hill Live Radio Interview (2023)',
    href: 'https://chapelboro.com/news-on-the-hill-with-andrew-stuckey/on-air-today-news-on-the-hill/on-air-today-documentary-filmmaker-and-east-chapel-high-student-theresa-fang',
  },
  {
    label: 'Scholastic Inc. Media Interview (2023)',
    href: 'https://www.scholastic.com/newsroom/all-news/honoring-aanhpi-heritage-month-with-former-kid-reporter-teresa-f.html',
  },
  {
    label: '97.9 The Hill Live Radio Interview (2023)',
    href: 'https://chapelboro.com/news-on-the-hill-with-andrew-stuckey/on-air-today-news-on-the-hill/on-air-today-teresa-fang-east-chapel-hill-high-10th-grader',
  },
  {
    label: 'CW22 Feature Article Interview (2021)',
    href: 'https://raleighcw.com/news/22-now/inspirational-women-of-north-carolina-teresa-fang',
  },
  {
    label: 'Scholastic Reads Podcast Interview (2020)',
    href: 'https://www.scholastic.com/newsroom/scholastic-reads-podcast/listening-to-kid-reporters--life-during-the-pandemic.html#',
  },
  { label: 'WRAL-TV Television Interview (2019)', href: 'https://www.wral.com/future-reporters-tour-wral-tv/18736474/' },
]

const socials = [
  { label: 'YouTube', href: 'https://www.youtube.com/@teresazfang/videos' },
  { label: 'Twitter', href: 'https://x.com/TeresaFang5' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/teresa-fang-5b2926284/' },
]

export function AboutMeCard({ onClose }: { onClose: () => void }) {
  return (
    <JournalismModalShell
      title="About Me & Self-Analytical Essay"
      onClose={onClose}
      leftExtra={
        <div className="flex flex-col gap-4 font-mono text-sm">
          <p className="mb-2 font-display text-2xl leading-none text-ink">Profiles</p>
          {organizations.map((org, i) => (
            <JLink key={i} href={org.href}>
              {org.label}
            </JLink>
          ))}
          <JLink href="https://www.c-span.org/person/teresa-fang/129523/">Featured In:</JLink>
          <ul className="flex flex-col gap-2">
            {featuredIn.map((item, i) => (
              <li key={i}>
                <JLink href={item.href}>{item.label}</JLink>
              </li>
            ))}
          </ul>
          {socials.map((s, i) => (
            <JLink key={i} href={s.href}>
              {s.label}
            </JLink>
          ))}
        </div>
      }
    >
      <JSection id="about-me" heading="About Me">
        <p className="font-display text-xl leading-snug text-ink">
          Journalism is my microscope and amplifier — I use reporting to expose hidden injustices, build consensus
          through data and storytelling, and ultimately transform "being seen" into "being solved" through art and
          policy.
        </p>
        <JP>
          In sixth grade, I became a Kid Reporter for Scholastic Inc. I promised myself I would write one article per
          month. Luckily, I fulfilled that promise with 36+ articles before I "retired" as a kid reporter, and
          "graduated" into a real-world journalist.
        </JP>
        <JP>
          In high school, recognizing many social issues in my community, I was inspired to use my voice for change.
          Through journalism, I understand the urgency of solving these social issues, and my goal transforms from
          just documenting to inspiring others to recognize the same and act in their best power.
        </JP>
        <JP>
          Journalism has shown itself as an avenue to unravel the world. I proudly embraced my experiences, my
          connections, and my ideas to be a leader and an initiator, motivating me to try new things from a social
          justice perspective: in four years as a filmmaker, I made short documentaries on social issues I saw around
          me, founded my school's first documentary club, and won four national filmmaking awards. I became a local
          leader and political activist for my AAPI community, for my high school peers, and for my hometown on a
          state and national stage. At my current high school, a STEM school, I'm managing operations to revitalize
          and modernize our newspaper. Journalism reminds me to always go the distance, pay attention to the
          community around me, and actively shape its development.
        </JP>
        <JP>
          Now, seven years later, I am still a journalist. Through journalism, I understand the urgency of solving
          these social issues, and my goal transforms from just documenting to inspiring others to recognize the same
          and act in their best power. Whether or not it becomes my future life, journalism has taught me to be the
          best person I can be and to do the best I can for the people around me.
        </JP>
      </JSection>

      <JSection id="press-essay" heading="From Headlines to Laws: How My Press Pass Became a Policy Tool">
        <JP>
          Most people see journalism as a means of storytelling, a way to chronicle events and capture public
          sentiment. But for me, journalism is a tool for action, a lever that turns awareness into change. It is not
          just about revealing problems—it is about resolving them.
        </JP>
        <JP>
          I first experienced the limits of reporting when my article on Lunar New Year's absence from the school
          calendar failed to create immediate change. I had done everything by the book: researched, interviewed, and
          written a compelling piece. Yet, nothing happened. That moment forced me to rethink my role as a
          journalist. If words alone were not enough, what else could I do?
        </JP>
        <JP>
          That question propelled me into action. During a C-SPAN documentary competition, I uncovered policy gaps in
          municipal zoning laws, exposing how unchecked expansion affected local communities. By weaving data-driven
          evidence with personal testimonies, my reporting ignited public discourse and led to tangible shifts in
          local planning. It was no longer just an article—it was an intervention. The process forced me to confront
          a fundamental question: Can journalism remain neutral while also being a force for change? The traditional
          role of the press dictates that reporters should inform, not interfere. But my work demonstrated that
          presenting unfiltered truths is, in itself, a form of activism. To expose injustice and do nothing is, in
          essence, to allow it to continue. Journalism does not need to be passive to be ethical; it needs to be
          precise, rigorous, and responsible.
        </JP>
        <JP>
          As editor-in-chief of my school newspaper, I refused to let stories stagnate as words on a page. I rebuilt
          our publication from the ground up, launching our first-ever website and social media presence,
          establishing sponsorships with local businesses to fund yearlong color printing, and expanding our coverage
          to include investigative reporting and broadcast journalism. I created new editorial guidelines, structured
          management operations, and mentored younger writers, ensuring that our newspaper would outlive my tenure.
          Journalism, for me, became the bridge between awareness and reform.
        </JP>
        <JP>
          My journalism differs from others in its relentless pursuit of tangible change. While many journalists seek
          to report events as they unfold, I view journalism as a form of advocacy, a way to push institutions to
          acknowledge and address overlooked issues. I do not merely write stories—I embed myself in them, following
          up, gathering data, and ensuring that my reporting translates into action. When I published an article
          exposing the lack of accessible mental health resources for students, our school administration expanded
          counseling services and increased outreach efforts. My investigative work on student-led climate
          initiatives led to the adoption of sustainability measures in school policy, including a push for more
          environmentally friendly cafeteria options and increased recycling infrastructure. When I covered the
          overcrowding issues in classrooms, parents and students mobilized, leading to new conversations with the
          school board about potential long-term solutions.
        </JP>
        <JP>
          Beyond school, my stories shaped local policy. My investigation into the environmental impact of hog
          farming in North Carolina not only raised awareness but was referenced in town hall discussions on
          environmental regulations. Similarly, my reporting on urban development for my town's Planning Commission
          ensured that youth perspectives were integrated into decision-making processes, leading to the creation of
          a student advisory board.
        </JP>
        <JP>
          Unlike traditional journalism, which often leaves stories to stand on their own, my approach demands
          continued engagement. I see journalism as an evolving dialogue between the press, the public, and
          policymakers. Every investigative piece I have worked on has sharpened my understanding of the systemic
          barriers that shape public narratives. When covering underrepresented communities, I made a conscious
          effort to amplify voices that were often ignored, whether it was interviewing immigrant families about
          language accessibility in schools or documenting the lived experiences of students from historically
          marginalized backgrounds. I have learned that a journalist's responsibility does not end at publication; it
          extends to ensuring that stories do not become fleeting headlines but catalysts for change. My work does
          not seek to provoke outrage for the sake of engagement—it seeks to provide clarity in a world of noise. I
          do not chase sensationalism; I chase impact.
        </JP>
        <JP>
          This evolving perspective has reframed how I approach my role. Journalism is not an institution frozen in
          time, nor is it a passive mirror reflecting the world. It is a force that, when wielded with precision and
          integrity, can shape the policies that define our lives. It is the watchdog, the advocate, the historian,
          and the disruptor.
        </JP>
        <JP>
          To be a journalist is to be an architect of change. My press pass is not just a credential—it is a tool,
          one I wield to challenge the status quo and shape a more just world. I do not just document problems—I
          dismantle them, one story at a time.
        </JP>
      </JSection>
    </JournalismModalShell>
  )
}
