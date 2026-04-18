# Skill: Write Project Specifications
**Target Agent:** `@Product_Manager`

## Objective
Analyze the project requirements, extract design context via Google Stitch MCP, and maintain the comprehensive `plan.md` and `specs.md` documents. Ensure the site architecture reflects a high-end, professional agency standard.

## Execution Steps

1. **Initialize Design Context:**
   * Activate the `stitch-mcp` tool to connect to the provided Google Stitch project (ID: `7832304664184726637`).
   * Extract the global design tokens (typography scales, hex color palettes, spacing/padding rules, and asset URLs).
   * Cross-reference `references/*.html` for layout patterns, copy tone, and content structure.

2. **Define Site Architecture:**
   * Map out the essential informational pages: Home, About, Services, Portfolio, Contact, and all 9 individual Division pages.
   * Cross-reference `.agent/architecture.md` to ensure the planned directory structure is strictly followed.
   * Note that division pages use **static child routes** (`app/services/tayo/page.tsx`), not dynamic `[division]` routing.
   * Outline the mobile-first hierarchy for each page. 

3. **Generate `specs.md`:**
   * Document the exact color codes, font families, and UI patterns extracted from Stitch.
   * Detail the required sections per page (e.g., hero banner, service grid, client logos, contact information).
   * Include copywriting tone guidelines, banned words, and approved messaging.

4. **Generate `plan.md`:**
   * Create a sequenced, step-by-step task list for the `@Frontend_Engineer`.
   * Break down tasks by modular component (e.g., "Build Navigation Bar", "Implement Services Section").
   * Track completion status with checkboxes where applicable.

## Strict Constraints
* **NO CODE:** Do not write any HTML, CSS, TypeScript, or application code. 
* **Validation:** Do not mark this skill as complete until both `plan.md` and `specs.md` have been successfully generated and saved to the workspace root.
