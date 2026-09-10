"use client";

import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Briefcase, GraduationCap, Code2, Palette, Wrench, Globe } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { BRAND } from "@/lib/data";
import { staggerContainer, fadeInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

// ─── Inline mock data ────────────────────────────────────────────────────────

interface Skill {
  name: string;
  category: "frontend" | "backend" | "design" | "tools";
}

const SKILLS: Skill[] = [
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Framer Motion", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "Prisma", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "GraphQL", category: "backend" },
  { name: "Figma", category: "design" },
  { name: "Design Systems", category: "design" },
  { name: "Prototyping", category: "design" },
  { name: "Typography", category: "design" },
  { name: "Git", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Vercel", category: "tools" },
  { name: "Linear", category: "tools" },
];

interface TimelineEntry {
  id: string;
  type: "work" | "education";
  title: string;
  org: string;
  period: string;
  description: string;
}

const TIMELINE: TimelineEntry[] = [
  {
    id: "t1",
    type: "work",
    title: "Senior Full-Stack Engineer",
    org: "Meridian Labs",
    period: "2022 — Present",
    description:
      "Lead a cross-functional team of six building a real-time analytics platform serving 40,000 daily active users. Architected a micro-frontend system that cut deployment time by 60% and introduced a shared design system adopted across three product lines.",
  },
  {
    id: "t2",
    type: "work",
    title: "Frontend Engineer",
    org: "Bloom Studio",
    period: "2020 — 2022",
    description:
      "Designed and built interactive data-visualization dashboards for fintech clients. Collaborated closely with product designers to translate high-fidelity Figma specs into pixel-perfect, accessible React components.",
  },
  {
    id: "t3",
    type: "work",
    title: "Junior Developer",
    org: "Wavefront Digital",
    period: "2018 — 2020",
    description:
      "Maintained and extended a suite of e-commerce storefronts built on Next.js. Improved Lighthouse performance scores from an average of 62 to 94 across the portfolio through image optimization and code-splitting strategies.",
  },
  {
    id: "t4",
    type: "education",
    title: "B.Sc. Computer Science",
    org: "University of Edinburgh",
    period: "2014 — 2018",
    description:
      "Graduated with First Class Honours. Dissertation focused on generative UI systems and procedural layout algorithms. Active member of the HCI research group and co-founded the university's open-source software society.",
  },
];

const CATEGORY_META: Record<
  Skill["category"],
  { label: string; icon: React.ReactNode; color: string }
> = {
  frontend: {
    label: "Frontend",
    icon: <Code2 size={16} />,
    color: "bg-[var(--accent)]/10 text-[var(--accent)] border-[var(--accent)]/20",
  },
  backend: {
    label: "Backend",
    icon: <Globe size={16} />,
    color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  design: {
    label: "Design",
    icon: <Palette size={16} />,
    color: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  },
  tools: {
    label: "Tools",
    icon: <Wrench size={16} />,
    color: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  },
};

const SKILL_CATEGORIES: Skill["category"][] = ["frontend", "backend", "design", "tools"];

// ─── Sub-components ───────────────────────────────────────────────────────────

const pillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

function SkillPill({ name, category }: { name: string; category: Skill["category"] }) {
  const meta = CATEGORY_META[category];
  return (
    <motion.span
      variants={pillVariants}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
        meta.color
      )}
    >
      {name}
    </motion.span>
  );
}

function SkillGroup({ category }: { category: Skill["category"] }) {
  const meta = CATEGORY_META[category];
  const skills = SKILLS.filter((s) => s.category === category);

  return (
    <div className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.12)]">
      <div className="mb-4 flex items-center gap-2">
        <span
          className={cn(
            "flex h-7 w-7 items-center justify-center rounded-lg border",
            meta.color
          )}
        >
          {meta.icon}
        </span>
        <span className="text-sm font-semibold text-[hsl(var(--foreground))]">
          {meta.label}
        </span>
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="flex flex-wrap gap-2"
      >
        {skills.map((s) => (
          <SkillPill key={s.name} name={s.name} category={s.category} />
        ))}
      </motion.div>
    </div>
  );
}

