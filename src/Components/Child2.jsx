import React, { useContext } from 'react'
import FirstContextProvider, { FirstContext } from '../Contexts/FirstContext'
import Child3 from './Child3'

const Child2 = (props) => {
const {user} = useContext(FirstContext)
  return (
    <div>Child2

        {user}
        <FirstContextProvider>
            <Child3/>
        </FirstContextProvider>

    </div>
  )
}

export default Child2