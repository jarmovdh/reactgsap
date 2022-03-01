import React, { useRef, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import ScrollTop from "./ScrollTop/ScrollTop";
import gsap from "gsap";

function App() {
  let cursor = useRef(null);
  let posX1 = useRef(null);
  let posY1 = useRef(null);
  let mouseX1 = useRef(null);
  let mouseY1 = useRef(null);

  let tl1 = gsap.timeline();

  return (
    <div>
      <Router>
        <div className="noise"></div>
        <div className="App">
          <ScrollTop />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
          <Routes>
            <Route path="/about" element={<About />}></Route>
          </Routes>
          <Routes>
            <Route path="/projects" element={<Projects />}></Route>
          </Routes>
          <Routes>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
