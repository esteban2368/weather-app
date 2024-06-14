"use client"
import { createContext, useContext } from "react"
import { metricType } from "@/types/reducers/metricReducer"
import { DEFAULT_METRIC as dMetric } from "@/constant/components/Switch"

interface props {
    children: React.ReactNode;
    metric: {value:metricType, symbol: string}
}
const MetricContext = createContext(dMetric) 

export const useMetricContext = () => useContext(MetricContext)

const MetricProvider = ({
    children,
    metric
}: props) => {
    return (
        <MetricContext.Provider value={metric}>
            {children}
        </MetricContext.Provider>
    )

}

export default MetricProvider