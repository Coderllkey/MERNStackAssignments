import React, { useState } from 'react'
import FormBox from './Form';
import List from './List';

const Main = () => {

    const [userobject, setUserobject] = useState([]);

const getUser = (param) =>{
    setUserobject([...userobject, param])


}

  return (
    <div>
        <FormBox getuser={getUser}/>
        <List userobject={userobject}/>

   </div>
  )
}

export default Main