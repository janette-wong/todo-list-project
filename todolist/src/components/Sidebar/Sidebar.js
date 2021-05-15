import React from "react";
import { Link } from "react-router-dom"

const Sidebar = ({username}) => {
  return (
    <div className="sidebar">
        <ul className="box">
            <Link to={"/List/"+username}>To-Do List</Link>
            <Link to={"/TodayPage/"+username}>Today</Link>
            <Link to={"/UpcomingPage/"+username}>Upcoming</Link>
            <Link to={"/CalendarPage/"+username}>Calendar</Link>
        </ul>
    </div>
  );
};
export default Sidebar;
