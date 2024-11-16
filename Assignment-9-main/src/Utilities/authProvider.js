import React, { createContext, useContext, useState} from "react";

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const actions = {
        logUserIn: () => {
            setIsLoggedIn(true)
        },

        logUserOut: () => {
            setIsLoggedIn(false)
        }
    }

    return (
        <AuthContext.Provider value={{isLoggedIn, actions}}>{children}</AuthContext.Provider>
    )
}

const useAuth = () => {
    return useContext(AuthContext)
}

export { AuthProvider, useAuth}