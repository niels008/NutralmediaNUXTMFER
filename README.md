# Nutralmedia portfolio

Portfolio site of Niels de Bont (digital product designer), built with Nuxt 3,
Tailwind CSS and SCSS.

## Structure

| Path | Purpose |
| --- | --- |
| `pages/` | One page per case study plus `index.vue` |
| `layouts/projects.vue` | Shell for case pages: side menu, back button, scroll reveal |
| `components/global/` | Auto-imported components (no explicit import needed) |
| `composables/useScrollReveal.js` | IntersectionObserver reveal for `.anim` elements |
| `assets/sass/` | Global SCSS: variables, colors, menu, main stylesheet |
| `data/projects.json` | Titles, descriptions and thumbnails for the case tiles |
| `public/` | Fonts, favicons and case imagery, served from the site root |

## Development

Install dependencies:

```bash
npm install
```

Start the development server on http://localhost:3000:

```bash
npm run dev
```

## Production

Build and preview the production output:

```bash
npm run build
npm run preview
```

Generate a fully static site:

```bash
npm run generate
```

## Conventions

- Components in `components/global/` are registered globally by Nuxt; do not import them in pages.
- Scroll animations are driven by the `anim` class plus `data-duration` and `data-delay` attributes. The layout calls `useScrollReveal()` once per page.
- Webfonts live in `public/fonts` and are declared in `assets/sass/globalsvars.scss` with absolute `/fonts/...` URLs.
