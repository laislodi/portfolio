import "./Experience.css";
import { useIntlayer } from 'react-intlayer';

export default function Experience() {
  const content = useIntlayer("experience_content");

  return (
    <section id="experience">
      <a href="#experience" className="title-link">
        <h1 id="timeline">{content.sectionTitle}</h1>
      </a>
      <div id="exp-max-width">
        <ul>
          {content && content.experience.map((experience, index) => (
            <li key={`exp-${index}`}>
              <div className="line">
                <div className="where-when">
                  <h3>{experience.company}</h3>
                  <p className="date">
                    <spam>{experience.date.from.month} {experience.date.from.year}</spam>
                    <spam>{experience.date.to.month} {experience.date.to.year}</spam>
                  </p> 
                  <p className="place">
                    {experience.location.city}, {experience.location.province}, {experience.location.country} ({experience.location.type})
                  </p>
                </div>
                <div className="job">
                  <h3>{experience.title}</h3>
                  {experience.summary && <p>{experience.summary}</p>}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