function TimelineItem({ entry, index }: { entry: TimelineEntry; index: number }) {
  const isWork = entry.type === "work";
  return (
    <Reveal delay={index * 0.08}>
      <div className="relative flex gap-6">
        {/* Vertical line */}
        <div className="flex flex-col items-center">
          <div
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2",
              isWork
                ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
                : "border-violet-400 bg-violet-500/10 text-violet-400"
            )}
          >
            {isWork ? <Briefcase size={15} /> : <GraduationCap size={15} />}
          </div>
          {/* connector */}
          <div className="mt-2 w-px flex-1 bg-[hsl(var(--border))]" />
        </div>

        <div className="pb-10">
          <p className="mb-0.5 text-xs font-medium tracking-wide text-[hsl(var(--muted-foreground))] uppercase">
            {entry.period}
          </p>
          <h3 className="text-base font-semibold text-[hsl(var(--foreground))]">
            {entry.title}
          </h3>
          <p className="mb-2 text-sm font-medium text-[var(--accent)]">{entry.org}</p>
          <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
            {entry.description}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-[hsl(var(--background))]">
      {/* ── Hero: editorial split layout ── */}
      <Reveal>
        <section className="relative overflow-hidden border-b border-[hsl(var(--border))]">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-0 lg:grid-cols-2">
            {/* Portrait */}
            <div className="relative min-h-[420px] overflow-hidden bg-[hsl(var(--card))] lg:min-h-[560px]">
              <img
                src="https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/7f0034f72c234a35818da9daa0ba43c1.jpg"
                alt={t("about.hero.imageAlt")}
                className="h-full w-full object-cover object-center"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 backdrop-blur-sm"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-medium text-white">
                  {t("about.hero.badge")}
                </span>
              </motion.div>
            </div>

            {/* Headline block */}
            <div className="flex flex-col justify-center px-8 py-16 lg:px-14 lg:py-20">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--accent)]"
              >
                {t("about.hero.eyebrow")}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.55, ease: "easeOut" }}
                className="mb-6 text-4xl font-bold tracking-tight text-[hsl(var(--foreground))] text-balance lg:text-5xl"
              >
                {t("about.hero.headline")}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                className="mb-8 text-base leading-relaxed text-[hsl(var(--muted-foreground))] text-pretty"
              >
                {t("about.hero.subtext")}
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="flex flex-wrap gap-3"
              >
                {(
                  Array.isArray(t.raw("about.hero.stats"))
                    ? t.raw("about.hero.stats")
                    : []
                ).map(
                  (
                    stat: { value: string; label: string },
                    i: number
                  ) => (
                    <div
                      key={i}
                      className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-5 py-3"
                    >
                      <p className="text-xl font-bold text-[hsl(var(--foreground))]">
                        {stat.value}
                      </p>
                      <p className="text-xs text-[hsl(var(--muted-foreground))]">
                        {stat.label}
                      </p>
                    </div>
                  )
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Bio ── */}
      <Reveal>
        <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
            {t("about.bio.eyebrow")}
          </p>
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-[hsl(var(--foreground))] text-balance md:text-3xl">
            {t("about.bio.heading")}
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-[hsl(var(--muted-foreground))]">
            <p>{t("about.bio.p1")}</p>
            <p>{t("about.bio.p2")}</p>
            <p>{t("about.bio.p3")}</p>
          </div>
        </section>
      </Reveal>

      {/* ── Skills ── */}
      <Reveal>
        <section className="border-t border-[hsl(var(--border))] bg-[hsl(var(--card))]/40 px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                {t("about.skills.eyebrow")}
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-[hsl(var(--foreground))] text-balance md:text-3xl">
                {t("about.skills.heading")}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                {t("about.skills.subtext")}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {SKILL_CATEGORIES.map((cat) => (
                <SkillGroup key={cat} category={cat} />
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Timeline ── */}
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <Reveal>
          <div className="mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
              {t("about.timeline.eyebrow")}
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-[hsl(var(--foreground))] text-balance md:text-3xl">
              {t("about.timeline.heading")}
            </h2>
          </div>
        </Reveal>

        <div>
          {TIMELINE.map((entry, i) => (
            <TimelineItem key={entry.id} entry={entry} index={i} />
          ))}
        </div>
      </section>

      {/* ── CTA strip ── */}
      <Reveal>
        <section className="border-t border-[hsl(var(--border))] bg-[hsl(var(--card))]/60 px-6 py-16">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-[hsl(var(--foreground))]">
                {t("about.cta.heading")}
              </h2>
              <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">
                {t("about.cta.subtext")}
              </p>
            </div>
            <a
              href={`mailto:${BRAND.email}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:opacity-90 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
            >
              {t("about.cta.button")}
            </a>
          </div>
        </section>
      </Reveal>
    </main>
  );
}