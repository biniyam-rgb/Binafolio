export const personalData = {
  brandName: "BinaFolio",
  name: "Biniyam Gebrie",
  role: "Software Engineering Student & Aspiring Full-Stack Developer",
  shortRole: "Software Developer",
  university: "Wollo University, Kombolcha Campus",
  location: "Kombolcha, Ethiopia",
  bioHeadline: "Crafting responsive frontends and scalable backend solutions.",
  bioDescription:
    "I am a passionate Software Engineering student at Wollo University with a focus on full-stack web development. I love building practical, modern applications with React, Laravel, PHP, and MySQL — turning complex logic into seamless digital experiences.",
  careerGoal:
    "My primary goal is to become a highly skilled full-stack developer and engineer impactful software applications that solve real-world problems and delight users.",
  
  // Explicitly labeled placeholders as requested
  contact: {
    email: "biniyam.placeholder@example.com", // [PLACEHOLDER - Replace with your actual email]
    emailNote: "Placeholder email — update with your real address in portfolioData.js",
    github: "https://github.com/your-username", // [PLACEHOLDER]
    linkedin: "https://linkedin.com/in/your-profile", // [PLACEHOLDER]
    telegram: "https://t.me/your_telegram", // [PLACEHOLDER]
    resumePath: "/resume.pdf", // Place your real resume.pdf in the public/ folder
    resumeAvailable: false // Set to true once resume.pdf is placed in public/
  }
};

export const skillsData = [
  {
    id: "react",
    name: "React",
    category: "frontend",
    tagline: "Component Architecture & Hooks",
    description: "Building interactive, dynamic, and state-driven single-page interfaces with modern component patterns.",
    badge: "Frontend Core",
    color: "#61DAFB",
    glow: "rgba(97, 218, 251, 0.25)"
  },
  {
    id: "laravel",
    name: "Laravel",
    category: "backend",
    tagline: "MVC, Eloquent ORM & APIs",
    description: "Developing robust server-side architectures, RESTful API endpoints, secure authentication, and database migrations.",
    badge: "Backend Core",
    color: "#FF2D20",
    glow: "rgba(255, 45, 32, 0.25)"
  },
  {
    id: "php",
    name: "PHP",
    category: "backend",
    tagline: "Server-side Scripting & OOP",
    description: "Crafting backend logic, request lifecycles, session handling, and object-oriented web backbones.",
    badge: "Server Language",
    color: "#777BB4",
    glow: "rgba(119, 123, 180, 0.25)"
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "backend",
    tagline: "Relational DB & Query Optimization",
    description: "Designing normalized database schemas, complex relational joins, data integrity, and structured queries.",
    badge: "Database",
    color: "#4479A1",
    glow: "rgba(68, 121, 161, 0.25)"
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "frontend",
    tagline: "ES6+, Async/Await & DOM Logic",
    description: "Writing modern asynchronous JS, manipulating the DOM, and handling seamless client-side interactions.",
    badge: "Language",
    color: "#F7DF1E",
    glow: "rgba(247, 223, 30, 0.25)"
  },
  {
    id: "html",
    name: "HTML5",
    category: "frontend",
    tagline: "Semantic Markup & Accessibility",
    description: "Structuring clean, accessible, and SEO-friendly document layouts according to modern web standards.",
    badge: "Markup",
    color: "#E34F26",
    glow: "rgba(227, 79, 38, 0.25)"
  },
  {
    id: "css",
    name: "CSS3",
    category: "frontend",
    tagline: "Flexbox, Grid & Micro-animations",
    description: "Crafting fluid responsive layouts, custom color tokens, glassmorphism, and keyframe animations.",
    badge: "Styling",
    color: "#1572B6",
    glow: "rgba(21, 114, 182, 0.25)"
  },
  {
    id: "git",
    name: "Git & GitHub",
    category: "tools",
    tagline: "Version Control & Team Workflow",
    description: "Managing feature branches, commit hygiene, pull requests, repository versioning, and collaborative code.",
    badge: "Workflow",
    color: "#F05032",
    glow: "rgba(240, 80, 50, 0.25)"
  }
];

