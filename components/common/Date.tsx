import { fromUnixTime,formatISO} from "date-fns"
import { format } from "date-fns-tz"
import { formatString } from "@/constant/components/common/Date"

interface props {
    unixTime: number
}
const Date = (
    {unixTime}: props
) => {
    const date = fromUnixTime(unixTime)
    console.log(unixTime, date)
    const stringDate = formatISO(date, {representation: 'date'})
    return (
        <time dateTime={stringDate}>
            {format(date, formatString, {
                timeZone: "Asia/Tokyo"
            } )}
        </time>
    )
}

export default Date

