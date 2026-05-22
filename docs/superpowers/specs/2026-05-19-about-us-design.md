# About Us Page — Design Spec

**Date:** 2026-05-19
**Status:** Approved by user

## Overview

Build `HTML/about-us.html` (currently empty) as a companion page to `HTML/index.html`, following the same visual language: editorial serif body + monospace terminal UI, warm dark-to-light section flow, staggered fade-up animations.

Content scope: **Academy Overview & Lore** only (no departments deep-dive, no key people roster). Matches the homepage's 3-department scope (excludes Voidmatters).

## Architecture

Single static HTML file linking to existing `CSS/style.css`. No JS needed (existing `JS/main.js` targets elements not on this page).

## Sections

### 1. Page Header (Dark Masthead)

- **Nav** — Same structure as index.html. "About" link points to `../HTML/about-us.html` (self). Other nav links remain `#` placeholders.
- **Masthead** — `.section-dark` background
  - Label: `ABOUT THE ACADEMY` (monospace, amber)
  - H1: `The Resonator Academy` (large serif, parchment color)
  - Body paragraph: Glossary excerpt — borderless academic metropolis, Spacetrek Collective, name meaning ("to carry the flame of inquiry and ignite the torch of civilization")
  - Terminal block (`.terminal-block`) alongside in flex layout:
    ```
    $ Leader: Lucilla
    $ Base: Lahai-Roi
    $ Affiliation: Spacetrek Collective
    $ Nickname: Resonator Academy
    ```
  - Animations: `.animate-in` with staggered delays (d1–d3)

### 2. Departments Spread

- **Layout** — `.spread` grid (2fr 1fr), dark background with gradient overlay, matching homepage spread style
- **Left column** — 3 department entries using `.program-entry` pattern:
  - **Exostrider Engineering** — Quote: *"For The Machine"* — Giant humanoid mech research, Resonator-Mech Synchronization, Tactical Development
  - **Rabelle College** — Quote: *"For The Gifted"* — Synchronist discovery & cultivation, named after Rabelle's Curve pioneer
  - **Light Energy Sciences** — Quote: *"For The Future"* — Reactor Drive energy conversion, Telesto Lens
  - Each entry: quote | name + description | `[ VIEW ]` tag
- **Right column** — `.spread-terminal` with department registry readout:
  ```
  // Department Registry
  > Exostrider Eng: Active
  > Rabelle College: Active
  > Light Energy: Active
  > Faculty: 12
  > Students: Enrolled
  > _
  ```

### 3. Stats Strip

- Amber background (`.stats-strip`), same style as homepage
- 4 stat items:
  - `4` departments
  - `12` faculty members
  - `24/7` campus operations
  - `1` shared mission

### 4. Campus Life (Parchment Section)

- **Background** — `.section-paper` (parchment)
- Label: `CAMPUS LIFE`
- Heading: `Life at the Academy`
- Subtext: brief intro about the living experience
- 4 facility highlights in a **two-column grid** (not program-entry format — distinct layout to avoid repetition):
  - **FUEL** — 24h intelligent catering & energy lounge. Human Energy Assessment system, curated menus.
  - **ReNU** — Resonator Nursing Unit. Frequency therapeutics, Dr. Luuk Herssen, physical & mental wellbeing.
  - **Academy Dorm** — Private rooms, soundproofed, customizable within regulations.
  - **APEX** — Auto Parking & Engineering Xpertise. Vehicle modification, maintenance, customization support.
- Each facility: name (h3), short description (p), monospace label tag
- Warm, human-feeling section — no terminal blocks here

### 5. Footer

- Identical to index.html footer structure

## CSS Reuse

All classes exist in `CSS/style.css`:
- `.nav`, `.nav-left`, `.nav-brand`, `.nav-links`, `.nav-status`
- `.section-dark`, `.section-paper`
- `.label`, `.terminal-block`, `.prompt`
- `.spread`, `.spread-content`, `.spread-terminal`, `.line`, `.cursor`
- `.stats-strip`, `.stats-readout`, `.stat-item`, `.stat-value`
- `.program-entry`, `.program-entry-quote`, `.program-entry-info`, `.program-entry-tag`
- `.footer`, `.footer-grid`, `.footer-colophon`, `.footer-heading`, `.footer-links`, `.footer-bottom`
- `.animate-in`, `.animate-in-d1` through `.animate-in-d5`

No new CSS classes needed. Minor inline style adjustments acceptable (max-width constraints, etc.).

## Content Sources

All lore from canonical Wuthering Waves wiki:
- https://wutheringwaves.fandom.com/wiki/Startorch_Academy
- Motto: "Let Knowledge Be Your Guiding Star, Raise High the Torch of Tomorrow"
- Departments: Exostrider Engineering, Rabelle College, Light Energy Sciences (Voidmatters excluded to match homepage)
- Campus facilities: FUEL, ReNU, Academy Dorm, APEX

## Constraints

- No build step — static HTML/CSS only
- Images use relative paths: `../Assets/...`
- CSS uses browser-native nesting, no preprocessor
- Colors use OKLCH custom properties, not hex
- Typography: Spectral (serif) + JetBrains Mono (monospace)
