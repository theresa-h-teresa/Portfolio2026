import { JournalismModalShell } from '../JournalismModalShell'
import { JSection, JP, JImage, JLink, JJump } from '../JournalismBlocks'

const navItems = [
  { label: 'Staff Manual', id: 'staff-manual' },
  { label: 'Interviewing', id: 'interviewing' },
  { label: 'Factchecking', id: 'fact-checking' },
  { label: 'Corrections Policy', id: 'corrections-policy' },
  { label: 'Code of Ethics', id: 'code-of-ethics' },
  { label: 'Objectivity and Journalism Ethics Research Paper', id: 'research-paper' },
]

export function LawEthicsCard({ onClose }: { onClose: () => void }) {
  return (
    <JournalismModalShell
      title="Law, Ethics, and News Literacy"
      navHeading="Quick Navigation"
      navItems={navItems}
      onClose={onClose}
    >
      <JSection id="staff-manual" heading="Staff Manual">
        <JP>
          Entering my role, one of my main priorities was reviving our staff manual. I had created a "Standard
          everything guide" – a series of linked documents outlining journalistic ethics, job responsibilities and
          effective editing habits – for all of the staff to reference. As an editorial board, we walked through each
          of these documents, including related documents created in prior years that were slightly outdated or less
          relevant.
        </JP>
        <JLink href="/stentorian-style-guide.pdf">Staff Manual (PDF)</JLink>
        <JP>
          My goal has been to make the documents regarding ethics and news literacy living and breathing, ones all
          staff both reference and embody. When editors ask me a question regarding ethics or news literacy, I
          consistently refer them to our revised manual. Now, I am creating a comprehensive staff manual flipbook
          detailing our journalistic practice as a publication.
        </JP>
        <JP>
          Specifically referring to ethics in journalism, I created slideshow guides (which is also part of the
          curriculum I made for the journalism course I teach) for all staffers to reference, especially towards the
          use of Artificial Intelligence.
        </JP>
      </JSection>

      <JSection id="interviewing" heading="Interviewing">
        <JP>
          Before beginning an interview, I always ask my source if they are willing to be recorded for transcription.
          This way, I can ensure that I accurately quote them and accurately contextualize the information and
          opinion they provide. If a source declines recording, I take copious notes in my reporter's notebook and
          only include quotes of which I am absolutely sure are accurate. I also included these guidelines in my
          interviewing guide for my staff to reference, which is also in the{' '}
          <JJump id="staff-manual">Staff Styles Manual</JJump>{' '}
          I attached in the previous section.
        </JP>
        <JP>
          The Stentorian does not quote check every article – it is almost impossible to post at a timely pace while
          having to send email quote checks for every story. However, if a source does explicitly request to preview
          their quotes before publishing, I will send them. That said, I never change quotes at their request unless
          they are inaccurate or misrepresented.
        </JP>
      </JSection>

      <JSection id="fact-checking" heading="Fact-checking">
        <JP>
          To gain credibility with our audience and ensure that the content we publish is factually correct, I have
          made fact-checking a priority. In every article I edit, I double-check hyperlinks to ensure that the
          paraphrased fact or piece of information is both correctly cited and comes from a credible source. In my
          own reporting, I always fact-check my work and verify the credibility of my sources to lead by example.
        </JP>
        <JP>
          When editing a news article earlier this semester, I clicked on a hyperlink in the reporter's story to
          fact-check and determine the source's credibility. In doing so, I noticed that her paraphrase of the
          information was incredibly similar to the external source's phrasing. Thus, I commented requesting that she
          rephrase. Later, I followed up in person to explain the importance of correctly paraphrasing sources and
          avoiding the cross into plagiarism.
        </JP>
      </JSection>

      <JSection id="corrections-policy" heading="Corrections Policy">
        <JP>On our website, we have a corrections policy published:</JP>
        <JImage src="/journalism/lawethics-image-30.png" className="w-full" />
      </JSection>

      <JSection id="code-of-ethics" heading="Code of Ethics">
        <JP>
          We have similarly published a Code of Ethics on our website, which is available for our audience to view
          for full transparency and accountability. At the beginning of the year, I walked my new staff through this
          policy and clarified any questions. By reminding our staff of our responsibility as student journalists
          from the start, I was able to mitigate any ethics issues down the line.
        </JP>
        <JImage src="/journalism/lawethics-image-31.png" className="w-full" />
        <JP>
          Additionally, prior to the school year, I created an Editors Agreement form in which all members of the
          Stentorian editorial board were required to sign before starting in their positions. This allows us to
          form a contractual relationship which promises the newspaper monthly articles.
        </JP>
        <JLink href="/24-25-stentorian-editor-commitment-agreement.pdf">
          24-25 Stentorian Editor Commitment Agreement (PDF)
        </JLink>
      </JSection>

      <JSection id="research-paper" heading="Objectivity and Ethics in Journalism Research Paper">
        <JP>
          This is a formal research paper I wrote on the objectivity and ethics of journalism from the print
          capitalism century to the age of fake news and social media now. The full revised paper is the immediate
          PDF below this paragraph. This paper will be published in my school's print humanities research journal in
          April 2025.
        </JP>
        <JLink href="/teresas-rhum-paper.pdf">Objectivity and Ethics in Journalism — Research Paper (PDF)</JLink>
        <JLink href="/rhum-process-essay.pdf">Research Process Essay (PDF)</JLink>
        <JP>
          No media outlet can portray itself as entirely objective, yet journalism is often lumped into a singular
          entity—"The Media"—accused of prioritizing profit over truth. In today's world, where social media
          platforms have become the dominant news source for millions, the public sees journalism as a faceless
          machine, failing to consider the nuances of reporting in the digital age. But isn't that view too
          simplistic? How does a single reporter or article suddenly dictate that an entire profession is "fake
          news"? If we want to make our country "great again," we first need to examine why this perception of media
          even exists, and how social media has shaped modern news consumption.
        </JP>
        <JP>
          In an era where misinformation spreads faster than facts, journalism has never been under greater
          scrutiny. Social media has disrupted traditional news structures, blurring the lines between reporting,
          opinion, and entertainment. My research explores the evolution of journalism–from print capitalism to
          clickbait culture–to argue that true objectivity is impossible. Instead of demanding neutrality, we should
          focus on equipping society with the tools to engage critically with news, especially in digital spaces. By
          bridging history, political science, and media studies, my work highlights the need for media literacy
          education, not only to combat misinformation but to redefine how we consume and interpret journalism in a
          social media-driven world.
        </JP>
        <JP>Significance of the Work</JP>
        <JP>1. Interdisciplinary Reinspection of Journalism Aimed to Reshape Public Perception</JP>
        <JP>
          Journalism is not just a profession. It is a reflection of national consciousness. My research weaves
          together history, political theory, communication studies, and media psychology to explore how journalism
          has shaped, and been shaped by public perception. From the rise of yellow journalism to the age of social
          media outrage cycles, I examine how media trust eroded over time and how fake news has embedded itself into
          modern discourse.
        </JP>
        <JP>
          I also explore how people psychologically interact with news–why readers gravitate toward confirmation
          bias, why social media creates hyper-polarized bubbles, and how algorithms reinforce ideological echo
          chambers. Social media has completely transformed journalism. Traditional newsrooms once controlled
          information flow, but now, anyone with access to a phone and the Internet can "break news." Citizen
          journalism, livestreaming, and digital activism have democratized reporting, yet they have also created a
          crisis of credibility. When influencers and viral posts often receive more engagement than verified news
          sources, how do we determine what is true? My work deepens the investigation into this question by
          presenting a holistic understanding of journalism's role in shaping society and how we can shift that
          relationship moving forward.
        </JP>
        <JP>2. Reject Expectations of Journalism's Myth of Objectivity</JP>
        <JP>
          Discussions about media bias always return to the same question: Why can't journalists just report the
          facts? But that assumes facts exist in a vacuum, which is false. The way a journalist chooses to frame a
          story–what facts are emphasized, which sources are included, how a headline is written and the simple
          inclusion of a byline–all influence how information is received. This is not necessarily bad, but it is
          inevitable.
        </JP>
        <JP>
          My research argues that objectivity is not just unattainable–it is a misleading expectation. Instead of
          striving for "neutral" news, we should acknowledge that subjectivity exists in every report and teach
          people how to critically analyze the media they consume. This shift in perspective moves responsibility
          from just journalists to readers themselves, empowering individuals to decode bias, question narratives,
          and form independent conclusions.
        </JP>
        <JP>Benefits to Society</JP>
        <JP>1. Promoting Media Literacy in Modern Educational Structure</JP>
        <JP>
          Misinformation isn't just a journalism problem but a public literacy crisis. We are raising generations of
          students who can memorize standardized test answers but struggle to differentiate between a
          well-researched article and a conspiracy theory on TikTok. My research argues for integrating media
          literacy into school curriculums, teaching students how to analyze sources, detect bias, and navigate a
          world where information is curated by algorithms rather than editors.
        </JP>
        <JP>2. Determining Reasons Behind Decreased Critical Thinking Levels</JP>
        <JP>
          How did we get so bad at critical thinking? I suspect it is partially due to the fact there is so much to
          process. Information is now available at our fingertips and it is impossible to have enough time to both
          scroll, be interested in the wide variety of that information, and maximize media consumption at the same
          time.
        </JP>
        <JP>
          I'll admit that I've fallen into this trap too. When I catch myself scrolling through Instagram or
          YouTube, I notice how quickly I categorize content: good or bad, right or wrong, reliable or fake. But
          reality isn't that simple. We rely on prior knowledge to process new information, but when we stop
          challenging that knowledge, we stop learning. This is the root of anti-intellectualism, the idea that
          critical analysis is unnecessary because surface-level understanding is enough. It's not.
        </JP>
        <JP>
          To reverse this trend, we need to change how people consume information. My research argues that media
          literacy isn't just about identifying fake news–it's about actively engaging with content instead of
          passively absorbing it.
        </JP>
        <JP>3. Strengthening Democracy Through an Informed Public, or A Mindful Audience</JP>
        <JP>
          A misinformed public is a manipulated public. Fake news has always existed, but its influence today is
          amplified by social media, where misinformation spreads unchecked and is often more engaging than the
          truth. My research explores how historical disinformation campaigns mirror modern political media tactics,
          allowing readers to recognize patterns in propaganda, algorithm-driven outrage, and manufactured
          narratives.
        </JP>
        <JP>
          If we want a functioning democracy, we need a public that is literate in media and both politically- and
          critically-engaged. This means moving beyond simple fact-checking and teaching people how to interpret
          news in the context of power, influence, and historical precedent.
        </JP>
        <JP>4. Challenging the Spread of Fake News</JP>
        <JP>
          Fake news doesn't exist because people are ignorant, but because it is profitable. From yellow journalism
          fueling the Spanish-American War to Facebook's disinformation machine, history proves that media thrives on
          outrage. My research examines how fake news spreads and what can be done to stop it, emphasizing reader
          responsibility, institutional accountability, and ethical journalism practices.
        </JP>
        <JP>Conclusion</JP>
        <JP>
          Journalism isn't just about reporting–it's about shaping how people understand the world. My research
          challenges traditional ideas of objectivity while advocating for a fundamental shift in how we engage with
          media.
        </JP>
        <JP>
          We live in an era where misinformation is woven into our everyday lives. If we don't actively question the
          information we consume, we risk becoming passive participants in our own democracy. Journalism will never
          be perfect, but an educated, critically engaged audience can determine whether it is a tool for truth or a
          weapon of manipulation. The difference is how we choose to read it.
        </JP>
      </JSection>
    </JournalismModalShell>
  )
}
