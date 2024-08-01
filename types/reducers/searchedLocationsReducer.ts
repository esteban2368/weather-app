import { geoApiResponseType } from "../hooks";

export interface searchedLocationsActionType 
{
    type: 'change_searched_locations';
    list: geoApiResponseType[] | null;
    reducer: string
}