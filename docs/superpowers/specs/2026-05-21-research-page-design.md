# Research Page — Design Spec

**Date:** 2026-05-21
**Status:** Approved by user

## Overview

Build `HTML/research.html` as a standalone page with its own `CSS/research.css`. Template-only — no real text, no images. All content is placeholder blocks (`[ LABEL ]`, `[ TITLE ]`, `[ DESCRIPTION ]`, etc.). Hybrid layout: featured research spread + tabbed archive below. Dark theme throughout.

## Architecture

Single static HTML file (`HTML/research.html`) with standalone CSS (`CSS/research.css`). No JS. Uses CSS `:target` pseudo-class for tab switching in the archive section.

## Sections

### 1. Navigation

- Same structure as other pages
- "Research" link points to `../HTML/research.html` (self)
- Other nav links remain `#` placeholders
- `$ STATUS: WAITING...` box on right

### 2. Page Header (Dark Masthead)

- Dark background
- Label placeholder: `[ LABEL ]`
- H1 placeholder: `[ PAGE TITLE ]`
- Description placeholder: `[ DESCRIPTION ]`
- Animations: `.animate-in` with staggered delays

### 3. Featured Research Spread

- Two-column grid (2fr / 1fr), dark background
- Left column:
  - Label placeholder: `[ LABEL ]`
  - H2 placeholder: `[ FEATURED TITLE ]`
  - Description placeholder: `[ DESCRIPTION ]`
- Right column:
  - Terminal block with `[ LABEL ]`, 5 `[ LINE ]` placeholders, cursor

### 4. Stats Strip

- Amber background, full-width
- 4 stat items: each has `[ STAT VALUE ]` + `[ STAT LABEL ]`
- Flex layout, spaced evenly

### 5. Tabbed Archive

- CSS-only `:target` tabs (same pattern as Programs page)
- 3 tab placeholders: `[ TAB 1 ]`, `[ TAB 2 ]`, `[ TAB 3 ]`
- Each tab panel contains:
  - Quote placeholder: `[ QUOTE ]`
  - Title placeholder (H2): `[ TITLE ]`
  - Description placeholder: `[ DESCRIPTION ]`
  - Two-column grid:
    - Column 1: `[ LABEL ]` + 3 `[ ITEM ]` placeholders
    - Column 2: `[ LABEL ]` + 3 `[ ITEM ]` placeholders
  - Single column section: `[ LABEL ]` + `[ CONTENT ]`
  - Terminal readout: `[ LABEL ]` + 3 `[ LINE ]` + cursor
- Default: first panel visible
- Active tab highlights amber

### 6. Footer

- Identical structure to other pages

## CSS Architecture

Standalone `CSS/research.css` — does NOT import `style.css`. Contains:

- Full reset (same as other pages)
- Custom properties (same OKLCH palette)
- Typography (Spectral + JetBrains Mono from Google Fonts)
- Nav styles (duplicated)
- Footer styles (duplicated)
- Animation keyframes and classes (duplicated)
- Spread styles (duplicated from style.css)
- Stats strip styles (duplicated)
- **New classes:**
  - `.tab-nav`, `.tab-link`, `.tab-interface`, `.tab-panels`, `.tab-panel` (same pattern as programs.css)
  - `.research-quote`, `.research-title`, `.research-desc`
  - `.research-detail`, `.research-detail-section`
  - `.research-terminal`

## Constraints

- No build step — static HTML/CSS only
- No JavaScript — CSS-only tab switching
- No real text — all placeholders
- No images — template only
- CSS uses browser-native nesting, no preprocessor
- Colors use OKLCH custom properties, not hex
- Typography: Spectral (serif) + JetBrains Mono (monospace)
- Dark theme throughout — no parchment/light sections
