import React from "react";
var dayjs = require("dayjs")

export const TodosItem = ({ todo, onDelete }) => {
  console.log(todo)
  
  return (
    <div className="todos-item">
      <input type="checkbox" />
      <h2 className="todos-item-title">{todo.name}</h2>
      <div className="calendar-todo-item">
        <button type="button">📅 {dayjs(todo.date).format("DD MMM YYYY")}</button>
      </div>
      <button onClick={() => onDelete(todo.id)}> DELETE </button>
    </div>
  );
};