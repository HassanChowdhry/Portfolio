import {
  dalhousie,
  upwork,
  links,
  portfolio,
  leetbot,
  tweet,
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
  FaMedium,
  FaUpwork,
  GiTeacher,
  SiLeetcode,
  pixis,
  hassantree,
  beatstream,
  podtext_ai,
  oldbailey_ai,
  flappybird,
  ansys,
  icpc,
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
    title: "LinkedIn",
    Icon: FaLinkedin,
    link: "https://www.linkedin.com/in/bilal-ishtiaque/",
  },
  {
    title: "Github",
    Icon: FaGithub,
    link: "https://github.com/BilalIshtiaque",
  },
  {
    title: "Upwork",
    Icon: FaUpwork,
    link: "",
  },
  {
    title: "Medium",
    Icon: FaMedium,
    link: "",
  },
  {
    title: "ADPList",
    Icon: GiTeacher,
    link: "",
  },
  {
    title: "Stackoverflow",
    Icon: FaStackOverflow,
    link: "https://stackoverflow.com/users/4986912/bilal-ishtiaque",
  },
  {
    title: "Leetcode",
    Icon: SiLeetcode,
    link: "",
  }
];

const experiences = [
  {
    title: "Incoming Software Developer Intern",
    company_name: "Ansys",
    icon: ansys,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Apr 2025",
    points: [
      "Incoming Ansys CFD Software Developer Intern for the Winter 2025 term.",
    ],
  },
  {
    title: "ICPC NENA Contestant",
    company_name: "ICPC",
    icon: icpc,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Nov 2024",
    points: ["Third Place in the Atlantic region."],
  },
  {
    title: "Teaching Assistant",
    company_name: "Dalhousie University",
    icon: dalhousie,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Boosted student performance by 25% by implementing personalized tutoring strategies.",
      "Elevated code quality to industry standards by providing constructive feedback on 100+ assignments.",
      "Assisted in weekly labs for 50+ students, enhancing their practical understanding of front-end concepts.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "BOTR Solutions",
    icon: dalhousie,
    iconBg: "#E6DEDD",
    date: "May 2024 - Aug 2024",
    points: [
      "Revamped the company website with new designs, improving user experience and increasing engagement by 50%.",
      "Automated CI/CD pipelines reducing deployment time by 60% and ensuring scalable, reliable delivery.",
      "Developed comprehensive end-to-end backend systems for REST APIs, streamlining feature development.",
      "Created infrastructure using AWS CDK for scalable, reliable deployments and automated alerting for downtime.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#E6DEDD",
    date: "May 2023 - Dec 2023",
    points: [
      "Migrated and rewrote a web app, enhancing UI/UX and code quality, resulting in a 20% performance boost.",
      "Improved test coverage by introducing API and UI end-to-end tests, achieving a 20% reduction in reported issues.",
      "Optimized RESTful and WebSocket services, increasing unit test coverage from 50% to 90%.",
      "Ensured all automated tests were maintainable and scalable over time, contributing to long-term project success.",
    ],
  },
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
    source_code_link: "https://github.com/BilalIshtiaque/Portfolio",
    demo_link: "https://github.com/BilalIshtiaque/Portfolio"
  },
  {
    name: "OldBailey AI",
    description:
      "Developed an AI to assist researchers and historians by providing insights into historical trends, facilitating data analysis, and offering an immersive experience through role-play.",
    tags: [
      {
        name: "Next.js",
        color: "violet-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: oldbailey_ai,
    source_code_link: "https://github.com/BilalIshtiaque/OldBailey-AI",
    demo_link: "https://github.com/BilalIshtiaque/OldBailey-AI",
  }
];

export { services, experiences, projects };
