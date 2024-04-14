import './App.css'
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
  ]) 
  const [newName, setNewName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
    }
    newName === '' 
    ? console.log('Agrega mas información') 
    : setPersons(persons.concat(newPerson));
    setNewName('')
  }

  const handleInputChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleInputChange}/>
        </div>
        <div>
          <button
            style={{backgroundColor: 'green', marginTop: '1rem'}}
            onClick={handleSubmit} type="submit">
              add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => <li key={person.name}> {person.name} </li> )}
      </ul>
    </div>
  )
}

export default App
