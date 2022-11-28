import { useState } from "react";

import "./navbar.scss";

function Navbar({menuOpen, setMenuOpen}) {

  return (
    <div className= {"navbar " + (menuOpen && "active")} id='navbar'>
      <div className= "wrapper">
        <div className= "left">
            <h1>SHUBHAM</h1>
        </div>
        <div className="right">
            <a href="#about" style={{"text-decoration" : "none", "color":'white'}}><span>HOME</span></a>
            <a href="#about" style={{"text-decoration" : "none", "color":'white'}}><span >ABOUT</span></a>
            <a  href="#skills" style={{"text-decoration" : "none", "color": 'white'}}><span>SKILLS</span> </a>
            <a  href="#projects" style={{"text-decoration" : "none", "color": 'white'}}><span>PROJECTS</span> </a>
            <a  href="#contact" style={{"text-decoration" : "none", "color": 'white'}}><span>CONTACT ME</span></a>
            <a  href="https://drive.google.com/file/d/1eOSq8dMtil5YI1eT_yKWoHX36YsvTeFn/view?usp=sharing" target={"blank"} download style={{"text-decoration" : "none", "color": 'white'}}><button class='button'>RESUME</button></a>
            
        </div>
        <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <span></span><span></span><span></span>
        </div>
      </div>

    </div>
  );
}

export default Navbar;
