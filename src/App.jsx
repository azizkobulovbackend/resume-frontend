import React from "react";
import { Link } from "react-scroll";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import "./index.css";

const App = () => {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-container">
          <ul className="nav-list">
            <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
            <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
          </ul>
        </div>
      </nav>

      {/* Sections */}
      <Hero />
      <About />
      <Experience />
      <Skills />
    </>
  );
};

export default App;
