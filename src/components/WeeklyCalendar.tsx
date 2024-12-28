import Event from './Event'
import {
  ChevronLeftIcon,
  ChevronDoubleLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon
} from '@heroicons/react/20/solid'

export default function WeeklyCalendar({ today, week_days, week_slots }) {
  return (
    <div className="flex flex-col h-full">
      <header className="flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4">
        <h1 className="text-base font-semibold text-gray-900">
          <time className="uppercase" dateTime={today.date_name}>
            {today.day_name + ' ' + today.month_name + ' ' + today.year_name}
          </time>
        </h1>
        <div className="flex items-center">
          <div className="relative flex items-center rounded-md bg-white shadow-sm md:items-stretch">
            <a
              href={'/dashboard?date=' + today.previus_week_date}
              type="button"
              className="flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50"
            >
              <span className="sr-only">Semana anterior</span>
              <ChevronDoubleLeftIcon className="size-5" aria-hidden="true" />
            </a>
            <a
              href={'/dashboard?date=' + today.previus_day_date}
              type="button"
              className="flex h-9 w-12 items-center justify-center border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50"
            >
              <span className="sr-only">Dia anterior</span>
              <ChevronLeftIcon className="size-5" aria-hidden="true" />
            </a>
            <a
              href={'/dashboard?date=' + today.today_date}
              type="button"
              className="flex h-9 w-12 items-center border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative "
            >
              <span>Hoy</span>
            </a>
            <a
              href={'/dashboard?date=' + today.next_day_date}
              type="button"
              className="flex h-9 w-12 items-center justify-center border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50"
            >
              <span className="sr-only">Dia siguiente</span>
              <ChevronRightIcon className="size-5" aria-hidden="true" />
            </a>
            <a
              href={'/dashboard?date=' + today.next_week_date}
              type="button"
              className="flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50"
            >
              <span className="sr-only">Semana siguiente</span>
              <ChevronDoubleRightIcon className="size-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>
      <div className="isolate flex flex-auto flex-col overflow-auto bg-white border-b border-gray-200">
        <div
          style={{ width: '165%' }}
          className="flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full"
        >
          <div className="sticky top-0 z-30 flex-none bg-white shadow ring-1 ring-black/5 sm:pr-8">
            <div className="grid grid-cols-5 text-sm/6 text-gray-500 sm:hidden">
              {week_days.map((day) => (
                <button
                  key={day.name}
                  type="button"
                  className="flex flex-col items-center pb-3 pt-2"
                >
                  {day.short_name + ' '}
                  <span
                    className={
                      'mt-1 flex size-8 items-center justify-center font-semibold ' +
                      (day.today ? 'rounded-full bg-gray-900 text-white' : 'text-gray-900')
                    }
                  >
                    {day.number}
                  </span>
                </button>
              ))}
            </div>

            <div className="-mr-px hidden grid-cols-5 divide-x divide-gray-100 border-r border-gray-100 text-sm/6 text-gray-500 sm:grid">
              <div className="col-end-1 w-14" />
              {week_days.map((day) => (
                <div key={day.name} className="flex items-center justify-center py-3 capitalize">
                  <span className={day.today ? 'flex items-baseline' : ''}>
                    {day.name + ' '}
                    <span
                      className={
                        'items-center justify-center font-semibold ' +
                        (day.today
                          ? 'ml-1.5 flex size-8 rounded-full bg-gray-900 text-white'
                          : 'text-gray-900')
                      }
                    >
                      {day.number}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-auto">
            <div className="sticky left-0 z-10 w-14 flex-none bg-white ring-1 ring-gray-100" />
            <div className="grid flex-auto grid-cols-1 grid-rows-1">
              {/* Horizontal lines */}
              <div
                className="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
                style={{ gridTemplateRows: 'repeat(28, minmax(3.5rem, 1fr))' }}
              >
                <div className="row-end-1 h-7"></div>
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    8
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    9
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    10
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    11
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    12
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    13
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    14
                  </div>
                </div>
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    -
                  </div>
                </div>
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    16
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    17
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    18
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    19
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    20
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    21
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs/5 text-gray-400">
                    22
                  </div>
                </div>
                <div />
              </div>

              {/* Vertical lines */}
              <div className="col-start-1 col-end-2 row-start-1 hidden grid-cols-5 grid-rows-1 divide-x divide-gray-100 sm:grid sm:grid-cols-5">
                <div className="col-start-1 row-span-full" />
                <div className="col-start-2 row-span-full" />
                <div className="col-start-3 row-span-full" />
                <div className="col-start-4 row-span-full" />
                <div className="col-start-5 row-span-full" />
                <div className="col-start-6 row-span-full w-8" />
              </div>

              {/* Events */}
              <ol
                className="col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-5 sm:pr-8"
                style={{ gridTemplateRows: '1.75rem repeat(28, minmax(0, 1fr)) auto' }}
              >
                {week_slots.map((event) => (
                  <Event key={event.id} item={event} />
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
