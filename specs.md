# 📐 Lakambini Events — Design Specifications

> **Source:** [Google Stitch Project #7832304664184726637](https://stitch.withgoogle.com/projects/7832304664184726637)
> **Design System:** Emerald Editorial · Asset ID `ecfae069385b4318bb4b49a261cd82ea`
> **Generated:** 2026-04-18 · **Updated:** 2026-04-18 · **Role:** @Product_Manager
> **Architecture Reference:** `.agent/architecture.md`
> **Styling:** Tailwind CSS v4 via `@tailwindcss/postcss` — tokens in `styles/globals.css` `@theme { ... }` (no `tailwind.config.js`)

---

## 1. Design System — Emerald Editorial

| Property | Value |
|---|---|
| **Display Name** | Emerald Editorial |
| **Color Mode** | Dark |
| **Headline Font** | Noto Serif |
| **Body Font** | Manrope |
| **Label Font** | Manrope |
| **Corner Roundness** | `0px` (architectural sharp) |
| **Spacing Scale** | Optimized (see §4) |
| **Color Variant** | Fidelity |

### Creative North Star: "The Editorial Studio"

The interface is a refined digital publication — clean, confident, and deliberately paced. We favor intentional asymmetry, generous negative space, and tonal layering to guide the eye. We do not use lines to separate ideas; we use space, tonal shifts, and light. Every element should feel considered, not cluttered.

The palette is built on **Deep Emerald** and **Gold.** A dark-mode-first approach evokes exclusivity, focus, and trust.

---

## 2. Color Palette — Extracted Tokens

### 2.1 Brand Override Colors (Designer Intent)

| Role | Hex | Usage |
|---|---|---|
| **Primary** | `#BF9B31` | Gold — primary brand anchor |
| **Secondary** | `#092E20` | Deep forest green — brand depth |
| **Tertiary** | `#EEEEEE` | Light neutral — contrast text |
| **Neutral** | `#04150F` | Near-black green — deepest backgrounds |

### 2.2 Core Palette (Gold)

| Token | Hex | Usage |
|---|---|---|
| `--color-primary` | `#E9C255` | Gold primary — headlines, CTAs, interactive accents |
| `--color-primary-container` | `#BF9B31` | Muted gold fill for containers, badges |
| `--color-on-primary` | `#3D2E00` | Text on gold backgrounds |
| `--color-on-primary-container` | `#453400` | Text on muted gold containers |
| `--color-primary-fixed` | `#FFDF90` | Fixed gold for persistent elements |
| `--color-primary-fixed-dim` | `#E9C255` | Dimmed fixed gold |
| `--color-on-primary-fixed` | `#241A00` | Text on fixed gold |
| `--color-on-primary-fixed-variant` | `#584400` | Variant text on fixed gold |

### 2.3 Secondary Palette (Emerald)

| Token | Hex | Usage |
|---|---|---|
| `--color-secondary` | `#A9CFBA` | Sage green — secondary text, subtle accents |
| `--color-secondary-container` | `#2B4E3E` | Deep green container |
| `--color-on-secondary` | `#133728` | Text on sage green |
| `--color-on-secondary-container` | `#98BEA9` | Text on deep green containers |
| `--color-secondary-fixed` | `#C4EBD6` | Fixed sage for persistent elements |
| `--color-secondary-fixed-dim` | `#A9CFBA` | Dimmed fixed sage |
| `--color-on-secondary-fixed` | `#002114` | Text on fixed sage |
| `--color-on-secondary-fixed-variant` | `#2B4E3E` | Variant text on fixed sage |

### 2.4 Tertiary Palette (Neutral Grey)

| Token | Hex | Usage |
|---|---|---|
| `--color-tertiary` | `#C6C6C7` | Neutral grey — supporting details |
| `--color-tertiary-container` | `#9E9F9F` | Grey container fill |
| `--color-on-tertiary` | `#2F3131` | Text on neutral grey |
| `--color-on-tertiary-container` | `#343637` | Text on grey containers |
| `--color-tertiary-fixed` | `#E2E2E2` | Fixed grey |
| `--color-tertiary-fixed-dim` | `#C6C6C7` | Dimmed fixed grey |

### 2.5 Surface System (Deep Emerald Layers)

> **Layered Depth:** Treat surfaces as stacked tonal sheets. Depth is achieved exclusively through surface tier shifts — darker recedes, lighter elevates.

| Token | Hex | Usage |
|---|---|---|
| `--surface` | `#051710` | Base page background |
| `--surface-bright` | `#2B3D36` | Elevated bright surfaces |
| `--surface-dim` | `#051710` | Recessed / dimmed areas (same as base) |
| `--surface-container-lowest` | `#02110B` | Deepest recessed slots |
| `--surface-container-low` | `#0D1F18` | Recessed panels, secondary backgrounds |
| `--surface-container` | `#11231C` | Default container fill |
| `--surface-container-high` | `#1C2E27` | Elevated containers, prominent cards |
| `--surface-container-highest` | `#273831` | Floating containers, modals |
| `--surface-variant` | `#273831` | Variant fill (overlays, modals) |
| `--surface-tint` | `#E9C255` | Tint overlay for gold shimmer effects |

### 2.6 On-Surface (Text & Icon Colors)

| Token | Hex | Usage |
|---|---|---|
| `--on-surface` | `#D2E7DD` | Primary body text |
| `--on-surface-variant` | `#D0C5B0` | Secondary text, captions, metadata |
| `--on-background` | `#D2E7DD` | Text on base background |
| `--background` | `#051710` | Page background (alias of surface) |

### 2.7 Outline & Borders

| Token | Hex | Usage |
|---|---|---|
| `--outline` | `#99907D` | Standard outlines (use sparingly) |
| `--outline-variant` | `#4D4636` | Ghost borders — always at 20% opacity |

### 2.8 Inverse Tokens (Light-on-dark flips)

| Token | Hex | Usage |
|---|---|---|
| `--inverse-surface` | `#D2E7DD` | Inverted surface for tooltips, snackbars |
| `--inverse-on-surface` | `#22342D` | Text on inverted surface |
| `--inverse-primary` | `#755B00` | Inverted primary for light contexts |

### 2.9 Feedback Colors

| Token | Hex | Usage |
|---|---|---|
| `--error` | `#FFB4AB` | Error state text/icons |
| `--error-container` | `#93000A` | Error backgrounds |
| `--on-error` | `#690005` | Text on error |
| `--on-error-container` | `#FFDAD6` | Text on error containers |

---

## 3. Typography Scale

### 3.1 Font Families

| Role | Font | Google Fonts Import | Weights |
|---|---|---|---|
| **Headlines / Display** | `Noto Serif` | `family=Noto+Serif:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,700` | 400–800 |
| **Body / Labels / UI** | `Manrope` | `family=Manrope:wght@200;300;400;500;600` | 200–600 |

### 3.2 Type Scale (Material Design 3)

| Token | Size | Line Height | Weight | Font | Usage |
|---|---|---|---|---|---|
| `display-lg` | `3.5625rem` (57px) | `4rem` | 400 | Noto Serif | Hero statements |
| `display-md` | `2.8125rem` (45px) | `3.25rem` | 400 | Noto Serif | Large section titles |
| `display-sm` | `2.25rem` (36px) | `2.75rem` | 400 | Noto Serif | Image overlay headlines |
| `headline-lg` | `2rem` (32px) | `2.5rem` | 400 | Noto Serif | Main section headers |
| `headline-md` | `1.75rem` (28px) | `2.25rem` | 400 | Noto Serif | Sub-section headers |
| `headline-sm` | `1.5rem` (24px) | `2rem` | 400 | Noto Serif | Tertiary headers |
| `title-lg` | `1.375rem` (22px) | `1.75rem` | 500 | Manrope | Card titles, accordion headers |
| `title-md` | `1rem` (16px) | `1.5rem` | 500 | Manrope | Medium titles |
| `title-sm` | `0.875rem` (14px) | `1.25rem` | 500 | Manrope | Technical descriptors |
| `body-lg` | `1rem` (16px) | `1.5rem` | 300–400 | Manrope | Long-form text (Light or Regular) |
| `body-md` | `0.875rem` (14px) | `1.25rem` | 400 | Manrope | Standard body text |
| `body-sm` | `0.75rem` (12px) | `1rem` | 400 | Manrope | Captions, fine print |
| `label-lg` | `0.875rem` (14px) | `1.25rem` | 500 | Manrope | Button labels |
| `label-md` | `0.75rem` (12px) | `1rem` | 500 | Manrope | Metadata, tags |
| `label-sm` | `0.6875rem` (11px) | `1rem` | 500 | Manrope | ALL-CAPS micro-labels, overlines |

### 3.3 Typography Rules

- **Letter-spacing:** `display-lg` uses `-2%` tracking. `label-md` and `label-sm` use `+0.05rem` for readability.
- **Weight discipline:** Body text must never exceed Regular (400). Light (300) is preferred for `body-lg`. Bold is reserved for headlines only.
- **Hierarchy contrast:** Pair `display-lg` Noto Serif headlines with `label-sm` ALL-CAPS Manrope subtitles for editorial contrast.
- **No Bold body:** Using Bold weight on body text breaks the editorial quality. Keep it Light or Regular.
- **Serif for numbers:** Use Noto Serif for all numerical displays (stats, prices, metrics).

---

## 4. Spacing & Layout

### 4.1 Spacing Scale (Optimized)

> **Optimization note:** The reference files showed that the original MD3 scale created sections that were over-padded at the higher tiers. This revised scale tightens the upper range while preserving generous breathing room.

| Token | Value | Usage |
|---|---|---|
| `spacing-0` | `0rem` | — |
| `spacing-0.5` | `0.125rem` | Micro-gaps, icon nudge |
| `spacing-1` | `0.25rem` | Inline spacing |
| `spacing-1.5` | `0.375rem` | Small icon-to-text |
| `spacing-2` | `0.5rem` | Label-to-input gap |
| `spacing-3` | `0.75rem` | Component internal padding |
| `spacing-4` | `1rem` | List-item gap |
| `spacing-5` | `1.25rem` | Card internal padding |
| `spacing-6` | `1.5rem` | Card body padding |
| `spacing-8` | `2rem` | Nav menu item spacing, grid gaps |
| `spacing-10` | `2.5rem` | Asymmetric offsets |
| `spacing-12` | `3rem` | Editorial padding between content blocks |
| `spacing-16` | `4rem` | Section internal padding |
| `spacing-20` | `5rem` | Major section separation |
| `spacing-24` | `6rem` | Hero-level breathing room |
| `spacing-32` | `8rem` | Maximum page-level section gaps |

### 4.2 Layout Rules

- **Container max-width:** `1440px` (reference files use `max-w-screen-2xl` which maps to `1536px`, capped at `1440px` for content).
- **Horizontal page padding:** `spacing-12` (3rem) or `px-12` in Tailwind context. 
- **Grid:** CSS Grid. Bento-style with varied aspect ratios (1:1, 2:1, 1:2). 12-column editorial grid (`.editorial-grid`) used for asymmetric layouts.
- **Mobile-first:** Stacked single-column → multi-column at `768px` → full grid at `1024px`.
- **Asymmetric margins:** Headlines may be offset from body text. Asymmetric padding inside cards (e.g., `padding-top: spacing-10`, `padding-bottom: spacing-12`) creates a weighted editorial feel.

---

## 5. Elevation & Depth Patterns

### 5.1 The "No-Line" Rule
> **CRITICAL:** Do not use `1px solid` borders to define sections or cards. Boundaries are defined exclusively through background color shifts between surface container tiers.
>
> **Section separation:** Use `spacing-20` (5rem) to `spacing-32` (8rem) negative space so the eye naturally perceives transitions.

### 5.2 Tonal Layering (Not Shadows)

Depth is achieved by **stacking surface-container tiers**:
- A `--surface-container-highest` card on a `--surface-dim` background creates natural elevation.
- A `--surface-container-high` section on the base `--surface` feels integrated yet prominent.

### 5.3 Ambient Shadow (Floating Elements Only)
```css
/* Tinted emerald shadow — modals, dropdowns, primary CTA */
box-shadow: 0 20px 50px rgba(4, 21, 15, 0.4);
```
> The shadow color is a tinted version of the deepest green (`#04150F`), **not** black. This keeps the shadow grounded in the palette.

### 5.4 Ghost Border (Accessibility Fallback)
```css
/* Use only when accessibility requires a container edge */
border: 1px solid rgba(77, 70, 54, 0.20); /* --outline-variant @ 20% */
```

### 5.5 Glassmorphism — "Frosted Panel"
```css
/* Navigation, floating overlays, modals */
background: rgba(17, 35, 28, 0.60); /* --surface-container @ 60% */
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
```

### 5.6 The Gold Gradient (CTAs)
```css
/* Primary CTA buttons — the "Liquid Gold" effect */
background: linear-gradient(135deg, #E9C255, #BF9B31);
```
> Use a 135-degree angle. Flat hex codes feel cheap; the gradient gives the CTA a metallic quality.

### 5.7 Gold Gradient Text
```css
/* For hero headlines and special emphasis */
background: linear-gradient(135deg, #E9C255 0%, #BF9B31 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### 5.8 Hero Gradient (Ambient Glow)
```css
/* Subtle radial glow on hero sections */
background: radial-gradient(circle at top right, rgba(233, 194, 85, 0.08), transparent 40%),
            radial-gradient(circle at bottom left, rgba(169, 207, 186, 0.05), transparent 40%);
```

### 5.9 The Marble Texture
For large-scale containers, apply a subtle 3–5% opacity noise texture using an inline SVG filter. This breaks the monotony of flat dark surfaces.

---

## 6. Component Specifications

### 6.1 Buttons

| Variant | Background | Text Color | Border | Corners | Hover Effect |
|---|---|---|---|---|---|
| **Primary** | Gold gradient (`#E9C255` → `#BF9B31` at 135°) | `--on-primary` (#3D2E00) | None | `rounded-full` (pill) | Scale `1.05` + ambient shadow |
| **Secondary** | Transparent | `--color-primary` (#E9C255) | Ghost border (`--outline-variant` @ 20–30%) | `rounded-full` (pill) | Fill shifts to `--surface-container-high` |
| **Tertiary (Text Link)** | Transparent | `--on-surface` (#D2E7DD) | 1px `--color-primary` underline | N/A | Underline expands from center |

> **Note on corners:** The reference files consistently use `rounded-full` (pill-shape) for buttons despite the `0px` architectural rule on cards and containers. Buttons are the exception — they use full rounding for tactile contrast.

### 6.2 Cards & Content Blocks
- **Background:** `--surface-container-high` (#1C2E27) for standard, `--surface-container-highest` (#273831) for prominent.
- **Border:** NONE (No-Line Rule). Exception: `border-l-4 border-primary` for accent cards (see index.html reference).
- **Corner radius:** `0px` (architectural sharp). Exception: `rounded-xl` used on image cards with hover scale for a softer editorial touch.
- **Internal padding:** `spacing-8` (2rem) to `spacing-12` (3rem).
- **Image hover:** `transform: scale(1.05–1.10)` with `transition: 700ms ease-out`.
- **Image overlay:** Gradient `from-surface-dim/90 via-surface-dim/20 to-transparent` for text legibility.
- **No dividers:** Never use `<hr>` to separate content. Use spacing gaps or background shift.

### 6.3 Service Chips / Tags
- **Style:** `px-4 py-1 border border-outline-variant/20 rounded-full text-xs font-label text-primary/80`
- **Usage:** Inline tags below division descriptions listing key services.

### 6.4 Accordions
- **Header:** `title-lg` Manrope weight.
- **Expanded state:** Background shifts to `--surface-container-low` (#0D1F18).
- **Icon:** Thin 1px `+/−` sign in `--color-primary` gold (#E9C255).
- **Border:** NONE.

### 6.5 Input Fields
- **Style:** Single bottom border using `--outline-variant` at 40% opacity.
- **Focus state:** Border transitions to `--color-primary` (#E9C255) with subtle glow.
- **Label:** `label-sm` ALL-CAPS Manrope, positioned above with `spacing-2` gap.
- **No four-sided boxes.**

### 6.6 Navigation Bar — Dynamic Scroll Behavior

> **See §11 for full animation specification.**

- **Typography:** `label-sm` ALL-CAPS Manrope with `+0.05rem` letter-spacing (reference files actually use `font-headline tracking-tight text-lg` for nav items — we standardize on Noto Serif medium weight for nav links).
- **Item spacing:** `gap-10` to `gap-12` (2.5rem–3rem).
- **Logo:** Left-aligned. Gold `--color-primary` Noto Serif bold wordmark `LAKAMBINI`.
- **CTA:** Gold gradient pill button labeled "Inquire".
- **Mobile:** Hamburger menu with slide-in overlay using `--surface-container` (#11231C).
- **Active state:** Gold text + 2px bottom border in `--primary-container`.

### 6.7 Selection Chips (Filter Chips)
- **Unselected:** `border border-transparent text-on-surface-variant`, hover → `text-primary`.
- **Selected:** `border border-outline-variant/40 text-primary bg-surface-container-low`.
- **Corners:** `rounded-full` (pill).

---

## 7. Copywriting Tone Guidelines

### 7.1 Tone: "Simple, Elegant, Authoritative"

The website copy must project confidence through clarity, not grandiosity. We are a premium B2B events agency — our tone is that of a trusted partner, not a royal decree.

### 7.2 Banned Words & Phrases

| ❌ Remove | ✅ Replace With |
|---|---|
| Sovereign | — (remove entirely) |
| Imperial | — |
| Sacred | — |
| Manifest | Deliver, Create, Build |
| Curate (overused) | Design, Plan, Organize |
| Bespoke | Custom, Tailored |
| Atelier | Studio, Team |
| Ecosystem (overused) | Services, Offering, Capabilities |
| Orchestrate | Manage, Coordinate, Execute |
| Masterpiece | — (remove, use plain speech) |
| Legacy (as brand-speak) | Track record, Experience |
| The invisible hand | Our team |
| Sovereign precision | Precision, Reliability |

### 7.3 Updated Core Messaging

**Hero Headline:**
> We turn bold ideas into *exceptional* event experiences.

**Hero Subline:**
> Full-service event production. From planning and execution to custom technology — one team, one standard.

**About The Problem:**
> Managing a dozen separate service providers is a logistical burden. We simplify it. One team. One point of contact. Consistently excellent results.

**About The Company:**
> Lakambini Events is a full-service event production agency founded in 2014. With over 10 years of experience and a team of specialized divisions, we bring together creative, technical, and operational expertise to deliver events that make an impact.

**Founder Statement (Anchie Rosas):**
> "I started Lakambini with a simple belief: the best events happen when the host can be fully present. We handle the complexity so you can focus on what matters — your guests, your message, your moment."

**CTA Messaging:**
> "Start Your Project" / "Book a Discovery Call" / "Get in Touch" — direct, no embellishment.

**Footer Tagline:**
> Full-service event production. Creative. Technical. Reliable.

---

## 8. Page Section Breakdown

Cross-referenced with `.agent/architecture.md` routing map.

### 8.1 Home Page (`/` → `app/page.tsx`)

| # | Section | Component Path | Surface Tier | Key Elements |
|---|---|---|---|---|
| 1 | **Hero Banner** | `components/sections/Hero.tsx` | `surface` + hero-gradient | Full-viewport, `display-hero` responsive headline, `label-sm` overline, dual CTAs (primary + secondary), decorative watermark |
| 2 | **Trust Signal Bar** | `components/sections/TrustBar.tsx` | `surface-container-lowest` | Client logos (grayscale, `opacity-40`), `label-md` text |
| 3 | **Problem / Solution** | `components/sections/ProblemSolution.tsx` | `surface` | Two-column — editorial headline + accent feature cards with `border-l-4 border-primary` |
| 4 | **Process** | `components/sections/Process.tsx` | `surface-container-low` | 4-step grid (Discovery → Concept → Production → Delivery), gold accent lines, connecting arrows |
| 5 | **Services Grid** | `components/sections/ServicesGrid.tsx` | `surface-container-lowest` | Bento grid, image cards with gradient overlay text, links to division pages |
| 6 | **Portfolio Showcase** | `components/sections/PortfolioShowcase.tsx` | `surface` | Featured project (full width) + 2-col secondary grid, overlay labels |
| 7 | **Testimonials** | `components/sections/Testimonials.tsx` | `surface` | 3-column card grid, decorative quotes, client attribution |
| 8 | **CTA Banner** | `components/sections/CTABanner.tsx` | `surface` | Centered `headline-lg`, gold gradient CTA |
| 9 | **Footer** | `components/layout/Footer.tsx` | `surface-container-lowest` | 3-column: brand + nav + newsletter signup |

### 8.2 About Page (`/about/` → `app/about/page.tsx`)

| # | Section | Component Path | Key Elements |
|---|---|---|---|
| 1 | **Page Hero** | `components/sections/PageHero.tsx` | `display-lg` title "The Lakambini Legacy" with "About Us" overline |
| 2 | **Founder Story** | `components/sections/FounderStory.tsx` | Portrait image, editorial text, founder title, asymmetric two-column |
| 3 | **Our Approach** | `components/sections/Approach.tsx` | 3-card grid on `surface-container-high`, icon + headline + body, center card elevated |
| 4 | **Editorial Gallery** | `components/sections/EditorialGallery.tsx` | Asymmetric bento grid (8/4 split), glass-panel stat overlay, metrics display |
| 5 | **CTA Banner** | `components/sections/CTABanner.tsx` | Centered CTA |

### 8.3 Services Page (`/services/` → `app/services/page.tsx`)

| # | Section | Component Path | Key Elements |
|---|---|---|---|
| 1 | **Page Hero** | `components/sections/PageHero.tsx` | "Nine Divisions. One Team." headline with decorative "9" watermark |
| 2 | **Divisions Editorial Grid** | `components/sections/DivisionsEditorial.tsx` | 9 divisions in alternating editorial layouts (see §9) |
| 3 | **CTA Banner** | `components/sections/CTABanner.tsx` | "Book a Discovery Call" CTA |

### 8.4 Portfolio Page (`/portfolio/` → `app/portfolio/page.tsx`)

| # | Section | Component Path | Key Elements |
|---|---|---|---|
| 1 | **Page Hero** | `components/sections/PageHero.tsx` | `display-lg` "Our Portfolio" headline, `body-lg` subtitle |
| 2 | **Portfolio Showcase** | `components/sections/PortfolioShowcase.tsx` | Featured project (full width) + 2-col secondary grid, image cards with overlay labels |
| 3 | **CTA Banner** | `components/sections/CTABanner.tsx` | "Book a Discovery Call" CTA |

### 8.5 Contact Page (`/contact/` → `app/contact/page.tsx`)

| # | Section | Component Path | Key Elements |
|---|---|---|---|
| 1 | **Page Hero** | `components/sections/PageHero.tsx` | "Get in Touch" headline, subtitle |
| 2 | **Contact Form** | `components/sections/ContactForm.tsx` | Name, email, company, event type, message fields; gold-accented bottom-border inputs |
| 3 | **Office Details** | Inline in `page.tsx` | SectionHeading + contact info grid (email, phone, address) |

### 8.6 Division Detail Pages (`/services/{slug}/` → `app/services/{slug}/page.tsx`)

> **Note:** Division pages use **static child routes** (e.g., `app/services/tayo/page.tsx`), not dynamic `[division]` routing. Each page has custom deep-dive content.

| # | Section | Component Path | Key Elements |
|---|---|---|---|
| 1 | **Division Hero** | `components/sections/DivisionHero.tsx` | `display-lg` division name, subtitle, description, capabilities chips, hero image, decorative watermark |
| 2 | **Service Deep Dives** | Custom per page | Bento grids, editorial layouts, feature lists — unique to each division. Content references: `references/{slug}.html` |
| 3 | **Division Cross-Links** | `components/sections/DivisionCrossLinks.tsx` | Horizontal scrollable card track of other divisions |
| 4 | **CTA Banner** | `components/sections/CTABanner.tsx` | Division-specific CTA headline from `lib/divisions.ts` |

---

## 9. Divisions Content Plan — 9 Divisions

### Layout pattern (from services.html + tayo.html references):
- **Divisions 1–2:** Full-width 12-col editorial grid (image 7 cols, text 5 cols), alternating LTR/RTL.
- **Divisions 3–4:** Side-by-side bento pair (staggered vertically), on `surface-container-low`.
- **Divisions 5–6:** Full-width editorial grid (matching Div 1–2 pattern).
- **Divisions 7–9:** Triptych-style cards in a 3-column grid, staggered vertically.

| # | Division | Tagline | Services |
|---|---|---|---|
| 01 | **TANGHAL** | Live Entertainment & Talent | Event Performance · Solo artist concert · Band concert · Music festival · Virtual concert · Talent management |
| 02 | **LIKHA** | Multimedia Production | Event video production · Music video production · Video editing · Motion graphic design · Sound design · Others |
| 03 | **MERKATO** | Experiential Marketing | Product sampling · Experiential marketing · Pop up shops · Street team · Guerilla marketing · Affiliate marketing · In-store demonstrations · Branded swag giveaways |
| 04 | **TIPON** | Events & Activations | Event sponsorship · Trade shows · Exhibits · Fairs · Fun runs · Outreach programs · Interactive installations · Outdoor events · Mall activations · Conventions · Company events · Social events · Virtual events · Broadcasting · Live streaming |
| 05 | **SIBOL** | Learning & Development | Workshops · Trainings · Team building · Conferences · Team development |
| 06 | **GUHIT** | Design & Visual Identity | OOH Ads · Billboard ads · Graphic design · Logo creation · Branding design · Branding guidelines · Color correction · Color grading · Illustration |
| 07 | **UGNAY** | Community & Engagement | Community management · Audience retention campaigns · Grassroots engagement programs · Channel moderation · Digital audience cultivation · Localized community rollouts · Influencer & KOL seeding |
| 08 | **DALOY** | Technology & Development | Web and mobile app development · Custom event applications · Offline-first software solutions · Survey kiosks & interactive terminals · VIP registration systems · Zero-party data capture tools · Automated operational workflows · Real-time analytics dashboards |
| 09 | **TAYO** | Experiential Architecture | Experiential Architecture · Stage Design & Fabrication · Immersive Physical Rooms · Custom Event Booths & Kiosks · Spatial Planning · Large-Scale Installation Art |

### TAYO — Architectural Aesthetic Notes

> Cross-referenced from `references/tayo.html`. TAYO has the most visually distinct layout of all divisions and should carry a sense of physical weight.

- **Hero:** Division name in `display-lg` Noto Serif with tagline as a `text-4xl–5xl font-light` secondary line (not a label — treated as a display subtitle).
- **Service sub-sections:** Each of TAYO's services can expand into its own editorial block (stage design, immersive rooms, booths, spatial planning) — using bento grids (`grid-cols-12`, `h-[800px]`), marble texture overlays, and grayscale-to-color image reveals.
- **Unique patterns:** Offset border accents (`border border-primary/20 -m-4`), ghost-bordered text panels on `surface-container`, staggered image grids with `aspect-[3/4]` portrait pairs.
- **Surface:** Heavy use of `surface-container-low` with `marble-overlay` texture at 5% opacity.

### Division Card Copy Guidelines

Each division entry should include:
1. **Number** (`01`–`09`) in `font-headline text-primary/40 text-5xl–6xl font-bold`
2. **Division name** in `font-headline text-4xl–5xl font-bold text-primary`
3. **Tagline** in `font-label text-on-surface-variant text-xs–sm tracking-widest uppercase`
4. **Description** — 1–2 sentences, `font-body text-lg text-on-surface/80 leading-relaxed`. Tone: direct, confident, no flowery language.
5. **Service chips** — each service rendered as a pill tag: `px-4 py-1 border border-outline-variant/20 rounded-full text-xs font-label text-primary/80`

---

## 10. Animation & Motion Patterns

| Pattern | Property | Duration | Easing |
|---|---|---|---|
| Card image hover | `transform: scale(1.05–1.10)` | `700ms` | `ease-out` |
| Button hover | `transform: scale(1.05)` + ambient shadow | `300ms` | `ease-out` |
| Underline expand | `width: 0 → 100%` (from center) | `400ms` | `cubic-bezier(0.25, 0, 0, 1)` |
| Section reveal | `opacity: 0 → 1`, `translateY: 20px → 0` | `800ms` | `ease-out` |
| Page transitions | Fade + slide | `500ms` | `ease-in-out` |
| Accordion expand | `max-height` + bg-color shift | `400ms` | `ease-out` |
| Image grayscale reveal | `grayscale(1) → grayscale(0)` on hover | `500ms–1000ms` | `ease-out` |
| Card translate hover | `translateY(0) → translateY(-1rem)` | `500ms` | `ease-out` |
| Nav link scale | `scale(0.95) → scale(1.05)` on hover | `300ms` | `ease-in-out` |

> **Motion Philosophy:** Transitions should be smooth and deliberate — never snappy or playful. Ease-out curves dominate.

---

## 11. Dynamic Navbar — Scroll-Aware Animation Spec

### 11.1 Behavior Overview

The Navbar has **two visual states** driven by scroll position:

| State | Trigger | Appearance |
|---|---|---|
| **Resting** (top of page) | `scrollY === 0` | Transparent background, full-width, flush with page top |
| **Floating** (scrolled) | `scrollY > 0` (use ~50px threshold) | Detached floating pill, frosted glass background, horizontal margin |

### 11.2 Resting State (Top of Page)

```
Position: fixed, top: 0, width: 100%
Background: transparent (bg-transparent)
Backdrop filter: none
Border radius: 0px
Margin: 0
Padding: px-12 py-6
Z-index: 50
```

- Logo, nav links, and page are visible.
- **The "Inquire" CTA button is HIDDEN** (`opacity: 0`, `scale: 0.9`, `pointer-events: none`).

### 11.3 Floating State (After Scroll)

```
Position: fixed, top: spacing-3 (0.75rem)
Width: calc(100% - 2 * spacing-6) → roughly max-w-screen-2xl with horizontal auto margin
Background: rgba(17, 35, 28, 0.60)  /* glass-panel */
Backdrop filter: blur(20px)
Border radius: rounded-full (9999px) → pill shape
Margin: 0 auto
Padding: px-8 py-3 (tighter than resting)
Z-index: 50
Box shadow: 0 20px 50px rgba(4, 21, 15, 0.4)  /* ambient shadow */
```

- The navbar **shrinks vertically** (reduced padding).
- The background **fades in** from transparent to glass.
- The **corners animate** from `0px` to `9999px` (pill).
- The **"Inquire" CTA button slides/fades into view** (`opacity: 0 → 1`, `translateX: 20px → 0` or `scale: 0.9 → 1.0`, `pointer-events: auto`).

### 11.4 Transition Properties

```css
.navbar {
  transition: 
    background-color 400ms ease-out,
    border-radius 400ms ease-out,
    padding 300ms ease-out,
    top 300ms ease-out,
    box-shadow 400ms ease-out,
    width 400ms ease-out;
}

.navbar-cta {
  transition: 
    opacity 400ms ease-out 100ms,  /* 100ms delay after scroll begins */
    transform 400ms ease-out 100ms;
}
```

### 11.5 Implementation Notes

- Use a `scroll` event listener (or `IntersectionObserver` on a sentinel element at `top: 50px`) to toggle a class like `.navbar--floating`.
- The CTA button should have a CSS class toggle: `.navbar-cta--visible` applied when scrolled.
- On mobile, the CTA may remain hidden and only available inside the slide-in hamburger menu.
- The scroll threshold should be small (`~50px`) so the transition feels immediate but not jittery.

---

## 12. Screen Inventory (Stitch Reference)

### Home Page Variants
| Screen Title | Screen ID | Dimensions |
|---|---|---|
| Lakambini Events Agency - Home | `f2842a6182ff4d75967501560b0b6557` | 2560×11588 |
| LAKAMBINI: Home Redefined | `c39ef007755445b9951a63b555e3ce50` | 2560×10784 |
| Home: Redefined Excellence | `04a2cdde77434783b6d1c4899330eeb4` | 2560×8574 |
| Home: Emerald Editorial | `297e9e91e6414a74a3c72f275ee3fae3` | 2560×9430 |
| Home: Updated Core Services | `a83e75a50d624120963a4dae918047b5` | 2560×10354 |
| Home: Refined Spacing & Layout | `93b6076daa354d32801ffddbb1f456d9` | 2560×8960 |

### Services / Divisions Screens
| Screen Title | Screen ID | Dimensions |
|---|---|---|
| Our Core Divisions | `94618c93697f4a23b3ed9b0f0a157d43` | 2560×10750 |
| Our Core Divisions: Updated Portfolio | `ebb30cb890e149b69c39c723a3541814` | 2560×9618 |

### Division Detail Pages
| Screen Title | Screen ID |
|---|---|
| TANGHAL Division Detail | `829ddf80f6b44f45a24ebab3a7f4cafe` |
| MERKATO Division Detail | `5a1b99abc3314f1d91ccf5a6d0b893fd` |
| TAYO Division Detail | `4af08bf674604247b521e29d5f682c82` |
| UGNAY Division Detail | `f3ba16fb786440c1b98b9d37f3d9c5f2` |
| TIPON Division Detail | `d88b74d2121346e5a5ef5c6cbc752dc8` |
| DALOY Division Detail | `233a89ae9f234efead286f69a6b75cf6` |
| GUHIT Division Detail | `e85bd8b696f54355ba1b41e333e41bc7` |
| SIBOL Division Detail | `dbb619a4d78e443ab9eb4e5a86ed9f01` |
| LIKHA Division Detail | `5c99afc3b80c486f8eb662d56a91cd50` |

### About / Legacy Screens
| Screen Title | Screen ID |
|---|---|
| The Lakambini Legacy | `1d1b9c061d2b4d26bfc7d72ba06c02e2` |
| The Lakambini Legacy: Updated | `d94172967dc94b55ba6159a83a39afa2` |

### Case Study / Portfolio Screens
| Screen Title | Screen ID |
|---|---|
| Case Study: Moonton x DepEd | `4d6e0310a0724c42a8a589cdd4b3f392` |
| Portfolio Archive | `d5db05e0390e4c4db00b486e531ff3e7` |

---

## 13. Do's and Don'ts

### ✅ Do
- **Do** use `Noto Serif` for headlines and `Manrope` for everything else.
- **Do** lean into asymmetric layouts. If an image is on the left, offset text with generous left padding on the right column.
- **Do** use gold (#E9C255) sparingly — it is an accent, not a fill color.
- **Do** use whitespace as a functional element. If a section feels crowded, increase to the next spacing tier.
- **Do** use Noto Serif for all numbers in stat displays.
- **Do** ensure transitions are smooth and deliberate.
- **Do** write copy that is clear, direct, and confident.
- **Do** use `rounded-full` on buttons and chips.

### ❌ Don't
- **Don't** use pure black (#000000). Use `--surface-container-lowest` (#02110B).
- **Don't** use standard 1px borders or `<hr>` dividers except for ghost borders at ≤20% opacity.
- **Don't** use Bold weight on body text.
- **Don't** use standard blue for links. All interactive triggers use gold or `--on-surface`.
- **Don't** use rounded corners on cards and containers (`border-radius: 0px`). Buttons are the exception.
- **Don't** use heavy drop shadows. Use tinted emerald ambient shadows at low opacity only.
- **Don't** use words like "Sovereign," "Imperial," "Sacred," "Manifest," or similar pretentious language in any copy.
- **Don't** over-use "Bespoke," "Curate," "Orchestrate," or "Ecosystem." Use plain, professional language.
