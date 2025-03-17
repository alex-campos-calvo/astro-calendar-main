import moment from 'moment'
import 'moment/locale/es'

export default function Event({ item, user }) {
  const row = Number(item.start) * 2
  const end = Math.round(Number(item.end * 2))
  const event_date = moment(item.date, 'YYYY-MM-DD', true)
  const isFuture = event_date.isSameOrAfter(moment(), 'day')

  const column = 'sm:col-start-' + String(item.week_day)
  const color = isFuture
    ? 'bg-' + String(item.color) + '-200 hover:bg-' + String(item.color) + '-300'
    : 'bg-gray-300'
  const size = String(item.size)
  const groupType = item.size === 1 ? 'P' : 'G' + String(item.size)
  const participants = item.User_Slots?.length
  const link = '/slots/' + String(item.id) + '?date=' + event_date.format('YYYY-MM-DD')
  const start_hour = moment({
    hour: Math.floor(item.start_hour),
    minute: Math.floor((item.start_hour % 1) * 60)
  }).format('HH:mm')

  return (
    <li
      className={'relative mt-px ' + (!item.today ? 'hidden ' : '') + 'sm:flex ' + column}
      style={{ gridRow: row + ' / span ' + end, viewTransitionName: item.id }}
    >
      <a
        href={link}
        /*style={!isFuture ? { pointerEvents: 'none' } : {}}*/
        className={
          'group absolute inset-1 flex flex-col overflow-hidden rounded-lg p-4 justify-between ' +
          color
        }
      >
        <div className="flex justify-between">
          <div className="flex flex-col justify-between">
            <p className="font-semibold text-md">
              <time>{start_hour}</time>
            </p>
            <p className="text-md mr-2">{user?.name}</p>
          </div>
          <div className="flex flex-col justify-between">
            <p className="font-semibold text-md">{groupType}</p>
            <p className="text-md text-right">
              {participants}/{size}
            </p>
          </div>
        </div>
      </a>
    </li>
  )
}
