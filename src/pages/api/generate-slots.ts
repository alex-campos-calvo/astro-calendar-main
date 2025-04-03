import moment from 'moment'
import { generateId } from 'lucia'
import { and, asc, db, eq, inArray, Slot, Slot_Setting, User_Slot } from 'astro:db'

export async function GET({ request }) {
  try {
    const authHeader = request?.headers?.get('authorization')
    if (!authHeader || authHeader !== `Bearer ${import.meta.env.CRON_SECRET}`) {
      return new Response('Invalid authorization header', { status: 401 })
    }

    moment.updateLocale('es', {
      week: {
        dow: 1 // Monday is the first day of the week
      }
    })

    const settings = await db
      .select()
      .from(Slot_Setting)
      .where(eq(Slot_Setting.is_active, true))
      .all()
    if (!settings || settings.length === 0) {
      const toInsert = []
      for (let week = 1; week <= 52; week++) {
        toInsert.push(
          db.insert(Slot_Setting).values({
            id: generateId(15),
            start_date: moment().week(week).startOf('week').format('YYYY-MM-DD'),
            end_date: moment().week(week).endOf('week').format('YYYY-MM-DD'),
            is_active: true
          })
        )
      }
      await db.batch(toInsert)
    } else {
      const this_week = moment().startOf('week')
      const first_week = this_week.clone().add(1, 'week')
      const second_week = this_week.clone().add(2, 'week')
      const third_week = this_week.clone().add(3, 'week')
      const filtered = settings.filter(
        (setting) =>
          (setting.start_date === this_week.format('YYYY-MM-DD') &&
            setting.end_date === this_week.endOf('week').format('YYYY-MM-DD')) ||
          (setting.start_date === first_week.format('YYYY-MM-DD') &&
            setting.end_date === first_week.endOf('week').format('YYYY-MM-DD')) ||
          (setting.start_date === second_week.format('YYYY-MM-DD') &&
            setting.end_date === second_week.endOf('week').format('YYYY-MM-DD')) ||
          (setting.start_date === third_week.format('YYYY-MM-DD') &&
            setting.end_date === third_week.endOf('week').format('YYYY-MM-DD'))
      )

      const dates = {
        '1': [] as string[],
        '2': [] as string[],
        '3': [] as string[],
        '4': [] as string[],
        '5': [] as string[]
      }

      const toUpdate: string[] = []
      filtered.forEach((setting) => {
        toUpdate.push(setting.id)
        const start_date = moment(setting.start_date)
        dates['1'].push(start_date.format('YYYY-MM-DD'))
        dates['2'].push(start_date.clone().add(1, 'day').format('YYYY-MM-DD'))
        dates['3'].push(start_date.clone().add(2, 'day').format('YYYY-MM-DD'))
        dates['4'].push(start_date.clone().add(3, 'day').format('YYYY-MM-DD'))
        dates['5'].push(start_date.clone().add(4, 'day').format('YYYY-MM-DD'))
      })

      console.log(dates)

      if (
        dates &&
        (dates['1'].length > 0 ||
          dates['2'].length > 0 ||
          dates['3'].length > 0 ||
          dates['4'].length > 0 ||
          dates['5'].length > 0)
      ) {
        const default_user_slots = await db
          .select()
          .from(Slot)
          .innerJoin(User_Slot, and(eq(User_Slot.slot_id, Slot.id), eq(User_Slot.default, true)))
          .orderBy(asc(Slot.week_day))
          .all()

        if (!default_user_slots || default_user_slots.length === 0) {
          return new Response('Job done, no default slots to process found!', { status: 200 })
        }

        const values = []
        Object.entries(dates).forEach(([key]) => {
          default_user_slots.forEach((slot) => {
            if (slot.Slot.week_day === Number(key)) {
              dates[key].forEach((this_date) => {
                const obj = {
                  id: generateId(15),
                  slot_id: slot.User_Slot.slot_id,
                  user_id: slot.User_Slot.user_id,
                  default: false,
                  date: this_date,
                  original_date: this_date,
                  original_slot: slot.User_Slot.slot_id
                }
                values.push(obj)
              })
            }
          })
        })

        if (!values || values.length === 0) {
          return new Response('Job done, no user_slots found to insert!', { status: 200 })
        }

        await db.insert(User_Slot).values(values).run()
        await db
          .update(Slot_Setting)
          .set({ is_active: false })
          .where(inArray(Slot_Setting.id, toUpdate))
          .run()
      }
    }
  } catch (error) {
    console.error(error)
    return new Response(error.message, { status: 500 })
  }
  return new Response('Job done!', { status: 200 })
}
