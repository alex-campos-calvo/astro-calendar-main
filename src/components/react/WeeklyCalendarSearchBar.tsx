'use client'

import { useEffect, useState, type Dispatch, type SetStateAction } from 'react'
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import type { Usuario } from '@/lib/types/bbdd'

export default function WeeklyCalendarSearchBar() {
  const [name, setName] = useState('')
  const [users, setUsers]: [Usuario[], Dispatch<SetStateAction<never[]>>] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/members/api/find-members', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name
        })
      })

      if (response.ok) {
        setUsers(await response.json())
      } else {
        console.error(response)
      }
    }

    if (name && name.length > 2) {
      fetchUsers()
    }
  }, [name])

  return (
    <Combobox
      as="div"
      onChange={(e) => {
        if (e) {
          window.location.href = '/members/' + e
        }
      }}
    >
      <div className="relative mb-2 mx-2 sm:mb-0">
        <ComboboxInput
          className="block w-full rounded-md bg-white py-1.5 text-sm border border-black placeholder:text-gray-400"
          onChange={(event) => {
            setName(event.target.value)
          }}
          displayValue={(user: Usuario) => {
            return user?.name
          }}
          placeholder="Buscar miembro..."
        />

        {users && users.length > 0 && (
          <ComboboxOptions className="absolute font-semibold z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden sm:text-sm">
            {users.map((user) => (
              <ComboboxOption
                key={user.id}
                value={user.id}
                className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
              >
                <p className="truncate uppercase">{user.name}</p>
                <p className="truncate text-sm text-gray-500">{user.description}</p>

                <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-focus:text-white group-data-selected:flex">
                  <CheckIcon className="size-5" aria-hidden="true" />
                </span>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        )}
      </div>
    </Combobox>
  )
}
