import React from 'react'
import { useNavigate } from "react-router-dom"

const Error = () => {
    const Navigate = useNavigate();

    const go = ()=>{

            Navigate("/about")
    }
  return (
    <>
    <div>Pge not found</div>
    <button onClick={go}> return  </button>
    </>
  )
}

export default Error