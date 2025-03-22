export function getSizeNames(): object {
  return {
    1: 'P',
    4: 'G4',
    5: 'G5',
    8: 'G8'
  }
}

export function getWeekDayNames(): object {
  return {
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes'
  }
}

export function getWeekDayMobileNames(): object {
  return {
    1: 'L',
    2: 'M',
    3: 'X',
    4: 'J',
    5: 'V'
  }
}

export function getHours(): object {
  return {
    8: '08:00 - 9:00',
    9: '09:00 - 10:00',
    10: '10:00 - 11:00',
    11: '11:00 - 12:00',
    12: '12:00 - 13:00',
    13: '13:00 - 14:00',
    14: '14:00 - 15:00',
    15: '15:00 - 16:00',
    16: '16:00 - 17:00',
    17: '17:00 - 18:00',
    18: '18:00 - 19:00',
    19: '19:00 - 20:00',
    20: '20:00 - 21:00',
    21: '21:00 - 22:00',
    22: '22:00 - 23:00'
  }
}

export function getFullName(name: string): string {
  const fullname = name?.split(' ')
  return fullname && fullname[0] && fullname[0][0] ? fullname[0][0] : ''
}
