/* empty css                                     */
import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, d as renderSlot, e as createAstro, f as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BKc9_Ao_.mjs';
import { Argon2id } from 'oslo/password';
import { d as db, U as User, l as lucia } from '../chunks/index_BUTutAy8.mjs';
/* empty css                                     */
import { and, eq } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Login = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Login;
  return renderTemplate`<html lang="es" class="h-full bg-gray-50"> <head><meta charset="UTF-8"><meta name="description" content="Motion Leon - salud y movimiento"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>MOTION-LEON</title>${renderHead()}</head> <body class="h-full"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Alex/Documents/Astro/astro-calendar-main/src/layouts/Login.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const user = Astro2.locals.user;
  if (user) {
    return Astro2.redirect("/dashboard");
  }
  let error = "";
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const email = data.get("email")?.trim();
      const password = data.get("password")?.trim();
      if (typeof email !== "string" || email.length < 3 || email.length > 255 || !/.+@.+\..+/.test(email)) {
        error = "Por favor, introduce una direcci\xF3n de email v\xE1lida.";
        return;
      }
      if (typeof password !== "string" || password.length < 8 || password.length > 64) {
        error = "Por favor, introduce una contrase\xF1a v\xE1lida.";
        return;
      }
      const hashedPassword = await new Argon2id().hash(password);
      const existingUser = await db.select().from(User).where(and(eq(User.email, email.toLowerCase()), eq(User.password, password))).get();
      if (existingUser) {
        const session = await lucia.createSession(existingUser.id, {
          is_admin: existingUser.is_admin
        });
        const sessionCookie = lucia.createSessionCookie(session.id);
        Astro2.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
        return Astro2.redirect("/dashboard");
      }
      error = "Por favor, introduce una combinaci\xF3n v\xE1lida de email y contrase\xF1a.";
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
        error = "Ha ocurrido un problema, contacte con un administrador.";
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Login, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8"> <div class="sm:mx-auto sm:w-full sm:max-w-md"> <img class="mx-auto h-16 w-auto" src="/img/logo_inverted.webp" alt="Your Company"> <h2 class="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
Iniciar sesión en tu cuenta
</h2> </div> <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]"> <div class="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12"> <form class="space-y-6" method="POST"> <div> <label for="email" class="block text-sm/6 font-medium text-gray-900">Dirección de email</label> <div class="mt-2"> <input type="email" name="email" id="email" autocomplete="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-fuchsia-600 sm:text-sm/6"> </div> </div> <div> <label for="password" class="block text-sm/6 font-medium text-gray-900">Contraseña</label> <div class="mt-2"> <input type="password" name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-fuchsia-600 sm:text-sm/6"> </div> </div> <!--
          <div class="flex items-center justify-between">
            <div class="flex gap-3">
              <div class="flex h-6 shrink-0 items-center">
                <div class="group grid size-4 grid-cols-1">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-fuchsia-600 checked:bg-fuchsia-600 indeterminate:border-fuchsia-600 indeterminate:bg-fuchsia-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                  />
                  <svg
                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      class="opacity-0 group-has-[:checked]:opacity-100"
                      d="M3 8L6 11L11 3.5"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path>
                    <path
                      class="opacity-0 group-has-[:indeterminate]:opacity-100"
                      d="M3 7H11"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"></path>
                  </svg>
                </div>
              </div>
              <label for="remember-me" class="block text-sm/6 text-gray-900">Recuérdame</label>
            </div>

            <div class="text-sm/6">
              <a href="#" class="font-semibold text-fuchsia-600 hover:text-fuchsia-500"
                >¿Olvidaste la contraseña?</a
              >
            </div>
          </div>
          --> <div> <button type="submit" class="flex w-full justify-center rounded-md bg-fuchsia-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600">Iniciar sesión</button> </div> </form> <div> <div class="relative mt-10"> <div class="absolute inset-0 flex items-center" aria-hidden="true"> <div class="w-full border-t border-gray-200"></div> </div> <div class="relative flex justify-center text-sm/6 font-medium"> <span class="bg-white px-6 text-gray-900">O continúa con</span> </div> </div> <div class="mt-6 grid grid-cols-1 gap-4"> <a href="/auth/google/login" class="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"> <svg class="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true"> <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335"></path> <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4"></path> <path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05"></path> <path d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z" fill="#34A853"></path> </svg> <span class="text-sm/6 font-semibold">Google</span> </a> </div> </div> </div> <p class="mt-10 text-center text-sm/6 text-gray-500">
¿Aun no eres miembro?
<span class="font-semibold text-fuchsia-600 hover:text-fuchsia-500">¡Contacta con nosotros!</span> </p> </div> </div> ` })}`;
}, "C:/Users/Alex/Documents/Astro/astro-calendar-main/src/pages/index.astro", void 0);

const $$file = "C:/Users/Alex/Documents/Astro/astro-calendar-main/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
