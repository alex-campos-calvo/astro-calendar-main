/* empty css                                     */
import { c as createComponent, r as renderTemplate, e as renderComponent, d as createAstro } from '../chunks/astro/server_BSCH7m8o.mjs';
import moment from 'moment';
import 'moment/locale/es.js';
import { $ as $$Layout } from '../chunks/Layout_CZ90jdpJ.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { ChevronDoubleLeftIcon, ChevronLeftIcon, ChevronRightIcon, ChevronDoubleRightIcon } from '@heroicons/react/20/solid';
import { d as db, S as Slot, a as User_Slot } from '../chunks/_astro_db_O5c1qmJs.mjs';
import { eq, and, or } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../renderers.mjs';

function Event({ item }) {
  const row = Number(item.start) * 2;
  const end = Math.round(Number(item.end * 2));
  const column = "sm:col-start-" + String(item.week_day);
  const color = "bg-" + String(item.color) + "-50 hover:bg-" + String(item.color) + "-100";
  const size = String(item.size);
  const groupType = "G" + String(item.size);
  const participants = item.User_Slots?.length;
  const link = "/slots/" + String(item.id) + "?date=" + moment(item.User_Slots[0]?.date).format("YYYY-MM-DD");
  const start_hour = moment({
    hour: Math.floor(item.start_hour),
    minute: Math.floor(item.start_hour % 1 * 60)
  }).format("HH:mm");
  const end_hour = moment({
    hour: Math.floor(item.end_hour),
    minute: Math.floor(item.end_hour % 1 * 60)
  }).format("HH:mm");
  return /* @__PURE__ */ jsx(
    "li",
    {
      className: "relative mt-px " + (!item.today ? "hidden " : "") + "sm:flex " + column,
      style: { gridRow: row + " / span " + end, viewTransitionName: item.id },
      children: /* @__PURE__ */ jsx(
        "a",
        {
          href: link,
          className: "group absolute inset-1 flex flex-col overflow-hidden rounded-lg p-5 justify-between " + color,
          children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "2xl:flex", children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-md/1", children: /* @__PURE__ */ jsx("time", { children: start_hour }) }),
              /* @__PURE__ */ jsx("span", { className: "hidden 2xl:inline", children: "-" }),
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-md/1", children: /* @__PURE__ */ jsx("time", { children: end_hour }) })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-md/1 text-right", children: [
              participants,
              "/",
              size
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm/5", children: groupType })
          ] })
        }
      )
    }
  );
}

