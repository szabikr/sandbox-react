import { Remaining } from './types'

export function convertMilliseconds(ms: number): Remaining {
  const millisecondsInSecond = 1000
  const secondsInMinute = 60
  const minutesInHour = 60
  const hoursInDay = 24

  const milliseconds = ms % millisecondsInSecond
  const totalSeconds = Math.floor(ms / millisecondsInSecond)
  const seconds = totalSeconds % secondsInMinute
  const totalMinutes = Math.floor(totalSeconds / secondsInMinute)
  const minutes = totalMinutes % minutesInHour
  const totalHours = Math.floor(totalMinutes / minutesInHour)
  const hours = totalHours % hoursInDay
  const days = Math.floor(totalHours / hoursInDay)

  return {
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
  }
}

export function calcRemaining(eventDate: Date): Remaining {
  const difference = eventDate.getTime() - Date.now()
  return convertMilliseconds(difference)
}
