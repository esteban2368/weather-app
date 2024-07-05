import metricReducer from "./metricReducer"
import locationUserReducer from "./locationUserReducer"

import { rootReducerType, rootReducerInitialState } from "@/types/reducers/rootReducer"

const rootReducer = (state : rootReducerInitialState , action : rootReducerType ) => {
    return {
        metric: metricReducer( state.metric, action.metric ),
        locationUser: locationUserReducer( state.location, action.locationUser),
    }
}

export default rootReducer  