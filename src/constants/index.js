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
  darkalpha,
  TReNDS,
  intervalhealth,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  java,
  python,
  // Project images
  bullrunCover,
  kapstoneCover,
  healthSyncCover,
  mediaSync,
  guestReportingSystem,
  keytake,
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
    title: '2+ Years of Experience',
    icon: web
  },
  {
    title: '4 Hackathon Wins',
    icon: backend
  },
  {
    title: '25+ Projects',
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
    title: 'Software Developer',
    company_name: 'Dark Alpha Capital',
    icon: darkalpha,
    iconBg: '#383E56',
    date: 'Jun 2025- Aug 2025',
    points: [
      'Developed an intelligent company flagging system to evaluate requirement documents and identify high-priority opportunities.',
      'Implemented a RAG-based architecture with Google ADK, enabling context-aware analysis of business deals.',
      'Reduced manual deal assessment time by 40% while improving decision accuracy for Business Development Associates.',
      'Enhanced the business development pipeline by automating opportunity flagging and supporting data-driven decision-making.'
    ]
  },
  {
    title: 'Application Developer',
    company_name: 'Interval Health',
    icon: intervalhealth,
    iconBg: '#E6DEDD',
    date: 'Mar 2024 - Dec 2024',
    points: [
      'Led the development of a women’s healthcare app from conception to product optimisation based on user feedback.',
      'Beta-tested over 150 users and helped secure $20k in funding from the Russel Innovation Center for Entrepreneurs and  TechStars Atlanta. Interviewed 10 healthcare providers along with the CEO and got endorsed by 4 medical professionals.',
      'Utilised React-Native Wrapper and SQL using a PHP server. Implemented a cumulative logic model for data analysis. Also managed the deployment and hosting of the application.'
    ]
  },
  {
    title: 'Research Intern',
    company_name: 'TReNDS Lab',
    icon: TReNDS,
    iconBg: '#383E56',
    date: 'Sept 2023 - July 2024',
    points: [
      'Led research analysing fMRI brain scans from 126 patients to explore variations in autism-related brain development.',
      'Presented research at TReNDS Conference and the Georgia State Research Conference. Developed an image analysis tool for visualising functional symmetry in autistic brains, employed by the TReNDS Department of Autism Study.',
      'Utilised methods such as Generalized Linear Regression, T-test, ANOVA, ICA, and Correlation analysis, incorporating specialised techniques like image differentiation and polar imaging.'
    ]
  }
]

