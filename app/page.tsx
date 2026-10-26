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
      <section id="home" className="relative min-h-[92vh] flex items-center bg-[var(--background)]">
        {/* Subtle radial glow */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-[var(--brand-primary)]/8 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl w-full px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col gap-6">
              <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 self-start rounded-full border border-[var(--brand-primary)]/30 bg-[var(--brand-primary)]/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-[var(--brand-primary)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-primary)] animate-pulse" />
                {t("hero.badge")}
              </motion.span>

              <motion.h1 variants={heroHeading} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--foreground)] text-balance leading-[1.08]">Designer & DevOps</motion.h1>

              <motion.p variants={heroSub} className="text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed max-w-lg text-pretty">
                {t("hero.subtext")}
              </motion.p>

              <motion.div variants={heroCta} className="flex flex-wrap gap-4 pt-2">
                <Link href="/projects" className="group inline-flex items-center gap-2 rounded-full bg-[var(--brand-primary)] px-7 py-3.5 text-sm font-semibold text-[var(--brand-primary-foreground)] shadow-[0_4px_24px_-4px_var(--brand-primary)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_8px_32px_-4px_var(--brand-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2">
                  {t("hero.cta.primary")}
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-7 py-3.5 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:border-[var(--brand-primary)]/50 hover:bg-[var(--brand-primary)]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2">
                  {t("hero.cta.secondary")}
                </Link>
              </motion.div>

              {/* Social links */}
              <motion.div variants={fadeInUp} className="flex items-center gap-5 pt-2">
                <span className="text-xs text-[var(--muted-foreground)] tracking-wide">
                  {t("hero.findMe")}
                </span>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]">
                  <Linkedin size={18} />
                </a>
                <a href={`mailto:${BRAND.email}`} aria-label="Email" className="text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]">
                  <Mail size={18} />
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: portrait */}
          <motion.div initial="hidden" animate="visible" variants={heroImage} className="relative hidden md:flex justify-center">
            <div className="relative w-[420px] h-[520px]">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-3xl border border-[var(--brand-primary)]/20 scale-105" />
              <img src="https://s3-alpha.figma.com/hub/file/2309801432021632936/86b8744f-8a01-44e8-b3f4-36e2b6ee4ec5-cover.png" alt={`${BRAND.name} — ${BRAND.role}`} className="relative z-10 w-full h-full object-cover rounded-3xl shadow-[0_24px_80px_-16px_rgba(0,0,0,0.3)] border border-[var(--border)]" />
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-6 z-20 flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-5 py-3.5 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.2)]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--brand-primary)]/15">
                  <CheckCircle size={18} className="text-[var(--brand-primary)]" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-[var(--foreground)]">
                    {t("hero.badge2.title")}
                  </p>
                  <p className="text-[11px] text-[var(--muted-foreground)]">
                    {t("hero.badge2.sub")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ── Stats bar ────────────────────────────────────────────────────── */}
      <Reveal>
        <section className="border-y border-[var(--border)] bg-[var(--card)]">
          <div className="mx-auto max-w-7xl px-6 md:px-10 py-10">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-[var(--border)]">
              {STATS.map((stat, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex flex-col items-center text-center md:px-8">
                  <span className="text-4xl font-bold tracking-tight text-[var(--foreground)]">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-sm text-[var(--muted-foreground)]">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </Reveal>
      {/* ── Featured Projects ─────────────────────────────────────────────── */}
      <Reveal>
        <section id="projects" className="py-24 md:py-32 bg-[var(--background)]">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[var(--brand-primary)] mb-3">
                  {t("projects.eyebrow")}
                </p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] text-balance">
                  {t("projects.heading")}
                </h2>
              </div>
              <Link href="/projects" className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)] hover:underline underline-offset-4 transition-all">
                {t("projects.viewAll")}
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Bento grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURED_PROJECTS.map((project, i) => (
                <Reveal key={project.id} delay={i * 0.08}>
                  <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3, ease: "easeOut" }} className={`group relative flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.10)] hover:shadow-[0_4px_32px_-8px_rgba(0,0,0,0.18)] transition-shadow duration-300 ${i === 0 ? "lg:col-span-2" : ""}`}>
                    {/* Image */}
                    <div className={`relative overflow-hidden ${i === 0 ? "h-56" : "h-44"}`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-6 gap-3">
                      <h3 className="text-lg font-bold text-[var(--foreground)] group-hover:text-[var(--brand-primary)] transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[var(--muted-foreground)] leading-relaxed flex-1">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.tags.map((tag) => (<span key={tag} className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1 text-[11px] font-medium text-[var(--muted-foreground)]">
                          {tag}
                        </span>))}
                      </div>
                      <Link href={project.href} className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--brand-primary)] hover:underline underline-offset-4">
                        {t("projects.caseStudy")}
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
      {/* ── Services ─────────────────────────────────────────────────────── */}
      <Reveal>
        <section id="services" className="py-24 md:py-32 bg-[var(--card)] border-y border-[var(--border)]">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
              {/* Left sticky label */}
              <div className="lg:sticky lg:top-28">
                <p className="text-xs font-semibold tracking-widest uppercase text-[var(--brand-primary)] mb-3">
                  {t("services.eyebrow")}
                </p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] text-balance leading-tight">
                  {t("services.heading")}
                </h2>
                <p className="mt-5 text-[var(--muted-foreground)] leading-relaxed text-pretty">
                  {t("services.subtext")}
                </p>
                <Link href="/about" className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)] hover:underline underline-offset-4">
                  {t("services.learnMore")}
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>

              {/* Right: service list */}
              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid sm:grid-cols-2 gap-5">
                {SERVICES.map((svc, i) => {
                  const Icon = svc.icon;
                  return (
                    <motion.div key={i} variants={scaleIn} whileHover={{ y: -3 }} transition={{ duration: 0.25, ease: "easeOut" }} className="flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_16px_-4px_rgba(0,0,0,0.08)] hover:border-[var(--brand-primary)]/30 transition-colors duration-300">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-primary)]/12 text-[var(--brand-primary)]">
                        <Icon size={22} />
                      </span>
                      <div>
                        <h3 className="font-bold text-[var(--foreground)] mb-1.5">
                          {svc.title}
                        </h3>
                        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                          {svc.body}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>
      </Reveal>
      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <Reveal>
        <section id="testimonials" className="py-24 md:py-32 bg-[var(--background)]">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--brand-primary)] mb-3">
                {t("testimonials.eyebrow")}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] text-balance">
                {t("testimonials.heading")}
              </h2>
            </div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t_item, i) => (
                <motion.div key={t_item.id} variants={fadeInUp} whileHover={{ y: -4 }} transition={{ duration: 0.25, ease: "easeOut" }} className="flex flex-col gap-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.10)] hover:shadow-[0_4px_32px_-8px_rgba(0,0,0,0.16)] transition-shadow duration-300">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        size={14}
                        className="fill-[var(--brand-primary)] text-[var(--brand-primary)]"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-[var(--foreground)] leading-relaxed flex-1 italic">
                    &ldquo;{t_item.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-2 border-t border-[var(--border)]">
                    <img src={t_item.avatar} alt={t_item.name} className="h-10 w-10 rounded-full object-cover border border-[var(--border)]" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--foreground)]">
                        {t_item.name}
                      </p>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        {t_item.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </Reveal>
      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <Reveal>
        <section id="contact" className="py-24 md:py-32 bg-[var(--card)] border-t border-[var(--border)]">
          <div className="mx-auto max-w-3xl px-6 md:px-10 text-center">
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col items-center gap-6">
              <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-primary)]/30 bg-[var(--brand-primary)]/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-[var(--brand-primary)]">
                {t("cta.eyebrow")}
              </motion.span>

              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] text-balance">
                {t("cta.heading")}
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-lg text-[var(--muted-foreground)] leading-relaxed text-pretty max-w-xl">
                {t("cta.subtext")}
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 pt-2">
                <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-[var(--brand-primary)] px-8 py-4 text-sm font-semibold text-[var(--brand-primary-foreground)] shadow-[0_4px_24px_-4px_var(--brand-primary)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_8px_32px_-4px_var(--brand-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2">
                  {t("cta.button")}
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
                <a href={`mailto:${BRAND.email}`} className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)] px-8 py-4 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:border-[var(--brand-primary)]/50 hover:bg-[var(--brand-primary)]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2">
                  <Mail size={15} />
                  {BRAND.email}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}