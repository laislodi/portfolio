import "./Menu.css";

export default function Menu() {
  return (<>
      <div className="menu">
        <ul className="menu-list">
          <li className="menu-option">
            <a href="#">Portfolio</a>
          </li>
          <li className="menu-option">
            <a href="#projects">Projects</a>
          </li>
          <li className="menu-option">
            <a href="#experience">Experience</a>
          </li>
          <li className="menu-option">
            <a href="#education">Education</a>
          </li>
          <li className="menu-option">
            <a href="#soft-skills">Soft Skills</a>
          </li>
          <li className="menu-option">
            <a href="#tech-skills">Tech Skills</a>
          </li>
          <li className="menu-option">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <a href="#" className="back-button">
        <span class="material-icons">
          keyboard_double_arrow_up
        </span>
      </a>
    </>
  );
};
