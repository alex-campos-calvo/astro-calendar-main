import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid'

export default function Member({ user }) {
  // Función para determinar el color de fondo según el nivel
  const getBackgroundColor = (level) => {
    switch (level) {
      case 'Principiante':
        return 'bg-green-100'
      case 'Intermedio':
        return 'bg-yellow-100'
      case 'Avanzado':
        return 'bg-red-100'
      case 'Novato':
        return 'bg-blue-100'
      default:
        return 'bg-white'
    }
  }

  return (
    <div
      key={user.id}
      className={`relative flex items-center space-x-3 rounded-lg border border-gray-300 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400 ${getBackgroundColor(user.level)}`}
    >
      <div className="shrink-0">
        <img alt={user.name} src={user.image} className="size-10 rounded-full" />
      </div>
      <div className="min-w-0 flex-1">
        <a href="#" className="focus:outline-none">
          <span aria-hidden="true" className="absolute inset-0" />
          <p className="text-sm font-medium text-gray-900">{user.name}</p>
        </a>
      </div>
      <Menu as="div" className="relative ml-auto">
        <MenuButton className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
          <span className="sr-only">Abrir Opciones</span>
          <EllipsisHorizontalIcon aria-hidden="true" className="size-5" />
        </MenuButton>
        <MenuItems
          transition
          className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <MenuItem>
            <a
              href="#"
              className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
            >
              Cambiar Clase<span className="sr-only">, {user.name}</span>
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
            >
              Editar Datos<span className="sr-only">, {user.name}</span>
            </a>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  )
}
