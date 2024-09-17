import { format, parseISO } from "date-fns"

export default function useDateTimeFormat() {

    const toLocal = date => {
        if (!date) return ''
        return format(parseISO(date), "yyyy-MM-dd'T'HH:mm")
    }
    const toUTC = date => new Date(date).toISOString()

    return { toLocal, toUTC }
}
