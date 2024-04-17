import './App.css'
import { useState, useEffect } from 'react'
import { Note } from './Components/Note'
import axios from 'axios'
import noteService from './services/notes'

function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  // const getData = () => {
  //   axios
  //     .get('http://localhost:3001/notes')
  //     .then(response => {
  //       setNotes(response.data)
  //     })
  // }
  // useEffect(getData, [])

  useEffect(() => {
    noteService
      .getAll()
      .then(response => {
        setNotes(response)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const handleInputChange = (event) => {
    setNewNote(event.target.value)
  }

  const addNote = event => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: (notes.length + 1).toString()
    }
    // setNotes([...notes, noteObject])
    axios
      .post('http://localhost:3001/notes', noteObject)
      .then(response => {
          setNotes(notes.concat(response.data))
        })
      setNewNote('')
  }

  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id)

    axios
    .delete(`http://localhost:3001/notes/${id}`)
    .then(response => {
      console.log(response)
      setNotes(updatedNotes)
    })
  }

  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    axios.put(url, changedNote)
      .then(response => {
      setNotes(notes.map(note => note.id !== id ? note : response.data))
    })
  }

  return (
    <>
      <h1>Notes</h1>
      <ul>
        {/* {notes.map((note) => <li key={note.id}> {note.content} </li> )} */}
        {notes.map((note, i) => 
          <Note
          key={i}
          note={note} 
          style= {note.style}
          deleteNote={() => deleteNote(note.id)} 
          toggleImportance={() => toggleImportanceOf(note.id)}
        />
      )}
      </ul>

    <form>
      <input value={newNote} onChange={handleInputChange} type="text" />
      <button onClick={addNote} type="button">Add new</button>
    </form>

    </>
  )
}

export default App
