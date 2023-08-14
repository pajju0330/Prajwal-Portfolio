import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  mongo,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  chatio,
  upBeat,
  Ecomm,
  movie,
  auth,
  space,
  codechef,
  dcc,
  wluglogo,
  oaknst,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'workExperience',
    title: 'Work Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Cloud and DevOps Practitioner',
    icon: ux,
  }
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'node',
    icon: mongo,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'President',
    company_name: 'Codechef WCE Chapeter',
    icon: codechef,
    iconBg: '#ffffff',
    date: 'feb 2022 - present',
  },
  {
    title: 'Web Development Intern',
    company_name: 'Oaknst',
    icon: oaknst,
    iconBg: '#ffffff',
    date: 'March 2023 - June 2023',
  },
  {
    title: 'Web Developer',
    company_name: `Walchand Linux Users Group`,
    icon: wluglogo,
    iconBg: '#ffffff',
    date: 'May 2023 - present',
  }
];

const   projects = [
  {
    id: 'project-1',
    name: 'Chat-io',
    description: 'A real time chatting application built using socket-io',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: chatio,
    repo: 'https://github.com/pajju0330/Chat-IO',
    demo: 'https://chat-io-three.vercel.app/',
  },
  {
    id: 'project-2',
    name: 'Up Beat',
    description:
      'A music player built on pure HTML CSS and JS',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'js',
        color: 'yello-text-gradient',
      },
    ],
    image: upBeat,
    repo: 'https://github.com/pajju0330/upBeat',
    demo: 'https://pajju0330.github.io/upBeat/',
  },
  {
    id: 'project-3',
    name: 'Ecommerce Backend',
    description: 'This is complete backend for an ecommerce website built using nodejs and mongodb',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: Ecomm,
    repo: 'https://github.com/pajju0330/Ecommerce-Platform',
    demo: 'https://github.com/pajju0330/Ecommerce-Platform#readme',
  },
  {
    id: 'project-4',
    name: 'Medi Raksha',
    description: `A Blockchain based solution in healthcare industry for authenticating and tracking the supply chain of the medicines.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/NeutronHive/MediRaksha-ACM',
    demo: 'https://github.com/NeutronHive/MediRaksha-ACM',
  },
  {
    id: 'project-5',
    name: 'Auth Codes',
    description:
      'Collection of high quality code snippets for authentication in nodejs',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: auth,
    repo: 'https://github.com/pajju0330/Auth-Codes',
    demo: 'https://github.com/pajju0330/Auth-Codes#readme',
  },
];

export { services, technologies, experiences, projects };
