export interface NavLink {
  label: string;
  href: string;
  key: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "design" | "tools";
}

export const BRAND = {
  name: "Alex Morgan",
  tagline: "Crafting thoughtful digital experiences",
  email: "hello@alexmorgan.dev",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  role: "Full-Stack Developer & Designer",
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "/", key: "home" },
  { label: "About", href: "/about", key: "about" },
  { label: "Projects", href: "/projects", key: "projects" },
  { label: "Contact", href: "/contact", key: "contact" },
];
