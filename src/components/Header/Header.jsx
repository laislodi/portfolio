import "./Header.css";
import { RESUME } from "../../assets/data/resume.js";

export default function Header() {
  const name = RESUME.name;
  const aboutMe = RESUME.about;
  
  return (
    <header id="home">
      <div className="profile">
        <div className="profile-image"></div>
        <div className="profile-info">
          <h1>{name}</h1>
          <h3>Full Stack Developer</h3>
          <p>{aboutMe}</p>
          <a href="#projects" className="button about-me">About me</a>
        </div>
      </div>
    </header>
  )
};
