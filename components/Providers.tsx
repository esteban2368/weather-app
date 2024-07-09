"use client"
import { useReducer } from "react"
import RootDispatchProvider from "@/providers/RootDispatchProvider"
import RootProvider from "@/providers/RootProvider"

import rootReducer from "@/reducers/rootReducer"
import { metricType } from "@/types/reducers/metricReducer"
import { initialRootState } from "@/constant/reducers/rootReducers"

interface props {
    children: React.ReactNode
}

const Providers = ({children}: props) => {
    const [state, dispatch] =  useReducer(rootReducer, initialRootState)
    console.log(state)

    return (
        <RootProvider metric={state}>
            <RootDispatchProvider dispatchValue={dispatch}>
                {children}
            </RootDispatchProvider>
        </RootProvider>
    )
}

export default Providers