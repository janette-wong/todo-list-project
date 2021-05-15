import { useState, useEffect } from "react";
import { Card } from "../components/Card/Card";
import Headersignup from "../components/Header/Headersignup";
import { InputBox } from "../components/InputBox/InputBox";
import { TodosBox } from "../components/Todos/TodosBox/TodosBox";
import Sidebar from "../components/Sidebar/Sidebar";
import axios from "../Util/axios"
import {useParams} from "react-router";



const List = () => {
  
  const [todos, setTodos] = useState([]);
   const {username} = useParams();

  useEffect( ()=>{
    axios.get("/Schedule").then(data => setTodos(data.data)).catch(err => console.log(err))
  },[])

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
    <div className ="bg">
      <Sidebar username={username}/>
      <Headersignup />
        <div className="listbox">
          <h1 className="header-text">TO-DO LIST</h1>
          <Card>
            <InputBox onAdd={onAddHandler} />
            <TodosBox todos={todos} onDelete={onDeleteHandler} />
          </Card>
        </div>
    </div>
  );
};

export default List;