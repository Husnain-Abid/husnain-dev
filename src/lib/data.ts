export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  cover: string;
  tagline: string;
  stack: string[];
  problem: string;
  solution: string;
  outcome: string;
  url?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "doctor-findy",
    title: "DoctorFindy",
    category: "Healthcare Web App",
    year: "2024",
    cover:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
    tagline: "Online doctor appointment booking platform.",
    stack: ["React.js", "Laravel API", "Tailwind CSS"],
    problem:
      "Users needed an easy way to find doctors and book appointments online without manual hassle.",
    solution:
      "Developed responsive frontend using React.js and integrated Laravel APIs for booking, search, and user management.",
    outcome:
      "Improved booking flow and user experience with fast and responsive UI, making it easier for users to find and book doctors.",
  },
  {
    slug: "dream-hire",
    title: "Dream Hire",
    category: "Freelance Marketplace",
    year: "2025",
    cover:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
    tagline: "Fiverr-inspired freelance marketplace platform.",
    stack: ["React.js", "Redux Toolkit", "Tailwind CSS"],
    problem:
      "Freelancers and clients needed a platform to connect and manage services efficiently.",
    solution:
      "Built a responsive UI with role-based access and state management using Redux Toolkit.",
    outcome:
      "Delivered a smooth user experience with structured workflows for buyers and sellers.",
  },
  {
    slug: "freepoint-home",
    title: "FreePoint Home",
    category: "SaaS Platform",
    year: "2025",
    cover:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
    tagline: "Home customization platform with dynamic pricing.",
    stack: ["Next.js", "TypeScript", "Node.js", "Express"],
    problem:
      "Users needed a way to customize home designs with real-time pricing updates.",
    solution:
      "Developed full-stack application with dynamic configuration logic and REST APIs.",
    outcome:
      "Enabled users to customize designs interactively with accurate pricing feedback.",
  },
  {
    slug: "clearset-ai",
    title: "ClearSet AI",
    category: "Business Website",
    year: "2025",
    cover:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
    tagline: "Modern AI solutions website with 3D interactions.",
    stack: ["Next.js", "TypeScript", "Three.js", "GSAP"],
    problem:
      "Client needed a high-end website to showcase AI services with engaging visuals.",
    solution:
      "Built interactive UI using Three.js and GSAP animations with modern design.",
    outcome:
      "Delivered a visually engaging website that improved brand presentation.",
  },
  {
    slug: "client-dashboard",
    title: "Admin Dashboard",
    category: "Web Application",
    year: "2024",
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    tagline: "Custom admin dashboard for managing data and users.",
    stack: ["React.js", "Node.js", "MongoDB"],
    problem:
      "Client required a centralized system to manage users and application data.",
    solution:
      "Developed full-stack dashboard with API integration and CRUD functionality.",
    outcome:
      "Improved efficiency by centralizing data management and workflows.",
  },
  {
    slug: "stellar-bulldogs",
    title: "Stellar Bulldogs",
    category: "E-commerce Website",
    year: "2025",
    cover:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1600&q=80",
    tagline: "Bulldog-focused eCommerce store for showcasing and selling puppies.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    problem:
      "The client needed an online platform to showcase available bulldogs and manage inquiries in a professional and user-friendly way.",
    solution:
      "Developed a responsive eCommerce-style website with structured listings, detailed pages, and smooth navigation. Focused on clean UI and optimized performance for better user engagement.",
    outcome:
      "Delivered a visually appealing and easy-to-use platform that improved online presence and simplified customer interaction and inquiries.",
  }

];



export type Service = {
  title: string;
  description: string;
  bullets: string[];
};

export const SERVICES: Service[] = [
  {
    title: "Frontend Development",
    description:
      "Responsive and high-performance user interfaces built with React.js and modern UI practices. Focused on clean design, usability, and smooth user experience.",
    bullets: [
      "React.js · JavaScript (ES6+)",
      "Tailwind CSS · Responsive Design",
      "Reusable Components & Optimization",
    ],
  },
  {
    title: "Full Stack Web Development",
    description:
      "End-to-end web application development using the MERN stack. From frontend to backend APIs and database integration.",
    bullets: [
      "MongoDB · Express.js · React · Node.js",
      "REST API Development",
      "Authentication & CRUD Systems",
    ],
  },
  {
    title: "Backend Development",
    description:
      "Scalable backend systems with Node.js and Express. Clean architecture, API handling, and database management for real-world applications.",
    bullets: [
      "Node.js · Express.js",
      "RESTful APIs",
      "MongoDB & MySQL Integration",
    ],
  },
  {
    title: "API Integration",
    description:
      "Seamless integration of third-party and custom APIs to extend application functionality and improve user workflows.",
    bullets: [
      "REST API Integration",
      "Axios / Fetch",
      "Data Handling & Error Management",
    ],
  },
  {
    title: "Deployment & Hosting",
    description:
      "Deploying web applications on VPS with domain setup, SSL configuration, and production optimization.",
    bullets: [
      "VPS Deployment",
      "Domain & SSL Setup",
      "Production Build Optimization",
    ],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Husnain consistently delivered high-quality frontend work with clean and responsive UI. His attention to detail really improved the overall user experience.",
    name: "Team Lead",
    role: "Frontend Team",
    company: "MustTech Solutions",
  },
  {
    quote:
      "A reliable developer who managed multiple projects efficiently and always met deadlines. Great communication and problem-solving skills.",
    name: "Project Manager",
    role: "Management",
    company: "Software House",
  },
  {
    quote:
      "Strong grip on React and API integration. He quickly understood requirements and implemented features with minimal revisions.",
    name: "Senior Developer",
    role: "Backend Team",
    company: "Development Team",
  },
  {
    quote:
      "Husnain played a key role in building responsive interfaces and improving application performance. Easy to work with and highly cooperative.",
    name: "Client Feedback",
    role: "Web Project",
    company: "Freelance Client",
  },
  {
    quote:
      "Delivered projects with clean code and proper structure. His understanding of MERN stack helped in building scalable solutions.",
    name: "Technical Lead",
    role: "Full Stack Team",
    company: "Tech Company",
  },
];

export const SKILLS: { name: string; group: string }[] = [
  // Frontend
  { name: "JavaScript (ES6+)", group: "Frontend" },
  { name: "React.js", group: "Frontend" },
  { name: "Next.js", group: "Frontend" },
  { name: "Tailwind CSS", group: "Frontend" },
  { name: "HTML5", group: "Frontend" },
  { name: "CSS3", group: "Frontend" },

  // Backend
  { name: "Node.js", group: "Backend" },
  { name: "Express.js", group: "Backend" },
  { name: "REST APIs", group: "Backend" },

  // Database
  { name: "MongoDB", group: "Database" },
  { name: "MySQL", group: "Database" },

  // Tools / Others
  { name: "Git & GitHub", group: "Tools" },
  { name: "Redux Toolkit", group: "Frontend" },
  { name: "Context API", group: "Frontend" },
  { name: "API Integration", group: "Frontend" },

  // Deployment
  { name: "VPS Deployment", group: "DevOps" },
  { name: "Domain & SSL Setup", group: "DevOps" },
];

export const NAV_LINKS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Clients" },
  { id: "contact", label: "Contact" },
];
