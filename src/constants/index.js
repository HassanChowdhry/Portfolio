import {
  dalhousie,
  upwork,
  links,
  portfolio,
  leetbot,
  tweet,
  FaLinkedin,
  FaGithub,
  FaUpwork,
  SiLeetcode,
  pixis,
  podtext_ai,
  oldbailey_ai,
  ansys,
  icpc,
  botr,
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
    link: "https://www.linkedin.com/in/hassanchowdhry/",
  },
  {
    title: "Github",
    Icon: FaGithub,
    link: "https://github.com/HassanChowdhry",
  },
  {
    title: "Leetcode",
    Icon: SiLeetcode,
    link: "https://leetcode.com/u/HassanChowdhry/",
  },
  {
    title: "Upwork",
    Icon: FaUpwork,
    link: "https://www.upwork.com/freelancers/~013df04d0a3432d810",
  },
];

const experiences = [
  {
    title: "Cybersecurity Research Assistant",
    company_name: "Dalhousie University (MYTech Lab)",
    icon: dalhousie,
    iconBg: "#E6DEDD",
    date: "May 2025 - Present",
    points: [
      "Automated Cyber Defence (ACD) with Deep Reinforcement Learning (DRL).",
      "NSERC/FCS USRA"
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Ansys",
    icon: ansys,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - May 2025",
    points: [
      "Spearheaded the creation of a 50+ Cypress end-to-end test suite for Ansys Fluids WebUI, directly addressing 10+ critical UI bugs and accelerating the testing cycle by 15%.",
      "Enhanced Computational Fluid Dynamics (CFD) simulation tools by improving front-end and back-end systems, increasing user efficiency by 25% and reducing simulation setup time by 15%.",
      "Improved user experience and interface performance by optimizing graphics rendering and state management using Redux, resulting in a 30% reduction in UI latency and smoother interactions.",
    ],
  },
  {
    title: "Head Teaching Assistant",
    company_name: "Dalhousie University",
    icon: dalhousie,
    iconBg: "#E6DEDD",
    date: "May 2023 - May 2025",
    points: [
      "Boosted practical knowledge of 150+ students in frontend and backend development by leading weekly labs, ensuring hands-on learning and application of DS&A, Frontend, Backend and Fullstack development concepts.",
      "Optimized student support and accessibility by designing and implementing an On-Call TA model, which increased flexibility for TAs and ensured timely assistance for students, boosting student participation by 20%.",
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
    title: "Software Developer",
    company_name: "BOTR Solutions",
    icon: botr,
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
    source_code_link: "https://github.com/HassanChowdhry/Portfolio",
    demo_link: "https://hassanchowdhry.live",
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
    source_code_link: "https://github.com/HassanChowdhry/OldBailey-AI",
    demo_link: "https://github.com/HassanChowdhry/OldBailey-AI",
  },
  {
    name: "PodText AI",
    description:
      "Spearheaded the development of a full-stack web application enabling users to create and publish podcasts using AI voice and image generation and text-to-speech technology.",
    tags: [
      {
        name: "Next.js",
        color: "violet-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Convex",
        color: "orange-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "blue-text-gradient",
      },
    ],
    image: podtext_ai,
    source_code_link: "https://github.com/HassanChowdhry/PodText-AI",
    demo_link: "https://podtext-ai.vercel.app",
  },
  {
    name: "Pixis",
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
    image: pixis,
    source_code_link: "https://github.com/HassanChowdhry/Pixis",
    demo_link: "https://github.com/HassanChowdhry/Pixis",
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
    demo_link: "https://links-cf02b.web.app/home",
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
    demo_link: "https://github.com/HassanChowdhry/Leetcode-Stats-Bot",
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
    source_code_link: "https://github.com/HassanChowdhry/Tweet-Generator",
    demo_link: "https://hassanchowdhry.github.io/Tweet-Generator/",
  },
];

export { services, experiences, projects };
