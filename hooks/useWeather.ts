"use client"
import useSWR from "swr"
import axios from "axios"

import { locationUserType } from "@/types/components/CurrentWeather"
import { WeatherResponse } from "@/types/services"
import { DEFAULT_UNIT_TEMP as units } from "@/constant/services"

export const weatherEndpoint: string = process.env.NEXT_PUBLIC_URL_CURRENT_WEATHER_ENDPOINT

const weatherApi = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_URL_WEATHER_API}`,
    headers: { 'Content-Type': 'application/json' }
})

export const fetcher = async (urlKey: string, position: locationUserType) : Promise<WeatherResponse> =>{
    const response = await weatherApi.get(urlKey, {
        params: {
            lat: position?.lat,
            lon: position?.lon,
            units,
            appid: process.env.NEXT_PUBLIC_KEY_WEATHER_API
        }
    })
    return response.data
}

const useWeather = (position: locationUserType) => {
    const {data, error, isLoading} = useSWR(
        [weatherEndpoint, position], 
        ([weatherEndpoint, position]) => 
            fetcher(weatherEndpoint, position))

    return {
        data,
        isLoading : !error && !data ,
        isError : error
    }
}

export default useWeather