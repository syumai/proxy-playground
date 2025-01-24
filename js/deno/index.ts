import app from "../src/app.ts";
const port = Deno.env.get("PORT") || 18001;
Deno.serve({ port }, app.fetch);
