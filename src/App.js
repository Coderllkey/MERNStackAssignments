import Students from "./components/students";
import Form from "./components/One/Form";
import Background from "./components/One/Background";
import { useState } from "react";

function App(){

  const [students,setStudents ] = useState([])



const formCall =(param)=>{
  console.log(param);
  setStudents([...students,param])
}

let body = <p>Post something.</p>;

if(!students.length < 1){
  body = students.map((student)=>{
    return (
      <Students key={student.name} name={student.name} age={student.age} />
    )
  })
}


  return (
    <div>
    <h2>Home Page</h2>

   <div >
  {body}
   </div>
   


    <Background>
      <Form call={formCall} />
    </Background>


  
    

    </div>
  )
}

export default App;