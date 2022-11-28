import { useEffect, useState } from "react";
import SkillsList from "../skillsList/SkillsList";
import { both, frontend, backend } from "../../data";
import "./skills.scss";

function Skills() {
  const list = [
    {
      id: 1,
      title: "All Skills",
    },
    {
      id: 2,
      title: "Frontend",
    },
    {
      id: 3,
      title: "Backend",
    }
  ]


  const [selected, setSelected] = useState("All Skills");
  const [data, setData] = useState();

// useeffect to set data
  useEffect(() => {
    switch (selected) {
      case "All Skills":
        setData(both);
        break;
      case "Frontend":
        setData(frontend);
        break;
      case "Backend":
        setData(backend);
        break;
      default:
        setData(both);
    }
  }, [selected]);

  return (
    <div className="skills" id="skills">
      <h1>My Technical Skills</h1>
      <ul>
        {list.map(item => (
          <SkillsList title={item.title} active = {selected === item.title} setSelected = {setSelected}/>
        ))}
      </ul>
      <div className="container">
    
        {data?.map((d) => (
          <div className="item">
           { d.name ==='Chakra UI'? <div className="chakra"> {d.img }</div>:  <img src={d.img} alt="" />}
            <h3>{d.name}</h3>
          </div>
        ))}
           
 
      </div>
    </div>
  );
}

export default Skills;
