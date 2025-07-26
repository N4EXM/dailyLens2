import { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from './AuthContext'

const AppContext = createContext()

export const AppContextProvider = ({children}) => {
    
    const [warningBox, setWarningBox] = useState(false)
    const { isAuthenticated } = useAuth()

    useEffect(() => {
        if (isAuthenticated === false) setWarningBox(false)
    }, [isAuthenticated])

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
