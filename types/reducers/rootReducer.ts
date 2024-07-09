import { metricActionType, metricType } from "./metricReducer"
import { locationActionType } from "./locationUserReducer"
import { locationUserType } from "../components/CurrentWeather";

export interface rootReducerType {
    metric: metricActionType,
    locationUser: locationActionType
}

export interface  rootReducerInitialState {
    metric: {value: metricType, symbol: string};
    location: locationUserType
}

export type rootActionType = metricActionType | locationActionType