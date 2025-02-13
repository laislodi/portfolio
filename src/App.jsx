import Header from "./components/Header/Header.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Education from "./components/Education/Education.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Fragment } from "react/jsx-runtime";
import { RESUME } from "./assets/data/resume.js";

export default function App() {
  
  return (
    <Fragment>
      <Header name={RESUME.name} aboutMe={RESUME.about} />
      <Menu />
      <Projects />
      <Experience />
      <Education />
      <Skills typeOfSkill="soft" />
      <Skills typeOfSkill="tech" />
      <Footer/>
    </Fragment>
  );
}
