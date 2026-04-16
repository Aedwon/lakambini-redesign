# Skill: Write Project Specifications
**Target Agent:** `@Product_Manager`

## Objective
Analyze the project requirements and extract design context via Google Stitch MCP to generate a comprehensive `plan.md` and `specs.md`. Ensure the site architecture reflects a high-end, professional agency standard.

## Execution Steps

1. **Initialize Design Context:**
   * Activate the `stitch-mcp` tool to connect to the provided Google Stitch project.
   * Extract the global design tokens (typography scales, hex color palettes, spacing/padding rules, and asset URLs).

2. **Define Site Architecture:**
   * Map out the essential informational pages: Home, About Us, Services, Portfolio, and Contact.
   * Cross-reference `.agent/architecture.md` to ensure the planned directory structure is strictly followed.
   * Outline the mobile-first hierarchy for each page. 

3. **Generate `specs.md`:**
   * Document the exact color codes, font families, and UI patterns extracted from Stitch.
   * Detail the required sections per page (e.g., hero banner, service grid, client logos, contact information).

4. **Generate `plan.md`:**
   * Create a sequenced, step-by-step task list for the `@Frontend_Engineer`.
   * Break down tasks by modular component (e.g., "Build Navigation Bar", "Implement Services Section").

## Strict Constraints
* **NO CODE:** Do not write any HTML, CSS, Next.js, or application code. 
* **Validation:** Do not mark this skill as complete until both `plan.md` and `specs.md` have been successfully generated and saved to the workspace root.
