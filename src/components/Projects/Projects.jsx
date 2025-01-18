// This component is gonna be used to show my personal projects
import { RESUME } from "../../assets/data/resume.js";
import "./Projects.css";
import { FaArrowUp } from "react-icons/fa";
import { IconContext } from "react-icons"

export default function Projects() {
  const projects = RESUME["projects"];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="back-button">
        <IconContext.Provider value={{ 
          size: "80px",
          color: "var(--white)"
        }}>
          <div className="back-button-icon">
            {/* TODO: Make this button sticky and appearing just on the second section */}
            <a href="#home"><FaArrowUp /></a>
          </div>
        </IconContext.Provider>
      </div>
      <ul className="project-list">
        {projects.map((project) => (
          <div className="project-info" key={project.name}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <ul className="tech-list">
              {project.languages.map((language) => (
                <li key={language}>
                  {language}
                </li>
              ))}
              {project.technologies.map((technology) => (
                <li key={technology}>
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
