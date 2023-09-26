'use client'
import {  createContext, useState } from "react";

export const Theme = createContext();

export default function ThemeContext ({children}){
    const [theme , setTheme] = useState('red');
    return(
        <>
        <Theme.Provider value={{theme , setTheme}}>
            {children}
        </Theme.Provider>
        </>
    )
}
