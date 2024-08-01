import { DEFAULT_METRIC } from "../components/Switch"
import { rootReducerInitialState } from "@/types/reducers/rootReducer"

export const initialRootState: rootReducerInitialState = {
    metric: DEFAULT_METRIC,
    location: null,
    searchedLocations: null
}