import traveltriangle from '../assets/projects/traveltriangle.png'
import prithu from '../assets/projects/Prithu.png'
import expanseTracker from '../assets/projects/Expanse-Tracker.jpg'
import epackbook from '../assets/projects/e-packbook.png'
import edgetelecom from '../assets/projects/EdgeTelecome.png'

export const personalInfo = {
  name: "Vivekanand Ray",
  role: "Software Engineer (MERN)",
  tagline: "I build performant, user-friendly web applications",
  email: "vivekanandray@zohomail.in",
  location: "India",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/vnray",
    linkedin: "https://linkedin.com/in/vivekanandray",
  },
  stats: [
    { label: "Years Experience", value: "4+" },
    { label: "Projects Delivered", value: "20+" },
    { label: "Technologies", value: "15+" },
  ],
  about: [
    "Experienced Software Engineer with 4+ years of expertise in building responsive, user-friendly web applications. Proficient in React, Node.js, Express, MongoDB, and modern JavaScript ecosystems.",
    "Skilled in optimizing performance, implementing UX/UI best practices, and collaborating with cross-functional teams to deliver scalable solutions. Passionate about code quality, testing, and staying updated with industry trends.",
  ],
  freelance: {
    available: true,
    rate: "Let's discuss",
    response: "within 24 hours",
    services: [
      {
        title: "Web Development",
        desc: "Full-stack web apps built with React, Next.js, Node.js. Responsive, performant, and accessible by default.",
        icon: "code",
        tags: ["React", "Next.js", "Node.js", "Tailwind"],
      },
      {
        title: "Mobile Apps",
        desc: "Cross-platform mobile applications using React Native. Native feel, shared codebase, fast delivery.",
        icon: "mobile",
        tags: ["React Native", "Expo", "iOS", "Android"],
      },
      {
        title: "UI/UX Engineering",
        desc: "Pixel-perfect interfaces with smooth animations. From Figma to code with meticulous attention to detail.",
        icon: "design",
        tags: ["Figma", "Framer Motion", "Three.js", "Tailwind"],
      },
      {
        title: "Consulting & Audit",
        desc: "Code review, performance optimization, architecture planning, and mentorship for your engineering team.",
        icon: "audit",
        tags: ["Performance", "Security", "Architecture", "Best Practices"],
      },
    ],
    process: [
      { step: "Discovery", desc: "Understanding your vision, goals, and requirements through a deep discovery session." },
      { step: "Design", desc: "Crafting wireframes, prototypes, and visual designs that align with your brand." },
      { step: "Development", desc: "Building with clean, scalable code using modern technologies and best practices." },
      { step: "Delivery", desc: "Testing, deploying, and handing over with full documentation and ongoing support." },
    ],
  },
}

