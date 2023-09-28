'use client'
import React, { createContext } from 'react'

export const Fecth = createContext();

const getData = async () => {
    let res = await fetch('https://dummyjson.com/products');
    if(!res.ok){
      console.log('No Data Fecth');
    }
    return res.json();
}


const ApiFecth = async ({children}) => {
    const data = await getData();
  return (
    <div>
      <Fecth.Provider value={data}>
        {children}
      </Fecth.Provider>
    </div>
  )
}

export default ApiFecth
