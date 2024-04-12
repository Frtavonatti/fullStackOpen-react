import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';
import Anecdotes from './Anecdotes';

const Opinion = ({ text, count, onDecrease, onIncrease, onReset }) => (
  <div className="card">
    <div style={displayStyle}>{text}: {count}</div>
    <Button text={'-'} onClick={onDecrease} style={{color: 'red'}} />
    <Button text={'+'} onClick={onIncrease} style={{color: 'green', marginLeft: '1rem'}} />
    <Button text={'reset'} onClick={onReset} style={{backgroundColor: 'red', marginLeft: '1rem'}} />
  </div>
);

const Button = ({ text, onClick, style }) => (
  <button onClick={onClick} style={style}>{text}</button>
);

const displayStyle = {
  border: '2px solid white',
  borderRadius: '5px',
  padding: '1rem',
  marginBottom: '0.8rem',
  backgroundColor: '#3B096A',
  fontWeight: 'bold',
  width: '400px',
};

function App() {
  const [opinions, setOpinions] = useState({ good: 0, bad: 0, neutral: 0 });

  const handleOpinionChange = (type, value) => {
    setOpinions(prevOpinions => ({ ...prevOpinions, [type]: value }));
  };

  const handleReset = () => {
    setOpinions({ good: 0, bad: 0, neutral: 0 });
  };

  const allOpinions = Object.values(opinions).reduce((acc, curr) => acc + curr, 0);
  const positiveReviewsRatio = allOpinions ? ((opinions.good / allOpinions) * 100).toFixed(2) + '%' : 'No feedback given';

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

      <Opinion text="Good Reviews" count={opinions.good} onDecrease={() => handleOpinionChange('good', opinions.good - 1)} onIncrease={() => handleOpinionChange('good', opinions.good + 1)} onReset={() => handleOpinionChange('good', 0)} />
      <Opinion text="Bad Reviews" count={opinions.bad} onDecrease={() => handleOpinionChange('bad', opinions.bad - 1)} onIncrease={() => handleOpinionChange('bad', opinions.bad + 1)} onReset={() => handleOpinionChange('bad', 0)} />
      <Opinion text="Neutral Reviews" count={opinions.neutral} onDecrease={() => handleOpinionChange('neutral', opinions.neutral - 1)} onIncrease={() => handleOpinionChange('neutral', opinions.neutral + 1)} onReset={() => handleOpinionChange('neutral', 0)} />

      <h2>{`TOTAL: ${allOpinions}`}</h2>
      <h3>{`Positive Reviews: ${positiveReviewsRatio}`}</h3>

      <Anecdotes style={{width: '500px'}} />
    </>
  );
}

// export default App;