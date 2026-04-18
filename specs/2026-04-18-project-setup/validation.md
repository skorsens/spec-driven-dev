# Validation — Phase 1: Project Setup

## Criteria

### 1. Server starts
```bash
npm run dev
```
Expected: server starts without errors; console confirms it is listening on a port.

### 2. Health-check endpoint responds
```bash
curl http://localhost:3000/health
```
Expected: `200 OK` with body `{ "status": "ok" }`.

### 3. Smoke test passes
```bash
npm test
```
Expected: Vitest reports all tests passed with no failures.

### 4. Migration runner executes on an empty database
Delete (or rename) any existing `dev.db` file, then start the server:
```bash
npm run dev
```
Expected: server starts, migration runner logs that it applied 0 migration files, and no errors are thrown.

## Definition of Done
All four criteria above pass. The branch is ready to merge into `master` and unblock Phase 2.
