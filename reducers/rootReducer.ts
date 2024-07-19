import metricReducer from "./metricReducer"
import locationUserReducer from "./locationUserReducer"

import { rootReducerType, rootReducerInitialState, rootActionType } from "@/types/reducers/rootReducer"
import { metricActionType } from "@/types/reducers/metricReducer"
import { locationActionType } from "@/types/reducers/locationUserReducer"

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
        default: {
            return state
        }
    }
}

export default rootReducer  