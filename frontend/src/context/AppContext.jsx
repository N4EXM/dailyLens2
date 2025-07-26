import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext()

export const AppContextProvider = ({children}) => {
    
    const [warningBox, setWarningBox] = useState(false)

    return (
        <AppContext.Provider value={{
            warningBox,
            setWarningBox
        }}>
            {children}
        </AppContext.Provider>
    )

}

export const useAppContext = () => useContext(AppContext)
