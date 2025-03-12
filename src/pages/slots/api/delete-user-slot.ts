import type { APIRoute } from 'astro'
import { db, eq, User_Slot } from 'astro:db'

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
      await db.delete(User_Slot).where(eq(User_Slot.id, body.id)).run()
      return new Response(null, { status: 200 })
    } catch (e) {
      console.error(e)
      return new Response(e?.message, { status: 500 })
    }
  }
  return new Response('Invalid content type', { status: 400 })
}
