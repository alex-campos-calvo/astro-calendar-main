import type { Usuario } from '@/lib/types/bbdd'
import { getFullName } from '@/lib/types/utils'
import type { APIRoute } from 'astro'
import { db, User, and, eq, like } from 'astro:db'

interface Body {
  name: string
}

export const POST: APIRoute = async ({ request }) => {
  if (request.headers.get('Content-Type') === 'application/json') {
    const body: Body = await request.json()

    const result: Usuario[] = []
    if (!body || !body.name || body.name === '') {
      return new Response('Invalid parameters', { status: 400 })
    }

    try {
      const name: string = '%' + body.name + '%'
      const users = await db
        .select()
        .from(User)
        .where(and(like(User.name, name), eq(User.is_active, true), eq(User.is_admin, false)))
        .orderBy(User.name)
        .all()

      if (users && users.length === 0) {
        return new Response(JSON.stringify(result), {
          headers: { 'Content-Type': 'application/json' },
          status: 206
        })
      }

      if (users && users.length > 0) {
        users.forEach((user) => {
          const u: Usuario = {
            id: user.id,
            google_id: null,
            name: user.name,
            description: user.description,
            email: user.email,
            is_active: user.is_active,
            is_admin: user.is_admin
          }
          u['short_name'] = getFullName(user.name)
          result.push(u)
        })
      }
      return new Response(JSON.stringify(result), { status: 200 })
    } catch (e) {
      console.error(e)
      return new Response(e?.message, { status: 500 })
    }
  }
  return new Response('Invalid content type', { status: 400 })
}
