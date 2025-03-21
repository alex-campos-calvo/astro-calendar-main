import type { APIRoute } from 'astro'
import { and, db, eq, or, Session, Swap_History, Upsert_History, User, User_Slot } from 'astro:db'

interface Body {
  id: string
}

export const DELETE: APIRoute = async ({ request }) => {
  if (request.headers.get('Content-Type') === 'application/json') {
    const body: Body = await request.json()

    if (!body.id) {
      return new Response('Invalid parameters', { status: 400 })
    }

    try {
      await db
        .delete(Swap_History)
        .where(or(eq(Swap_History.member_id, body.id), eq(Swap_History.teacher_id, body.id)))
        .run()
      await db
        .delete(Upsert_History)
        .where(or(eq(Upsert_History.member_id, body.id), eq(Upsert_History.teacher_id, body.id)))
        .run()
      await db
        .delete(User_Slot)
        .where(and(eq(User_Slot.user_id, body.id)))
        .run()
      await db.delete(Session).where(eq(Session.userId, body.id)).run()
      await db.delete(User).where(eq(User.id, body.id)).run()
      return new Response(null, { status: 200 })
    } catch (error) {
      console.error(error)
      return new Response(error?.message, { status: 500 })
    }
  }
  return new Response('Invalid content type', { status: 400 })
}
