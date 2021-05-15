import { useState, useEffect } from "react";
import { Card } from "../components/Card/Card";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { InputBox } from "../components/InputBox/InputBox";
import { TodosBox } from "../components/Todos/TodosBox/TodosBox";
import axios from "../Util/axios";
import {useParams} from "react-router";



const UpcomingPage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("/Schedule/Upcoming").then((res) => {
      setTodos(res.data);
      console.log(res.data)
    });
  },[]);
  const {username} = useParams();

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
      <Sidebar username={username} />
      <Header />
      <div className="listbox-for-upcoming">
        <h1 className="header-text">UPCOMING TO-DO LIST</h1>
        <Card>
          <InputBox onAdd={onAddHandler} />
          <TodosBox todos={todos} onDelete={onDeleteHandler} />
        </Card>
      </div>
    </div>
  );
};

export default UpcomingPage;
