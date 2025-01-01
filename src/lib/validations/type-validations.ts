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
