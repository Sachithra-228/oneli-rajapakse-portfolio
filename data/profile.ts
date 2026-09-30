import {
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Users,
} from "lucide-react";

export const profile = {
  name: "Oneli Rajapakse",
  firstName: "Oneli",
  role: "Information Technology Undergraduate",
  degree: "BSc. (Hons) in Information Technology",
  university: "Sri Lanka Institute of Information Technology",
  universityShort: "SLIIT",
  focus: "QA / BA",
  email: "onelirajapakse2004@gmail.com",
  phone: "+94 77 943 2296",
  location: "Kaduwela, Sri Lanka",
  languages: ["English", "Sinhala"],
  linkedinLabel: "Oneli Rajapakse",
  githubLabel: "Oneli Rajapakse",
  links: {
    linkedin: "",
    github: "",
  },
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const profileFacts = [
  { label: "Based in", value: "Sri Lanka", icon: MapPin },
  { label: "Education", value: "BSc (Hons) Information Technology", icon: GraduationCap },
  { label: "Focus", value: "QA / BA + Software Development", icon: BriefcaseBusiness },
  { label: "Languages", value: "English, Sinhala", icon: BookOpen },
];

export const skills = [
  {
    number: "01",
    title: "Development",
    detail: "Core programming foundations for building and reasoning through software.",
    items: ["Python", "C/C++", "Java", "JavaScript"],
  },
  {
    number: "02",
    title: "Web",
    detail: "Frontend and full-stack learning across practical project work.",
    items: ["HTML", "CSS", "JavaScript", "MERN"],
  },
  {
    number: "03",
    title: "Tools",
    detail: "Everyday tools for coding, prototyping, documentation and collaboration.",
    items: ["GitHub", "VS Code", "Android Studio", "Figma", "MS Office"],
  },
];

export const projects = [
  {
    number: "01",
    title: "Online Book Store",
    category: "Web Application",
    description:
      "Developed a dynamic web-based bookstore with user registration, book catalog management, shopping cart and order processing.",
    technologies: ["HTML", "CSS", "PHP", "JavaScript"],
    accent: "violet",
    image: "/images/projects/online-book-store.png",
  },
  {
    number: "02",
    title: "Veterinary Hospital Management System",
    category: "Management Platform",
    description:
      "An online platform designed to support veterinary treatment and management workflows.",
    technologies: ["Java", "JavaScript", "MERN", "VS Code"],
    accent: "moss",
    image: "/images/projects/veterinary-hospital.png",
  },
  {
    number: "03",
    title: "UniConnect System",
    category: "Student Tutor Platform",
    description:
      "A student-tutor platform supporting tutor search, availability checking and session booking.",
    technologies: ["Java", "JavaScript", "MERN", "VS Code"],
    accent: "clay",
    image: "/images/projects/uniconnect.png",
  },
  {
    number: "04",
    title: "ZARA Store",
    category: "UI Concept",
    description: "A clothing-store website UI concept designed using Figma.",
    technologies: ["Figma"],
    accent: "violet",
    image: "/images/projects/fashion-store.png",
  },
  {
    number: "05",
    title: "MintMate",
    category: "Mobile UI Concept",
    description: "A mobile application UI concept created using Android Studio.",
    technologies: ["Android Studio"],
    accent: "moss",
    image: "/images/projects/mintmate.png",
  },
];

export const journey = [
  {
    label: "Education",
    title: "Sri Lanka Institute of Information Technology (SLIIT)",
    meta: "BSc (Hons) in Information Technology",
    date: "July 2023 - Present",
  },
  {
    label: "School",
    title: "St. Paul's Girls' School, Milagiriya",
    meta: "GCE A/L - 2022 | GCE O/L - 2019",
    date: "2009 - 2022",
  },
  {
    label: "Additional Learning",
    title: "University of Moratuwa",
    meta: "Python for Beginners | Web Designer for Beginners",
    date: "Completed coursework",
  },
  {
    label: "Additional Learning",
    title: "University of Cambridge / British Council, Malabe",
    meta: "ESOL Starters, Movers, Flyers and KET",
    date: "English language learning",
  },
];

export const activities = [
  {
    source: "St. Paul's Girls' School",
    roles: [
      "Senior Band Leader - Western Brass Band",
      "Committee Member - Information Technology Society",
      "Committee Member - Buddhist Society",
    ],
  },
  {
    source: "SLIIT",
    roles: ["Volunteer - Information Technology Student Community (ITSC)"],
  },
];

export const qualityPillars = [
  { label: "Quality Assurance", icon: Sparkles },
  { label: "Business Analysis", icon: Users },
  { label: "Problem Solving", icon: Code2 },
  { label: "Software Testing", icon: BriefcaseBusiness },
  { label: "Attention to Detail", icon: Sparkles },
  { label: "Continuous Learning", icon: BookOpen },
];

export const contacts = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replaceAll(" ", "")}`, icon: Phone },
  { label: "Location", value: profile.location, href: "", icon: MapPin },
  { label: "LinkedIn", value: profile.linkedinLabel, href: profile.links.linkedin, icon: Linkedin },
  { label: "GitHub", value: profile.githubLabel, href: profile.links.github, icon: Github },
];
