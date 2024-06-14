
export type metricType = "celcius"  | "fahrenheit" | "kelvin"

export type metricActionType = {
    type: "change_metric";
    value: metricType;
    symbol: string
}