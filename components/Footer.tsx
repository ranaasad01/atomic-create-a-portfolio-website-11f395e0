"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Mail } from 'lucide-react';
import { navLinks, BRAND } from "@/lib/data";

export function Footer() {
  const t = useTranslations();
  const pathname = usePathname();
  const navT = t.raw("nav") as Record<string, string>;
  const footerT = t.raw("footer") as Record<string, string>;

  function handleLinkClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    if (href.startsWith("#")) {
      if (pathname === "/") {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  function resolveHref(href: string) {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : "/" + href;
    }
    return href;
  }

  const socials = [
    { icon: Github, href: BRAND.github, label: "GitHub" },
    { icon: Linkedin, href: BRAND.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: BRAND.twitter, label: "Twitter" },
    { icon: Mail, href: `mailto:${BRAND.email}`, label: "Email" },
  ];

  return (
    <footer className="bg-[var(--surface)] border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-display text-xl font-semibold tracking-tight text-[var(--foreground)] hover:text-[var(--accent)] transition-colors duration-200"
            >
              {BRAND.name}
            </Link>
            <p className="mt-3 text-sm text-[var(--muted-foreground)] leading-relaxed max-w-xs">
              {footerT["tagline"] ?? BRAND.tagline}
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 mt-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-[var(--muted-foreground)] hover:text-[var(--accent)] hover:border-[var(--accent)]/30 transition-colors duration-200"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)] mb-4">
              {footerT["navHeading"] ?? "Navigation"}
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={resolveHref(link.href)}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-200"
                  >
                    {navT[link.key] ?? link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)] mb-4">
              {footerT["contactHeading"] ?? "Get in Touch"}
            </p>
            <a
              href={`mailto:${BRAND.email}`}
              className="text-sm text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors duration-200 block mb-2"
            >
              {BRAND.email}
            </a>
            <p className="text-sm text-[var(--muted-foreground)]">
              {footerT["availability"] ?? "Open to new opportunities"}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--muted-foreground)]">
            {footerT["copyright"] ?? `© ${new Date().getFullYear()} ${BRAND.name}. All rights reserved.`}
          </p>
          <p className="text-xs text-[var(--muted-foreground)]">
            {footerT["madeWith"] ?? "Designed and built with care"}
          </p>
        </div>
      </div>
    </footer>
  );
}