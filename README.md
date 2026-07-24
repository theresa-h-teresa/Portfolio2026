# Teresa Fang — Portfolio

Built with Vite + React + TypeScript + Tailwind CSS, based on the `Portfolio3` Figma file.

## Getting started

```bash
npm install
npm run dev
```

Open the printed localhost URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Structure

- `src/data/content.ts` — all site copy (bio, experience, projects, social links). Edit this file to update content without touching components.
- `src/data/journalism.ts` — the 9 journalism category tiles and which card component each one opens.
- `src/components/` — one component per section (`Navbar`, `Sidebar`, `About`, `Experience`, `Projects`, `Journalism`), plus small shared pieces (`SkillPill`, `PlaceholderImage`, `BrandIcons`).
- `src/components/journalism/` — the modal system for the Journalism section: `JournalismModalShell` (card chrome, close button, optional left nav), `JournalismBlocks` (heading/paragraph/image/link helpers), and `cards/` (one file per category with real copy, photos, and links pulled from the Figma design).
- `public/journalism/` — real photos exported from Figma for each journalism card.
- `src/index.css` — Tailwind v4 theme tokens (colors + fonts) matching the Figma design.

## Known TODOs

- The "Reporting and Writing" tile currently opens the "Web & Social Media" card as a placeholder — the Figma file doesn't have a dedicated card for that category yet. One-line fix in `src/data/journalism.ts` (`cardKey`) once a real card exists.
- "View Full Journalism Resume" links to `#` — no dedicated journalism-specific resume PDF was provided.
- Headings use `Neue Haas Grotesk Display Pro`. The four weights used in the design (Light/Roman/Medium/Black) are bundled in `public/fonts/` and wired up via `@font-face` in `src/index.css`.
