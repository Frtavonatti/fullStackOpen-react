import { useState } from 'react'
import './App.css'
import { Note } from './Components/Note'

function App(props) {
  const [notes, setNotes] = useState(props.notes)
  // console.log(notes)

  return (
    <>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => 
          <Note key={note.id} notes={note}/> 
        )}
      </ul>
    </>
  )
}

export default App