import "./Education.css";
import { RESUME } from "../../assets/data/resume.js";


export default function Education() {
  const education = RESUME.education;
  const certifications = RESUME.certifications;

  return (
    <section id="education">
      <div className="max-width">
        <a href="#education" className="education-title">
          <h1>Education</h1>
        </a>
        <ul className="education-list">
          {education.map((ed, index) => {
            return (<li key={"education-".concat(index.toString())}>
              <h2>{ed.name}</h2>
              <h3>{ed.type}</h3>
              <h4>{ed.institution} {ed.year}</h4>
            </li>
          )})}
        </ul>
        <h2>Certifications</h2>
        <ul className="certification-list">
          {certifications.map((cert, index) => {
            return <li key={"certification-".concat(index.toString())}>
              <h2>{cert.name}</h2>
              <h3>{cert.issuedBy}</h3>
              <h4>{cert.issued}</h4>
            </li>
          })}
        </ul>
      </div>
    </section>
  )
};

