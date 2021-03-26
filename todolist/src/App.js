import List from './List';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { useState } from "react";
import HomePage from './HomePage';

import In from './Page/In'
import "./App.css";
import "./Card.css";
import "./InputBox.css";
import "./TodosBox.css";
import "./TodosItem.css";
import "./index.css";
import Signup from './Page/Signup';


const App = () => {


  return (
    <Router>
      <div className="App">
        <Switch>

      <Route exact path="/" component={HomePage}/>

      <Route path="/list">
        <List/>
      </Route>

      <Route path="/In">
        <In/>
      </Route>

      <Route path="/Signup">
        <Signup/>
      </Route>

      </Switch>
    </div>
    </Router>
    
  );
};

export default App;
