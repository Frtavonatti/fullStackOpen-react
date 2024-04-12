// import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Content from './Components/Content'
import Result from './Components/Result'

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const sum = course.parts.reduce((total, parts) => total + parts.exercises, 0)

  return (
    <div>
      <Header titleText={course.name}/>
      <Content parts={course.parts}/>
      <Result sum={sum} />
    </div>
  )
}

export default App