export const projectsData = [
  {
    id: "aetherflow",
    title: "AetherFlow Analytics",
    category: "Full-Stack Web App",
    subtitle: "Real-time Metrics & User Activity Dashboard",
    description:
      "A modern web application featuring an interactive data visualization dashboard with orange-accented metric cards, session charts, and user conversion funnels. Built to explore state management and backend API synchronization.",
    technologies: ["React", "Laravel", "MySQL", "JavaScript", "CSS3"],
    image: "/assets/project1.jpg",
    featured: true,
    highlights: [
      "Dynamic data charts with customized warm orange styling",
      "RESTful API data ingestion with Laravel endpoints",
      "Responsive card layouts and dark-mode glass UI"
    ],
    links: {
      github: "https://github.com/your-username/aetherflow-analytics", // [PLACEHOLDER]
      demo: "https://aetherflow-demo.placeholder.app", // [PLACEHOLDER]
      isPlaceholder: true
    }
  },
  {
    id: "neodiscover",
    title: "NeoDiscover Product Hub",
    category: "Full-Stack E-Commerce",
    subtitle: "Interactive Product Discovery & Cart Platform",
    description:
      "An aesthetic online catalog and shopping cart platform designed with rich dark aesthetics and glowing orange callouts. Features product filtering, real-time cart drawer updates, and responsive product grids.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    image: "/assets/project2.jpg",
    featured: true,
    highlights: [
      "Dynamic shopping bag slide-over drawer",
      "Relational product catalog backed by MySQL database",
      "Real-time category and price-range filter controls"
    ],
    links: {
      github: "https://github.com/your-username/neodiscover-store", // [PLACEHOLDER]
      demo: "https://neodiscover-demo.placeholder.app", // [PLACEHOLDER]
      isPlaceholder: true
    }
  },
  {
    id: "campus-portal",
    title: "Campus Task & Study Hub",
    category: "Student Software Project",
    subtitle: "Academic Schedule & Coursework Organizer",
    description:
      "A developer-oriented productivity tool designed for software engineering students to track university assignments, lab exercises, deadlines, and group collaborations with Wollo University peers.",
    technologies: ["React", "JavaScript", "CSS3", "Git"],
    image: "/assets/workspace.jpg",
    featured: false,
    highlights: [
      "Priority-based milestone tracking for university coursework",
      "Local storage and clean state synchronization",
      "Minimalist dark-themed developer workstation layout"
    ],
    links: {
      github: "https://github.com/your-username/campus-study-hub", // [PLACEHOLDER]
      demo: "https://campus-hub.placeholder.app", // [PLACEHOLDER]
      isPlaceholder: true
    }
  }
];

export const journeyData = [
  {
    period: "Current Stage",
    year: "Ongoing",
    title: "Software Engineering Degree",
    institution: "Wollo University, Kombolcha Campus",
    badge: "Undergraduate Studies",
    status: "active",
    description:
      "Engaging deeply with core computer science and engineering disciplines: Object-Oriented Programming, Data Structures & Algorithms, Database Systems, Software Architecture, and System Analysis.",
    focusPoints: [
      "Mastering software design principles & architectural design",
      "Deepening algorithmic thinking & problem solving",
      "Collaborating on engineering course deliverables"
    ]
  },
  {
    period: "Core Growth",
    year: "Self-Driven",
    title: "Full-Stack Development with React & Laravel",
    institution: "Independent Project Labs",
    badge: "Technology Specialization",
    status: "completed",
    description:
      "Bridged frontend UI crafting with backend server logic. Transitioned into developing complete web systems with React for dynamic user interfaces and Laravel + PHP for scalable API backends and MySQL storage.",
    focusPoints: [
      "Building full-stack CRUD applications and authenticated workflows",
      "Understanding relational database normalization in MySQL",
      "RESTful API design and JSON payload consumption"
    ]
  },
  {
    period: "Foundation",
    year: "Initial Step",
    title: "Web Engineering Fundamentals & Version Control",
    institution: "Foundational Practice",
    badge: "Code Mastery",
    status: "completed",
    description:
      "Built a rock-solid foundation in standard web technologies: semantic HTML5, modern CSS3 layout paradigms (Flexbox and Grid), modern JavaScript (ES6+), and disciplined Git version control with GitHub.",
    focusPoints: [
      "Semantic HTML5 & accessible UI development",
      "Responsive layout engineering across device screens",
      "Version control workflows using Git branches and pull requests"
    ]
  },
  {
    period: "Aspiration & Horizon",
    year: "Upcoming",
    title: "Impactful Software & Industry Contributions",
    institution: "Next Professional Chapter",
    badge: "Future Vision",
    status: "future",
    description:
      "Eager to apply full-stack engineering skills to real-world software applications, open-source projects, and collaborative engineering teams solving meaningful challenges.",
    focusPoints: [
      "Contributing to impactful software applications",
      "Expanding into advanced cloud deployment & microservices",
      "Continuous pair programming & agile engineering practices"
    ]
  }
];

export const developerObjectSnippet = `{
  "developer": {
    "name": "Biniyam Gebrie",
    "handle": "BinaFolio",
    "role": "Aspiring Full-Stack Developer",
    "education": {
      "major": "Software Engineering",
      "institution": "Wollo University",
      "campus": "Kombolcha Campus"
    },
    "tech_stack": {
      "frontend": ["React", "JavaScript", "HTML5", "CSS3"],
      "backend": ["Laravel", "PHP"],
      "database": ["MySQL"],
      "vcs": ["Git", "GitHub"]
    },
    "ambition": "Craft high-performance, impactful web apps",
    "status": "Available for learning & collaborative opportunities"
  }
}`;
