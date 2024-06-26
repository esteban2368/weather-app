type Latitude = number
type Longitude = number


export interface typeQueryParamsSearhByName{
    location: string;
    limitResults: number
}

export interface typeLocation{
    name: string;
    country: string;
    lat: Latitude;
    lon: Longitude;
}

export interface Main{
    temp: number;
    humidity: number;
    pressure: number
}
export interface Wind{
    speed: number;
    deg: number
}

export interface Sys{
    id: string;
    country: string
}

export interface Weather{
    main: string;
    icon: string;

}

export interface WeatherResponse {    
    visibility: number;
    dt: number;
    name: string;
    main: Main;
    wind: Wind;
    weather: Weather[];
    sys: Sys;
}