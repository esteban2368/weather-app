import { DEFAULT_METRIC } from "../components/Switch"
import { INITIAL_GEO_STATE } from "../components/CurrentWeather"

export const initialRootState = {
    metric: DEFAULT_METRIC,
    location: INITIAL_GEO_STATE
}