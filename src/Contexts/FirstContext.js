import { createContext,useState } from "react";

export const FirstContext = createContext(null);


const FirstContextProvider = (props) => {
  const [user,setUser] = useState("amuan");

  return (
    <FirstContext.Provider value={{user}}>
    {props.children}
    </FirstContext.Provider>
  )
}

export default FirstContextProvider