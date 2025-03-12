import type { APIRoute } from 'astro'
import { db, eq, Slot } from 'astro:db'
import 'moment/locale/es'

interface Body {
  to_slot: string
  user_id: string
}

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get('Content-Type') === 'application/json') {
    const body: Body = await request.json()

    if (!body.to_slot || !body.user_id) {
      return new Response('Invalid parameters', { status: 400 })
    }

    try {
      await db
        .update(Slot)
        .set({
          user_id: body.user_id
        })
        .where(eq(Slot.id, body.to_slot))
        .run()
      return new Response(null, { status: 200 })
    } catch (e) {
      console.error(e)
      return new Response(e?.message, { status: 500 })
    }
  }
  return new Response('Invalid content type', { status: 400 })
}
