import React, { useState } from 'react'

const Form = (props) => {

    const [name,setName] = useState("");
    const [age,setAdd] = useState("");

    const trackName = (e)=>{
        setName(e.target.value);
    }

    const trackAdd = (e)=>{
        setAdd(e.target.value);
    }
    const gotData = (e) =>{
        e.preventDefault();
        let data = {
            name,
            age
        }
    props.call(data)
    setName('')
    setAdd('')
    }

  return (
    <form  onSubmit={gotData}>
        <input type='text' placeholder='name' onChange={trackName} value={name}/> <br/><br/>
        <input type='text' placeholder='age' onChange={trackAdd} value={age}/><br/><br/>
        <input type='submit' value="go"/>

    </form>
  )
}

export default Form