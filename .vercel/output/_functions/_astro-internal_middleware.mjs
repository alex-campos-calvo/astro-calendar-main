import { l as lucia } from './chunks/index_BUTutAy8.mjs';
import './chunks/astro-designed-error-pages_wZr51DlV.mjs';
import { s as sequence } from './chunks/index_PxCdbvwC.mjs';

async function auth(context, next) {
  const sessionId = context.cookies.get(lucia.sessionCookieName)?.value ?? null;
  if (!sessionId) {
    context.locals.user = null;
    context.locals.session = null;
    return await next();
  }
  const { session, user } = await lucia.validateSession(sessionId);
  if (session && session.fresh) {
    const sessionCookie = lucia.createSessionCookie(session.id);
    context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  }
  if (!session) {
    const sessionCookie = lucia.createBlankSessionCookie();
    context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  }
  context.locals.session = session;
  context.locals.user = user;
  return await next();
}
async function permissions(context, next) {
  const user = context.locals.user;
  if (!user && context.url.pathname !== "/" && context.url.pathname !== "/signup" && !context.url.pathname.startsWith("/auth")) {
    return await context.redirect("/");
  }
  if (user && context.url.pathname === "/" && context.url.pathname === "/signup") {
    return await context.redirect("/dashboard");
  }
  if (user && user.is_admin && context.url.pathname.startsWith("/slots")) {
    return await context.redirect("/dashboard");
  }
  return await next();
}
const onRequest$1 = sequence(auth, permissions);

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
