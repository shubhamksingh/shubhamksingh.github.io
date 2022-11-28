import "./about.scss";

function About() {
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="wrapper">
          
            <h2>Hi There, I'm</h2>
            <h1>Shubham Singh</h1>
            <h3>Full Stack Web Developer</h3>
         
          <p>
            Aspiring Full stack web developer proficient in building both Client
            Side and Server Side Applications. More than 1200 hours of coding
            experience with 5+ Successful Project completions. Self-motivated
            with a strong problem-solving mindset. Strong creative and
            analytical skills. Team player with an eye for detail.
          </p>
          
          <a href="resume.pdf" download="resume.pdf"><button>Download Resume</button></a>
          
        </div>
        <a href="#skills" class="downArrow">
          <img src="assets/downward.png" alt="" />
        </a>
      </div>
      <div className="right">
        <div className="imageContainer">
          <img src="assets/shubham.JPG" alt="na" />
        </div>
      </div>
    </div>
  );
}

export default About;
