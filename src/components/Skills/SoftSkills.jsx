import "./SoftSkills.css";

import { SKILLS } from "../../assets/data/data.jsx";

export default function SoftSkills() {

  const skills = SKILLS.soft;

  return (
    <section id="soft-skills">
      <div className="max-width">
        <a href={"#soft-skills"} className="soft-skill-title-link">
          <h1>Soft Skills</h1>
        </a>
        <ul>
          {skills.map((skill, index) => (
            <li key={skill.title || index}>
              <div className="skill-container">
                <div className="img-container">
                  <img className="text-color" src={skill.image} alt={skill.title} />
                </div>
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
