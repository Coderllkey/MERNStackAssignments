import React from 'react'
import {useDispatch, useSelector} from "react-redux"

const Counter = () => {
    const counter = useSelector((state)=>state.counter)
    const isShow = useSelector(state=>state.isShow)
    const dispatch = useDispatch();
    const increaseHandler = ()=>{
           dispatch({type:"increase"});
    }
    const decreaseHandler = ()=>{
        dispatch({type:"decrease"});
    }
    const randomHandler=()=>{
        dispatch({type:"random"})
    }
    const toggleHandler=()=>{
        dispatch({type:"toggle"})
    }
  return (
    <div className='bg-sky-300 w-fit p-5 rounded-lg mx-auto mt-10'>
        <h2 className='text-2xl font-bold text-center'>Redux Counter</h2>
        <p className='text-center my-5 text-xl'>
            {isShow && (<> {counter} </>)}
            
            </p>
        <hr/>
        <div className='mt-5'>
        <button onClick={increaseHandler} className='bg-white text-sky-700 p-2 rounded-md mx-2 focus:bg-sky-500 focus:text-white'>Increase</button>
        <button onClick={decreaseHandler} className='bg-white text-sky-700 p-2 rounded-md mx-2 focus:bg-sky-500 focus:text-white'>Decrease</button>
        <button onClick={randomHandler} className='bg-white text-sky-700 p-2 rounded-md mx-2 focus:bg-sky-500 focus:text-white'>Random</button>
        <button onClick={toggleHandler} className='bg-white text-sky-700 p-2 rounded-md mx-2 focus:bg-sky-500 focus:text-white'>Toggle</button>


             
        </div>
       
    </div>
  )
}

export default Counter