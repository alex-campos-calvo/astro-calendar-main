/* empty css                                        */
import { c as createComponent, r as renderTemplate, e as renderComponent, d as createAstro, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_BSCH7m8o.mjs';
import moment from 'moment';
import 'moment/locale/es.js';
import { $ as $$Layout } from '../../chunks/Layout_CZ90jdpJ.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { d as db, S as Slot, a as User_Slot, U as User } from '../../chunks/_astro_db_O5c1qmJs.mjs';
import { eq, and, inArray } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../renderers.mjs';

function Member({ user, is_admin }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative flex items-center space-x-3 rounded-lg shadow border border-gray-300 px-6 py-5 focus-within:ring-2 focus-within:ring-fuchsia-500 focus-within:ring-offset-2 hover:border-fuchsia-500",
      children: [
        /* @__PURE__ */ jsx("div", { className: "shrink-0", children: /* @__PURE__ */ jsx(
          "span",
          {
            className: "inline-flex size-10 items-center justify-center rounded-full " + (is_admin ? "bg-blue-300" : "bg-gray-500"),
            children: /* @__PURE__ */ jsx("span", { className: "text-lg font-medium text-white", children: user["short_name"] })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ jsxs("div", { className: "focus:outline-none", children: [
          /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "absolute inset-0" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-900", children: user.name })
        ] }) })
      ]
    },
    user.id
  );
}

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const id = Astro2.params.id;
  const date = Astro2.url.searchParams.get("date");
  if (!id || !date || date && !moment(date, "YYYY-MM-DD", true).isValid()) {
    return Astro2.redirect("/dashboard");
  }
  let data = {
    id: "",
    user_id: "",
    week_day: 0,
    start_hour: 0,
    end_hour: 0,
    size: 0,
    start: 0,
    end: 0,
    color: "",
    today: false,
    User_Slots: []
  };
  const slot_date = moment(date, "YYYY-MM-DD");
  const user_map = /* @__PURE__ */ new Map();
  if (id) {
    const slots = await db.select().from(Slot).leftJoin(User_Slot, eq(User_Slot.slot_id, Slot.id)).where(
      and(
        eq(Slot.id, id),
        eq(User_Slot.default, false),
        eq(User_Slot.date, slot_date.format("YYYY-MM-DD"))
      )
    ).all();
    const user_ids = [];
    if (slots && slots.length === 0) {
      return Astro2.redirect("/dashboard");
    } else {
      slots?.forEach((item) => {
        const current = data && data.id === item.Slot.id ? data : null;
        if (!current) {
          data = {
            id: item.Slot.id,
            user_id: item.Slot.user_id,
            week_day: item.Slot.week_day,
            start_hour: item.Slot.start_hour,
            end_hour: item.Slot.end_hour,
            size: item.Slot.size,
            start: Number(item.Slot.start_hour) - 7,
            end: Number(item.Slot.end_hour) - Number(item.Slot.start_hour),
            color: item.Slot.size > 1 ? "green" : "red",
            today: moment().isSame(slot_date, "day"),
            User_Slots: []
          };
          data["start_hour_text"] = moment(item.Slot.start_hour, "HH:mm").format("HH:mm");
          data["end_hour_text"] = moment(item.Slot.end_hour, "HH:mm").format("HH:mm");
          data["tipo_text"] = item.Slot.size <= 1 ? "P" : "G" + item.Slot.size;
          user_ids.push(item.Slot.user_id);
          if (item.User_Slot) {
            data.User_Slots.push(item.User_Slot);
            user_ids.push(item.User_Slot.user_id);
          }
        } else if (item.User_Slot) {
          current.User_Slots.push(item.User_Slot);
          current.color = item.Slot.size > current.User_Slots.length ? "green" : "red";
          user_ids.push(item.User_Slot.user_id);
        }
      });
    }
    if (user_ids && user_ids.length > 0) {
      const users = await db.select().from(User).where(inArray(User.id, user_ids)).all();
      if (users && users.length > 0) {
        users.forEach((user) => {
          const fullname = user.name.split(" ");
          if (fullname && fullname[0]) {
            if (fullname && fullname[0][0]) {
              user["short_name"] = fullname[0][0] + (fullname[1] ? fullname[1][0] : "");
            }
          }
          user_map.set(user.id, user);
        });
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Detalles de la clase" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="overflow-hidden bg-white shadow sm:rounded-lg"> <div class="flex justify-between px-4 py-6 sm:px-6"> <div class="gap-4"> <h3 class="text-base/7 font-semibold text-gray-900"> <span class="uppercase">${slot_date.format("dddd[,] DD [de] MMMM [de] YYYY")}</span> </h3> <span class="text-gray-400">${data["start_hour_text"]} - ${data["end_hour_text"]}</span> </div> <a${addAttribute("/slots/swap?slot1=" + data.id + "&date1=" + slot_date.format("YYYY-MM-DD"), "href")} class="mx-2 content-center bg-transparent font-semibold px-4 border border-gray-300 hover:border-fuchsia-500 rounded shadow">Gestionar participantes</a> </div> <dl class="grid grid-cols-1 lg:grid-cols-4"> <div class="divide-y divide-gray-100"> <div class="px-4 py-6 sm:px-6 flex border-t border-gray-100"> <dt class="text-sm font-medium text-gray-900 uppercase">Tamaño del grupo:</dt> <dd class="text-sm text-gray-400 ml-2">${data["tipo_text"]}</dd> </div> </div> <div class="px-4 py-6 grid sm:col-span-3 sm:px-6 border-t sm:border-l border-gray-100 gap-y-3"> <dt class="text-sm font-medium text-gray-900 uppercase">Profesor</dt> <dd class="text-sm/6 text-gray-700"> <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4"> ${renderComponent($$result2, "Member", Member, { "user": user_map.get(data.user_id), "is_admin": user_map.get(data.user_id)?.is_admin, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Member", "client:component-export": "default" })} </div> </dd> <dt class="text-sm font-medium text-gray-900 uppercase">
Participantes (${data.User_Slots.length}/${data.size})
</dt> <dd class="text-sm/6 text-gray-700"> <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4"> ${data.User_Slots.map((user_slot) => renderTemplate`${renderComponent($$result2, "Member", Member, { "user": user_map.get(user_slot.user_id), "is_admin": user_map.get(user_slot.user_id)?.is_admin, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Member", "client:component-export": "default" })}`)} </div> </dd> </div> </dl> </div> ` })}`;
}, "C:/Users/Alex/Documents/Astro/astro-calendar-main/src/pages/slots/[id].astro", void 0);

const $$file = "C:/Users/Alex/Documents/Astro/astro-calendar-main/src/pages/slots/[id].astro";
const $$url = "/slots/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
