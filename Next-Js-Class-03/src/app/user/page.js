'use client'
import React ,  { useContext } from 'react';
import { Fecth } from '../context/ApiFecth';
import Link from 'next/link';

const page = () => {
    const fecth = useContext(Fecth);
  return (
    <div>
      <h1 className='bg-indigo-800 text-indigo-50 text-center py-5 font-bold text-3xl'>Brand</h1> <br />
      {
        fecth.products.map((data , index) => {
            return(
                <>
                <Link key={index} href={`user/${data.id}`}>
                <button className='border-2 border-indigo-600 py-2 px-3 mx-2 my-3 rounded-md bg-indigo-100'>
                    {data.brand}
                </button>
                </Link>
                </>
            )
        })
      }   
    </div>
  )
}

export default page






