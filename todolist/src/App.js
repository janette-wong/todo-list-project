import List from "./Page/List";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Login from "./Page/Login";
import "./css/App.css";
import "./css/Card.css";
import "./css/InputBox.css";
import "./css/TodosBox.css";
import "./css/TodosItem.css";
import "./css/index.css";
import "./css/Sidebar.css";
import TodayPage from "./Page/TodayPage";
import Signup from "./Page/Signup";
import UpcomingPage from "./Page/UpcomingPage";
import CalendarPage from "./Page/CalendarPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => {
            return <Login/>
          }} />

          <Route path="/List/:username">
            <List />
          </Route>

          <Route path="/Login">
            <Login />
          </Route>

          <Route path="/Signup">
            <Signup />
          </Route>

          <Route path="/TodayPage/:username">
            <TodayPage />
          </Route>

          <Route path="/UpcomingPage/:username">
            <UpcomingPage />
          </Route>

          <Route path="/CalendarPage/:username">
            <CalendarPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
