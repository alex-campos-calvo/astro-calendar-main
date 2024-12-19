import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,
  FingerPrintIcon,
  SquaresPlusIcon
} from '@heroicons/react/24/outline'

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of your traffic',
    href: '#',
    icon: ChartPieIcon
  },
  {
    name: 'Integrations',
    description: 'Connect with third-party tools and find out expectations',
    href: '#',
    icon: SquaresPlusIcon
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers with our engagement tool',
    href: '#',
    icon: CursorArrowRaysIcon
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will convert',
    href: '#',
    icon: ArrowPathIcon
  },
  {
    name: 'Security',
    description: "Your customers' data will be safe and secure",
    href: '#',
    icon: FingerPrintIcon
  },
  {
    name: 'Reports',
    description: 'Edit, manage and create newly informed decisions',
    href: '#',
    icon: DocumentChartBarIcon
  }
]

export default function Header() {
  return (
    <Popover className="relative">
      <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
        <span>MOTION-LEON</span>
        <ChevronDownIcon aria-hidden="true" className="size-5" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="w-56 shrink rounded-xl bg-white p-4 text-sm/6 font-semibold text-gray-900 shadow-lg ring-1 ring-gray-900/5">
          {solutions.map((item) => (
            <a key={item.name} href={item.href} className="block p-2 hover:text-indigo-600">
              {item.name}
            </a>
          ))}
        </div>
      </PopoverPanel>
    </Popover>
  )
}
