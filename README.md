# Abdul Qadeer Sikandar — Portfolio

A dark, glassmorphic developer portfolio built with **React 19 + Vite + Tailwind CSS v4 + Framer Motion**.

## Highlights

- Terminal "boot sequence" hero animation (typewriter effect) — a nod to the dev/AI subject matter
- Glassmorphism cards throughout (`.glass`, `.glass-strong` in `src/index.css`)
- Purple → cyan gradient accents on a `#050816` base, per the brief
- Project cards styled as little app windows (traffic-light dots) with feature tags, GitHub + Live links
- Scroll-reveal animations (`src/components/Reveal.jsx`) using Framer Motion's `whileInView`
- Light/dark theme toggle (top-right of navbar) — remembers the visitor's choice via localStorage, defaults to dark
- Fully responsive (mobile hamburger menu, fluid grids) and respects `prefers-reduced-motion`

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
```

## Project structure

```
src/
├── data.js                # ALL your content lives here — edit this file to update text
├── index.css              # design tokens (colors, fonts) + glass/gradient utility classes
├── App.jsx                # page composition
├── hooks/
│   └── useTypewriter.js   # powers the hero terminal animation
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── About.jsx
    ├── Skills.jsx
    ├── Projects.jsx
    ├── Experience.jsx     # includes certifications + languages
    ├── Contact.jsx        # includes footer
    ├── Reveal.jsx         # scroll-reveal wrapper
    └── BrandIcons.jsx     # GitHub/LinkedIn/Instagram SVGs (lucide-react dropped brand icons)
```

## Things you need to fill in

| What | Where | How |
|---|---|---|
| Profile photo | `public/images/profile.jpg` | Add your photo with this exact filename — shows in the About section card. If missing, it just hides gracefully. |
| CV / Resume | `public/resume.pdf` | Add your PDF with this exact filename — powers the "Download CV" buttons in the Hero and About sections. |
| Internship offer letters | `public/offers/` | Add PDFs named `code-alpha.pdf`, `fenixtech.pdf`, `infolith.pdf`, `decodelabs.pdf`. The "View Offer Letter" button already links to these paths — just drop the files in. |
| "Also shipped" repo link | `src/data.js` → `additionalProjectsRepo` | Currently points to your GitHub profile — update to the specific repo link once you have it. |
| Project screenshots | `public/images/` | See below. |

## Adding your project screenshots

Drop images into `public/images/` using the exact filenames referenced in `src/data.js`:

```
public/images/custom-pearl.png
public/images/quran-ai.png
public/images/chat-app.png
public/images/pos.png
public/images/language-learning.png
public/images/weather.png
```

If an image is missing, the card gracefully hides the image area instead of showing a broken icon — so you can add them one at a time.

## Editing content

Everything text-based (name, bio, skills, projects, experience, certifications, contact info) is centralized in `src/data.js`. You shouldn't need to touch component files just to update content.

## Deploying

This is a static Vite build — deploy `dist/` directly to **Netlify** or **Vercel** (drag-and-drop `dist/`, or connect the repo and set build command `npm run build`, publish directory `dist`).
