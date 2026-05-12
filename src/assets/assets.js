import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaMobileAlt,
  FaTools,
  FaNodeJs,
  FaVuejs,
  FaFire,
  FaDatabase,
  FaCloud,
  FaRobot,
  
} from "react-icons/fa";
import { SiRedux } from "react-icons/si";

import profileImg from "../assets/profile.avif";
import projectImg1 from "../assets/project1.avif";
import projectImg2 from "../assets/project2.avif";
import projectImg3 from "../assets/project3.avif";
import projectImg4 from "../assets/project4.avif";
import projectImg5 from "../assets/project5.avif";
import projectImg6 from "../assets/project6.avif";
import projectImg7 from "../assets/project7.avif";

export const assets = {
  profileImg,
};

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Innovative",
    description:
      "I enjoy solving real-world problems by building scalable and efficient applications using modern technologies.",
    color: "text-purple",
  },
  {
    icon: FaPaintBrush,
    title: "Design Oriented",
    description:
      "I focus on creating intuitive and responsive user interfaces that enhance user experience.",
    color: "text-pink",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "I write maintainable, optimized, and readable code following best practices and modern development standards.",
    color: "text-blue",
  },
];

export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Building responsive and interactive user interfaces using modern web technologies.",
    tags: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description: "Creating robust server-side applications and RESTful APIs.",
    tags: ["Node.js", "Express.js", "RESTful APIs"],
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    description:
      "Designing and managing databases for performance and scalability.",
    tags: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  },
  // {
  //   title: 'Cloud & DevOps',
  //   icon: FaCloud,
  //   description: 'Deploying and managing applications in cloud environments.',
  //   tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  // },
  {
    title: "Tools & Technologies",
    icon: FaTools,
    description:
      "Essential tools and technologies I use in my development workflow.",
    tags: ["Git & GitHub", "Postman", "VS Code", "Vercel", "Render", "Linux"],
  },
];

export const projects = [
  {
    title: "TechKnowUp",
    description:
      "A full-stack MERN platform for sharing technical knowledge where users can create, update, and explore articles with a responsive and user-friendly interface.",
    image: projectImg1,
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit"],
    icons: [FaReact, FaNodeJs, FaServer, FaDatabase, SiRedux ],
    demo: "#", // add deployed link if available
    code: "https://github.com/kishor-abhijeet/TechKnowUp",
  },
  {
    title: "Hotel Booking App",
    description:
      "A responsive web application that allows users to browse hotels, view details, and manage bookings with secure authentication and smooth user experience.",
    image: projectImg2,
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Clerk"],
    icons: [FaReact, FaNodeJs, FaServer, FaDatabase],
    demo: "#", // add deployed link if available
    code: "https://github.com/kishor-abhijeet/RoomIva-Hotel-Booking",
  },
  {
    title: "AI Recipe Generator",
    description:
      "AI-powered Recipe Generator with JWT authentication, pantry tracking, and smart meal planning. Generates recipes using Google Gemini 2.5 Flash with dietary & cuisine filters. Includes shopping list, recipe saving, and PostgreSQL backend with a responsive Tailwind UI.",
    image: projectImg7,
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Google Gemini API"],
    icons: [FaReact, FaNodeJs, FaServer, FaDatabase],
    demo: "#", // add deployed link if available
    code: "https://github.com/kishor-abhijeet/RoomIva-Hotel-Booking",
  },

];

export const workData = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "2020 - Present",
    description:
      "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
    color: "purple",
  },
  {
    role: "Web Developer",
    company: "Digital Solutions LLC",
    duration: "2018 - 2020",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink",
  },
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2016 - 2018",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue",
  },
];
