# AGENTS.md

## Project

Startorch Academy — a static HTML/CSS worldbuilding site for a fictional research academy. No build step, no framework, no package manager. Open `HTML/index.html` in a browser to preview.

## File Structure

```
Startorch/
├── HTML/index.html       # Main page (complete)
├── HTML/about-us.html    # About page (template structure, no content)
├── HTML/programs.html    # Programs page (tabbed, CSS-only)
├── HTML/research.html    # Research page (template, tabbed archive)
├── CSS/style.css         # Design system + index.html styles
├── CSS/about-us.css      # Standalone — does NOT import style.css
├── CSS/programs.css      # Standalone — does NOT import style.css
├── CSS/research.css      # Standalone — does NOT import style.css
├── JS/main.js            # Unused (targets non-existent elements)
├── Assets/               # Images
── docs/superpowers/specs/  # Design specs
```

## Critical Design Rules

- **Worldbuilding-first interface.** Deviations from standard academic sites (no hero photo, terminal UI, warm dark tones) are intentional. Do not "normalize" toward generic templates.
- **No AI-slop patterns:** no generic gradients, glassmorphism, stock photography, or cookie-cutter SaaS card rows.
- **Typography:** Spectral (serif, body) + JetBrains Mono (monospace, UI). Loaded from Google Fonts.
- **Colors use OKLCH** in CSS custom properties — not hex. See `CSS/style.css:17-34` for the palette.
- **Layout variety is intentional:** full-width masthead, two-column spreads, stats strip, program entries. Avoid generic 3-card grid patterns.

## CSS Architecture

- **Each page's CSS is standalone.** `about-us.css` does NOT link to or import `style.css`. It contains its own reset, custom properties, and all styles needed.
- **Shared classes are duplicated** across page CSS files (nav, footer, motion, responsive) — this is intentional, not a mistake.
- CSS uses browser-native nesting (`*::-webkit-scrollbar` inside `*` block) — no preprocessor.

## Nav Layout

Nav uses `justify-content: space-between` with centered links:
- Left: logo + "SPACETREK COLLECTIVE" brand
- Center: nav links (absolutely positioned, `left: 50%; transform: translateX(-50%)`)
- Right: `$ STATUS: WAITING...` box

## Programs Page Reference

- **Structure:** CSS-only `:target` tabbed interface. 3 tabs (Synchronists, Light Energy, Exostrider). Each tab reveals a full program detail panel.
- **Content per program:** Quote, description, curriculum, admission requirements, faculty, active research, terminal readout.
- **Theme:** Dark throughout — no parchment/light sections.
- **No JavaScript.** Tab switching via `:target` pseudo-class.
- **Standalone CSS:** `programs.css` does NOT import `style.css`. All styles self-contained.
- **Spec:** `docs/superpowers/specs/2026-05-21-programs-page-design.md`

## Research Page Reference

- **Structure:** Featured research spread + CSS-only `:target` tabbed archive below. 3 tab placeholders per archive panel.
- **Content:** Template-only — all placeholders (`[ LABEL ]`, `[ TITLE ]`, `[ ITEM ]`, etc.). No real text, no images.
- **Theme:** Dark throughout — no parchment/light sections.
- **No JavaScript.** Tab switching via `:target` pseudo-class.
- **Standalone CSS:** `research.css` does NOT import `style.css`. All styles self-contained.
- **Spec:** `docs/superpowers/specs/2026-05-21-research-page-design.md`

## Working Conventions

- Navigation links for Programs, Research, Admissions, Campus are `#` placeholders.
- Images referenced by relative paths: `../Assets/...` from HTML, `../Assets/...` from CSS.
- All lore/content sourced from the Wuthering Waves wiki. Voidmatters department excluded from public-facing pages to maintain homepage consistency.
- Design specs saved to `docs/superpowers/specs/YYYY-MM-DD-<topic>-design.md`.
