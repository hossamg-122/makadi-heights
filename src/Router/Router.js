import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../components/About/About";
import Home from "../components/Home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" exact element={<Home />} />
        <Route path="/" exact element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
