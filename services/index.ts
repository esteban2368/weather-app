import { typeQueryParamsSearhByName, WeatherResponse, Forecast } from "@/types/services"
import { DEFAULT_UNIT_TEMP as UNIT } from "@/constant/services"

const headers = new Headers()
headers.append('content-Type', 'application/json')

export const searchCoorByCity = async (queryParams: typeQueryParamsSearhByName) => {
    const request = await fetch(
        `${process.env.URL_WEATHER_API}${process.env.URL_GEOCODING_ENDPOINT}?q=${queryParams.location}&cnt=${queryParams.limitResults}&appid=${process.env.KEY_WEATHER_API}`, 
        {
            headers: headers
        }
    )
    return request.json()
}

export const currentWeather = async (defaultLocation: string) : Promise<WeatherResponse> =>{
    const request = await fetch(
        `${process.env.URL_WEATHER_API}${process.env.URL_CURRENT_WEATHER_ENDPOINT}?q=${defaultLocation}&units=${UNIT}&appid=${process.env.KEY_WEATHER_API}`,
        {
            headers:headers
        }
    )
    return request.json()
}

export const forecastDaily = async (defaultLocation: string, timesteps:string) : Promise<Forecast> => {
    const request = await fetch(`${process.env.URL_WEATHER_FORECAST_API}${process.env.URL_FORECAST_ENDPOINT}?location=${defaultLocation}&timesteps=${timesteps}&units=${UNIT}&apikey=OQnuzrz5idNDBRE4bVhCwxB2SuunJUop`,
        {
            headers: headers
        }
    )

    return request.json()
}