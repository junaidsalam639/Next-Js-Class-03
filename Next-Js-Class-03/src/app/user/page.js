'use client'
import React ,  { useContext } from 'react';
import { Fecth } from '../context/ApiFecth';
import Link from 'next/link';

const page = () => {
    const fecth = useContext(Fecth);

  return (
    <div>
      {
        fecth.products.map((data , index) => {
          console.log(data.id);
            return(
                <>
                <Link key={index} href={`user/${data.id}`}>
                <button className='border-2 border-indigo-600 py-2 px-3 mx-2 my-3'>
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






