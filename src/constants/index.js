import {
  activision,
  dalhousie,
  upwork,
  // links,
  // portfolio,
  neurocode_ai,
  // leetbot,
  // tweet,
  FaLinkedin,
  FaGithub,
  FaGoogleScholar,
  SiLeetcode,
  // pixis,
  podtext_ai,
  oldbailey_ai,
  ansys,
  icpc,
  botr,
  openllm,
  deeprl
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
    title: "Google Scholar",
    Icon: FaGoogleScholar,
    link: "https://scholar.google.ca/citations?user=rW6MVrYAAAAJ&hl=en",
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Activision (Demonware)",
    icon: activision,
    iconBg: "#E6DEDD",
    date: "Jan 2026 - Present",
    points: [
      "Demonware - Call of Duty | Call of Duty",
    ],
  },
  {
    title: "Undergraduate Researcher",
    company_name: "Dalhousie University (MYTech Lab) / NSERC",
    icon: dalhousie,
    iconBg: "#E6DEDD",
    date: "May 2025 - Present",
    points: [
      "Agentic AI for Autonomous Cyber Defence (ACD) using Deep Reinforcement Learning (DRL) and Large Language Models (LLMs)",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Synopsys (Ansys)",
    icon: ansys,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - May 2025",
    points: [
      "Fluids WebUI and SimBA",
    ],
  },
  {
    title: "ICPC Contestant",
    company_name: "ICPC",
    icon: icpc,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Nov 2024",
    points: [
      "ICPC Canada Atlantic 2025 - Rank 1st (Gold Medal)",
      "ICPC NENA 2025",
      "ICPC NENA 2024",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "BOTR Solutions",
    icon: botr,
    iconBg: "#E6DEDD",
    date: "May 2024 - Aug 2024",
    points: [
      "ETL Migration, CI/CD DevOps (AWS), RESTful API (Django)",
    ],
  },
  {
    title: "Head Teaching Assistant",
    company_name: "Dalhousie University",
    icon: dalhousie,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Server-Side Scripting (CSCI 2170)",
      "Data Structures & Algorithms (CSCI 2110)",
      "Experimental Robotics (CSCI 1108)",
      "Web Development (CSCI 1170)",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#E6DEDD",
    date: "May 2023 - Dec 2023",
    points: [
      "Angular to React Migration",
    ],
  },
];

const projects = [
  {
    name: "NeuroCode AI",
    description:
      "Led the development of an advanced learning platform for DS&A.",
    tags: [
      {
        name: "Next",
        color: "violet-text-gradient",
      },
      {
        name: "Go",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "orange-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Artificial Intelligence",
        color: "green-text-gradient",
      },
    ],
    image: neurocode_ai,
    source_code_link: "https://github.com/HassanChowdhry/",
    demo_link: "https://hassanchowdhry.com",
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
    name: "Open LLM",
    description:
      "Open-source, self-hosted LLM chat application, featuring local-first data storage and real-time streaming responses. ",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Ollama",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
    ],
    image: openllm,
    source_code_link: "https://github.com/GHuyHuynh/openllm-web",
    demo_link: "https://web.cs.dal.ca/~huyh/openllm/",
  },
  {
    name: "Awesome Reinforcement Learningfor Cyber Security",
    description:
      "A curated list of resources dedicated to reinforcement learning applied to cyber security. ",
    tags: [
      {
        name: "Deep Reinforcement Learning",
        color: "violet-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "green-text-gradient",
      },
      {
        name: "Cybersecurity",
        color: "blue-text-gradient",
      },
    ],
    image: deeprl,
    source_code_link: "https://github.com/Limmen/awesome-rl-for-cybersecurity",
    demo_link: "https://github.com/Limmen/awesome-rl-for-cybersecurity",
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
  // {
  //   name: "Pixis",
  //   description:
  //     "Designed and developed a photography-centric full stack application with a user and database photo gallery, elevating engagement through the integration of profile photos.",
  //   tags: [
  //     {
  //       name: "React",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Node.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Express.js",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "MySQL",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "AWS",
  //       color: "orange-text-gradient",
  //     },
  //   ],
  //   image: pixis,
  //   source_code_link: "https://github.com/HassanChowdhry/Pixis",
  //   demo_link: "https://github.com/HassanChowdhry/Pixis",
  // },
  // {
  //   name: "Portfolio",
  //   description:
  //     "Engineered an interactive website showcasing technical skills, successful projects, and professional experience, leading to heightened user engagement, increased inquiries, and networking opportunities.",
  //   tags: [
  //     {
  //       name: "React",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Vite",
  //       color: "violet-text-gradient",
  //     },
  //     {
  //       name: "Three.js",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "TailwindCSS",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Firebase",
  //       color: "orange-text-gradient",
  //     },
  //   ],
  //   image: portfolio,
  //   source_code_link: "https://github.com/HassanChowdhry/Portfolio",
  //   demo_link: "https://hassanchowdhry.com",
  // },
  // {
  //   name: "Google Links",
  //   description:
  //     "Developed an open-source web app optimizing research productivity by scraping and organizing Google search data into custom Excel sheets, boosting data collection efficiency by 30%.",
  //   tags: [
  //     {
  //       name: "React",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Javascript",
  //       color: "yellow-text-gradient",
  //     },
  //     {
  //       name: "Excel",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Firebase",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "Figma",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: links,
  //   source_code_link: "https://github.com/HassanChowdhry/GoogleLinks",
  //   demo_link: "https://links-cf02b.web.app/home",
  // },
  // {
  //   name: "Leetcode Stats Bot",
  //   description:
  //     "Engineered a custom Discord bot designed to analyze Leetcode statistics and performance metrics for the competitive programming community.",
  //   tags: [
  //     {
  //       name: "Python",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Discord API",
  //       color: "violet-text-gradient",
  //     },
  //     {
  //       name: "Pandas",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: leetbot,
  //   source_code_link: "https://github.com/HassanChowdhry/Leetcode-Stats-Bot",
  //   demo_link: "https://github.com/HassanChowdhry/Leetcode-Stats-Bot",
  // },
  // {
  //   name: "Tweet Generator",
  //   description:
  //     "Launched an open-source web application to make customized tweets. The user fills out input forms, which updates and renders the tweet display asynchronously.",
  //   tags: [
  //     {
  //       name: "JavaScript",
  //       color: "yellow-text-gradient",
  //     },
  //     {
  //       name: "HTML5",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "CSS3",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Bootstrap",
  //       color: "violet-text-gradient",
  //     },
  //   ],
  //   image: tweet,
  //   source_code_link: "https://github.com/HassanChowdhry/Tweet-Generator",
  //   demo_link: "https://hassanchowdhry.github.io/Tweet-Generator/",
  // },
];

export { services, experiences, projects };
