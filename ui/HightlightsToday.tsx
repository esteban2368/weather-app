import ProgressBar from "@/components/ProgressBar"
import { financial } from "@/utils"
import WindDegree from "@/ui/WindDegree"

import { WeatherResponse } from "@/types/services"

const HightlightsToday = ({
    dataWeather
}:{
    dataWeather: WeatherResponse
}) => {
    return (
        <div className="d-flex flex-col gap-5">
            <h2 className="color-lila">Today's Hightlights</h2>
            <div className="bg-secundary color-lila padding-6 d-flex flex-col items-c justify-c gap-2">
            <h3 className="heading-base fw-med">Wind status</h3>
            <div>
                <span className="heading-6 fw-bold margin-r-2">{Math.round(dataWeather.wind.speed)}</span>
                <span className="heading-5 fw-med">mph</span>
            </div>
            <div className="d-flex items-c gap-2">
                <WindDegree degree={dataWeather.wind.deg}/>
                <span className="heading-3">WSW</span>
            </div>
            </div>
            <div className="bg-secundary color-lila padding-6 d-flex flex-col items-c justify-c gap-2">
            <h3 className="heading-base fw-med">Humidity</h3>
            <div>
                <span className="heading-6 fw-bold margin-r-2">{dataWeather.main.humidity}</span>
                <span className="heading-5 fw-med">%</span>
            </div>
            <div className="d-flex items-c gap-2 w-full">
                <ProgressBar value={dataWeather.main.humidity}/>
            </div>
            </div>
            <div className="bg-secundary color-lila padding-6 d-flex flex-col items-c justify-c gap-2">
            <h3 className="heading-base fw-med">Visivility</h3>
            <div>
                <span className="heading-6 fw-bold margin-r-4">
                {financial(dataWeather.visibility / 1609, 1)}
                </span>
                <span className="heading-5 fw-med">miles</span>
            </div>
            </div>
            <div className="bg-secundary color-lila padding-6 d-flex flex-col items-c justify-c gap-2">
            <h3 className="heading-base fw-med">Air Pressure</h3>
            <div>
                <span className="heading-6 fw-bold margin-r-4">
                {financial(dataWeather.main.pressure / 100, 1)}
                </span>
                <span className="heading-5 fw-med">mb</span>
            </div>
            </div>
      </div>
    )
}

export default HightlightsToday