// ----------------------------
// NAV LINKS
// ----------------------------

const navLinks = [
  { id: 1, name: "Projects", type: "finder" },
  { id: 3, name: "Contact", type: "contact" },
  { id: 4, name: "Resume", type: "resume" },
];

// ----------------------------
// NAV ICONS
// ----------------------------

const navIcons = [
  { id: 1, img: "/icons/wifi.svg" },
  { id: 2, img: "/icons/search.svg" },
  { id: 3, img: "/icons/user.svg" },
  { id: 4, img: "/icons/mode.svg" },
];

// ----------------------------
// DOCK APPS
// ----------------------------

const dockApps = [
  { id: "finder", name: "Projects", icon: "finder.png", canOpen: true },
  { id: "safari", name: "Articles", icon: "safari.png", canOpen: true },
  { id: "photos", name: "Gallery", icon: "photos.png", canOpen: true },
  { id: "contact", name: "Contact", icon: "contact.png", canOpen: true },
  { id: "terminal", name: "Skills", icon: "terminal.png", canOpen: true },
  { id: "trash", name: "Archive", icon: "trash.png", canOpen: false },
];

// ----------------------------
// BLOG POSTS (EMPTY SINCE YOU HAVE NONE)
// ----------------------------

const blogPosts = [
    {
        id:1,
        date: "Nov 26 2025",
        title: "Register for dev events",
        link: "https://seminar-events-app.vercel.app/",
        image: "/images/event1.png",
    }
];

// ----------------------------
// TECH STACK / SKILLS WINDOW
// ----------------------------

const techStack = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Angular", "TypeScript", "JavaScript"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "BFF Architecture"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Lambda", "Batch", "Terraform", "Docker", "Kubernetes", "GitHub Actions"],
  },
  {
    category: "Mobile",
    items: ["Xamarin", "C#", "Android", "iOS"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    category: "Tools",
    items: ["Splunk", "Jira", "Confluence", "Figma", "Git"],
  },
];

// ----------------------------
// SOCIAL LINKS
// ----------------------------

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/RakeshMauraniSrikanth",
  }, 
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/rakeshsrikanth/",
  },
];

// ----------------------------
// PHOTO LINKS
// ----------------------------

const photosLinks = [
  { id: 1, icon: "/icons/gicon1.svg", title: "Library" },
  { id: 2, icon: "/icons/gicon2.svg", title: "Memories" },
  { id: 3, icon: "/icons/file.svg", title: "Places" },
  { id: 4, icon: "/icons/gicon4.svg", title: "People" },
  { id: 5, icon: "/icons/gicon5.svg", title: "Favorites" },
];

// ----------------------------
// GALLERY
// ----------------------------

const gallery = [
  { id: 1, img: "/images/gal1.png" },
  { id: 2, img: "/images/gal2.png" },
  { id: 3, img: "/images/gal3.png" },
  { id: 4, img: "/images/gal4.png" },
];

// ----------------------------
// WORK / PROJECTS — UPDATED TO MATCH YOUR EXPERIENCE
// ----------------------------

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1 – Telia Finance Frontend Platforms
    {
      id: 5,
      name: "Telia Finance Web Platforms",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition:"top-[15vh] right-20",
      children: [
        {
          id: 1,
          name: "project-info.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-10 left-5",
          description: [
            "Led frontend development for multiple B2B financial platforms using React, Next.js, Angular, and TypeScript.",
            "Implemented reusable UI components, authentication flows, SSR, and scalable architecture.",
            "Collaborated daily with product owners, architects, and backend teams to drive roadmap and deliver business value.",
          ],
        },
        {
          id: 4,
          name: "screens.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-10 left-80",
          imageUrl: "/images/project-frontend.png",
        },
      ],
    },

    // ▶ Project 2 – AWS Cloud Architecture
    {
      id: 6,
      name: "AWS Cloud Batch Pipeline",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",

      windowPosition:"top-[30vh] right-30",
      children: [
        {
          id: 1,
          name: "cloud-architecture.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          description: [
            "Designed and implemented a serverless AWS Batch system integrating MongoDB and PostgreSQL.",
            "Built observability pipelines using CloudWatch, Firehose, and Splunk, reducing reliance on Datadog.",
            "Implemented Terraform IaC and optimized cloud costs across multiple environments.",
          ],
        },
      ],
    },

    // ▶ Project 3 – Volvo Diagnostic Mobile Apps
    {
      id: 7,
      name: "Volvo Diagnostic Apps",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition:"top-[34vh] left-80",
      children: [
        {
          id: 1,
          name: "diagnostics.txt",
          icon: "/images/txt.png",
          fileType: "txt",
          kind: "file",
          description: [
            "Developed 8+ diagnostic and service apps for Android/iOS using Xamarin, C#, and MVVM.",
            "Built secure OBD-WiFi communication modules for truck diagnostics.",
            "Applications used globally by Volvo technicians for troubleshooting and maintenance.",
          ],
        },
      ],
    },
  ],
};

// ----------------------------
// ABOUT ME — UPDATED FOR YOU
// ----------------------------

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      subtitle: "Engineering Leader & Full-Stack Developer",
      description: [
        "Hi! I’m Rakesh 👋, an Engineering Leader with strong full-stack, cloud, and DevOps background.",
        "I’ve led teams, delivered complex systems at Telia Finance, Telia, and Volvo, and built platforms used by thousands.",
        "My strengths include building scalable architecture, mentoring engineers, and bridging tech with product and business needs.",
      ],
    },
  ],
};

// ----------------------------
// RESUME
// ----------------------------

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    { id: 1, name: "Resume.pdf", icon: "/images/pdf.png", kind: "file", fileType: "pdf" },
  ],
};

// ----------------------------
// TRASH
// ----------------------------

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [],
};

// ----------------------------
// EXPORT LOCATIONS + WINDOW CONFIG
// ----------------------------

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
export { navLinks, navIcons, dockApps, blogPosts, techStack, socials, photosLinks, gallery };