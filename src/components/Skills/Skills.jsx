import "./Skills.css";

export default function SoftSkills(props) {
  return (
    <section id={props.typeOfSkill === "soft" ? "soft-skills" : "tech-skills"}>
      <h2>{props.typeOfSkill === "soft" ? "Soft" : "Tech"} Skills</h2>
      <ul>
        {props.skills.map(skill => (
          <li key={skill.title}>
            {/* {props.image} */}
            <img src={skill.image} alt={skill.title} />
            <h3>{skill.title}</h3>
            {skill.description ? <p>{skill.description}</p> : null}
          </li>)
        )}
      </ul>
    </section>
  )
}
