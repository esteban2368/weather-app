import { fromUnixTime,formatISO} from "date-fns"
import { format } from "date-fns-tz"
import { formatString } from "@/constant/components/common/Date"

interface props<D> {
    time : D;
}
const Date = <D extends Date | number>(
    {
        time
    }: props<D>
) => {
    const date: Date =  typeof time === 'number' ? fromUnixTime(time) : time
    
    const stringDate = formatISO(date, {representation: 'date'})
    return (    
        <time dateTime={stringDate}>
            {format(date, formatString)}
        </time>
    )
}

export default Date

