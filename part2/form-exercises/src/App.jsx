import './App.css'
import { useState } from 'react'
import { Search } from './Components/Search'
import { PersonForm } from './Components/PersonForm'
import { NumberList } from './Components/NumberList'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    const nameExists = persons.some(person => person.name === newName)
    
    newName === '' || newNumber === ''
    ? alert('You shoud complete all fields')
    : nameExists 
      ? alert(`${newPerson.name} is already added to phonebook`) 
      : setPersons(persons.concat(newPerson));
    setNewName('')
    setNewNumber('')
  }

  const handleNameInputChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberInputChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchInputChange = (event) => {
    setNewSearch(event.target.value);
  }

  const filteredPersons = persons.filter((person) => person.name.toLowerCase().includes(newSearch.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Search newSearch={newSearch} handleSearchInputChange={handleSearchInputChange}/>
      <PersonForm newName={newName} newNumber={newNumber} handleNameInputChange={handleNameInputChange} handleNumberInputChange={handleNumberInputChange} handleSubmit={handleSubmit}/>
      <NumberList persons={persons} filteredPersons={filteredPersons}/>
    </div>
  )
}

export default App
