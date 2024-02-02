'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { redirect } from 'next/dist/server/api-utils';

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loginError, setLoginError] = useState('')
    const [successRegister, setSuccessRegister] = useState('')

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            setUser(authUser);
        });
        
        return () => unsubscribe();
    }, [])

    const signup = async (values) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth,
                values.email,
                values.password
              );
            setSuccessRegister("Succesful register. Now sign in")
            console.log('user', user)
          } catch (error) {
            console.error('Error al registrar usuario:', error.message);
          }
    }

    const signin = async (value) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, value.email, value.password);
            setUser(userCredential.user);
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
    return(<AuthContext.Provider value={{user, signin, signup, logout, loginError, successRegister}}>{children}</AuthContext.Provider>)
}

export const useAuth = () => {
    return useContext(AuthContext)
}

