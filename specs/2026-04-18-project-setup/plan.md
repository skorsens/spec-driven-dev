# Plan — Phase 1: Project Setup

## Task Group 1 — Dependencies & Configuration
1. Add `hono`, `@hono/node-server` to dependencies
2. Add `tsx`, `nodemon`, `vitest` to dev dependencies
3. Add `better-sqlite3` and `@types/better-sqlite3` for SQLite
4. Configure `tsconfig.json` for strict mode
5. Add `npm` scripts: `dev`, `build`, `test`

## Task Group 2 — Hono Server
1. Create `src/index.ts` as the app entry point
2. Initialize a Hono app and serve it via `@hono/node-server`
3. Add a `GET /health` endpoint returning `200 OK` with `{ status: "ok" }`

## Task Group 3 — SQLite & Migration Runner
1. Create `src/db.ts` to open the SQLite connection
2. Create `src/migrate.ts` to read and apply `.sql` files from `migrations/` in order
3. Add an empty `migrations/` directory with a `.gitkeep`
4. Run migrations automatically on server startup

## Task Group 4 — Vitest & Smoke Test
1. Add `vitest.config.ts`
2. Create `src/index.test.ts` with a smoke test that asserts the health endpoint returns `200`
3. Confirm `npm test` passes

## Task Group 5 — Home Page
1. Create `src/views/home.ts` returning an HTML string for the AgentClinic home page
2. Add a `GET /` route in `src/index.ts` that serves the home page with `Content-Type: text/html`
3. The page must include the clinic name, a one-line tagline, and a nav placeholder for future links
4. Add a Vitest test asserting `GET /` returns `200` and the response body contains the clinic name

## Task Group 6 — Layout & Styles
1. Create `src/views/header.ts`, `src/views/footer.ts`, and `src/views/layout.ts` as the three subcomponents
2. `layout.ts` wraps arbitrary page content inside a full HTML document with `<header>`, `<main>`, and `<footer>`
3. Create `public/styles.css` with base styles
4. Mount `serveStatic` from `@hono/node-server/serve-static` to serve `public/` at `/static`
5. `layout.ts` links to `/static/styles.css` in `<head>`
6. Refactor `home.ts` to use `layout()`
