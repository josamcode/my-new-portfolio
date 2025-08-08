// src/data.js
export const portfolioData = {
  meta: {
    description: "Jo Sam portfolio website",
    title: "Jo Sam",
  },
  header: {
    logo: "logo.webp",
    email: "gergessamuel100@gmail.com",
    navigation: [
      { name: "about-me", icon: "About" },
      { name: "skills", icon: "Skills" },
      { name: "portfolio", icon: "Portfolio" },
      { name: "contact", icon: "Contact" },
    ],
  },
  heroSection: {
    image: "my-main-img.webp",
    name: "Gerges Samuel",
    title: "Full Stack Developer",
    description:
      "Full stack developer . I have over 2 years of experience in web development, during which I have implemented several projects and learned a lot. I am proficient in various front-end and back-end web development technologies, including HTML, CSS, JavaScript, ReactJS, Tailwind, Bootstrap, Node.js, Express.js, MongoDB, And many other technologies.",
    github: "https://github.com/josamcode/",
    linkedin: "https://www.linkedin.com/in/gerges-samuel",
    instagram: "https://www.instagram.com/gerges_s_gabra/",
  },
  aboutMe: {
    title: "ABOUT ME",
    personalInfos: {
      myName: "Gerges Samuel",
      nationality: "Egyptian",
      freelance: "available",
      phone: "+201204770940",
      languages: "Arabic, English",
    },
    cv: "gerges-samuel-cv.pdf",
    statistics: [
      { num: "1", title: "years of experience" },
      { num: "40", title: "completed projects" },
      { num: "4", title: "happy customers" },
      { num: "1", title: "awards won" },
    ],
  },
  skills: [
    {
      name: "HTML",
      percentage: "98",
      category: "frontend",
      icon: "code",
      isVisible: "true",
    },
    { name: "CSS", percentage: "96", category: "frontend", icon: "palette" },
    {
      name: "JavaScript",
      percentage: "95",
      category: "frontend",
      icon: "terminal",
    },
    { name: "React.JS", percentage: "94", category: "frontend", icon: "react" },
    {
      name: "Tailwind CSS",
      percentage: "90",
      category: "frontend",
      icon: "wind",
    },
    { name: "Node.JS", percentage: "95", category: "backend", icon: "server" },
    {
      name: "Express.JS",
      percentage: "93",
      category: "backend",
      icon: "layout-template",
    },
    {
      name: "MongoDB",
      percentage: "97",
      category: "database",
      icon: "database",
    },
    { name: "MySQL", percentage: "80", category: "database", icon: "table" },
    {
      name: "PostgreSQL",
      percentage: "75",
      category: "database",
      icon: "table-properties",
    },
    {
      name: "Mongoose",
      percentage: "95",
      category: "backend",
      icon: "git-branch",
    },
    {
      name: "Sequelize",
      percentage: "55",
      category: "backend",
      icon: "git-merge",
    },
    {
      name: "Git & GitHub",
      percentage: "92",
      category: "tools",
      icon: "git-branch",
    },
    {
      name: "RESTful APIs",
      percentage: "94",
      category: "backend",
      icon: "link",
    },
    {
      name: "JWT & Auth",
      percentage: "98",
      category: "security",
      icon: "lock",
    },
    {
      name: "Performance Optimization",
      percentage: "99",
      category: "performance",
      icon: "gauge",
    },
    {
      name: "SEO & Accessibility",
      percentage: "98",
      category: "frontend",
      icon: "search",
    },
  ],
  experienceEducation: [
    {
      year: "2022",
      icon: "fa-solid fa-code",
      title: "Frontend Development",
      place: "Self-Learning",
      description:
        "Gained proficiency in frontend technologies such as HTML, CSS, JavaScript, and frameworks like React and Vue, enhancing web design capabilities.",
    },
    {
      year: "2023",
      icon: "fa-solid fa-code",
      title: "Backend Development",
      place: "Self-Learning",
      description:
        "Mastered backend development skills, covering server-side programming, databases, and APIs, advancing from frontend expertise.",
    },
    {
      year: "2021",
      icon: "fa-solid fa-video",
      title: "Video Editing",
      place: "Self-Learning",
      description:
        "Acquired video editing skills using tools like Adobe Premiere Pro and After Effects, fostering content creation abilities for multimedia projects.",
    },
    {
      year: "2020",
      icon: "fa-solid fa-pen-nib",
      title: "Graphic Design",
      place: "Self-Learning",
      description:
        "Explored graphic design fundamentals, including layout, typography, and visual communication, laying the groundwork for creative projects.",
    },
  ],
  portfolio: {
    title: "WORKS",
    categories: ["All", "web", "design", "editing", "content"],
    projects: [
      {
        title: "E-commerce with admin dashboard",
        description:
          "A full-stack e-commerce platform with an admin dashboard for managing products, orders, and users.",
        category: "web",
        image: "web/josam-ecommerce-with-admin-dashboard.png",
        link: "https://jo-ecommerce.vercel.app",
        github: "https://github.com/josamcode/last-frontend-ecommerce",
        technologies: [
          "React",
          "Tailwind CSS",
          "Node.js",
          "Express",
          "MongoDB",
        ],
      },
      {
        title: "Admin dashboard for ecommerce",
        description:
          "An admin dashboard for managing an e-commerce platform, featuring tools for product management, order tracking, and user administration.",
        category: "web",
        image: "web/josam-ecommerce-admin-dashboard.png",
        link: "https://jo-e-ad.vercel.app/",
        github: "https://github.com/josamcode/last-ecommerce-admin-dashboard",
        technologies: ["React", "Tailwind CSS", "Chart.js", "Redux"],
      },
      {
        title: "Shiftswaper",
        description:
          "A platform that helps companies manage shift and day-off swaps between employees, ensuring efficient scheduling and communication.",
        category: "web",
        image: "web/shiftswaper.png", // Assuming there's an image for Shiftswaper
        link: "https://shiftswaper.vercel.app/", // Assuming there's a live link for Shiftswaper
        github: "https://github.com/josamcode/Shiftswaper", // Assuming there's a GitHub repo for Shiftswaper
        technologies: [
          "React",
          "Tailwind CSS",
          "Node.js",
          "Express",
          "MongoDB",
        ],
      },
      {
        title: "Cash logix",
        description:
          "An expense tracker application that helps users manage their finances by tracking income, expenses, and generating reports.",
        category: "web",
        image: "web/cash-logix.png",
        link: "https://cashlogix.vercel.app/dashboard",
        github: "https://github.com/josamcode/CashLogix-frontend",
        technologies: [
          "React",
          "Tailwind CSS",
          "Node.js",
          "Express",
          "MongoDB",
        ],
      },
      {
        title: "Product Management System",
        description:
          "A web-based system for managing products, including features for adding, updating, deleting, and categorizing products.",
        category: "web",
        image: "web/product-management-system.webp",
        link: "https://josamcode.github.io/ProductManagementSystem/",
        github: "https://github.com/josamcode/ProductManagementSystem",
        technologies: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "Easy Landing Page",
        description:
          "A landing page for Easybank, highlighting their services such as online banking, budgeting, fast onboarding, and open API.",
        category: "web",
        image: "web/easybank-landing-page.webp",
        link: "https://josamcode.github.io/Easybank-landing-page/",
        github: "https://github.com/josamcode/Easybank-landing-page",
        technologies: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "To-do List",
        description:
          "A simple to-do list application that allows users to add, update, and delete tasks, with a clean and intuitive interface.",
        category: "web",
        image: "web/todo-list.webp",
        link: "https://josamcode.github.io/TodoList/",
        github: "https://github.com/josamcode/TodoList",
        technologies: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "Weather Application",
        description:
          "A weather application that provides real-time weather updates using the Weather API, with a user-friendly interface.",
        category: "web",
        image: "web/weather-application.webp",
        link: "https://josamcode.github.io/WeatherApplication/",
        github: "https://github.com/josamcode/WeatherApplication",
        technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
      },
      {
        title: "Creative Web Agency",
        description:
          "A website for a creative web agency showcasing their services in web development, UI/UX design, and SEO optimization, along with testimonials and a portfolio.",
        category: "web",
        image: "web/creative-web-agency.webp",
        link: "https://josamcode.github.io/Creative-Web-Agency/",
        github: "https://github.com/josamcode/Creative-Web-Agency",
        technologies: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "Manage Landing Page",
        description:
          "A landing page for the Manage service, highlighting its features and benefits, with a focus on simplicity and ease of use.",
        category: "web",
        image: "web/manage-landing-page.webp",
        link: "https://josamcode.github.io/manage-landing-page/",
        github: "https://github.com/josamcode/manage-landing-page",
        technologies: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "Multi Step Form",
        description:
          "A multi-step form application that guides users through a series of steps to complete a task or submit information, with validation and progress tracking.",
        category: "web",
        image: "web/multi-step-form.webp",
        link: "https://josamcode.github.io/Multi-step-form/",
        github: "https://github.com/josamcode/Multi-step-form",
        technologies: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "Thumbnail",
        description: "Thumbnail",
        category: "design",
        image: "design/1.webp",
        technologies: ["Photoshop", "Illustrator"],
      },
      {
        title: "Burger design",
        description: "Burger design",
        category: "design",
        image: "design/2.webp",
        technologies: ["Photoshop"],
      },
      {
        title: "Social media design",
        description: "Social media design",
        category: "design",
        image: "design/3.webp",
        technologies: ["Photoshop", "Canva"],
      },
      {
        title: "Logo design",
        description: "Logo design",
        category: "design",
        image: "design/4.webp",
        technologies: ["Illustrator", "Photoshop"],
      },
      {
        title: "Social media design",
        category: "design",
        image: "design/5.webp",
        description: "Social media design",
        technologies: ["Photoshop", "Canva"],
      },
      {
        title: "Jo logo design",
        description: "Jo logo design",
        category: "design",
        image: "design/6.webp",
        technologies: ["Illustrator"],
      },
      {
        title: "Jo 2 logo design",
        description: "Jo 2 logo design",
        category: "design",
        image: "design/7.webp",
        technologies: ["Illustrator"],
      },
      {
        title: "Social media design",
        description: "Social media design",
        category: "design",
        image: "design/8.webp",
        technologies: ["Photoshop"],
      },
      {
        title: "Social media design",
        description: "Social media design",
        category: "design",
        image: "design/9.webp",
        technologies: ["Photoshop"],
      },
      {
        title: "Social media design mockup",
        description: "Social media design mockup",
        category: "design",
        image: "design/10.webp",
        technologies: ["Photoshop", "Mockup tools"],
      },
    ],
  },
  contact: {
    title: "dont be shy!",
    description:
      "If you're looking for a standout website development or to enhance your current website, I'm here to help create your company's website or application, Contact me.",
    address: "Cairo - Egypt",
    phone: "+201204770940",
    email: "gergessamuel100@gmail.com",
    social: [
      {
        ariaLabel: "LinkedIn profile",
        link: "https://www.linkedin.com/in/gerges-samuel",
        icon: "linkedin",
      },
      {
        ariaLabel: "GitHub profile",
        link: "https://github.com/josamcode",
        icon: "github",
      },
      {
        ariaLabel: "Instagram account",
        link: "https://www.instagram.com/gerges_s_gabra/",
        icon: "instagram",
      },
      {
        ariaLabel: "Facebook account",
        link: null,
        icon: "facebook",
      },
      {
        ariaLabel: "YouTube Channel",
        link: null,
        icon: "youtube",
      },
    ],
  },
  blog: {
    title: "Posts",
    posts: [
      {
        title: "How to learn programming in 2024.",
        image: "blog/blog-03.webp",
        description:
          "The first step in learning programming is setting a goal. Ask yourself: Do you want to try websites, apps, games, and cybersecurity?....",
        url: "how-to-learn-programing-in-2024.html",
        author: "Jo Sam",
        date: "2024-01-15",
        readTime: "8 min read",
        category: "Programming",
        tags: ["Programming", "AI", "Coding"],
        views: "2.1k",
        likes: "156",
        featured: true,
      },
      {
        title: "Frontend Development roadmap",
        image: "blog/blog-01.webp",
        description:
          "Front-end development is one of the most popular fields in the world of programming. In this plan, we will go over how to learn front-end development...",
        url: "frontend-roadmap.html",
        author: "Jo Sam",
        date: "2024-03-10",
        readTime: "6 min read",
        category: "Frontend",
        tags: ["Frontend", "JavaScript", "CSS"],
        views: "1.8k",
        likes: "132",
        featured: false,
      },
      {
        title: "How to use ai tools.",
        image: "blog/blog-02.webp",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quaerat reprehenderit",
        url: "how-to-use-ai-tools.html",
        author: "Jo Sam",
        date: "2024-04-05",
        readTime: "4 min read",
        category: "AI",
        tags: ["AI", "Tools", "Productivity"],
        views: "980",
        likes: "87",
        featured: false,
      },
    ],
  },
};
