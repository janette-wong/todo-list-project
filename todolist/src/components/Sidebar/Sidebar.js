import React from "react";
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="sidebar">
        <ul class="box">
            <Link to="/List">To-Do List</Link>
            <Link to="/TodayPage">Today</Link>
            <Link to="/UpcomingPage">Upcoming</Link>
            <Link to="/CalendarPage">Calendar</Link>
        </ul>
    </div>
  );
};
export default Sidebar;
