import Event from './Event'
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/20/solid'
import SearchBar from './WeeklyCalendarSearchBar'

export default function WeeklyCalendar({ today, week_days, week_slots, user_map }) {
  return (
    <div className="flex flex-col h-full">
      <header className="border-b border-black py-4 sm:flex sm:items-center sm:justify-between sm:px-6">
        <h1 className="text-center font-semibold text-black py-2 sm:py-0">
          <time className="uppercase" dateTime={today.date_name}>
            {today.day_name + ' ' + today.month_name + ' ' + today.year_name}
          </time>
        </h1>
        <SearchBar />
        <div className="flex justify-center">
          <div className="relative flex items-center">
            <a
              href={'/dashboard?date=' + today.previus_day_date}
              type="button"
              className="flex w-12 h-8 items-center justify-center rounded-l-md border-y border-l border-black text-black hover:bg-gray-100 focus:relative md:w-9 md:pr-0"
            >
              <span className="sr-only">Dia anterior</span>
              <ChevronDoubleLeftIcon className="size-5" aria-hidden="true" />
            </a>
            <a
              href={'/dashboard?date=' + today.today_date}
              type="button"
              className="flex items-center h-8 text-sm font-semibold px-3.5 border-y border-x border-black text-black hover:bg-gray-100 focus:relative"
            >
              Hoy
            </a>
            <a
              href={'/dashboard?date=' + today.next_day_date}
              type="button"
              className="flex w-12 h-8 items-center justify-center rounded-r-md border-y border-r border-black text-black hover:bg-gray-100 focus:relative md:w-9 md:pl-0"
            >
              <span className="sr-only">Dia siguiente</span>
              <ChevronDoubleRightIcon className="size-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>
      <div className="isolate flex flex-auto flex-col overflow-auto bg-white border-b border-black">
        <div
          style={{ width: '165%' }}
          className="flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full"
        >
          <div className="sticky top-0 z-30 flex-none bg-white shadow ring-1 ring-black sm:pr-8">
            <div className="grid grid-cols-5 text-sm/6 text-black sm:hidden">
              {week_days.map((day) => (
                <span key={day.name} className="flex flex-col items-center pb-3 pt-2 capitalize">
                  {day.name + ' '}
                  <span
                    className={
                      'mt-1 flex size-6 items-center justify-center font-semibold ' +
                      (day.today ? 'rounded-full bg-black text-white' : 'text-black')
                    }
                  >
                    {day.number}
                  </span>
                </span>
              ))}
            </div>

            <div className="-mr-px hidden grid-cols-5 divide-x divide-black border-r border-black text-sm/6 text-black sm:grid">
              <div className="col-end-1 w-8" />
              {week_days.map((day) => (
                <div key={day.name} className="flex items-center justify-center py-3 capitalize">
                  <span className={day.today ? 'flex items-baseline' : ''}>
                    {day.name + ' '}
                    <span
                      className={
                        'items-center justify-center font-semibold ' +
                        (day.today
                          ? 'ml-1.5 flex size-6 rounded-full bg-black text-white'
                          : 'text-black')
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
            <div className="sticky left-0 z-10 w-8 flex-none bg-white ring-1 ring-black" />
            <div className="grid flex-auto grid-cols-1 grid-rows-1">
              {/* Horizontal lines */}
              <div
                className="col-start-1 col-end-2 row-start-1 grid divide-y divide-black"
                style={{ gridTemplateRows: 'repeat(28, minmax(3.5rem, 1fr))' }}
              >
                <div className="row-end-1 h-7"></div>
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-8 pr-2 text-right text-xs/5 text-black">
                    8
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-8 pr-2 text-right text-xs/5 text-black">
                    9
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-8 pr-2 text-right text-xs/5 text-black">
                    10
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-8 pr-2 text-right text-xs/5 text-black">
                    11
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-8 pr-2 text-right text-xs/5 text-black">
                    12
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-8 pr-2 text-right text-xs/5 text-black">
                    13
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-8 pr-2 text-right text-xs/5 text-black">
                    14
                  </div>
                </div>
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-8 pr-2 text-right text-xs/5 text-black">
                    -
                  </div>
                </div>
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-8 pr-2 text-right text-xs/5 text-black">
                    16
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-8 pr-2 text-right text-xs/5 text-black">
                    17
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-8 pr-2 text-right text-xs/5 text-black">
                    18
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-8 pr-2 text-right text-xs/5 text-black">
                    19
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-8 pr-2 text-right text-xs/5 text-black">
                    20
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-8 pr-2 text-right text-xs/5 text-black">
                    21
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 z-20 -ml-14 -mt-2.5 w-8 pr-2 text-right text-xs/5 text-black">
                    22
                  </div>
                </div>
                <div />
              </div>

              {/* Vertical lines */}
              <div className="col-start-1 col-end-2 row-start-1 hidden grid-cols-5 grid-rows-1 divide-x divide-black sm:grid sm:grid-cols-5">
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
                  <Event key={event.id} item={event} user={user_map.get(event.user_id)} />
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
