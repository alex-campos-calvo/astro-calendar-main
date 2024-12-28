/* empty css                                        */
import { c as createComponent, r as renderTemplate, e as renderComponent, d as createAstro, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_BSCH7m8o.mjs';
import moment from 'moment';
import 'moment/locale/es.js';
import { $ as $$Layout } from '../../chunks/Layout_CZ90jdpJ.mjs';
import { d as db, S as Slot, a as User_Slot, U as User } from '../../chunks/_astro_db_O5c1qmJs.mjs';
import { eq, and, inArray } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Swap = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Swap;
  const slot1 = Astro2.url.searchParams.get("slot1");
  const date1 = Astro2.url.searchParams.get("date1");
  const slot2 = Astro2.url.searchParams.get("slot2");
  const date2 = Astro2.url.searchParams.get("date2");
  if (!slot1 || !date1 || date1 && !moment(date1, "YYYY-MM-DD", true).isValid()) {
    return Astro2.redirect("/dashboard");
  }
  if (slot2 && (!date2 || !moment(date2, "YYYY-MM-DD", true).isValid())) {
    return Astro2.redirect("/dashboard");
  }
  let data1 = {
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
  let data2 = {
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
  const slot_date1 = moment(date1, "YYYY-MM-DD");
  const slot_date2 = moment(date2, "YYYY-MM-DD");
  const user_map = /* @__PURE__ */ new Map();
  if (slot1) {
    const slots = await db.select().from(Slot).leftJoin(User_Slot, eq(User_Slot.slot_id, Slot.id)).where(
      and(
        eq(Slot.id, slot1),
        eq(User_Slot.default, false),
        eq(User_Slot.date, slot_date1.format("YYYY-MM-DD"))
      )
    ).all();
    const user_ids = [];
    if (slots && slots.length === 0) {
      return Astro2.redirect("/dashboard");
    } else {
      slots?.forEach((item) => {
        let current = data1 && data1.id === item.Slot.id ? data1 : null;
        if (!current) {
          data1 = {
            id: item.Slot.id,
            user_id: item.Slot.user_id,
            week_day: item.Slot.week_day,
            start_hour: item.Slot.start_hour,
            end_hour: item.Slot.end_hour,
            size: item.Slot.size,
            start: Number(item.Slot.start_hour) - 7,
            end: Number(item.Slot.end_hour) - Number(item.Slot.start_hour),
            color: item.Slot.size > 1 ? "green" : "red",
            today: moment().isSame(slot_date1, "day"),
            User_Slots: []
          };
          data1["start_hour_text"] = moment(item.Slot.start_hour, "HH:mm").format("HH:mm");
          data1["end_hour_text"] = moment(item.Slot.end_hour, "HH:mm").format("HH:mm");
          data1["tipo_text"] = item.Slot.size <= 1 ? "P" : "G" + item.Slot.size;
          user_ids.push(item.Slot.user_id);
          if (item.User_Slot) {
            data1.User_Slots.push(item.User_Slot);
            user_ids.push(item.User_Slot.user_id);
          }
          current = data1;
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
  if (slot2 && date2 && moment(date2, "YYYY-MM-DD", true).isValid()) {
    const slots = await db.select().from(Slot).leftJoin(User_Slot, eq(User_Slot.slot_id, Slot.id)).where(
      and(
        eq(Slot.id, slot2),
        eq(User_Slot.default, false),
        eq(User_Slot.date, slot_date2.format("YYYY-MM-DD"))
      )
    ).all();
    const user_ids = [];
    if (slots && slots.length === 0) {
      return Astro2.redirect("/dashboard");
    } else {
      slots?.forEach((item) => {
        let current = data2 && data2.id === item.Slot.id ? data2 : null;
        if (!current) {
          data2 = {
            id: item.Slot.id,
            user_id: item.Slot.user_id,
            week_day: item.Slot.week_day,
            start_hour: item.Slot.start_hour,
            end_hour: item.Slot.end_hour,
            size: item.Slot.size,
            start: Number(item.Slot.start_hour) - 7,
            end: Number(item.Slot.end_hour) - Number(item.Slot.start_hour),
            color: item.Slot.size > 1 ? "green" : "red",
            today: moment().isSame(slot_date2, "day"),
            User_Slots: []
          };
          data2["start_hour_text"] = moment(item.Slot.start_hour, "HH:mm").format("HH:mm");
          data2["end_hour_text"] = moment(item.Slot.end_hour, "HH:mm").format("HH:mm");
          data2["tipo_text"] = item.Slot.size <= 1 ? "P" : "G" + item.Slot.size;
          user_ids.push(item.Slot.user_id);
          if (item.User_Slot) {
            data2.User_Slots.push(item.User_Slot);
            user_ids.push(item.User_Slot.user_id);
          }
          current = data2;
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
  return renderTemplate(_a || (_a = __template(["", ` <script type="module" src="/js/modules/Sortable.min.js"><\/script> <script type="module" data-astro-rerun>
  const el1 = document.getElementById('draggable1')
  const el2 = document.getElementById('draggable2')

  if (el1 && el2) {
    async function postChanges({ to_slot, to_date, user_slot }) {
      await fetch('/slots/api/change-user-slot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          to_slot,
          to_date,
          user_slot
        })
      })
    }

    new Sortable(el1, {
      group: 'shared',
      animation: 150,
      ghostClass: 'bg-blue-100',
      onAdd: function (event) {
        if (event.to.dataset.id && event.from.dataset.id && event.item.dataset.id) {
          postChanges({
            to_slot: event.to.dataset.id,
            to_date: event.to.dataset.date,
            user_slot: event.item.dataset.id
          })
        }
      }
    })
    new Sortable(el2, {
      group: 'shared',
      animation: 150,
      ghostClass: 'bg-blue-100',
      onAdd: function (event) {
        if (event.to.dataset.id && event.from.dataset.id && event.item.dataset.id) {
          postChanges({
            to_slot: event.to.dataset.id,
            to_date: event.to.dataset.date,
            user_slot: event.item.dataset.id
          })
        }
      }
    })
  }
<\/script>`])), renderComponent($$result, "Layout", $$Layout, { "title": "Intercambio de miembros" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 lg:grid-cols-2 gap-4"> <div class="overflow-hidden bg-white shadow sm:rounded-lg"> <div class="flex justify-between px-4 py-6 sm:px-6"> <div class="gap-4"> <h3 class="text-base/7 font-semibold text-gray-900"> <span class="uppercase">${slot_date1.format("dddd[,] DD [de] MMMM [de] YYYY")}</span> </h3> <span class="text-gray-400">${data1["start_hour_text"]} - ${data1["end_hour_text"]}</span> </div> </div> <dl class="border-t border-gray-100"> <div class="px-4 py-6 grid sm:col-span-3 sm:px-6 gap-y-3"> <dt class="text-sm font-medium text-gray-900 uppercase">
Participantes (${data1.User_Slots.length}/${data1.size})
</dt> <dd class="text-sm/6 text-gray-700"> <div id="draggable1"${addAttribute(data1.id, "data-id")}${addAttribute(slot_date1.format("YYYY-MM-DD"), "data-date")} class="grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-20"> ${data1.User_Slots.map((user_slot1) => renderTemplate`<div${addAttribute(user_slot1.id, "data-id")} class="relative flex items-center space-x-3 rounded-lg shadow border border-gray-300 px-6 py-5 focus-within:ring-2 focus-within:ring-fuchsia-500 focus-within:ring-offset-2 hover:border-fuchsia-500"> <div class="shrink-0"> <span${addAttribute(
    "inline-flex size-10 items-center justify-center rounded-full " + (user_map.get(user_slot1.user_id)?.is_admin ? "bg-blue-300" : "bg-gray-500"),
    "class"
  )}> <span class="text-lg font-medium text-white"> ${user_map.get(user_slot1.user_id)?.["short_name"]} </span> </span> </div> <div class="min-w-0 flex-1"> <div class="focus:outline-none"> <span aria-hidden="true" class="absolute inset-0"></span> <p class="text-sm font-medium text-gray-900"> ${user_map.get(user_slot1.user_id)?.name} </p> </div> </div> </div>`)} </div> </dd> </div> </dl> </div> ${(!slot2 || !date2) && renderTemplate`<div class="bg-white shadow sm:rounded-lg"> <div class="flex justify-between px-4 py-6 sm:px-6"> <div class="gap-4"> <h3 class="text-base/7 font-semibold text-gray-900"> <span class="uppercase">Listado de clases</span> </h3> <span class="text-gray-400">
Selecciona una fecha para filtrar mostrar las clases disponibles
</span> </div> </div> <dl class="border-t border-gray-100"> ${renderComponent($$result2, "DatePickerFilter", null, { "slot1": slot1, "date1": date1, "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/DatePickerFilter", "client:component-export": "default" })} </dl> </div>`} ${slot2 && date2 && renderTemplate`<div class="overflow-hidden bg-white shadow sm:rounded-lg"> <div class="flex justify-between px-4 py-6 sm:px-6"> <div class="gap-4"> <h3 class="text-base/7 font-semibold text-gray-900"> <span class="uppercase">${slot_date2.format("dddd[,] DD [de] MMMM [de] YYYY")}</span> </h3> <span class="text-gray-400"> ${data2["start_hour_text"]} - ${data2["end_hour_text"]} </span> </div> </div> <dl class="border-t border-gray-100"> <div class="px-4 py-6 grid sm:col-span-3 sm:px-6 gap-y-3"> <dt class="text-sm font-medium text-gray-900 uppercase">
Participantes (${data2.User_Slots.length}/${data2.size})
</dt> <dd class="text-sm/6 text-gray-700"> <div id="draggable2"${addAttribute(data2.id, "data-id")}${addAttribute(slot_date2.format("YYYY-MM-DD"), "data-date")} class="grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-20"> ${data2.User_Slots.map((user_slot2) => renderTemplate`<div${addAttribute(user_slot2.id, "data-id")} class="relative flex items-center space-x-3 rounded-lg shadow border border-gray-300 px-6 py-5 focus-within:ring-2 focus-within:ring-fuchsia-500 focus-within:ring-offset-2 hover:border-fuchsia-500"> <div class="shrink-0"> <span${addAttribute(
    "inline-flex size-10 items-center justify-center rounded-full " + (user_map.get(user_slot2.user_id)?.is_admin ? "bg-blue-300" : "bg-gray-500"),
    "class"
  )}> <span class="text-lg font-medium text-white"> ${user_map.get(user_slot2.user_id)?.["short_name"]} </span> </span> </div> <div class="min-w-0 flex-1"> <div class="focus:outline-none"> <span aria-hidden="true" class="absolute inset-0"></span> <p class="text-sm font-medium text-gray-900"> ${user_map.get(user_slot2.user_id)?.name} </p> </div> </div> </div>`)} </div> </dd> </div> </dl> </div>`} </div> ` }));
}, "C:/Users/Alex/Documents/Astro/astro-calendar-main/src/pages/slots/swap.astro", void 0);

const $$file = "C:/Users/Alex/Documents/Astro/astro-calendar-main/src/pages/slots/swap.astro";
const $$url = "/slots/swap";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Swap,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
