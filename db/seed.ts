import { db, Slot, User, User_Slot } from 'astro:db'
import { generateId } from 'lucia'
import { Argon2id } from 'oslo/password'
import moment from 'moment'

// https://astro.build/db/seed
export default async function seed() {
  const users = await db
    .insert(User)
    .values([
      {
        id: generateId(15),
        google_id: null,
        email: 'alex.campos.others@gmail.com',
        name: 'Alice',
        password: await new Argon2id().hash('12345678'),
        is_admin: true,
        is_active: true
      }
    ])
    .returning({ id: User.id })

  if (users[0]?.id) {
    const slots = await db
      .insert(Slot)
      .values([
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 1,
          start_hour: 10,
          end_hour: 11,
          size: 8
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 1,
          start_hour: 11,
          end_hour: 12,
          size: 4
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 1,
          start_hour: 12,
          end_hour: 13,
          size: 1
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 1,
          start_hour: 13,
          end_hour: 14,
          size: 8
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 1,
          start_hour: 16,
          end_hour: 17,
          size: 4
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 1,
          start_hour: 17,
          end_hour: 18,
          size: 1
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 1,
          start_hour: 18,
          end_hour: 19,
          size: 8
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 1,
          start_hour: 19,
          end_hour: 20,
          size: 4
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 1,
          start_hour: 20,
          end_hour: 21,
          size: 1
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 1,
          start_hour: 21,
          end_hour: 22,
          size: 8
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 2,
          start_hour: 8,
          end_hour: 9,
          size: 4
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 2,
          start_hour: 9,
          end_hour: 10,
          size: 1
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 2,
          start_hour: 10,
          end_hour: 11,
          size: 8
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 2,
          start_hour: 11,
          end_hour: 12,
          size: 4
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 2,
          start_hour: 12,
          end_hour: 13,
          size: 1
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 2,
          start_hour: 13,
          end_hour: 14,
          size: 8
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 2,
          start_hour: 16,
          end_hour: 17,
          size: 4
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 2,
          start_hour: 17,
          end_hour: 18,
          size: 1
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 2,
          start_hour: 18,
          end_hour: 19,
          size: 8
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 2,
          start_hour: 19,
          end_hour: 20,
          size: 4
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 2,
          start_hour: 20,
          end_hour: 21,
          size: 1
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 2,
          start_hour: 21,
          end_hour: 22,
          size: 8
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 3,
          start_hour: 8,
          end_hour: 9,
          size: 4
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 3,
          start_hour: 9,
          end_hour: 10,
          size: 1
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 3,
          start_hour: 10,
          end_hour: 11,
          size: 8
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 3,
          start_hour: 11,
          end_hour: 12,
          size: 4
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 3,
          start_hour: 12,
          end_hour: 13,
          size: 1
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 3,
          start_hour: 13,
          end_hour: 14,
          size: 8
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 3,
          start_hour: 16,
          end_hour: 17,
          size: 4
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 3,
          start_hour: 17,
          end_hour: 18,
          size: 1
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 3,
          start_hour: 18,
          end_hour: 19,
          size: 8
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 3,
          start_hour: 19,
          end_hour: 20,
          size: 4
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 3,
          start_hour: 20,
          end_hour: 21,
          size: 1
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 3,
          start_hour: 21,
          end_hour: 22,
          size: 8
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 4,
          start_hour: 8,
          end_hour: 9,
          size: 4
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 4,
          start_hour: 9,
          end_hour: 10,
          size: 1
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 4,
          start_hour: 10,
          end_hour: 11,
          size: 8
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 4,
          start_hour: 11,
          end_hour: 12,
          size: 4
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 4,
          start_hour: 12,
          end_hour: 13,
          size: 1
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 4,
          start_hour: 13,
          end_hour: 14,
          size: 8
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 4,
          start_hour: 16,
          end_hour: 17,
          size: 4
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 4,
          start_hour: 17,
          end_hour: 18,
          size: 1
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 4,
          start_hour: 18,
          end_hour: 19,
          size: 8
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 4,
          start_hour: 19,
          end_hour: 20,
          size: 4
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 4,
          start_hour: 20,
          end_hour: 21,
          size: 1
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 4,
          start_hour: 21,
          end_hour: 22,
          size: 8
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 5,
          start_hour: 8,
          end_hour: 9,
          size: 4
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 5,
          start_hour: 9,
          end_hour: 10,
          size: 1
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 5,
          start_hour: 10,
          end_hour: 11,
          size: 8
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 5,
          start_hour: 11,
          end_hour: 12,
          size: 4
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 5,
          start_hour: 12,
          end_hour: 13,
          size: 1
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 5,
          start_hour: 13,
          end_hour: 14,
          size: 8
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 5,
          start_hour: 16,
          end_hour: 17,
          size: 4
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 5,
          start_hour: 17,
          end_hour: 18,
          size: 1
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 5,
          start_hour: 18,
          end_hour: 19,
          size: 8
        },
        {
          id: generateId(15),
          user_id: users[0]?.id,
          week_day: 5,
          start_hour: 19,
          end_hour: 20,
          size: 4
        }
      ])
      .returning({ id: Slot.id, start_hour: Slot.start_hour, end_hour: Slot.end_hour })

    if (slots[0]?.id && slots[1]?.id && slots[2]?.id) {
      const slot1 = slots[0]
      const slot2 = slots[1]
      const slot3 = slots[2]
      await db.insert(User_Slot).values([
        {
          id: generateId(15),
          user_id: users[0].id,
          slot_id: slot1.id,
          default: true,
          date: null
        },
        {
          id: generateId(15),
          user_id: users[0].id,
          slot_id: slot2.id,
          default: true,
          date: null
        },
        {
          id: generateId(15),
          user_id: users[0].id,
          slot_id: slot3.id,
          default: true,
          date: null
        }
      ])

      await db.insert(User_Slot).values([
        {
          id: generateId(15),
          user_id: users[0].id,
          slot_id: slot1.id,
          default: false,
          date: moment().format('YYYY-MM-DD')
        },
        {
          id: generateId(15),
          user_id: users[0].id,
          slot_id: slot2.id,
          default: false,
          date: moment().format('YYYY-MM-DD')
        },
        {
          id: generateId(15),
          user_id: users[0].id,
          slot_id: slot3.id,
          default: false,
          date: moment().format('YYYY-MM-DD')
        }
      ])
    }
  }
}
