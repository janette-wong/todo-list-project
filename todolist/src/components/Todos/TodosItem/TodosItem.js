import React from 'react'

export const TodosItem = ({todo, onDelete}) => {
    return (
        <div className="todos-item">
            <h2 className="todos-item-title">{todo.text}</h2>
            <button onClick={()=>onDelete(todo.id)}> DELETE </button>
        </div>
    )
}
