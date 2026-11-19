export const defaultPortfolio = {
  site: {
    title: "Parth Chavan | Portfolio",
    logoLight: "",
    logoDark: "",
    backgroundImage: "",
    backgroundVideo: "",
    backgroundVideoOpacity: 0.18,
    backgroundVideoSpeed: 1,
    sectionBackgrounds: {
      home: { image: "", video: "", opacity: 0.24 },
      profile: { image: "", video: "", opacity: 0.24 },
      skills: { image: "", video: "", opacity: 0.24 },
      projects: { image: "", video: "", opacity: 0.24 },
      contact: { image: "", video: "", opacity: 0.24 },
      footer: { image: "", video: "", opacity: 0.24 },
    },
    themeColors: {
      textLight: "#0f172a",
      textDark: "#f5f3ff",
      mutedLight: "#334155",
      mutedDark: "#d4d4d8",
      surfaceLight: "#ffffff",
      surfaceDark: "#161621",
      borderLight: "#d1fae5",
      borderDark: "#2e2e3a",
    },
    skillRive: "/parallax_hero.riv",
    skillRiveStateMachine: "MainStateMachine",
    contactRive: "/contact.riv",
    contactRiveStateMachine: "State Machine 1",
    introVideo: "/ayo.mp4",
    showIntro: true,
    accentLight: "#16a34a",
    accentDark: "#7c3aed",
    projectsTitle: "It's My Work",
    projectsDescription: "A curated showcase of projects reflecting my development journey.",
    githubButtonLabel: "🔗 View GitHub Repository",
  },
  hero: {
    greeting: "Hi, I'm",
    name: "Parth Chavan",
    role: "Full Stack Developer | Tech Explorer",
    image: "/images.webp",
    descriptions: [
      "Passionate about building interactive web apps and backend systems.",
      "Always exploring new technologies and turning ideas into scalable software.",
    ],
    primaryButton: "View My Work",
    secondaryButton: "Get in Touch",
  },
  about: {
    title: "Know About Me",
    heading: "Who is Parth Chavan?",
    educationTitle: "Education",
    experienceTitle: "Experience",
    description:
      "I’m a passionate developer with a knack for creating smooth, modern, and interactive web experiences. Whether it's building elegant UIs or architecting efficient backends, I thrive on turning ideas into reality. I value clean code, thoughtful design, and continuous learning.",
    education: [
      { period: "2023-2027", detail: "Polytechnic - P.C.P, Pune" },
      { period: "2022-2023", detail: "HSC - S.G.G.V.M School" },
    ],
    experience: [{ period: "2025", detail: "Intern - Star Maven Digital" }],
  },
  skills: [
    { name: "Git", image: "/logos/git.png", percent: 65, x: 8, y: 9 },
    { name: "ChatGPT", image: "/logos/ChatGPT.png", percent: 88, x: 25, y: 13 },
    { name: "Java", image: "/logos/java.png", percent: 82, x: 52, y: 22 },
    { name: "Figma", image: "/logos/figma.png", percent: 74, x: 10, y: 29 },
    { name: "React", image: "/logos/react.png", percent: 91, x: 84, y: 40 },
    { name: "VS Code", image: "/logos/vs-code.png", percent: 68, x: 6, y: 46 },
    { name: "CSS", image: "/logos/css.png", percent: 84, x: 81, y: 20 },
    { name: "HTML", image: "/logos/html.png", percent: 90, x: 87, y: 61 },
    { name: "MySQL", image: "/logos/mysql.png", percent: 77, x: 13, y: 76 },
    { name: "Pinterest", image: "/logos/pintrest.png", percent: 45, x: 77, y: 74 },
    { name: "Spring Boot", image: "/logos/spb.png", percent: 58, x: 38, y: 51 },
    { name: "Rive", image: "/logos/rive.png", percent: 80, x: 51, y: 88 },
    { name: "Tailwind", image: "/logos/tail.png", percent: 61, x: 62, y: 91 },
    { name: "MongoDB", image: "/logos/mongo.png", percent: 73, x: 65, y: 57 },
  ],
  projects: [
    {
      name: "Portfolio",
      tags: ["React", "Tailwind", "Framer Motion", "Rive"],
      description: "A sleek and responsive portfolio to showcase my skills and work.",
      bgImage: "/bg111.png",
      link: "https://your-portfolio.com",
    },
    {
      name: "Website",
      tags: ["React", "Tailwind", "Framer Motion", "Rive", "Bootstrap"],
      description: "A sleek and responsive portfolio to showcase my skills and work.",
      bgImage: "/bg111.png",
      link: "https://your-portfolio.com",
    },
    {
      name: "Poio Website",
      tags: ["React", "Tailwind", "Framer Motion", "Bootstrap"],
      description: "A sleek and responsive portfolio to showcase my skills and work.",
      bgImage: "/bg111.png",
      link: "https://your-portfolio.com",
    },
    {
      name: "Portfolio Website",
      tags: ["React", "Tailwind", "Framer Motion", "Rive", "Bootstrap"],
      description: "A sleek and responsive portfolio to showcase my skills and work.",
      bgImage: "/bg111.png",
      link: "https://your-portfolio.com",
    },
    {
      name: "Portfolio Website",
      tags: ["React", "Tailwind", "Framer Motion", "Rive", "Bootstrap"],
      description:
        "A sleek and responsive portfolio to showcase my skills and work. A sleek and responsive portfolio to showcase my skills and work.",
      bgImage: "/bg111.png",
      link: "https://your-portfolio.com",
    },
  ],
  contact: {
    title: "Contact Form",
    email: "parthchavan653@gmail.com",
    phone: "+91 9145414488",
    location: "Pune, India",
    socials: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/parthchavan653/?utm_source=qr&r=nametag",
        video: "/insta.mp4",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/parth-chavan-6284152a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        video: "/linkedin.mp4",
      },
      { label: "Pinterest", url: "https://pin.it/11BuroVx1", video: "/pintrest.mp4" },
      { label: "WhatsApp", url: "https://wa.me/qr/7WYVGT4ISCPJL1", video: "/whatsapp.mp4" },
    ],
  },
  footer: {
    name: "Parth Chavan",
    role: "IT Developer & Designer",
    location: "Based in Pune, India",
    email: "parthchavan653@gmail.com",
    phone: "+91 9145414488",
    portrait: "/ayo.png",
    quote: "Develop to Learn. Learn to Develop.",
    description: "Passionate about building impactful digital experiences.",
    github: "https://github.com/Professor134",
  },
};

