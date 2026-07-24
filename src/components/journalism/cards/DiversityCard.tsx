import { JournalismModalShell } from '../JournalismModalShell'
import { JSection, JP, JImage, JLink } from '../JournalismBlocks'

export function DiversityCard({ onClose }: { onClose: () => void }) {
  return (
    <JournalismModalShell
      title="Commitment to Diversity"
      onClose={onClose}
      leftExtra={
        <div className="flex flex-col gap-4">
          <JImage src="/journalism/diversity-image-28.png" className="w-full" />
          <JImage src="/journalism/diversity-image-29.png" className="w-full" />
        </div>
      }
    >
      <JP>
        Growing up in a multicultural college town, I believe diversity is fundamental to life. Journalism, in its
        purpose to inspire and tell stories to humanity, is not complete without addressing and representing the
        full range of lived experiences in a community.
      </JP>

      <JSection id="speaking-for-uplifting-others" heading="Speaking for Uplifting Others">
        <JP>
          Starting journalism in sixth grade was a fortunate opportunity for me to cover stories through my cultural
          perspective. Seven years later, I have seen and witnessed firsthand the importance of not only having a
          diverse range of topics to write about, but a diverse range of journalists in the newsroom. AAJA JCamp,
          Chapel Hill Magazine, Chapelboro.com, and my school newspaper taught me that. Even in high school-level
          journalism, I began to observe hints of systemic patterns—how easy it was for students to take the "easy
          route" and interview people they were already familiar with, to choose topics that appeal to majority, or
          to avoid complex issues which they may have the privilege to live without. Since the beginning of
          journalism career six years ago, I have made it a point to use my voice to uplift others.
        </JP>
      </JSection>

      <JSection id="promoting-lunar-new-year" heading="Promoting Lunar New Year">
        <JP>
          For example, when anti-Asian hate crimes were rampant during the pandemic, I petitioned for my school
          district to recognize Lunar New Year as a holiday. Our movement grew, uniting people across cultures,
          identities, and socioeconomic classes. After a year of working together and amassing feedback and
          perspectives from community members through hosting in-person/online forums and surveys, we presented our
          movement through proposals to Board of Education members, emails for more support, and speeches. I remember
          people I've never met in-person but saw their names and heard their voices online filling up every seat in
          Town Hall to hear the gavel sound for the Board of Education's unanimous approval–and we become the first
          district in NC to succeed. In order to make this a reality, I used the connections I made in my experience
          as a local journalist. Afterwards, to spread the joy of making this a reality and explaining what the
          social and cultural significance of this is to my hometown community, I wrote a{' '}
          <JLink href="https://echhsechoonline.com/whose-hands-really-shape-our-home/">column</JLink> for the East
          Chapel Hill Observer (ECHO), the student newspaper of my then-high school. This story was published online
          and in print. I was also interviewed by local journalists, including those from the Chinese community by
          the Chinese Headline News, and{' '}
          <JLink href="https://raleighcw.com/news/22-now/inspirational-women-of-north-carolina-teresa-fang">
            CW22
          </JLink>
          .
        </JP>
      </JSection>

      <JSection id="social-issues-actions" heading="Getting Into Social Issues Actions">
        <JP>
          On top of that, diversity isn't just a requirement in the workplace or for DEI fulfillment. It's a
          propelling force that is inextricably linked with a reason to grow and succeed. Beyond just interviewing
          people who look different from me or have different stories than mine, my commitment to diversity means
          using my work as a medium to participate in social issues and change ways of living.
        </JP>
      </JSection>
    </JournalismModalShell>
  )
}
