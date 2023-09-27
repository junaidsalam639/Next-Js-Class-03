'use client'
import { Theme } from './context/ThemeContext';
import { Auth } from './context/AuthContext';
import { useContext } from 'react'
export default function Home() {
  const {theme , setTheme} = useContext(Theme);
  const {user , setUser} = useContext(Auth);
  const {count , setCount} = useContext(Theme);
  console.log(count);
  const Increament = () => {
    setCount(count + 1)
  }
  const Decreament = () => {
    setCount(count - 1)
  }
  return (
    <>
    <div className='text-center'>
    <h1 className='text-3xl font-bold bg-indigo-800 text-indigo-50 py-5'>Name : {user.name}: Age : {user.age} : Class : {user.class} </h1>
    <h1 className='text-3xl font-bold text-indigo-50 py-5' style={{backgroundColor : theme}} onClick={() => theme == 'red' ? setTheme('black') : setTheme('red')}>Theme</h1>
    <h1 className='text-3xl font-bold bg-indigo-800 text-indigo-50 py-5'>
      <h1>Count : {count}</h1>
    <button className='bg-rose-600 px-3 py-2 my-2 rounded-md mx-2' onClick={Increament}>Count</button>
    <button className='bg-rose-600 px-3 py-2 my-2 rounded-md mx-2' onClick={Decreament}>Count</button>
    </h1>
    </div>
    </>
  )
}

