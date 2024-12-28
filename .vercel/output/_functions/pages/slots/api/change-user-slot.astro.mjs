import { d as db, a as User_Slot } from '../../../chunks/_astro_db_O5c1qmJs.mjs';
import moment from 'moment';
import 'moment/locale/es.js';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    const body = await request.json();
    if (!body.to_slot || !body.to_date || !body.user_slot || body.to_slot === "" || body.to_date === "" || body.user_slot === "" || !moment(body.to_date, "YYYY-MM-DD", true).isValid()) {
      return new Response(null, { status: 400 });
    }
    try {
      await db.update(User_Slot).set({
        slot_id: body.to_slot,
        date: body.to_date
      }).where(eq(User_Slot.id, body.user_slot)).run();
      return new Response(null, { status: 200 });
    } catch (e) {
      console.error(e);
      return new Response(null, { status: 500 });
    }
  }
  return new Response(null, { status: 400 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
