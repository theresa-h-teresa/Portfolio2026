const linkClass = 'font-normal text-accent-light underline-offset-2 hover:underline'

export function About() {
  return (
    <section id="about" className="scroll-mt-[92px] py-12 font-display text-base font-light leading-relaxed text-ink md:py-16">
      <p className="mb-6 font-mono text-sm text-ink/60">ABOUT</p>
      <p className="mb-4">
        Hi! I’m Teresa, a product builder, researcher, and designer interested in creating human-centered
        technology. I enjoy turning complex problems into products and experiences that are useful, intuitive, and
        grounded in real user needs—especially where technology, creativity, and community intersect.
      </p>
      <p className="mb-4">
        Currently, I’m a Product and UX Research Assistant at Georgia Tech’s{' '}
        <a href="https://expressivemachinery.gatech.edu/" target="_blank" rel="noreferrer" className={linkClass}>
          Expressive Machinery Lab
        </a>
        , where I work across product, design, and engineering to build interactive authoring tools and
        experiences. I translate user and stakeholder research into product requirements, prototype new
        interactions, and collaborate with researchers, engineers, and designers to connect research goals with
        technology and user experience.
      </p>
      <p className="mb-4">
        My background also spans{' '}
        <a href="https://nique.net/author/Teresa%20Fang" target="_blank" rel="noreferrer" className={linkClass}>
          journalism
        </a>
        , civic leadership, and community research. From leading a student{' '}
        <a href="#journalism" className={linkClass}>
          newsroom
        </a>{' '}
        to{' '}
        <a href="https://atlpresscollective.com/author/teresa-fang/" target="_blank" rel="noreferrer" className={linkClass}>
          reporting on infrastructure and transportation
        </a>{' '}
        in metro Atlanta, I’ve learned to ask good questions, work across different perspectives, and understand
        the people and systems behind a problem. That perspective shapes how I approach product discovery and
        decision-making.
      </p>
      <p className="mb-4">
        I’m currently studying Journalism and Economics at Northwestern University, with a minor in Computer
        Science, after beginning my undergraduate studies in Computational Media at Georgia Tech.
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
