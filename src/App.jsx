import "./App.css";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/skills/index";
import Interests from "./components/Interests";
import Home from "./components/Home";
import Education from "./components/Education";

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
    <BrowserRouter  basename="/index.html">
        <Routes>
          <Route path="/resume/" element={<Home />} />
          <Route path="/resume/about" element={<About />} />
          <Route path="/resume/experience" element={<Experience />} />
          <Route path="/resume/skills" element={<Skills />} />
          <Route path="/resume/interests" element={<Interests />} />
          <Route path="/resume/education" element={<Education />} />
        </Routes>
    </BrowserRouter>
      </div>
    
  
    </>
  );
}

export default App;
