import useSWR from "swr"
import axios from "axios"

import { LIMIT_PLACES } from "@/constant/hooks/useGeoApi"
import { geoApiResponseType } from "@/types/hooks"

const urlKey = process.env.NEXT_PUBLIC_URL_GEOCODING_ENDPOINT!

const geoApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL_WEATHER_API,
    headers: { 'Content-Type': 'application/json' }
})

const fetcher = async (urlKey: string, place: string): Promise<geoApiResponseType[]> => {
    const response = await geoApi.get(urlKey, {
        params: {
            q: place,
            limit: LIMIT_PLACES,
            appid: process.env.NEXT_PUBLIC_KEY_WEATHER_API
        }
    })
    return response.data
}
const useGeoApi = (place: string , shouldFetch: boolean) => {
    const { data, isLoading, error } = useSWR(
        shouldFetch ? [urlKey, place] : null, 
        ([urlKey, place])=> 
            fetcher(urlKey!, place))

    return {
        dataGeoApi: data,
        isLoading,
        isError: error
    }
}

export default useGeoApi