import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Stats from "./components/stats/Stats";
import "./app.scss"
import { useState } from "react";
import Drawer from "./components/drawer/Drawer";
import "./components/drawer/drawer.scss"

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Drawer menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="section">
        <About/>
        <Skills/>
        <Projects/>
        <Stats/>
        <Contact/>


      </div>
    </div>
  );
}

export default App;
