function NumberList({ persons, filteredPersons }) {

  return (
    <div>
    <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person) => <li key={person.id}> {person.name} : {person.number} </li> )}
      </ul>
    </div>
  )
}

export { NumberList }
