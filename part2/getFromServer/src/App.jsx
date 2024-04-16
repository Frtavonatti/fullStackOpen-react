import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const getData = () => {
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        setNotes(response.data)
      })
  }
  
  useEffect(getData, [])

  const handleInputChange = (event) => {
    setNewNote(event.target.value)
  }

  const addNote = event => {
    event.preventDefault()
    console.log(newNote);
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1
    }
    // setNotes([...notes, noteObject])
    axios
      .post('http://localhost:3001/notes', noteObject)
      .then(response => {
          setNotes(notes.concat(response.data))
        })
      setNewNote('')
  }

  return (
    <>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => <li key={note.id}> {note.content} </li> )}
      </ul>

    <form>
      <input value={newNote} onChange={handleInputChange} type="text" />
      <button onClick={addNote} type="button">Add new</button>
    </form>

    </>
  )
}

export default App
