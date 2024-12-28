import type { APIRoute } from 'astro'
import { db, eq, User_Slot } from 'astro:db'
import moment from 'moment'
import 'moment/locale/es'

interface Body {
  to_slot: string
  to_date: string
  user_slot: string
}

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get('Content-Type') === 'application/json') {
    const body: Body = await request.json()

    if (
      !body.to_slot ||
      !body.to_date ||
      !body.user_slot ||
      body.to_slot === '' ||
      body.to_date === '' ||
      body.user_slot === '' ||
      !moment(body.to_date, 'YYYY-MM-DD', true).isValid()
    ) {
      return new Response(null, { status: 400 })
    }

    try {
      await db
        .update(User_Slot)
        .set({
          slot_id: body.to_slot,
          date: body.to_date
        })
        .where(eq(User_Slot.id, body.user_slot))
        .run()
      return new Response(null, { status: 200 })
    } catch (e) {
      console.error(e)
      return new Response(null, { status: 500 })
    }
  }
  return new Response(null, { status: 400 })
}
