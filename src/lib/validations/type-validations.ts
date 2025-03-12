export function validateName(name: string): boolean {
  return !(typeof name !== 'string' || name.length < 3 || name.length > 255)
}

export function validateEmail(email: string): boolean {
  return !(
    typeof email !== 'string' ||
    email.length < 3 ||
    email.length > 255 ||
    !/.+@.+\..+/.test(email)
  )
}

export function validateWeekday(day: number): boolean {
  return !(day < 1 || day > 7)
}

export function validateSize(size: number): boolean {
  return !(size != 1 && size != 4 && size != 8)
}

export function validateHour(hour: number): boolean {
  return !(hour < 8 || hour > 22)
}
