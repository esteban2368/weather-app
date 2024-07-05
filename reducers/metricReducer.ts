import { metricActionType, metricType } from "@/types/reducers/metricReducer"

const metricReducer = (metric : {value: metricType, symbol: string}, action: metricActionType) => {
    switch (action.type) {
        case 'change_metric': {
            return {
                value: action.value,
                symbol: action.symbol
            }
        }
        default: {
            throw Error(`Unknow error ${action.type}`)
        }
    }
}  


export default metricReducer