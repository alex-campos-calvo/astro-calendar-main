import { generateState, generateCodeVerifier } from 'arctic';
import { g as google } from '../../../chunks/index_CnmuTgJx.mjs';
export { renderers } from '../../../renderers.mjs';

async function GET(context) {
  const state = generateState();
  const scopes = ["openid", "profile", "email"];
  const codeVerifier = generateCodeVerifier();
  const url = google.createAuthorizationURL(state, codeVerifier, scopes);
  context.cookies.set("google_oauth_state", state, {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    maxAge: 60 * 10,
    path: "/"
  });
  context.cookies.set("google_oauth_verifier", codeVerifier, {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    maxAge: 60 * 10,
    path: "/"
  });
  return context.redirect(url.toString());
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
