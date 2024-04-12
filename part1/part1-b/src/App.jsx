import React, { useState }  from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Anecdotes from './Anecdotes'

const Button = ({ count, onClick, text, style}) => 
  <button count={count} onClick={onClick} style={style}> 
    {text}
  </button>

const displayStyle = {
  border: '2px solid white',
  borderRadius: '5px',
  padding: '1rem',
  marginBottom: '0.8rem',
  backgroundColor: '#3B096A',
  fontWeight: 'bold',
  width: '400px',
}

const Display = (props) => <div style={displayStyle}>{props.text}{props.counter}</div>

function App() {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const decreaseState = (state, setState) => () => setState(state - 1)
  const increaseState = (state, setState) => () => setState(state + 1)
  const resetState = (state, setState) => () => setState(0)
  
  const allOpinions = bad + neutral + good
  const positiveReviewsRatio = (good / allOpinions) * 100;
  const positiveReviews = positiveReviewsRatio.toFixed(2) + '%';

   return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      <h1>Give Feedback</h1>
      </div>

      <div className="card">
        <Display counter={good} text={'Good Reviews: '}/>
        <Button text={'-'} count={good} onClick={decreaseState(good, setGood)} style={{color: 'red'}}/>
        <Button text={'+'} count={good} onClick={increaseState(good, setGood)} style={{color: 'green', marginLeft:'1rem'}}/>
        <Button text={'reset'} count={good} onClick={resetState(good, setGood)} style={{backgroundColor: 'red', marginLeft:'1rem'}}/>
      </div>

      <div className="card">
        <Display counter={bad} text={'Bad Reviews: '}/>
        <Button text={'-'} count={bad} onClick={decreaseState(bad, setBad)} style={{color: 'red'}}/>
        <Button text={'+'} count={bad} onClick={increaseState(bad, setBad)} style={{color: 'green', marginLeft:'1rem'}}/>
        <Button text={'reset'} count={bad} onClick={resetState(bad, setBad)} style={{backgroundColor: 'red', marginLeft:'1rem'}}/>
      </div>

      <div className="card">
        <Display counter={neutral} text={'Neutral Reviews: '} />
        <Button text={'-'} count={neutral} onClick={decreaseState(neutral, setNeutral)} style={{color: 'red'}}/>
        <Button text={'+'} count={neutral} onClick={increaseState(neutral, setNeutral)} style={{color: 'green', marginLeft:'1rem'}}/>
        <Button text={'reset'} count={neutral} onClick={resetState(neutral, setNeutral)} style={{backgroundColor: 'red', marginLeft:'1rem'}}/>
      </div>

      <h2>{`TOTAL: ${allOpinions}`}</h2>
      <h3>{`Positive Reviews: ${allOpinions ? positiveReviews : 'No feedback given'}`}</h3>

      <Anecdotes style={{width: '500px'}} />
    </>
  )
}

export default App