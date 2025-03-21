import type { APIRoute } from 'astro'
import { db, eq, or, Slot, Swap_History, Upsert_History, User_Slot } from 'astro:db'

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
        .where(or(eq(Swap_History.slot_to, body.id), eq(Swap_History.slot_from, body.id)))
        .run()
      await db.delete(Upsert_History).where(eq(Upsert_History.slot_id, body.id)).run()
      await db.delete(User_Slot).where(eq(User_Slot.slot_id, body.id)).run()
      await db.delete(Slot).where(eq(Slot.id, body.id)).run()
      return new Response(null, { status: 200 })
    } catch (e) {
      console.error(e)
      return new Response(e?.message, { status: 500 })
    }
  }
  return new Response('Invalid content type', { status: 400 })
}
