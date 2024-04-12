import { useState } from 'react'

const Anecdotes = (props) => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  function getRandomNumber (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}   

  const randomIndex = () => getRandomNumber(0, 7)
  const randomAnecdote = () => setSelected(randomIndex())

  const voteAnecdote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };
  const maxVotesIndex = votes.indexOf(Math.max(...votes));

  return (
    <>

    <h2>Anecdotes</h2>
    <div style={props.style}>
        <p> {anecdotes[selected]} </p>
        <p> has {votes[selected]} votes </p>
    
        <button 
            onClick={randomAnecdote}
            style={{marginLeft: '1rem', backgroundColor: 'green'}}> 
            Next Anexdote 
        </button>

        <button 
            onClick={voteAnecdote}
            style={{marginLeft: '1rem'}}> 
            Vote
        </button>

        <p> Anecdote with most votes </p>
        <p>{anecdotes[maxVotesIndex]} with {votes[maxVotesIndex]} votes</p>

    </div>
    </>
  )
}

export default Anecdotes