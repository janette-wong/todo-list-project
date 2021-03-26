import {useState} from 'react';
import { Card } from "./components/Card/Card";
import { InputBox } from "./components/InputBox/InputBox";
import { TodosBox } from "./components/Todos/TodosBox/TodosBox";
const List = () => {
  // const todosData=[
  //   {id:1, text:"abc"},
  //   {id:2, text:"efg"},
  //   {id:3, text:"hij"}
  // ];
  const [todos,setTodos] = useState([
    {id:1, text:"Go shopping"},
    {id:2, text:"Do homework"},
    {id:3, text:"Clean my room"}
  ]);

  const onAddHandler= (text) => {
    setTodos([...todos, {id:Math.random(),text:text}]);
  };

  const onDeleteHandler = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id)
    setTodos(newTodo)
  };

    return (
        <div className="listbox">
             <h1 className="header-text">TO-DO LIST</h1>
      <Card>
        <InputBox onAdd={onAddHandler}/>
        <TodosBox todos={todos} onDelete={onDeleteHandler}/>
      </Card>
        </div>
    )
}

export default List;
