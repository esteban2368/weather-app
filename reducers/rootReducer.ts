import metricReducer from "./metricReducer"
import locationUserReducer from "./locationUserReducer"
import modalVisibleReducer from "./modalVisibleReducer"

import { rootReducerType, rootReducerInitialState, rootActionType } from "@/types/reducers/rootReducer"
import { metricActionType } from "@/types/reducers/metricReducer"
import { locationActionType } from "@/types/reducers/locationUserReducer"
import { modalVisbleActionType } from "@/types/reducers/modalVisibleReducer"

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
        case 'visible': {
            return {
                ...state,
                modalVisible: modalVisibleReducer(state.modalVisible, action as modalVisbleActionType)
            }
        }
        default: {
            return state
        }
    }
}

export default rootReducer  