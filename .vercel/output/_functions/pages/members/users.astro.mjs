/* empty css                                        */
import { c as createComponent, r as renderTemplate, e as renderComponent } from '../../chunks/astro/server_BSCH7m8o.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CZ90jdpJ.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid';
import { UserIcon } from '@heroicons/react/24/solid';
import { d as db, U as User } from '../../chunks/_astro_db_O5c1qmJs.mjs';
import { desc } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../renderers.mjs';

function Example({ users }) {
  return /* @__PURE__ */ jsx("ul", { role: "list", className: "grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8", children: users.map((person) => /* @__PURE__ */ jsx("li", { className: "overflow-visible rounded-xl border border-gray-200", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6", children: [
    /* @__PURE__ */ jsx(UserIcon, { className: "size-12 p-2 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10" }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 truncate", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
        /* @__PURE__ */ jsx("h3", { className: "truncate text-sm font-medium text-gray-900", children: person.name }),
        person.is_admin ? /* @__PURE__ */ jsx("span", { className: "inline-flex shrink-0 items-center rounded-full bg-blue-50 px-1.5 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20", children: "Profesor" }) : /* @__PURE__ */ jsx("span", { className: "inline-flex shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20", children: "Miembro" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 truncate text-sm text-gray-500", children: person.email })
    ] }),
    /* @__PURE__ */ jsxs(Menu, { as: "div", className: "relative ml-auto", children: [
      /* @__PURE__ */ jsxs(MenuButton, { className: "-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500", children: [
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open options" }),
        /* @__PURE__ */ jsx(EllipsisHorizontalIcon, { "aria-hidden": "true", className: "size-5" })
      ] }),
      /* @__PURE__ */ jsxs(
        MenuItems,
        {
          transition: true,
          className: "absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in",
          children: [
            /* @__PURE__ */ jsx(MenuItem, { children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: "/slots/members/" + person.id,
                className: "block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none",
                children: [
                  "View",
                  /* @__PURE__ */ jsx("span", { className: "sr-only", children: "View" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx(MenuItem, { children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: "#",
                className: "block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none",
                children: [
                  "Edit",
                  /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Edit" })
                ]
              }
            ) })
          ]
        }
      )
    ] })
  ] }) }, person.id)) });
}

const $$Users = createComponent(async ($$result, $$props, $$slots) => {
  const people = await db.select({
    id: User.id,
    name: User.name
  }).from(User).orderBy(desc(User.is_admin)).all();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Listado de miembros" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Members", Example, { "users": people, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Members", "client:component-export": "default" })} ` })}`;
}, "C:/Users/Alex/Documents/Astro/astro-calendar-main/src/pages/members/users.astro", void 0);

const $$file = "C:/Users/Alex/Documents/Astro/astro-calendar-main/src/pages/members/users.astro";
const $$url = "/members/users";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Users,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
