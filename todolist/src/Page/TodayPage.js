import { useState } from "react";
import { Card } from "../components/Card/Card";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { InputBox } from "../components/InputBox/InputBox";
import { TodosBox } from "../components/Todos/TodosBox/TodosBox";

const TodayPage = () => {
  const [todos, setTodos] = useState([]);

  const onAddHandler = (text) => {
    setTodos([...todos, { id: Math.random(), text: text }]);
  };

  const onDeleteHandler = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  return (
    <div>
      <Sidebar />
      <Header />
      <div className="listbox-for-today">
        <h1 className="header-text">TODAY’S TO-DO LIST</h1>
        <Card>
          <InputBox onAdd={onAddHandler} />
          
          <TodosBox todos={todos} onDelete={onDeleteHandler} />
        </Card>
      </div>
    </div>
  );
};

export default TodayPage;
