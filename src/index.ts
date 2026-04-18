import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { runMigrations } from "./migrate";
import { homePage } from "./views/home";

runMigrations();

const app = new Hono();

app.use("/static/*", serveStatic({ root: "./public", rewriteRequestPath: (p) => p.replace(/^\/static/, "") }));
app.get("/", (c) => c.html(homePage()));
app.get("/health", (c) => c.json({ status: "ok" }));

serve({ fetch: app.fetch, port: 3000 }, () => {
  console.log("Server running on http://localhost:3000");
});

export { app };
