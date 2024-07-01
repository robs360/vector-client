import {
    createUserWithEmailAndPassword, getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "./firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const singIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unSubscribe();
        }
    }, [])
    const authInfo = {
        user, createUser, loading, singIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
export default Authprovider