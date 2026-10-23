import { useState } from 'react'
import SearchPhonebook from './components/SearchPhonebook'
import PersonForm from './components/PersonForm'
import Numbers from './components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
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

    const newPerson = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1)
    }

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


  return (
    <div>
      <h2>Phonebook</h2>
      <SearchPhonebook setFilter={(event) => setFilter(event.target.value)} filterValue={filterValue} />
      <h2>Add a new person</h2>
      <PersonForm addNote={addNote} handleNameChange={handleNameChange} newName={newName} handleNumberChange={handleNumberChange} newNumber={newNumber} />
      <h2>Numbers</h2>
      <Numbers persons={persons} filter={filterValue} />
    </div>
  )
}


export default App