import React, { useEffect, useState } from 'react'
import Nav from './Nav';
import Addnote from './Addnote';
import DeleteIcon from '../svgs/DeleteIcon';
import Note from './Note';
import Intro from './Intro';

const Notes = () => {

    const [collect, setCollect] = useState([]);
    const [isLoad, setLoad] = useState(false);
    const [Error, setError] = useState(null);

    useEffect(()=>{
        getNotes()
    },[])
   

    const getNotes = async()=>{
          setLoad(true)
        try{
            const response = await fetch('https://fir-note-2f780-default-rtdb.firebaseio.com/note.json');
         if(!response.ok){
                throw new Error('fetching not good');
            }
            // console.log(response);
            const notes = await response.json();
         
            const Notearray = [];
            for (let key in notes){
                 Notearray.push({
                    id:key,
                    note :notes[key],
                 });
            }
         setCollect(Notearray);
        }
        catch(error){
            setError(error.message);
            console.log(error.message);
            
        }

 setLoad(false)
}

   

  return (
  <>
 <Nav totalnotes = {collect.length}/>

{!Error && !isLoad && (<> 
    <Addnote click={getNotes} />


 </>)}

    <div className='bg-violet-500 p-5 md:mx-auto md:w-1/2 rounded-lg my-5'>

        {isLoad && !Error && (<p className='text-white text-lg'>Fetching data from Firebase....</p>)}
        {Error && !isLoad && (<p className='text-white text-lg'> {Error} </p>)}

        {collect.length<1 && (<>
            <Intro/>
            </>)}
{!isLoad && !Error && (<>
    {collect.map((note,index)=>(
            <div key={index} >
         
            <Note click={getNotes}  note={note}  />
            </div>
            
        ))}
</>) } 

       
    </div>
  </>
  
  )
}

export default Notes