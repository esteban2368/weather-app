"use client"
import Link from "next/link"
import ImageCloud from "@/components/ImageCloud"

import { currentWeather } from "@/services"
import { DEFAULT_LOCATION } from "@/constant/services"
import { useRootDispatchContext } from "@/providers/RootDispatchProvider"

import styles from "@/styles/HomePage.module.scss"
import { locationUserType } from "@/types/components/CurrentWeather"

const CurrentWeather = async () =>{
    const responseCurrentWeather = await currentWeather(DEFAULT_LOCATION)
    const dispatch = useRootDispatchContext()
    const handleChangeLocation = ({lat, lon}: locationUserType) => {
      dispatch && 
        dispatch({
          type: 'get_location_user',
          location: {
            lat: lat,
            lon: lon,
          },
          reducer: 'loc'
        })
    }
    return (
       <>
        <div className="row padding-l-4 padding-r-4 padding-t-5">
              <div className="column-10">
                <Link href="/search-places" scroll={false} className="button button-gray d-inline-b">
                  Search for places
                </Link>
              </div>
              <div className="column-2">
                <button 
                  role="button"
                  className={`${styles.buttonCircle} button button-gray rounded-full padding-0 margin-l-auto d-flex items-c justify-c`}
                  onClick={() => handleChangeLocation({lat: 40, lon: -25})}
                >
                  <span className="material-symbols-outlined md-2">
                    my_location
                  </span>
                </button>
              </div>
            </div>
            <ImageCloud info={responseCurrentWeather}/>
       </> 
    )
}

export default CurrentWeather