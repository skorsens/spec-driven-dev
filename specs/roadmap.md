# Roadmap

Each phase is intentionally small and shippable.

## Phase 1 — Project Setup
- Initialize Node.js project with TypeScript (strict mode)
- Install and configure Hono
- Add dev tooling: `tsx` for execution, `nodemon` for hot reload
- Configure Vitest with a smoke test
- Add a health-check endpoint returning `200 OK`
- Set up SQLite connection and a migration runner that applies plain `.sql` files in order

**Verification:** `npm run dev` starts the server; health-check endpoint returns `200 OK`; `npm test` passes the smoke test; migration runner executes without errors on an empty database.

## Phase 2 — Core Data Models
- Write migration SQL files for each entity:
  - `agents` (id, name, model, status)
  - `ailments` (id, name, description, severity)
  - `therapies` (id, name, description)
  - `appointments` (id, agentId, ailmentId, therapyId, scheduledAt, status)
- Seed file with sample data for development

**Verification:** Running migrations creates all four tables; seed data loads without errors; schema can be inspected via SQLite CLI.

## Phase 3 — Data Access Layer
- Write typed TypeScript functions for CRUD operations on each entity (no ORM)
- Unit tests for each data access function using Vitest

**Verification:** All CRUD functions covered by passing Vitest tests against a test SQLite database.

## Phase 4 — Server-Side Routes
- Hono routes for each entity (list, detail, create, update, delete)
- Input validation on all write routes
- All responses are server-rendered plain HTML

**Verification:** Each route returns valid HTML; invalid inputs return appropriate error responses; no client-side JS framework involved.

## Phase 5 — Dashboard UI
- Staff dashboard: list agents, view and manage appointments
- Agent view: report an ailment, book an appointment, view treatment status
- Admin view: manage users and system health
- Consistent HTML layout and navigation across all pages

**Verification:** All three actor workflows completable end-to-end in a browser; no broken links or missing pages.

## Phase 6 — Polish & Launch
- Lightweight modern CSS for attractive, responsive layout
- Graceful error pages (404, 500)
- Edge case handling and input sanitization
- Basic README with setup and run instructions

**Verification:** App renders correctly in a modern browser at multiple viewport sizes; error pages display for invalid routes; setup instructions produce a running app from a clean clone.
