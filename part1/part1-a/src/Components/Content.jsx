import React from 'react'

function Content({ parts }) {

  parts.map((part, index) => (
    <p> {part.name}: {part.exercises} </p>
  ))

  return (
    <div>
      {  parts.map(part => (
          <p key={part.name}> 
            {part.name}: {part.exercises} 
          </p>
      ))}
    </div>
  )
}

export default Content
