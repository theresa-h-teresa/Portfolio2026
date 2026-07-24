import { JournalismModalShell } from '../JournalismModalShell'
import { JSection, JP, JImage, JLink } from '../JournalismBlocks'

const navItems = [
  { label: 'Preface / Teaching as Journalism Instructor', id: 'preface' },
  { label: 'Editing', id: 'editing' },
  { label: 'Leadership (and business!)', id: 'leadership' },
  { label: 'Team Building', id: 'team-building' },
  { label: 'Additional information on Editorial Policies & Operations Management Manual', id: 'epomm' },
]

export function EditingLeadershipCard({ onClose }: { onClose: () => void }) {
  return (
    <JournalismModalShell
      title="Editing, Leadership, and Team Building"
      navHeading="Quick Navigation"
      navItems={navItems}
      onClose={onClose}
    >
      <JSection id="preface" heading="Preface / Teaching as Journalism Instructor">
        <JP>
          At the North Carolina School of Science and Mathematics, I am one of the instructors for a special course
          called SEM0414 Newspaper Forum. I got this opportunity because I am editor-in-chief of the student
          newspaper. SEM0414 is a weekly 1-hour course that spans 15-weeks (1 whole semester) and has around 12
          students. I have full control over the curriculum and assignments, so as part of my goal to revitalize and
          modernize our 40-year-old newspaper, I created a new curriculum and new assignments to be taught. These
          materials can be viewed in this{' '}
          <JLink href="https://drive.google.com/drive/folders/1fQpsF5Xbek5J-eu5yDCVN3DiO7ZrrVFt?usp=sharing">
            Google Drive folder
          </JLink>
          .
        </JP>
        <JP>
          To me, this was not only a responsibility entrusted to me by way of my editor-in-chief position, but also
          an opportunity for myself to grow as a mentor and opportunity for aspiring journalists at my school. This
          course also serves as a bootcamp for underclassmen who wish to join The Stentorian's editorial board and
          get familiar with the editing rules, operation management, editorial policies, journalistic integrity and
          etiquette at NCSSM, etc. It is also open to anybody in the general community, who may not be registered for
          the class but still wish to audit and attend our courses.
        </JP>
        <JP>The units include:</JP>
        <ul className="ml-5 list-disc font-display text-base leading-snug text-ink">
          <li>Introduction to journalism and storytelling</li>
          <li>News & features</li>
          <li>Visual storytelling</li>
          <li>Opining</li>
          <li>Media literacy</li>
          <li>Broadcast journalism</li>
          <li>and more.</li>
        </ul>
        <JImage src="/journalism/el-image-3.png" className="w-full" />
        <JP>
          These materials are a combination of general journalism rules I've personally experienced or was taught and
          Stentorian-specific rules, such as the requirements for an opinion story pitch or what counts as different
          genres of journalistic writing for the sake of publishing online or in print.
        </JP>
        <JP>
          To me, I am honored to impart my journalism experience to students who want to become journalists, but
          don't have as much prior experience in the field. I believe the first step in a goal is to find meaningful
          and reliable connections in the direction you want to go, so hopefully this course was able to give my
          students a nice swim in the deep waters of journalism.
        </JP>
      </JSection>

      <JSection id="editing" heading="Editing">
        <JP>
          As a philosophy, I believe meaningful impact is created from trust, reliability, and clarity between myself
          and my team. From working with my editor-in-chief as a Scholastic Kid Reporter for three years to learning
          from others as an intern at the local magazine office, seeing what each team member brings to the table has
          always been one of my favorite parts of journalism. When it became my turn to serve as editor-in-chief of
          my student newspaper, it was more than an extra position to me but a responsibility entrusted to me by my
          teachers and classmates.
        </JP>
        <JP>
          For the school newspaper at my old high school (freshman and sophomore year), I was a column writer and
          pitched as many stories as I could. For The Stentorian at NCSSM, I have had experience being the
          multimedia, social media manager, website creator, newspaper distributor, and attended all the weekly
          editorial board meetings in junior year—I have made my fair share of gauging the position of the newspaper
          and formulating ideas on how to grow our paper even more. Whenever I had an idea, I'd contact the newspaper
          advisor and the editors-in-chief and chat with them in person or over email.
        </JP>
        <JP>
          Now, as the editor-in-chief, one mantra that influences my revisions and suggestions for my writers lies in
          the word "reinspection and evidence." From reading articles in the very first volume of The Stentorian to
          what I revise now, I notice the influx of opinion articles, which is good because that signifies that
          NCSSM students are receptive to their political, economic, cultural, and social surroundings. But in that
          opining, sometimes the evidence can be hard to communicate against the writers' arguments and claims. One
          strategy I've found effective is commenting on specific parts of articles and responding with questions.
          This serves as a direct form of feedback to the writer, as well as give guidance as to what to do next,
          whether that be adding more research to support the claim or using more subjective/objective language when
          appropriate. I found this strategy to be very effective, as just giving general advice can be interpreted
          differently by each writer.
        </JP>
        <JP>
          I also pay heavy attention to titles and headlines. From JCamp, I learned how to analyze a newspaper
          editorial layout/spread quickly (we had timed daily news quizzes on that day's Washington Post newspaper,
          which required us to read quickly like retired grandpas at the breakfast table before the quiz), and one of
          the key strategies to getting a reader to pay attention to a specific article was in the words the
          headline used. Thus, I would always give suggestions on headlines (with multiple options/alternatives) to
          the writer after reading their piece properly.
        </JP>
        <JImage src="/journalism/el-image-4.png" className="w-full" />
        <JP>
          As a journalist with scientific and humanities research experience, I know the importance of using evidence
          to support claims, or anything that the writer includes in their story. As an editor, I identify claims in
          writers' stories and factcheck them, especially for stories that mention government policies or politics.
        </JP>
        <JImage src="/journalism/el-image-5.png" className="w-full" />
        <JP>
          I'd also like to talk about the special conditions of being a writer at our STEM-focused high school. Many
          of our news, features, and opinion articles are about students' science accomplishments, scientific
          opportunities like research programs, and quotes from teachers and students. Because our school has
          bureaucratic communication systems where every quote and claim has to be constantly factchecked, or at
          least approved to be said (by way of our newspaper not being an independent news source) by the
          teachers/administration repeatedly before the final publication.
        </JP>
        <JP>
          Additionally, to maintain an unbiased coverage in our articles about people or groups of people, we try to
          maintain the same amount of writing for each group.
        </JP>
        <JImage src="/journalism/el-image-6.png" className="w-full" />
        <JImage src="/journalism/el-image-7.png" className="w-full" />
        <JP>
          Another key area I focus on is advantageous use of quotes. I try to reserve quotes only for opinionated
          thoughts from a source, and put into the writers' own words anything else fact-based. This strengthens the
          sources' impact, and allows the writer to fact-check the other information.
        </JP>
        <JP>
          On photos and crediting: it is our newspaper's policy to have at least two photos per story, whether it is
          a news or satire article, at all times. This is for publication reasons, as multiple photos allows editors
          the freedom to choose what photos fit the writing best or are the most appropriate to be printed or
          featured on our website. Additionally, we also have a rule of having the writer add a caption per photo
          along with photo credits.
        </JP>
        <JImage src="/journalism/el-image-8.png" className="w-full" />
        <JP>
          I established earlier in my senior year that our newspaper's editing system requires at least two editors
          per article. Sometimes, we have underclassmen who do not have prior journalism experience nor a formal
          editor position in our editorial board to train their editing skills on articles. In my job as
          editor-in-chief, I also review other editors' comments and respond to them appropriately. From my own past
          editors, I've learned that the editing eye and knowing the rules of the AP Stylebook is not an innate
          talent, but something that is to be practiced and trained. Editing is a peer process. The beauty of editing
          (and writing, evidently so) is that anybody can be great at it!
        </JP>
        <JImage src="/journalism/el-image-9.png" className="w-full" />
      </JSection>

      <JSection id="leadership" heading="Leadership (and business!)">
        <JP>
          On day one at my high school, I laid out my plans to the student body to revitalize our newspaper–over
          time for the past 40+ years, the readership had dwindled and the articles were too general. Many students
          didn't know our school even had a newspaper. In the past, whenever the layout was reviewed by the school
          administrators, they expressed worry about our funds to print enough issues, or if anyone would read it at
          all.
        </JP>
        <JP>
          My school, NCSSM, is an admissions-based STEM school, but this is not to say we lack humanities talent.
          There are plenty of stories to tell: our 680+ students form a jigsaw puzzle of cultures, identities, ideas,
          and stories from across the state. As the editor-in-chief, I believe in leading the editorial board to take
          advantage of this nature, adapt, and raise The Stentorian to new heights. We don't just run the newspaper
          because we need one to boost NCSSM's reputation as an elite institution; the school newspaper deserves the
          creative liberty and say in defining our school's place identity.
        </JP>
        <JP>
          To gain a better understanding of our student newspaper and how to develop a business model closer to
          functioning as an independent student newspaper, during my spring break in 2024, I contacted NCSSM alumni
          ('20) and current President of The Harvard Crimson, Sellers Hill, and went to tour The Crimson's office on
          Plympton Street at Harvard University. Not only did this opportunity serve as a chat over coffee about
          newspaper operations and business models, but also to interview{' '}
          <JLink href="https://ncssmstentorian.com/2024/05/24/how-to-newspaper-from-high-school-to-college-with-sellers-hill-20/">
            Sellers for my feature story
          </JLink>{' '}
          on tips on how to be a student journalist in college. To this day, I still use the special edition and
          normal edition of The Crimson that Sellers gave me as inspo for The Stentorian's modern editorial
          layout/spread.
        </JP>
        <JP>
          Our editorial board assembled quickly: our goal was to establish a powerful online and social public
          presence. We moved onto campus a week earlier than the other students and braved thunderstorms to deliver
          pitches to local businesses for sponsorships. We hold monthly editorial board meetings that are also open
          to the public and guest contributors. We created a system of production ladders, management operations,
          and editorial guidelines, making sure to define our DEI policies and a checklist of what types of stories
          make the cover, or "make the fold." We write about what makes student life at NCSSM great, but also what we
          think could be improved.
        </JP>
        <JP>
          Once we had our submissions guidelines and advertising policies published online and accessible to anyone,
          I was able to more professionally engage guest contributors and possible sponsors. I also constantly make
          sure to encourage all potential guest submissions/sponsors with a positive and open-minded attitude.
        </JP>
        <JP>
          Journalism is a small but large world, and countless lives can change if we dare to do one small thing.
          I'm proud to lead my editorial board to accomplish many "firsts" in school history: the website, social
          media, broadcasting, business management, sponsorships, editorial layouts, and yearlong color-printing.
          I'm excited to elevate my student journalism at the newspaper of whatever my future college will be, as
          well as other tech and political reviews, journals, and publications.
        </JP>
      </JSection>

      <JSection id="team-building" heading="Team Building">
        <JP>
          My goal from day one of arriving at NCSSM was to contribute my seven years of journalism experience to
          increasing interest in student journalism. As a graduating senior myself at a high school with just juniors
          and seniors, I have had to consider especially the staff-recruitment and legacy-building aspect of
          leadership. The quick student turnover of our school presents a challenge to many student organizations as
          to how to preserve and pass on the torch to our underclassmen. Of our small staff of 15 members, everyone
          is a senior. I attribute much of my confidence and experience in The Stentorian now to my time helping the
          editors-in-chief of last year (during my junior year) as the multimedia editor and frequent helper of
          distribution. Thus, I knew that if we wanted all the policies and progress we made this year to continue
          and succeed in the future, we needed to have an especially strong recruitment and training process for
          next year's Stentorian staff.
        </JP>
        <JP>
          In my junior year, I underwent training/preparation to join the editorial board by shadowing the
          editors-in-chief as they worked on the newspaper, and in their bimonthly editorial meetings whenever I
          could. Whenever it was time to distribute the newspapers to the residential halls, I would always race over
          to the office to grab a stack and distribute. During the annual Open House and Club Fair in Spring 2024, I
          created the trifold poster to promote the newspaper. This contributed greatly to the size of the current
          editorial board, as 15 members is an all-time high in school history. This was the first appearance of The
          Stentorian at a school event since 2020. Combined with the bootcamps offered during my journalism courses
          to juniors, hopefully aspiring student journalists won't have many obstacles to operating The Stentorian
          after all the seniors graduate.
        </JP>
        <JP>
          I always have four tabs open on my browser at all times: the inboxes of my personal Gmail, my school
          email, The Stentorian's ad email, and The Stentorian's general email. This allows me to respond to
          requests or inquiries immediately as per a journalist's habit. Whenever I respond, I use cordial language
          and try to be as professional but friendly as possible, whether to other students or potential business
          sponsors.
        </JP>
        <JImage src="/journalism/el-image-10.png" className="w-full" />
        <JP>
          I'm excited to witness the current growth of The Stentorian's editorial board, online presence, and
          schoolwide and community-wide influence. I cannot wait to surprise my underclassmen next year whenever I
          get the chance to come back to NCSSM from college!
        </JP>
      </JSection>

      <JSection id="epomm" heading="Additional info about EPOMM">
        <JP>
          Before the 2023-2024 school year ended, I created goals for the new editorial board and presented them to
          the newspaper advisor and the team in our first meeting in May 2024. These ideas, suggestions, and goals
          are recorded in a lengthy document called the "
          <JLink href="https://docs.google.com/document/d/1Cdr8Ywx1eyg-jesWXJtcEAusDYmtOlRMCUCvYz5-oFY/edit?usp=sharing">
            Editorial Policies and Operations Management Manual (EPOMM)
          </JLink>
          ," which to this day has become the doctrine that the masthead follows in our internal, external, and
          editing and promotional operations.
        </JP>
        <JP>
          Though described as "NCSSM's student-run news source," the Stentorian's content has been nearly-all
          comprised of sporadic and random work, covering topics ranging from things heard in dorms or issues on the
          other side of the planet.
        </JP>
        <JImage src="/journalism/el-image-11.png" className="w-full" />
        <JP>
          This year, we began to actively increase outreach toward the larger student body, even from the{' '}
          <JLink href="https://stentorianncssm.wordpress.com/2024/05/20/dean-of-humanities-elizabeth-moose-retires-after-31-years-at-ncssm/">
            faculty
          </JLink>
          , and welcome contributed work, in order to better represent the voices of all students. To do so, we also
          needed to set a formal policy to standardize such submissions. This policy is now in our EPOMM.
        </JP>
        <JP>
          Another new feature detailed in the EPOMM is the new Production Ladder template (right) for the purpose of
          planning every article to be printed in an issue a month before the spread is sent to the press. It also
          has a revenue-calculating aspect for sponsorships and printing prices.
        </JP>
        <JP>
          To write the EPOMM, I consulted NCSSM/Stentorian alumni in the journalism field. Most notably, Sellers Hill
          '20, current student at Harvard University and the 151st President of The Harvard Crimson.
        </JP>
        <JImage src="/journalism/el-image-12.png" className="w-full" />
        <JImage src="/journalism/el-image-13.png" className="w-full" />
        <JP>
          When I visited him at The Crimson's office in February 2024, I updated him on the state of our paper and he
          gave me suggestions on growth, editing and design rules, and tips on how to get business
          sponsorships/funding. I also took the chance to interview and write a feature{' '}
          <JLink href="https://stentorianncssm.wordpress.com/2024/05/24/how-to-newspaper-from-high-school-to-college-with-sellers-hill-20/">
            story
          </JLink>{' '}
          about him. Now, Sellers is the Stentorian's secondary newspaper advisor.
        </JP>
      </JSection>
    </JournalismModalShell>
  )
}
