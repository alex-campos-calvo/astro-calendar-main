/* empty css                                        */
import { c as createComponent, r as renderTemplate, e as renderComponent, d as createAstro, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_BSCH7m8o.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CZ90jdpJ.mjs';
import { d as db, S as Slot, a as User_Slot, U as User } from '../../chunks/_astro_db_O5c1qmJs.mjs';
import moment from 'moment';
import 'moment/locale/es.js';
import { eq, and } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Configurator = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Configurator;
  const date = Astro2.url.searchParams.get("date") || moment().format("YYYY-MM-DD");
  if (!moment(date, "YYYY-MM-DD").isValid()) {
    return Astro2.redirect("/dashboard");
  }
  const currentDate = moment(date, "YYYY-MM-DD").toDate();
  let classes = await db.select().from(Slot).where(eq(Slot.week_day, currentDate.getDay())).all();
  const uniqueClasses = Object.values(
    classes.reduce(
      (acc, classItem) => {
        acc[classItem.id] = classItem;
        return acc;
      },
      {}
    )
  );
  let users = await db.select().from(User_Slot).leftJoin(User, eq(User_Slot.user_id, User.id)).where(and(eq(User_Slot.default, false), eq(User_Slot.date, moment(currentDate).format("YYYY-MM-DD")))).all();
  users = users.map((user) => ({
    ...user,
    User: user.User ? {
      ...user.User,
      name: user.User.name || "Sin Nombre",
      email: user.User.email || "Sin Email",
      google_id: user.User.google_id || null,
      password: user.User.password || null,
      is_admin: user.User.is_admin ?? false
    } : null
  }));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative p-8"> <!-- Contenedor de botones (Posicionados en la parte superior derecha) --> <div class="grid grid-cols-2 gap-4 absolute top-8 right-8 mb-4"> <button class="bg-gray-500 text-white px-3 py-2 rounded-lg shadow-md hover:bg-blue-600 text-sm">
Crear Clase
</button> <button class="bg-gray-300 text-white px-3 py-2 rounded-lg shadow-md hover:bg-yellow-600 text-sm">
Modificar Clase
</button> </div> <div class="grid grid-cols-2 gap-8"> <!-- Listado de Clases --> <div class="bg-white shadow-lg rounded-lg p-6 mt-4 mb-4"> <h2 class="text-lg font-semibold text-gray-900 mb-4">Listado de Clases</h2> <div class="space-y-4"> ${uniqueClasses.map((classItem) => {
    const classDate = moment(date, "YYYY-MM-DD").day(classItem.week_day).format("dddd, DD [de] MMMM [de] YYYY");
    const startTime = moment({
      hour: Math.floor(classItem.start_hour),
      minute: Math.floor(classItem.start_hour % 1 * 60)
    }).format("HH:mm");
    const endTime = moment({
      hour: Math.floor(classItem.end_hour),
      minute: Math.floor(classItem.end_hour % 1 * 60)
    }).format("HH:mm");
    return renderTemplate`<div class="border rounded-lg p-4 shadow-sm"${addAttribute(classItem.id, "data-key")}> <h3 class="text-gray-800 font-semibold">${classDate}</h3> <p class="text-sm text-gray-600">
Horario: ${startTime} - ${endTime} </p> <p class="text-sm text-gray-600">Capacidad: ${classItem.size}</p> </div>`;
  })} </div> </div> <!-- Listado de Usuarios --> <div class="bg-white shadow-lg rounded-lg p-6 mt-4 mb-4"> <h2 class="text-lg font-semibold text-gray-900 mb-4">Listado de Usuarios</h2> <div class="space-y-4"> ${users.map((user) => renderTemplate`<div${addAttribute(user.User?.id, "id")} class="flex items-center space-x-4 border rounded-lg p-4 shadow-sm"> <div class="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center text-lg font-semibold"> ${user.User?.name?.charAt(0).toUpperCase()} </div> <div> <h3 class="text-gray-800 font-semibold">${user.User?.name}</h3> <p class="text-sm text-gray-600">${user.User?.email}</p> </div> </div>`)} </div> </div> </div> </div> ` })}`;
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
