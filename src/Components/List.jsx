import React from 'react'
import { ACTION } from './Todo'

const List = ({state, dispatch}) => {
  return (
    <div>
        {state.map((info)=>{
          return(
            <div className='flex justify-between my-2'>

<div key={info.id} style={{color: info.complete ? "#AAA":"#000"}}>
            {info.name}<br/>
            </div>
            <div>
                <button onClick={()=>dispatch({type:ACTION.TOGGLE,payload:{id: info.id}})} className='bg-white text-indigo-400 px-1 mx-2 rounded-md'>Toggle</button>
                <button onClick={()=>dispatch({type:ACTION.DELETE, payload:{id:info.id}})} className='bg-white text-red-400 px-1 mx-2 rounded-md'>Delete</button>
                
            </div>

            </div>
           
        
          )
        })}
    </div>
  )
}

export default List