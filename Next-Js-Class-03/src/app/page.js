'use client'
import { Theme } from './context/ThemeContext';
import { Auth } from './context/AuthContext';
import { useContext } from 'react'
export default function Home() {
  const {theme , setTheme} = useContext(Theme);
  const {user , setUser} = useContext(Auth);
  console.log(user.userName);
  return (
    <>
    <h1 className='text-center text-3xl font-bold bg-indigo-800 text-indigo-50 py-5'>Name :{user.userName}: Age : {user.age} : Class : {user.class} </h1>
    <h1 className='text-center text-3xl font-bold text-indigo-50 py-5 my-4' style={{backgroundColor : theme}} onClick={() => theme == 'red' ? setTheme('black') : setTheme('red')}>Theme</h1>
    </>
  )
}

