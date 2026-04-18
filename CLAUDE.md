# CLAUDE.md — Lakambini Events Redesign

Development guidelines and standards for the Lakambini Events website.

## 🛠 Build & Development

* **Dev Server**: `npm run dev`
* **Build**: `npm run build`
* **Linting**: `npm run lint`
* **Framework**: Next.js (App Router)
* **Styling**: Tailwind CSS v4 (configured via `@tailwindcss/postcss`)

## 🎨 Design System: Emerald Editorial

* **Source of Truth**: `specs.md` and `references/*.html`.
* **Theme**: Dark-mode first. Use custom `@theme` tokens in `styles/globals.css`.
    * `primary`: Emerald Gold (`#e9c255`)
    * `surface`: Deep Emerald Green (`#051710`)
* **The "No-Line" Rule**: Avoid explicit borders. Use tonal shifts (`surface-container-low`, `surface-container-high`) and ambient shadows.
* **Typography**: Noto Serif (Headlines) + Manrope (Body). Use predefined utility classes like `display-lg`, `headline-md`, `body-lg`.

## 📜 Constraints & Anti-Patterns (CRITICAL)

* **NO TAILWIND CONFIG**: Do NOT create `tailwind.config.js` or `tailwind.config.ts`. All variables live in `styles/globals.css`.
* **STATIC DIVISION ROUTES**: Do NOT use dynamic `[division]` routes for services. Use static files in `app/services/{slug}/page.tsx`.
* **ARCHITECTURE SYNC**: Follow `.agent/architecture.md` directory map strictly.
* **PROMPT FIRST**: Always refer to `plan.md` before starting a new feature to ensure alignment with the product roadmap.

## 📝 Code Standards

* **TypeScript**: Strict mode enabled. Always define prop interfaces.
* **Components**: Use functional components with arrow functions or `default function`.
* **Images**: Always use `next/image` with appropriate `sizes` and `priority` for heroes.
* **Links**: Always use `next/link`.
* **Framer Motion**: Use `AnimatePresence` and `motion` components for scroll reveals.
