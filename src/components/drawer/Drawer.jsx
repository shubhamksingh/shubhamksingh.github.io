import "./drawer.scss";

function Drawer({ menuOpen, setMenuOpen }) {
  return (
    <div className={"drawer " + (menuOpen && "active")}>
      <ul>
        <li onClick={()=> setMenuOpen(false)}>
          <a href="#about">HOME</a>
        </li>
        <li onClick={()=> setMenuOpen(false)}>
          <a href="#about">ABOUT</a>
        </li>
        <li onClick={()=> setMenuOpen(false)}>
          <a href="#skills">SKILLS</a>
        </li>
        <li onClick={()=> setMenuOpen(false)}>
          <a href="#projects">PROJECTS</a>
        </li>
        <li onClick={()=> setMenuOpen(false)}>
          <a href="#stats">GIT STATS</a>
        </li>
        <li onClick={()=> setMenuOpen(false)}>
          <a href="#contact">CONTACT</a>
        </li>
        <li onClick={()=> setMenuOpen(false)}>
          <a
            href="https://drive.google.com/file/d/1eOSq8dMtil5YI1eT_yKWoHX36YsvTeFn/view?usp=sharing"
            target={"blank"}
            style={{ "text-decoration": "none", color: "white" }}
          >
            RESUME
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Drawer;
