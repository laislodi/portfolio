import "./Skills.css";

export default function Skills({skills, ...props}) {
  const title = props.id === "soft-skills" ? "Soft Skills" : "Tech Skills";
  const titleLinkClass = props.className === "soft-skills" ? "soft-skill-title-link" : "tech-skill-title-link";

  return (
    <section id={props.id}>
      <div className="max-width">
        <a href={"#".concat(props.id)} className={titleLinkClass}>
          <h1>{title}</h1>
        </a>
        <ul>
          {skills.map(skill => (
            <li key={skill.title}>
              <div className="skill-container">
                <img src={skill.image} alt={skill.title} />
              </div>
              <div className="skill-details">
                <h4>{skill.title}</h4>
                {skill.description ? <p>{skill.description}</p> : null}
              </div>
            </li>)
          )}
        </ul>
      </div>
    </section>
  )
}
