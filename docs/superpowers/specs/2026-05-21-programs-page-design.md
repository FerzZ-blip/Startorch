# Programs Page — Design Spec

**Date:** 2026-05-21
**Status:** Approved by user

## Overview

Build `HTML/programs.html` as a standalone page with its own `CSS/programs.css`. CSS-only tabbed interface presenting each of the 3 programs with comprehensive detail: quote, description, curriculum, admission requirements, faculty, and active research projects. Dark theme throughout.

## Architecture

Single static HTML file (`HTML/programs.html`) with standalone CSS (`CSS/programs.css`). No JS. Uses CSS `:target` pseudo-class for tab switching — no JavaScript required.

## Sections

### 1. Navigation

- Same structure as index.html and about-us.html
- "Programs" link points to `../HTML/programs.html` (self)
- Other nav links remain `#` placeholders
- `$ STATUS: WAITING...` box on right

### 2. Page Header (Dark Masthead)

- `.section-dark` background
- Label: `PROGRAMS` (monospace, amber)
- H1: `Academic Programs` (large serif, parchment color)
- Body paragraph: brief tagline — "Three disciplines. One mission. Choose your path."
- Animations: `.animate-in` with staggered delays

### 3. Tab Navigation (CSS-only `:target`)

- Horizontal tab bar below header
- 3 tabs: `SYNCHRONISTS`, `LIGHT ENERGY`, `EXOSTRIDER`
- Active tab: amber background, dark text
- Inactive tabs: muted text color
- Uses `:target` pseudo-class — clicking a tab changes URL hash, CSS reveals corresponding panel
- Default state: Synchronists panel visible (via `#synchronists` hash or first-panel default)

### 4. Program Detail Panels

Each panel contains:

- **Quote** — italic serif, muted color (e.g., *"For The Future"*)
- **Program name** — h2, serif, parchment color
- **Description** — body text, narrow max-width
- **Two-column grid** below:
  - **Curriculum** — list of courses/modules
  - **Requirements** — admission criteria
- **Faculty** — key faculty members with titles
- **Active Research** — current research projects
- **Terminal readout** — program-specific stats (enrollment, sync rate, next intake, etc.)

#### Panel A: Synchronists Development

- Quote: *"For The Future"*
- Curriculum: Resonance Theory, Synchronization Practice, Frequency Mapping, Field Applications
- Requirements: Resonator classification, baseline sync threshold, written assessment
- Faculty: Dr. Luuk Herssen — Director of Resonance Studies
- Active Research: Resonator-Mech Synchronization Protocol v4.2
- Terminal readout: enrollment, sync rate, next intake cycle

#### Panel B: Light Energy Sciences

- Quote: *"For Sciences"*
- Curriculum: Reactor Drive Physics, Energy Conversion, Industrial Applications, Biological Cycling
- Requirements: Physics foundation, energy systems aptitude, practical examination
- Faculty: TBD (see Content Gaps)
- Active Research: Telesto Lens optimization, Reactor Drive efficiency
- Terminal readout: energy output, conversion rate, active projects

#### Panel C: Exostrider Engineering

- Quote: *"For Humanity"*
- Curriculum: Mech Systems Engineering, Tactical Development, Resonator-Mech Interface, Structural Analysis
- Requirements: Engineering background, physical fitness assessment, tactical aptitude
- Faculty: TBD (see Content Gaps)
- Active Research: Exostrider chassis optimization, tactical deployment protocols
- Terminal readout: mech status, research hours, engineering teams

### 5. Footer

- Identical structure to index.html and about-us.html footers

## CSS Architecture

Standalone `CSS/programs.css` — does NOT import `style.css`. Contains:

- Full reset (same as style.css)
- Custom properties (same OKLCH palette)
- Typography (Spectral + JetBrains Mono from Google Fonts)
- Nav styles (duplicated from style.css)
- Footer styles (duplicated from style.css)
- Animation keyframes and classes (duplicated)
- **New classes:**
  - `.tab-nav` — horizontal tab bar container
  - `.tab-link` — individual tab buttons
  - `.tab-panel` — content panels (hidden by default, shown via `:target`)
  - `.tab-panel:target` — active panel state
  - `.program-detail` — two-column grid for curriculum/requirements
  - `.program-terminal` — terminal readout per program

## `:target` Tab Implementation

All panels are siblings inside a `.tab-panels` container. Default behavior: first panel (Synchronists) is visible. When any tab is clicked, its hash becomes the URL target and only that panel shows.

```css
/* All panels hidden by default */
.tab-panel {
  display: none;
}

/* Show targeted panel */
.tab-panel:target {
  display: block;
}

/* Show first panel when no hash is set */
.tab-panels:not(:has(.tab-panel:target)) .tab-panel:first-child {
  display: block;
}

/* Style active tab link */
.tab-link[href="#synchronists"]:target,
.tab-link[href="#light-energy"]:target,
.tab-link[href="#exostrider"]:target {
  background: var(--color-amber);
  color: var(--color-text-dark);
}
```

Fallback if `:has()` unsupported: add `#synchronists` to the page URL on load via `<meta http-equiv="refresh">` redirect from a landing URL, or use the radio-button hack (`<input type="radio">` + `<label>` + `:checked`).

## Content Gaps

- **Light Energy Sciences faculty:** TBD — fill from wiki or create placeholder
- **Exostrider Engineering faculty:** TBD — fill from wiki or create placeholder

## Content Sources

All lore from canonical Wuthering Waves wiki:
- https://wutheringwaves.fandom.com/wiki/Startorch_Academy
- Programs: Synchronists Development, Light Energy Sciences, Exostrider Engineering
- Campus facilities, faculty names, and research topics sourced from wiki

## Constraints

- No build step — static HTML/CSS only
- No JavaScript — CSS-only tab switching
- Images use relative paths: `../Assets/...`
- CSS uses browser-native nesting, no preprocessor
- Colors use OKLCH custom properties, not hex
- Typography: Spectral (serif) + JetBrains Mono (monospace)
- Dark theme throughout — no parchment/light sections
