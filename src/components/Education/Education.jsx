import { useIntlayer } from "react-intlayer";
import { Level } from "../../assets/languageLevel";
import "./Education.css";

const SKILLS = ["reading", "writing", "speaking", "listening"];

const LEVEL_SCORE = {
  [Level.BASIC]:          20,
  [Level.INTERMEDIATE]:   40,
  [Level.CONVERSATIONAL]: 60,
  [Level.PROFICIENT]:     80,
  [Level.FLUENT]:         90,
  [Level.NATIVE]:        100,
};

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
                <h4>{ed.institution} {ed.year}</h4>
              </li>
            ))}
          </ul>
        )}

        {content.certifications?.length > 0 && (
          <>
            <h2>{content.certificationTitle}</h2>
            <ul className="certification-list">
              {content.certifications.map((cert, index) => (
                <li key={`certification-${index}`}>
                  <h2>{cert.name}</h2>
                  <h3>{cert.issuedBy}</h3>
                  <h4><span>{cert.issued.month}</span> <span>{cert.issued.year}</span></h4>
                </li>
              ))}
            </ul>
          </>
        )}

        {content.languages?.length > 0 && (
          <>
            <h2 className="languages-section-title">{content.languagesTitle}</h2>
            <ul className="language-list">
              {content.languages.map((lang, index) => (
                <li key={`language-${index}`} className="language-card">
                  <h3 className="lang-name">{lang.name}</h3>

                  <div className="lang-overall">
                    <div className="lang-bar-header">
                      <span className="lang-skill-label">{content.skillLabels.overall}</span>
                      <span className="lang-level-badge">{content.levelLabels[lang.overall.value]}</span>
                    </div>
                    <div className="lang-bar-track lang-bar-track--overall">
                      <div className="lang-bar-fill" style={{ width: `${LEVEL_SCORE[lang.overall.value]}%` }} />
                    </div>
                  </div>

                  <div className="lang-skills">
                    {SKILLS.map(skill => {
                      const key = lang[skill].value;
                      return (
                        <div key={skill} className="lang-skill">
                          <span className="lang-skill-label">{content.skillLabels[skill]}</span>
                          <div className="lang-bar-track">
                            <div className="lang-bar-fill" style={{ width: `${LEVEL_SCORE[key]}%` }} />
                          </div>
                          <span className="lang-skill-level">{content.levelLabels[key]}</span>
                        </div>
                      );
                    })}
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}
