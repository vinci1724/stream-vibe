# AGENTS.md

Minista 4 static-site generator (React 19 + Vite 8, SSG). No TypeScript, no tests, no CI. Node 24 / npm 11.

## Commands (npm)

- `npm start` — dev server (`minista`, **not** `vite`)
- `npm run build` — SSR build + client build, outputs `dist/`
- `npm run preview` — serve built output
- `npm run lint` / `npm run lint:fix` — ESLint (`@antfu/eslint-config`); the only automated check

## Architecture

- `src/pages/*.jsx` — file-based routes. Each page `export const metadata = { title }`; the title is read in `src/global.jsx` via `props.title`.
- `src/global.jsx` — global wrapper rendered around every page (`Head` from `minista`, plus Header/Content/Footer). All full-page `<head>` tags live here.
- `src/main.js` — client-side entry (currently a stub), injected as `<script src="/src/main.js" type="module">` inside `global.jsx`'s `Head`; not imported anywhere. This is how client JS gets on the page —  there is no other client-entry wiring.
- `src/layouts/` — Header, Content, Footer (Content wraps page children in `<main>`).
- `src/components/`, `src/sections/`, `src/modules/`, `src/constants/`, `src/utils/` — empty scaffolds (`.gitkeep`). Create folders here as features are added.
- `src/assets/fonts/` — Manrope woff2 files, wired up in `src/styles/fonts.scss`. `src/assets/icons/` and `src/assets/images/` are empty.
- `public/` — copied as-is to build output (favicons, `site.webmanifest`).

## Component / layout conventions

- Each UI folder (`src/layouts/Foo/`) holds `Foo.jsx` + `Foo.scss`, with `index.js` re-exporting the component (`export default Foo`). The `.scss` is imported from the JSX (see `Content/Content.jsx`), not the index.
- Plain global class names, no CSS modules. Use the global `.container` and visibility helpers from `src/styles/utils.scss` (`visually-hidden`, `hidden-tablet`, `visible-mobile`, etc.).

## SCSS

- `@/` aliases `src`. Defined in **both** `vite.config.js` and `jsconfig.json`; keep them in sync.
- Helpers are auto-injected: `vite.config.js` prepends `@use '@/styles/helpers' as *;`, so `fluid()`, `fluid-to-laptop()`, and every mixin are available in any `.scss` without importing. `src/styles/helpers/index.scss` forwards `constants`, `functions`, `media`, `mixins`.
- Style entry is `src/styles/index.js` (imported once from `global.jsx`); add global CSS imports there, in order.
- `postcss-pxtorem` runs **only for production builds** (`postcss.config.js`), so `px` is correct in source and dev.
- Tokens live in `src/styles/variables.scss` (CSS custom props, color/radius/border scale). Use them instead of hardcoded values.
- Breakpoints in `src/styles/helpers/media.scss`: `$laptop` 1440, `$tablet` 1023, `$mobile` 767, `$mobile-s` 480. Mixins are `laptop`/`laptop-above`, etc. `@include hover` also emits an `:active` fallback on touch devices.
- `fluid($max, $min)` clamps between a 390px and 1600px viewport; `fluid-to-laptop()` uses the 1280px `$container-laptop-width` floor. Container widths are the `$container-*` constants in `helpers/constants.scss`.

## Lint

- `@antfu/eslint-config` with `stylistic`: single quotes, semicolons, 1TBS, JSX. The React plugin is **disabled** (`react: true` is commented out), and `antfu/top-level-function` + `unused-imports/no-unused-vars` are off.
- Editor format-on-save is off (`.zed/settings.json`), but it runs `source.fixAll.eslint` on format. Rely on `npm run lint:fix` to normalize style.
