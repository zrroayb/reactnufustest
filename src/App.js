import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Search from "./pages/Search";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navigation />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
