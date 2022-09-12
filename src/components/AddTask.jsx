import React from 'react'

export default function AddTask({ onChange, formData, onSubmit }) {
  return (
    <div className='add-task'>
        <input type="text" placeholder='Add Task' maxLength={10} size="50" onChange={(e) => onChange(e)} value={formData.title || ''}/>
        <button onClick={() => onSubmit()}>add task</button>
    </div>
  )
}
