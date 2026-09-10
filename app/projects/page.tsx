"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { ExternalLink, Code2 as Github, ArrowRight } from 'lucide-react';
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/motion";
import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    id: "1",
    title: "Luminary Design System",
    description:
      "A comprehensive component library built for scale. Includes 80+ accessible components, dark mode support, and full Storybook documentation.",
    tags: ["React", "TypeScript", "Storybook", "Radix UI"],
    category: "Frontend",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/8d60d159ace14fa2bd66df5f1b78945b.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "2",
    title: "Orbit Analytics Dashboard",
    description:
      "Real-time analytics platform for SaaS businesses. Visualizes user behavior, revenue metrics, and funnel performance with interactive charts.",
    tags: ["Next.js", "Recharts", "Supabase", "Tailwind CSS"],
    category: "Full-Stack",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/f8d45c23911a43769ae1d5861f9ab1f9.png",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "3",
    title: "Verdant E-Commerce",
    description:
      "Sustainable goods marketplace with a focus on performance. Achieves 98 Lighthouse score, sub-second LCP, and seamless checkout flow.",
    tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    category: "Full-Stack",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/96e99fa618554c428ab562d58966e1fb.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "4",
    title: "Pulse Mobile App",
    description:
      "Health and wellness tracker with personalized insights. Integrates with wearables and uses ML to surface actionable recommendations.",
    tags: ["React Native", "Expo", "Node.js", "TensorFlow"],
    category: "Mobile",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/e59777fd2f7b4304b55ec4d54ed1df73.png",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "5",
    title: "Nocturne Brand Identity",
    description:
      "Full brand identity for an independent music label. Covers logo, typography system, color palette, and digital/print asset guidelines.",
    tags: ["Figma", "Illustrator", "Brand Design"],
    category: "Design",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/b6f15ea6b5ba4d44bb0140ac817d644e.png",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "6",
    title: "Relay API Gateway",
    description:
      "High-throughput API gateway with rate limiting, caching, and observability built in. Handles 50k+ requests per minute in production.",
    tags: ["Node.js", "Redis", "Docker", "Prometheus"],
    category: "Backend",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/90b277b989cb44b2953b85c3700536bf.png",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "7",
    title: "Folio CMS",
    description:
      "Headless CMS tailored for creative agencies. Features a drag-and-drop page builder, media library, and multi-site management.",
    tags: ["React", "GraphQL", "MongoDB", "AWS S3"],
    category: "Full-Stack",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/791091cb25bc42749b725e5b2d137faf.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
  {
    id: "8",
    title: "Spectrum UI Kit",
    description:
      "Figma UI kit with 300+ components, auto-layout, and design tokens. Used by 2,000+ designers across 40 countries.",
    tags: ["Figma", "Design Tokens", "UI Design"],
    category: "Design",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/1ae8c63c6fcc4a7ba1fee4efaf64da4d.png",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
  },
];

const CATEGORIES = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))] as const;

export default function ProjectsPage() {
  const t = useTranslations();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <main className="min-h-screen bg-[hsl(var(--background))]">
      {/* Page Header */}
      <Reveal>
        <section className="relative overflow-hidden border-b border-[hsl(var(--border))] bg-[hsl(var(--card))]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[var(--accent)]/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[var(--accent)]/3 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="inline-block rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-6">
                {t("projects.eyebrow")}
              </span>
            </motion.div>
            <motion.h1
              className="text-4xl font-bold tracking-tight text-[hsl(var(--foreground))] md:text-6xl text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
            >
              {t("projects.heading")}
            </motion.h1>
            <motion.p
              className="mt-5 max-w-xl text-lg leading-relaxed text-[hsl(var(--muted-foreground))]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.16 }}
            >
              {t("projects.subheading")}
            </motion.p>
          </div>
        </section>
      </Reveal>

      {/* Filter Bar */}
      <Reveal>
        <section className="sticky top-0 z-20 border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/90 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-6 py-4">
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "shrink-0 rounded-full px-5 py-2 text-sm font-medium border transition-all duration-200",
                    activeCategory === cat
                      ? "bg-[var(--accent)] text-black border-[var(--accent)] shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
                      : "bg-transparent border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:border-[var(--accent)]/50 hover:text-[hsl(var(--foreground))]"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Project Grid */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                variants={scaleIn}
                custom={i}
                whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]",
                  "shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.10)]",
                  "transition-shadow duration-300 hover:shadow-[0_4px_32px_-8px_rgba(0,0,0,0.18)]",
                  project.featured && "lg:col-span-1"
                )}
              >
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden bg-[hsl(var(--muted))]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                  {/* Category badge */}
                  <span className="absolute top-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="absolute top-3 right-3 rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-semibold text-black">
                      {t("projects.featuredBadge")}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg font-semibold tracking-tight text-[hsl(var(--foreground))] group-hover:text-[var(--accent)] transition-colors duration-200">
                    {project.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-2.5 py-0.5 text-xs font-medium text-[hsl(var(--muted-foreground))]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-5 flex items-center gap-3 border-t border-[hsl(var(--border))] pt-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold transition-all duration-200",
                        "bg-[var(--accent)] text-black hover:opacity-90 hover:shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
                      )}
                    >
                      <ExternalLink size={12} />
                      {t("projects.liveLink")}
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-lg border border-[hsl(var(--border))] px-3.5 py-2 text-xs font-semibold transition-all duration-200",
                        "text-[hsl(var(--foreground))] hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
                      )}
                    >
                      <Github size={12} />
                      {t("projects.githubLink")}
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-32 text-center"
          >
            <p className="text-lg font-medium text-[hsl(var(--foreground))]">
              {t("projects.emptyTitle")}
            </p>
            <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">
              {t("projects.emptyBody")}
            </p>
          </motion.div>
        )}
      </section>

      {/* CTA Strip */}
      <Reveal>
        <section className="border-t border-[hsl(var(--border))] bg-[hsl(var(--card))]">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 flex flex-col items-center text-center gap-6">
            <h2 className="text-2xl font-bold tracking-tight text-[hsl(var(--foreground))] md:text-3xl text-balance">
              {t("projects.ctaHeading")}
            </h2>
            <p className="max-w-md text-base leading-relaxed text-[hsl(var(--muted-foreground))]">
              {t("projects.ctaBody")}
            </p>
            <Link
              href="/contact"
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-all duration-200",
                "bg-[var(--accent)] text-black hover:opacity-90 hover:shadow-[0_4px_20px_rgba(0,0,0,0.18)]"
              )}
            >
              {t("projects.ctaButton")}
              <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </Reveal>
    </main>
  );
}