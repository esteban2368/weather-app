"use client"
import { createContext, useContext, Dispatch } from "react"
import { metricActionType } from "@/types/reducers/metricReducer"

interface props{
    children: React.ReactNode;
    dispatchValue: Dispatch<metricActionType>
}
const MetricDispatchContext = createContext<Dispatch<metricActionType> | null>(null)

export const useMetricDispatchContext = () => useContext(MetricDispatchContext)

const MetricDispatchProvider = ({
    children,
    dispatchValue
}: props) => {
    return (
        <MetricDispatchContext.Provider value={dispatchValue}>
            {children}
        </MetricDispatchContext.Provider>
    )
}

export default MetricDispatchProvider