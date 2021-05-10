import React from "react";
import List from "./List";
import Sidebar from "../components/Sidebar/Sidebar";
import Headersignup from "../components/Header/Headersignup";

const HomePage = () => {
  return (
    <div>
      <Sidebar />
      <Headersignup />
      <List />
    </div>
  );
};

export default HomePage;
