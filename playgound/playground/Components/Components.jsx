import React from 'react'

const Button = (props) => {
    return (
      <button onClick={props.onClick} style={props.style}>
        {props.text}
      </button>
    )
  }

const Display = ({style, counter}) => {
    return (
        <h2 style={style}>{counter}</h2>
    )
  }

  export { Button, Display };