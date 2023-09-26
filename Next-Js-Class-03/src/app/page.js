'use client'
import { Theme } from './context/ThemeContext';
import { Auth } from './context/AuthContext';
import { useContext } from 'react'
export default function Home() {
  const {theme , setTheme} = useContext(Theme);
  const {user , setUser} = useContext(Auth);

  const userInfoChange = () => {
    if(user.age == 20){
      setUser({
        name : 'Faiz',
        age : 25,
        class : 'Necessary'
      })
    }else {
      setUser({
        name : 'Atta',
        age : 20,
        class : 'KGS-I'
      })
    }
  }
  
  return (
    <>
    <div className='text-center'>
    <h1 className='text-3xl font-bold bg-indigo-800 text-indigo-50 py-5'>Name : {user.name}: Age : {user.age} : Class : {user.class} </h1>
    <button className='bg-green-600 px-3 py-2 rounded-md my-4 font-bold text-indigo-50' onClick={userInfoChange}>Change_Info_User</button>
    <h1 className='text-3xl font-bold text-indigo-50 py-5' style={{backgroundColor : theme}} onClick={() => theme == 'red' ? setTheme('black') : setTheme('red')}>Theme</h1>
    </div>
    </>
  )
}

