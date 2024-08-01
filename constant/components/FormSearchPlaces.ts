import { z } from "zod"

export const optionsFieltSearchPlaces = {
    required: "¡Search location is required!"
}

export const schemaSearchLocation = z.object({
    searchPlaces: z.string({
        required_error: "¡Search location is required!",
        invalid_type_error: "¡This is not a place's name valid!"
    }).trim().min(1, "¡Search location is required!")
}) 