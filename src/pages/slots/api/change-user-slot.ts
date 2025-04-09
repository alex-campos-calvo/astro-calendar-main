import type { APIRoute } from 'astro'
import { db, eq, Slot, Swap_History, User_Slot } from 'astro:db'
import { generateId } from 'lucia'
import { getSizeId } from '@/lib/types/utils'
import moment from 'moment'
import 'moment/locale/es'

interface Body {
  to_slot: string
  to_date: string
  user_slot: string
}

export const POST: APIRoute = async ({ request, locals }) => {
  if (request.headers.get('Content-Type') === 'application/json') {
    const body: Body = await request.json()

    if (
      !body.to_slot ||
      !body.to_date ||
      !body.user_slot ||
      body.to_slot === '' ||
      body.to_date === '' ||
      body.user_slot === '' ||
      !moment(body.to_date, 'YYYY-MM-DD', true).isValid() ||
      !locals?.session?.userId
    ) {
      return new Response('Invalid parameters', { status: 400 })
    }

    try {
      const slot = await db.select().from(Slot).where(eq(Slot.id, body.to_slot)).all()
      const user_slot = await db
        .select()
        .from(User_Slot)
        .where(eq(User_Slot.id, body.user_slot))
        .all()

      if (slot && slot.length > 0 && slot[0] && user_slot && user_slot.length > 0 && user_slot[0]) {
        await db
          .insert(Swap_History)
          .values({
            id: generateId(getSizeId()),
            date: new Date(),
            date_to: body.to_date,
            date_from: user_slot[0].date,
            slot_to: slot[0].id,
            slot_from: user_slot[0].slot_id,
            user_slot: body.user_slot,
            member_id: user_slot[0].user_id,
            teacher_id: locals.session.userId
          })
          .run()

        await db
          .update(User_Slot)
          .set({
            slot_id: body.to_slot,
            date: body.to_date
          })
          .where(eq(User_Slot.id, body.user_slot))
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
