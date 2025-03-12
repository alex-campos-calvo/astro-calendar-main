import type { APIRoute } from 'astro'
import { db, User_Slot } from 'astro:db'
import { generateId } from 'lucia'
import moment from 'moment'
import 'moment/locale/es'

interface Body {
  to_slot: string
  to_date: string
  user_id: string
}

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get('Content-Type') === 'application/json') {
    const body: Body = await request.json()

    if (
      !body.to_slot ||
      !body.user_id ||
      body.to_slot === '' ||
      body.to_date === '' ||
      body.user_id === '' ||
      (body.to_date && !moment(body.to_date, 'YYYY-MM-DD', true).isValid())
    ) {
      return new Response('Invalid parameters', { status: 400 })
    }

    try {
      await db
        .insert(User_Slot)
        .values({
          id: generateId(15),
          user_id: body.user_id,
          slot_id: body.to_slot,
          default: body.to_date ? false : true,
          date: body.to_date ? body.to_date : null
        })
        .run()
      return new Response(null, { status: 200 })
    } catch (e) {
      console.error(e)
      return new Response(e?.message, { status: 500 })
    }
  }
  return new Response('Invalid content type', { status: 400 })
}
