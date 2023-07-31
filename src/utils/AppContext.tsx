import React, { ReactNode, useState } from "react";
import { DATA_LOCAL_STORAGE } from "./envariables";

export const AppContext = React.createContext({})

export function AppProvider({children}: {children: ReactNode}) {
    // @ts-ignore
    const [appData,setAppData] = useState(JSON.parse(localStorage.getItem(DATA_LOCAL_STORAGE)) || [])
    const [selectorMode, setSelectorMode] = useState([])
    return (
        <AppContext.Provider value={{ appData, setAppData, selectorMode, setSelectorMode }}>
        {children}
        </AppContext.Provider>
        )
}