import React from "react";

export const TodosItem = ({ todo, onDelete }) => {
  return (
    <div className="todos-item">
      <input type="checkbox" />
      <h2 className="todos-item-title">{todo.text}</h2>
      <div className="calendar-todo-item">
        <button type="button">📅</button>
      </div>
      <button onClick={() => onDelete(todo.id)}> DELETE </button>
    </div>
  );
};
