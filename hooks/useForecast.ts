"use client"
import useSWR from "swr"
import axios from "axios"
import { locationUserType } from "@/types/components/CurrentWeather"
import { Forecast } from "@/types/services"

import { DEFAULT_UNIT_TEMP as UNIT } from "@/constant/services"

export const forecastEndpoint: string = process.env.NEXT_PUBLIC_URL_FORECAST_ENDPOINT!

const forecastInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL_WEATHER_FORECAST_API,
    headers: {'Content-Type': 'application/json'}
})

const fetcher = async (forecastEndpoint: string, position: locationUserType, timesteps: string): Promise<Forecast> => {
    const response = await forecastInstance.get(forecastEndpoint, {
        params: {
            location: `${position?.lat},${position?.lon}`,
            timesteps,
            units: UNIT,
            apikey: process.env.NEXT_PUBLIC_KEY_WEATHER_FORECAST_API
        }
    })
    return response.data
}

const useForecast = (position: locationUserType, timesteps: string) => {
    const {data, isLoading, error} = useSWR(
        [forecastEndpoint, position, timesteps], 
        ([forecastEndpoint, position, timesteps]) => 
            fetcher(forecastEndpoint, position, timesteps),
        {   
            revalidateOnFocus: false,
            refreshInterval: 100000
        }
    )

    return {
        data,
        isError: error,
        isLoading: !data && !error
    }
}

export default useForecast