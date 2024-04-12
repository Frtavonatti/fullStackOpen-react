import React from 'react'

function Total({ course }) {
    const sumOfCourseExercises = course.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <footer>
            <p><strong> { `Total of Exercises: 
                ${sumOfCourseExercises}` }
            </strong></p>
    </footer>
  )
}

export  { Total }
