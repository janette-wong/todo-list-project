import { useState, useEffect } from "react";
import { Card } from "../components/Card/Card";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { InputBox } from "../components/InputBox/InputBox";
import { TodosBox } from "../components/Todos/TodosBox/TodosBox";
import {useParams} from "react-router";
import axios from "../Util/axios"


const TodayPage = () => {
  const [todos, setTodos] = useState([]);
  const {username} = useParams();
  useEffect(() => {
    axios.get("/Schedule/Today").then((res) => {
      setTodos(res.data);
      console.log(res.data)
    });
  },[]);

  const onAddHandler = (data) => {
    axios.post("/Schedule", {name: data.name, date: data.date, username: username}).then(res => {
      setTodos([...todos, res.data])
    })
  };

  const onDeleteHandler = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  return (
    <div>
      <Sidebar username={username}/>
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
