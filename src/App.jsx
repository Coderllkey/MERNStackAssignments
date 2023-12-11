import React, { useReducer, useState } from 'react'

const firstReducer = (state,action)=>{
    switch (action.type){
      case "minus":
        return {...state,num:state.num-1};
      case "plus":
        return {...state,num:state.num+1};
      case "text":
        return {...state,key:action.payload};
    }
}

const ACTION = {
  PLUS : 'plus',
  MINUS : 'minus',
  TEXT : 'text'
}
const App = () => {
  // const [key,setKey]=useState("");
  // const [num,setNum]=useState(0);

  const [state, dispatch] = useReducer(firstReducer, {num:0,key:""})


  return (
    <div>

      <input type="text" onChange={(event)=> dispatch({type:ACTION.TEXT,payload: event.target.value})} />
      <h3>Your Key is..{state.key}</h3>

      <div>
        <button onClick={()=>dispatch({type:ACTION.MINUS})  }>-</button>
        {state.num}
        <button onClick={()=>dispatch({type:ACTION.PLUS}) }>+</button>

      </div>

    </div>
  )
}

export default App