import { createContext, useContext, useState } from "react";

// Create a Context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

// Share the created context with other components

export default function AuthProvider({ children }) {
    // Put some state in the context
    const [number, setNumber] = useState(0)
    const [isAuthenticated, setAuthenticated] = useState(false)
    
    return (
        <AuthContext.Provider value={{ number, isAuthenticated, setAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}