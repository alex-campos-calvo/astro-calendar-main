import { g as google, d as db, U as User, l as lucia } from '../../../chunks/index_BUTutAy8.mjs';
import { OAuth2RequestError } from 'arctic';
import { generateId } from 'lucia';
import { or, eq } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../../renderers.mjs';

async function GET(context) {
  const code = context.url.searchParams.get("code");
  const state = context.url.searchParams.get("state");
  const storedState = context.cookies.get("google_oauth_state");
  const storedCodeVerifier = context.cookies.get("google_oauth_verifier");
  try {
    if (code == null || storedState == null || storedCodeVerifier == null || state !== storedState?.value) {
      return new Response("Please restart the process.", {
        status: 400
      });
    }
    const tokens = await google.validateAuthorizationCode(code, storedCodeVerifier?.value);
    const response = await fetch("https://openidconnect.googleapis.com/v1/userinfo", {
      headers: {
        Authorization: `Bearer ${tokens.accessToken()}`
      }
    });
    const googleUser = await response.json();
    if (googleUser == null || googleUser.email == null || googleUser.sub == null) {
      return new Response("Email & Gooogle ID are required.", {
        status: 400
      });
    }
    const existingUser = await db.select().from(User).where(or(eq(User.email, googleUser?.email), eq(User.google_id, googleUser?.sub))).get();
    if (existingUser) {
      if (existingUser.google_id == null) {
        await db.update(User).set({ google_id: googleUser.sub }).where(eq(User.id, existingUser.id));
      }
      const session2 = await lucia.createSession(existingUser.id, {
        is_admin: existingUser.is_admin
      });
      const sessionCookie2 = lucia.createSessionCookie(session2.id);
      context.cookies.set(sessionCookie2.name, sessionCookie2.value, sessionCookie2.attributes);
      return context.redirect("/dashboard");
    }
    const userId = generateId(15);
    await db.insert(User).values({
      id: userId,
      name: "Google User " + userId,
      email: googleUser.email,
      google_id: googleUser.sub,
      is_admin: false
    });
    const session = await lucia.createSession(userId, { is_admin: false });
    const sessionCookie = lucia.createSessionCookie(session.id);
    context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    return context.redirect("/dashboard");
  } catch (e) {
    console.error(e);
    if (e instanceof OAuth2RequestError) {
      return new Response(null, {
        status: 400
      });
    }
    return new Response(null, {
      status: 500
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
