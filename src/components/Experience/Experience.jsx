import "./Experience.css";

export default function Experience({ jobExperiences }) {
  return (
    <section id="experience">
      <a href="#experience" className="title-link">
        <h1 id="timeline">Experience</h1>
      </a>
      <div id="exp-max-width">
        <ul>
          {jobExperiences && jobExperiences.map((experience, index) => {
            const strDateFrom = experience.date ? `${experience.date.from.month} ${experience.date.from.year}` : "";
            const strDateTo = experience.date ? `${experience.date.to.month} ${experience.date.to.year}` : "";
            const strDate = experience.date ? `${strDateFrom} to ${strDateTo}` : "No date given";
            let strLocation = experience.location ?
                `${experience.location.city}, ${experience.location.state ? 
                        experience.location.state : experience.location.province}, ${experience.location.country}` :
                "";
            if (experience.location && experience.location.type) {
              strLocation += ` (${experience.location.type})`
            }
            return (
            <li key={"exp-".concat(index.toString())}>
              <div className="line">
                <div className="where-when">
                  <h3>{experience.company}</h3>
                  <p className="date">{strDate}</p> 
                  <p className="place">{strLocation}</p>
                </div>
                <div className="job">
                  <h3>{experience.title}</h3>
                  {experience.summary && <p>{experience.summary}</p>}
                </div>
              </div>
            </li>
          )})}
        </ul>
      </div>
    </section>
  );
};
