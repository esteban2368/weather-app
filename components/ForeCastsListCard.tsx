"use client"
import Image from "next/image"
import Temperature from "./common/Temperature"
import uuid4 from "uuid4"
import Date from "./common/Date"
import Skeleton from "./common/Skeleton"
import { useRootContext } from "@/providers/RootProvider"
import useForecast from "@/hooks/useForecast"
import { DEFAULT_LOCATION } from "@/constant/services"
import { ImageForeCast } from '@/constant/imageSize'
import { iconsForeCast } from "@/constant/components/ForeCastListCard"
import { dailyForecast, Forecast } from "@/types/services"

const ForeCastListCard = () => {
    const globalState = useRootContext()
    const positionUser = globalState?.location ?? DEFAULT_LOCATION
    const {data, isLoading, isError} = useForecast(positionUser, "daily")

    if(isError) return <div>Error</div>
    
    if(isLoading) return (
        <div className="d-flex justify-c flex-wrap gap-4">
            {Array.from({length:5}, (_, index) =>
                <Skeleton
                    key={uuid4()}
                    width={116}
                    height={170}
                    classStyle="round-lg"
                />
            )}
        </div>
    )

    const dataForeCast = data?.timelines?.daily
    return (
        <div className="d-flex justify-c justify-md-s flex-wrap gap-4">
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