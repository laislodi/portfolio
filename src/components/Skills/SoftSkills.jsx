import "./SoftSkills.css";

import { SKILLS } from "../../assets/data/data.js";

export default function SoftSkills() {

  const skills = SKILLS.soft;

  return (
    <section id="soft-skills">
      <div className="max-width">
        <a href={"#soft-skills"} className="soft-skill-title-link">
          <h1>Soft Skills</h1>
        </a>
        <ul>
          {skills.map(skill => (
            <li key={skill.title}>
              <div className="skill-container">
                <img className="bg-color" src={skill.image} alt={skill.title} />
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
