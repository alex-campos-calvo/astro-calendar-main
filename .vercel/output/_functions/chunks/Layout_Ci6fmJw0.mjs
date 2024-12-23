import { c as createComponent, r as renderTemplate, a as addAttribute, e as renderComponent, f as renderHead, g as renderSlot, d as createAstro } from './astro/server_vUHW0twu.mjs';
/* empty css                             */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { PopoverGroup, Popover, PopoverButton, PopoverPanel, Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, AdjustmentsHorizontalIcon, XMarkIcon, CalendarDaysIcon, ChartPieIcon, UserGroupIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { $ as $$ClientRouter } from './ClientRouter_VHxCPBSV.mjs';

const items = {
  links: [
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
      name: "Listado de miembros",
      description: "Consulta y modifica los datos tus clientes",
      href: "/slots/members",
      icon: UserGroupIcon
    }
  ],
  buttons: {
    logout: {
      name: "Cerrar sesión",
      description: "Edit, manage and create newly informed decisions",
      href: "/auth/logout",
      icon: ArrowRightStartOnRectangleIcon,
      form: true
    }
  }
};
function Link(props) {
  if (!props.item) {
    return null;
  }
  if (!props.item.form) {
    return /* @__PURE__ */ jsx(
      "a",
      {
        href: props.item.href,
        className: "group relative rounded-lg p-6 text-sm/6 hover:bg-gray-50",
        children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-x-2", children: [
          /* @__PURE__ */ jsx("div", { className: "flex size-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white", children: /* @__PURE__ */ jsx(props.item.icon, { "aria-hidden": "true", className: "size-6 text-gray-60" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-gray-900", children: props.item.name })
        ] })
      }
    );
  }
  return null;
}
function LogoutButton(props) {
  if (!props.item) {
    return null;
  }
  if (props.item.form) {
    return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("form", { action: props.item.href, method: "POST", children: /* @__PURE__ */ jsx("button", { className: "font-semibold text-gray-900", children: /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-x-1", children: [
      /* @__PURE__ */ jsx(props.item.icon, { "aria-hidden": "true", className: "size-6 text-gray-600" }),
      /* @__PURE__ */ jsx("span", { children: props.item.name })
    ] }) }) }) });
  }
  return null;
}
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return /* @__PURE__ */ jsxs("header", { className: "relative isolate z-10 bg-white", children: [
    /* @__PURE__ */ jsxs(
      "nav",
      {
        "aria-label": "Global",
        className: "mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8",
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex lg:flex-1", children: /* @__PURE__ */ jsxs("a", { href: "/dashboard", className: "-m-1.5 p-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "MOTION-LEON" }),
            /* @__PURE__ */ jsx("img", { alt: "", src: "/img/logo_inverted.webp", className: "h-8 w-auto" })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "flex lg:hidden", children: /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: () => setMobileMenuOpen(true),
              className: "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Abrir paneles" }),
                /* @__PURE__ */ jsx(Bars3Icon, { "aria-hidden": "true", className: "size-6" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(PopoverGroup, { className: "hidden lg:flex lg:gap-x-12", children: /* @__PURE__ */ jsxs(Popover, { children: [
            /* @__PURE__ */ jsxs(PopoverButton, { className: "flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900", children: [
              /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-x-1", children: [
                /* @__PURE__ */ jsx(
                  AdjustmentsHorizontalIcon,
                  {
                    "aria-hidden": "true",
                    className: "size-6 text-gray-600 group-hover:text-indigo-600"
                  }
                ),
                /* @__PURE__ */ jsx("span", { children: "PANELES" })
              ] }),
              /* @__PURE__ */ jsx(ChevronDownIcon, { "aria-hidden": "true", className: "size-5 flex-none text-gray-400" })
            ] }),
            /* @__PURE__ */ jsx(
              PopoverPanel,
              {
                transition: true,
                className: "absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in",
                children: /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8", children: items.links.map((item) => /* @__PURE__ */ jsx(Link, { item }, item.name)) })
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "hidden lg:flex lg:flex-1 lg:justify-end", children: /* @__PURE__ */ jsx(LogoutButton, { item: items.buttons.logout }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(Dialog, { open: mobileMenuOpen, onClose: setMobileMenuOpen, className: "lg:hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-10" }),
      /* @__PURE__ */ jsxs(DialogPanel, { className: "fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("a", { href: "#", className: "-m-1.5 p-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "MOTION-LEON" }),
            /* @__PURE__ */ jsx("img", { alt: "", src: "/img/logo_inverted.webp", className: "h-8 w-auto" })
          ] }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: () => setMobileMenuOpen(false),
              className: "-m-2.5 rounded-md p-2.5 text-gray-700",
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Cerrar" }),
                /* @__PURE__ */ jsx(XMarkIcon, { "aria-hidden": "true", className: "size-6" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flow-root", children: /* @__PURE__ */ jsxs("div", { className: "-my-6 divide-y divide-gray-500/10", children: [
          /* @__PURE__ */ jsx("div", { className: "space-y-2 py-6", children: /* @__PURE__ */ jsxs(Disclosure, { as: "div", className: "-mx-3", children: [
            /* @__PURE__ */ jsxs(DisclosureButton, { className: "group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50", children: [
              /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-x-1", children: [
                /* @__PURE__ */ jsx(
                  AdjustmentsHorizontalIcon,
                  {
                    "aria-hidden": "true",
                    className: "size-6 text-gray-600 group-hover:text-indigo-600"
                  }
                ),
                /* @__PURE__ */ jsx("span", { children: "PANELES" })
              ] }),
              /* @__PURE__ */ jsx(
                ChevronDownIcon,
                {
                  "aria-hidden": "true",
                  className: "size-5 flex-none group-data-[open]:rotate-180"
                }
              )
            ] }),
            /* @__PURE__ */ jsx(DisclosurePanel, { className: "mt-2 space-y-2", children: items.links.map((item) => /* @__PURE__ */ jsx(
              DisclosureButton,
              {
                as: "a",
                href: item.href,
                className: "block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50",
                children: item.name
              },
              item.name
            )) })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "py-6", children: /* @__PURE__ */ jsx(LogoutButton, { item: items.buttons.logout }) })
        ] }) })
      ] })
    ] })
  ] });
}

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const title = Astro2.props.title || "Motion Leon";
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title><meta name="title" content="MOTION-LEON"><meta name="description" content="Motion Leon - salud y movimiento">${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Header", "client:component-export": "default" })} <article> <div class="flex flex-col items-center justify-center my-5"> <div class="w-11/12"> ${renderSlot($$result, $$slots["default"])} </div> </div> </article> </body></html>`;
}, "C:/Users/Alex/Documents/Astro/astro-calendar-main/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
