import React from 'react'
import { useContext } from 'react'
import { NoteContext } from '../context/NoteContext'

function Home() {
    const {notes,loading}=useContext(NoteContext)
    console.log(notes)
    if(loading){
        return(<div className='flex items-center justify-center h-screen'><p className='text-2xl font-bold'>Loading...</p></div>)
    }
  if(notes.length===0){
    return(<div className='flex items-center justify-center h-screen'><p className='text-2xl font-bold'>No Notes Found</p></div>)
}
return(
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 '>
       {notes.map((note,index)=>(
        <Notecard key={index} note={note}/>
       ))}
    </div>
)
}

export default Home