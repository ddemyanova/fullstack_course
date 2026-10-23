import React from 'react'

const SearchPhonebook = ({ filterValue, setFilter }) => {
    return (
        <div>Search by <input onChange={setFilter} value={filterValue} /></div>

    )
}

export default SearchPhonebook