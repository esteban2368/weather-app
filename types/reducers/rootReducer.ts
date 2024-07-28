import { metricActionType, metricType } from "./metricReducer"
import { locationActionType } from "./locationUserReducer"
import { locationUserType } from "../components/CurrentWeather";
import { modalVisbleActionType } from "./modalVisibleReducer";

export interface rootReducerType {
    metric: metricActionType;
    locationUser: locationActionType | null;
    modalVisible: modalVisbleActionType
}

export interface  rootReducerInitialState {
    metric: {value: metricType, symbol: string};
    location: locationUserType;
    modalVisible: boolean
}

export type rootActionType = metricActionType | locationActionType | modalVisbleActionType