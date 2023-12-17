import React, { useState } from 'react'

const Addnote = ({click}) => {

    const [note, setNote] = useState("");
    const addNote = async(e)=>{
    e.preventDefault();
    try{
        await fetch('https://fir-note-2f780-default-rtdb.firebaseio.com/note.json',
        {
            method: "POST",
            body: JSON.stringify(note),
            headers:{
                "Content-Type":"application/json",
            },
    
        }
       );
   setNote("");
   click();
    }
    catch(er){
        alert('something has gone wrong. Please contact the developer')
    }

   

    }
  return (
 
    <form className='bg-violet-500 p-5 justify-between flex md:w-1/2 rounded-lg md:mx-auto' onSubmit={addNote}>
    
        <input type="text" id="inputField" name="inputField" placeholder="Type something..."
          className="appearance-none border rounded-md me-1 w-4/5   py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={e=>setNote(e.target.value)}
          value={note}
          />
 

        <button type="submit"
          className="bg-white text-violet-500 hover:bg-violet-600 hover:text-white font-bold py-2 px-4 rounded focus:bg-violet-800">
          Submit
        </button>

    </form>



  )
}

export default Addnote