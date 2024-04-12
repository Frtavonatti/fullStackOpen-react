import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Display } from '../Components/Components'
import ConfettiExplosion from 'react-confetti-explosion'

//App
function App() {
  const [count, setCount] = useState(0)
  const [isExploding, setIsExploding] = React.useState(false);

  const increase = () => { 
    setCount(count +1)
    let solver = count + 1

    if (solver %3 === 0) {
      setIsExploding(true); // activa la explosión de confeti si el contador supera 10
    } else {
      setIsExploding(false)
    }
  }

  const decrease = () => { 
    setCount(count -1)
  }

  const resetCount = () => {
    setCount(count => count = 0)
    setIsExploding(false)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <h1>Vite + React</h1>

      <p> <strong>Consigue un multiplo de 3 y mira que pasa! 😎 </strong></p>
      <Display style={{
        padding: '1rem',
        backgroundColor: '#430A5D',
        border: '2px solid white ',
        borderRadius: '5px',
      }}
      counter={count} />

      <div className="card">

        <Button 
          onClick={increase} 
          text={'+'} 
          style={{color:'green'}} 
          // isExploding={isExploding}
          />

        <Button 
          onClick={decrease} 
          text={'-'} 
          style={{marginLeft: '1rem', color:'red'}}/> 

        <Button 
          onClick={resetCount} 
          text={'Reset'}
          style={{marginLeft: '1rem', background: 'red'}} 
          />
      </div>

      {isExploding && <ConfettiExplosion />} {/* Muestra la explosión de confeti si isExploding es true */}
    </>
  )
}

export default App