import React, { useContext } from 'react'
import { FirstContext } from '../Contexts/FirstContext'

const Child3 = () => {
const {user} = useContext(FirstContext)

  return (
    <div>Child3{user}</div>
  )
}

export default Child3