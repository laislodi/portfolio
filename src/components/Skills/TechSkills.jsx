import "./TechSkills.css";
import { SKILLS } from "../../assets/data/data.js";
import Filter from "./Filter.jsx";
import { useContext } from "react";
import { FilterContext } from "./store/filter-context";

export default function TechSkills() {

  const skills = SKILLS.tech;
  const filterCtx = useContext(FilterContext);

  return (
    <section id="tech-skills">
      <div className="max-width">
        <a href={"#tech-skills"} className="tech-skill-title-link">
          <h1>Tech Skills</h1>
        </a>
        <Filter />
        <ul>
          {skills.map(skill => {
            let hasCategory = false;
            filterCtx.filterSelector.forEach(selector => {
              const found = skill.types.find(type => type === selector);
              if (found) {
                hasCategory = true;
              }
            });
            if (hasCategory) {
              return (
                <li key={skill.title}>
                  <img src={skill.image} alt={skill.title} />
                  <h4>{skill.title}</h4>
                  {skill.description ? <p>{skill.description}</p> : null}
                </li>)
            }
            return (<></>)}
          )}
        </ul>
      </div>
    </section>
  )
}
