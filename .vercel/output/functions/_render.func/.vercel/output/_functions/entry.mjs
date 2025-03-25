import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_D0yKQChF.mjs';
import { manifest } from './manifest_miDaWblw.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/categories/interior.astro.mjs');
const _page2 = () => import('./pages/categories/organizing.astro.mjs');
const _page3 = () => import('./pages/categories/tips.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/categories/interior.astro", _page1],
    ["src/pages/categories/organizing.astro", _page2],
    ["src/pages/categories/tips.astro", _page3],
    ["src/pages/index.astro", _page4]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "dd2ff0be-56de-451c-ae82-571c500d2863",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
