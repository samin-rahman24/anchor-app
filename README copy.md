# Anchor — TasNetworks Relocation Companion (React)

A React application helping TasNetworks employees relocating to Tasmania settle in through AI-powered buddy matching, fortnightly pulse checks, a crowdsourced Life Map, and centralised support services.

## Tech Stack

- **React 19** — UI framework
- **React Router v7** — client-side routing
- **Tailwind CSS v4** — utility-first styling (via Vite plugin)
- **Vite** — build tool with HMR

## Running the Application

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Building for Production

```bash
npm run build
npm run preview
```

## Routes

| Path | Page |
|------|------|
| `/` | Login |
| `/onboarding` | Onboarding wizard (2 steps) |
| `/matching` | Buddy matching animation |
| `/buddy-reveal` | Buddy reveal + community |
| `/app` | Dashboard |
| `/app/lifemap` | Tasmania Life Map |
| `/app/pulse` | AI Pulse Check chat |
| `/app/services` | Support services hub |
| `/hr` | HR / People Partner portal |

## Project Structure

```
src/
├── main.jsx                 Entry point
├── App.jsx                  Router configuration
├── index.css                Tailwind + custom styles/animations
├── components/
│   ├── AppLayout.jsx        Sidebar + topbar layout (wraps /app routes)
│   └── SvgSymbols.jsx       Tassie Devil SVG components
├── data/
│   └── store.jsx            React Context state + static data
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

## Plans & Documentation

- `plans/separation-plan.md` — Original page identification from the monolithic HTML
- `plans/migration-plan.md` — Full conversion strategy from Alpine.js to React
