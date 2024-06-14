"use client"
import { useMetricContext } from "@/providers/MetricProvider"
import { convertMetric } from "@/utils"
import style from "@/styles/components/common/Temperature.module.scss"

interface props {
    variant?: string,
    value: number
}
const Temperature = ({
    variant = "level-1",
    value
}: props) => {
    const metric = useMetricContext()
    const styleVariant = style[variant]

    return (
        <div className={styleVariant}>
            <span>{convertMetric(metric.value, value )}</span>
            <span>{metric.symbol}</span>  
        </div>
    )
}

export default Temperature