# AGENTS.md

Minista 4 static-site generator (React 19 + Vite 8, SSG). No TypeScript, no tests, no CI.

## Commands (npm)

- `npm start` — dev server (`minista`, not `vite`)
- `npm run build` — SSR build + client build, outputs `dist/`
- `npm run preview` — serve built output
- `npm run lint` / `npm run lint:fix` — ESLint (`@antfu/eslint-config`); the only automated check

## Architecture

- `src/pages/*.jsx` — file-based routes. Each page `export const metadata = { title }`; the title is read in `src/global.jsx` via `props.title`.
- `src/global.jsx` — global wrapper rendered around every page (`Head` from `minista`, Header/Content/Footer). This is where full-page `<head>` tags live.
- `src/main.js` — client-side entry, injected as `<script src="/src/main.js" type="module">` inside `global.jsx`'s `Head`; not imported anywhere.
- `src/layouts/`, `src/components/`, `src/sections/`, `src/modules/`, `src/constants/`, `src/utils/` — empty scaffolds (`.gitkeep`).
- `public/` — copied as-is to build output.

## Conventions / gotchas

- `@/` aliases `src`. Defined in **both** `vite.config.js` and `jsconfig.json`; keep them in sync.
- SCSS helpers are auto-injected: `vite.config.js` prepends `@use '@/styles/helpers' as *;`, so `fluid()`, `fluid-to-laptop()`, all mixins (`@include hover`, `@include mobile`, `@include fluid-text`, etc.) are available in any `.scss` without importing. Add new shared styles/mixins under `src/styles/helpers/`.
- Style entry is `src/styles/index.js` (imported once from `global.jsx`); add global CSS imports there, in order.
- `postcss-pxtorem` runs **only for production builds** (`vite.config.js`/`postcss.config.js`), so `px` is correct in source and dev.
- Design tokens and media breakpoints live in `src/styles/variables.scss` (CSS custom props) and `src/styles/helpers/media.scss` (`$laptop` 1440, `$tablet` 1023, `$mobile` 767, `$mobile-s` 480). Use them instead of hardcoded values.
- Lint config: single quotes, semicolons, 1TBS braces. Editor format-on-save is disabled (`.zed/settings.json`); rely on `npm run lint:fix`.
