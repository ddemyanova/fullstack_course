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
  const positive = good / total * 100 + '%'

  return (
    <><table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="total" value={total} />
        <StatisticLine text="avg" value={avg} />
        <StatisticLine text="positive" value={positive} />
      </tbody>
    </table>



    </>
  )
}

const StatisticLine = ({ text, value }) => {
  return (<tr>
    <td>{text}</td>
    <td>{value}</td>

  </tr>)
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

export default App