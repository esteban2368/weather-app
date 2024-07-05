"use client"
import { useMetricDispatchContext } from "@/providers/MetricDispatchProvider"
import { useMetricContext } from "@/providers/MetricProvider"

import { metricType } from "@/types/reducers/metricReducer"

import style from "@/styles/components/Switch.module.scss"

interface button{
    text: string;
    value: metricType;
}

interface props{
    buttons: button[]
}

const Switch =  ({buttons}: props) => {
    const dispatch = useMetricDispatchContext()
    const metric = useMetricContext()

    const handleChangeMetric = (metric: metricType, symbol: string) => {
        dispatch && 
            dispatch({
                type: "change_metric",
                value: metric,
                symbol: symbol
            })
    }
    return (
        <div className="d-flex justify-c justify-sm-e  gap-2 ">
            {buttons.map((button: button, index) =>
                <button 
                    key={index} 
                    role="button" 
                    onClick={() => handleChangeMetric(button.value, button.text)}
                    className={`${style.button} button button-grayish-purple ${metric.value === button.value && 'button-lila pointer-none'} rounded-full fw-bold`}
                >
                    {button.text}
                </button>
            )}
        </div>
    )
} 

export default Switch