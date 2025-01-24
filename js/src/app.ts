import { Hono } from "hono";
const app = new Hono();
const origin = "http://localhost:6543";
app.all("*", (c) => {
  const originalUrl = new URL(c.req.url);
  const newUrl = new URL(originalUrl.pathname, origin);
  newUrl.search = originalUrl.search;
  newUrl.hash = originalUrl.hash;
  const req = new Request(newUrl, c.req.raw);
  return fetch(req);
});
export default app;
