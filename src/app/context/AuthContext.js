'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase';

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            setUser(authUser);
        });
        
        return () => unsubscribe();
    }, [])
    return(<AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>)
}

export const UserAuth = () => {
    return useContext(AuthContext)
}

