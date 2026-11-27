export const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Product & Design Projects' },
  { id: 'journalism', label: 'Journalism' },
] as const

export const hero = {
  name: 'Teresa Fang',
  tagline:
    'I build human-centered products and systems at the intersection of technology, creativity, and community.',
  tags: ['product-builder', 'human-centered AI', 'user research'],
  socials: {
    mail: 'mailto:teresafangtzf@gmail.com',
    github: 'https://github.com/theresa-h-teresa',
    linkedin: 'https://www.linkedin.com/in/teresa-fang-5b2926284/',
  },
  resumeHref: '/Teresa_Fang_Resume.pdf',
}

export type SkillPill = string

export interface ExperienceItem {
  role: string
  org: string
  date: string
  description: string
  skills: SkillPill[]
  href?: string
}

export const experience: ExperienceItem[] = [
  {
    role: 'Research Assistant',
    org: 'Northwestern University — Creative Interfaces Research + Design Studio',
    date: 'Oct 2026 — Present',
    description:
      'Drive early-stage product discovery for the NSF-funded Generative Friction project, planning participatory design workshops that uncover artists’ workflows, creative friction, and agency in AI-assisted tools. Built a library of 35+ research activities for a program engaging 80+ artists, and design user journey mapping and prototype testing protocols while coordinating engineering readiness, recruitment, and evaluation criteria.',
    skills: ['Participatory Design', 'Product Discovery', 'User Research', 'Prototype Testing', 'Human-Centered AI'],
    href: 'https://www.creativeinterfaces.northwestern.edu/',
  },
  {
    role: 'Media Relations Associate',
    org: 'Northwestern University — Office of Global Marketing and Communications',
    date: 'Sep 2026 — Present',
    description:
      'Support university-wide media relations through content creation, media-industry research, journalist contact research, media-list management, and tracking and analysis of media coverage.',
    skills: ['Media Relations', 'Content Strategy', 'Media Research', 'Data Analysis'],
  },
  {
    role: 'Product Designer & Product Manager',
    org: 'Curio — The Garage at Northwestern',
    date: 'Sep 2026 — Present',
    description:
      'Building Curio as part of The Garage at Northwestern. Lead product design and release planning for Curio, a pocket companion for art museum visits — a website and upcoming iOS app where visitors snap the artworks that stopped them, log them, and share the visit as a printed-style receipt. Own the design system (colors, type, spacing, components), onboarding, App Store listing art, and design QA on TestFlight betas for the React Native iOS app now in development, and run a milestone plan that keeps every design delivery a week ahead of its build — from the 1.0 App Store launch through a 1.1 social layer with the privacy and safety flows (report, block, public/private visits) App Store review requires.',
    skills: ['Product Design', 'Product Management', 'Figma', 'Design Systems', 'Release Planning', 'React Native', 'App Store Launch'],
    href: 'https://curioreceipt.com/',
  },
  {
    role: 'Product & UX Research Assistant',
    org: 'Georgia Institute of Technology — Expressive Machinery Lab',
    date: 'Aug 2025 — Aug 2026',
    description:
      'Full-time, paid research appointment in Summer 2026. Translated needs from faculty, researchers, and creative practitioners into product requirements and success criteria across 2 iterations of no-code authoring tools (Sound Clouds, Resonant Spaces) for interactive audiovisual experiences. Built React prototypes and evaluated AI-driven interactions combining computer vision, spatial interaction, and real-time media, iterating through user feedback and public demonstrations.',
    skills: [
      'TouchDesigner',
      'Unity 2D/3D',
      'Figma',
      'LoopMidi',
      'Ableton',
      'Python',
      'C/C#',
      'Javascript',
      'WordPress',
    ],
    href: 'https://github.gatech.edu/Expressive-Machinery-Lab/ResonantSpaces_AuthoringTool/tree/summer26',
  },
  {
    role: 'Product Manager',
    org: 'Georgia Institute of Technology — Grand Challenges',
    date: 'Aug 2025 — May 2026',
    description:
      'Led a 5-person interdisciplinary team through product discovery for GeoBind, a sustainable soil-remediation solution, engaging 24 community, academic, legal, and technical stakeholders and conducting 11 interviews. Set product priorities and built implementation and commercialization roadmaps from competitive and market analysis; the project received the Grand Challenges Investor’s Award and Innovation Award.',
    skills: ['Figma', 'Adobe Premiere', 'Adobe Illustrator', 'roadmapping', 'stakeholder interviews', 'product discovery', 'strategy'],
    href: '/GeoBind/L12-GeoBindCementFinalPoster.png',
  },
  {
    role: 'Investigative Journalist',
    org: 'Atlanta Community Press Collective',
    date: 'Sep 2025 — Sep 2026',
    description:
      'Investigated Atlanta transit policy across 2 published reports, interviewing 7 government and advocacy stakeholders and analyzing a $5.5B tax-district extension against $2.2B in projected costs.',
    skills: ['Investigative Reporting', 'Interviewing', 'Public Records Analysis', 'Fact-Checking'],
    href: 'https://atlpresscollective.com/author/teresa-fang/',
  },
  {
    role: 'Product Research Collaborator',
    org: 'MIT Media Lab — Center for Constructive Communication',
    date: 'Summer 2025',
    description:
      'Supported early-stage exploration of tools for analyzing large-scale civic dialogue. Contributed to interface concepts and storytelling approaches for communicating complex civic datasets.',
    skills: ['Figma', 'data analysis', 'machine learning'],
    href: 'https://realtalk.boston/',
  },
  {
    role: 'Science Communicator / Writer',
    org: 'Curious Science Writers',
    date: 'May 2024 — Aug 2025',
    description:
      'Selected as 1 of 25 students nationally on full scholarship; interviewed researchers and wrote science stories for the public.',
    skills: ['Science Communication', 'Interviewing', 'Writing', 'Editing'],
    href: 'https://curioussciencewriters.org/articles/2024/09/25/when-bioinformatics-looks-like-hot-dogs-how-t-cell-and-b-cell-epitope-prediction-preps-you-against-pathogens/',
  },
  {
    role: 'Student Researcher',
    org: 'NCSSM Research in Physics Program',
    date: 'Sep 2023 — May 2025',
    description:
      'Built 4 Python/MATLAB models from Greenland field data, identifying basal melting as the key driver of iceberg melt.',
    skills: ['Python', 'MATLAB', 'Data Analysis', 'Scientific Modeling'],
  },
]

