import React, { createContext, useState } from 'react'
import { getFromLocalStorage } from '../helpers/storage'

export const AuthContext = createContext()
export const AuthContextProvider = ({children}) => {
    const [auth, setAuth] = useState(() => getFromLocalStorage('auth'))
    return(
        <AuthContext.Provider value={{auth, setAuth}} >
            {children}
        </AuthContext.Provider>
    )
}
