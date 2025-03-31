import type { APIRoute } from 'astro'
import { and, db, eq, inArray, Slot, Swap_History, Upsert_History, User_Slot } from 'astro:db'
import { generateId } from 'lucia'
import moment from 'moment'
import 'moment/locale/es'

interface Body {
  id: string
}

export const DELETE: APIRoute = async ({ request, locals }) => {
  if (request.headers.get('Content-Type') === 'application/json') {
    const body: Body = await request.json()

    if (!body.id || !locals?.session?.userId) {
      return new Response('Invalid parameters', { status: 400 })
    }

    try {
      const user_slot = await db.select().from(User_Slot).where(eq(User_Slot.id, body.id)).all()

      if (!user_slot || !user_slot[0]) {
        return new Response('Invalid user_slot id', { status: 400 })
      }

      if (user_slot[0].date && !user_slot[0].default) {
        await db
          .insert(Upsert_History)
          .values({
            id: generateId(15),
            type: 'DELETE',
            date: new Date(),
            slot_id: user_slot[0].slot_id,
            slot_date: user_slot[0].date,
            member_id: user_slot[0].user_id,
            teacher_id: locals.session.userId
          })
          .run()
      } else if (user_slot[0].default) {
        const slot = await db.select().from(Slot).where(eq(Slot.id, user_slot[0].slot_id)).all()

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
        const fourth_week = moment()
          .startOf('week')
          .add(4, 'week')
          .days(slot[0].week_day)
          .format('YYYY-MM-DD')

        const user_slots = await db
          .select()
          .from(User_Slot)
          .where(
            and(
              eq(User_Slot.user_id, user_slot[0].user_id),
              eq(User_Slot.slot_id, user_slot[0].slot_id),
              eq(User_Slot.default, false),
              inArray(User_Slot.date, [this_week, first_week, second_week, third_week, fourth_week])
            )
          )
          .all()

        if (user_slots && user_slots.length > 0) {
          const user_slots_ids = user_slots.map((user_slot) => user_slot.id)
          await db.delete(Swap_History).where(inArray(Swap_History.user_slot, user_slots_ids)).run()
          await db.delete(User_Slot).where(inArray(User_Slot.id, user_slots_ids)).run()
        }
      }

      await db.delete(Swap_History).where(eq(Swap_History.user_slot, body.id)).run()
      await db.delete(User_Slot).where(eq(User_Slot.id, body.id)).run()
      return new Response(null, { status: 200 })
    } catch (e) {
      console.error(e)
      return new Response(e?.message, { status: 500 })
    }
  }
  return new Response('Invalid content type', { status: 400 })
}