export const skills = {
  frontend: [
    { name: "React", level: 95 },
    { name: "JavaScript", level: 92 },
    { name: "TypeScript", level: 85 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 92 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Redux", level: 82 },
    { name: "Material UI", level: 85 },
  ],
  backend: [
    { name: "Node.js", level: 90 },
    { name: "Express", level: 88 },
    { name: "MongoDB", level: 82 },
    { name: "REST API", level: 88 },
    { name: "Webpack", level: 78 },
  ],
  ai: [
    { name: "Claude", level: 92 },
    { name: "ChatGPT", level: 90 },
    { name: "Cursor", level: 88 },
    { name: "OpenCode", level: 85 },
    { name: "Antigravity", level: 80 },
  ],
  mobile: [
    { name: "React Native", level: 88 },
    { name: "Expo", level: 85 },
    { name: "Responsive Design", level: 90 },
  ],
  tools: [
    "Git", "VS Code", "Figma", "Postman",
    "Docker", "Jest", "WordPress", "SEO",
  ],
}

export const experience = [
  {
    id: 1,
    role: "Software Engineer (MERN)",
    company: "Holiday Triangle Travel",
    url: "https://traveltriangle.com",
    period: "March 2024 - Present",
    achievements: [
      "Built AI chatbot using Node.js and OpenAI API with React UI",
      "Implemented JWT authentication, role-based access control, and API security best practices",
      "Designed and developed scalable RESTful APIs using Node.js and Express.js",
      "Optimized MongoDB schemas and queries using indexing and aggregation pipelines",
      "Integrated payment gateways (Razorpay/Stripe), email services, WhatsApp APIs, and Google APIs",
      "Developed real-time features using Socket.io including live chat and notifications",
      "Optimized backend performance with Redis caching and async processing",
    ],
  },
  {
    id: 2,
    role: "Web Developer",
    company: "Essence Web Technology",
    url: "https://essencewebtechnology.com",
    period: "Dec 2022 - Feb 2024",
    achievements: [
      "Built ePackBook — a Packers and Movers management software using React, Redux, and Material UI",
      "Created wireframes and prototypes using Adobe XD",
      "Implemented lazy loading, virtualization, and caching for seamless UX",
      "Optimized page speed for mobile and desktop views",
      "Worked closely with backend developers to consume APIs and display data",
    ],
  },
  {
    id: 3,
    role: "WordPress Developer",
    company: "TCH-Su, Gurgaon",
    period: "Nov 2021 - Oct 2022",
    achievements: [
      "Developed and maintained client websites using WordPress",
      "Customized themes and plugins to meet client requirements",
      "Integrated third-party services and APIs",
      "Ensured responsive design and cross-browser compatibility",
    ],
  },
  {
    id: 4,
    role: "Design Engineer & WordPress Developer",
    company: "Edge Telecom Pvt Ltd, Gurgaon",
    period: "Oct 2020 - Oct 2021",
    achievements: [
      "Designed and developed WordPress websites for clients",
      "Managed SSL installation and MySQL databases",
      "Collaborated on UI/UX design and frontend development",
      "Maintained and updated existing websites for performance and security",
    ],
  },
]

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform Travel (MERN)",
    description: "Redesigned and modernized the UI across multiple pages of the Travel Triangle platform, improving responsiveness, user experience, and visual consistency. Developed a chatbot frontend interface with an intuitive conversational design and seamless user interactions.",
    tech: ["React", "Node.js", "MongoDB", "Html", "CSS"],
    image: traveltriangle,
    liveUrl: "https://traveltriangle.com",
    githubUrl: "https://github.com/vnray",
  },
  {
    id: 2,
    title: "Prithu Homes",
    description: "Built the complete frontend UI for Prithu Homes, focusing on responsive design, modern user experience, reusable components, and seamless navigation across all pages.",
    tech: ["JavaScript", "Html", "CSS"],
    image: prithu,
    liveUrl: "https://prithu.in",
    githubUrl: "https://github.com/vnray",
  },
  {
    id: 3,
    title: "Expanse-Tracker",
    description: "Developed a full-stack expense tracking application with React frontend and Node.js/MongoDB backend. Implemented user authentication, CRUD operations, and data visualization features.",
    tech: ["React.js", "Html", "Tailwind", "Node.js", "MongoDB"],
    image: expanseTracker,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/vnray/expence.git",
  },
  {
    id: 4,
    title: "E-Packbook",
    description: "Built a Packers and Movers management software with React, Redux, and Material UI. Implemented features like booking management, inventory tracking, and customer communication tools.",
    tech: ["ReactNative", "css"],
    image: epackbook,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/vnray",
  },
  {
    id: 5,
    title: "Edge Telecome",
    description: "Designed and developed WordPress websites for Edge Telecom Pvt Ltd, managing SSL installation, MySQL databases, and collaborating on UI/UX design and frontend development.",
    tech: ["Wordpress", "Html", "css", "javascript"],
    image: edgetelecom,
    liveUrl: "https://edgetelecom.com",
    githubUrl: "https://github.com/vnray",
  },
  // {
  //   id: 6,
  //   title: "Food Delivery App",
  //   description: "End-to-end food ordering platform with live tracking, reviews, and recommendation engine.",
  //   tech: ["React Native", "Node.js", "MongoDB", "Google Maps"],
  //   image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
  //   liveUrl: "https://example.com",
  //   githubUrl: "https://github.com/yourusername/project",
  // },
]
