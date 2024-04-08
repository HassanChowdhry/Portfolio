import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  mongodb,
  docker,
  dalhousie,
  upwork,
  gallery,
  links,
  hikma,
  portfolio,
  leetbot,
  tweet,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Teaching Assistant",
    icon: mobile,
  },
  {
    title: "Software Developer",
    icon: creator,
  },
  {
    title: "Student",
    icon: backend,
  },
];

const technologies = [
  //languages
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  // {
  //   name: "Python",
  //   icon: html,//TODO:
  // },
  // {
  //   name: "C/C++",
  //   icon: css, //TODO:
  // },
  // {
  //   name: "SQL",
  //   icon: javascript, //TODO:
  // },
  // {
  //   name: "Java",
  //   icon: typescript, //TODO:
  // },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  // Frameworks
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "Express JS",
  //   icon: reactjs, //TODO:
  // },
  // {
  //   name: "Angular JS",
  //   icon: nodejs, //TODO:
  // },
  // {
  //   name: "Vite",
  //   icon: reactjs, //TODO:
  // },
  // {
  //   name: "Django",
  //   icon: nodejs, //TODO:
  // },
  // {
  //   name: "SCSS/SASS",
  //   icon: nodejs, //TODO:
  // },
  // {
  //   name: "Cypress",
  //   icon: reactjs, //TODO:
  // },
  // {
  //   name: "JUnit",
  //   icon: nodejs, //TODO:
  // },
  // {
  //   name: "Jest",
  //   icon: nodejs, //TODO:
  // },
  //libraries
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "JQuery",
  //   icon: nodejs, //TODO:
  // },
  // {
  //   name: "Pandas",
  //   icon: reactjs, //TODO:
  // },
  // {
  //   name: "NumPy",
  //   icon: nodejs, //TODO:
  // },
  // {
  //   name: "Matplotlib",
  //   icon: nodejs, //TODO:
  // },
  // {
  //   name: "SciPy",
  //   icon: reactjs, //TODO:
  // },
  // {
  //   name: "Discord API",
  //   icon: nodejs, //TODO:
  // },
  //devops/cloud
  {
    name: "docker",
    icon: docker,
  },
  // {
  //   name: "Amazon Web Services (AWS)",
  //   icon: docker, //TODO:
  // },
  // {
  //   name: "Firebase",
  //   icon: docker, //TODO:
  // },
  // Dev Tools
  {
    name: "git",
    icon: git, 
  },
  // {
  //   name: "Github",
  //   icon: figma, //TODO:
  // },
  // {
  //   name: "GitLab",
  //   icon: git, //TODO:
  // },
  // {
  //   name: "Postman",
  //   icon: figma, //TODO:
  // },
  // {
  //   name: "MySQL",
  //   icon: git, //TODO:
  // },
  // {
  //   name: "PostgreSQL",
  //   icon: figma, //TODO:
  // },
  {
    name: "MongoDB",
    icon: mongodb, //TODO:
  },
  {
    name: "figma",
    icon: figma, 
  }
];

const experiences = [
  {
    title: "Teaching Assistant (TA)",
    company_name: "Dalhousie University",
    icon: dalhousie,
    iconBg: "#E6DEDD",
    date: "May 2023 - Jan 2024",
    points: [
      "Boosted student performance by 25% by implementing personalized tutoring strategies.",
      "Elevated code quality to industry standards by providing constructive feedback on 100+ assignments.",
      "Assisted in weekly labs for 50+ students, enhancing their practical understanding of front-end concepts.",
      "Proctored course final exam for 150+ students, ensuring compliance with academic policies."
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Upwork Freelancer",
    icon: upwork,
    iconBg: "#E6DEDD",
    date: "May 2023 - Dec 2023",
    points: [
      "Successfully migrated and rewrote a web application, improving UI/UX and code quality. This resulted in a 20% performance improvement.",
      "Improved test coverage by introducing API and UI end-to-end tests, achieving a 20% reduction in reported issues.",
      "Optimized existing RESTful and WebSocket services by removing dead code and increasing unit test coverage to 90% (previously at 50%)."
    ]
  }
];

const projects = [
  {
    name: "Portfolio",
    description:
      "Engineered an interactive website showcasing technical skills, successful projects, and professional experience, leading to heightened user engagement, increased inquiries, and networking opportunities.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "violet-text-gradient",
      },
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/HassanChowdhry/Portfolio",
  },
  {
    name: "Photo Gallery",
    description:
      "Designed and developed a photography-centric full stack application with a user and database photo gallery, elevating engagement through the integration of profile photos.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "orange-text-gradient",
      },
    ],
    image: gallery,
    source_code_link: "https://github.com/HassanChowdhry/PhotoGallery-V2",
  },
  {
    name: "Google Links",
    description:
      "Developed an open-source web app optimizing research productivity by scraping and organizing Google search data into custom Excel sheets, boosting data collection efficiency by 30%.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "Excel",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: links,
    source_code_link: "https://github.com/HassanChowdhry/GoogleLinks",
  },
  {
    name: "Hikma AI",
    description:
      "Led the development of an Artificial Intelligence (AI) discovery tool, resulting in a 15% increase in community-generated ideas and fostering a culture of innovation within the community.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "violet-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
    ],
    image: hikma,
    source_code_link: "https://github.com/HassanChowdhry/hikma-ai-frontend",
  },
  {
    name: "Leetcode Stats Bot",
    description:
      "Engineered a custom Discord bot designed to analyze Leetcode statistics and performance metrics for the competitive programming community.",
    tags: [
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Discord API",
        color: "violet-text-gradient",
      },
      {
        name: "Pandas",
        color: "blue-text-gradient",
      },
    ],
    image: leetbot,
    source_code_link: "https://github.com/HassanChowdhry/Leetcode-Stats-Bot",
  },
  {
    name: "Tweet Generator",
    description:
      "Launched an open-source web application to make customized tweets. The user fills out input forms, which updates and renders the tweet display asynchronously.",
    tags: [
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "HTML5",
        color: "pink-text-gradient",
      },
      {
        name: "CSS3",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "violet-text-gradient",
      },
    ],
    image: tweet,
    source_code_link: "https://hassanchowdhry.github.io/Tweet-Generator/",
  },
];

export { services, technologies, experiences, projects };