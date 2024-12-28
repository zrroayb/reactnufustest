import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Search from "./pages/Search";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Router basename="/bodrum-nufus">
        <Navigation />
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
