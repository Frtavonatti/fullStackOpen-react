const Note = ({ note, style, toggleImportance }) => {
  const label = note.important
    ? 'make not important' : 'make important'

  return (
    <li>
      {note.content} 
      <button 
        style= {note.important ? {color: 'green', margin:'0.5rem'} : {color: 'red', margin:'0.5rem'}}
        onClick={toggleImportance}>{label}</button>
    </li>
  )
}

export { Note }