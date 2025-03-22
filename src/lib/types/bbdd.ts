export interface ClaseByDate {
  [date: string]: Clase[] | undefined
}

export interface Clase {
  id: string
  user_id: string
  week_day: number
  start_hour: number
  end_hour: number
  size: number
  start: number
  end: number
  color: string
  today: boolean
  date: string | undefined
  User_Slots: Participante[]
}

export interface Participante {
  id: string
  user_id: string
  slot_id: string
  default: boolean
  date: string
}

export interface Usuario {
  id: string
  google_id: string | null
  description: string | null
  email: string
  name: string
  is_admin: boolean
  is_active: boolean
}
