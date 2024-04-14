import './App.css'
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: 999999,
      id: 0 
    },
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    const nameExists = persons.some(person => person.name === newName)
    
    newName === '' 
    ? alert('Void')
    : nameExists 
      ? alert(`${newPerson.name} is already added to phonebook`) 
      : setPersons(persons.concat(newPerson));
    setNewName('')
  }

  const handleNameInputChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberInputChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameInputChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberInputChange}/>
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
        {persons.map((person) => <li key={person.id}> {person.name} : {person.number} </li> )}
      </ul>
    </div>
  )
}

export default App
