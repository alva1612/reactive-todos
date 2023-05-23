import { differenceInMinutes, parseJSON } from "date-fns";
import { TIME } from '../Constants/time'

export function getTimeElapsed(date: Date | string) {
    let checkDate: Date
    if (typeof date === 'string')
        checkDate = parseJSON(date)
    else
        checkDate = date
    const currentTime = new Date()
    const timeDifference = differenceInMinutes(currentTime, checkDate)
    return timeDifference
}

export function diffInMinutesToView(diffInMinutes: number) {
    let numberOfUnit: number
    let unitInMinutes: number
    let unit: string
    if (diffInMinutes > TIME.WEEK_IN_MINUTES) {
        unitInMinutes = TIME.WEEK_IN_MINUTES
        unit = "semana"
    } else if (diffInMinutes > TIME.DAY_IN_MINUTES) {
        unitInMinutes = TIME.DAY_IN_MINUTES
        unit = "día"
    } else if (diffInMinutes > TIME.HOUR_IN_MINUTES) {
        unitInMinutes = TIME.HOUR_IN_MINUTES
        unit = "hora"
    } else if (diffInMinutes >= 1) {
        unitInMinutes = 1
        unit = "minuto"
    } else {
        return 'menos de un minuto'
    }
    numberOfUnit = Math.floor(diffInMinutes / unitInMinutes)
    return `más de ${numberOfUnit} ${numberOfUnit > 1 ? unit + 's' : unit}`

}