import { JournalismModalShell } from '../JournalismModalShell'
import { JSection, JP, JImage, JLink } from '../JournalismBlocks'

const navItems = [
  { label: 'Web Design', id: 'website-design' },
  { label: 'Social Media Design', id: 'social-media-design' },
  { label: 'Editorial Design', id: 'editorial-design' },
]

export function DesignCard({ onClose }: { onClose: () => void }) {
  return (
    <JournalismModalShell title="Design" navHeading="Quick Navigation" navItems={navItems} onClose={onClose}>
      <JP>
        Designing for the purpose of journalism means having the ability to switch seamlessly between different
        communications platforms and video and visual design programs. The summer before junior year, taking
        advantage of NCSSM's IT department and services, I was able to get Adobe Suite from the school and practice
        using it. For example, I practiced using Photoshop, Premiere Pro, and Lightroom to produce story graphics and
        video production during AAJA JCamp. In my work, I tend to use The Harvard Crimson and The Daily Tar Heel as
        inspiration. Here are three programs I use on an everyday basis:
      </JP>
      <JP>
        Canva/Photoshop: To help boost engagement on social media, I designed Instagram posts on Canva/Photoshop
        using the photographs for each articles. If an article does not have a photo, I make an illustration for it.
        I prefer graphic design that is formal, classy, and to the point.
      </JP>
      <JP>
        Premiere Pro: This is my go-to program for video-editing projects, reliable for using in both on-the-fly live
        broadcasts and for long-term filmmaking.
      </JP>
      <JP>Adobe InDesign: This is my go-to software for editing and creating the layout (aka how our newspaper issue will look) that month.</JP>

      <JSection id="website-design" heading="Website Design">
        <JP>
          In the fall of 2023, The Stentorian became a multimedia news source for the first time. I'd also like to
          add that all our endeavors in the student newspaper are entirely funded by sponsorship money and basic
          school funding for only designated for printing in black-and-white.
        </JP>
        <JP>
          In the last three months of the 2023-2024 school year, our website and Instagram account have reached over
          9k accounts/viewers and 44k impressions. The widespread community engagement and promotion of each
          published article has drawn renewed interest in the school's events and in joining The Stentorian's
          masthead among the juniors.
        </JP>
        <JImage src="/journalism/design-image-14.png" className="w-full" />
        <JP>
          The virtual format allows the Stentorian to incorporate more photographs, videos, and charts in our
          articles (as we had never had color in our newspaper, save for one issue in 2013). For example, in my{' '}
          <JLink href="https://stentorianncssm.wordpress.com/2024/05/25/class-of-2024-seniors-accepted-to-over-49-us-colleges/">
            story
          </JLink>{' '}
          about the NCSSM Class of 2024, I performed a statistical analysis on data given to us about college
          acceptances from the NCSSM Counseling department and converted that data into charts to include on the
          article on the website. This story had the highest amount of views and engagement (as of July 28, 2024):
          410 views on the website, 142 likes on Instagram, and printed and distributed on all 1000 copies of that
          month's issue.
        </JP>
        <JImage src="/journalism/design-image-15.png" className="w-full" />
        <JP>
          The website also allows us to cover more timely topics on the news. Important stories about graduation, or
          latest budget cuts to different departments in school may not have been timely enough by the time we
          published our monthly print issue, but could be shared online.
        </JP>
        <JP>
          For coverage of more controversial or worldly topics such as politics or the international protests, I
          take advantage of interactive links to provide evidence for my statements and encourage further engagement
          with issues.
        </JP>
      </JSection>

      <JSection id="social-media-design" heading="Social Media Design">
        <JP>
          This year, I explored ways to increase the engagement and readership of our newspaper through a new social
          media (Instagram) account. Although there had been Instagram accounts for The Stentorian in the past, they
          were rarely updated and did not have a large follower base.
        </JP>
        <JP>
          Seeking greater engagement on Instagram, I made a conscious effort to design posts for every published
          story in our print newspaper and post timely and relevant content relating to our school. We were
          successful; our new Instagram account (@ncssm.stentorian) has published 40 posts/reels since February
          2024, gaining over 300 followers and setting records of views and likes on posts.
        </JP>
        <JP>
          In the cases where stories do not have appropriate or available photographs to use as the feature image, I
          illustrate or graphic design digital feature images to use instead:
        </JP>
        <JImage src="/journalism/design-image-16.png" className="w-full" />
        <JP>And here are six of some most-recent posts I made in my senior year now:</JP>
        <JImage src="/journalism/design-image-17.png" className="w-full" />
        <JP>
          These series of posts show that my design style always leans towards a more chic, minimalistic vibe with
          words and photos. If there is a photo provided to me by the writers or our editorial board's designated
          photographers, then I will use it as the post's featured image. If not, our writer or any student with
          graphic design experience will be able to send us a visual that they drew or photoshopped out of a
          combination of many other photos. This allows our Instagram page to be home to a variety of different
          textures and genres to readers, of which many of them read different articles more closely because they
          recognize a specific familiar face or building in these featured images.
        </JP>
      </JSection>

      <JSection id="editorial-design" heading="Editorial Design">
        <JImage src="/journalism/design-image-18.png" className="w-full" />
        <JP>Here are some examples of the ads I designed for our business sponsors:</JP>
        <JImage src="/journalism/design-image-19.png" className="w-full" />
      </JSection>
    </JournalismModalShell>
  )
}
