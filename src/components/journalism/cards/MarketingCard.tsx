import { JournalismModalShell } from '../JournalismModalShell'
import { JSection, JP, JImage, JLink } from '../JournalismBlocks'

const navItems = [
  { label: 'Analytics', id: 'analytics' },
  { label: 'Audience Engagement', id: 'audience-engagement' },
  { label: 'Print Revival', id: 'print-revival' },
  { label: 'Business', id: 'business' },
]

export function MarketingCard({ onClose }: { onClose: () => void }) {
  return (
    <JournalismModalShell
      title="Marketing & Audience Engagement"
      navHeading="Quick Navigation"
      navItems={navItems}
      onClose={onClose}
    >
      <JP>
        As the editor-in-chief also in charge of business relations and marketing, I carry the responsibility of
        ensuring we reach our audience and market our newspaper in the right way and to the right people. Although it
        took me until my senior year to begin experiencing the behind-the-scenes strings of withholding public
        influence and viewership, I've put a major emphasis on measuring the success of our goals using data and
        analytics this year.
      </JP>
      <JP>
        Built in analytics on our online platforms has been incredibly telling in this process, and I've learned a
        lot about ways to intrigue the specific age groups and demographics we see on our site often. Here's a look
        at that process.
      </JP>

      <JSection id="analytics" heading="Analytics">
        <p className="font-display text-base font-medium text-ink">Website</p>
        <JP>
          In the past year, since I built this website in my junior year, The Stentorian's online statistics have
          steadily increased and followed the trend of how thick our newspaper of the month was, and how much
          marketing our team did in-person, on social media and online, and to local businesses.
        </JP>
        <JP>
          This can be seen in the image below, where the 1.9k views in May 2024 correlated with our school's
          graduation ceremony date (where I distributed 1000 copies to parents, teachers, and attendees). August 2024
          correlated with the first day of the 2024-25 school year, and October 2024 correlated with student
          applications for clubs and research programs at our school (the theme of our issue was on clubs, events,
          and application tips). In November, December, and January, the editorial board fell a bit behind normal
          publication schedule because due to all of us being seniors, we also had a commitment to college
          applications.
        </JP>
        <JP>
          As shown below, my three pieces about school statistics and my opinions on school administrative policies
          garnered thousands of views on their own. Of the top posts of all time on our site, I authored the top
          three (excluding the Home page and News & Features page).
        </JP>
        <JImage src="/journalism/marketing-image-32.png" className="w-full" />
        <JImage src="/journalism/marketing-image-33.png" className="w-full" />
        <p className="font-display text-base font-medium text-ink">Instagram</p>
        <JP>
          After identifying social media presence as a priority, I was first designated as the Multimedia Editor in
          my junior year to publish our daily content. Each time an article is posted online, we promote that
          content on Instagram and Facebook. Each section is additionally responsible for creating one piece of
          Instagram content per week. Creating a consistent posting schedule ensures are viewers are not overwhelmed
          with excessive media and receive a balance in the type of content released.
        </JP>
        <JP>
          We have also achieved record analytics in the past year on several Instagram posts as well. For example,
          the following post garnered numerous likes, shares, and follows. It was printed on our last issue of the
          2023-24 school year in our special Commencement Issue. Parents reported to me that they really appreciated
          getting to read the statistics of where the senior class went around the world.
        </JP>
        <JImage src="/journalism/marketing-image-34.png" className="w-full" />
      </JSection>

      <JSection id="audience-engagement" heading="Audience Engagement">
        <JP>
          To boost our engagement on our new online website, I added a link to our Instagram bio that is more
          convenient and efficient than putting our homepage link (in my opinion). This link correlates our
          published Instagram posts with the articles they correspond to on our website, allowing Instagram users to
          click on the post of the story they would like to read. This then leads them to the story on our online
          site.
        </JP>
        <JImage src="/journalism/marketing-image-35.png" className="w-full" />
        <JP>
          The website is designed in a way that prioritizes 1) timely news or community-centric articles and 2) most
          popular reads. This is why when you first open our website, you will see on the homepage stories that are
          centered around the latest events in school or politics, as well as opinion stories, which our student body
          has an influx of and high tendency to write. We also have the latest broadcast segment for easy access to
          multimedia news.
        </JP>
        <JImage src="/journalism/marketing-image-36.png" className="w-full" />
        <JP>
          In the image above, the rightmost column is our sidebar. First, to promote our written content, I manually
          built a "trending stories" widget to allow users to click through the most popular stories published in
          the past 30 days. This feature enables quick and easy access to stories that may interest them. Below that
          is the "welcome contributions" widget, which directs users to email our dedicated newspaper feedback email
          address with their story pitches, or any feedback or questions. Thirdly, we thank our sponsors of the month
          by featuring their stores, logos, and websites. Depending on the design of the website due to our sponsors'
          corresponding advertising packages, we will put ads around the website in specific locations and sizes. For
          student organization ads, we do that for free to promote student engagement.
        </JP>
      </JSection>

      <JSection id="print-revival" heading="Print Revival">
        <JP>
          Within our school and local community, this year's revival of the print Stentorian has garnered
          excitement, enthusiasm, and even a sense of unity.
        </JP>
        <JP>
          We have incorporated interactive elements such as QR codes and our page of crosswords and custom puzzles to
          better engage students, then hooking them onto our other stories as well.
        </JP>
        <JImage src="/journalism/marketing-image-37.png" className="w-full" />
      </JSection>

      <JSection id="business" heading="Business">
        <JImage src="/journalism/marketing-image-38.png" className="w-full" />
        <JP>
          In the same month, after my editorial board and I reviewed the document thoroughly over a series of
          in-person and virtual team meetings, I added these policies in a readable form on the{' '}
          <JLink href="https://ncssmstentorian.com/have-submissions/">submissions page</JLink> of our newspaper
          website.
        </JP>
        <JImage src="/journalism/marketing-image-39.png" className="w-full" />
        <JP>
          I was also able to appropriately flesh out and establish{' '}
          <JLink href="https://drive.google.com/file/d/1Q_6ZSaDUh6_nmrkNM5a-M97xvNucvdZ4/view?usp=sharing">
            Sponsorship Guidelines
          </JLink>
          , which details different tiers of packages in exchange for running advertisements on our print newspaper
          and website in set durations of time. I created this from start to finish based on my prior experience as
          an intern at Chapel Hill Magazine, and my current experience in economics and finance courses.
        </JP>
        <JP>
          Me and some other editors were able to move onto the campus of our boarding school one week earlier than
          the other students, so the majority of this time was spent outdoors, walking through the then-rainstorms to
          pitch our partnership ventures to local businesses. In two weeks, we were able to secure $1000 from 4
          different small businesses to support the first-ever colorprinted editions of our newspaper in school
          history.
        </JP>
        <JP>
          As for the specific ads we get, usually the businesses just provide us with marketing materials, namely
          different types of logos. We are fortunate to be entrusted with these materials to create ads representing
          their businesses. This is also one of my responsibilities: I manually design and digitally create these ads
          to be printed in black-and-white or in color depending on the package a businessowner agrees to support us
          with.
        </JP>
        <JImage src="/journalism/marketing-image-40.png" className="w-full" />
        <JP>
          In November 2024, I revised our newspaper website and built a new page for{' '}
          <JLink href="https://ncssmstentorian.com/advertise/">advertising</JLink> in order to increase accessibility
          for sponsors to indicate their interest in collaborating with us.
        </JP>
      </JSection>
    </JournalismModalShell>
  )
}
