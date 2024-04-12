import React from 'react'

function Content({ course }) {

  return (
    <section>
        {course.map(part =>  
            <li key={part.id}> 
                {part.name}: {part.exercises}
            </li>)}
    </section>
  )
}

export { Content }
