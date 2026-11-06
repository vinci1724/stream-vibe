# AGENTS.md

Minista 5 (SSG) + React 19 + Vite 8, SCSS. No TypeScript, no tests, no CI, no typecheck — lint is the only automated check. Interactivity is plain DOM JS, not React hydration.

## Commands

- `npm start` — dev server (`minista`, **not** `vite`)
- `npm run build` — SSR + client build into `dist/`
- `npm run preview` — serve built output
- `npm run lint` / `npm run lint:fix` — ESLint (`@antfu/eslint-config`)
- `npx --no-install minista check --json` (validate routes) / `inspect --json` (query last build snapshot) — see `node_modules/minista/AGENTS.md`; snapshots come from a prior build, no command auto-builds

Local toolchain is Node 24 / npm 11; `minista` declares `engines` `^20.19.0 || >=22.12.0`.

## Architecture

- `src/layouts/index.jsx` — Minista's default layout (there is **no** `src/global.jsx`). It receives each page's `metadata` merged with `{ url, draft }`, wraps pages with `Head` (`minista/head`), `Header`, `Content`, `Banner`, `Footer`, and imports `@/styles`.
- `src/pages/*.jsx` — file-based routes (`index.jsx` → `/`, `movies.jsx` → `/movies`). Export `metadata` for the page title **and** any props the layout needs (`isHeaderFixed`, `url` is auto-injected); the layout renders the title as `Stream Vibe | <title>`.
- `src/main.js` — client entry, injected as `<script src="/src/main.js" type="module">` inside the layout's `Head`; this is the only client wiring. It instantiates vanilla JS classes; pages are static HTML (no hydration/islands, despite `pluginIsland` being configured).
- `src/modules/` — framework-free DOM behavior classes (`OverlayMenu`, `SliderCollection`, `TabsCollection`) sharing `modules/generic/BaseComponent.js` (Proxy state + `updateUI`). Client hooks are `data-js-*` attributes; params are passed as `JSON.stringify` in an attribute and read with `src/utils/getParams.js`.
- `src/sections/` — page sections; `src/components/` — reusable UI; `src/layouts/Section/` — shared section shell (title/description/actions). `src/constants/` is the only remaining empty `.gitkeep` scaffold.
- `vite.config.js` — plugins `pluginSsg`, `pluginIsland`, `pluginSprite`, `pluginImage`.
- Assets: reference `src/assets/**` by **string path** (e.g. `/src/assets/images/...`) and render via `<Image>` / `<Sprite>` from `minista/assets` — don't `import` them. `public/` is copied verbatim to the build root.
- `docs/` is gitignored local commit notes, not project source.

## Component / layout conventions

- Each UI folder (`src/layouts/Foo/`) holds `Foo.jsx` + `Foo.scss`, with `index.js` re-exporting the default; the `.scss` is imported from the JSX (see `Content/Content.jsx`), not the index.
- Plain global class names (no CSS modules). Use `classnames`; default-export function components.
- Section mock/data arrays live in sibling plain `.js` files (`categoryItems.js`, `collectionGroups.js`, `planGroups.js`).
- Use global `.container` and visibility helpers from `src/styles/utils.scss` (`visually-hidden`, `hidden-tablet`, `visible-mobile`, ...).

## SCSS

- `@/` aliases `src`, defined in **both** `vite.config.js` and `jsconfig.json`; keep them in sync.
- Helpers are auto-injected: `vite.config.js` prepends `@use '@/styles/helpers' as *;`, so `fluid()`, `fluid-to-laptop()`, and every mixin are available in any `.scss` without importing. `helpers/index.scss` forwards `constants`, `functions`, `media`, `mixins`.
- Style entry is `src/styles/index.js`, imported once from the layout; add global CSS imports there, in order.
- `postcss-pxtorem` runs **only for production builds** (`postcss.config.js`), so `px` is correct in source and dev.
- Tokens live in `src/styles/variables.scss` (CSS custom props). `--container-width` and `--section-padding-y` are computed there from the helpers in `helpers/constants.scss` (`$container-desktop-width` 1600 / `$container-laptop-width` 1280).
- Breakpoints in `helpers/media.scss`: `$laptop` 1440, `$tablet` 1023, `$mobile` 767, `$mobile-s` 480. Mixins are `laptop`/`laptop-above`, etc. `@include hover` also emits an `:active` fallback when hover is unavailable.
- `fluid($max, $min)` clamps between a 390px and 1600px viewport; `fluid-to-laptop()` uses the 1280px floor.
- `globals.scss` has a temporary debug block (`.header`, `.footer`, every `.content` child but the last) whose `display: none` is commented out — ignore it.

## Lint

- `eslint.config.mjs` uses `@antfu/eslint-config` with `react: true` (**enabled**) and formatters for html/css. Stylistic: single quotes, semicolons, 1TBS, JSX.
- Rules off: `antfu/top-level-function`, `unused-imports/no-unused-vars`, `react/no-array-index-key`, `no-new`. `react-refresh/only-export-components` allows the `metadata` export.
- `.zed/settings.json` disables format-on-save but runs `source.fixAll.eslint` on format; run `npm run lint:fix` to normalize style.
