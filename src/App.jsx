import React, { useEffect, useState } from 'react'
import Products from './Components/Products'

const App = () => {

  const [products, setProducts] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);

 useEffect(()=>{
  getProducts();
 },[]);

 const getProducts = async()=>{
  try{
    setIsloading(true);
    const response =await fetch('https://fakestoreapi.com/products');
    if(!response.ok){
       throw new Error("No Product available currently. Please visit later")
    }
    const Data = await response.json();
    setProducts(Data);

 }
  
  catch(error){

setIsError(error.message)
  }
  setIsloading(false);

}

  return (
    <>
      <h1 className='font-bold  my-5 text-center'>My SHOP</h1>
          <div className='c flex gap-5 justify-evenly '>
          {products.map((product)=>(
              <Products product={product} key={product.id}   />
          ))}
          </div>
          {isloading && (
              <p>
              Loading Page...
            </p>
          )}
          {isError && (
            <h3>
              {isError}
            </h3>
          )}
        
    </>
   
  )
}

export default App