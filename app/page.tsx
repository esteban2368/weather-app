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
          <section className="column-12 column-md-4 bg-secundary h-auto h-lg-screen">
            <CurrentWeather/>
          </section>
          <section className="column-12 column-md-8">
            <div className="container container--content d-flex flex-col gap-10 padding-md-6 padding-t-7 padding-b-6">
              <Switch buttons={buttons}/>
              <ForeCastListCard/>
              <HightlightsToday/>
            </div>
          </section>  
        </div>
    </main>
  );
}
