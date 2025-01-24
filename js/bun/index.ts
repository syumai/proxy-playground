import app from "../src/app.ts";
Bun.serve({
  fetch: app.fetch,
  port: process.env.PORT || 18004,
  development: false,
});
