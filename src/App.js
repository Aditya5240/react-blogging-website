import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import NewBlog from "./components/NewBlog";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const ToggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "darkgrey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    
      <Router>
        <Navbar title="Blogify" mode={mode} ToggleMode={ToggleMode} />
        <div className="container my-3">
          <Routes>
          <Route path="/about" element={<About />} />
          
          <Route path="/new-blog" element={<NewBlog />} />
          </Routes>
        </div>
      </Router>
    
  );
}

export default App;
