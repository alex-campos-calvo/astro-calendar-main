import { d as db, U as User, l as lucia } from '../../chunks/index_BUTutAy8.mjs';
import { generateId } from 'lucia';
export { renderers } from '../../renderers.mjs';

async function POST(context) {
  const formData = await context.request.formData();
  const email = formData.get("email")?.trim();
  if (typeof email !== "string" || email.length < 3 || email.length > 255 || !/.+@.+\..+/.test(email)) {
    return new Response("Invalid email", {
      status: 400
    });
  }
  const name = formData.get("name")?.trim();
  if (typeof name !== "string" || name.length < 3 || name.length > 255) {
    return new Response("Invalid name", {
      status: 400
    });
  }
  const userId = generateId(15);
  await db.insert(User).values({
    id: userId,
    email: email.toLowerCase(),
    name,
    is_admin: false
  });
  const session = await lucia.createSession(userId, { is_admin: false });
  const sessionCookie = lucia.createSessionCookie(session.id);
  context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  return context.redirect("/dashboard");
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
