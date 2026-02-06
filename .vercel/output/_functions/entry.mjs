import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_B_58zMng.mjs';
import { manifest } from './manifest_BakdAjau.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/contact.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/experience.astro.mjs');
const _page5 = () => import('./pages/fr/about.astro.mjs');
const _page6 = () => import('./pages/fr/contact.astro.mjs');
const _page7 = () => import('./pages/fr/experience.astro.mjs');
const _page8 = () => import('./pages/fr/projects.astro.mjs');
const _page9 = () => import('./pages/fr/skills.astro.mjs');
const _page10 = () => import('./pages/fr.astro.mjs');
const _page11 = () => import('./pages/projects.astro.mjs');
const _page12 = () => import('./pages/skills.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/contact.ts", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/experience.astro", _page4],
    ["src/pages/fr/about.astro", _page5],
    ["src/pages/fr/contact.astro", _page6],
    ["src/pages/fr/experience.astro", _page7],
    ["src/pages/fr/projects.astro", _page8],
    ["src/pages/fr/skills.astro", _page9],
    ["src/pages/fr/index.astro", _page10],
    ["src/pages/projects.astro", _page11],
    ["src/pages/skills.astro", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "79a7297f-b521-4161-b60b-c8e897ed38bf",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
