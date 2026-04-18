# 🗺️ Lakambini Events — Implementation Plan

> **Source:** `specs.md` · **Design System:** Emerald Editorial (Dark Mode)
> **Role:** @Product_Manager → @Frontend_Engineer
> **Architecture Reference:** `.agent/architecture.md`
> **Generated:** 2026-04-18 · **Updated:** 2026-04-18
> **Pages:** Home · Services · About · Portfolio · Contact (5 core pages + 9 division sub-pages)

---

## Phase 0: Foundation & Design System Setup ✅ COMPLETE

> Goal: Establish the Emerald Editorial token infrastructure as the single source of truth.

### Task 0.1 — Configure Global Fonts ✅
- **File:** `app/layout.tsx`
- Imported Google Fonts: `Noto Serif` (400, 500, 600, 700) + `Manrope` (300, 400, 500, 600) via `next/font/google`.
- Set CSS variables: `--font-noto-serif` and `--font-manrope`.
- Set `<body>` default to `font-sans bg-surface text-on-surface antialiased`.

### Task 0.2 — Build Design Token System ✅
- **File:** `styles/globals.css`
- Defined **all** Emerald Editorial tokens under Tailwind v4 `@theme { ... }` directive (colors, font families).
- Implemented the full MD3 typography scale as `@layer utilities` classes (`display-hero`, `display-lg`, `headline-lg`, `body-lg`, `label-sm`, etc.).
- Added ambient shadow, ghost border, glassmorphism, gold-gradient-text, hero-gradient, marble-texture, and navbar animation utility classes.
- Duplicated tokens in `:root` for CSS variable fallback access.

### Task 0.3 — Tailwind v4 Configuration ✅
- **No `tailwind.config.js` needed.** Using Tailwind v4 with `@tailwindcss/postcss` plugin.
- Theme tokens are defined via `@theme` in `globals.css`.
- PostCSS configured in `postcss.config.mjs`.

---

## Phase 1: Layout Shell & Dynamic Navbar ✅ COMPLETE

> Goal: Build the persistent layout components that wrap every page.

### Task 1.1 — Build Dynamic Navbar ✅
- **File:** `components/layout/Navbar.tsx`
- Scroll-aware navbar with transparent resting state and frosted glass floating pill state.
- "Inquire" CTA button hidden at top, slides into view on scroll.
- Mobile hamburger menu with slide-in overlay.
- Gold shimmer entrance animation on page load.
- Desktop + mobile responsive behavior implemented.

### Task 1.2 — Build Footer ✅
- **File:** `components/layout/Footer.tsx`
- Background: `surface-container-lowest`.
- 3-column grid: brand wordmark + tagline, navigation links (Agency + Legal columns), newsletter signup.
- Bottom bar with copyright.

### Task 1.3 — Build Page Wrapper ✅
- **File:** `components/layout/PageWrapper.tsx`
- Scroll-to-top on route change via `usePathname()`.
- Section-reveal scroll animations via Framer Motion (`AnimatePresence`).

---

## Phase 2: Shared UI Components ✅ COMPLETE

> Goal: Build atomic components per `specs.md` §6.

### Task 2.1 — Button Component ✅
- **File:** `components/ui/Button.tsx`
- Variants: `primary` (gold gradient pill), `secondary` (ghost border pill), `tertiary` (text link with underline).
- Props: `variant`, `href?`, `children`, `className?`.
- Renders as `<Link>` when `href` is provided, otherwise `<button>`.

### Task 2.2 — SectionHeading Component ✅
- **File:** `components/ui/SectionHeading.tsx`
- Props: `overline`, `title`, `description?`, `className?`.

### Task 2.3 — Card Component ✅
- **File:** `components/ui/Card.tsx`
- Background: `surface-container-high`, architectural sharp corners.
- Props: `children`, `className?`.

### Task 2.4 — InputField Component ✅
- **File:** `components/ui/InputField.tsx`
- Bottom-border-only input with gold focus state.
- Props: `label`, `type?`, `name`, `required?`, `placeholder?`.

