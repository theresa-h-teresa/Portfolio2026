const linkClass = 'font-normal text-accent-light underline-offset-2 hover:underline'

export function About() {
  return (
    <section id="about" className="scroll-mt-4 py-10 font-display text-base font-light leading-relaxed text-ink lg:py-16">
      <p className="mb-6 font-mono text-sm text-ink/60">ABOUT</p>
      <p className="mb-4">
        Hi! I’m Teresa, a product builder, researcher, and designer interested in creating human-centered
        technology. I enjoy turning complex problems into products and experiences that are useful, intuitive, and
        grounded in real user needs—especially where technology, creativity, and community intersect.
      </p>
      <p className="mb-4">
        Currently, I’m a Research Assistant at Northwestern’s{' '}
        <a href="https://www.creativeinterfaces.northwestern.edu/" target="_blank" rel="noreferrer" className={linkClass}>
          Creative Interfaces Research + Design Studio
        </a>
        , where I lead early-stage product discovery and participatory design workshops exploring how artists work with
        AI-assisted creative tools. Before that, I was a Product and UX Research Assistant at Georgia Tech’s{' '}
        <a href="https://expressivemachinery.gatech.edu/" target="_blank" rel="noreferrer" className={linkClass}>
          Expressive Machinery Lab
        </a>
        , where I worked across product, design, and engineering to build interactive authoring tools and
        experiences—translating user and stakeholder research into product requirements, prototyping new
        interactions, and collaborating with researchers, engineers, and designers.
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
        I’m currently studying Journalism with a second major in Economics and a minor in Computer Science at
        Northwestern University’s Medill School of Journalism, after beginning my undergraduate studies in Computational Media at Georgia Tech.
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
