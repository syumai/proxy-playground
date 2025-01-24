import { Hono } from "hono";
const app = new Hono();
app.get("/", (c) => c.text(`Hello, ${c.req.query("name") ?? "world"}!`));
Deno.serve({ port: 6543 }, app.fetch);
