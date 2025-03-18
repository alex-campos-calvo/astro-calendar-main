import { column, defineDb, defineTable } from 'astro:db'

const User = defineTable({
  columns: {
    id: column.text({ primaryKey: true, optional: false, unique: true }),
    google_id: column.text({ optional: true }),
    email: column.text({ unique: true, optional: false }),
    name: column.text({ optional: false }),
    password: column.text({ optional: true }),
    is_admin: column.boolean({ optional: false }),
    is_active: column.boolean({ optional: false, default: false })
  }
})

const User_Slot = defineTable({
  columns: {
    id: column.text({ primaryKey: true, optional: false, unique: true }),
    user_id: column.text({ references: () => User.columns.id, optional: false }),
    slot_id: column.text({ references: () => Slot.columns.id, optional: false }),
    default: column.boolean({ optional: false, default: false }),
    date: column.text({ optional: true })
  }
})

const Slot = defineTable({
  columns: {
    id: column.text({ primaryKey: true, optional: false, unique: true }),
    user_id: column.text({ references: () => User.columns.id, optional: false }),
    week_day: column.number({ optional: false }),
    start_hour: column.number({ optional: false }),
    end_hour: column.number({ optional: false }),
    size: column.number({ optional: false })
  }
})

const Swap_History = defineTable({
  columns: {
    id: column.text({ primaryKey: true, optional: false, unique: true }),
    date: column.date({ optional: false, default: new Date() }),
    date_to: column.text({ optional: true }),
    date_from: column.text({ optional: true }),
    slot_to: column.text({ references: () => Slot.columns.id, optional: false }),
    slot_from: column.text({ references: () => Slot.columns.id, optional: false }),
    user_slot: column.text({
      references: () => User_Slot.columns.id,
      optional: false
    }),
    member_id: column.text({ references: () => User.columns.id, optional: false }),
    teacher_id: column.text({ references: () => User.columns.id, optional: false })
  }
})

const Delete_History = defineTable({
  columns: {
    id: column.text({ primaryKey: true, optional: false, unique: true }),
    date: column.date({ optional: false, default: new Date() }),
    slot_id: column.text({ references: () => Slot.columns.id, optional: false }),
    slot_date: column.text({ optional: false }),
    member_id: column.text({ references: () => User.columns.id, optional: false }),
    teacher_id: column.text({ references: () => User.columns.id, optional: false })
  }
})

const Slot_Setting = defineTable({
  columns: {
    id: column.text({ primaryKey: true, optional: false, unique: true }),
    start_date: column.text({ optional: false }),
    end_date: column.text({ optional: false }),
    is_active: column.boolean({ optional: false, default: true })
  }
})

const Session = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    expiresAt: column.date(),
    userId: column.text({ references: () => User.columns.id })
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { User, User_Slot, Slot, Swap_History, Slot_Setting, Session }
})
