# Skill: Generate User Interface
**Target Agent:** `@Frontend_Engineer`

## Objective
Execute the component and page builds outlined in `plan.md`. Translate the design specs into production-ready frontend code using the Emerald Editorial design system. Ensure all outputs are strictly mobile-responsive and saved in the correct directories.

## Execution Steps

1. **Context Ingestion:**
   * Read the active task from `plan.md`.
   * Review `specs.md` for specific typography, hex codes, and spacing constraints.
   * Read `.agent/architecture.md` to determine the exact folder path to save the new component or page.
   * Review `lib/divisions.ts` for division data when building services-related components.
   * Cross-reference `references/*.html` for layout patterns and content structure.

2. **Component Construction:**
   * Write clean, semantic TypeScript + JSX using the Next.js App Router (`app/` directory).
   * Apply the Emerald Editorial token system via Tailwind v4 utility classes (e.g., `bg-surface`, `text-primary`, `headline-lg`). Tokens are defined in `styles/globals.css` under `@theme` — there is **no `tailwind.config.js`**.
   * Use `next/image` for all images with appropriate `sizes`, `alt`, and remote patterns.
   * Use `next/font/google` for font loading (Noto Serif + Manrope) — already configured in `app/layout.tsx`.
   * Apply mobile-first styling principles. 
   * Save the file to the precise directory specified by the architecture map.

3. **Human-in-the-Loop Verification:**
   * Do NOT open the internal browser or capture screenshots.
   * Notify the user that the component has been built.
   * Ask the user to manually review the component on their local development server (e.g., `localhost:3000`).
   * Wait for the user's explicit approval or revision requests.

4. **Iteration & Handoff:**
   * If the user requests changes, implement them immediately and ask for a re-check.
   * Once the user approves the visual alignment, mark the task as complete in `plan.md` and prepare the next component.

## Strict Constraints
* **No Speculation:** Do not invent color palettes or layouts. Every visual decision must trace back to the `specs.md`, `references/*.html`, or the Google Stitch source.
* **No Autonomous Visual QA:** Do not use internal browser tools or vision capabilities to check your own work. Rely entirely on user feedback for visual validation.
* **Tailwind v4:** All theme tokens live in `styles/globals.css` under `@theme { ... }`. Do NOT create a `tailwind.config.js` or `tailwind.config.ts` file.
