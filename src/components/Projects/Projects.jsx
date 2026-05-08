import { useState } from 'react';
import GitHubImg from "/github-logo.png";
import "./Projects.css";
import { useIntlayer, t } from "react-intlayer";

const screenshotModules = import.meta.glob('/src/assets/screenshots/**/*.png', { eager: true });

export default function Projects() {
  const content = useIntlayer("projects_content");
  const [activeScreenshots, setActiveScreenshots] = useState(null);

  const check_code = t({
    en: "Check the code!",
    "fr-CA": "Regarde ça!"
  });
  const try_it = t({
    en: "Try it!",
    "fr-CA": "Essaye le!"
  });
  const screenshots_label = t({
    en: "Screenshots",
    "fr-CA": "Captures d'écran"
  });

  return (
    <section id="projects">
      <a href="#projects" className="title-link">
        <h1>{content.sectionTitle}</h1>
      </a>
      <ul className="project-list">
        {content && content.projects.map((project, index) => {
          const keyBase = `${project.name}-${index}`;
          const screenshots = project.screenshots.map(path => screenshotModules[path.value]?.default).filter(Boolean);
          const hasScreenshots = screenshots.length > 0;
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
                <a href={project.github.value} target="_blank">
                  <img className="github-link text-color" src={GitHubImg} alt="GitHub logo" />
                  <span>{check_code}</span>
                </a>
                }
                { project.url &&
                  <a href={project.url.value} target="_blank">
                    <span>{try_it}</span>
                  </a>
                }
              </div>
              {hasScreenshots && (
                <button
                  className="screenshots-btn"
                  onClick={() => setActiveScreenshots(screenshots)}
                >
                  {screenshots_label}
                </button>
              )}
            </li>
          );
        })}
      </ul>

      {activeScreenshots && (
        <div className="screenshots-overlay" onClick={() => setActiveScreenshots(null)}>
          <div className="screenshots-modal" onClick={e => e.stopPropagation()}>
            <button className="screenshots-close" onClick={() => setActiveScreenshots(null)}>✕</button>
            <div className="screenshots-grid">
              {activeScreenshots.map((src, i) => (
                <a href={src} target='_blank'>
                  <img key={i} src={src} alt={`Screenshot ${i + 1}`} className="screenshot-img" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

