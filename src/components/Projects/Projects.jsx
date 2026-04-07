import GitHubImg from "../../assets/images/github-logo.png";
import PropTypes from 'prop-types';
import "./Projects.css";
import { useIntlayer, t } from "react-intlayer";

export default function Projects() {
  const content = useIntlayer("projects_content");
  const check_code = t({
    en: "Check the code!",
    "fr-CA": "Regarde ça!"
  });
  const try_it = t({
    en: "Try it!",
    "fr-CA": "Essaye le!"
  })

  return (
    <section id="projects">
      <a href="#projects" className="title-link">
        <h1>{content.sectionTitle}</h1>
      </a>
      <ul className="project-list">
        {content && content.projects.map((project, index) => {
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
                  <span>{check_code}</span>
                </a>
                }
                { project.url && 
                  <a href={project.url} target="_blank">
                    <span>{try_it}</span>
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