function WeeklyCalendar({ today, week_days, week_slots }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ jsxs("header", { className: "flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-base font-semibold text-gray-900", children: /* @__PURE__ */ jsx("time", { className: "uppercase", dateTime: today.date_name, children: today.day_name + " " + today.month_name + " " + today.year_name }) }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxs("div", { className: "relative flex items-center rounded-md bg-white shadow-sm md:items-stretch", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "/dashboard?date=" + today.previus_week_date,
            type: "button",
            className: "flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50",
            children: [
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Semana anterior" }),
              /* @__PURE__ */ jsx(ChevronDoubleLeftIcon, { className: "size-5", "aria-hidden": "true" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "/dashboard?date=" + today.previus_day_date,
            type: "button",
            className: "flex h-9 w-12 items-center justify-center border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50",
            children: [
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Dia anterior" }),
              /* @__PURE__ */ jsx(ChevronLeftIcon, { className: "size-5", "aria-hidden": "true" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/dashboard?date=" + today.today_date,
            type: "button",
            className: "flex h-9 w-12 items-center border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative ",
            children: /* @__PURE__ */ jsx("span", { children: "Hoy" })
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "/dashboard?date=" + today.next_day_date,
            type: "button",
            className: "flex h-9 w-12 items-center justify-center border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50",
            children: [
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Dia siguiente" }),
              /* @__PURE__ */ jsx(ChevronRightIcon, { className: "size-5", "aria-hidden": "true" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "/dashboard?date=" + today.next_week_date,
            type: "button",
            className: "flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50",
            children: [
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Semana siguiente" }),
              /* @__PURE__ */ jsx(ChevronDoubleRightIcon, { className: "size-5", "aria-hidden": "true" })
            ]
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "isolate flex flex-auto flex-col overflow-auto bg-white border-b border-gray-200", children: /* @__PURE__ */ jsxs(
      "div",
      {
        style: { width: "165%" },
        className: "flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "sticky top-0 z-30 flex-none bg-white shadow ring-1 ring-black/5 sm:pr-8", children: [
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-5 text-sm/6 text-gray-500 sm:hidden", children: week_days.map((day) => /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                className: "flex flex-col items-center pb-3 pt-2",
                children: [
                  day.short_name + " ",
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "mt-1 flex size-8 items-center justify-center font-semibold " + (day.today ? "rounded-full bg-gray-900 text-white" : "text-gray-900"),
                      children: day.number
                    }
                  )
                ]
              },
              day.name
            )) }),
            /* @__PURE__ */ jsxs("div", { className: "-mr-px hidden grid-cols-5 divide-x divide-gray-100 border-r border-gray-100 text-sm/6 text-gray-500 sm:grid", children: [
              /* @__PURE__ */ jsx("div", { className: "col-end-1 w-14" }),
              week_days.map((day) => /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center py-3 capitalize", children: /* @__PURE__ */ jsxs("span", { className: day.today ? "flex items-baseline" : "", children: [
                day.name + " ",
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "items-center justify-center font-semibold " + (day.today ? "ml-1.5 flex size-8 rounded-full bg-gray-900 text-white" : "text-gray-900"),
                    children: day.number
                  }
                )
              ] }) }, day.name))
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-auto", children: [
            /* @__PURE__ */ jsx("div", { className: "sticky left-0 z-10 w-14 flex-none bg-white ring-1 ring-gray-100" }),
            /* @__PURE__ */ jsxs("div", { className: "grid flex-auto grid-cols-1 grid-rows-1", children: [
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100",
                  style: { gridTemplateRows: "repeat(28, minmax(3.5rem, 1fr))" },
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "row-end-1 h-7" }),
                    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400", children: "8" }) }),
                    /* @__PURE__ */ jsx("div", {}),
                    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400", children: "9" }) }),
                    /* @__PURE__ */ jsx("div", {}),
                    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400", children: "10" }) }),
                    /* @__PURE__ */ jsx("div", {}),
                    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400", children: "11" }) }),
                    /* @__PURE__ */ jsx("div", {}),
                    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400", children: "12" }) }),
                    /* @__PURE__ */ jsx("div", {}),
                    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400", children: "13" }) }),
                    /* @__PURE__ */ jsx("div", {}),
                    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400", children: "14" }) }),
                    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400", children: "-" }) }),
                    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400", children: "16" }) }),
                    /* @__PURE__ */ jsx("div", {}),
                    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400", children: "17" }) }),
                    /* @__PURE__ */ jsx("div", {}),
                    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400", children: "18" }) }),
                    /* @__PURE__ */ jsx("div", {}),
                    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400", children: "19" }) }),
                    /* @__PURE__ */ jsx("div", {}),
                    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400", children: "20" }) }),
                    /* @__PURE__ */ jsx("div", {}),
                    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400", children: "21" }) }),
                    /* @__PURE__ */ jsx("div", {}),
                    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400", children: "22" }) }),
                    /* @__PURE__ */ jsx("div", {})
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "col-start-1 col-end-2 row-start-1 hidden grid-cols-5 grid-rows-1 divide-x divide-gray-100 sm:grid sm:grid-cols-5", children: [
                /* @__PURE__ */ jsx("div", { className: "col-start-1 row-span-full" }),
                /* @__PURE__ */ jsx("div", { className: "col-start-2 row-span-full" }),
                /* @__PURE__ */ jsx("div", { className: "col-start-3 row-span-full" }),
                /* @__PURE__ */ jsx("div", { className: "col-start-4 row-span-full" }),
                /* @__PURE__ */ jsx("div", { className: "col-start-5 row-span-full" }),
                /* @__PURE__ */ jsx("div", { className: "col-start-6 row-span-full w-8" })
              ] }),
              /* @__PURE__ */ jsx(
                "ol",
                {
                  className: "col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-5 sm:pr-8",
                  style: { gridTemplateRows: "1.75rem repeat(28, minmax(0, 1fr)) auto" },
                  children: week_slots.map((event) => /* @__PURE__ */ jsx(Event, { item: event }, event.id))
                }
              )
            ] })
          ] })
        ]
      }
    ) })
  ] });
}

