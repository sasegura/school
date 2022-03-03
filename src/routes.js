import React from "react";
import { HashRouter as Router,Routes , Route } from "react-router-dom";
import courses from "./pages/courses";
import Home from "./pages/home";

const PageRoutes=()=>{
  return(
    <div>
    <Router>
      <Routes >
        <Route path="/"  element={<Home/>}/>
        <Route path="/courses" element={<courses/>}/>
      </Routes >
    </Router>
    </div>
  );
}

export default PageRoutes;