import type { APIRoute } from 'astro'
import type { Clase, ClaseByDate, Participante } from '@/lib/types/bbdd'
import { db, Slot, User_Slot, eq, and, inArray } from 'astro:db'
import moment from 'moment'

interface Body {
  dates: string[]
}

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get('Content-Type') === 'application/json') {
    const body: Body = await request.json()

    const result: ClaseByDate = {}
    if (body && body.dates && body.dates.length > 0) {
      const dates: string[] = []
      body.dates.forEach((date) => {
        if (date) {
          result[date] = []
          dates.push(date)
        }
      })

      if (dates && dates.length > 0) {
        const slots = await db
          .select()
          .from(Slot)
          .innerJoin(User_Slot, eq(User_Slot.slot_id, Slot.id))
          .where(and(eq(User_Slot.default, false), inArray(User_Slot.date, dates)))
          .all()

        if (slots && slots.length === 0) {
          return new Response(JSON.stringify({}), {
            headers: { 'Content-Type': 'application/json' },
            status: 206
          })
        } else {
          const user_ids: string[] = []
          let data: Clase = {
            id: '',
            user_id: '',
            week_day: 0,
            start_hour: 0,
            end_hour: 0,
            size: 0,
            start: 0,
            end: 0,
            color: '',
            today: false,
            User_Slots: []
          }

          slots?.forEach((item) => {
            let current = data && data.id === item.Slot.id ? data : null
            if (!current) {
              data = {
                id: item.Slot.id,
                user_id: item.Slot.user_id,
                week_day: item.Slot.week_day,
                start_hour: item.Slot.start_hour,
                end_hour: item.Slot.end_hour,
                size: item.Slot.size,
                start: Number(item.Slot.start_hour) - 7,
                end: Number(item.Slot.end_hour) - Number(item.Slot.start_hour),
                color: item.Slot.size > 1 ? 'green' : 'red',
                today: false,
                User_Slots: []
              }
              data['start_hour_text'] = moment(item.Slot.start_hour, 'HH:mm').format('HH:mm')
              data['end_hour_text'] = moment(item.Slot.end_hour, 'HH:mm').format('HH:mm')
              data['tipo_text'] = item.Slot.size <= 1 ? 'P' : 'G' + item.Slot.size
              user_ids.push(item.Slot.user_id)

              if (item.User_Slot) {
                data.User_Slots.push(item.User_Slot as Participante)
                data['date'] = moment(item.User_Slot.date).format('YYYY-MM-DD')
                data['date_text'] = moment(item.User_Slot.date).format(
                  'dddd DD [de] MMMM [de] yyyy'
                )
                user_ids.push(item.User_Slot.user_id)
              }
              current = data
            } else if (item.User_Slot) {
              current.User_Slots.push(item.User_Slot as Participante)
              current.color = item.Slot.size > current.User_Slots.length ? 'green' : 'red'
              user_ids.push(item.User_Slot.user_id)
            }

            if (current?.User_Slots[0]?.date) {
              if (result[current.User_Slots[0].date]) {
                result[current.User_Slots[0].date]?.push(current)
              } else {
                result[current.User_Slots[0].date] = [current]
              }
            }
          })

          return new Response(JSON.stringify(result), { status: 200 })
        }
      }
    }
  }
  return new Response(null, { status: 400 })
}
