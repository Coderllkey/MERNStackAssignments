import React, { useReducer, useState } from 'react'
import List from './List'

const reduce = (state, action)=>{
    switch (action.type) {
        case ACTION.ADD:
 return [...state, addNew(action.payload.name)]
        case ACTION.TOGGLE:
            return state.map((todo)=>{
              if(todo.id === action.payload.id){
                return{...todo, complete: !todo.complete}
              }
              return todo;
            })
        case ACTION.DELETE:
            return state.filter((todo)=>todo.id !== action.payload.id)
    
        default:
            return state;
    }
}

 export const ACTION = {
    ADD:'add',
    TOGGLE:'toggle-todo',
    DELETE:'delete'
}

const addNew=(name)=>{
    return {
        id:Date.now(),
         name:name,
         complete:false
    }
}
const Todo = () => {

    const [lists, setList] = useState("");
    // const [listarr, setListarr] = useState([]);

    const [ state, dispatch ] = useReducer(reduce,[]);

    const addList =(e)=>{
        e.preventDefault();

        dispatch({type:ACTION.ADD,payload:{name:lists}});
        // listarr.push(lists);
        setList("");
    }
// console.log(lists);
// console.log(state);
  return (
    <div className='bg-blue-300 w-1/2 px-10 rounded-lg mx-auto mt-5'>
        <p className='text-2xl text-center font-bold'>My To-do App</p> <br/>
        <form className='flex justify-center' onSubmit={addList} >
        <div className='flex '>
        <input onChange={e=>setList(e.target.value)} type="text" value={lists} className='bg-white-400  border p-1 rounded-lg border-gray-400 ' placeholder='Type your todos here' /><br/>
        <button className='bg-white px-1 mx-2  rounded-md text-blue-400 focus:bg-blue-500 focus:text-white' type='submit'> Note </button>
       
        </div>
        </form>
       
                <div>
                <List state={state} dispatch={dispatch}/>
            </div>
 
       
    </div>
  )
}

export default Todo