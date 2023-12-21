import React from 'react'
import Counter from './Components/Counter'
import Welcome from './Components/Welcome'
import Navbar from './Components/Navbar'
import { useSelector } from 'react-redux'

const App = () => {

  const isLogin = useSelector((state)=>state.auth.isLogin)

  return (
    <div className='px-5'>
      <Navbar/>

      
      {!isLogin && (<Welcome/>)}
      {isLogin && (<Counter/>)}
     
    </div>
  )
}

export default App