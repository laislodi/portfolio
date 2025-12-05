import "./Header.css";
import { useIntlayer } from "react-intlayer";

export default function Header() {
  const content = useIntlayer("header_content");
  
  return (
    <header id="home">
      <div className="profile">
        <div className="profile-image"></div>
        <div className="profile-info">
          <h1>{content.name}</h1>
          <h3>{content.title}</h3>
          <p>{content.summary}</p>
          <div className="about-me-buttons">
            <a href="#projects" className="button about-me">{content.aboutMe}</a>
            <a href={"https://www.linkedin.com/in/laislodi/"} target="_blank" className="button linkedIn">LinkedIn</a>
          </div>
        </div>
      </div>
    </header>
  )
};
