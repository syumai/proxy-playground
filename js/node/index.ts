import { serve } from "@hono/node-server";
import app from "../src/app.ts";
const port = Number(process.env.PORT) || 18002;
serve(
  {
    fetch: app.fetch,
    port,
  },
  (info) => {
    console.log(`Listening on http://localhost:${info.port}`);
  }
);
