import type { APIRoute } from 'astro'
import { db, eq, Slot, Upsert_History, User_Slot } from 'astro:db'
import { generateId } from 'lucia'
import moment from 'moment'
import 'moment/locale/es'

interface Body {
  to_slot: string
  to_date: string
  user_id: string
}

export const POST: APIRoute = async ({ request, locals }) => {
  if (request.headers.get('Content-Type') === 'application/json') {
    const body: Body = await request.json()

    if (
      !body.to_slot ||
      !body.user_id ||
      body.to_slot === '' ||
      body.to_date === '' ||
      body.user_id === '' ||
      (body.to_date && !moment(body.to_date, 'YYYY-MM-DD', true).isValid()) ||
      !locals?.session?.userId
    ) {
      return new Response('Invalid parameters', { status: 400 })
    }

    try {
      if (body.to_date && body.user_id && body.to_slot) {
        await db
          .insert(Upsert_History)
          .values({
            id: generateId(15),
            date: new Date(),
            slot_id: body.to_slot,
            slot_date: body.to_date,
            member_id: body.user_id,
            teacher_id: locals.session.userId
          })
          .run()

        await db
          .insert(User_Slot)
          .values({
            id: generateId(15),
            user_id: body.user_id,
            slot_id: body.to_slot,
            default: false,
            date: body.to_date
          })
          .run()
        return new Response(null, { status: 200 })
      } else if (!body.to_date && body.user_id && body.to_slot) {
        const slot = await db.select().from(Slot).where(eq(Slot.id, body.to_slot)).all()

        if (!slot || !slot[0]) {
          return new Response('Invalid slot id', { status: 400 })
        }

        const this_week = moment().startOf('week').days(slot[0].week_day).format('YYYY-MM-DD')
        const first_week = moment()
          .startOf('week')
          .add(1, 'week')
          .days(slot[0].week_day)
          .format('YYYY-MM-DD')
        const second_week = moment()
          .startOf('week')
          .add(2, 'week')
          .days(slot[0].week_day)
          .format('YYYY-MM-DD')
        const third_week = moment()
          .startOf('week')
          .add(3, 'week')
          .days(slot[0].week_day)
          .format('YYYY-MM-DD')

        await db
          .insert(User_Slot)
          .values([
            {
              id: generateId(15),
              user_id: body.user_id,
              slot_id: body.to_slot,
              default: true,
              date: null
            },
            {
              id: generateId(15),
              user_id: body.user_id,
              slot_id: body.to_slot,
              default: false,
              date: this_week
            },
            {
              id: generateId(15),
              user_id: body.user_id,
              slot_id: body.to_slot,
              default: false,
              date: first_week
            },
            {
              id: generateId(15),
              user_id: body.user_id,
              slot_id: body.to_slot,
              default: false,
              date: second_week
            },
            {
              id: generateId(15),
              user_id: body.user_id,
              slot_id: body.to_slot,
              default: false,
              date: third_week
            }
          ])
          .run()
        return new Response(null, { status: 200 })
      }
    } catch (e) {
      console.error(e)
      return new Response(e?.message, { status: 500 })
    }
  }
  return new Response('Invalid content type', { status: 400 })
}
