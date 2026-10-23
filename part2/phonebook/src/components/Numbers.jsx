import React from 'react'

const Numbers = ({persons, filter}) => {
     const personsToShow = persons.filter(value => value.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div> {personsToShow.map(person => <div key={person.name}>{person.name} {person.number}</div>)}
  </div>
  )
}

export default Numbers