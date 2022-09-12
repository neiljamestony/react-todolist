import React from 'react'

export default function List({ index, value, onUpdate }) {

    return (
        <div key={index} className="task-item">
            <div>{ value.title }</div>
            <input type="checkbox" value={value.isDone} name="isDone" onClick={() => onUpdate(value.id)}/>
        </div>
    )
}
