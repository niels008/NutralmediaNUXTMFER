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

## Password protected cases

Every case in `data/projects.json` is behind a shared password. `/`,
`/MyProcess`, `/DailyUI` and `/unlock` stay public.

Set the password as an environment variable. Never commit the value.

```bash
# local
NUXT_CASE_PASSWORD="your-password" npm run dev
```

On Vercel, add `NUXT_CASE_PASSWORD` under Project Settings, Environment
Variables, for every environment that should serve the cases.

| File | Role |
| --- | --- |
| `server/middleware/case-guard.ts` | Blocks case routes server-side and sets `X-Robots-Tag: noindex` |
| `server/api/unlock.post.ts` | Checks the password, sets a signed httpOnly cookie for 14 days |
| `server/api/case-access.get.ts` | Tells the client whether the current visitor is unlocked |
| `middleware/case-guard.global.ts` | Covers client side navigation by asking the server |
| `pages/unlock.vue` | The password form |

If `NUXT_CASE_PASSWORD` is not set, the cases stay open in development and
return 503 in production, so a missing variable fails closed.

Changing the password invalidates every cookie that was issued before, since
the password is the key the cookie is signed with.

What this does not cover: images in `public/` keep their own URLs and stay
reachable without a password, and the case page markup is part of the client
bundle. The gate keeps casual visitors out; it is not a guarantee of secrecy.

## Conventions

- Components in `components/global/` are registered globally by Nuxt; do not import them in pages.
- Scroll animations are driven by the `anim` class plus `data-duration` and `data-delay` attributes. The layout calls `useScrollReveal()` once per page.
- Webfonts live in `public/fonts` and are declared in `assets/sass/globalsvars.scss` with absolute `/fonts/...` URLs.
