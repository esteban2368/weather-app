"use client"
import { createContext, useContext } from "react"
import { metricType } from "@/types/reducers/metricReducer"

import { initialRootState } from "@/constant/reducers/rootReducers";
import { rootReducerInitialState } from "@/types/reducers/rootReducer";

interface props {
    children: React.ReactNode;
    metric: rootReducerInitialState
}
const RootContext = createContext(initialRootState) 

export const useRootContext = () => useContext(RootContext)

const RootProvider = ({
    children,
    metric
}: props) => {
    return (
        <RootContext.Provider value={metric}>
            {children}
        </RootContext.Provider>
    )

}

export default RootProvider