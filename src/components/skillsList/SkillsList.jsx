import "./skillsList.scss";


const SkillsList = ({title, active, setSelected }) => {
  return (
    <li className={active? "skillsList active" : "skillsList"} onClick={()=> setSelected(title)} >
        {title}
    </li>
  )
}

export default SkillsList