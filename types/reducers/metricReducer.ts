
export type metricType = "celcius"  | "fahrenheit" | "kelvin"

export interface metricActionType
    {
        type: "change_metric";
        value: metricType;
        symbol: string;
        reducer: string
    }