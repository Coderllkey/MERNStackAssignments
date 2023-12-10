import React, { useRef, useState } from 'react'

const Form = (props) => {
 

    const nameref = useRef()
    const addressref = useRef()
    const emailref = useRef()

    

const call =(event)=>{
    event.preventDefault();

    if(nameref.current.value.trim().length===0 || addressref.current.value.trim().length===0 || emailref.current.value.trim().length===0){
        alert('fill in valid information in the form')
        return;
    }
    else{
        let data = {
            name:nameref.current.value,
            address:addressref.current.value,
            email:emailref.current.value
        }
        props.getuser(data)
        // console.log(name, address, email)
     
        nameref.current.value=""
        addressref.current.value=""
        emailref.current.value=""

    }
}

    
  return (
    <form className='form bg' onSubmit={call}>
        <div className='form-div'>
            <label className='form-label'>Name</label>
            <input className='form-input' type='text'  ref={nameref}  />
        </div>
        <div className='form-div'>
            <label className='form-label'>Address</label>
            <input className='form-input' type='text'  ref={addressref}  />
        </div>
        <div className='form-div'>
            <label className='form-label'>Email</label>
            <input className='form-input' type='email' ref={emailref} />
        </div>
        <div className='form-container'>
        <button className='form-button' type='submit'>Go</button>

        </div>
        
    </form>
  )
}

export default Form