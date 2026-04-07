import { useIntlayer } from "react-intlayer";
import "./Education.css";

export default function Education() {
  const content = useIntlayer("education_content");
  
  return (
    <section id="education">
      <div className="max-width">
        <a href="#education" className="education-title">
          <h1>{content.educationTitle}</h1>
        </a>
        {content.education?.length > 0 && (
          <ul className="education-list">
            {content.education.map((ed, index) => (
              <li key={`education-${index}`}>
                <h2>{ed.course}</h2>
                <h3>{ed.type}</h3>
                <h4>
                  {ed.institution} {ed.year}
                </h4>
              </li>
            ))}
          </ul>
        )}
        { content.certifications && content.certifications.length !== 0 && 
          (<>
            <h2>{content.certificationTitle}</h2>
            <ul className="certification-list">
              {content.certifications.map((cert, index) => {
                return <li key={"certification-".concat(index.toString())}>
                  <h2>{cert.name}</h2>
                  <h3>{cert.issuedBy}</h3>
                  <h4><span>{cert.issued.month}</span> <span>{cert.issued.year}</span></h4>
                </li>
              })}
            </ul>
          </>)
        }
      </div>
    </section>
  )
};

