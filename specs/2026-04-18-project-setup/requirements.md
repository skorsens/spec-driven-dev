# Requirements — Phase 1: Project Setup

## Scope
This phase establishes a working local development environment only. No production build, deployment, or authentication concerns are in scope.

The output of this phase is a running Hono server with a health-check endpoint, a connected SQLite database with a working migration runner, and a passing Vitest smoke test.

## Decisions
- **Runtime:** Node.js with TypeScript strict mode throughout
- **Framework:** Hono served via `@hono/node-server`
- **Dev execution:** `tsx` (no compile step in dev); `nodemon` for hot reload
- **Database:** `better-sqlite3` (synchronous, simple API, no ORM)
- **Migrations:** plain `.sql` files in `migrations/`, applied in filename order on startup
- **Testing:** Vitest; no Jest, no Mocha

## Context
Refer to `specs/tech-stack.md` for the authoritative stack decisions.
Refer to `specs/mission.md` for actor and goal context.

This phase unblocks Phase 2 (Core Data Models), which will add the first migration files.

## Out of Scope
- Environment variables / `.env` handling
- Production build pipeline
- CSS styling beyond minimal inline styles
- Authentication or user management
