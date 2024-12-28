import type { ClaseByDate } from '@/lib/types/bbdd'
import { useEffect, useState } from 'react'
import { Datepicker } from 'flowbite-react'
import moment from 'moment'
import 'moment/locale/es'

export default function DatePickerFilter({ slot1, date1 }) {
  const [date, setDate] = useState('')
  const [slots, setSlots] = useState({})

  let data: ClaseByDate = {}
  useEffect(() => {
    const fetchSlots = async () => {
      const response = await fetch('/slots/api/find-slots', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          dates: [date]
        })
      })
      data = await response.json()
      setSlots(data)
    }

    if (date) {
      fetchSlots()
    }
  }, [date])

  return (
    <nav aria-label="Directory">
      <div className="flex top-0 z-10 border-y border-b-gray-200 border-t-gray-100 bg-gray-50 px-3 py-1.5 text-sm/6 font-semibold text-gray-900">
        <Datepicker
          id="date-selector"
          weekStart={1}
          minDate={moment(date1).add(1, 'days').toDate()}
          language="es"
          placeholder="Selecciona una fecha"
          showTodayButton={false}
          showClearButton={false}
          onChange={(e) => {
            setDate(moment(e).format('YYYY-MM-DD'))
          }}
        ></Datepicker>
        <button
          className="mx-2 content-center bg-transparent font-semibold px-4 border border-gray-300 hover:border-fuchsia-500 rounded shadow"
          id="prueba"
        >
          Filtrar
        </button>
      </div>
      <ul role="list" className="mx-5 divide-y divide-gray-100">
        {slots &&
          Object.keys(slots).length > 0 &&
          Object.keys(slots).map((date) =>
            slots[date].map((clase) => (
              <li key={clase.id} className="flex justify-between gap-x-6 py-5">
                <a
                  href={
                    '/slots/swap?slot1=' +
                    slot1 +
                    '&date1=' +
                    date1 +
                    '&slot2=' +
                    clase.id +
                    '&date2=' +
                    clase.date
                  }
                  className="flex justify-between w-full"
                >
                  <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                      <p className="uppercase text-sm/6 font-semibold">{clase.date_text}</p>
                      <p className="mt-1 truncate text-xs/5 text-gray-500">
                        {clase.start_hour_text + ' - ' + clase.end_hour_text}
                      </p>
                    </div>
                  </div>
                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm/6">{clase.User_Slots?.length + '/' + clase.size}</p>
                  </div>
                </a>
              </li>
            ))
          )}
        {(!slots || Object.keys(slots).length === 0) && (
          <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="uppercase text-sm/6 font-semibold">No hay clases disponibles</p>
              </div>
            </div>
          </li>
        )}
      </ul>
    </nav>
  )
}
