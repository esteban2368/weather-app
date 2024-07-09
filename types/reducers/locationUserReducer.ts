import { locationUserType } from "../components/CurrentWeather"

export interface  locationActionType
    {
        type: "get_location_user";
        location: locationUserType;
        reducer: string
    }