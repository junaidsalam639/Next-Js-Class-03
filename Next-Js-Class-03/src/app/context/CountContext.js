'use client'
import {  createContext, useState } from "react";

export const Count = createContext();

export default function CountContext ({children}){
    const [count , setCount] = useState(0);
    return(
        <>
        <Count.Provider value={{count , setCount}}>
            {children}
        </Count.Provider>
        </>
    )
}