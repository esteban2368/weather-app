import { locationUserType } from "@/types/components/CurrentWeather"
import { locationActionType} from "@/types/reducers/locationUserReducer"

const locationUserReducer = (location: locationUserType, action : locationActionType ) => {
    switch (action.type) {
        case "get_location_user": {
            return action.location
        }
        default: {
            throw new Error( `No case for type ${action.type}`)
        }
    }
}

export default locationUserReducer