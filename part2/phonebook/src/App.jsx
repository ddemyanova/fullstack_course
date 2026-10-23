import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "12345" }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilter] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    const newPerson = { name: newName, number: newNumber }

    if (persons.some(value => value.name === newPerson.name)) {
      showAlert()
    } else {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }

  }

  const showAlert = () => {
    const message = `${newName} is already added to phonebook`
    alert(message)
  }

  const personsToShow = persons.filter(value => value.name.includes(filterValue))

  return (
    <div>
      <h2>Phonebook</h2>
      <div>Search by <input onChange={(event) => setFilter(event.target.value)} value={filterValue} /></div>
      <h2>Add a new person</h2>
      <form onSubmit={addNote}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>number: <input onChange={handleNumberChange} value={newNumber} /></div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map(person => <div key={person.name}>{person.name} {person.number}</div>)}
    </div>
  )
}


export default App