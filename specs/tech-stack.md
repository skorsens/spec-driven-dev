# Tech Stack

## Language
- TypeScript (strict mode) — used throughout frontend and backend

## Backend
- **Runtime:** Node.js
- **Framework:** Hono — a fast, lightweight web framework with first-class TypeScript support and a clean, modern API

## Rendering
- Server-side rendering only: all HTML is generated on the server and sent to the browser as plain HTML
- No client-side JavaScript framework; the browser receives ready-made HTML pages
- Lightweight modern CSS for styling

## Database
- **SQLite** — lightweight, file-based database, no separate server required
- **Migrations:** plain `.sql` files, applied in order — no ORM

## Testing
- **Vitest** — fast, TypeScript-native test runner with Jest-compatible API

## Tooling
- `tsc` for compilation
- `ts-node` or `tsx` for development
- `nodemon` for hot reload during development

## Principles
- Keep the stack popular and well-documented so it is easy to onboard and maintain
- Prefer simplicity over over-engineering
