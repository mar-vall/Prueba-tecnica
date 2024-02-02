'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { redirect } from 'next/dist/server/api-utils';

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loginError, setLoginError] = useState('')

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            setUser(authUser);
            console.log('useEffect', authUser)
        });
        
        return () => unsubscribe();
    }, [])

    const signin = async (value) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, value.email, value.password);
            if(userCredential.user){
            setUser(userCredential.user);
            console.log('userFIrebase', userCredential.user)
            }
        } catch (error) {
            console.error(error)
            setLoginError('Invalid credentials')
        }
        
    }

    const logout = async () =>{
            try {
                
                await auth.signOut()
            } catch (error) {
                console.error(error)
            }

    }
    return(<AuthContext.Provider value={{user, signin, logout, loginError}}>{children}</AuthContext.Provider>)
}

export const useAuth = () => {
    return useContext(AuthContext)
}

