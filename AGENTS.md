# AGENTS.md

Project conventions for AI agents and humans editing this codebase.

## Original request
create a portfolio website

## Goal
Build a premium-soft personal portfolio website with a polished homepage, About, Projects, and Contact pages.

## Project type
portfolio

## Design system — match this exactly
- Color tokens: `--background: #faf8f5`, `--foreground: #1c1917`, `--border: #e8e2da`, `--muted-foreground: #78716c`, `--accent: #c2714f`, `--accent-light: #f0e6df`, `--accent-dark: #a05a3a`, `--card: 0 0% 100%`
- Fonts: Playfair_Display, Inter

## Existing components — reuse these, don't create near-duplicates
- LanguageToggle (components/LanguageToggle.tsx)
- LocaleProvider (components/LocaleProvider.tsx)

## Existing i18n namespaces
Every translation key must be namespaced (`hero.title`, never a bare `title`) so two components never collide on the same catalog slot. Reuse one of these, or pick a new, distinct name:
`about`, `contact`, `cta`, `footer`, `hero`, `nav`, `projects`, `services`, `testimonials`

When editing or adding pages: preserve the design system above, reuse existing components and the shared nav data file, and keep the established structure and tone.
