import React, { useContext } from 'react'
import Child2 from './Child2'
import FirstContextProvider, { FirstContext } from '../Contexts/FirstContext'

const Child1 = (props) => {
    const {user} = useContext(FirstContext);
  return (
    <div>
        
        Child1

        {user}

    </div>

  )
}

export default Child1