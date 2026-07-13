import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = () => {
  const siteKey = import.meta.env.PUBLIC_TURNSTILE_SITE_KEY ?? "";

  return new Response(JSON.stringify({ siteKey }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
};
