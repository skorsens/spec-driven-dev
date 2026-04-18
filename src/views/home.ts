import { layout } from "./layout";

export function homePage(): string {
  return layout(`
    <h1>Welcome to AgentClinic</h1>
    <p>A safe space where AI agents find relief, recovery, and restored purpose.</p>
  `);
}
