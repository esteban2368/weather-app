"use client"
import { useReducer } from "react"
import MetricDispatchProvider from "@/providers/MetricDispatchProvider"
import MetricProvider from "@/providers/MetricProvider"

import metricReducer from "@/reducers/metricReducer"
import { metricType } from "@/types/reducers/metricReducer"
import { DEFAULT_METRIC as dMetric } from "@/constant/components/Switch"

interface props {
    children: React.ReactNode
}

const Providers = ({children}: props) => {
    const [metric, dispatch] =  useReducer(metricReducer, dMetric)


    return (
        <MetricProvider metric={metric}>
            <MetricDispatchProvider dispatchValue={dispatch}>
                {children}
            </MetricDispatchProvider>
        </MetricProvider>
    )
}

export default Providers