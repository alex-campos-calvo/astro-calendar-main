import { useEffect, useState } from 'react'
import { Datepicker } from 'flowbite-react'
import moment from 'moment'
import 'moment/locale/es'

export default function SwapSlotDatePicker({ slot1, date1 }) {
  const [date, setDate] = useState('')
  const [slots, setSlots] = useState({})

  useEffect(() => {
    const fetchSlots = async () => {
      const response = await fetch('/slots/api/find-slots', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          date: date,
          slot_id: slot1
        })
      })

      if (response.ok) {
        setSlots(await response.json())
      } else {
        console.error(response)
      }
    }

    if (date) {
      fetchSlots()
    }
  }, [date])

  return (
    <nav aria-label="Directory">
      <div className="flex z-10 border border-black sm:rounded-b-lg bg-gray-50 px-3 py-1.5 text-sm/6 font-semibold text-gray-900">
        <Datepicker
          id="date-selector"
          weekStart={1}
          minDate={moment().toDate()}
          language="es"
          placeholder="Selecciona una fecha"
          showTodayButton={false}
          showClearButton={false}
          onChange={(e) => {
            setDate(moment(e).format('YYYY-MM-DD'))
          }}
        ></Datepicker>
      </div>
      <ul
        role="list"
        className="mx-5 mt-2 p-2 grid grid-cols-1 gap-y-2 border border-black bg-gray-50 rounded-md shadow"
      >
        {slots &&
          Object.keys(slots).length > 0 &&
          Object.keys(slots).map((date) =>
            slots[date].map((clase) => (
              <li key={clase.id} className="p-2 bg-white border border-black rounded-md">
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
                >
                  <span className="flex gap-x-2 mb-2">
                    <p
                      className={
                        'px-2 font-semibold text-sm rounded border border-' + clase.color + '-500'
                      }
                    >
                      {clase.User_Slots?.length + '/' + clase.size}
                    </p>
                    <p className="text-sm font-semibold">
                      {clase.start_hour_text + ' - ' + clase.end_hour_text}
                    </p>
                  </span>
                  <span className="flex">
                    <p className="uppercase truncate text-sm text-gray-500">{clase.date_text}</p>
                  </span>
                </a>
              </li>
            ))
          )}
        {(!slots || Object.keys(slots).length === 0) && (
          <li className="flex justify-between gap-x-6 p-2">
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
