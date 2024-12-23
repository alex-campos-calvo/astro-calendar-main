/* empty css                                        */
import { c as createComponent, r as renderTemplate, e as renderComponent } from '../../chunks/astro/server_vUHW0twu.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Ci6fmJw0.mjs';
export { renderers } from '../../renderers.mjs';

const $$Configurator = createComponent(($$result, $$props, $$slots) => {
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
