# Akilan Vadivelan — Portfolio

Personal portfolio site. Dark, minimal, Groq-inspired design.

**Stack:** React 18 · TypeScript · Tailwind CSS · Vite

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173.

```bash
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Editing content

All copy lives in [`src/content.ts`](src/content.ts): your bio, skills, and the
two project cards (WA Benefits Navigator and Risks Radar). Edit there, no
component changes needed.

## Deploy (free temporary link)

This repo is set up for GitHub Pages via `.github/workflows/deploy.yml`. Once
pushed, enable Pages (Settings → Pages → Source: GitHub Actions) and the site
goes live at your GitHub Pages URL. A custom domain can be pointed at it later.
