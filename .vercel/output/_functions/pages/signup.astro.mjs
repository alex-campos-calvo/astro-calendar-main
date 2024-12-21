/* empty css                                     */
import { c as createComponent, r as renderTemplate, f as renderComponent, e as createAstro, m as maybeRenderHead } from '../chunks/astro/server_BKc9_Ao_.mjs';
import { $ as $$Layout } from '../chunks/Layout_CvgrcyAX.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Signup = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signup;
  const user = Astro2.locals.user;
  if (user) {
    return Astro2.redirect("/dashboard");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Registro" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col justify-center items-center mt-32"> <div class="w-full max-w-md"> <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="POST" action="api/signup"> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="name"> Name </label> <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="Nombre" required> </div> <div class="mb-6"> <label class="block text-gray-700 text-sm font-bold mb-2" for="email"> Email </label> <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="Dirección de email" required> </div> <div class="flex items-center justify-between"> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
Registrarme
</button> </div> </form> <p class="text-center text-gray-500 text-xs">&copy;2024 A&H. All rights reserved.</p> </div> </div> ` })}`;
}, "C:/Users/Alex/Documents/Astro/astro-calendar-main/src/pages/signup.astro", void 0);

const $$file = "C:/Users/Alex/Documents/Astro/astro-calendar-main/src/pages/signup.astro";
const $$url = "/signup";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signup,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
