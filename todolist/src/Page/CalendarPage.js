import React, {useEffect} from "react";
import Header from "../components/Header/Header";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import axios from 'axios';
import Sidebar from "../components/Sidebar/Sidebar";

class CalendarPage extends React.Component {
  
  constructor() {
    super();
    this.state = {
       data: []
    }
 }
 
 componentDidMount() {
  axios.get("http://localhost/therichpost/public/api/sample-restful-apis").then(response => {
  
  this.setState({ data : response.data });
 
})
}

  
render(){
  return(
    <div>
      <Sidebar username="a" />
      <Header />
      <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          events = {[this.state.data]}
        />
    </div>
  )
}}

export default CalendarPage;
