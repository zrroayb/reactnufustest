import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Search from "./pages/Search";
import Home from "./pages/Home";
import About from "./pages/About";
import FeedbackSection from "./components/FeedbackSection";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <div className="content-wrapper">
          <Routes>
            {/* Redirect from / to /anasayfa */}
            <Route path="/" element={<Navigate to="/anasayfa" replace />} />
            <Route path="/anasayfa" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <FeedbackSection />
        </div>
      </div>
    </Router>
  );
}

export default App;
