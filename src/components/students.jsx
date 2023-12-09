import React, { useState } from 'react'

function Students(props) {
 
  const [name,setName] = useState(props.name);

  const show = () =>{
     setName('another name');
  }
  return (
    <div className='card'>
      
        name : {name} <br/>
        age : {props.age}<br/>
        <button onClick={show}>click</button>
      
  
        </div>
  )
}

export default Students;