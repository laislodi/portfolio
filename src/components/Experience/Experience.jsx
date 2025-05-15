import PropTypes from 'prop-types';
import "./Experience.css";

export function formatDate(date) {
  if (!date) return "No given Date";
  if (!date.from || !date.to) return "";
  const from = `${date.from.month} ${date.from.year}`;
  const to = `${date.to.month} ${date.to.year}`;
  return `${from} to ${to}`;
};

export function formatLocation(location) {
  if (!location) return "";
  const region = location.state || location.province || "";
  let str = [location.city, region, location.country].filter(Boolean).join(', ');
  if (location.type) str += ` (${location.type})`;
  return str;
}

/**
 * Renders a section displaying a Timeline of Job Experiences
 * @param {JobExperience[]} jobExperiences - Array of JobExperience Objects. 
 */
export default function Experience({ jobExperiences = [] }) {
  return (
    <section id="experience">
      <a href="#experience" className="title-link">
        <h1 id="timeline">Experience</h1>
      </a>
      <div id="exp-max-width">
        <ul>
          {jobExperiences && jobExperiences.map((experience, index) => (
            <li key={`exp-${index}`}>
              <div className="line">
                <div className="where-when">
                  <h3>{experience.company}</h3>
                  <p className="date">{formatDate(experience.date)}</p> 
                  <p className="place">{formatLocation(experience.location)}</p>
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

Experience.propTypes = {
  jobExperiences: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      date: PropTypes.shape({
        from: PropTypes.shape({
          month: PropTypes.string.isRequired,
          year: PropTypes.string.isRequired,
        }),
        to: PropTypes.shape({
          month: PropTypes.string.isRequired,
          year: PropTypes.string.isRequired,
        }),
      }),
      location: PropTypes.shape({
        city: PropTypes.string,
        state: PropTypes.string,
        province: PropTypes.string,
        country: PropTypes.string,
        type: PropTypes.string,
      }),
      title: PropTypes.string.isRequired,
      summary: PropTypes.string,
    })
  ),
};
