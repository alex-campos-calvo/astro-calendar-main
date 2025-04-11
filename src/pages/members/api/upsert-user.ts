import type { APIRoute } from 'astro'
import { validateEmail, validateName } from '@/lib/validations/type-validations'
import { db, eq, User } from 'astro:db'
import { generateId } from 'lucia'
import { getSizeId } from '@/lib/types/utils'

interface Body {
  id: string
  name: string
  email: string
  description: string
  is_admin: boolean
  is_active: boolean
}

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get('Content-Type') === 'application/json') {
    const body: Body = await request.json()

    if (!body.name || !body.email) {
      return new Response('Invalid parameters', { status: 400 })
    }

    if (body.name && !validateName(body.name)) {
      return new Response('Invalid name', { status: 400 })
    }

    if (body.email && !validateEmail(body.email)) {
      return new Response('Invalid email', { status: 400 })
    }

    try {
      if (body.id && body.id !== 'new') {
        const user = await db.select().from(User).where(eq(User.id, body.id)).get()

        if (!user) {
          return new Response('User not found', { status: 404 })
        }

        await db
          .update(User)
          .set({
            name: body.name,
            email: body.email,
            description: body.description,
            is_admin: body.is_admin,
            is_active: body.is_active
          })
          .where(eq(User.id, body.id))
          .run()
        return new Response(null, { status: 200 })
      } else {
        const existingUser = await db
          .select()
          .from(User)
          .where(eq(User.email, body.email.toLowerCase()))
          .get()
        if (existingUser) {
          return new Response('User already exists', { status: 400 })
        }

        const id = generateId(getSizeId())
        await db.insert(User).values({
          id: id,
          name: body.name,
          email: body.email.toLowerCase(),
          description: body.description,
          is_admin: body.is_admin,
          is_active: body.is_active
        })
        return new Response(id, { status: 202 })
      }
    } catch (error) {
      console.error(error)
      return new Response(error?.message, { status: 500 })
    }
  }
  return new Response('Invalid content type', { status: 400 })
}
