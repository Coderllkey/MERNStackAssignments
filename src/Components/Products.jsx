import React from 'react'

const Products = ({product}) => {
    const {title,price,category,description,image}=product;
  return (
  <section className='bg-blue-200 w-96  my-5 h-fit  p-5'>
            <h3 className='font-bold'>{title}</h3>
        <img className='' src={image} alt={title}/>
        <p>{description}</p>
            <div>$ {price}</div>


  
  </section>
  )
}

export default Products