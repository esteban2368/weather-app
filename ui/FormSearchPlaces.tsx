"use client"
import { useEffect, useState } from "react"
import useGeoApi from "@/hooks/useGeoApi"
import { useRootDispatchContext } from "@/providers/RootDispatchProvider"

import { schemaSearchLocation } from "@/constant/components/FormSearchPlaces"
import { InputType } from "@/types/components/FormSearchPlaces"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, SubmitHandler } from "react-hook-form"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

import StyleSearchPlaces from "@/styles/search-places/page.module.scss"

const FormSearchPlaces = () => {
    const [searchPlaces, setSearchPlaces] = useState<string>('')
    const [shouldFetch, setShouldFetch] = useState(false)
    const distpatch = useRootDispatchContext()

    const {isLoading, dataGeoApi, isError  } = useGeoApi(searchPlaces, shouldFetch)

    useEffect(()=> {
        console.log("loading", isLoading)
        if(!isLoading) distpatch && distpatch({
            type: 'change_searched_locations',
            list: dataGeoApi!,
            reducer: 'se_loc'
        })
    }, [isLoading])

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            
        }
    } = useForm<InputType>({
        resolver: zodResolver(schemaSearchLocation)
    })


    errors.searchPlaces && 
        withReactContent(Swal).fire({
            text: errors.searchPlaces?.message,
            icon: "warning",
            position: "top",
            color: "#616475",
            background: "#1E213A",
            showConfirmButton: false,
            timer: 2000
        })
        
    const onSubmit: SubmitHandler<InputType> = (data, e) => {
        setShouldFetch(true)
        setSearchPlaces(data.searchPlaces)
    }

    console.log("fetch", shouldFetch)
    return (
        <form className="row" onSubmit={handleSubmit(onSubmit)}>
            <div className="column-9">
                <div className={`${StyleSearchPlaces.inputSearch} h-full padding-4 d-flex items-c gap-2`}>
                    <span className="material-symbols-outlined md-2 ">
                        search
                    </span>
                    <input 
                        {...register("searchPlaces")}
                        type='text' 
                        className={`w-full h-full bg-secundary`}
                        placeholder="search location"
                    />
                </div>
            </div>
            <div className="column-3 d-flex justify-e">
                <button type="submit" className="button button-purple h-full" disabled={isLoading}>
                    {isLoading ? 'Searching...' : 'Search'}
                </button>
            </div>
        </form>
    )
}

export default FormSearchPlaces