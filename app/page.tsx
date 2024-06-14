import Image from "next/image";
import ImageCloud from "@/components/ImageCloud"
import ForeCastListCard from "@/components/ForeCastsListCard"
import CurrentWeather from "@/ui/CurrentWeather"
import Switch from "@/components/Switch"

import { buttons } from "@/constant/components/Switch";

import styles from "@/styles/HomePage.module.scss"

export default async function Home() {
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
                  <span className="heading-6 fw-bold">7</span>
                  <span className="heading-5 fw-med">mph</span>
                </div>
                <div className="d-flex items-c gap-2">
                  <span className={`${styles.shape} d-flex items-c justify-c rounded-full bg-gray`}>
                    <span className="material-symbols-outlined color-lila md-05 fill">
                      near_me
                    </span>
                  </span>
                  <span className="heading-3">WSW</span>
                </div>
              </div>
              <div className="bg-secundary color-lila padding-6 d-flex flex-col items-c justify-c gap-2">
                <h3 className="heading-base fw-med">Visivility</h3>
                <div>
                  <span className="heading-6 fw-bold margin-r-4">6,4</span>
                  <span className="heading-5 fw-med">miles</span>
                </div>
              </div>
              <div className="bg-secundary color-lila padding-6 d-flex flex-col items-c justify-c gap-2">
                <h3 className="heading-base fw-med">Air Pressure</h3>
                <div>
                  <span className="heading-6 fw-bold margin-r-4">998</span>
                  <span className="heading-5 fw-med">mb</span>
                </div>
              </div>
            </div>
          </section>  
        </div>
    </main>
  );
}
