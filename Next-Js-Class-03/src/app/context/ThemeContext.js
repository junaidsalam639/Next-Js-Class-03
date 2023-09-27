'use client'
import {  createContext, useState } from "react";

export const Theme = createContext();

export default function ThemeContext ({children}){
    const [theme , setTheme] = useState('red');
    const [count , setCount] = useState(0);
    return(
        <>
        <Theme.Provider value={{theme , setTheme , count , setCount}}>
            {children}
        </Theme.Provider>
        </>
    )
}