### Task 2.5 — Accordion Component ✅
- **File:** `components/ui/Accordion.tsx`
- Expandable sections with `+/−` toggle icon.
- Background shifts on expand.

### ~~Task 2.6 — ServiceChip Component~~ ⏭️ SKIPPED
- Service chips are implemented inline (e.g., in `DivisionHero.tsx`, `DivisionsEditorial.tsx`) rather than as a shared component.

### ~~Task 2.7 — FilterChip Component~~ ⏭️ SKIPPED
- Portfolio page uses `PortfolioShowcase` component without a separate filter bar. May revisit.

---

## Phase 3: Section Components ✅ COMPLETE

> Goal: Build all page sections. Home page sections first — reuse across other pages.

### Task 3.1 — Hero Banner Section (Home) ✅
- **File:** `components/sections/Hero.tsx`
- Full-viewport with hero-gradient + marble-texture overlay.
- `display-hero` headline (responsive clamp), dual CTAs, decorative watermark text.

### Task 3.2 — Trust Signal Bar ✅
- **File:** `components/sections/TrustBar.tsx`
- Background: `surface-container-lowest`. Client logo text placeholders with grayscale opacity.

### Task 3.3 — Problem / Solution Section (Home) ✅
- **File:** `components/sections/ProblemSolution.tsx`
- Two-column layout with editorial headline and bordered accent feature cards (`border-l-4 border-primary`).

### Task 3.4 — Process Section (Home) ✅
- **File:** `components/sections/Process.tsx`
- 4-step grid showing Discovery → Concept → Production → Delivery.
- Gold accent lines, connecting arrows on desktop.

### Task 3.5 — Services Grid Section (Home) ✅
- **File:** `components/sections/ServicesGrid.tsx`
- Bento grid with atmospheric images, gradient overlays, hover scale animations.
- Links to individual division pages.

### Task 3.6 — Portfolio Showcase Section (Home + Portfolio) ✅
- **File:** `components/sections/PortfolioShowcase.tsx`
- Featured project (full width) + secondary projects (2-col grid).
- Image cards with overlay labels, hover scale.

### Task 3.7 — Testimonials Section (Home) ✅
- **File:** `components/sections/Testimonials.tsx`
- 3-column card grid with decorative quote marks, attribution with gold accents.

### Task 3.8 — Technology Highlight Section (Home) ✅
- **File:** `components/sections/TechHighlight.tsx`
- Two-column split panel. Feature list with icon circles.

### Task 3.9 — CTA Banner Section (Reusable) ✅
- **File:** `components/sections/CTABanner.tsx`
- Props: `headline`, `subtitle?`, `ctaLabel`, `ctaHref`.
- Centered layout with gold gradient CTA button.

### Task 3.10 — Page Hero (Reusable) ✅
- **File:** `components/sections/PageHero.tsx`
- Props: `overline`, `title`, `subtitle`, `decorativeText?`.
- Hero-gradient background with marble-texture overlay and watermark text.

---

## Phase 4: Page-Specific Sections ✅ COMPLETE

> Goal: Build sections unique to About, Services, and individual Division pages.

### Task 4.1 — Founder Story Section (About) ✅
- **File:** `components/sections/FounderStory.tsx`
- 12-col editorial grid: portrait + text content.

### Task 4.2 — Approach Cards Section (About) ✅
- **File:** `components/sections/Approach.tsx`
- 3-card grid with hover translateY lift, center card elevated emphasis.

### Task 4.3 — Editorial Gallery Section (About) ✅
- **File:** `components/sections/EditorialGallery.tsx`
- Asymmetric bento grid with glass-panel stat overlay.

### Task 4.4 — Divisions Editorial Grid (Services) ✅
- **File:** `components/sections/DivisionsEditorial.tsx`
- Renders all 9 divisions with alternating editorial layouts per `specs.md` §9.
- Full-width editorial grids (Divs 1-2), bento pairs (Divs 3-4), editorial grids (Divs 5-6), triptych cards (Divs 7-9).
- Each division card includes number, name, subtitle, description, service chips, and link to individual page.

