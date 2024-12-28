/* empty css                                        */
import { c as createComponent, r as renderTemplate, e as renderComponent } from '../../chunks/astro/server_BSCH7m8o.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CZ90jdpJ.mjs';
export { renderers } from '../../renderers.mjs';

const $$id = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Detalle de miembro" })}`;
}, "C:/Users/Alex/Documents/Astro/astro-calendar-main/src/pages/members/[id].astro", void 0);

const $$file = "C:/Users/Alex/Documents/Astro/astro-calendar-main/src/pages/members/[id].astro";
const $$url = "/members/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
