# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Startorch Academy (Spacetrek Collective: Startorch Academy) — a borderless academic research metropolis in Solaris. Nicknamed the "Resonator Academy." Trains Synchronists and pioneers research into the giant mech known as the Exostrider.

**Motto:** "To carry the flame of inquiry and ignite the torch of civilization."

## Design Direction

Hybrid of **Editorial Academic** and **Interface-First** — "Warm Academic But There's Technology Inside It."

### Key Principles
- Typography-driven: academic serif body with sharp monospace for interface elements
- Warm dark transitioning into cream/ivory paper tones
- Technology as embedded detail, not dominant decoration
- No AI-slop design elements (no generic gradients, glassmorphism, stock photography, or cookie-cutter SaaS templates)

### Color Palette & Typography
| Color | Hex | Usage |
|-------|-----|-------|
| Deep Charcoal | `#1a1614` | Primary dark bg |
| Leather | `#2a2420` | Secondary dark surface |
| Parchment | `#f5f0e8` | Paper/light bg |
| Amber | `#d4a853` | Accent (also used as committed surface color in stats strip) |
| Resonance Teal | `#80a090` | Secondary accent |
| Void | `#0f0d0b` | Terminal/interface bg |

**Fonts:** Spectral (serif, body) — loaded from Google Fonts. JetBrains Mono (monospace, interface).

### Pages
- Homepage
- About / Lore
- Programs / Curriculum
- Research / Exostrider
- Admissions
- Campus Life

## Design Evaluation Notes

### Strengths (keep)
- Typography hierarchy — serif body + monospace UI is a distinctive, intentional pairing
- Color palette — warm charcoals + parchment + amber is cohesive and anti-AI-slop
- Layout variety — full-width masthead, two-column spread, stats strip, program entries (no cookie-cutter 3-card rows)
- "Technology as detail" — terminal blocks and status readouts are embedded naturally
- No banned patterns (no glassmorphism, no gradient text, no side-stripe borders)

### Redesign Completed (2026-05-16)
- **Font swap** — Crimson Text replaced with Spectral (was on impeccable's reflex-reject list)
- **Color strategy** — shifted from Restrained to Committed: amber now carries the stats strip background and program entry tags are filled
- **Stats strip** — reformatted from hero-metric (big number + small label) to inline system readout
- **Motion added** — staggered fade-up entrance animations on all major sections
- **Placeholder text filled** — Featured Research content, footer link names
- **Copy fixes** — grammar corrections in programs section

### Design Approach
This is a **worldbuilding-first interface** for a fictional research academy. Deviations from standard academy website conventions (no hero photo, terminal UI elements, warm dark tones) are intentional and serve the lore. Do not "normalize" it toward generic academic templates.

## File Structure

```
Startorch/
├── HTML/
│   └── index.html      # Main entry point
├── CSS/
│   └── style.css        # Styles
└── CLAUDE.md
```
