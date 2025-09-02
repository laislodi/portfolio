import "./Header.css";
import { RESUME } from "../../assets/data/resume.js";

export default function Header() {
  const name = RESUME.name;
  const aboutMe = RESUME.about;
  const linkedIn = RESUME.medias.LinkedIn;
  
  return (
    <header id="home">
      <div className="profile">
        <div className="profile-image"></div>
        <div className="profile-info">
          <h1>{name}</h1>
          <h3>Full Stack Developer</h3>
          <p>{aboutMe}</p>
          <div className="about-me-buttons">
            <a href="#projects" className="button about-me">About me</a>
            <a href={linkedIn} target="_blank" className="button linkedIn">LinkedIn</a>
          </div>
        </div>
      </div>
    </header>
  )
};
