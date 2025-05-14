import GitHubImg from "../../assets/images/github-logo.png";
import "./Projects.css";

export default function Projects({ projects }) {
  return (
    <section id="projects">
      <a href="#projects" className="title-link"><h1>Projects</h1></a>
      <ul className="project-list">
        {projects.map((project, index) => (
          <li key={project.name.concat(index.toString())} className="project-info">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <ul className="tech-list">
              {project.languages && project.languages.map((language, i) => (
                <li key={project.name.concat("-lang-").concat(i.toString())}>
                  {language}
                </li>
              ))}
              {project.technologies && project.technologies.map((technology, i) => (
                <li key={project.name.concat("-tech-").concat(i.toString())}>
                  {technology}
                </li>
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
        ))}
      </ul>
    </section>
  );
};
