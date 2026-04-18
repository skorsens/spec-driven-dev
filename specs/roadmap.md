# Roadmap

Each phase is intentionally small and shippable.

## Phase 1 — Core Data Models
Define the foundational entities:
- Agent (id, name, model, status)
- Ailment (id, name, description, severity)
- Therapy (id, name, description)
- Appointment (id, agentId, ailmentId, therapyId, scheduledAt, status)

## Phase 2 — Project Setup
- Initialize Hono with TypeScript (strict mode)
- Add dev tooling (tsx, nodemon)
- SQLite database connection and migration runner (plain SQL files)
- Basic routing structure and health-check endpoint
- Vitest configured and a smoke test passing

## Phase 3 — Server-Side Routes & HTML
- CRUD routes for agents, ailments, therapies, and appointments
- Server-rendered HTML responses (no client-side framework)
- Input validation

## Phase 4 — Dashboard UI
- Staff dashboard: list agents, view appointments
- Agent view: report ailment, book appointment
- All pages rendered server-side as plain HTML

## Phase 5 — Polish & Launch
- Styling and responsive layout
- Error handling and edge cases
- Basic documentation
