'use client'
import {  createContext, useState } from "react";

export const Auth = createContext();

export default function AuthContext ({children}){
    const [user , setUser] = useState({
        userName : 'Junaid',
        age  : '20',
        class : 'web and App'
    });
    return(
        <>
        <Auth.Provider value={{user , setUser}}>
            {children}
        </Auth.Provider>
        </>
    )
}