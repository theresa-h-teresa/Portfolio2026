export const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'journalism', label: 'Journalism' },
] as const

export const hero = {
  name: 'Teresa Fang',
  title: 'Product Management',
  tagline:
    'I design systems that put users first when spaces between community and computing converge.',
  tags: ['product-builder', 'human-centered AI', 'user research'],
  socials: {
    mail: 'mailto:teresafangtzf@gmail.com',
    github: 'https://github.gatech.edu/zfang327',
    linkedin: 'https://www.linkedin.com/in/teresa-fang-5b2926284/',
  },
  resumeHref: '/Fang_Resume_PM.pdf',
}

export type SkillPill = string

export interface ExperienceItem {
  role: string
  org: string
  date: string
  description: string
  skills: SkillPill[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Product & UX Research Assistant',
    org: 'Expressive Machinery Lab',
    date: 'Sep 25 — Present',
    description:
      'Led product and UX design for a no-code authoring platform that enables non-technical users to create interactive audiovisual experiences, translating user and stakeholder research into product requirements and roadmap priorities. Prototyped and evaluated AI-driven interaction models using computer vision, spatial interaction, and real-time media, iterating through user feedback and public demonstrations.',
    skills: [
      'TouchDesigner',
      'Unity 2D/3D',
      'Figma',
      'LoopMidi',
      'Ableton',
      'Python',
      'C/C#',
      'Python',
      'Javascript',
      'WordPress',
    ],
  },
  {
    role: 'Product Research Collaborator',
    org: 'MIT Media Lab – Center for Constructive Communication',
    date: 'Summer 2025',
    description:
      'Supported early-stage exploration of tools for analyzing large-scale civic dialogue. Contributed to interface concepts and storytelling approaches for communicating complex civic datasets.',
    skills: ['Figma', 'data analysis', 'machine learning'],
  },
  {
    role: 'Product Manager',
    org: 'Georgia Tech Grand Challenges',
    date: 'Aug 2025 — May 2026',
    description:
      'Led product discovery for a sustainable soil-remediation solution addressing lead contamination, conducting 11 customer interviews and research with 24 community, academic, and legal stakeholders to identify adoption barriers and shape product strategy. Developed implementation and commercialization roadmaps focused on scalability and adoption, aligning technical and business workstreams around product priorities.',
    skills: ['Figma', 'Adobe Premiere', 'Adobe Illustrator', 'roadmapping', 'stakeholder interviews', 'product discovery', 'strategy'],
  },
]

export const leadership: ExperienceItem[] = [
  {
    role: 'Editor-in-Chief',
    org: 'The Stentorian (North Carolina School of Science and Mathematics)',
    date: 'Sep 2023 — May 2025',
    description:
      "Launched the school's first online news platform in 40+ years (0→1); led a 20+ person cross-functional team and built editorial workflows that scaled readership to 20.3K monthly views and 88K monthly impressions, funded by $1,200+ in sponsorships.",
    skills: ['Adobe Premiere', 'Adobe InDesign', 'engagement metrics', 'management operations', 'sponsor relations', 'public speaking', 'editorial management'],
  },
  {
    role: 'President',
    org: 'Chapel Hill Youth Council',
    date: 'Aug 2021 — May 2025',
    description:
      "Drove a policy initiative through municipal stakeholders that recognized Lunar New Year as a district school holiday, impacting 14K+ students; launched the council's first Candidates Election Forum.",
    skills: ['stakeholder management', 'strategic communication', 'cross-functional leadership', 'project management', 'policy research', 'community engagement'],
  },
]

export interface ProjectItem {
  title: string
  role: string
  description: string
  skills: SkillPill[]
  thumbnail: string
  href?: string
}

export const projects: ProjectItem[] = [
  {
    title: 'Sound Clouds / ARRAY',
    role: 'Research Assistant | Undergraduate Research at Expressive Machinery Lab',
    description:
      'ARRAY is also an ambient intelligence system designed to elicit deep human experience of awe, wonder, and beauty. For one year and summer, my role in this project was to translate evaluations through designing and storyboarding interactions then program backend functions and interactivity.',
    skills: ['TouchDesigner', 'Unity 2D/3D', 'Figma', 'LoopMidi', 'Ableton', 'Python', 'C/C#', 'Python', 'Javascript', 'WordPress'],
    thumbnail: '/Thumbnail_Array.png',
    href: 'https://github.gatech.edu/Expressive-Machinery-Lab/ResonantSpaces_AuthoringTool',
  },
  {
    title: 'Job Mama',
    role: 'Product Designer & UX Researcher | HCI Course Project',
    description:
      'Co-designed an internship-prep platform for college students, running usability and think-aloud studies to uncover key navigation and workflow challenges. Synthesized findings into 6 prioritized pain points and redesigned core user flows in Figma, sequencing improvements by user impact and feasibility.',
    skills: ['UX research', 'usability testing', 'user flows', 'information architecture', 'prototyping', 'prioritization', 'Figma'],
    thumbnail: '/Thumbnail_JobMama.png',
    href: 'https://www.figma.com/proto/jf963lMW1c6Yq6zgFdjj5E/CS3751-prototype---poster?node-id=361-554&t=Dqir86uOVZbrjfyX-1&scaling=min-zoom&content-scaling=fixed&page-id=361%3A553&starting-point-node-id=366%3A981',
  },
  {
    title: 'Franky',
    role: 'Founder & Product Lead | Independent Product Venture',
    description:
      'Defined the product vision for a hardware-software system helping students with ADHD improve task initiation through physical interaction and structured focus sessions. Drove 0→1 discovery: interviewed 8 students, developed 3 personas, and evaluated 2 prototype concepts to define MVP requirements and a product roadmap across physical and digital touchpoints.',
    skills: ['product strategy & discovery', 'MVP definition', 'customer interviews', 'prototyping', 'roadmapping'],
    thumbnail: '/Thumbnail_Franky.png',
  },
]
