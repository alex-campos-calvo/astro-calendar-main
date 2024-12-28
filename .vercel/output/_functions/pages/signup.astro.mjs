/* empty css                                     */
import { c as createComponent, r as renderTemplate, e as renderComponent, d as createAstro, m as maybeRenderHead } from '../chunks/astro/server_BSCH7m8o.mjs';
import { $ as $$Layout } from '../chunks/Layout_CZ90jdpJ.mjs';
import { l as lucia } from '../chunks/index_CnmuTgJx.mjs';
import { d as db, U as User } from '../chunks/_astro_db_O5c1qmJs.mjs';
import { generateId } from 'lucia';
import { Argon2id } from 'oslo/password';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Signup = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signup;
  const user = Astro2.locals.user;
  if (user) {
    return Astro2.redirect("/dashboard");
  }
  const errors = {
    name: "",
    email: "",
    password: ""
  };
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const name = data.get("name")?.trim();
      const email = data.get("email")?.trim();
      const password = data.get("password")?.trim();
      if (typeof name !== "string" || name.length < 3 || name.length > 255) {
        errors.name = "Por favor, introduce un nombre v\xE1lido.";
      }
      if (typeof email !== "string" || email.length < 3 || email.length > 255 || !/.+@.+\..+/.test(email)) {
        errors.email = "Por favor, introduce una direcci\xF3n de email v\xE1lida.";
      }
      if (typeof password !== "string" || password.length < 8 || password.length > 64) {
        errors.password = "Por favor, introduce una contrase\xF1a v\xE1lida.";
      }
      const hasErrors = Object.values(errors).some((e) => e);
      if (!hasErrors) {
        const existingUser = await db.select().from(User).where(eq(User.email, email.toLowerCase())).get();
        if (!existingUser) {
          const userId = generateId(15);
          const hashedPassword = await new Argon2id().hash(password);
          await db.insert(User).values({
            id: userId,
            name,
            email: email.toLowerCase(),
            password: hashedPassword,
            is_admin: false,
            is_active: true
          });
          const session = await lucia.createSession(userId, { is_admin: false });
          const sessionCookie = lucia.createSessionCookie(session.id);
          Astro2.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
          return Astro2.redirect("/dashboard");
        } else {
          errors.name = "Por favor, introduce un nombre v\xE1lido.";
          errors.email = "Por favor, introduce una direcci\xF3n de email v\xE1lida.";
          errors.password = "Por favor, introduce una contrase\xF1a v\xE1lida.";
        }
      }
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Registro" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col justify-center items-center mt-32"> <div class="w-full max-w-md"> <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="POST"> <div class="mb-4"> <label class="block text-gray-700 text-sm font-bold mb-2" for="name"> Name </label> <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="Nombre" autocomplete="name" required> </div> ${errors.name} <div class="mb-6"> <label class="block text-gray-700 text-sm font-bold mb-2" for="email"> Email </label> <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="Dirección de email" autocomplete="email" required> </div> ${errors.email} <div class="mb-6"> <label class="block text-gray-700 text-sm font-bold mb-2" for="email"> Contraseña </label> <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" placeholder="Contraseña" autocomplete="current-password" required> </div> ${errors.password} <div class="flex items-center justify-between"> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
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
