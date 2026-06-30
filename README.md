# Astromini

A minimal React starter with Tailwind CSS, shadcn-style UI components, and Google Fonts.

## Stack

- **React 18** — component model
- **Vite 5** — dev server and build tool
- **Tailwind CSS 3** — utility-first styling
- **shadcn-style primitives** — Card, Badge, Separator (no external registry dependency)
- **Google Fonts** — Inter (body) + Playfair Display (headings)

## Structure

```
src/
├── App.jsx               # Root — siteData JSON drives header/footer
├── layouts/
│   └── MainLayout.jsx    # Sticky header + flex main + footer
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── ui/               # shadcn-style primitives
│       ├── badge.jsx
│       ├── card.jsx
│       └── separator.jsx
├── pages/
│   └── Home.jsx          # pageData JSON → hero + feature cards
└── lib/utils.js          # cn() helper (clsx + tailwind-merge)
```

## Getting Started

```bash
npm install
npm run dev       # dev server
npm run bp        # build + preview
npm run build     # production build only
```

## Data Pattern

Page content is driven by plain JSON objects defined at the top of each component — no external CMS required. Swap the JSON for an API call when ready to scale.
