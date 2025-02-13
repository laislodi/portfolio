import "./Header.css";

export default function Header({name, aboutMe}) {
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
}

