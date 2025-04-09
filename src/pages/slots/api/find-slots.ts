import type { APIRoute } from 'astro'
import type { Clase, ClaseByDate, Participante } from '@/lib/types/bbdd'
import { db, Slot, User_Slot, eq, and } from 'astro:db'
import moment from 'moment'
import { getHourText } from '@/lib/types/utils'

interface Body {
  date: string
  slot_id: string
}

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get('Content-Type') === 'application/json') {
    const body: Body = await request.json()

    const result: ClaseByDate = {}
    if (
      !body ||
      !body.slot_id ||
      body.slot_id === '' ||
      !body.date ||
      body.date === '' ||
      !moment(body.date, 'YYYY-MM-DD', true).isValid()
    ) {
      return new Response('Invalid parameters', { status: 400 })
    }

    try {
      const date: string = body.date
      const moment_date = moment(body.date, 'YYYY-MM-DD', true)
      result[date] = []

      const slots = await db
        .select()
        .from(Slot)
        .leftJoin(
          User_Slot,
          and(
            eq(User_Slot.slot_id, Slot.id),
            eq(User_Slot.default, false),
            eq(User_Slot.date, date)
          )
        )
        .where(eq(Slot.week_day, moment_date.weekday() + 1))
        .orderBy(Slot.start_hour)
        .all()

      if (slots && slots.length === 0) {
        return new Response(JSON.stringify(result), {
          headers: { 'Content-Type': 'application/json' },
          status: 206
        })
      }

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
        date: '',
        User_Slots: []
      }

      slots?.forEach((item) => {
        let current = result[date]?.find((slot) => slot.id === item.Slot.id)
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
            color: 'green',
            today: false,
            date: date,
            User_Slots: []
          }
          data['start_hour_text'] = getHourText(item.Slot.start_hour)
          data['end_hour_text'] = getHourText(item.Slot.end_hour)
          data['date_text'] = moment_date.format('dddd DD [de] MMMM [de] yyyy')
          data['tipo_text'] = item.Slot.size <= 1 ? 'P' : 'G' + item.Slot.size
          user_ids.push(item.Slot.user_id)

          if (item.User_Slot) {
            data.User_Slots.push(item.User_Slot as Participante)
            data.color = item.Slot.size > data.User_Slots.length ? 'green' : 'red'
            user_ids.push(item.User_Slot.user_id)
          }
          current = data
          result[date]?.push(current)
        } else if (item.User_Slot) {
          current.User_Slots.push(item.User_Slot as Participante)
          current.color = item.Slot.size > current.User_Slots.length ? 'green' : 'red'
          user_ids.push(item.User_Slot.user_id)
        }
      })

      result[date] = result[date].filter((item) => {
        return !(item.id === body.slot_id && item.date === date)
      })

      //Filtra solo los slots con hueco disponible, en principio no se limita por el tamaño del slot
      /*Object.entries(result).forEach(([key]) => {
        result[key] = result[key]?.filter((item) => item.User_Slots?.length < item.size)
      })*/
      return new Response(JSON.stringify(result), { status: 200 })
    } catch (e) {
      console.error(e)
      return new Response(e?.message, { status: 500 })
    }
  }
  return new Response('Invalid content type', { status: 400 })
}
