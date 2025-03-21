import type { APIRoute } from 'astro'
import { and, db, eq, Swap_History, Upsert_History, User_Slot } from 'astro:db'
import { generateId } from 'lucia'

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
      const user_slot = await db
        .select()
        .from(User_Slot)
        .where(and(eq(User_Slot.id, body.id), eq(User_Slot.default, false)))
        .all()

      if (user_slot && user_slot.length > 0 && user_slot[0] && user_slot[0].date) {
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
