import { JournalismModalShell } from '../JournalismModalShell'
import { JSection, JP, JImage } from '../JournalismBlocks'

const navItems = [
  { label: 'Preface', id: 'preface' },
  { label: 'Presidential Election Coverage', id: 'presidential-election' },
  { label: 'Social Issues Protest', id: 'social-issues-protest' },
  { label: 'School Robotics Team', id: 'robotics-team' },
  { label: 'Student Events', id: 'student-events' },
  { label: 'School Musical', id: 'school-musical' },
  { label: 'Community Service', id: 'community-service' },
]

export function PhotojournalismCard({ onClose }: { onClose: () => void }) {
  return (
    <JournalismModalShell
      title="Photojournalism"
      navHeading="Quick Navigation"
      navItems={navItems}
      onClose={onClose}
    >
      <JSection id="preface" heading="Preface">
        <JP>
          I will preface this page by saying that I do not consider myself a photojournalist—my photos alone often
          cannot express a whole story as professional photojournalism can. However, I do enjoy taking pictures,
          whether they are small stories within themselves or supplements to other stories I am writing. I find that
          taking a multimedia approach helps engage me on a deeper level with a written story.
        </JP>
      </JSection>

      <JSection id="presidential-election" heading="Presidential Election Coverage">
        <JP>
          During the presidential elections of 2020, I picked up a Canon for the first time to shoot the trajectory
          of the presidential candidates, their rallies, and voters. Although I struggled at first with settings and
          where to stand in these busy spaces, I got the hang of it to produce these pictures. Getting over being
          shy, I learned the importance of gathering information for captions, which I would work to improve the next
          time.
        </JP>
        <JImage src="/journalism/photo-image-23.png" className="w-full" />
      </JSection>

      <JSection id="social-issues-protest" heading="Social Issues Protest">
        <JP>
          In my general reporting, I like to cover events such as political, cultural and social protests. By
          extension, many of my photos are from related protests. Signs are clearly easy statements to capture, but
          my main goal while photographing protests is to capture the raw emotions that come out of the energy of a
          crowd, a likeminded group, which build up naturally at these events: whether that is anger, sadness, hope,
          or passion.
        </JP>
        <JImage src="/journalism/photo-image-24.png" className="w-full" />
      </JSection>

      <JSection id="robotics-team" heading="School Robotics Team">
        <JImage src="/journalism/photo-image-25.png" className="w-full" />
        <JP>
          Being the Chief Media Lead in my school's robotics team was the perfect opportunity to practice my indoors
          photography. The photos to the right were featured in the team's promotional video and in a newspaper
          feature gallery. The year I took these photos was important because it was the last year our team had
          mentors.
        </JP>
      </JSection>

      <JSection id="student-events" heading="Student Events">
        <JImage src="/journalism/photo-image-26.png" className="w-full" />
        <JP>
          In my photos of school events, I committed to taking pictures of the energy of the environment and its
          people. Although this proved more difficult than I thought, I shot these moments for different galleries or
          photo stories.
        </JP>
      </JSection>

      <JSection id="school-musical" heading="School Musical">
        <JP>
          Our school's dark auditorium was the perfect spot to practice my dark-location photography. The photos to
          the right were featured in our paper's online gallery about how the theater department brought back their
          musical after the pandemic.
        </JP>
        <JImage src="/journalism/photo-image-27.png" className="w-full" />
      </JSection>

      <JSection id="community-service" heading="Community Service">
        <JP>
          From the spring of 2020, during the pandemic, to now, I have been photographing a trail cleanup project in
          my hometown and writing a story too. This was the peak opportunity for me to practice outdoors and day
          photography, as well as impromptu, man-on-the-street interviews.
        </JP>
        <JImage src="/journalism/photo-image-28.png" className="w-full" />
      </JSection>
    </JournalismModalShell>
  )
}
