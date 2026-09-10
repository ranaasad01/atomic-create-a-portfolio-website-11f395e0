"use client";

import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowRight, Star, Code, Layout, Terminal, Sparkles, Code2 as Github, Briefcase as Linkedin, Mail, CheckCircle } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { BRAND } from "@/lib/data";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/motion";

// ─── Inline data ────────────────────────────────────────────────────────────

const FEATURED_PROJECTS = [
  {
    id: "luminary",
    title: "Luminary Design System",
    description:
      "A comprehensive component library built for scale. Tokens, accessibility, and dark-mode support baked in from day one.",
    tags: ["React", "TypeScript", "Storybook"],
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/45119cc54e2c41e2a7897aa96d6b8625.jpg",
    href: "/projects",
    accent: "from-violet-500/20 to-indigo-500/10",
  },
  {
    id: "verdant",
    title: "Verdant Analytics",
    description:
      "Real-time sustainability dashboard for enterprise teams. Visualises carbon footprint data across global supply chains.",
    tags: ["Next.js", "D3.js", "PostgreSQL"],
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/cc3f3fb705f640538b495aaedec2ef68.png",
    href: "/projects",
    accent: "from-emerald-500/20 to-teal-500/10",
  },
  {
    id: "orbit",
    title: "Orbit CMS",
    description:
      "Headless content platform with a visual editor, live preview, and a GraphQL API that plays nicely with any frontend.",
    tags: ["Node.js", "GraphQL", "React"],
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/32c415f007c847299cd76094d7a28b5e.jpeg",
    href: "/projects",
    accent: "from-amber-500/20 to-orange-500/10",
  },
];

const SERVICES = [
  {
    icon: Layout,
    title: "UI & Product Design",
    body: "From wireframes to polished interfaces. I design systems that are beautiful, accessible, and built to last.",
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    body: "End-to-end engineering with React, Next.js, Node.js, and PostgreSQL. Performant, tested, and maintainable.",
  },
  {
    icon: Terminal,
    title: "Developer Experience",
    body: "CI/CD pipelines, monorepo tooling, and component libraries that make teams ship faster with confidence.",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    body: "Embedding LLMs and generative features into products thoughtfully, with clear UX and sensible guardrails.",
  },
];

const TESTIMONIALS = [
  {
    id: "t1",
    quote:
      "Alex delivered a design system that our team of 30 engineers adopted in weeks. The quality and attention to detail were exceptional.",
    name: "Priya Nair",
    role: "VP of Engineering, Helix Labs",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya%20Nair",
  },
  {
    id: "t2",
    quote:
      "Working with Alex felt like having a co-founder who could both design and build. The product shipped on time and looked stunning.",
    name: "Marcus Webb",
    role: "Founder, Verdant",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus%20Webb",
  },
  {
    id: "t3",
    quote:
      "The refactor Alex led cut our bundle size by 40% and our Lighthouse score jumped from 62 to 97. Remarkable work.",
    name: "Soo-Jin Park",
    role: "CTO, Orbit Systems",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Soo-Jin%20Park",
  },
];

const STATS = [
  { value: "8+", label: "Years of experience" },
  { value: "60+", label: "Projects shipped" },
  { value: "98%", label: "Client satisfaction" },
  { value: "12", label: "Open-source packages" },
];

// ─── Hero entrance variants ──────────────────────────────────────────────────

const heroHeading: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const heroSub: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.18 },
  },
};

const heroCta: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.34 },
  },
};

