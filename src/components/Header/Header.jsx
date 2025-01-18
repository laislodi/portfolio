import "./Header.css";

export default function Header() {
  return (
    <header id="home">
      <div className="profile">
        <div className="profile-image"></div>
        <div className="profile-info">
          <h1>Lais Gabrielle Lodi</h1>
          <h3>Full Stack Developer</h3>
          <p>Full Stack Developer with 5+ years of experience building large-scale web applications. Proficient in ReactJS, Javascript, HTML, and CSS. Also knowledgeble in Java, Python, Relational databases, Docker, Jenkins, Linux environments and AWS A strong advocate for best practices. Collaborative and data-driven, passionate about delivering high-quality, user-centred solutions in dynamic environments.</p>
          <a href="#projects" className="button about-me">About me</a>
        </div>
      </div>
    </header>
  )
}

