import ImageCloud from "@/components/ImageCloud"
import ForeCastListCard from "@/components/ForeCastsListCard"
import { currentWeather } from "@/services";
import CurrentWeather from "@/ui/CurrentWeather"
import WindDegree from "@/ui/WindDegree"
import Switch from "@/components/Switch"
import ProgressBar from "@/components/ProgressBar";
import { financial } from "@/utils";
import { WeatherResponse } from "@/types/services"


import { DEFAULT_LOCATION } from "@/constant/services"
import { buttons } from "@/constant/components/Switch";

import styles from "@/styles/HomePage.module.scss"

export default async function Home() {
  const responseCurrentWeather = await currentWeather(DEFAULT_LOCATION)
  return (
    <main className={`${styles.main} container`}>
        <div className="row">
          <section className="column-12 bg-secundary">
            <CurrentWeather/>
          </section>
          <section className="column-12 d-flex flex-col gap-7 padding-6 padding-t-8 padding-b-8">
            <Switch buttons={buttons}/>
            <ForeCastListCard/>
            <div className="d-flex flex-col gap-5">
              <h2 className="color-lila">Today's Hightlights</h2>
              <div className="bg-secundary color-lila padding-6 d-flex flex-col items-c justify-c gap-2">
                <h3 className="heading-base fw-med">Wind status</h3>
                <div>
                  <span className="heading-6 fw-bold margin-r-2">{Math.round(responseCurrentWeather.wind.speed)}</span>
                  <span className="heading-5 fw-med">mph</span>
                </div>
                <div className="d-flex items-c gap-2">
                  <WindDegree degree={responseCurrentWeather.wind.deg}/>
                  <span className="heading-3">WSW</span>
                </div>
              </div>
              <div className="bg-secundary color-lila padding-6 d-flex flex-col items-c justify-c gap-2">
                <h3 className="heading-base fw-med">Humidity</h3>
                <div>
                  <span className="heading-6 fw-bold margin-r-2">{responseCurrentWeather.main.humidity}</span>
                  <span className="heading-5 fw-med">%</span>
                </div>
                <div className="d-flex items-c gap-2 w-full">
                  <ProgressBar value={responseCurrentWeather.main.humidity}/>
                </div>
              </div>
              <div className="bg-secundary color-lila padding-6 d-flex flex-col items-c justify-c gap-2">
                <h3 className="heading-base fw-med">Visivility</h3>
                <div>
                  <span className="heading-6 fw-bold margin-r-4">
                    {financial(responseCurrentWeather.visibility / 1609, 1)}
                  </span>
                  <span className="heading-5 fw-med">miles</span>
                </div>
              </div>
              <div className="bg-secundary color-lila padding-6 d-flex flex-col items-c justify-c gap-2">
                <h3 className="heading-base fw-med">Air Pressure</h3>
                <div>
                  <span className="heading-6 fw-bold margin-r-4">
                    {financial(responseCurrentWeather.main.pressure / 100, 1)}
                  </span>
                  <span className="heading-5 fw-med">mb</span>
                </div>
              </div>
            </div>
          </section>  
        </div>
    </main>
  );
}
