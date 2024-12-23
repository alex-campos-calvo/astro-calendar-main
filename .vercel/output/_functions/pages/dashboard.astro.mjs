/* empty css                                     */
import { c as createComponent, r as renderTemplate, e as renderComponent } from '../chunks/astro/server_vUHW0twu.mjs';
import moment from 'moment';
import 'moment/locale/es.js';
import { $ as $$Layout } from '../chunks/Layout_Ci6fmJw0.mjs';
import { d as db, S as Slot, a as User_Slot } from '../chunks/_astro_db_DexOsEvT.mjs';
import { and, eq, between } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../renderers.mjs';

const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const current = moment();
  const monday = current.clone().startOf("week");
  const friday = monday.clone().add(4, "days");
  const week_slots_from_slot = await db.select().from(Slot).innerJoin(
    User_Slot,
    and(
      eq(User_Slot.slot_id, Slot.id),
      eq(User_Slot.default, false),
      between(User_Slot.date, monday.toDate(), friday.toDate())
    )
  ).all();
  console.log(week_slots_from_slot);
  const week_slots_from_user_slot = await db.select().from(User_Slot).fullJoin(
    Slot,
    and(
      eq(User_Slot.slot_id, Slot.id),
      eq(User_Slot.default, false),
      between(User_Slot.date, monday.toDate(), friday.toDate())
    )
  ).all();
  console.log(week_slots_from_user_slot);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Panel semanal" }, { "default": ($$result2) => renderTemplate`  ` })}`;
}, "C:/Users/Alex/Documents/Astro/astro-calendar-main/src/pages/dashboard.astro", void 0);

const $$file = "C:/Users/Alex/Documents/Astro/astro-calendar-main/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
