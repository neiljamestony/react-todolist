import React from 'react'

export default function SearchTask({ setQuery }) {
  return (
    <div className='search-task'>
        <input type="text" placeholder='Search Task' size="61" onChange={(e) => setQuery(e.target.value)}/>
    </div>
  )
}