### Task 4.5 — Division Hero (Individual Division Pages) ✅
- **File:** `components/sections/DivisionHero.tsx`
- Props: `division: DivisionData`.
- Display-lg division name, subtitle, description, capability chips, hero image.
- Decorative watermark text background.

### Task 4.6 — Division Cross-Links (Individual Division Pages) ✅
- **File:** `components/sections/DivisionCrossLinks.tsx`
- Horizontal scrollable card track showing other divisions.
- Props: `currentSlug`.

### Task 4.7 — Contact Form ✅
- **File:** `components/sections/ContactForm.tsx`
- Form fields for name, email, company, event type, message.
- Gold-accented input fields with bottom-border styling.

### Task 4.8 — About Preview (Home) ✅
- **File:** `components/sections/AboutPreview.tsx`
- 12-col editorial grid preview linking to the About page.
- *Note: Not currently used in the Home page composition, but built and available.*

### Task 4.9 — Divisions Preview ✅
- **File:** `components/sections/DivisionsPreview.tsx`
- 3×3 grid of division cards with icons and tags.
- *Note: Not currently used in any page composition, but built and available.*

---

## Phase 5: Page Assembly ✅ COMPLETE

> Goal: Compose section components into complete pages per `architecture.md` routing.

### Task 5.1 — Home Page ✅
- **File:** `app/page.tsx`
- **Composed:** Hero → TrustBar → ProblemSolution → Process → ServicesGrid → PortfolioShowcase → Testimonials → CTABanner.
- Custom CTA copy: "Have an event in mind? Let's talk." / "Book a Discovery Call".

### Task 5.2 — Services Page ✅
- **File:** `app/services/page.tsx`
- **Composed:** PageHero ("Nine Divisions. One Team.") → DivisionsEditorial → CTABanner.

### Task 5.3 — About Page ✅
- **File:** `app/about/page.tsx`
- **Composed:** PageHero ("The Lakambini Legacy") → FounderStory → Approach → EditorialGallery → CTABanner.

### Task 5.4 — Portfolio Page ✅
- **File:** `app/portfolio/page.tsx`
- **Composed:** PageHero ("Our Portfolio") → PortfolioShowcase → CTABanner.

### Task 5.5 — Contact Page ✅
- **File:** `app/contact/page.tsx`
- **Composed:** PageHero ("Get in Touch") → ContactForm → Office Details section (inline).

### Task 5.6 — Individual Division Pages (All 9) ✅
- **Files:** `app/services/{tanghal,likha,merkato,tipon,sibol,guhit,ugnay,daloy,tayo}/page.tsx`
- Each page uses static routing (not dynamic `[division]`).
- Each page follows: DivisionHero → Custom Deep-Dive Sections → DivisionCrossLinks → CTABanner.
- Deep-dive sections are unique per division (bento grids, editorial layouts, feature lists, etc.).
- Content references: `references/{division}.html` templates.

---

## Phase 6: Polish & Interactivity

> Goal: Refine to the Editorial standard.

### Task 6.1 — Scroll Reveal Animations ✅
- Implemented via `PageWrapper.tsx` using Framer Motion.
- Each section fades in + translates up on viewport intersection.

### Task 6.2 — Responsive Breakpoints 🔲 NEEDS POLISH
- Mobile-first approach implemented across all components.
- Hamburger nav on mobile, stacked grids, responsive typography.
- **TODO:** Thorough testing at 320px, 375px, 768px, 1024px, 1440px viewports.

### Task 6.3 — SEO & Metadata 🔲 PARTIAL
- **Done:** Root `metadata` in `app/layout.tsx` + viewport `themeColor: #051710`.
- **TODO:** Per-page `metadata` exports (title, description, Open Graph) for Services, About, Portfolio, Contact, and Division pages.
- **TODO:** Verify single `<h1>` per page, proper heading hierarchy.

