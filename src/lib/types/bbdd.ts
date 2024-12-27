export interface ClaseByDate {
  [date: string]: Clase[]
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
  email: string
  name: string
  password: string | null
  is_admin: boolean
}
