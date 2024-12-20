import { d as db, U as User, l as lucia } from '../../chunks/index_BUTutAy8.mjs';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../renderers.mjs';

async function POST(context) {
  const formData = await context.request.formData();
  const email = formData.get("email")?.trim();
  formData.get("password")?.trim();
  if (typeof email !== "string" || email.length < 3 || email.length > 255 || !/.+@.+\..+/.test(email)) {
    return new Response("Invalid email", {
      status: 400
    });
  }
  const existingUser = await db.select().from(User).where(eq(User.email, email.toLowerCase())).get();
  if (!existingUser) {
    return context.redirect("/", { error: "Invalid email or password" });
  }
  const session = await lucia.createSession(existingUser.id, { is_admin: existingUser.is_admin });
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
