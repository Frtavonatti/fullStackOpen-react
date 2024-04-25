import './App.css'
import { useEffect, useState } from 'react'
import { Search } from './Components/Search'
import { PersonForm } from './Components/PersonForm'
import { NumberList } from './Components/NumberList'
import { Message } from './Components/Message'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [newMessage, setNewMessage] = useState(null)


  const getData = () => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => setPersons(response.data))
  }
  useEffect(getData, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
      id: (persons.length + 1).toString() ,
    }

    const nameExists = persons.some(person => person.name === newName)
    newName === '' || newNumber === ''
    ? alert('You shoud complete all fields')
    : nameExists 
      ? alert(`${newPerson.name} is already added to phonebook`) 
      : axios
        .post(`http://localhost:3001/persons`, newPerson)
        .then(response => {
          setPersons(persons.concat(newPerson))
          setNewMessage(`${newName} was added successfully`)
      });
    setNewName('')
    setNewNumber('')
  }

  const deletePerson = (id) => {
    const updatedList = persons.filter(p => p.id !== id)
    axios
    .delete(`http://localhost:3001/persons/${id}`)
    .then(setPersons(updatedList))
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


      <Message message={newMessage} setMessage={setNewMessage} />
      <NumberList persons={persons} filteredPersons={filteredPersons} deletePerson={deletePerson}/>
    </div>
  )
}

export default App