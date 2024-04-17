const Note = ({ note, style, toggleImportance, deleteNote }) => {
  const label = note.important
    ? 'make not important' : 'make important'

  return (
    <li>
      {note.content} 
      <button 
        style= {note.important ? {color: 'red', margin:'0.5rem'} : {color: 'green', margin:'0.5rem'}}
        onClick={toggleImportance}>{label}
      </button>

      <button 
        onClick={deleteNote}
      >
        Delete
      </button>
    </li>
  )
}

export { Note }