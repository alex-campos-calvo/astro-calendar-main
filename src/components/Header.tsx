'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel
} from '@headlessui/react'
import {
  AdjustmentsHorizontalIcon,
  Bars3Icon,
  ChartPieIcon,
  CalendarDaysIcon,
  ArrowRightStartOnRectangleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const items = {
  links: [
    {
      name: 'Panel semanal',
      description: 'Vista semanal de tu negocio',
      href: '/dashboard',
      icon: CalendarDaysIcon
    },
    {
      name: 'Configurador de clases',
      description: 'Configura las clases semanales disponibles para tus clientes',
      href: '/slots/configurator',
      icon: ChartPieIcon
    }
  ],
  buttons: {
    logout: {
      name: 'Cerrar sesión',
      description: 'Edit, manage and create newly informed decisions',
      href: '/auth/logout',
      icon: ArrowRightStartOnRectangleIcon,
      form: true
    }
  }
}

function Link(props) {
  if (!props.item) {
    return null
  }

  if (!props.item.form) {
    return (
      <div>
        <a href={props.item.href} className="font-semibold text-gray-900">
          {props.item.name}
        </a>
        <p className="mt-1 text-gray-600">{props.item.description}</p>
      </div>
    )
  }
  return null
}

function LogoutButton(props) {
  if (!props.item) {
    return null
  }

  if (props.item.form) {
    return (
      <div>
        <form action={props.item.href} method="POST">
          <button className="font-semibold text-gray-900">
            <div className="inline-flex items-center gap-x-1">
              <props.item.icon
                aria-hidden="true"
                className="size-6 text-gray-600 group-hover:text-indigo-600"
              />
              <span>{props.item.name}</span>
            </div>
          </button>
        </form>
      </div>
    )
  }
  return null
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="relative isolate z-10 bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">MOTION-LEON</span>
            <img alt="" src="/img/logo_inverted.webp" className="h-8 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Abrir paneles</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover>
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              <div className="inline-flex items-center gap-x-1">
                <AdjustmentsHorizontalIcon
                  aria-hidden="true"
                  className="size-6 text-gray-600 group-hover:text-indigo-600"
                />
                <span>PANELES</span>
              </div>
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                {items.links.map((item) => (
                  <div
                    key={item.name}
                    className="group relative rounded-lg p-6 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <Link item={item} />
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <LogoutButton item={items.buttons.logout} />
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">MOTION-LEON</span>
              <img alt="" src="/img/logo_inverted.webp" className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Cerrar</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    <div className="inline-flex items-center gap-x-1">
                      <AdjustmentsHorizontalIcon
                        aria-hidden="true"
                        className="size-6 text-gray-600 group-hover:text-indigo-600"
                      />
                      <span>PANELES</span>
                    </div>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {items.links.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              </div>
              <div className="py-6">
                <LogoutButton item={items.buttons.logout} />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

/*import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { CalendarDaysIcon, ChartPieIcon, SignalSlashIcon } from '@heroicons/react/24/outline'

const solutions = [
  {
    name: 'Panel semanal',
    description: 'Vista semanal de tu negocio',
    href: '/dashboard',
    icon: CalendarDaysIcon
  },
  {
    name: 'Configurador de clases',
    description: 'Configura las clases semanales disponibles para tus clientes',
    href: '/slots/configurator',
    icon: ChartPieIcon
  },
  {
    name: 'Cerrar sesión',
    description: 'Edit, manage and create newly informed decisions',
    href: '/auth/logout',
    icon: SignalSlashIcon,
    form: true
  }
]

function LinkButton(props) {
  if (!props.item) {
    return null
  }

  if (props.item.form) {
    return (
      <div>
        <form action={props.item.href} method="POST">
          <button className="font-semibold text-gray-900">
            {props.item.name}
            <span className="absolute inset-0" />
          </button>
          <p className="mt-1 text-gray-600">{props.item.description}</p>
        </form>
      </div>
    )
  }
  return (
    <div>
      <a href={props.item.href} className="font-semibold text-gray-900">
        {props.item.name}
        <span className="absolute inset-0" />
      </a>
      <p className="mt-1 text-gray-600">{props.item.description}</p>
    </div>
  )
}

export default function Header() {
  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
        <span>MOTION-LEON</span>
        <ChevronDownIcon aria-hidden="true" className="size-5" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-3xl">
          <div className="grid grid-cols-1 gap-x-6 gap-y-1 p-4 lg:grid-cols-2">
            {solutions.map((item) => (
              <div
                key={item.name}
                className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
              >
                <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <item.icon
                    aria-hidden="true"
                    className="size-6 text-gray-600 group-hover:text-indigo-600"
                  />
                </div>
                <LinkButton item={item} />
              </div>
            ))}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  )
}*/
