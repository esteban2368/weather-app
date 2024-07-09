"use client"
import { useRootContext } from "@/providers/RootProvider"
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
    const globalState = useRootContext()
    const styleVariant = style[variant]

    return (
        <div className={styleVariant}>
            <span>{convertMetric(globalState.metric.value, value )}</span>
            <span>{globalState.metric.symbol}</span>  
        </div>
    )
}

export default Temperature