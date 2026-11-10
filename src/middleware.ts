import { defineMiddleware } from "astro:middleware";

const BLOG_CACHE_TTL_SECONDS = 300;

function isBlogHtmlRoute(pathname: string): boolean {
  if (pathname === "/blog" || pathname.startsWith("/blog/")) {
    return true;
  }
  if (pathname === "/fr/blog" || pathname.startsWith("/fr/blog/")) {
    return true;
  }
  return false;
}

export const onRequest = defineMiddleware(async (context, next) => {
  if (!isBlogHtmlRoute(context.url.pathname)) {
    return next();
  }

  const cache = caches.default;
  const cacheKey = new Request(context.url.href, { method: "GET" });
  const cached = await cache.match(cacheKey);
  if (cached) {
    return cached;
  }

  const response = await next();

  if (response.status !== 200) {
    return response;
  }

  const headers = new Headers(response.headers);
  headers.set("Cache-Control", `public, max-age=${BLOG_CACHE_TTL_SECONDS}`);

  const body = await response.clone().arrayBuffer();
  const cachedResponse = new Response(body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });

  const cfContext = context.locals.cfContext;
  if (cfContext) {
    cfContext.waitUntil(cache.put(cacheKey, cachedResponse.clone()));
  }

  return cachedResponse;
});
