import "./SoftSkills.css";

import { useIntlayer } from "react-intlayer";

export default function SoftSkills() {

  const skills = useIntlayer("soft_skills_content");

  return (
    <section id="soft-skills">
      <div className="max-width">
        <a href={"#soft-skills"} className="soft-skill-title-link">
          <h1>{skills.sectionTitle}</h1>
        </a>
        <ul>
          {skills.soft.map((skill) => (
            <li key={"soft" + skill.title.value}>
              <div className="skill-container">
                <div className="img-container">
                  <img 
                    className="text-color"
                    src={skill.imagePath.value}
                    alt={skill.title}
                  />
                </div>
              </div>
              <div className="skill-details">
                <h4>{skill.title}</h4>
                <p>{skill.description}</p>
              </div>
            </li>)
          )}
        </ul>
      </div>
    </section>
  )
}
