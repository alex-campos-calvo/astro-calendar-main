import './chunks/astro-designed-error-pages_B42JI4ZU.mjs';
import { h as decodeKey } from './chunks/astro/server_BSCH7m8o.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_BZHxS4PL.mjs';

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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Alex/Documents/Astro/astro-calendar-main/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.1.1_@types+node@22.10.2_jiti@2.4.2_rollup@4.28.1_sass-embedded@1.82.0_typescript@5.7.2_yaml@2.6.1/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/auth/google/callback","isIndex":false,"type":"endpoint","pattern":"^\\/auth\\/google\\/callback\\/?$","segments":[[{"content":"auth","dynamic":false,"spread":false}],[{"content":"google","dynamic":false,"spread":false}],[{"content":"callback","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/auth/google/callback.ts","pathname":"/auth/google/callback","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/auth/google/login","isIndex":false,"type":"endpoint","pattern":"^\\/auth\\/google\\/login\\/?$","segments":[[{"content":"auth","dynamic":false,"spread":false}],[{"content":"google","dynamic":false,"spread":false}],[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/auth/google/login.ts","pathname":"/auth/google/login","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/auth/logout","isIndex":false,"type":"endpoint","pattern":"^\\/auth\\/logout\\/?$","segments":[[{"content":"auth","dynamic":false,"spread":false}],[{"content":"logout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/auth/logout.ts","pathname":"/auth/logout","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.C39IReUb.css"},{"type":"external","src":"/_astro/dashboard.DKrlUp1c.css"}],"routeData":{"route":"/dashboard","isIndex":false,"type":"page","pattern":"^\\/dashboard\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard.astro","pathname":"/dashboard","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.C39IReUb.css"},{"type":"external","src":"/_astro/dashboard.DKrlUp1c.css"}],"routeData":{"route":"/members/users","isIndex":false,"type":"page","pattern":"^\\/members\\/users\\/?$","segments":[[{"content":"members","dynamic":false,"spread":false}],[{"content":"users","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/members/users.astro","pathname":"/members/users","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.C39IReUb.css"},{"type":"external","src":"/_astro/dashboard.DKrlUp1c.css"}],"routeData":{"route":"/members/[id]","isIndex":false,"type":"page","pattern":"^\\/members\\/([^/]+?)\\/?$","segments":[[{"content":"members","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/members/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.C39IReUb.css"},{"type":"external","src":"/_astro/dashboard.DKrlUp1c.css"}],"routeData":{"route":"/signup","isIndex":false,"type":"page","pattern":"^\\/signup\\/?$","segments":[[{"content":"signup","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signup.astro","pathname":"/signup","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/slots/api/change-user-slot","isIndex":false,"type":"endpoint","pattern":"^\\/slots\\/api\\/change-user-slot\\/?$","segments":[[{"content":"slots","dynamic":false,"spread":false}],[{"content":"api","dynamic":false,"spread":false}],[{"content":"change-user-slot","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/slots/api/change-user-slot.ts","pathname":"/slots/api/change-user-slot","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/slots/api/find-slots","isIndex":false,"type":"endpoint","pattern":"^\\/slots\\/api\\/find-slots\\/?$","segments":[[{"content":"slots","dynamic":false,"spread":false}],[{"content":"api","dynamic":false,"spread":false}],[{"content":"find-slots","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/slots/api/find-slots.ts","pathname":"/slots/api/find-slots","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.C39IReUb.css"},{"type":"external","src":"/_astro/dashboard.DKrlUp1c.css"}],"routeData":{"route":"/slots/configurator","isIndex":false,"type":"page","pattern":"^\\/slots\\/configurator\\/?$","segments":[[{"content":"slots","dynamic":false,"spread":false}],[{"content":"configurator","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/slots/configurator.astro","pathname":"/slots/configurator","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.C39IReUb.css"},{"type":"external","src":"/_astro/dashboard.DKrlUp1c.css"}],"routeData":{"route":"/slots/swap","isIndex":false,"type":"page","pattern":"^\\/slots\\/swap\\/?$","segments":[[{"content":"slots","dynamic":false,"spread":false}],[{"content":"swap","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/slots/swap.astro","pathname":"/slots/swap","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.C39IReUb.css"},{"type":"external","src":"/_astro/dashboard.DKrlUp1c.css"}],"routeData":{"route":"/slots/[id]","isIndex":false,"type":"page","pattern":"^\\/slots\\/([^/]+?)\\/?$","segments":[[{"content":"slots","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/slots/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.C39IReUb.css"},{"type":"external","src":"/_astro/dashboard.DKrlUp1c.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Alex/Documents/Astro/astro-calendar-main/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Alex/Documents/Astro/astro-calendar-main/src/pages/dashboard.astro",{"propagation":"none","containsHead":true}],["C:/Users/Alex/Documents/Astro/astro-calendar-main/src/pages/members/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/Alex/Documents/Astro/astro-calendar-main/src/pages/members/users.astro",{"propagation":"none","containsHead":true}],["C:/Users/Alex/Documents/Astro/astro-calendar-main/src/pages/signup.astro",{"propagation":"none","containsHead":true}],["C:/Users/Alex/Documents/Astro/astro-calendar-main/src/pages/slots/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/Alex/Documents/Astro/astro-calendar-main/src/pages/slots/configurator.astro",{"propagation":"none","containsHead":true}],["C:/Users/Alex/Documents/Astro/astro-calendar-main/src/pages/slots/swap.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:src/pages/auth/google/callback@_@ts":"pages/auth/google/callback.astro.mjs","\u0000@astro-page:src/pages/auth/google/login@_@ts":"pages/auth/google/login.astro.mjs","\u0000@astro-page:src/pages/auth/logout@_@ts":"pages/auth/logout.astro.mjs","\u0000@astro-page:src/pages/members/[id]@_@astro":"pages/members/_id_.astro.mjs","\u0000@astro-page:src/pages/signup@_@astro":"pages/signup.astro.mjs","\u0000@astro-page:src/pages/slots/api/change-user-slot@_@ts":"pages/slots/api/change-user-slot.astro.mjs","\u0000@astro-page:src/pages/slots/api/find-slots@_@ts":"pages/slots/api/find-slots.astro.mjs","\u0000@astro-page:src/pages/slots/configurator@_@astro":"pages/slots/configurator.astro.mjs","\u0000@astro-page:src/pages/slots/swap@_@astro":"pages/slots/swap.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/members/users@_@astro":"pages/members/users.astro.mjs","\u0000@astro-page:src/pages/slots/[id]@_@astro":"pages/slots/_id_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/dashboard@_@astro":"pages/dashboard.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.1.1_@types+node@22.10.2_jiti@2.4.2_rollup@4.28.1_sass-embedded@1.82.0_typescript@5.7.2_yaml@2.6.1/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/Alex/Documents/Astro/astro-calendar-main/node_modules/.pnpm/astro@5.1.1_@types+node@22.10.2_jiti@2.4.2_rollup@4.28.1_sass-embedded@1.82.0_typescript@5.7.2_yaml@2.6.1/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_TtFGmxyC.mjs","C:/Users/Alex/Documents/Astro/astro-calendar-main/node_modules/.pnpm/@astrojs+react@4.1.2_@types+node@22.10.2_@types+react-dom@18.0.6_@types+react@18.0.21_jiti@2._p7kebo7pybnq5sdkpkrdgcnofe/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_C1YIWAGb.mjs","\u0000@astrojs-manifest":"manifest_CIwPo59D.mjs","@/components/WeeklyCalendar":"_astro/WeeklyCalendar._7Kbi5o9.js","@/components/Members":"_astro/Members.CRnVTs9l.js","@/components/Member":"_astro/Member.BlH50OEw.js","@/components/Header":"_astro/Header.wWSM-VqB.js","@/components/DatePickerFilter":"_astro/DatePickerFilter.DD9jlk4H.js","@astrojs/react/client.js":"_astro/client.CDvuHwLI.js","C:/Users/Alex/Documents/Astro/astro-calendar-main/node_modules/.pnpm/astro@5.1.1_@types+node@22.10.2_jiti@2.4.2_rollup@4.28.1_sass-embedded@1.82.0_typescript@5.7.2_yaml@2.6.1/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.BScVxmeO.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/dashboard.C39IReUb.css","/_astro/dashboard.DKrlUp1c.css","/favicon.svg","/img/logo.webp","/img/logo_big.webp","/img/logo_inverted.webp","/_astro/client.CDvuHwLI.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.BScVxmeO.js","/_astro/DatePickerFilter.DD9jlk4H.js","/_astro/es.FfpzS-HS.js","/_astro/floating-ui.react-dom.DTDN7lDI.js","/_astro/Header.wWSM-VqB.js","/_astro/index.BCtMShv3.js","/_astro/index.DaKJxkVF.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/Member.BlH50OEw.js","/_astro/Members.CRnVTs9l.js","/_astro/portal.89DIbj4w.js","/_astro/WeeklyCalendar._7Kbi5o9.js","/js/modules/Sortable.min.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"D6BtClNyOMCjxGd6W1ehQwfJQ/Y7y8wWAnRvvUuQZpI="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
