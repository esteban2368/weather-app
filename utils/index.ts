export const convertMetric = (valueMetric: string, value: number) : number => {
    switch (valueMetric) {
        case "celcius" :{
            return Math.round(value) 
        }
        case "kelvin" : {
            return Math.round(value + 273.15)
        }
        case "fahrenheit" : {
            return Math.round((value * 9 / 5) + 32)
        }
        default: {
            throw Error(`Error to convert ${value}`)
        }
    }
}