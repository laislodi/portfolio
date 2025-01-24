import "./Menu.css";


export default function Menu() {


  return (<>
      <div className="menu">
        <ul className="menu-list">
          <a href="#portfolio">
            <li className="menu-option">Portfolio</li>
          </a>
          <a href="#projects">
            <li className="menu-option">Projects</li>
          </a>
          <a href="#experience">
            <li className="menu-option">Experience</li>
          </a>
          <a href="#education">
            <li className="menu-option">Education</li>
          </a>
          <a href="#soft-skills">
            <li className="menu-option">Soft Skills</li>
          </a>
          <a href="#tech-skills">
            <li className="menu-option">Tech Skills</li>
          </a>
          <a href="#contact">
            <li className="menu-option">Contact</li>
          </a>
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