const heroImage: Variants = {
  hidden: { opacity: 0, scale: 0.94, x: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
  },
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="overflow-x-hidden">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-[92vh] flex items-center bg-[var(--background)]"
      >
        {/* Subtle radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[var(--brand-primary)]/8 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl w-full px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex flex-col gap-6"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-flex items-center gap-2 self-start rounded-full border border-[var(--brand-primary)]/30 bg-[var(--brand-primary)]/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-[var(--brand-primary)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-primary)] animate-pulse" />
                {t("hero.badge")}
              </motion.span>

              <motion.h1
                variants={heroHeading}
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--foreground)] text-balance leading-[1.08]"
              >
                {t("hero.heading1")}
                <br />
                <span className="text-[var(--brand-primary)]">
                  {t("hero.heading2")}
                </span>
              </motion.h1>

              <motion.p
                variants={heroSub}
                className="text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed max-w-lg text-pretty"
              >
                {t("hero.subtext")}
              </motion.p>

              <motion.div
                variants={heroCta}
                className="flex flex-wrap gap-4 pt-2"
              >
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--brand-primary)] px-7 py-3.5 text-sm font-semibold text-[var(--brand-primary-foreground)] shadow-[0_4px_24px_-4px_var(--brand-primary)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_8px_32px_-4px_var(--brand-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2"
                >
                  {t("hero.cta.primary")}
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-7 py-3.5 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:bg-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2"
                >
                  {t("hero.cta.secondary")}
                </Link>
              </motion.div>

              {/* Social links */}
              <motion.div variants={fadeInUp} className="flex items-center gap-4 pt-2">
                <span className="text-xs text-[var(--muted-foreground)] uppercase tracking-widest">
                  {t("hero.findMe")}
                </span>
                <div className="flex gap-3">
                  <a
                    href={BRAND.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted-foreground)] transition-colors hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]"
                    aria-label="GitHub"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={BRAND.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted-foreground)] transition-colors hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--muted-foreground)] transition-colors hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]"
                    aria-label="Email"
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroImage}
            className="hidden md:flex justify-center items-center"
          >
            <div className="relative w-[420px] h-[480px] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/20 to-transparent z-10" />
              <img
                src="https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/45119cc54e2c41e2a7897aa96d6b8625.jpg"
                alt="Hero"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="border-y border-[var(--border)] bg-[var(--card)]/50">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <Reveal key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[var(--brand-primary)]">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--muted-foreground)] mt-1">
                  {stat.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ────────────────────────────────────────────── */}
      <section id="projects" className="py-24 md:py-32 bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="mb-16 text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[var(--brand-primary)] mb-3">
              {t("projects.eyebrow")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">
              {t("projects.heading")}
            </h2>
            <p className="mt-4 text-[var(--muted-foreground)] max-w-xl mx-auto">
              {t("projects.subheading")}
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {FEATURED_PROJECTS.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.1}>
                <Link
                  href={project.href}
                  className={`group block rounded-2xl overflow-hidden border border-[var(--border)] bg-gradient-to-br ${project.accent} bg-[var(--card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-[var(--foreground)] mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-medium text-[var(--accent-foreground)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)] hover:underline"
            >
              {t("projects.viewAll")}
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[var(--card)]/30">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="mb-16 text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[var(--brand-primary)] mb-3">
              {t("services.eyebrow")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">
              {t("services.heading")}
            </h2>
            <p className="mt-4 text-[var(--muted-foreground)] max-w-xl mx-auto">
              {t("services.subtext")}
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 h-full flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]">
                    <service.icon size={22} />
                  </div>
                  <h3 className="font-bold text-[var(--foreground)]">{service.title}</h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed flex-1">
                    {service.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[var(--background)]">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="mb-16 text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[var(--brand-primary)] mb-3">
              {t("testimonials.eyebrow")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">
              {t("testimonials.heading")}
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <Reveal key={testimonial.id} delay={i * 0.1}>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 flex flex-col gap-6 h-full">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        size={16}
                        className="fill-[var(--brand-primary)] text-[var(--brand-primary)]"
                      />
                    ))}
                  </div>
                  <p className="text-[var(--muted-foreground)] leading-relaxed flex-1 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-10 w-10 rounded-full bg-[var(--accent)]"
                    />
                    <div>
                      <div className="font-semibold text-sm text-[var(--foreground)]">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-[var(--muted-foreground)]">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[var(--brand-primary)]">
        <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
          <Reveal>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[var(--brand-primary-foreground)]/70 mb-4">
              {t("cta.eyebrow")}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--brand-primary-foreground)] mb-6 text-balance">
              {t("cta.heading")}
            </h2>
            <p className="text-[var(--brand-primary-foreground)]/80 mb-10 max-w-xl mx-auto">
              {t("cta.subtext")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-primary-foreground)] px-8 py-4 text-sm font-bold text-[var(--brand-primary)] transition-all duration-300 hover:brightness-95 hover:shadow-xl"
            >
              {t("cta.button")}
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
