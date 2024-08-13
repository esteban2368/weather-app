import Link from "next/link"
import ImageCloud from "@/components/ImageCloud"
import ButtonLocation from "./ButtonLocation"

import { WeatherResponse } from "@/types/services"

import styles from "@/styles/HomePage.module.scss"

const CurrentWeather = () =>{
    
    return (
       <>
        <div className="row padding-l-8 padding-r-8 padding-t-7">
              <div className="column-10">
                <Link href="/search-places" scroll={false} className="button button-gray d-inline-b">
                  Search for places
                </Link>
              </div>
              <div className="column-2">
                <ButtonLocation/>
              </div>
            </div>
            <ImageCloud/>
       </> 
    )
}

export default CurrentWeather