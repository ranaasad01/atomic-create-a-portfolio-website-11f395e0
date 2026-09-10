"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/Reveal";
import { BRAND } from "@/lib/data";

const SOCIAL_LINKS = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/alexmorgan",
    username: "@alexmorgan",
    color: "hover:text-[var(--brand-accent)]",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/alexmorgan",
    username: "Alex Morgan",
    color: "hover:text-[var(--brand-accent)]",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    href: "https://twitter.com/alexmorgan",
    username: "@alexmorgan",
    color: "hover:text-[var(--brand-accent)]",
  },
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${BRAND.email}`,
    username: BRAND.email,
    color: "hover:text-[var(--brand-accent)]",
  },
];

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "contact.form.nameRequired";
  else if (data.name.trim().length < 2) errors.name = "contact.form.nameTooShort";
  if (!data.email.trim()) errors.email = "contact.form.emailRequired";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "contact.form.emailInvalid";
  if (!data.message.trim()) errors.message = "contact.form.messageRequired";
  else if (data.message.trim().length < 20) errors.message = "contact.form.messageTooShort";
  return errors;
}

export default function ContactPage() {
  const t = useTranslations();

  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [formState, setFormState] = useState<FormState>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const newErrors = validate({ ...formData, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validate(formData);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, message: true };
    setTouched(allTouched);
    const newErrors = validate(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setFormState("loading");
    await new Promise((resolve) => setTimeout(resolve, 1800));
    setFormState("success");
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    setTouched({});
    setFormState("idle");
  };

  const inputBase =
    "w-full rounded-xl border bg-[var(--card)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] outline-none transition-all duration-200 focus:ring-2 focus:ring-[var(--brand-accent)]/40 focus:border-[var(--brand-accent)]";
  const inputNormal = "border-[var(--border)]";
  const inputError = "border-red-400/70 focus:ring-red-400/30 focus:border-red-400";

  return (
    <main className="min-h-screen bg-[var(--background)] pt-28 pb-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Page header */}
        <Reveal>
          <div className="mb-16 text-center">
            <span className="inline-block mb-4 rounded-full border border-[var(--brand-accent)]/30 bg-[var(--brand-accent)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--brand-accent)]">
              {t("contact.eyebrow")}
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl text-balance">
              {t("contact.heading")}
            </h1>
            <p className="mt-4 max-w-xl mx-auto text-base leading-relaxed text-[var(--muted-foreground)] text-pretty">
              {t("contact.subheading")}
            </p>
          </div>
        </Reveal>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16 items-start">

          {/* Left column — info + socials */}
          <Reveal className="lg:col-span-2">
            <div className="space-y-10">
              <div>
                <h2 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  {t("contact.leftHeading")}
                </h2>
                <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {t("contact.leftBody")}
                </p>
              </div>

              {/* Response time badge */}
              <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-5 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.08)]">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <p className="text-sm text-[var(--foreground)]">
                  <span className="font-semibold">{t("contact.responseLabel")}</span>{" "}
                  <span className="text-[var(--muted-foreground)]">{t("contact.responseTime")}</span>
                </p>
              </div>

              {/* Social links */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)] mb-5">
                  {t("contact.findMe")}
                </p>
                <ul className="space-y-3">
                  {SOCIAL_LINKS.map((social) => {
                    const Icon = social.icon;
                    return (
                      <li key={social.label}>
                        <motion.a
                          href={social.href}
                          target={social.href.startsWith("mailto") ? undefined : "_blank"}
                          rel="noopener noreferrer"
                          className={`group flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-[var(--foreground)] shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-200 hover:border-[var(--brand-accent)]/40 hover:shadow-[0_4px_16px_-4px_rgba(0,0,0,0.12)] ${social.color}`}
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] transition-colors duration-200 group-hover:bg-[var(--brand-accent)]/20">
                            <Icon size={18} />
                          </span>
                          <div className="min-w-0">
                            <p className="text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wide">{social.label}</p>
                            <p className="text-sm font-medium truncate">{social.username}</p>
                          </div>
                        </motion.a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Right column — contact form */}
          <Reveal className="lg:col-span-3" delay={0.1}>
            <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_16px_48px_-12px_rgba(0,0,0,0.12)] overflow-hidden">
              {/* Subtle glow */}
              <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[var(--brand-accent)]/8 blur-3xl" />

              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center py-16 text-center gap-5"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/15"
                    >
                      <CheckCircle size={40} className="text-emerald-500" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">{t("contact.successTitle")}</h3>
                      <p className="text-sm text-[var(--muted-foreground)] max-w-xs">{t("contact.successBody")}</p>
                    </div>
                    <motion.button
                      onClick={handleReset}
                      className="mt-2 rounded-xl border border-[var(--border)] bg-[var(--background)] px-6 py-2.5 text-sm font-medium text-[var(--foreground)] transition-all duration-200 hover:border-[var(--brand-accent)]/40 hover:bg-[var(--brand-accent)]/5"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {t("contact.sendAnother")}
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    noValidate
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="text-lg font-semibold text-[var(--foreground)] mb-1">{t("contact.formHeading")}</h2>
                      <p className="text-sm text-[var(--muted-foreground)]">{t("contact.formSubheading")}</p>
                    </div>

                    {/* Name field */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)]">
                        {t("contact.form.nameLabel")}
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={t("contact.form.namePlaceholder")}
                        className={`${inputBase} ${touched.name && errors.name ? inputError : inputNormal}`}
                      />
                      <AnimatePresence>
                        {touched.name && errors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center gap-1.5 text-xs text-red-400"
                          >
                            <AlertCircle size={12} />
                            {t(errors.name)}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Email field */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)]">
                        {t("contact.form.emailLabel")}
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={t("contact.form.emailPlaceholder")}
                        className={`${inputBase} ${touched.email && errors.email ? inputError : inputNormal}`}
                      />
                      <AnimatePresence>
                        {touched.email && errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center gap-1.5 text-xs text-red-400"
                          >
                            <AlertCircle size={12} />
                            {t(errors.email)}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Message field */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)]">
                        {t("contact.form.messageLabel")}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={t("contact.form.messagePlaceholder")}
                        className={`${inputBase} resize-none ${touched.message && errors.message ? inputError : inputNormal}`}
                      />
                      <div className="flex items-start justify-between gap-2">
                        <AnimatePresence>
                          {touched.message && errors.message && (
                            <motion.p
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -4 }}
                              transition={{ duration: 0.2 }}
                              className="flex items-center gap-1.5 text-xs text-red-400"
                            >
                              <AlertCircle size={12} />
                              {t(errors.message)}
                            </motion.p>
                          )}
                        </AnimatePresence>
                        <span className={`ml-auto text-xs tabular-nums ${formData.message.length < 20 && touched.message ? "text-red-400" : "text-[var(--muted-foreground)]"}`}>
                          {formData.message.length} / 20+
                        </span>
                      </div>
                    </div>

                    {/* Submit button */}
                    <motion.button
                      type="submit"
                      disabled={formState === "loading"}
                      className="relative w-full flex items-center justify-center gap-2.5 rounded-xl bg-[var(--brand-accent)] px-6 py-3.5 text-sm font-semibold text-[var(--brand-accent-fg)] shadow-[0_2px_8px_rgba(0,0,0,0.12)] transition-all duration-200 hover:opacity-90 hover:shadow-[0_4px_16px_rgba(0,0,0,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                      whileHover={{ scale: formState === "loading" ? 1 : 1.01 }}
                      whileTap={{ scale: formState === "loading" ? 1 : 0.98 }}
                    >
                      <AnimatePresence mode="wait">
                        {formState === "loading" ? (
                          <motion.span
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                          >
                            <Loader2 size={16} className="animate-spin" />
                            {t("contact.form.sending")}
                          </motion.span>
                        ) : (
                          <motion.span
                            key="idle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                          >
                            <Send size={16} />
                            {t("contact.form.submit")}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>

                    <p className="text-center text-xs text-[var(--muted-foreground)]">
                      {t("contact.form.privacy")}
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}