### Task 6.5 — Portfolio Page Polish ✅
- **Fix:** Added `hideViewAll?: boolean` prop to `PortfolioShowcase` — prevents self-referencing "View Full Portfolio" button loop when rendered on `/portfolio`. Home page usage unchanged.
- **Fix:** Added `decorativeText="Archive"` to Portfolio `PageHero` — now visually consistent with About and Services heroes.

### Task 6.4 — Performance Optimization 🔲 TODO
- `next/image` used throughout with `sizes` props.
- Font loading: `display: swap` on both fonts.
- **TODO:** Priority loading on hero images.
- **TODO:** Lazy load below-fold sections.
- **TODO:** Audit gold gradient rendering performance.

---

## Phase 7: QA & Verification

> **Owner:** @QA_Auditor

### Task 7.1 — Visual Fidelity Audit 🔲 TODO
- Screenshot each page, compare with reference HTML files and Stitch screens.
- Verify: Surface tiers render correct emerald green shades.
- Verify: Gold accents limited to CTAs, headlines, and accent elements.
- Verify: Navbar correctly transitions between resting and floating states.

### Task 7.2 — Mobile Responsiveness Test 🔲 TODO
- Test all pages at 320px, 375px, 414px.
- Hamburger menu opens correctly.
- No horizontal overflow. No broken bento grids.
- Editorial grids stack to single column on mobile.

### Task 7.3 — Interaction Audit 🔲 TODO
- All hover states per `specs.md` §10.
- Navbar scroll transitions smooth (no flicker, no layout shift).
- Image grayscale-to-color hover on division cards.

### Task 7.4 — Copy Audit 🔲 TODO
- Verify no instances of banned words: "Sovereign," "Imperial," "Sacred," "Manifest."
- All copy follows "Simple, Elegant, Authoritative" tone per `specs.md` §7.
- No placeholder text ("Lorem ipsum") in any shipped section.

### Task 7.5 — Accessibility Check 🔲 TODO
- Contrast ratios: `--on-surface` on `--surface` passes WCAG AA.
- Keyboard navigation for all interactive elements.
- Image alt texts, ARIA labels, focus rings.
- Navbar keyboard-accessible in both states.

---

## Execution Status Summary

```
Phase 0 ─── Foundation (Emerald Editorial tokens, fonts)          ✅ COMPLETE
   │
Phase 1 ─── Layout Shell + Dynamic Navbar (glass-pill scroll,     ✅ COMPLETE
   │         "Inquire" CTA reveal, footer)
   │
Phase 2 ─── UI Components (buttons, cards, inputs, accordion)     ✅ COMPLETE
   │
Phase 3 ─── Shared Section Components (Hero, TrustBar, CTA,       ✅ COMPLETE
   │         Process, ServicesGrid, PortfolioShowcase, Testimonials)
   │
Phase 4 ─── Page-Specific Sections (Divisions Editorial,          ✅ COMPLETE
   │         DivisionHero, FounderStory, Approach, ContactForm)
   │
Phase 5 ─── Page Assembly (Home, Services, About, Portfolio,      ✅ COMPLETE
   │         Contact, all 9 Division sub-pages)
   │
Phase 6 ─── Polish (scroll animations ✅, responsive 🔲,          🔲 IN PROGRESS
   │         SEO 🔲, performance 🔲)
   │
Phase 7 ─── QA (visual fidelity, mobile, interactions,            🔲 TODO
             copy audit, accessibility)
```

---

## Key Reference Files

| File | Purpose |
|---|---|
| `specs.md` | Emerald Editorial design tokens, colors, typography, component specs, navbar animation, copy guidelines |
| `.agent/architecture.md` | Strict directory structure, tech stack, and routing map |
| `.agent/agents.md` | AI team roles and permissions |
| `styles/globals.css` | Tailwind v4 `@theme` tokens, CSS custom properties, typography utilities |
| `lib/divisions.ts` | Division data model and helper functions |
| `references/` | HTML reference files — source of truth for layout patterns and UI structure |
| [Stitch Project](https://stitch.withgoogle.com/projects/7832304664184726637) | Visual source of truth |
| Stitch Design System Asset | `assets/ecfae069385b4318bb4b49a261cd82ea` |
