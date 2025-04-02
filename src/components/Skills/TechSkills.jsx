import "./TechSkills.css";
import { SKILLS } from "../../assets/data/data.js";

export default function TechSkills() {

  const skills = SKILLS.tech;

  return (
    <section id="tech-skills">
      <div className="max-width">
        <a href={"#tech-skills"} className="tech-skill-title-link">
          <h1>Tech Skills</h1>
        </a>
        <ul>
          {skills.map(skill => (
            <li key={skill.title}>
              <div className="skill-container">
                <img src={skill.image} alt={skill.title} />
              </div>
              <div className="skill-details">
                <h4>{skill.title}</h4>
                {skill.description ? <p>{skill.description}</p> : null}
              </div>
            </li>)
          )}
        </ul>
      </div>
    </section>
  )
}
