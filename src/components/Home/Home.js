import React from "react";
import About from "../About/About";

import "./home.scss";
const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-bg"></div>
      <div className="container">
        <About />
      </div>
    </div>
  );
};

export default Home;