export const leadership: ExperienceItem[] = [
  {
    role: 'Editor-in-Chief',
    org: 'The Stentorian (North Carolina School of Science and Mathematics)',
    date: 'Sep 2023 — May 2025',
    description:
      "Launched the school's first online news platform in 40+ years (0→1); led a 20+ person cross-functional team and built editorial workflows that scaled readership to 23K monthly views and 88K monthly impressions, funded by $1,200+ in sponsorships; used web and social analytics to guide story selection and publishing timing.",
    skills: ['Adobe Premiere', 'Adobe InDesign', 'engagement metrics', 'management operations', 'sponsor relations', 'public speaking', 'editorial management'],
  },
  {
    role: 'President',
    org: 'Chapel Hill Youth Council',
    date: 'Sep 2021 — May 2025',
    description:
      "Drove a policy initiative through municipal stakeholders that made Lunar New Year a district-wide school holiday for 14K+ students; organized the council's first Candidates Election Forum (2023), drawing 7 candidates and 50+ high school attendees.",
    skills: ['stakeholder management', 'strategic communication', 'cross-functional leadership', 'project management', 'policy research', 'community engagement'],
  },
  {
    role: 'Founder & Artist',
    org: 'Ugly Cat',
    date: 'Feb 2024 — Present',
    description:
      'Founded an art and illustration studio; sold 200+ tote bags plus mini artworks and stickers, donating $3,000+ in proceeds.',
    skills: ['illustration', 'entrepreneurship', 'merchandising'],
    href: 'https://www.instagram.com/_uglycatstudio/',
  },
]

export interface ProjectItem {
  title: string
  role: string
  description: string
  skills: SkillPill[]
  /** Optional: a placeholder box is shown until an image is added to public/. */
  thumbnail?: string
  href?: string
}

