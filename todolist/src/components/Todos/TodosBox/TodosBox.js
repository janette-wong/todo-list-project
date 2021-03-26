import React from 'react'
import { TodosItem } from "../TodosItem/TodosItem"
export const TodosBox = ({todos,onDelete}) => {
    return (
        <div className="todos-box">
         {
             todos.map((el)=>(
             <TodosItem key={el.id} todo={el} onDelete={onDelete}/>
             )) 
         }
        </div>
    )
}
