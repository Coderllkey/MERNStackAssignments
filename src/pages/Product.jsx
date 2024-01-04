import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {

const {id} = useParams();

  return (
    <div>
        <h2>This is a dynamic route.</h2>
        <p>The id is {id}</p>
    </div>
  )
}

export default Product