const $$Astro = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const date = Astro2.url.searchParams.get("date");
  const current = date && moment(date, "YYYY-MM-DD", true).isValid() ? moment(date) : moment();
  const now = moment();
  const today = {
    date_name: current.format("YYYY-MM"),
    day_name: current.format("dddd[,] DD"),
    month_name: current.format("MMMM"),
    year_name: current.format("YYYY"),
    today_date: now.format("YYYY-MM-DD"),
    next_day_date: current.clone().add(1, "days").format("YYYY-MM-DD"),
    next_week_date: current.clone().add(7, "days").startOf("week").format("YYYY-MM-DD"),
    previus_day_date: current.clone().add(-1, "days").format("YYYY-MM-DD"),
    previus_week_date: current.clone().add(-7, "days").startOf("week").format("YYYY-MM-DD")
  };
  const { monday, tuesday, wednesday, thursday, friday } = {
    monday: current.clone().startOf("week"),
    tuesday: current.clone().startOf("week").add(1, "days"),
    wednesday: current.clone().startOf("week").add(2, "days"),
    thursday: current.clone().startOf("week").add(3, "days"),
    friday: current.clone().startOf("week").add(4, "days")
  };
  const week_days = [
    {
      name: monday.format("ddd"),
      short_name: monday.format("d"),
      number: monday.format("DD"),
      today: monday.isSame(now, "day")
    },
    {
      name: tuesday.format("ddd"),
      short_name: tuesday.format("d"),
      number: tuesday.format("DD"),
      today: tuesday.isSame(now, "day")
    },
    {
      name: wednesday.format("ddd"),
      short_name: wednesday.format("d"),
      number: wednesday.format("DD"),
      today: wednesday.isSame(now, "day")
    },
    {
      name: thursday.format("ddd"),
      short_name: thursday.format("d"),
      number: thursday.format("DD"),
      today: thursday.isSame(now, "day")
    },
    {
      name: friday.format("ddd"),
      short_name: friday.format("d"),
      number: friday.format("DD"),
      today: friday.isSame(now, "day")
    }
  ];
  const slots = await db.select().from(Slot).innerJoin(User_Slot, eq(User_Slot.slot_id, Slot.id)).where(
    and(
      eq(User_Slot.default, false),
      or(
        eq(User_Slot.date, monday.format("YYYY-MM-DD")),
        eq(User_Slot.date, tuesday.format("YYYY-MM-DD")),
        eq(User_Slot.date, wednesday.format("YYYY-MM-DD")),
        eq(User_Slot.date, thursday.format("YYYY-MM-DD")),
        eq(User_Slot.date, friday.format("YYYY-MM-DD"))
      )
    )
  ).all();
  const week_slots = [];
  slots?.forEach((item) => {
    const current_slot = week_slots.find((slot) => slot.id === item.Slot.id);
    if (!current_slot) {
      const s = {
        id: item.Slot.id,
        user_id: item.Slot.user_id,
        week_day: moment(item.User_Slot.date).weekday() + 1,
        start_hour: item.Slot.start_hour,
        end_hour: item.Slot.end_hour,
        size: item.Slot.size,
        start: Number(item.Slot.start_hour) - 7,
        end: Number(item.Slot.end_hour) - Number(item.Slot.start_hour),
        color: item.Slot.size > 1 ? "green" : "red",
        today: moment(item.User_Slot.date).isSame(current, "day"),
        User_Slots: [item.User_Slot]
      };
      week_slots.push(s);
    } else {
      current_slot.User_Slots.push(item.User_Slot);
      current_slot.color = item.Slot.size > current_slot.User_Slots.length ? "green" : "red";
    }
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Panel semanal" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "WeeklyCalendar", WeeklyCalendar, { "today": today, "week_days": week_days, "week_slots": week_slots, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/WeeklyCalendar", "client:component-export": "default" })} ` })}`;
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
