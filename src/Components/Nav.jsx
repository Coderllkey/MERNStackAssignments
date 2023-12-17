import React from 'react'

const Nav = ({totalnotes}) => {
  return (
    <div className='flex justify-between md:w-3/5 md:mx-auto'>
      <h3 className='text-3xl text-violet-500 font-bold  my-5'>App for FireNote</h3>
      <div ><p className='text-white bg-violet-500 p-2 rounded-lg mt-5 '>Total notes : {totalnotes}</p></div>
    
    </div>
  )
}

export default Nav