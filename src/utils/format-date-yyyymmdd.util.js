import { format } from 'date-fns'

const formatDateYYYYMMDD = (dateString = '') => {
    const date = new Date(dateString)
    return format(date, 'yyyy-MM-dd')
}

export default formatDateYYYYMMDD
