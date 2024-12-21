/* empty css                                        */
import { c as createComponent, r as renderTemplate, f as renderComponent, e as createAstro } from '../../chunks/astro/server_BKc9_Ao_.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CvgrcyAX.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Configurator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Configurator;
  Astro2.locals.user;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Configurador de clases" })}`;
}, "C:/Users/Alex/Documents/Astro/astro-calendar-main/src/pages/slots/configurator.astro", void 0);

const $$file = "C:/Users/Alex/Documents/Astro/astro-calendar-main/src/pages/slots/configurator.astro";
const $$url = "/slots/configurator";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Configurator,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
