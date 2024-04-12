import React from 'react'
import App from '../App'
import { Header } from './Header'
import { Content } from './Content'
import { Total } from './Total'

const Course = ({ courses }) => {
  return (
    <>
      { courses.map((course) => 
        <div key={course.id}>
          <Header name={course.name} />       
          <Content course={course.parts} />
          <Total course={course.parts} />
        </div> 
      )}
    </>
  )
}

export default Course