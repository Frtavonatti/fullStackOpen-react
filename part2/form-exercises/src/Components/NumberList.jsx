import { PersonForm } from "./PersonForm"

function NumberList({ persons, filteredPersons, deletePerson }) {

  return (
    <div>
    <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person) => 
          <div>
            <li key={person.id}> {person.name} : {person.number} </li> 
            <button onClick={() => deletePerson(person.id)}  key={'b' + person.id} type="button">Delete</button>
          </div>
      )}
      </ul>
    </div>
  )
}

export { NumberList }
