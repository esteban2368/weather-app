import { metricActionType, metricType } from "./metricReducer"
import { locationActionType } from "./locationUserReducer"
import { locationUserType } from "../components/CurrentWeather";
import { searchedLocationsActionType } from "./searchedLocationsReducer";
import { geoApiResponseType } from "../hooks";

export interface rootReducerType {
    metric: metricActionType;
    locationUser: locationActionType | null;
    searchedLocations: searchedLocationsActionType
}

export interface  rootReducerInitialState {
    metric: {value: metricType, symbol: string};
    location: locationUserType;
    searchedLocations: geoApiResponseType[] | null
}

export type rootActionType = metricActionType | locationActionType | searchedLocationsActionType