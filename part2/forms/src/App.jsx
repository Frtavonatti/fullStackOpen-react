import { useState } from 'react'
import './App.css'
import { Note } from './Components/Note'

function App (props) {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('') 
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    } 
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const notesToShow = showAll 
    ? notes 
    : notes.filter((note) => note.important === true) 

  return (
    <>
      <h1>Notes</h1>
      <div>
        <button style={showAll ?
           {backgroundColor: 'green'} 
            : {backgroundColor: 'blue'}}

          onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'only important' : 'all' }

        </button>
      </div>
      <ul>
        {notesToShow.map((note) => 
          <Note key={note.id} notes={note}/> 
        )}
      </ul>

      <form onSubmit={addNote}>
        <input 
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>   
    </>
  )
}

export default App  