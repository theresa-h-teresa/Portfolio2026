import { JournalismModalShell } from '../JournalismModalShell'
import { JSection, JP, JLink } from '../JournalismBlocks'

const navItems = [
  { label: 'Broadcasts for Stentorian', id: 'stentorian-segments' },
  { label: 'C-SPAN Documentaries & Films', id: 'cspan-documentaries' },
]

export function BroadcastCard({ onClose }: { onClose: () => void }) {
  return (
    <JournalismModalShell title="Broadcast Journalism" navHeading="Quick Links" navItems={navItems} onClose={onClose}>
      <JP>
        As an interdisciplinary journalist, I am passionate about challenging and critiquing society and telling
        stories that matter. My work reflects my commitment to thorough research, effective storytelling, and
        engaging audiences through the medium of broadcast journalism.
      </JP>
      <JP>
        Six years of journalism showed me that intellectual curiosity can be extended beyond the realms of academia
        into the larger world. I began to record my thoughts, wielding a camera and microphone to create films.
        Originally, I thought it was good to highlight human resilience. Later, I realized the intense human
        connection found in filmmaking. And now, I have five years of experience as a filmmaker and documentarian.
      </JP>
      <JP>
        I created a film from my visceral reaction to rising oil prices bringing down families and supply chain
        shortages bringing down my favorite local restaurants and shops. I witnessed the government trying to fix it
        and the response of residents motivated by their concern for the wellbeing of the town's diverse population.
        Experiencing the complexity of a social and economic issue awakened me to the intensely personal effects of
        American political freedom. Thus, instead of focusing all my efforts on science and math, I increasingly
        argued for the importance of interdisciplinary work to solve problems in a world where human connection
        grows further apart.
      </JP>

      <JSection id="stentorian-segments" heading="Broadcast Segments For Stentorian">
        <JP>
          This year, I explored ways to increase the engagement and readership of our newspaper through a new social
          media (Instagram) account. Although there had been Instagram accounts for The Stentorian in the past, there
          were way too many, were rarely updated and did not have a large follower base, sending confusion to
          students who wanted to follow a reliable student news source.
        </JP>
        <JP>
          In my two years on The Stentorian's editorial board, I have had the opportunity to work on a variety of
          projects, from in-depth reports to live coverage, and each video here showcases my skills in video
          production, editing, and reporting. Our newspaper had never done any sort of broadcast journalism or
          multimedia stories before, so this was the first time we brought news into moving media. These videos are
          not just the product of my technical abilities but also my dedication to understanding complex topics and
          presenting them in an accessible and impactful way. I am willing to explore even more mediums and formats
          of journalism as I encounter them.
        </JP>
        <JP>
          You can view my full portfolio of broadcast journalism work on my YouTube channel{' '}
          <JLink href="https://www.youtube.com/@ncssm.stentorian">NCSSM Stentorian</JLink>, where I post the videos
          I've created, reported on, and edited. All of these videos are created entirely by my hands, from the ideas
          to decide what events to cover and people to interview, to the headlines, to the video production and
          promotion of these videos ASAP on our social media platforms.
        </JP>
      </JSection>

      <JSection id="cspan-documentaries" heading="C-SPAN Documentaries & Filmmaking">
        <JP>
          Our hands create the world we want to see. The beauty of civic engagement is in its ability to transform
          everyday people into changemakers. Being a journalist, filmmaker, and civically-active student has proven
          that anybody can foster awareness and participate in action-able initiatives and solutions for social
          change, combatting large social issues in innovative ways.
        </JP>
        <JP>
          If being a kid reporter taught me to see social issues, then C-SPAN StudentCam, a national documentary
          competition, taught me to participate in discussions. Since 2020, I've won four national awards with my
          documentaries focusing on civic engagement, economics, international relations, and more. These
          documentaries have aired on C-SPAN across the country, featured in Chapel Hill Magazine, Chapelboro.com,
          97.9 WCHL The Hill, WRAL, and more, and was recognized by NC Governor Roy Cooper, Senator Thom Tillis, and
          US Representatives David Price and Valerie Foushee, and NC Representative Allen Buansi.
        </JP>
        <JP>
          In 2020, my documentary "AMERICA: This Equality" won 3rd place nationally with a $750 prize. At this time,
          the pandemic was gearing up, there were social justice movements erupting across the country, and people
          were coming together to rally for positive change. It was my first time making a documentary, and I
          combined my experiences from Scholastic Kids Press to make this documentary, which focuses on inequalities
          I saw across many aspects, racially, socioeconomically, education, and climate action.
        </JP>
        <JP>
          <JLink href="https://www.studentcam.org/2021-second-prize-middle-school-us-china-survive-or-thrive/">
            In 2021, my documentary "US-CHINA: Survive or Thrive" won 2nd place nationally with a $1500 prize.
          </JLink>{' '}
          Noticing how groceries and products were getting increasingly expensive, I decided to do something to
          engage with the issue of trade wars and explain a little about what was causing it. This was created during
          the pandemic which meant interviews were conducted via Zoom, but it gave me the opportunity to interview
          extraordinary people across the nation like former US Trade Representative Carla Hills.
        </JP>
        <JP>
          In 2022, my documentary "STAND & DELIVER: Our Youth Voices" won honorable mention with a $250 prize. My
          hometown was undergoing a municipal election, which many news sources were writing about including a
          student journalist at my high school. However, her opinion article was under attack by a political
          organization. By using facts and reasoning and with the support of numerous local news sources, we proved
          that the youth voice is powerful and not to be underestimated. This message is strung throughout my
          documentary, which was my first time competing in the high school division. I was lucky to interview Peter
          Warwick, the CEO of Scholastic Inc.
        </JP>
        <JP>
          <JLink href="https://www.studentcam.org/2023-first-prize-high-school-east-money-talks-inside-the-inflation-surge-by-teresa-fang/">
            In 2023, my documentary "MONEY TALKS: Inside the Inflation Surge" won 1st place nationally with a $3000
            prize.
          </JLink>{' '}
          Inflation was running rampant all over the country and in my hometown, I noticed many small businesses
          were either closing or struggling to remain open. Oil prices soared and some families experienced
          financial strife. This documentary offered a glimpse into how inflation works and how inflation rates
          could be brought down to help these businesses and families.
        </JP>
        <JP>
          In 2023, I also founded my high school's first documentary club, with the purpose of educating middle and
          high school students about filmmaking.
        </JP>
      </JSection>
    </JournalismModalShell>
  )
}
