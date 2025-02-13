import Header from "./components/Header/Header.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Education from "./components/Education/Education.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Fragment } from "react/jsx-runtime";
import { RESUME } from "./assets/data/resume.js";
import { SKILLS } from "./assets/data/data.js";

export default function App() {
  
  return (
    <Fragment>
      <Header name={RESUME.name} aboutMe={RESUME.about} />
      <Menu />
      <Projects projects={RESUME.projects} />
      <Experience jobExperiences={RESUME.jobExperience} />
      <Education education={RESUME.education} certifications={RESUME.certifications} />
      <Skills
        skills={SKILLS.soft}
        className="soft-skills"
        id="soft-skills"
      />
      <Skills
        skills={SKILLS.tech}
        className="tech-skills"
        id="tech-skills"
      />
      <Footer/>
    </Fragment>
  );
}
