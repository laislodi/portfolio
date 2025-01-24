import { SKILLS } from "../../assets/data/data.js";
import "./Skills.css";

export default function Skills(props) {
  const skills = props.typeOfSkill === "soft" ? SKILLS.soft : SKILLS.tech
  const sectionId = props.typeOfSkill === "soft" ? "soft-skills" : "tech-skills";
  const title = props.typeOfSkill === "soft" ? "Soft Skills" : "Tech Skills";
  const titleLinkClass = props.typeOfSkill === "soft" ? "solft-skill-title-link" : "tech-skill-title-link";

  return (
    <section id={sectionId}>
      <div className="max-width">
        <a href={"#".concat(sectionId)} className={titleLinkClass}>
          <h1>{title}</h1>
        </a>
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
