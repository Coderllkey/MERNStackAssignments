import React from 'react'
import DeleteIcon from '../svgs/DeleteIcon'

function Note({note, click}) {
    const {note : text, id} = note;

    const deleteNote = async()=>{

        try{
           const response =  await fetch (`https://fir-note-2f780-default-rtdb.firebaseio.com/note/${id}.json`,{
                method: 'DELETE',
               });
            if(!response.ok){
                throw new Error("Failed to Delete")
            }
               click();
        }
        catch(err){
alert(err.message);

        }
      
    }
  return (

    <div className='text-violet-600 flex justify-between bg-white rounded-lg p-2 m-3  text-lg '>
        + {text}
    
    <button onClick={deleteNote}><DeleteIcon/> </button> 
    
    </div>

  )
}

export default Note