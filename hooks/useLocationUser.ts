"use client"
import { useCallback, useEffect, useState } from "react"
import { locationUserType } from "@/types/components/CurrentWeather"

export const useLocationUser = () => {
    const [location, setLocation] = useState<locationUserType | null>(null)
    const [message, setMessage] = useState<string | null>(null)

    const getPosition = useCallback(() => {
        if(!message && !location) {
            navigator.geolocation.getCurrentPosition(succsessLocation, errorLocation )
        }
    }, [])
    
    useEffect(() => {
        getPosition()
    }, [getPosition])

    const succsessLocation = (position: GeolocationPosition) => {
        setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude
        })
    }

    const errorLocation = (err: GeolocationPositionError) => {
        setMessage(err.message)
    }

    

    return {location, message, getPosition}
}


