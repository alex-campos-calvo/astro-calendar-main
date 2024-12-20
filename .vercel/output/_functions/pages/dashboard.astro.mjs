/* empty css                                     */
import { c as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BKc9_Ao_.mjs';
import { $ as $$Layout } from '../chunks/Layout_CvgrcyAX.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Popover, PopoverButton, PopoverPanel, Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, EllipsisHorizontalIcon } from '@heroicons/react/20/solid';
import { CalendarDaysIcon, ChartPieIcon, SignalSlashIcon } from '@heroicons/react/24/outline';
import { useRef, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

const solutions = [
  {
    name: "Panel semanal",
    description: "Vista semanal de tu negocio",
    href: "/dashboard",
    icon: CalendarDaysIcon
  },
  {
    name: "Configurador de clases",
    description: "Configura las clases semanales disponibles para tus clientes",
    href: "/slots/configurator",
    icon: ChartPieIcon
  },
  {
    name: "Cerrar sesión",
    description: "Edit, manage and create newly informed decisions",
    href: "/auth/logout",
    icon: SignalSlashIcon,
    form: true
  }
];
function LinkButton(props) {
  if (!props.item) {
    return null;
  }
  if (props.item.form) {
    return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("form", { action: props.item.href, method: "POST", children: [
      /* @__PURE__ */ jsxs("button", { className: "font-semibold text-gray-900", children: [
        props.item.name,
        /* @__PURE__ */ jsx("span", { className: "absolute inset-0" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-gray-600", children: props.item.description })
    ] }) });
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("a", { href: props.item.href, className: "font-semibold text-gray-900", children: [
      props.item.name,
      /* @__PURE__ */ jsx("span", { className: "absolute inset-0" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-1 text-gray-600", children: props.item.description })
  ] });
}
function Header() {
  return /* @__PURE__ */ jsxs(Popover, { className: "relative", children: [
    /* @__PURE__ */ jsxs(PopoverButton, { className: "inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900", children: [
      /* @__PURE__ */ jsx("span", { children: "MOTION-LEON" }),
      /* @__PURE__ */ jsx(ChevronDownIcon, { "aria-hidden": "true", className: "size-5" })
    ] }),
    /* @__PURE__ */ jsx(
      PopoverPanel,
      {
        transition: true,
        className: "absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in",
        children: /* @__PURE__ */ jsx("div", { className: "w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-3xl", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2", children: solutions.map((item) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50",
            children: [
              /* @__PURE__ */ jsx("div", { className: "mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white", children: /* @__PURE__ */ jsx(
                item.icon,
                {
                  "aria-hidden": "true",
                  className: "size-6 text-gray-600 group-hover:text-indigo-600"
                }
              ) }),
              /* @__PURE__ */ jsx(LinkButton, { item })
            ]
          },
          item.name
        )) }) })
      }
    )
  ] });
}

function Event(props) {
  const row = Number(props.row) * 2;
  const column = "sm:col-start-" + String(props.column);
  const color = "bg-" + String(props.color) + "-50";
  const hoverColor = "hover:bg-" + String(props.color) + "-100";
  return /* @__PURE__ */ jsx(
    "li",
    {
      className: "relative mt-px hidden sm:flex " + column,
      style: { gridRow: row + " / span 2" },
      children: /* @__PURE__ */ jsxs(
        "a",
        {
          href: "#",
          className: "group absolute inset-1 flex flex-col overflow-y-auto rounded-lg " + color + " p-2 text-xs/5 " + hoverColor,
          children: [
            /* @__PURE__ */ jsx("p", { className: "order-1 font-semibold text-slate-700", children: "Fila: " + row / 2 + " | Columna: " + column[column.length - 1] }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-500 group-hover:text-slate-700", children: /* @__PURE__ */ jsx("time", { dateTime: "2022-01-12T06:00", children: "7:00 AM" }) })
          ]
        }
      )
    }
  );
}

const events = [
	{
		id: 1,
		row: "3",
		column: "1",
		color: "green"
	},
	{
		id: 2,
		row: "4",
		column: "1",
		color: "red"
	},
	{
		id: 3,
		row: "5",
		column: "1",
		color: "red"
	},
	{
		id: 4,
		row: "6",
		column: "1",
		color: "red"
	},
	{
		id: 5,
		row: "8",
		column: "1",
		color: "red"
	},
	{
		id: 6,
		row: "9",
		column: "1",
		color: "red"
	},
	{
		id: 7,
		row: "10",
		column: "1",
		color: "green"
	},
	{
		id: 8,
		row: "11",
		column: "1",
		color: "red"
	},
	{
		id: 9,
		row: "12",
		column: "1",
		color: "green"
	},
	{
		id: 10,
		row: "13",
		column: "1",
		color: "red"
	},
	{
		id: 13,
		row: "3",
		column: "2",
		color: "red"
	},
	{
		id: 14,
		row: "4",
		column: "2",
		color: "green"
	},
	{
		id: 15,
		row: "5",
		column: "2",
		color: "red"
	},
	{
		id: 16,
		row: "6",
		column: "2",
		color: "green"
	},
	{
		id: 17,
		row: "8",
		column: "2",
		color: "red"
	},
	{
		id: 18,
		row: "9",
		column: "2",
		color: "red"
	},
	{
		id: 19,
		row: "10",
		column: "2",
		color: "red"
	},
	{
		id: 20,
		row: "11",
		column: "2",
		color: "red"
	},
	{
		id: 21,
		row: "12",
		column: "2",
		color: "red"
	},
	{
		id: 22,
		row: "13",
		column: "2",
		color: "green"
	},
	{
		id: 23,
		row: "1",
		column: "3",
		color: "red"
	},
	{
		id: 24,
		row: "2",
		column: "3",
		color: "red"
	},
	{
		id: 25,
		row: "3",
		column: "3",
		color: "red"
	},
	{
		id: 26,
		row: "4",
		column: "3",
		color: "red"
	},
	{
		id: 27,
		row: "5",
		column: "3",
		color: "red"
	},
	{
		id: 28,
		row: "6",
		column: "3",
		color: "red"
	},
	{
		id: 29,
		row: "8",
		column: "3",
		color: "red"
	},
	{
		id: 30,
		row: "9",
		column: "3",
		color: "red"
	},
	{
		id: 31,
		row: "10",
		column: "3",
		color: "green"
	},
	{
		id: 32,
		row: "11",
		column: "3",
		color: "red"
	},
	{
		id: 33,
		row: "12",
		column: "3",
		color: "green"
	},
	{
		id: 34,
		row: "13",
		column: "3",
		color: "red"
	},
	{
		id: 35,
		row: "1",
		column: "4",
		color: "red"
	},
	{
		id: 36,
		row: "2",
		column: "4",
		color: "red"
	},
	{
		id: 37,
		row: "3",
		column: "4",
		color: "red"
	},
	{
		id: 38,
		row: "4",
		column: "4",
		color: "red"
	},
	{
		id: 39,
		row: "5",
		column: "4",
		color: "red"
	},
	{
		id: 40,
		row: "6",
		column: "4",
		color: "green"
	},
	{
		id: 41,
		row: "8",
		column: "4",
		color: "red"
	},
	{
		id: 42,
		row: "9",
		column: "4",
		color: "green"
	},
	{
		id: 43,
		row: "10",
		column: "4",
		color: "red"
	},
	{
		id: 44,
		row: "11",
		column: "4",
		color: "red"
	},
	{
		id: 45,
		row: "12",
		column: "4",
		color: "red"
	},
	{
		id: 46,
		row: "13",
		column: "4",
		color: "red"
	},
	{
		id: 47,
		row: "1",
		column: "5",
		color: "red"
	},
	{
		id: 48,
		row: "2",
		column: "5",
		color: "red"
	},
	{
		id: 49,
		row: "3",
		column: "5",
		color: "green"
	},
	{
		id: 50,
		row: "4",
		column: "5",
		color: "red"
	},
	{
		id: 51,
		row: "5",
		column: "5",
		color: "red"
	},
	{
		id: 52,
		row: "6",
		column: "5",
		color: "red"
	},
	{
		id: 53,
		row: "8",
		column: "5",
		color: "red"
	},
	{
		id: 54,
		row: "9",
		column: "5",
		color: "red"
	},
	{
		id: 55,
		row: "10",
		column: "5",
		color: "green"
	},
	{
		id: 56,
		row: "11",
		column: "5",
		color: "red"
	}
];

function WeeklyCalendar(props) {
  const container = useRef(null);
  const containerNav = useRef(null);
  const containerOffset = useRef(null);
  useEffect(() => {
    const currentMinute = (/* @__PURE__ */ new Date()).getHours() * 60;
    container.current.scrollTop = (container.current.scrollHeight - containerNav.current.offsetHeight - containerOffset.current.offsetHeight) * currentMinute / 1440;
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col", children: [
    /* @__PURE__ */ jsxs("header", { className: "flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-base font-semibold text-gray-900", children: /* @__PURE__ */ jsx("time", { dateTime: "2022-01", children: "Diciembre 2024" }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative flex items-center rounded-md bg-white shadow-sm md:items-stretch", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              className: "flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50",
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Semana anterior" }),
                /* @__PURE__ */ jsx(ChevronLeftIcon, { className: "size-5", "aria-hidden": "true" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block",
              children: "Hoy"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "relative -mx-px h-5 w-px bg-gray-300 md:hidden" }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              className: "flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50",
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Semana siguiente" }),
                /* @__PURE__ */ jsx(ChevronRightIcon, { className: "size-5", "aria-hidden": "true" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(Menu, { as: "div", className: "relative ml-6 md:hidden", children: [
          /* @__PURE__ */ jsxs(MenuButton, { className: "-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500", children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Abrir menú" }),
            /* @__PURE__ */ jsx(EllipsisHorizontalIcon, { className: "size-5", "aria-hidden": "true" })
          ] }),
          /* @__PURE__ */ jsx(
            MenuItems,
            {
              transition: true,
              className: "absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in",
              children: /* @__PURE__ */ jsx("div", { className: "py-1", children: /* @__PURE__ */ jsx(MenuItem, { children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: "#",
                  className: "block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none",
                  children: "Hoy"
                }
              ) }) })
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: container,
        className: "isolate flex flex-auto flex-col overflow-auto bg-white border-b border-gray-200",
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            style: { width: "165%" },
            className: "flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full",
            children: [
              /* @__PURE__ */ jsxs(
                "div",
                {
                  ref: containerNav,
                  className: "sticky top-0 z-30 flex-none bg-white shadow ring-1 ring-black/5 sm:pr-8",
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-5 text-sm/6 text-gray-500 sm:hidden", children: [
                      /* @__PURE__ */ jsxs("button", { type: "button", className: "flex flex-col items-center pb-3 pt-2", children: [
                        "L",
                        " ",
                        /* @__PURE__ */ jsx("span", { className: "mt-1 flex size-8 items-center justify-center font-semibold text-gray-900", children: "10" })
                      ] }),
                      /* @__PURE__ */ jsxs("button", { type: "button", className: "flex flex-col items-center pb-3 pt-2", children: [
                        "M",
                        " ",
                        /* @__PURE__ */ jsx("span", { className: "mt-1 flex size-8 items-center justify-center font-semibold text-gray-900", children: "11" })
                      ] }),
                      /* @__PURE__ */ jsxs("button", { type: "button", className: "flex flex-col items-center pb-3 pt-2", children: [
                        "M",
                        " ",
                        /* @__PURE__ */ jsx("span", { className: "mt-1 flex size-8 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white", children: "12" })
                      ] }),
                      /* @__PURE__ */ jsxs("button", { type: "button", className: "flex flex-col items-center pb-3 pt-2", children: [
                        "J",
                        " ",
                        /* @__PURE__ */ jsx("span", { className: "mt-1 flex size-8 items-center justify-center font-semibold text-gray-900", children: "13" })
                      ] }),
                      /* @__PURE__ */ jsxs("button", { type: "button", className: "flex flex-col items-center pb-3 pt-2", children: [
                        "V",
                        " ",
                        /* @__PURE__ */ jsx("span", { className: "mt-1 flex size-8 items-center justify-center font-semibold text-gray-900", children: "14" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "-mr-px hidden grid-cols-5 divide-x divide-gray-100 border-r border-gray-100 text-sm/6 text-gray-500 sm:grid", children: [
                      /* @__PURE__ */ jsx("div", { className: "col-end-1 w-14" }),
                      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center py-3", children: /* @__PURE__ */ jsxs("span", { children: [
                        "Lun",
                        " ",
                        /* @__PURE__ */ jsx("span", { className: "items-center justify-center font-semibold text-gray-900", children: "10" })
                      ] }) }),
                      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center py-3", children: /* @__PURE__ */ jsxs("span", { children: [
                        "Mar",
                        " ",
                        /* @__PURE__ */ jsx("span", { className: "items-center justify-center font-semibold text-gray-900", children: "11" })
                      ] }) }),
                      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center py-3", children: /* @__PURE__ */ jsxs("span", { className: "flex items-baseline", children: [
                        "Mier",
                        " ",
                        /* @__PURE__ */ jsx("span", { className: "ml-1.5 flex size-8 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white", children: "12" })
                      ] }) }),
                      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center py-3", children: /* @__PURE__ */ jsxs("span", { children: [
                        "Jue",
                        " ",
                        /* @__PURE__ */ jsx("span", { className: "items-center justify-center font-semibold text-gray-900", children: "13" })
                      ] }) }),
                      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center py-3", children: /* @__PURE__ */ jsxs("span", { children: [
                        "Vie",
                        " ",
                        /* @__PURE__ */ jsx("span", { className: "items-center justify-center font-semibold text-gray-900", children: "14" })
                      ] }) })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-auto", children: [
                /* @__PURE__ */ jsx("div", { className: "sticky left-0 z-10 w-14 flex-none bg-white ring-1 ring-gray-100" }),
                /* @__PURE__ */ jsxs("div", { className: "grid flex-auto grid-cols-1 grid-rows-1", children: [
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100",
                      style: { gridTemplateRows: "repeat(28, minmax(3.5rem, 1fr))" },
                      children: [
                        /* @__PURE__ */ jsx("div", { ref: containerOffset, className: "row-end-1 h-7" }),
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
                      children: events.map((event) => /* @__PURE__ */ jsx(Event, { row: event.row, column: event.column, color: event.color }, event.id))
                    }
                  )
                ] })
              ] })
            ]
          }
        )
      }
    )
  ] });
}

const $$Dashboard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Panel semanal" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-center"> <div class="my-5"> ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Header", "client:component-export": "default" })} </div> <div class="w-11/12 mb-10"> ${renderComponent($$result2, "WeeklyCalendar", WeeklyCalendar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/WeeklyCalendar", "client:component-export": "default" })} </div> </div> ` })}`;
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
