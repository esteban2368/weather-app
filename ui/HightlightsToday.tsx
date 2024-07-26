"use client"
import ProgressBar from "@/components/ProgressBar"
import Skeleton from "@/components/common/Skeleton"
import WindDegree from "@/ui/WindDegree"
import { financial } from "@/utils"
import { useRootContext } from "@/providers/RootProvider"
import useWeather from "@/hooks/useWeather"

import { WeatherResponse } from "@/types/services"
import { DEFAULT_LOCATION } from "@/constant/services"

const HightlightsToday = () => {
    const globalState = useRootContext()
    const dataWeatherLocation = globalState.location ?? DEFAULT_LOCATION
    const {data, isLoading, isError} = useWeather(dataWeatherLocation)

    if(isError) return <div>Eroor</div>
    if (isLoading) return (
        <div className="d-flex flex-col gap-5">
            {Array.from({length: 4}, (_ , index) =>
                <Skeleton
                    key={index}
                    width="100%"
                    height={151}
                    classStyle="rounded-lg"
                />
            )}
        </div>
    )

    const weatherResponse = data!

    return (
        <div className="d-flex flex-col gap-5">
            <h2 className="color-lila">Today's Hightlights</h2>
            <div className="bg-secundary color-lila padding-6 d-flex flex-col items-c justify-c gap-2">
            <h3 className="heading-base fw-med">Wind status</h3>
            <div>
                <span className="heading-6 fw-bold margin-r-2">{Math.round(weatherResponse.wind.speed)}</span>
                <span className="heading-5 fw-med">mph</span>
            </div>
            <div className="d-flex items-c gap-2">
                <WindDegree degree={weatherResponse.wind.deg}/>
                <span className="heading-3">WSW</span>
            </div>
            </div>
            <div className="bg-secundary color-lila padding-6 d-flex flex-col items-c justify-c gap-2">
            <h3 className="heading-base fw-med">Humidity</h3>
            <div>
                <span className="heading-6 fw-bold margin-r-2">{weatherResponse.main.humidity}</span>
                <span className="heading-5 fw-med">%</span>
            </div>
            <div className="d-flex items-c gap-2 w-full">
                <ProgressBar value={weatherResponse.main.humidity}/>
            </div>
            </div>
            <div className="bg-secundary color-lila padding-6 d-flex flex-col items-c justify-c gap-2">
            <h3 className="heading-base fw-med">Visivility</h3>
            <div>
                <span className="heading-6 fw-bold margin-r-4">
                {financial(weatherResponse.visibility / 1609, 1)}
                </span>
                <span className="heading-5 fw-med">miles</span>
            </div>
            </div>
            <div className="bg-secundary color-lila padding-6 d-flex flex-col items-c justify-c gap-2">
            <h3 className="heading-base fw-med">Air Pressure</h3>
            <div>
                <span className="heading-6 fw-bold margin-r-4">
                {financial(weatherResponse.main.pressure / 100, 1)}
                </span>
                <span className="heading-5 fw-med">mb</span>
            </div>
            </div>
      </div>
    )
}

export default HightlightsToday