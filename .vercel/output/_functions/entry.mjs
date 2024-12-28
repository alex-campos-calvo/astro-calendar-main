import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DLIjECim.mjs';
import { manifest } from './manifest_CIwPo59D.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/auth/google/callback.astro.mjs');
const _page2 = () => import('./pages/auth/google/login.astro.mjs');
const _page3 = () => import('./pages/auth/logout.astro.mjs');
const _page4 = () => import('./pages/dashboard.astro.mjs');
const _page5 = () => import('./pages/members/users.astro.mjs');
const _page6 = () => import('./pages/members/_id_.astro.mjs');
const _page7 = () => import('./pages/signup.astro.mjs');
const _page8 = () => import('./pages/slots/api/change-user-slot.astro.mjs');
const _page9 = () => import('./pages/slots/api/find-slots.astro.mjs');
const _page10 = () => import('./pages/slots/configurator.astro.mjs');
const _page11 = () => import('./pages/slots/swap.astro.mjs');
const _page12 = () => import('./pages/slots/_id_.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.1.1_@types+node@22.10.2_jiti@2.4.2_rollup@4.28.1_sass-embedded@1.82.0_typescript@5.7.2_yaml@2.6.1/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/auth/google/callback.ts", _page1],
    ["src/pages/auth/google/login.ts", _page2],
    ["src/pages/auth/logout.ts", _page3],
    ["src/pages/dashboard.astro", _page4],
    ["src/pages/members/users.astro", _page5],
    ["src/pages/members/[id].astro", _page6],
    ["src/pages/signup.astro", _page7],
    ["src/pages/slots/api/change-user-slot.ts", _page8],
    ["src/pages/slots/api/find-slots.ts", _page9],
    ["src/pages/slots/configurator.astro", _page10],
    ["src/pages/slots/swap.astro", _page11],
    ["src/pages/slots/[id].astro", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "b1a892bb-7261-4e4e-abe7-bcee6daafaf2",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
