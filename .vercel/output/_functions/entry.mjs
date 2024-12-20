import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_B3UgkBNp.mjs';
import { manifest } from './manifest_gpOH0o8E.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/auth/google/callback.astro.mjs');
const _page2 = () => import('./pages/auth/google/login.astro.mjs');
const _page3 = () => import('./pages/auth/login.astro.mjs');
const _page4 = () => import('./pages/auth/logout.astro.mjs');
const _page5 = () => import('./pages/auth/signup.astro.mjs');
const _page6 = () => import('./pages/dashboard.astro.mjs');
const _page7 = () => import('./pages/signup.astro.mjs');
const _page8 = () => import('./pages/slots/configurator.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.0.5_@types+node@22.10.2_jiti@1.21.6_rollup@4.28.1_sass-embedded@1.82.0_typescript@5.7.2_yaml@2.6.1/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/auth/google/callback.ts", _page1],
    ["src/pages/auth/google/login.ts", _page2],
    ["src/pages/auth/login.ts", _page3],
    ["src/pages/auth/logout.ts", _page4],
    ["src/pages/auth/signup.ts", _page5],
    ["src/pages/dashboard.astro", _page6],
    ["src/pages/signup.astro", _page7],
    ["src/pages/slots/configurator.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "f761f8e5-ae65-48bb-ab17-ee56f764208e",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
