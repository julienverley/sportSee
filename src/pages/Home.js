import React from "react";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import Vertical from "../components/Vertical";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <Vertical />
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;
