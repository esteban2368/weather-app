interface localNamesType {
    an: string
}

export interface geoApiResponseType {
    name: string,
    local_names: localNamesType,
    lat: number,
    lon: number,
    country: string,
    state: string
}