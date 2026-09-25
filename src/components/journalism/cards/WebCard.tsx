import { JournalismModalShell } from '../JournalismModalShell'
import { JSection, JP, JImage } from '../JournalismBlocks'

const navItems = [
  { label: 'Website', id: 'website' },
  { label: 'Instagram', id: 'social-media' },
]

export function WebCard({ onClose }: { onClose: () => void }) {
  return (
    <JournalismModalShell title="Web & Social Media" navHeading="Quick Navigation" navItems={navItems} onClose={onClose}>
      <JP>Our website and social media accounts provide an opportunity for innovation, timelessness, and power.</JP>
      <JP>
        We don't have to wait for the next deadline or publishing date to get information out when it's online, so
        our coverage can be much more timely than print publications. The flexibility we have to be creative with
        various multimedia forms creates endless chances for powerful coverage.
      </JP>

      <JSection id="website" heading="Website">
        <JP>
          The Stentorian is a multimedia news source, with a significant portion{' '}
          online—especially since May 2024.
        </JP>
        <JP>
          The virtual format allows me to incorporate more photographs and videos in my articles, for example, in
          this{' '}
          story{' '}
          about NASA astronaut and NCSSM alum Christina Koch's appearance at school in April 2024. The video I
          reported for and created accompanied a short blurb, including soundbites from our interviews and
          visualizations of my descriptions.
        </JP>
        <JImage src="/journalism/web-image-20.png" className="w-full" />
        <JP>
          Web also allows me to cover more newsy topics. Important stories about elections and school renovation
          concerns, or opinions about Hurricane Helene and the N.C. budget may not have been timely enough by the
          time we published our monthly print issue, but could be shared online.
        </JP>
        <JP>
          Below are a few stories I published last year. Whether news, opinion, or satire, these articles were all
          published in a timely manner in relation to the events they covered, especially as an anchor or reporter
          covering live broadcasts.
        </JP>
        <JP>
          For coverage of more controversial topics such as{' '}
          a nonrepresentative school admissions/marketing campaign
          , I take advantage of interactive links to provide evidence for my statements and encourage further
          engagement with issues.
        </JP>
      </JSection>

      <JSection id="social-media" heading="Social Media">
        <JP>
          This year, I explored ways to increase the attractiveness and professionalism of our Instagram account. I
          found and connected online story links to posts in bio (Linkinbio.com) to make links to our articles into
          automatic cards with a featured image. This link is in our Instagram account's bio for easy access to
          articles that viewers will see as posts.
        </JP>
        <JP>
          Seeking greater engagement on Instagram, our newspaper made a conscious effort to post timely and relevant
          content relating to our school. We were successful; gaining over 460 followers and setting records of
          views and likes on posts. Here are three of my most-viewed posts:
        </JP>
        <JImage src="/journalism/web-image-21.png" className="w-full" />
        <JP>
          This is a gallery of photographs I sent our editorial board's photographers to capture, published in the
          same weekend.
        </JP>
        <JImage src="/journalism/web-image-22.png" className="w-full" />
      </JSection>
    </JournalismModalShell>
  )
}
