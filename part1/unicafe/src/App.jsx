import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>Give feedback</h2>
      <Buttons
        onGood={() => setGood(good + 1)}
        onNeutral={() => setNeutral(neutral + 1)}
        onBad={() => setBad(bad + 1)} />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}
const Buttons = ({ onGood, onNeutral, onBad }) => {
  return (
    <>
      <Button onClick={onGood} text="good" />
      <Button onClick={onNeutral} text="neutral" />
      <Button onClick={onBad} text="bad" />
    </>
  )
}
const Statistics = ({ good, neutral, bad }) => {

  const total = good + neutral + bad

  if (total == 0)
    return (
      <>No feedback given</>
    )


  const avg = (good - bad) / total
  const positive = good / total * 100

  return (
    <>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>total {total}</p>
      <p>avg {avg}</p>
      <p>positive {positive}%</p>

    </>
  )
}


const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

export default App