export const projects: ProjectItem[] = [
  {
    title: 'Curio',
    role: 'Product Designer & Product Manager | The Garage at Northwestern',
    description:
      'A pocket companion for art museum visits: a website and iOS app (in development) where visitors snap the artworks that stopped them, log them, and share the visit as a printed-style receipt. Lead design and release planning for the React Native app, from the 1.0 App Store launch to a 1.1 social layer, owning the design system, onboarding, App Store listing art, and TestFlight design QA, with every design delivery landing a week ahead of its build.',
    skills: ['Product Design', 'Design Systems', 'Release Planning', 'Figma'],
    thumbnail: '/Curio/curio-thumb.jpg',
    href: 'https://curioreceipt.com/',
  },
  {
    title: 'GeoBind Cement',
    role: 'Product Manager | Georgia Tech Grand Challenges',
    description:
      'Product manager for a five-person engineering team proposing to turn lead-contaminated West Atlanta soil into on-site construction material. Led discovery with 24 stakeholders and 11 interviews, steered the pivot from phytoremediation to soil–cement, framed our feasibility tests around the riskiest assumptions, and built the commercialization roadmap; won the Investor’s Award and Innovation Award.',
    skills: ['Product Discovery', 'Stakeholder Interviews', 'Experiment Design', 'Roadmapping'],
    thumbnail: '/geobind-case/thumb.jpg',
  },
  {
    title: 'Franky',
    role: 'Founder & Product Lead | Independent Product Venture',
    description:
      'A physical-digital focus companion that turns everyday tasks into quests for middle school students with ADHD. Led the product from early discovery through MVP, interviewing 8 students, developing 3 personas, and testing 2 product concepts. Drove 0→1 discovery to define MVP requirements and a product roadmap across physical and digital touchpoints, then built two functional prototypes.',
    skills: ['Product Discovery', 'User Research', 'Prototyping', '0→1'],
    thumbnail: '/Thumbnail_Franky.png',
  },
  {
    title: 'Sound Clouds / ARRAY',
    role: 'Research Assistant | Undergraduate Research at Expressive Machinery Lab',
    description:
      'A no-code authoring platform for creating interactive audiovisual experiences through movement and spatial interaction. Worked across product, UX, and engineering to prototype computer-vision interactions and build 2D/3D simulation tools for rapid experimentation.',
    skills: ['HCI', 'Computer Vision', 'Interaction Design', 'Prototyping'],
    thumbnail: '/Thumbnail_Array.png',
    href: 'https://github.gatech.edu/Expressive-Machinery-Lab/ResonantSpaces_AuthoringTool',
  },
  {
    title: 'Job Mama',
    role: 'Product Designer & UX Researcher | HCI Course Project',
    description:
      'A centralized job-search and interview-prep platform for undergraduate computing students. Designed the Project Showcase Library and User Dashboard, ran think-aloud usability tests (5 across the team), identified 6 usability pain points, and redesigned the prototype around the findings.',
    skills: ['UX Research', 'Usability Testing', 'Interaction Design', 'Figma'],
    thumbnail: '/Thumbnail_JobMama.png',
    href: 'https://www.figma.com/proto/cSLYSMh1VsXet38Mfj7f6I/CS3751-prototype---poster--Copy-?node-id=361-554&t=KC0w8Rndq1vCYgGZ-1&scaling=scale-down&content-scaling=fixed&page-id=361%3A553&starting-point-node-id=366%3A981',
  },
  {
    title: 'Singapore Changi Airport',
    role: 'Brand & Digital Experience Redesign | Visual Design Course Project',
    description:
      'Reframed the airport’s website as civic infrastructure, taking it from wireframes to 20+ high-fidelity pages with a visual identity system, brand guidelines, typography, and information architecture. Built a reusable Figma component library (nav bar, cards, buttons) with variants to keep all pages consistent.',
    skills: ['Visual Identity', 'Information Architecture', 'Figma Components', 'Wireframing'],
    thumbnail: '/changi-case/proto-home-thumb.jpg',
  },
  {
    title: 'teresafang.net',
    role: 'Designer & Developer | Personal Portfolio',
    description:
      'This website: designed from a playful “desktop of windows” concept and built with React, TypeScript, Vite, and Tailwind CSS. Features an interactive fish tank of the bettas from my painting (feed them, startle them, or crack the glass to set them loose), case-study cards with an image lightbox, a journalism portfolio, and a layout that adapts from desktop to phone. Deployed to GitHub Pages with GitHub Actions.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'UI Design', 'Interaction Design'],
    thumbnail: '/portfolio-case/concept-title-card.jpg',
    href: 'https://teresafang.net/',
  },
]
