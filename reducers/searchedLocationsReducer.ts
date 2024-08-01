import { geoApiResponseType } from "@/types/hooks"
import { searchedLocationsActionType } from "@/types/reducers/searchedLocationsReducer"

const searchedLocationsReducer = (searchedLocations: geoApiResponseType[] | null, action: searchedLocationsActionType  ) => {
    switch (action.type) {
        case 'change_searched_locations': {
            return action.list
        }
        default: {
            throw new Error(`Unknow error ${action.type}`)
        }
    }
}

export default searchedLocationsReducer