const projects = [
  {
    name: 'BullRun AI',
    description:
      'BullRun is the first social investing platform combining proven AI agents with mandatory portfolio verification via SnapTrade, creating authentic communities where influencers show "skin in the game." Users get real-time sentiment analysis, patterns, and predictions in plain English—60% faster than tools like TradingView or Capital IQ—while verified creators build merit-based followings via revenue sharing and badges.',
    tags: [
      {
        name: 'Fintech',
        color: 'blue-text-gradient'
      },
      {
        name: 'FullStack',
        color: 'green-text-gradient'
      },
      {
        name: 'ADK',
        color: 'pink-text-gradient'
      }
    ],
    image: bullrunCover,
    source_code_link: 'https://github.com/pramitbhatia25/BR_Social/',
    website_link: 'https://www.bullrunai.app/'
  },
  {
    name: 'Kapstone',
    description:
      'Kapstone is a collaborative project management software designed to enhance the Capstone Project experience—typically university-level classes where students team up to work on corporate-sponsored projects. Kapstone is a web based full stack application built using React, Python, Flask, and PostgreSQL and hosted on GCP and vercel.',
    tags: [
      {
        name: 'EdTech',
        color: 'blue-text-gradient'
      },
      {
        name: 'Web App',
        color: 'green-text-gradient'
      },
      {
        name: 'Startup',
        color: 'pink-text-gradient'
      }
    ],
    image: kapstoneCover,
    source_code_link: 'https://github.com/pramitbhatia25/Kapstone',
    website_link: 'https://kapstone-landing.vercel.app/'
  },
  {
    name: 'HealthSync',
    description: "A healthcare platform that uses A.I. and data visualisation to help users understand their health history and make informed decisions. It provides a comprehensive analysis of a user's health history, including their medical history, medications, and lifestyle choices. The AI enabled doctor profile helps to understand general trends in patient health at scale.",
    tags: [
      {
        name: 'Medical',
        color: 'blue-text-gradient'
      },
      {
        name: 'Gen AI and ML',
        color: 'green-text-gradient'
      },
      {
        name: 'AI Avatar',
        color: 'pink-text-gradient'
      },     
      {
        name: 'Winner of Best HealthCare Hack at Hackalytics 2024 Georgia Tech!',
        color: 'yellow-text-gradient'
      },
    ],
    image: healthSyncCover,
    source_code_link: 'https://github.com/pramitbhatia25/HealthSync-Hackalytics2024',
    website_link: 'https://devfolio.co/projects/datadoctor-056d'
  },
  {
    name: 'MediaSync',
    description: "Media Sync is a cutting-edge multimedia platform designed to simplify managing and optimizing your presence across multiple social media platforms. It provides a unified solution to track posts across different networks, delivering in-depth analytics that compare your current performance with past posts and competitors' activity. Based on this analysis, its AI offers tailored strategies, and customized posts to maximize your reach, recommending the best platforms to focus on and actionable insights to enhance post exposure.",
    tags: [
      {
        name: 'Winner of Best HealthCare Hack at Hackalytics 2024 Georgia Tech!',
        color: 'blue-text-gradient'
      },
      {
        name: 'Gen AI and ML',
        color: 'green-text-gradient'
      },
      {
        name: 'AI Avatar',
        color: 'pink-text-gradient'
      },     
    ],
    image: mediaSync,
    source_code_link: 'https://github.com/avihhan/AIATL24_MediaSync-Client',
    website_link: 'https://devpost.com/software/mediasync?_gl=1*18r1sqg*_gcl_au*ODY4Mjg1ODgyLjE3NTU2MzQ0NDg.*_ga*MTM5NDc1MzMyOS4xNzU1NjM0NDQ4*_ga_0YHJK3Y10M*czE3NTU2MzQ0NDgkbzEkZzEkdDE3NTU2MzYyMDgkajM4JGwwJGgw'
  },
  {
    name: 'Guest Reporting System',
    description: "A secure, cloud-based guest check-in and reporting system with dynamic login, session management, real-time analytics, and user tracking. Built with cache storage and load balancing to support 100+ check-ins per minute, ensuring scalability, reliability, and efficient guest data management.",
    tags: [
      {
        name: 'Security',
        color: 'blue-text-gradient'
      },
      {
        name: 'Cloud',
        color: 'green-text-gradient'
      },
      {
        name: 'Full Stack',
        color: 'pink-text-gradient'
      }
    ],
    image: guestReportingSystem,
    source_code_link: 'https://github.com/avihhan/guest-reporting-system',
    website_link: 'http://34.173.93.45/'
  },
  {
    name: 'KeyTake',
    description: "An AI organizer and summarizer for groupMe and slack chats. It uses LLM to summarize the chats and provide a summary of the key takeaways. It also uses the meeting notes to generate a list of action items and tasks.",
    tags: [
      {
        name: 'Security',
        color: 'blue-text-gradient'
      },
      {
        name: 'Cloud',
        color: 'green-text-gradient'
      },
      {
        name: 'Full Stack',
        color: 'pink-text-gradient'
      }
    ],
    image: keytake,
    source_code_link: 'https://github.com/avihhan/KeyTakes',
    website_link: 'https://keytakes-app.vercel.app/'
  }
]

export { services, technologies, experiences, projects }
8