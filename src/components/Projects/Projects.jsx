// This component is gonna be used to show my personal projects
import { RESUME } from "../../assets/data/resume.js";
import "./Projects.css";

export default function Projects() {
  const projects = RESUME["projects"];

  return (
    <section id="projects">
      <a href="#projects" className="title-link"><h1>Projects</h1></a>
      <a href="#" className="back-button">
        <span class="material-icons">
          keyboard_double_arrow_up
        </span>
      </a>
      <ul className="project-list">
        {projects.map((project, index) => (
          <div key={project.name.concat(index.toString())} className="project-info">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <ul className="tech-list">
              {project.languages.map((language, i) => (
                <li key={project.name.concat("-lang-").concat(i.toString())}>
                  {language}
                </li>
              ))}
              {project.technologies.map((technology, i) => (
                <li key={project.name.concat("-tech-").concat(i.toString())}>
                  {technology}
                </li>
              ))}
            </ul>
            { project.url && 
              <a href={project.url} target="_blank">
                <label>Check it out!</label>
              </a>
            }
          </div>
        ))}
      </ul>
    </section>
  );
};
