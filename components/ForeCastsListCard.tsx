import Image from "next/image"
import Temperature from "./common/Temperature"
import Date from "./common/Date"
import uuid4 from "uuid4"
import { ImageForeCast } from '@/constant/imageSize'
import { iconsForeCast } from "@/constant/components/ForeCastListCard"
import { dailyForecast, Forecast } from "@/types/services"

import { forecastDaily } from "@/services"

const ForeCastListCard = async ({
    dataForecast
}: {
  dataForecast: Forecast  
}) => {
    
    const dataForeCast = dataForecast?.timelines?.daily
    return (
        <div className="d-flex justify-c flex-wrap gap-4">
            {dataForeCast?.slice(1, dataForeCast.length).map((daily: dailyForecast) => {
                return <div className="bg-secundary padding-5 color-lila d-flex flex-col items-c" key={uuid4()}>
                    <h3 className="heading-base fw-med">
                        <Date time={daily.time}/>
                    </h3>
                    <Image
                        className="margin-b-5"
                        alt="Image forecast tomorrow"
                        src={`${iconsForeCast[daily.values.weatherCodeMax]}.svg`}
                        width={ImageForeCast.width}
                        height={ImageForeCast.height}
                    />
                    <div className="d-flex gap-2">
                        <Temperature variant="level-2" value={daily.values.temperatureApparentMin}/>
                        <Temperature variant="level-3" value={daily.values.temperatureApparentMax}/>
                    </div>
                </div>
            })}
        </div>
    )
}

export default ForeCastListCard