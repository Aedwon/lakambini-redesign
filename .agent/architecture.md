# 🏛️ Lakambini Events — Site Architecture & Routing Map

This document defines the strict directory structure for the Lakambini Events website. All agents must adhere to these paths when creating, reading, or modifying files. Do not scan directories blindly; use this map to locate files.

## 0. Tech Stack

| Layer | Tool | Notes |
|---|---|---|
| **Framework** | Next.js (App Router) | `app/` directory routing, React Server Components by default |
| **Language** | TypeScript | Strict mode via `tsconfig.json` |
| **Styling** | Tailwind CSS v4 | Configured via `@tailwindcss/postcss` in `postcss.config.mjs`. **No `tailwind.config.js`** — all theme tokens are defined inside `styles/globals.css` using the `@theme` directive. |
| **Fonts** | `next/font/google` | Noto Serif + Manrope, loaded in `app/layout.tsx` with CSS variable injection |
| **Animation** | Framer Motion (`framer-motion`) | Used for scroll-triggered section reveals via `PageWrapper.tsx` |
| **Images** | `next/image` | Remote patterns configured in `next.config.ts` for `images.unsplash.com` and `lh3.googleusercontent.com` |
| **Deployment** | Vercel (planned) | — |

## 1. Routing & Pages (`/app/`)

* **Purpose:** Contains the top-level page structures and routing. Uses the Next.js App Router convention (`page.tsx` per directory).
* **Rule:** Pages should focus on layout and composition. Heavy UI logic must be offloaded to components.
* **Key Paths:**
  - `app/layout.tsx` — Root layout (fonts, Navbar, PageWrapper, Footer)
  - `app/page.tsx` — Home page
  - `app/about/page.tsx` — About page (founder story, approach, gallery)
  - `app/services/page.tsx` — Services overview (9 divisions editorial grid)
  - `app/services/tanghal/page.tsx` — TANGHAL division detail
  - `app/services/likha/page.tsx` — LIKHA division detail
  - `app/services/merkato/page.tsx` — MERKATO division detail
  - `app/services/tipon/page.tsx` — TIPON division detail
  - `app/services/sibol/page.tsx` — SIBOL division detail
  - `app/services/guhit/page.tsx` — GUHIT division detail
  - `app/services/daloy/page.tsx` — DALOY division detail
  - `app/services/tayo/page.tsx` — TAYO division detail
  - `app/services/ugnay/page.tsx` — UGNAY division detail
  - `app/portfolio/page.tsx` — Portfolio page
  - `app/contact/page.tsx` — Contact page (inquiry form + office details)

> **Note:** Division pages use **static child routes** (`app/services/tayo/page.tsx`), not a dynamic `[division]` segment. Each division page has its own custom deep-dive content.

## 2. UI Components (`/components/`)

* **Purpose:** Reusable, modular frontend elements.
* **Rule:** Components must be strictly presentational and responsive.
* **Sub-directories:**
  - `/components/layout/` — Navbar, Footer, PageWrapper
  - `/components/ui/` — Button, Card, SectionHeading, InputField, Accordion
  - `/components/sections/` — Hero, TrustBar, ProblemSolution, Process, ServicesGrid, PortfolioShowcase, Testimonials, CTABanner, PageHero, DivisionsEditorial, DivisionHero, DivisionCrossLinks, FounderStory, Approach, EditorialGallery, ContactForm, TechHighlight, AboutPreview, DivisionsPreview

## 3. Data & Utilities (`/lib/`)

* **Purpose:** Shared data models and helper functions.
* **Key Paths:**
  - `lib/divisions.ts` — `DivisionData` interface, all 9 division records, `getDivisionBySlug()` helper

## 4. Styling & Design Tokens (`/styles/`)

* **Purpose:** Global styling rules and Emerald Editorial design tokens.
* **Key Paths:**
  - `styles/globals.css` — Tailwind v4 `@theme` token definitions (colors, fonts), `@layer utilities` (typography scale, ambient-shadow, glassmorphism, hero-gradient, gold-gradient-text, marble-texture), `:root` CSS variable fallbacks, navbar animation keyframes

> **Important:** Because the project uses Tailwind CSS v4, there is **no separate `tailwind.config.js`**. All theme extensions are declared with `@theme { ... }` inside `globals.css`.

## 5. Static Assets (`/public/`)

* **Purpose:** Images, fonts, and graphics.
* **Rule:** Do not attempt to read or parse files in this directory. Only reference their relative paths (e.g., `/images/hero-bg.jpg`) in the frontend code.
* **Key Paths:**
  - `/public/images/`
  - `/public/icons/`

## 6. Reference Templates (`/references/`)

* **Purpose:** Static HTML prototypes used as layout and content reference during development.
* **Rule:** These files are read-only design references. Do not modify them — they are the source of truth for layout patterns, copy, and visual structure.
* **Key Paths:**
  - `references/index.html` — Home page reference
  - `references/about.html` — About page reference
  - `references/services.html` — Services overview reference
  - `references/portfolio.html` — Portfolio page reference
  - `references/tayo.html`, `references/daloy.html`, `references/guhit.html`, `references/likha.html`, `references/merkato.html`, `references/sibol.html`, `references/tipon.html`, `references/ugnay.html` — Individual division page references

## 7. Agent Instructions (`/.agent/`)

* **Purpose:** System architecture, skills, and AI team roles.
* **Rule:** Code-generating agents (`@Frontend_Engineer`) must never modify these files.
