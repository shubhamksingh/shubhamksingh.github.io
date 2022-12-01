import { Button, HStack } from "@chakra-ui/react";
import "./projects.scss";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h1 className="heading">My Projects</h1>
      <div className="card">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/ever1.png" alt="" />
          </div>
        </div>
        <div className="right">
          <h2>Project 1</h2>
          <div>
            <h3>About Project</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quae.
            </p>
          </div>
          <div>
            <h3>Technologies</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quae.
            </p>
          </div>
          <div>
            <HStack>
              <Button>live demo</Button>
              <Button>source code</Button>
            </HStack>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/ever1.png" alt="" />
          </div>
        </div>
        <div className="right">
          <h2>Project 1</h2>
          <div>
            <h3>About Project</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quae.
            </p>
          </div>
          <div>
            <h3>Technologies</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quae.
            </p>
          </div>
          <div>
            <HStack>
              <Button>live demo</Button>
              <Button>source code</Button>
            </HStack>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
