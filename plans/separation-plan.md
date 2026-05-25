# Page Separation Plan — Anchor App

## Overview

The original `anchor-app/index.html` (1353 lines) is a single-file Alpine.js SPA containing multiple screens and tab views. This document identifies each page/screen, its line range in the original file, the routing mechanism, and where it was extracted to.

## Identified Pages

| # | Page | Original Lines | Routing Logic | Extracted File |
|---|------|---------------|---------------|----------------|
| 1 | Login | 160–208 | `screen==='login'` | `pages/login.html` |
| 2 | Onboarding | 210–321 | `screen==='onboarding'` | `pages/onboarding.html` |
| 3 | Matching Animation | 323–361 | `screen==='matching'` | `pages/matching.html` |
| 4 | Buddy Reveal | 363–419 | `screen==='buddy-reveal'` | `pages/buddy-reveal.html` |
| 5 | Dashboard (tab) | 535–615 | `screen==='app'` + `activeTab==='home'` | `pages/dashboard.html` |
| 6 | Life Map (tab) | 618–657 | `screen==='app'` + `activeTab==='lifemap'` | `pages/lifemap.html` |
| 7 | Pulse Check (tab) | 660–717 | `screen==='app'` + `activeTab==='pulse'` | `pages/pulse-check.html` |
| 8 | Services (tab) | 720–776 | `screen==='app'` + `activeTab==='services'` | `pages/services.html` |
| 9 | HR Portal | 782–1002 | `screen==='hr-portal'` | `pages/hr-portal.html` |

## Shared Components

| Component | Original Lines | Extracted File |
|-----------|---------------|----------------|
| Head (meta, styles, CSS) | 1–78 | `shared/head.html` |
| SVG Symbol Library | 82–158 | `shared/svg-symbols.html` |
| App Shell (top bar + sidebar) | 422–533 | `shared/app-shell.html` |
| JavaScript (Alpine.js app) | 1005–1345 | `shared/app.js` |

## Architecture Notes

- **Routing**: The original app uses Alpine.js reactive state (`screen` and `activeTab`) to show/hide pages. Each page is a `<div x-show="...">` block.
- **Top-level screens**: Login, Onboarding, Matching, Buddy Reveal, App, HR Portal are mutually exclusive (controlled by `screen`).
- **App tabs**: Dashboard, Life Map, Pulse Check, Services are sub-views within the App screen (controlled by `activeTab`). They share a common top bar and sidebar (the "app shell").
- **Data coupling**: All pages depend on a single Alpine.js `app()` function that holds state, data arrays (buddyProfiles, hobbies, needs, lifeMapData, services, hrEmps, awsArch), and methods.
- **Styles**: All pages share the same CSS defined in `<style>` within `<head>`.

## Separation Strategy

Each page is extracted as a **standalone HTML file** containing only its own markup. The shared head, SVG symbols, app shell, and JavaScript are placed in `shared/` for reference and potential future assembly via a build tool or templating system.

The `index.html` in `/frontend/` is the assembled version that imports all pages — functionally equivalent to the original.
