import { Button, HStack, Image, Link } from "@chakra-ui/react";
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
          <h2>Everhour.com</h2>
          <div className="info">
            <h3>About Project</h3>
            <p>
              Everhour is a time management system with a strong focus on
              integration. If you're managing all your tasks in a specialized
              system, such as Asana, Trello, Basecamp, where there is no native
              time tracking functionality (or it's limited), you'll need to use
              a third-party service
            </p>
          </div>
          <div className="tech">
            <h3>Technologies</h3>
            <p>
              Mongo DB | Express | Redux | React JS | React-Router-Dom | Chakra
              UI | React-Icons
            </p>
          </div>
          <div>
            <HStack>
              <Button
                as={Link}
                href="https://the-great-pravhatray-site.netlify.app/"
                target="blank"
              >
                live demo
              </Button>
              <Button
                as={Link}
                href="https://github.com/shubhamksingh/everhour"
                target="blank"
              >
                source code
              </Button>
            </HStack>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="left">
          <div className="imgContainer">
            <Image src="assets/ketto.png" />
          </div>
        </div>
        <div className="right">
          <h2>Ketto India</h2>
          <div className="info">
            <h3>About Project</h3>
            <p>
              Ketto is an Online Crowdfunding Platform and Website in India to
              raise funds for Social and Charitable causes. set out with the
              goal of making healthcare more accessible to everyone. With the
              mission of harnessing the power of technology to make a
              large-scale social impact.
            </p>
          </div>
          <div className="tech">
            <h3>Technologies</h3>
            <p>
              React JS | React-Router-Dom |JSON-Server | Chakra UI | React-Icons
            </p>
          </div>
          <div>
            <HStack>
              <Button as={Link} href='https://ketto-shubhamksingh.vercel.app/' target='blank'>live demo</Button>
              <Button as={Link} href='https://github.com/shubhamksingh/Ketto-India-clone-' target='blank'>source code</Button>
            </HStack>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/intern.png" alt="" />
          </div>
        </div>
        <div className="right">
          <h2>Intern Theory</h2>
          <div className="info">
            <h3>About Project</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quae.
            </p>
          </div>
          <div className="tech">
            <h3>Technologies</h3>
            <p>
                 HTML | CSS | Javascript | JSON-Server
            </p>
          </div>
          <div>
            <HStack>
              <Button as={Link} href='https://shubhamksingh.github.io/interntheory-Clone-/' target='blank'>live demo</Button>
              <Button as={Link} href='https://github.com/shubhamksingh/interntheory-Clone-' target='blank'>source code</Button>
            </HStack>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/fusion.png" alt="" />
          </div>
        </div>
        <div className="right">
          <h2>Fusion Strom</h2>
          <div className="info">
            <h3>About Project</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quae.
            </p>
          </div>
          <div className="tech">
            <h3>Technologies</h3>
            <p>
            Mongo DB | Express | Redux | React JS | React-Router-Dom | Chakra UI | React-Icons
            </p>
          </div>
          <div>
            <HStack>
              <Button as={Link} href='https://fusion-strom.vercel.app/' target='blank'>live demo</Button>
              <Button as={Link} href="https://github.com/shubhamksingh/sole-wing-9343" target="blank">source code</Button>
            </HStack>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
