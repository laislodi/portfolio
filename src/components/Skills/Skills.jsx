import { SKILLS } from "../../assets/data/data.js";
import "./Skills.css";

export default function SoftSkills(props) {
  const skills = props.typeOfSkill === "soft" ? SKILLS.soft : SKILLS.tech

  return (
    <section id={props.typeOfSkill === "soft" ? "soft-skills" : "tech-skills"}>
      <div className="max-width">
        <h2>{props.typeOfSkill === "soft" ? "Soft" : "Tech"} Skills</h2>
        <ul>
          {skills.map(skill => (
            <li key={skill.title}>
              <div className="skill-container">
                <img src={skill.image} alt={skill.title} />
              </div>
              <h4>{skill.title}</h4>
              {skill.description ? <p>{skill.description}</p> : null}
            </li>)
          )}
        </ul>
      </div>
    </section>
  )
}
