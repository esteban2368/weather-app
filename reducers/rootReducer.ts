import metricReducer from "./metricReducer"
import locationUserReducer from "./locationUserReducer"
import searchedLocationsReducer from "./searchedLocationsReducer"

import { rootReducerType, rootReducerInitialState, rootActionType } from "@/types/reducers/rootReducer"
import { metricActionType } from "@/types/reducers/metricReducer"
import { locationActionType } from "@/types/reducers/locationUserReducer"
import { searchedLocationsActionType } from "@/types/reducers/searchedLocationsReducer"
import { geoApiResponseType } from "@/types/hooks"

const rootReducer = (state : rootReducerInitialState , action : rootActionType ) => {
    switch (action.reducer) {
        case 'metric': {
            return {
                ...state,
                metric: metricReducer( state.metric, action as metricActionType )
            }
        }
        case 'loc': {
            return {
                ...state,
                location: locationUserReducer(state.location, action as locationActionType)
            }
        }
        case 'se_loc': {
            return {
                ...state,
                searchedLocations: searchedLocationsReducer(state.searchedLocations, action as searchedLocationsActionType)
            }
        }
        default: {
            return state
        }
    }
}

export default rootReducer  