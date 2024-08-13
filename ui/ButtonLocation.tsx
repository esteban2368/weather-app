"use client"
import { useEffect } from "react"
import { useRootDispatchContext } from "@/providers/RootDispatchProvider"
import { useLocationUser } from "@/hooks/useLocationUser"
import { locationUserType } from "@/types/components/CurrentWeather"

import styles from "@/styles/HomePage.module.scss"

const ButtonLocation = () => {
    const dispatch = useRootDispatchContext()
    const {location, message, getPosition} = useLocationUser()
    
    useEffect(()=>{
      if (location) {
        handleChangeLocation(location)
      }
    }, [location])

    const handleChangeLocation = (location: locationUserType | null) => {
      dispatch && 
        dispatch({
          type: 'get_location_user',
          location: location,
          reducer: 'loc'
        })
    }
    return (
        <button 
            role="button"
            className={`${styles.buttonCircle} button button-gray rounded-full padding-0 margin-l-auto d-flex items-c justify-c`}
            onClick={() => handleChangeLocation(location)}
        >
            <span className="material-symbols-outlined md-2">
            my_location
            </span>
        </button>
    )
}

export default ButtonLocation