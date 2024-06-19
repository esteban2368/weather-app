import { buttonType } from "@/types/components/Switch"
import { metricType } from "@/types/reducers/metricReducer"

export const DEFAULT_METRIC: {value: metricType, symbol: string} = {
    value: "fahrenheit",
    symbol: "°F"
}

export const buttons:buttonType[] = [
    {
        text: "°k",
        value: "kelvin"
    },
    {
        text: "°C",
        value: "celcius"
    },
    {
        text: "°F",
        value: "fahrenheit"
    }
]