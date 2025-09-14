import "./Menu.css";

const menu = [
  { title: "Portfolio", href: "#" },
  { title: "Projects", href: "#projects" },
  { title: "Experience", href: "#experience" },
  { title: "Education", href: "#education" },
  { title: "Soft Skills", href: "#soft-skills" },
  { title: "Tech Skills", href: "#tech-skills" },
  { title: "Contact", href: "#contact" }
];

export default function Menu() {
  return (<>
      <div className="menu">
        <ul className="menu-list">
          {menu.map((menuOption, index) => (
            <li key={index} className="menu-option">
              <a href={menuOption.href}>{menuOption.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <a href="#" className="back-button">
        <span className="material-icons">
          keyboard_double_arrow_up
        </span>
      </a>
    </>
  );
};
