import ForeCastListCard from "@/components/ForeCastsListCard"
import { currentWeather, forecastDaily } from "@/services";
import CurrentWeather from "@/ui/CurrentWeather"
import HightlightsToday from "@/ui/HightlightsToday"
import Switch from "@/components/Switch"


import { DEFAULT_LOCATION as location} from "@/constant/services"
import { buttons } from "@/constant/components/Switch"

import styles from "@/styles/HomePage.module.scss"

export default async function Home() {

  {/*const responseForecastData = forecastDaily(location, "daily")

  const forecastData = await responseForecastData*/}
  return (
    <main className={`${styles.main} container`}>
        <div className="row">
          <section className="column-12 bg-secundary">
            <CurrentWeather/>
          </section>
          <section className="column-12 d-flex flex-col gap-7 padding-6 padding-t-8 padding-b-8">
            <Switch buttons={buttons}/>
            {/*<ForeCastListCard dataForecast={forecastData}/>*/}
            {/*<HightlightsToday dataWeather={currentWeatherData}/>*/}
          </section>  
        </div>
    </main>
  );
}
