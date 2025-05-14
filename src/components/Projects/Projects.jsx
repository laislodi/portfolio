import GitHubImg from "../../assets/images/github-logo.png";
import PropTypes from 'prop-types';
import "./Projects.css";

/**
 * Projects component displays a list of project entries with details and links.
 * @param {Project[]} projects - Array of project Projects.
 */
export default function Projects({ projects }) {
  return (
    <section id="projects">
      <a href="#projects" className="title-link">
        <h1>Projects</h1>
      </a>
      <ul className="project-list">
        {projects.map((project, index) => {
          const keyBase = `${project.name}-${index}`;
          return (
            <li key={keyBase} className="project-info">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul className="tech-list">
                {project.languages && project.languages.map((language, i) => (
                  <li key={`${keyBase}-lang-${i}`}>{language}</li>
                ))}
                {project.technologies && project.technologies.map((technology, i) => (
                  <li key={`${keyBase}-tech-${i}`}>{technology}</li>
                ))}
              </ul>
              <div className="project-links">
                { project.github && 
                <a href={project.github} target="_blank">
                  <img className="github-link text-color" src={GitHubImg} alt="GitHub logo" />
                  <span>Check the code!</span>
                </a>
                }
                { project.url && 
                  <a href={project.url} target="_blank">
                    <span>Try it!</span>
                  </a>
                }
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Projects.PropTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      url: PropTypes.string,
      github: PropTypes.string,
      languages: PropTypes.arrayOf(PropTypes.string),
      technologies: PropTypes.arrayOf(PropTypes.string),
    })
  )
}