import React from 'react'

function PersonForm({ newName, newNumber, handleNameInputChange, handleNumberInputChange, handleSubmit }) {
  return (
    <form>
        <h3>Complete new contact data</h3>
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
  )
}

export { PersonForm }
