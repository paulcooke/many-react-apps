import React, { useState } from 'react'

const AddListItem = ({ addItem }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputValue) return
    addItem(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text'
        placeholder='Add your to-do here'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}     
      />
    </form>
  )
}

export default AddListItem