import { useEffect, useState } from 'react'
import { Datepicker, type CustomFlowbiteTheme } from 'flowbite-react'
import moment from 'moment'
import 'moment/locale/es'

const datePickerTheme: CustomFlowbiteTheme['datepicker'] = {
  root: {
    base: 'relative'
  },
  popup: {
    root: {
      base: 'absolute top-10 z-50 block pt-2',
      inline: 'relative top-0 z-auto',
      inner: 'inline-block border border-black rounded-lg bg-white p-4 shadow-lg'
    },
    header: {
      base: '',
      title: 'px-2 py-3 text-center font-semibold text-gray-900',
      selectors: {
        base: 'mb-2 flex justify-between',
        button: {
          base: 'rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200',
          prev: '',
          next: '',
          view: ''
        }
      }
    },
    view: {
      base: 'p-1'
    },
    footer: {
      base: 'mt-2 flex space-x-2',
      button: {
        base: 'w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-cyan-300',
        today: 'bg-cyan-700 text-white hover:bg-cyan-800',
        clear: 'border border-gray-300 bg-white text-gray-900 hover:bg-gray-100'
      }
    }
  },
  views: {
    days: {
      header: {
        base: 'mb-1 grid grid-cols-7',
        title: 'h-6 text-center text-sm font-medium leading-6 text-gray-500'
      },
      items: {
        base: 'grid w-64 grid-cols-7',
        item: {
          base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100',
          selected: 'bg-cyan-700 text-white hover:bg-cyan-600',
          disabled: 'text-gray-500'
        }
      }
    },
    months: {
      items: {
        base: 'grid w-64 grid-cols-4',
        item: {
          base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100',
          selected: 'bg-cyan-700 text-white hover:bg-cyan-600',
          disabled: 'text-gray-500'
        }
      }
    },
    years: {
      items: {
        base: 'grid w-64 grid-cols-4',
        item: {
          base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100',
          selected: 'bg-cyan-700 text-white hover:bg-cyan-600',
          disabled: 'text-gray-500'
        }
      }
    },
    decades: {
      items: {
        base: 'grid w-64 grid-cols-4',
        item: {
          base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100',
          selected: 'bg-cyan-700 text-white hover:bg-cyan-600',
          disabled: 'text-gray-500'
        }
      }
    }
  }
}

export default function WeeklyCalendarDatePicker({ today }) {
  const [date, setDate] = useState('')
  useEffect(() => {
    if (date) {
      window.location.href = '/dashboard?date=' + date
    }
  }, [date])

  return (
    <Datepicker
      style={{ backgroundColor: 'white', border: '1px solid black', margin: '1px 1px 1px 1px' }}
      theme={datePickerTheme}
      value={moment(today).toDate()}
      weekStart={1}
      language="es"
      placeholder="Selecciona una fecha"
      showTodayButton={false}
      showClearButton={false}
      onChange={(e) => {
        setDate(moment(e).format('YYYY-MM-DD'))
      }}
      inline={false}
    ></Datepicker>
  )
}
