export const convertMetric = (valueMetric: string, value: number) : number => {
    switch (valueMetric) {
        case "fahrenheit" : {
            return Math.round(value) 
        }
        case "celcius" :{
            return Math.round((value - 32) * 5 / 9)
        }
        case "kelvin" : {
            return Math.round((value - 32) * 5 / 9 + 273.15)
        }
        default: {
            throw Error(`Error to convert ${value}`)
        }
    }
}

export const financial = (value: number, fixed: number) => {
    return value.toFixed(fixed).toString().replace(".", ",")
} 