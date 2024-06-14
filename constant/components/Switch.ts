import { buttonType } from "@/types/components/Switch"
import { metricType } from "@/types/reducers/metricReducer"

export const DEFAULT_METRIC: {value: metricType, symbol: string} = {
    value: "celcius",
    symbol: "°C"
}

export const buttons:buttonType[] = [
    {
        text: "°C",
        value: "celcius"
    },
    {
        text: "°F",
        value: "fahrenheit"
    },
    {
        text: "°k",
        value: "kelvin"
    }
]