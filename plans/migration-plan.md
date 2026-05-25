# Migration Plan — Alpine.js SPA to React Application

## Overview

This document covers the full conversion of the Anchor app from a single-file Alpine.js SPA (`anchor-app/index.html`, 1353 lines) to a multi-file React application with proper routing, component architecture, and Tailwind CSS.

## Source → Target Mapping

| Original Section | Lines | React Component | Route |
|-----------------|-------|-----------------|-------|
| Login | 160–208 | `src/pages/Login.jsx` | `/` |
| Onboarding (Steps 1–2) | 210–321 | `src/pages/Onboarding.jsx` | `/onboarding` |
| Matching Animation | 323–361 | `src/pages/Matching.jsx` | `/matching` |
| Buddy Reveal | 363–419 | `src/pages/BuddyReveal.jsx` | `/buddy-reveal` |
| App Shell (top bar + sidebar) | 422–533 | `src/components/AppLayout.jsx` | `/app` (layout) |
| Dashboard Tab | 535–615 | `src/pages/Dashboard.jsx` | `/app` (index) |
| Life Map Tab | 618–657 | `src/pages/LifeMap.jsx` | `/app/lifemap` |
| Pulse Check Tab | 660–717 | `src/pages/PulseCheck.jsx` | `/app/pulse` |
| Services Tab | 720–776 | `src/pages/Services.jsx` | `/app/services` |
| HR Portal | 782–1002 | `src/pages/HrPortal.jsx` | `/hr` |
| JavaScript logic | 1005–1345 | `src/data/store.jsx` | (React Context) |
| CSS / Styles | 10–77 | `src/index.css` | (Tailwind + custom) |
| SVG Symbols | 82–158 | `src/components/SvgSymbols.jsx` | (React components) |

## Architecture Decisions

### Routing — React Router v6

```
/                  → Login
/onboarding        → Onboarding (2-step wizard)
/matching          → Matching animation (auto-redirects)
/buddy-reveal      → Buddy reveal screen
/app               → AppLayout wrapper (sidebar + topbar)
  /app             → Dashboard (index route)
  /app/lifemap     → Life Map
  /app/pulse       → Pulse Check
  /app/services    → Services
/hr                → HR Portal (separate layout)
```

The original app used Alpine.js `x-show` directives with `screen` and `activeTab` state to toggle visibility. In React, this becomes:
- **Top-level screens** → separate routes
- **App tabs** → nested routes under `/app` with a shared layout (`<Outlet />`)

### State Management — React Context

The original Alpine.js `app()` function held all state in one object. This is converted to a React Context (`AppProvider`) that provides:
- Form data (name, origin, family, hobbies, needs)
- Computed buddy matching logic
- Tailored journey generation

No external state library needed — the app is small enough for Context.

### Styling — Tailwind CSS v4 + Vite Plugin

- Tailwind is integrated via `@tailwindcss/vite` (no config file needed in v4)
- Custom CSS (animations, `.grad`, `.card`, `.nav-item`, etc.) lives in `src/index.css`
- All original Tailwind utility classes preserved as-is

### SVG Assets — React Components

SVG symbols (`td-full`, `td-head`) are converted to proper React components (`<TdFull />`, `<TdHead />`) with `className` props instead of inline `<svg><use href>` references.

## Conversion Steps Performed

1. **Scaffold** — `npm create vite@latest frontend-v2 -- --template react`
2. **Dependencies** — `react-router-dom`, `tailwindcss`, `@tailwindcss/vite`
3. **Extract data** — All arrays (buddyProfiles, hobbies, needs, lifeMapData, services, hrEmps, awsArch) moved to `src/data/store.jsx`
4. **Extract state logic** — Alpine.js methods converted to React hooks/Context
5. **Build components** — SVG symbols, AppLayout (sidebar + topbar)
6. **Build pages** — Each identified page became a route-level component
7. **Wire routing** — `BrowserRouter` with nested routes for app tabs
8. **Port styles** — `index.css` with Tailwind import + all custom CSS
9. **Verify build** — `vite build` passes with 0 errors

## File Structure

```
frontend-v2/
├── index.html
├── package.json
├── vite.config.js
├── plans/
│   ├── separation-plan.md      (from frontend/)
│   └── migration-plan.md       (this file)
└── src/
    ├── main.jsx                 Entry point
    ├── App.jsx                  Router configuration
    ├── index.css                Tailwind + custom styles
    ├── components/
    │   ├── AppLayout.jsx        Sidebar + topbar (wraps app tabs)
    │   └── SvgSymbols.jsx       TdFull, TdHead SVG components
    ├── data/
    │   └── store.jsx            Context provider + all static data
    └── pages/
        ├── Login.jsx
        ├── Onboarding.jsx
        ├── Matching.jsx
        ├── BuddyReveal.jsx
        ├── Dashboard.jsx
        ├── LifeMap.jsx
        ├── PulseCheck.jsx
        ├── Services.jsx
        └── HrPortal.jsx
```

## Key Differences from Original

| Aspect | Original (Alpine.js) | React Version |
|--------|---------------------|---------------|
| Routing | `x-show` state toggling | React Router URL-based |
| State | Single `app()` object | React Context + useState |
| Rendering | All pages in DOM, hidden | Only active route renders |
| Styles | CDN Tailwind + inline `<style>` | Vite-built Tailwind CSS |
| JS delivery | Inline `<script>` | ES modules, code-split |
| Build | None (static HTML) | Vite (HMR dev, optimized prod) |
