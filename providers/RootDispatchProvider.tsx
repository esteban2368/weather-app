"use client"
import { createContext, useContext, Dispatch } from "react"
import { rootActionType } from "@/types/reducers/rootReducer";

interface props{
    children: React.ReactNode;
    dispatchValue: Dispatch<rootActionType>
}
const RootDispatchContext = createContext<Dispatch<rootActionType> | null>(null)

export const useRootDispatchContext = () => useContext(RootDispatchContext)

const  RootDispatchProvider = ({
    children,
    dispatchValue
}: props) => {
    return (
        <RootDispatchContext.Provider value={dispatchValue}>
            {children}
        </RootDispatchContext.Provider>
    )
}

export default RootDispatchProvider