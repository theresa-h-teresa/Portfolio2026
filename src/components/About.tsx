const linkClass = 'font-normal text-accent-light underline-offset-2 hover:underline'

export function About() {
  return (
    <section id="about" className="scroll-mt-[92px] py-12 font-display text-base font-light leading-relaxed text-ink md:py-16">
      <p className="mb-4">
        Hi there! I'm Teresa, and I like creating things. I'm a fullstack HCI and AI developer, researcher, and
        designer with expertise in building accountable and interactive user-centric applications. I take pride in
        crafting multimedia that local communities can see themselves in and find helpful. I enjoy working at the
        intersection of community and computing, where I believe technology should be human-first.
      </p>
      <p className="mb-4">
        Currently, I'm a Product and UX Research Assistant at the{' '}
        <a href="https://expressivemachinery.gatech.edu/" target="_blank" rel="noreferrer" className={linkClass}>
          Expressive Machinery Lab
        </a>{' '}
        (Georgia Tech) where I work on our design system and help build new interactions. I oversee engineering and
        design efforts across components, tooling, and patterns from conception to launch, collaborating closely
        with participants, engineers, and designers to ensure cohesion between our research goals, strategy,
        technology, and user experience.
      </p>
      <p className="mb-4">
        Previously, I've worked across a wide range of skillsets — from data analytics and leadership in{' '}
        <a href="#journalism" className={linkClass}>
          newsrooms
        </a>{' '}
        to stakeholder and market strategy for local and academic{' '}
        <a href="https://nique.net/author/Teresa%20Fang" target="_blank" rel="noreferrer" className={linkClass}>
          organizations
        </a>
        . Outside of my day-to-day work, I also conduct investigative{' '}
        <a href="https://atlpresscollective.com/author/teresa-fang/" target="_blank" rel="noreferrer" className={linkClass}>
          journalism
        </a>
        , recently covering infrastructure and transportation politics in metro Atlanta. These experiences have
        shaped how I think about building products that are both efficient and flexible.
      </p>
      <p className="mb-4">
        I am currently pursuing a B.S. in Journalism and Computer Science at Northwestern University, previously
        studying Computational Media at the Georgia Institute of Technology.
      </p>
      <p>
        In my spare time, you can usually find me{' '}
        <a href="https://www.youtube.com/@teresazfang" target="_blank" rel="noreferrer" className={linkClass}>
          making documentaries
        </a>
        , painting, hiking, cafe-hopping, or running around Minecraft looking for the best blocks for my next build.
      </p>
    </section>
  )
}