export function getDefaultSkillPosition(index) {
  const defaultSkill = defaultPortfolio.skills[index];
  if (defaultSkill) return { x: defaultSkill.x, y: defaultSkill.y };

  const columns = 6;
  return {
    x: 10 + (index % columns) * 16,
    y: 12 + (Math.floor(index / columns) % 4) * 20,
  };
}

export function mergePortfolio(value) {
  if (!value || typeof value !== "object") return defaultPortfolio;
  const savedSite = value.site ?? {};
  return {
    ...defaultPortfolio,
    ...value,
    site: {
      ...defaultPortfolio.site,
      ...savedSite,
      accentLight: savedSite.accentLight ?? savedSite.accent ?? defaultPortfolio.site.accentLight,
      accentDark: savedSite.accentDark ?? defaultPortfolio.site.accentDark,
      sectionBackgrounds: Object.fromEntries(
        Object.entries(defaultPortfolio.site.sectionBackgrounds).map(([section, defaults]) => [
          section,
          { ...defaults, ...(savedSite.sectionBackgrounds?.[section] ?? {}) },
        ])
      ),
      themeColors: { ...defaultPortfolio.site.themeColors, ...(savedSite.themeColors ?? {}) },
    },
    hero: { ...defaultPortfolio.hero, ...value.hero },
    about: { ...defaultPortfolio.about, ...value.about },
    contact: { ...defaultPortfolio.contact, ...value.contact },
    footer: { ...defaultPortfolio.footer, ...value.footer },
    skills: Array.isArray(value.skills)
      ? value.skills.map((skill, index) => {
          const position = getDefaultSkillPosition(index);
          return {
            ...position,
            ...skill,
            x: Number.isFinite(skill?.x) ? Math.min(95, Math.max(5, skill.x)) : position.x,
            y: Number.isFinite(skill?.y) ? Math.min(92, Math.max(8, skill.y)) : position.y,
          };
        })
      : defaultPortfolio.skills,
    projects: Array.isArray(value.projects) ? value.projects : defaultPortfolio.projects,
  };
}
