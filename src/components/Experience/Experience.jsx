import { RESUME } from "../../assets/data/resume.js";
import "./Experience.css";

export default function Experience() {
  const jobExperiences = RESUME.jobExperience;

  return (
    <section id="experience">
      <h1 id="timeline">Experience</h1>
      <div id="exp-max-width">
        <ul>
          {jobExperiences.map((experience, index) => (
            <li key={"exp-".concat(index.toString())}>
              <div className="line">
                <div className="where-when">
                  <h3>{experience.company}</h3>
                  <p className="date">{experience.date.from.month} {experience.date.from.year} to {experience.date.to.month} {experience.date.to.year}</p>
                  <p className="place">{experience.location.city}, {experience.location.state ? experience.location.state : experience.location.province}, {experience.location.country} ({experience.location.type})</p>
                </div>
                <div className="job">
                  <h3>{experience.title}</h3>
                  <p>{experience.summary}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
