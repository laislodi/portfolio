import "./TechSkills.css";
import Filter from "./Filter.jsx";
import { useContext } from "react";
import { FilterContext } from "./store/filter-context";
import { useIntlayer } from "react-intlayer";

export default function TechSkills() {

  const skills = useIntlayer("tech_skills_content");
  const filterCtx = useContext(FilterContext);

  return (
    <section id="tech-skills">
      <div className="max-width">
        <a href={"#tech-skills"} className="tech-skill-title-link">
          <h1>{skills.sectionTitle}</h1>
        </a>
        <Filter />
        <ul>
          {skills.tech.map((skill, index) => {
            let hasCategory = false;
            filterCtx.filterSelector.forEach(selector => {
              const found = skill.types.find(type => type.value == selector);
              if (found) {
                hasCategory = true;
              }
            });
            if (hasCategory) {
              return (
                <li key={"tech" + index}>
                  <img src={skill.imagePath.value} alt={skill.title} />
                  <h4>{skill.title}</h4>
                </li>)
              }
            }
          )}
        </ul>
      </div>
    </section>
  )
}
