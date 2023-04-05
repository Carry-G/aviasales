import { add, format } from 'date-fns'

export const dateFormat = (date, duration) => {
  const data = new Date(date)
  const dateOutWay = format(data, 'HH:mm')
  const dateToWay = format(add(data, { minutes: duration }), 'HH:mm')
  return `${dateOutWay} - ${dateToWay}`
}
export const durationFormat = (duration) => {
  const hours = Math.floor(duration / 60)
    .toString()
    .padStart(2, '0')
  const minutes = (duration % 60).toString().padStart(2, '0')
  return `${hours}ч ${minutes}м`
}
export function transferFormat(count) {
  let value = ''
  if (count === 0) value = 'без пересадок'
  if (count === 1) value = `${count} пересадка`
  if (count > 1) value = `${count} пересадки`
  return value
}
