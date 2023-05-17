import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  java,
  python
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
]

const services = [
  {
    title: 'Web Developer',
    icon: web
  },
  {
    title: 'Backend Developer',
    icon: backend
  },
  {
    title: 'Programmer',
    icon: mobile
  }
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },

  {
    name: 'React JS',
    icon: reactjs
  },

  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'Node JS',
    icon: nodejs
  },

  {
    name: 'git',
    icon: git
  },
  {
    name: 'java',
    icon: java
  },
  {
    name: 'python',
    icon: python
  }
]

const experiences = [
  {
    title: 'Lorem ipsum Developer',
    company_name: 'Lorem Ipsum Inc.',
    icon: meta,
    iconBg: '#383E56',
    date: 'Lorem 2020 - Ipsum 2021',
    points: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Nulla ultricies sapien a dolor ultrices, nec sagittis leo aliquet.',
      'Vestibulum fermentum enim at velit ultrices, vel finibus dolor pharetra.',
      'Donec sed mi ut lectus interdum eleifend a ut risus.'
    ]
  },
  {
    title: 'Lorem Ipsum Developer',
    company_name: 'Dolor Sit Amet Corp.',
    icon: starbucks,
    iconBg: '#E6DEDD',
    date: 'Lorem 2021 - Ipsum 2022',
    points: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Nulla ultricies sapien a dolor ultrices, nec sagittis leo aliquet.',
      'Vestibulum fermentum enim at velit ultrices, vel finibus dolor pharetra.',
      'Donec sed mi ut lectus interdum eleifend a ut risus.'
    ]
  },
  {
    title: 'Lorem Ipsum Developer',
    company_name: 'Lorem Ipsum Ltd.',
    icon: tesla,
    iconBg: '#383E56',
    date: 'Lorem 2022 - Ipsum 2023',
    points: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Nulla ultricies sapien a dolor ultrices, nec sagittis leo aliquet.',
      'Vestibulum fermentum enim at velit ultrices, vel finibus dolor pharetra.',
      'Donec sed mi ut lectus interdum eleifend a ut risus.'
    ]
  },
  {
    title: 'Lorem Ipsum Developer',
    company_name: 'Lorem Ipsum Co.',
    icon: shopify,
    iconBg: '#E6DEDD',
    date: 'Lorem 2023 - Ipsum Present',
    points: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Nulla ultricies sapien a dolor ultrices, nec sagittis leo aliquet.',
      'Vestibulum fermentum enim at velit ultrices, vel finibus dolor pharetra.',
      'Donec sed mi ut lectus interdum eleifend a ut risus.'
    ]
  }
]

const projects = [
  {
    name: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate semper mi non vestibulum. Praesent tempor pellentesque vestibulum. Maecenas consequat malesuada neque, ut ultrices sem tempor ut. Vivamus pulvinar, urna vitae consequat convallis, lacus dui aliquet risus, sed finibus massa justo a velit.',
    tags: [
      {
        name: 'Lorem Ipsum',
        color: 'blue-text-gradient'
      },
      {
        name: 'Lorem Ipsum',
        color: 'green-text-gradient'
      },
      {
        name: 'Lorem Ipsum',
        color: 'pink-text-gradient'
      }
    ],
    image: carrent,
    source_code_link: 'https://github.com/'
  },
  {
    name: 'Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate semper mi non vestibulum. Praesent tempor pellentesque vestibulum. Maecenas consequat malesuada neque, ut ultrices sem tempor ut. Vivamus pulvinar, urna vitae consequat convallis, lacus dui aliquet risus, sed finibus massa justo a velit.',
    tags: [
      {
        name: 'Lorem Ipsum',
        color: 'blue-text-gradient'
      },
      {
        name: 'Lorem Ipsum',
        color: 'green-text-gradient'
      },
      {
        name: 'Lorem Ipsum',
        color: 'pink-text-gradient'
      }
    ],
    image: jobit,
    source_code_link: 'https://github.com/'
  },
  {
    name: 'Lorem Ipsum',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate semper mi non vestibulum. Praesent tempor pellentesque vestibulum. Maecenas consequat malesuada neque, ut ultrices sem tempor ut. Vivamus pulvinar, urna vitae consequat convallis, lacus dui aliquet risus, sed finibus massa justo a velit.",
    tags: [
      {
        name: 'Lorem Ipsum',
        color: 'blue-text-gradient'
      },
      {
        name: 'Lorem Ipsum',
        color: 'green-text-gradient'
      },
      {
        name: 'Lorem Ipsum',
        color: 'pink-text-gradient'
      }
    ],
    image: tripguide,
    source_code_link: 'https://github.com/'
  }
]

export { services, technologies, experiences, projects }
