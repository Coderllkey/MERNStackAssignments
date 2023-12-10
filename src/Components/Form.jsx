import React, { useState } from 'react'

const Form = (props) => {
    const [name,setName] = useState("");
    const [address,setAddress] = useState("");
    const [email,setEmail] = useState("");

const call =(event)=>{
    event.preventDefault();

    if(name.trim().length===0 || address.trim().length===0 || email.trim().length===0){
        alert('fill in valid information in the form')
        return;
    }
    else{
        let data = {
            name,
            address,
            email
        }
        props.getuser(data)
        // console.log(name, address, email)
        setName("");
        setAddress("");
        setEmail("");
    }
}

    
  return (
    <form className='form bg' onSubmit={call}>
        <div className='form-div'>
            <label className='form-label'>Name</label>
            <input className='form-input' type='text' value={name} onChange={(e)=>{setName(e.target.value)}} />
        </div>
        <div className='form-div'>
            <label className='form-label'>Address</label>
            <input className='form-input' type='text' value={address} onChange={(e)=>{setAddress(e.target.value)}} />
        </div>
        <div className='form-div'>
            <label className='form-label'>Email</label>
            <input className='form-input' type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div className='form-container'>
        <button className='form-button' type='submit'>Go</button>

        </div>
        
    </form>
  )
}

export default Form