import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderScript, d as createAstro } from './astro/server_vUHW0twu.mjs';
/* empty css                             */

const $$Astro = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/Alex/Documents/Astro/astro-calendar-main/node_modules/.pnpm/astro@5.0.5_@types+node@22.10.2_jiti@1.21.6_rollup@4.28.1_sass-embedded@1.82.0_typescript@5.7.2_yaml@2.6.1/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Alex/Documents/Astro/astro-calendar-main/node_modules/.pnpm/astro@5.0.5_@types+node@22.10.2_jiti@1.21.6_rollup@4.28.1_sass-embedded@1.82.0_typescript@5.7.2_yaml@2.6.1/node_modules/astro/components/ClientRouter.astro", void 0);

export { $$ClientRouter as $ };
