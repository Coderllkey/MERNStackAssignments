import React, { useState } from 'react'
import Child1 from './Components/Child1'
import FirstContextProvider from './Contexts/FirstContext'
import Child2 from './Components/Child2'

const App = () => {
  return (
    <div>
      <FirstContextProvider>
        <Child1/>
        <Child2/>
      </FirstContextProvider>

    </div>

  )
}

export default App