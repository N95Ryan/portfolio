import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_BMbQ90zO.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_C1LG9EcI.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/ryanp/Desktop/DEV/portfolio/","cacheDir":"file:///C:/Users/ryanp/Desktop/DEV/portfolio/node_modules/.astro/","outDir":"file:///C:/Users/ryanp/Desktop/DEV/portfolio/dist/","srcDir":"file:///C:/Users/ryanp/Desktop/DEV/portfolio/src/","publicDir":"file:///C:/Users/ryanp/Desktop/DEV/portfolio/public/","buildClientDir":"file:///C:/Users/ryanp/Desktop/DEV/portfolio/dist/client/","buildServerDir":"file:///C:/Users/ryanp/Desktop/DEV/portfolio/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"experience/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/experience","isIndex":false,"type":"page","pattern":"^\\/experience\\/?$","segments":[[{"content":"experience","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/experience.astro","pathname":"/experience","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"fr/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr/about","isIndex":false,"type":"page","pattern":"^\\/fr\\/about\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/about.astro","pathname":"/fr/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"fr/contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr/contact","isIndex":false,"type":"page","pattern":"^\\/fr\\/contact\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/contact.astro","pathname":"/fr/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"fr/experience/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr/experience","isIndex":false,"type":"page","pattern":"^\\/fr\\/experience\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"experience","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/experience.astro","pathname":"/fr/experience","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"fr/projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr/projects","isIndex":false,"type":"page","pattern":"^\\/fr\\/projects\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/projects.astro","pathname":"/fr/projects","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"fr/skills/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr/skills","isIndex":false,"type":"page","pattern":"^\\/fr\\/skills\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"skills","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/skills.astro","pathname":"/fr/skills","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"fr/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr","isIndex":true,"type":"page","pattern":"^\\/fr\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/index.astro","pathname":"/fr","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"skills/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/skills","isIndex":false,"type":"page","pattern":"^\\/skills\\/?$","segments":[[{"content":"skills","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/skills.astro","pathname":"/skills","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.ryan-pina.dev","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/ryanp/Desktop/DEV/portfolio/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/ryanp/Desktop/DEV/portfolio/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/ryanp/Desktop/DEV/portfolio/src/pages/experience.astro",{"propagation":"none","containsHead":true}],["C:/Users/ryanp/Desktop/DEV/portfolio/src/pages/fr/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/ryanp/Desktop/DEV/portfolio/src/pages/fr/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/ryanp/Desktop/DEV/portfolio/src/pages/fr/experience.astro",{"propagation":"none","containsHead":true}],["C:/Users/ryanp/Desktop/DEV/portfolio/src/pages/fr/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/ryanp/Desktop/DEV/portfolio/src/pages/fr/projects.astro",{"propagation":"none","containsHead":true}],["C:/Users/ryanp/Desktop/DEV/portfolio/src/pages/fr/skills.astro",{"propagation":"none","containsHead":true}],["C:/Users/ryanp/Desktop/DEV/portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/ryanp/Desktop/DEV/portfolio/src/pages/projects.astro",{"propagation":"none","containsHead":true}],["C:/Users/ryanp/Desktop/DEV/portfolio/src/pages/skills.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/experience@_@astro":"pages/experience.astro.mjs","\u0000@astro-page:src/pages/fr/about@_@astro":"pages/fr/about.astro.mjs","\u0000@astro-page:src/pages/fr/contact@_@astro":"pages/fr/contact.astro.mjs","\u0000@astro-page:src/pages/fr/experience@_@astro":"pages/fr/experience.astro.mjs","\u0000@astro-page:src/pages/fr/projects@_@astro":"pages/fr/projects.astro.mjs","\u0000@astro-page:src/pages/fr/skills@_@astro":"pages/fr/skills.astro.mjs","\u0000@astro-page:src/pages/fr/index@_@astro":"pages/fr.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/skills@_@astro":"pages/skills.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BiTSImXM.mjs","C:/Users/ryanp/Desktop/DEV/portfolio/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_qVhGDPgM.mjs","@components/contact/ContactForm.tsx":"_astro/ContactForm.uG_hyjHD.js","@components/contact/ContactSocialLinks.tsx":"_astro/ContactSocialLinks.C1gFjmua.js","@components/projects/ProjectCard.tsx":"_astro/ProjectCard.J9ID9Kcg.js","C:/Users/ryanp/Desktop/DEV/portfolio/src/components/experience/ExperienceCard.tsx":"_astro/ExperienceCard.dfMzT_GI.js","C:/Users/ryanp/Desktop/DEV/portfolio/src/components/skills/SkillsList":"_astro/SkillsList.BpW1G1YD.js","C:/Users/ryanp/Desktop/DEV/portfolio/src/components/sections/FooterSocialLinks.tsx":"_astro/FooterSocialLinks.DMsWxV6d.js","@astrojs/react/client.js":"_astro/client.dXHaCmHv.js","C:/Users/ryanp/Desktop/DEV/portfolio/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts":"_astro/BaseLayout.astro_astro_type_script_index_0_lang.B_zcmWHE.js","C:/Users/ryanp/Desktop/DEV/portfolio/src/components/ui/Navigation.astro?astro&type=script&index=0&lang.ts":"_astro/Navigation.astro_astro_type_script_index_0_lang.BQp5WtLS.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/ryanp/Desktop/DEV/portfolio/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts","var c=\"@vercel/analytics\",s=\"1.6.1\",u=()=>{window.va||(window.va=function(...n){(window.vaq=window.vaq||[]).push(n)})};function r(){return typeof window<\"u\"}function d(){try{const e=\"production\"}catch{}return\"production\"}function f(e=\"auto\"){if(e===\"auto\"){window.vam=d();return}window.vam=e}function l(){return(r()?window.vam:d())||\"production\"}function a(){return l()===\"development\"}function v(e){return e.scriptSrc?e.scriptSrc:a()?\"https://va.vercel-scripts.com/v1/script.debug.js\":e.basePath?`${e.basePath}/insights/script.js`:\"/_vercel/insights/script.js\"}function w(e={debug:!0}){var n;if(!r())return;f(e.mode),u(),e.beforeSend&&((n=window.va)==null||n.call(window,\"beforeSend\",e.beforeSend));const i=v(e);if(document.head.querySelector(`script[src*=\"${i}\"]`))return;const t=document.createElement(\"script\");t.src=i,t.defer=!0,t.dataset.sdkn=c+(e.framework?`/${e.framework}`:\"\"),t.dataset.sdkv=s,e.disableAutoTrack&&(t.dataset.disableAutoTrack=\"1\"),e.endpoint?t.dataset.endpoint=e.endpoint:e.basePath&&(t.dataset.endpoint=`${e.basePath}/insights`),e.dsn&&(t.dataset.dsn=e.dsn),t.onerror=()=>{const o=a()?\"Please check if any ad blockers are enabled and try again.\":\"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.\";console.log(`[Vercel Web Analytics] Failed to load script from ${i}. ${o}`)},a()&&e.debug===!1&&(t.dataset.debug=\"false\"),document.head.appendChild(t)}w();"],["C:/Users/ryanp/Desktop/DEV/portfolio/src/components/ui/Navigation.astro?astro&type=script&index=0&lang.ts","const i=document.getElementById(\"mobile-menu-button\"),l=document.getElementById(\"mobile-menu\"),t=document.getElementById(\"main-nav\");i?.addEventListener(\"click\",()=>{l?.classList.toggle(\"hidden\")});const o=l?.querySelectorAll(\"a\");o?.forEach(e=>{e.addEventListener(\"click\",()=>{l?.classList.add(\"hidden\")})});let s=window.scrollY,n=!1;function a(){const e=window.scrollY;e<50?t?.classList.remove(\"-translate-y-full\"):e>s?(t?.classList.add(\"-translate-y-full\"),window.innerWidth<768&&l?.classList.add(\"hidden\")):t?.classList.remove(\"-translate-y-full\"),s=e,n=!1}window.addEventListener(\"scroll\",()=>{n||(window.requestAnimationFrame(a),n=!0)},{passive:!0});"]],"assets":["/_astro/about.BfcVagZ_.css","/CV_en.pdf","/CV_fr.pdf","/favicon.ico","/photo.jpg","/robots.txt","/_astro/client.dXHaCmHv.js","/_astro/ContactForm.uG_hyjHD.js","/_astro/ContactSocialLinks.C1gFjmua.js","/_astro/ExperienceCard.dfMzT_GI.js","/_astro/FooterSocialLinks.DMsWxV6d.js","/_astro/index.CkhJJBex.js","/_astro/index.DYrVU9rO.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/ProjectCard.J9ID9Kcg.js","/_astro/SkillsList.BpW1G1YD.js","/images/projects/Bitjutsu.jpg","/images/projects/Bumble-B.jpg","/images/projects/Leaf.jpg","/images/projects/Loading.jpg","/images/projects/Movie-Mate.jpg","/images/projects/Spotr.jpg","/images/projects/The-8bits-hangman.jpg","/about/index.html","/contact/index.html","/experience/index.html","/fr/about/index.html","/fr/contact/index.html","/fr/experience/index.html","/fr/projects/index.html","/fr/skills/index.html","/fr/index.html","/projects/index.html","/skills/index.html","/index.html"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-other-locales","locales":["en","fr"],"defaultLocale":"en","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"XdOec2/Y46VB6EwhDvEhh4cDdQ6AynEmqglcG/5mn/A="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
